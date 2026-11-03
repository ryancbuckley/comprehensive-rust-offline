---
minutes: 20
---

<!--
Copyright 2024 Google LLC
SPDX-License-Identifier: CC-BY-4.0
-->

# Dining Philosophers --- Async

See [dining philosophers](../sync-exercises/dining-philosophers.md) for a
description of the problem.

As before, fill out the blanks in the code below, then run it and check that it
does not deadlock:

<!-- File src/main.rs -->

```rust,editable,compile_fail
# // Copyright 2024 Google LLC
# // SPDX-License-Identifier: Apache-2.0
#
{{#include dining-philosophers.rs:Philosopher}}
    // left_chopstick: ...
    // right_chopstick: ...
    // thoughts: ...
}

{{#include dining-philosophers.rs:Philosopher-think}}

{{#include dining-philosophers.rs:Philosopher-eat}}
{{#include dining-philosophers.rs:Philosopher-eat-body}}
{{#include dining-philosophers.rs:Philosopher-eat-end}}
    // Create chopsticks

    // Create philosophers

    // Make them think and eat

    // Output their thoughts
}
```

Since this time you are using Async Rust, note that you have to use the `Mutex`
and the `mpsc` module from the `tokio` crate.

<details>

- Can you make your implementation single-threaded?

</details>
