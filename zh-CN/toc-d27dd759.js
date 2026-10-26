// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="index.html">欢迎来到 Comprehensive Rust 🦀</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running-the-course.html"><strong aria-hidden="true">1.</strong> 授课</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running-the-course/course-structure.html"><strong aria-hidden="true">1.1.</strong> 课程结构</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running-the-course/keyboard-shortcuts.html"><strong aria-hidden="true">1.2.</strong> 键盘快捷键</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running-the-course/translations.html"><strong aria-hidden="true">1.3.</strong> 翻译</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="cargo.html"><strong aria-hidden="true">2.</strong> 使用 Cargo</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="cargo/rust-ecosystem.html"><strong aria-hidden="true">2.1.</strong> Rust 生态系统</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="cargo/code-samples.html"><strong aria-hidden="true">2.2.</strong> 代码示例</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="cargo/running-locally.html"><strong aria-hidden="true">2.3.</strong> 在本地运行 Cargo</a></span></li></ol><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><li class="part-title">第一天：上午</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="welcome-day-1.html"><strong aria-hidden="true">3.</strong> 欢迎</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hello-world.html"><strong aria-hidden="true">4.</strong> Hello, World</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hello-world/what-is-rust.html"><strong aria-hidden="true">4.1.</strong> 什么是 Rust？</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hello-world/benefits.html"><strong aria-hidden="true">4.2.</strong> Rust 的优势</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hello-world/playground.html"><strong aria-hidden="true">4.3.</strong> Playground</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types-and-values.html"><strong aria-hidden="true">5.</strong> 类型和值</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types-and-values/hello-world.html"><strong aria-hidden="true">5.1.</strong> Hello, World</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types-and-values/variables.html"><strong aria-hidden="true">5.2.</strong> 变量</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types-and-values/values.html"><strong aria-hidden="true">5.3.</strong> 值</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types-and-values/arithmetic.html"><strong aria-hidden="true">5.4.</strong> 算术</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types-and-values/inference.html"><strong aria-hidden="true">5.5.</strong> 类型推导</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types-and-values/exercise.html"><strong aria-hidden="true">5.6.</strong> 练习：Fibonacci</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types-and-values/solution.html"><strong aria-hidden="true">5.6.1.</strong> 解答</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics.html"><strong aria-hidden="true">6.</strong> 控制流基础</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/if.html"><strong aria-hidden="true">6.1.</strong> if 表达式</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/loops.html"><strong aria-hidden="true">6.2.</strong> 循环控制</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/loops/for.html"><strong aria-hidden="true">6.2.1.</strong> for</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/loops/loop.html"><strong aria-hidden="true">6.2.2.</strong> loop</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/break-continue.html"><strong aria-hidden="true">6.3.</strong> break 和 continue</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/break-continue/labels.html"><strong aria-hidden="true">6.3.1.</strong> Labels</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/blocks-and-scopes.html"><strong aria-hidden="true">6.4.</strong> 代码块和作用域</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/blocks-and-scopes/scopes.html"><strong aria-hidden="true">6.4.1.</strong> 作用域和遮蔽（Shadowing）</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/functions.html"><strong aria-hidden="true">6.5.</strong> 函数</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/macros.html"><strong aria-hidden="true">6.6.</strong> 宏</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/exercise.html"><strong aria-hidden="true">6.7.</strong> 练习：考拉兹序列</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/solution.html"><strong aria-hidden="true">6.7.1.</strong> 解答</a></span></li></ol></li></ol><li class="chapter-item "><li class="part-title">第一天：下午</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="welcome-day-1-afternoon.html"><strong aria-hidden="true">7.</strong> 欢迎</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="tuples-and-arrays.html"><strong aria-hidden="true">8.</strong> 元组和数组</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="tuples-and-arrays/arrays.html"><strong aria-hidden="true">8.1.</strong> 数组（Arrays）</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="tuples-and-arrays/tuples.html"><strong aria-hidden="true">8.2.</strong> 元组（Tuples）</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="tuples-and-arrays/iteration.html"><strong aria-hidden="true">8.3.</strong> 数组迭代</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="tuples-and-arrays/destructuring.html"><strong aria-hidden="true">8.4.</strong> 解构</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="tuples-and-arrays/exercise.html"><strong aria-hidden="true">8.5.</strong> 练习：嵌套数组</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="tuples-and-arrays/solution.html"><strong aria-hidden="true">8.5.1.</strong> 解答</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="references.html"><strong aria-hidden="true">9.</strong> 引用</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="references/shared.html"><strong aria-hidden="true">9.1.</strong> 共享引用</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="references/exclusive.html"><strong aria-hidden="true">9.2.</strong> 独占引用</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="references/slices.html"><strong aria-hidden="true">9.3.</strong> Slices: &amp;&#92;[T&#92;]</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="references/strings.html"><strong aria-hidden="true">9.4.</strong> 字符串</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="references/exercise.html"><strong aria-hidden="true">9.5.</strong> 练习：几何图形</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="references/solution.html"><strong aria-hidden="true">9.5.1.</strong> 解答</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="user-defined-types.html"><strong aria-hidden="true">10.</strong> 用户定义的类型</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="user-defined-types/named-structs.html"><strong aria-hidden="true">10.1.</strong> 结构体</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="user-defined-types/tuple-structs.html"><strong aria-hidden="true">10.2.</strong> 元组结构体</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="user-defined-types/enums.html"><strong aria-hidden="true">10.3.</strong> 枚举</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="user-defined-types/static.html"><strong aria-hidden="true">10.4.</strong> static</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="user-defined-types/const.html"><strong aria-hidden="true">10.5.</strong> 常量</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="user-defined-types/aliases.html"><strong aria-hidden="true">10.6.</strong> 类型别名</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="user-defined-types/exercise.html"><strong aria-hidden="true">10.7.</strong> 练习：电梯事件</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="user-defined-types/solution.html"><strong aria-hidden="true">10.7.1.</strong> 解答</a></span></li></ol></li></ol><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><li class="part-title">第二天：上午</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="welcome-day-2.html"><strong aria-hidden="true">11.</strong> 欢迎</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="pattern-matching.html"><strong aria-hidden="true">12.</strong> 模式匹配</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="pattern-matching/match.html"><strong aria-hidden="true">12.1.</strong> Matching Values</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="pattern-matching/destructuring.html"><strong aria-hidden="true">12.2.</strong> 解构</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="pattern-matching/let-control-flow.html"><strong aria-hidden="true">12.3.</strong> let 控制流</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="pattern-matching/exercise.html"><strong aria-hidden="true">12.4.</strong> 练习：表达式求值</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="pattern-matching/solution.html"><strong aria-hidden="true">12.4.1.</strong> 解答</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="methods-and-traits.html"><strong aria-hidden="true">13.</strong> 方法和特征</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="methods-and-traits/methods.html"><strong aria-hidden="true">13.1.</strong> 方法</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="methods-and-traits/traits.html"><strong aria-hidden="true">13.2.</strong> 特征（Trait）</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="methods-and-traits/traits/implementing.html"><strong aria-hidden="true">13.2.1.</strong> 实现 Unsafe Trait</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="methods-and-traits/traits/supertraits.html"><strong aria-hidden="true">13.2.2.</strong> 更多 trait</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="methods-and-traits/traits/associated-types.html"><strong aria-hidden="true">13.2.3.</strong> 共享类型</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="methods-and-traits/deriving.html"><strong aria-hidden="true">13.3.</strong> 派生特征</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="methods-and-traits/exercise.html"><strong aria-hidden="true">13.4.</strong> 练习：通用日志</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="methods-and-traits/solution.html"><strong aria-hidden="true">13.4.1.</strong> 解答</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="generics.html"><strong aria-hidden="true">14.</strong> 泛型</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="generics/generic-functions.html"><strong aria-hidden="true">14.1.</strong> 泛型函数</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="generics/generic-data.html"><strong aria-hidden="true">14.2.</strong> 泛型类型</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="generics/generic-traits.html"><strong aria-hidden="true">14.3.</strong> 泛型</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="generics/trait-bounds.html"><strong aria-hidden="true">14.4.</strong> 特征边界</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="generics/impl-trait.html"><strong aria-hidden="true">14.5.</strong> impl Trait</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="generics/exercise.html"><strong aria-hidden="true">14.6.</strong> 练习：通用 min 函数</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="generics/solution.html"><strong aria-hidden="true">14.6.1.</strong> 解答</a></span></li></ol></li></ol><li class="chapter-item "><li class="part-title">第二天：下午</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="welcome-day-2-afternoon.html"><strong aria-hidden="true">15.</strong> 欢迎</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-types.html"><strong aria-hidden="true">16.</strong> 标准库类型</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-types/std.html"><strong aria-hidden="true">16.1.</strong> 标准库</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-types/docs.html"><strong aria-hidden="true">16.2.</strong> 文档</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-types/option.html"><strong aria-hidden="true">16.3.</strong> Option</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-types/result.html"><strong aria-hidden="true">16.4.</strong> Result</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-types/string.html"><strong aria-hidden="true">16.5.</strong> String</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-types/vec.html"><strong aria-hidden="true">16.6.</strong> Vec</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-types/hashmap.html"><strong aria-hidden="true">16.7.</strong> HashMap</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-types/exercise.html"><strong aria-hidden="true">16.8.</strong> 练习：计数器</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-types/solution.html"><strong aria-hidden="true">16.8.1.</strong> 解答</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-traits.html"><strong aria-hidden="true">17.</strong> 标准库特征</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-traits/comparisons.html"><strong aria-hidden="true">17.1.</strong> 比较</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-traits/operators.html"><strong aria-hidden="true">17.2.</strong> 运算符</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-traits/from-and-into.html"><strong aria-hidden="true">17.3.</strong> From 和 Into</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-traits/casting.html"><strong aria-hidden="true">17.4.</strong> 类型转换</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-traits/read-and-write.html"><strong aria-hidden="true">17.5.</strong> Read 和 Write</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-traits/default.html"><strong aria-hidden="true">17.6.</strong> Default，结构体更新语法</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-traits/closures.html"><strong aria-hidden="true">17.7.</strong> 闭包</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-traits/exercise.html"><strong aria-hidden="true">17.8.</strong> 练习：ROT13</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-traits/solution.html"><strong aria-hidden="true">17.8.1.</strong> 解答</a></span></li></ol></li></ol><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><li class="part-title">第三天：上午</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="welcome-day-3.html"><strong aria-hidden="true">18.</strong> 欢迎</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-management.html"><strong aria-hidden="true">19.</strong> 内存管理</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-management/review.html"><strong aria-hidden="true">19.1.</strong> 回顾：程序的内存分配</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-management/approaches.html"><strong aria-hidden="true">19.2.</strong> 内存管理方法</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-management/ownership.html"><strong aria-hidden="true">19.3.</strong> 所有权</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-management/move.html"><strong aria-hidden="true">19.4.</strong> 移动语义</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-management/clone.html"><strong aria-hidden="true">19.5.</strong> Clone</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-management/copy-types.html"><strong aria-hidden="true">19.6.</strong> 复合类型</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-management/drop.html"><strong aria-hidden="true">19.7.</strong> Drop</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-management/exercise.html"><strong aria-hidden="true">19.8.</strong> 练习：构建器类型</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-management/solution.html"><strong aria-hidden="true">19.8.1.</strong> 解答</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="smart-pointers.html"><strong aria-hidden="true">20.</strong> 智能指针</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="smart-pointers/box.html"><strong aria-hidden="true">20.1.</strong> Box&lt;T&gt;</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="smart-pointers/rc.html"><strong aria-hidden="true">20.2.</strong> Rc</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="smart-pointers/trait-objects.html"><strong aria-hidden="true">20.3.</strong> 特征对象</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="smart-pointers/exercise.html"><strong aria-hidden="true">20.4.</strong> 练习：二叉树</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="smart-pointers/solution.html"><strong aria-hidden="true">20.4.1.</strong> 解答</a></span></li></ol></li></ol><li class="chapter-item "><li class="part-title">第三天：下午</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="welcome-day-3-afternoon.html"><strong aria-hidden="true">21.</strong> 欢迎</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="borrowing.html"><strong aria-hidden="true">22.</strong> 借用</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="borrowing/shared.html"><strong aria-hidden="true">22.1.</strong> 借用值</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="borrowing/borrowck.html"><strong aria-hidden="true">22.2.</strong> 借用检查</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="borrowing/interior-mutability.html"><strong aria-hidden="true">22.3.</strong> 内部可变性</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="borrowing/exercise.html"><strong aria-hidden="true">22.4.</strong> 练习：健康统计</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="borrowing/solution.html"><strong aria-hidden="true">22.4.1.</strong> 解答</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lifetimes.html"><strong aria-hidden="true">23.</strong> 结构体生命周期</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lifetimes/lifetime-annotations.html"><strong aria-hidden="true">23.1.</strong> 生命周期注解</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lifetimes/lifetime-elision.html"><strong aria-hidden="true">23.2.</strong> 生命周期省略</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lifetimes/struct-lifetimes.html"><strong aria-hidden="true">23.3.</strong> 结构体生命周期</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lifetimes/exercise.html"><strong aria-hidden="true">23.4.</strong> 练习：Protobuf 解析</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lifetimes/solution.html"><strong aria-hidden="true">23.4.1.</strong> 解答</a></span></li></ol></li></ol><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><li class="part-title">第四天：上午</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="welcome-day-4.html"><strong aria-hidden="true">24.</strong> 欢迎</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="iterators.html"><strong aria-hidden="true">25.</strong> 迭代器</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="iterators/iterator.html"><strong aria-hidden="true">25.1.</strong> Iterator</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="iterators/intoiterator.html"><strong aria-hidden="true">25.2.</strong> IntoIterator</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="iterators/fromiterator.html"><strong aria-hidden="true">25.3.</strong> FromIterator</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="iterators/exercise.html"><strong aria-hidden="true">25.4.</strong> 练习：迭代器方法链</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="iterators/solution.html"><strong aria-hidden="true">25.4.1.</strong> 解答</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="modules.html"><strong aria-hidden="true">26.</strong> 模块</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="modules/modules.html"><strong aria-hidden="true">26.1.</strong> 模块</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="modules/filesystem.html"><strong aria-hidden="true">26.2.</strong> 文件系统层级结构</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="modules/visibility.html"><strong aria-hidden="true">26.3.</strong> 可见性</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="modules/paths.html"><strong aria-hidden="true">26.4.</strong> use、super、self</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="modules/exercise.html"><strong aria-hidden="true">26.5.</strong> 练习：面向 GUI 库的模块</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="modules/solution.html"><strong aria-hidden="true">26.5.1.</strong> 解答</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="testing.html"><strong aria-hidden="true">27.</strong> 测试</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="testing/unit-tests.html"><strong aria-hidden="true">27.1.</strong> 测试模块</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="testing/other.html"><strong aria-hidden="true">27.2.</strong> 其他类型的测试</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="testing/lints.html"><strong aria-hidden="true">27.3.</strong> 编译器 Lint 和 Clippy</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="testing/exercise.html"><strong aria-hidden="true">27.4.</strong> 练习：卢恩算法</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="testing/solution.html"><strong aria-hidden="true">27.4.1.</strong> 解答</a></span></li></ol></li></ol><li class="chapter-item "><li class="part-title">第四天：下午</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="welcome-day-4-afternoon.html"><strong aria-hidden="true">28.</strong> 欢迎</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="error-handling.html"><strong aria-hidden="true">29.</strong> 错误处理</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="error-handling/panics.html"><strong aria-hidden="true">29.1.</strong> Panics</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="error-handling/try.html"><strong aria-hidden="true">29.2.</strong> 尝试运算符</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="error-handling/try-conversions.html"><strong aria-hidden="true">29.3.</strong> 尝试转换</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="error-handling/error.html"><strong aria-hidden="true">29.4.</strong> Error 特征</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="error-handling/thiserror-and-anyhow.html"><strong aria-hidden="true">29.5.</strong> thiserror 和 anyhow</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="error-handling/exercise.html"><strong aria-hidden="true">29.6.</strong> 练习：使用 Result 进行重写</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="error-handling/solution.html"><strong aria-hidden="true">29.6.1.</strong> 解答</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="unsafe-rust.html"><strong aria-hidden="true">30.</strong> 不安全 Rust</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="unsafe-rust/unsafe.html"><strong aria-hidden="true">30.1.</strong> Unsafe</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="unsafe-rust/dereferencing.html"><strong aria-hidden="true">30.2.</strong> 解引用裸指针</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="unsafe-rust/mutable-static.html"><strong aria-hidden="true">30.3.</strong> 可变的静态变量</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="unsafe-rust/unions.html"><strong aria-hidden="true">30.4.</strong> 联合体</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="unsafe-rust/unsafe-functions.html"><strong aria-hidden="true">30.5.</strong> Unsafe 函数</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="unsafe-rust/unsafe-traits.html"><strong aria-hidden="true">30.6.</strong> Unsafe 特征</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="unsafe-rust/exercise.html"><strong aria-hidden="true">30.7.</strong> 练习：FFI 封装容器</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="unsafe-rust/solution.html"><strong aria-hidden="true">30.7.1.</strong> 解答</a></span></li></ol></li></ol><li class="chapter-item "><li class="part-title">Android</li></li><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android.html"><strong aria-hidden="true">31.</strong> 欢迎</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/setup.html"><strong aria-hidden="true">32.</strong> 设置</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/build-rules.html"><strong aria-hidden="true">33.</strong> 构建规则</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/build-rules/binary.html"><strong aria-hidden="true">33.1.</strong> 可执行文件</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/build-rules/library.html"><strong aria-hidden="true">33.2.</strong> 库</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl.html"><strong aria-hidden="true">34.</strong> AIDL</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/birthday-service.html"><strong aria-hidden="true">34.1.</strong> /&#92;*&#92;* Birthday service interface. &#92;*/</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/example-service/interface.html"><strong aria-hidden="true">34.1.1.</strong> 接口</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/example-service/service-bindings.html"><strong aria-hidden="true">34.1.2.</strong> Service API</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/example-service/service.html"><strong aria-hidden="true">34.1.3.</strong> 服务器</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/example-service/server.html"><strong aria-hidden="true">34.1.4.</strong> 服务器</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/example-service/deploy.html"><strong aria-hidden="true">34.1.5.</strong> 部署</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/example-service/client.html"><strong aria-hidden="true">34.1.6.</strong> 客户端</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/example-service/changing-definition.html"><strong aria-hidden="true">34.1.7.</strong> 更改 API</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/example-service/changing-implementation.html"><strong aria-hidden="true">34.1.8.</strong> 实现</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/types.html"><strong aria-hidden="true">34.2.</strong> 类型</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/types/primitives.html"><strong aria-hidden="true">34.2.1.</strong> Primitive Types</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/types/arrays.html"><strong aria-hidden="true">34.2.2.</strong> 数组（Arrays）</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/types/objects.html"><strong aria-hidden="true">34.2.3.</strong> 特征对象</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/types/parcelables.html"><strong aria-hidden="true">34.2.4.</strong> 变量</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/types/file-descriptor.html"><strong aria-hidden="true">34.2.5.</strong> Sending Files</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/testing.html"><strong aria-hidden="true">35.</strong> 测试</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/testing/googletest.html"><strong aria-hidden="true">35.1.</strong> GoogleTest</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/testing/mocking.html"><strong aria-hidden="true">35.2.</strong> 模拟</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/logging.html"><strong aria-hidden="true">36.</strong> 日志记录</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability.html"><strong aria-hidden="true">37.</strong> 互操作性</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/with-c.html"><strong aria-hidden="true">37.1.</strong> 与 C 语言交互</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/with-c/bindgen.html"><strong aria-hidden="true">37.1.1.</strong> 使用 Bindgen 调用 C 语言</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/with-c/rust.html"><strong aria-hidden="true">37.1.2.</strong> 从 C 语言调用 Rust 语言</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp.html"><strong aria-hidden="true">37.2.</strong> 与 C++ 交互</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/bridge.html"><strong aria-hidden="true">37.2.1.</strong> 桥接模块</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/rust-bridge.html"><strong aria-hidden="true">37.2.2.</strong> Rust 桥接</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/generated-cpp.html"><strong aria-hidden="true">37.2.3.</strong> 生成的 C++ 代码</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/cpp-bridge.html"><strong aria-hidden="true">37.2.4.</strong> C++ 桥接</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/shared-types.html"><strong aria-hidden="true">37.2.5.</strong> 共享类型</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/shared-enums.html"><strong aria-hidden="true">37.2.6.</strong> 共享枚举</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/rust-result.html"><strong aria-hidden="true">37.2.7.</strong> Rust 错误处理</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/cpp-exception.html"><strong aria-hidden="true">37.2.8.</strong> C++ 错误处理</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/type-mapping.html"><strong aria-hidden="true">37.2.9.</strong> 其他类型</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/android-build-cpp.html"><strong aria-hidden="true">37.2.10.</strong> 为 Android 构建：C++</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/android-cpp-genrules.html"><strong aria-hidden="true">37.2.11.</strong> 为 Android 构建：Genrule</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/android-build-rust.html"><strong aria-hidden="true">37.2.12.</strong> 为 Android 构建：Rust</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/java.html"><strong aria-hidden="true">37.3.</strong> 与 Java 交互</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/android/morning.html"><strong aria-hidden="true">38.</strong> 习题</a></span></li><li class="chapter-item "><li class="part-title">Chromium</li></li><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium.html"><strong aria-hidden="true">39.</strong> 欢迎</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/setup.html"><strong aria-hidden="true">40.</strong> 设置</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/cargo.html"><strong aria-hidden="true">41.</strong> Chromium 和 Cargo 的生态对比</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/policy.html"><strong aria-hidden="true">42.</strong> 政策</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/build-rules.html"><strong aria-hidden="true">43.</strong> 构建规则</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/build-rules/unsafe.html"><strong aria-hidden="true">43.1.</strong> 不安全代码</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/build-rules/depending.html"><strong aria-hidden="true">43.2.</strong> 在 Chromium C++ 中导入 Rust 代码</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/build-rules/vscode.html"><strong aria-hidden="true">43.3.</strong> Visual Studio Code</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/chromium/build-rules.html"><strong aria-hidden="true">43.4.</strong> 练习</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/testing.html"><strong aria-hidden="true">44.</strong> 测试</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/testing/rust-gtest-interop.html"><strong aria-hidden="true">44.1.</strong> rust_gtest_interop 库</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/testing/build-gn.html"><strong aria-hidden="true">44.2.</strong> Rust 测试的 GN 规则</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/testing/chromium-import-macro.html"><strong aria-hidden="true">44.3.</strong> chromium::import! 宏</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/chromium/testing.html"><strong aria-hidden="true">44.4.</strong> 练习</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/interoperability-with-cpp.html"><strong aria-hidden="true">45.</strong> 与 C++ 的互操作性</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/interoperability-with-cpp/example-bindings.html"><strong aria-hidden="true">45.1.</strong> 绑定示例</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/interoperability-with-cpp/limitations-of-cxx.html"><strong aria-hidden="true">45.2.</strong> CXX 的局限性</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/interoperability-with-cpp/error-handling.html"><strong aria-hidden="true">45.3.</strong> CXX 错误处理</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/interoperability-with-cpp/error-handling-qr.html"><strong aria-hidden="true">45.3.1.</strong> 错误处理：QR 码示例</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/interoperability-with-cpp/error-handling-png.html"><strong aria-hidden="true">45.3.2.</strong> 错误处理：PNG 示例</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/interoperability-with-cpp/using-cxx-in-chromium.html"><strong aria-hidden="true">45.4.</strong> 在 Chromium 中使用 CXX</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/chromium/interoperability-with-cpp.html"><strong aria-hidden="true">45.5.</strong> 练习</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates.html"><strong aria-hidden="true">46.</strong> 添加第三方 Crate</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/configuring-cargo-toml.html"><strong aria-hidden="true">46.1.</strong> 配置 Cargo.toml</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/configuring-gnrt-config-toml.html"><strong aria-hidden="true">46.2.</strong> 配置 gnrt_config.toml</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/downloading-crates.html"><strong aria-hidden="true">46.3.</strong> 下载 Crate</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/generating-gn-build-rules.html"><strong aria-hidden="true">46.4.</strong> 生成 gn 构建规则</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/resolving-problems.html"><strong aria-hidden="true">46.5.</strong> 解决问题</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/resolving-problems/build-scripts-which-generate-code.html"><strong aria-hidden="true">46.5.1.</strong> 构建用于生成代码的脚本</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/resolving-problems/build-scripts-which-take-arbitrary-actions.html"><strong aria-hidden="true">46.5.2.</strong> 构建用于构建 C++ 或执行任意操作的脚本</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/depending-on-a-crate.html"><strong aria-hidden="true">46.6.</strong> 依赖于 Crate</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/reviews-and-audits.html"><strong aria-hidden="true">46.7.</strong> 审查和审核</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/checking-in.html"><strong aria-hidden="true">46.8.</strong> 提交到 Chromium 源代码</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/keeping-up-to-date.html"><strong aria-hidden="true">46.9.</strong> 及时更新 Crate</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/chromium/third-party.html"><strong aria-hidden="true">46.10.</strong> 练习</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/chromium/bringing-it-together.html"><strong aria-hidden="true">47.</strong> 综合应用练习</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/chromium/solutions.html"><strong aria-hidden="true">48.</strong> 练习解答</a></span></li><li class="chapter-item "><li class="part-title">裸机：上午</li></li><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal.html"><strong aria-hidden="true">49.</strong> 欢迎</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/no_std.html"><strong aria-hidden="true">50.</strong> no_std</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/minimal.html"><strong aria-hidden="true">50.1.</strong> 最小示例</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/alloc.html"><strong aria-hidden="true">50.2.</strong> alloc</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/microcontrollers.html"><strong aria-hidden="true">51.</strong> 微控制器</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/microcontrollers/mmio.html"><strong aria-hidden="true">51.1.</strong> 原始 MMIO</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/microcontrollers/pacs.html"><strong aria-hidden="true">51.2.</strong> PAC</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/microcontrollers/hals.html"><strong aria-hidden="true">51.3.</strong> HAL Crate</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/microcontrollers/board-support.html"><strong aria-hidden="true">51.4.</strong> 板级支持 Crate</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/microcontrollers/type-state.html"><strong aria-hidden="true">51.5.</strong> 类型状态模式</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/microcontrollers/embedded-hal.html"><strong aria-hidden="true">51.6.</strong> embedded-hal</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/microcontrollers/probe-rs.html"><strong aria-hidden="true">51.7.</strong> probe-rs 和 cargo-embed</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/microcontrollers/debugging.html"><strong aria-hidden="true">51.7.1.</strong> 调试</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/microcontrollers/other-projects.html"><strong aria-hidden="true">51.8.</strong> 其他项目</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/bare-metal/morning.html"><strong aria-hidden="true">52.</strong> 习题</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/bare-metal/compass.html"><strong aria-hidden="true">52.1.</strong> 罗盘</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/bare-metal/solutions-morning.html"><strong aria-hidden="true">52.2.</strong> 解答</a></span></li></ol><li class="chapter-item "><li class="part-title">裸机：下午</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps.html"><strong aria-hidden="true">53.</strong> 应用处理器</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/entry-point.html"><strong aria-hidden="true">53.1.</strong> 准备使用 Rust</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/inline-assembly.html"><strong aria-hidden="true">53.2.</strong> 内联汇编</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/mmio.html"><strong aria-hidden="true">53.3.</strong> MMIO</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/uart.html"><strong aria-hidden="true">53.4.</strong> 编写 UART 驱动程序</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/uart/traits.html"><strong aria-hidden="true">53.4.1.</strong> 更多特征</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/better-uart.html"><strong aria-hidden="true">53.5.</strong> 优化 UART 驱动程序</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/better-uart/bitflags.html"><strong aria-hidden="true">53.5.1.</strong> Bitflags</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/better-uart/registers.html"><strong aria-hidden="true">53.5.2.</strong> 多寄存器</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/better-uart/driver.html"><strong aria-hidden="true">53.5.3.</strong> 驱动程序</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/better-uart/using.html"><strong aria-hidden="true">53.5.4.</strong> 开始使用</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/logging.html"><strong aria-hidden="true">53.6.</strong> 日志记录</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/logging/using.html"><strong aria-hidden="true">53.6.1.</strong> 开始使用</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/exceptions.html"><strong aria-hidden="true">53.7.</strong> 异常</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/other-projects.html"><strong aria-hidden="true">53.8.</strong> 其他项目</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/useful-crates.html"><strong aria-hidden="true">54.</strong> 实用 Crate</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/useful-crates/zerocopy.html"><strong aria-hidden="true">54.1.</strong> zerocopy</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/useful-crates/aarch64-paging.html"><strong aria-hidden="true">54.2.</strong> aarch64-paging</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/useful-crates/buddy_system_allocator.html"><strong aria-hidden="true">54.3.</strong> buddy_system_allocator</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/useful-crates/tinyvec.html"><strong aria-hidden="true">54.4.</strong> tinyvec</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/useful-crates/spin.html"><strong aria-hidden="true">54.5.</strong> spin</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/android.html"><strong aria-hidden="true">55.</strong> Android</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/android/vmbase.html"><strong aria-hidden="true">55.1.</strong> vmbase</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/bare-metal/afternoon.html"><strong aria-hidden="true">56.</strong> 习题</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/bare-metal/rtc.html"><strong aria-hidden="true">56.1.</strong> RTC 驱动</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/bare-metal/solutions-afternoon.html"><strong aria-hidden="true">56.2.</strong> 解答</a></span></li></ol><li class="chapter-item "><li class="part-title">并发：上午</li></li><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency.html"><strong aria-hidden="true">57.</strong> 欢迎</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/threads.html"><strong aria-hidden="true">58.</strong> 线程</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/scoped-threads.html"><strong aria-hidden="true">58.1.</strong> 范围线程</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/channels.html"><strong aria-hidden="true">59.</strong> 通道</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/channels/unbounded.html"><strong aria-hidden="true">59.1.</strong> 无界通道</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/channels/bounded.html"><strong aria-hidden="true">59.2.</strong> 有界通道</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/send-sync.html"><strong aria-hidden="true">60.</strong> Send 和 Sync</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/send-sync/send.html"><strong aria-hidden="true">60.1.</strong> Send</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/send-sync/sync.html"><strong aria-hidden="true">60.2.</strong> Sync</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/send-sync/examples.html"><strong aria-hidden="true">60.3.</strong> 示例</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/shared_state.html"><strong aria-hidden="true">61.</strong> 共享状态</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/shared_state/arc.html"><strong aria-hidden="true">61.1.</strong> Arc</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/shared_state/mutex.html"><strong aria-hidden="true">61.2.</strong> 互斥器（Mutex）</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/shared_state/example.html"><strong aria-hidden="true">61.3.</strong> 示例</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/concurrency/morning.html"><strong aria-hidden="true">62.</strong> 习题</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/concurrency/dining-philosophers.html"><strong aria-hidden="true">62.1.</strong> 哲学家就餐问题</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/concurrency/link-checker.html"><strong aria-hidden="true">62.2.</strong> 多线程链接检查器</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/concurrency/solutions-morning.html"><strong aria-hidden="true">62.3.</strong> 解答</a></span></li></ol><li class="chapter-item "><li class="part-title">并发：下午</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="async.html"><strong aria-hidden="true">63.</strong> 异步基础</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="async/async-await.html"><strong aria-hidden="true">63.1.</strong> async/await</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="async/futures.html"><strong aria-hidden="true">63.2.</strong> Futures</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="async/runtimes.html"><strong aria-hidden="true">63.3.</strong> Runtimes</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="async/runtimes/tokio.html"><strong aria-hidden="true">63.3.1.</strong> Tokio</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="async/tasks.html"><strong aria-hidden="true">63.4.</strong> 任务</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="async/channels.html"><strong aria-hidden="true">63.5.</strong> 异步通道</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="async/control-flow.html"><strong aria-hidden="true">64.</strong> 控制流</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="async/control-flow/join.html"><strong aria-hidden="true">64.1.</strong> 加入</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="async/control-flow/select.html"><strong aria-hidden="true">64.2.</strong> 选择</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="async/pitfalls.html"><strong aria-hidden="true">65.</strong> 误区</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="async/pitfalls/blocking-executor.html"><strong aria-hidden="true">65.1.</strong> 阻塞执行器</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="async/pitfalls/pin.html"><strong aria-hidden="true">65.2.</strong> Pin</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="async/pitfalls/async-traits.html"><strong aria-hidden="true">65.3.</strong> 异步特征</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="async/pitfalls/cancellation.html"><strong aria-hidden="true">65.4.</strong> 消除</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/concurrency/afternoon.html"><strong aria-hidden="true">66.</strong> 习题</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/concurrency/dining-philosophers-async.html"><strong aria-hidden="true">66.1.</strong> 哲学家就餐问题</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/concurrency/chat-app.html"><strong aria-hidden="true">66.2.</strong> 广播聊天应用</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/concurrency/solutions-afternoon.html"><strong aria-hidden="true">66.3.</strong> 解答</a></span></li></ol><li class="chapter-item "><li class="part-title">结束语</li></li><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="thanks.html"><strong aria-hidden="true">67.</strong> 谢谢！</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="glossary.html"><strong aria-hidden="true">68.</strong> 词汇表</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="other-resources.html"><strong aria-hidden="true">69.</strong> 其他资源</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="credits.html"><strong aria-hidden="true">70.</strong> 鸣谢</a></span></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            // Check both with and without the '.html' suffix to be robust against pretty URLs
            if (link.href.replace(/\.html$/, '') === current_page.replace(/\.html$/, '')
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

