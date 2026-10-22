// Click Run on examples of one page of the built course in headless Chrome
// and print what each shows.
//
//   node offline/tests/browser-test.mjs [--page types-and-values/hello-world.html]
//       [--block N]... [--all] [--url http://127.0.0.1:8001/]
//
// It also reports whether each response from play.rust-lang.org came from the
// service worker (the example ran in the browser) or from the network.
// (Blocking the URL in DevTools would not show this: DevTools blocks the
// request before the service worker sees it.) Needs the book served
// (offline/serve.sh) and Chrome.

import process from "node:process";
import { launch, runPlayground, waitForOfflinePlayground } from "./cdp.mjs";

const args = process.argv.slice(2);
const opt = (name, dflt) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : dflt;
};
const base = opt("url", "http://127.0.0.1:8001/");
const path = opt("page", "types-and-values/hello-world.html");
const blocks = args.flatMap((a, i) => (a === "--block" ? [Number(args[i + 1])] : []));

const page = await launch();
const executes = [];
page.on((method, p) => {
  if (method === "Runtime.consoleAPICalled" && ["error", "warning"].includes(p.type)) {
    console.log(`[console.${p.type}]`, p.args.map((a) => a.value ?? a.description).join(" "));
  }
  if (method === "Network.responseReceived" && p.response.url === "https://play.rust-lang.org/execute") {
    executes.push(!!p.response.fromServiceWorker);
  }
});

const t0 = Date.now();
await page.navigate(new URL(path, base).href);
const n = await waitForOfflinePlayground(page);
console.log(`[${((Date.now() - t0) / 1000).toFixed(1)} s] ${path}: ${n} playgrounds, running in the browser`);

let failures = 0;
const which = args.includes("--all") ? [...Array(n).keys()] : blocks.length ? blocks : [0];
for (const i of which) {
  const res = await runPlayground(page, i);
  if (!res) {
    console.log(`#${i}: no Run button`);
    continue;
  }
  if (/^Playground Communication/.test(res.stdout)) failures++;
  console.log(`---- #${i} (${res.seconds.toFixed(2)} s)\n${res.stdout}${res.stderr ? `\n[stderr]\n${res.stderr}` : ""}`);
}
const fromNetwork = executes.filter((sw) => !sw).length;
console.log(`/execute responses: ${executes.length}, from the service worker: ${executes.length - fromNetwork}, from the network: ${fromNetwork}`);
if (fromNetwork) failures++;
await page.close();
process.exit(failures ? 1 : 0);
