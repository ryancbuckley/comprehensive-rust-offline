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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="index.html">Ласкаво просимо в Comprehensive Rust 🦀</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running-the-course.html"><strong aria-hidden="true">1.</strong> Проведення курсу</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running-the-course/course-structure.html"><strong aria-hidden="true">1.1.</strong> Структура курсу</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running-the-course/keyboard-shortcuts.html"><strong aria-hidden="true">1.2.</strong> Гарячі клавіші</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running-the-course/translations.html"><strong aria-hidden="true">1.3.</strong> Переклади</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="cargo.html"><strong aria-hidden="true">2.</strong> Використання Cargo</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="cargo/rust-ecosystem.html"><strong aria-hidden="true">2.1.</strong> Екосистема Rust</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="cargo/code-samples.html"><strong aria-hidden="true">2.2.</strong> Приклади коду</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="cargo/running-locally.html"><strong aria-hidden="true">2.3.</strong> Локальний запуск Cargo</a></span></li></ol><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><li class="part-title">День 1: Ранок</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="welcome-day-1.html"><strong aria-hidden="true">3.</strong> Ласкаво просимо</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hello-world.html"><strong aria-hidden="true">4.</strong> Hello World!</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hello-world/what-is-rust.html"><strong aria-hidden="true">4.1.</strong> Що таке Rust?</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hello-world/benefits.html"><strong aria-hidden="true">4.2.</strong> Переваги Rust</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hello-world/playground.html"><strong aria-hidden="true">4.3.</strong> Ігровий майданчик</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types-and-values.html"><strong aria-hidden="true">5.</strong> Типи та значення</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types-and-values/hello-world.html"><strong aria-hidden="true">5.1.</strong> Hello World!</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types-and-values/variables.html"><strong aria-hidden="true">5.2.</strong> Змінні</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types-and-values/values.html"><strong aria-hidden="true">5.3.</strong> Значення</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types-and-values/arithmetic.html"><strong aria-hidden="true">5.4.</strong> Арифметика</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types-and-values/inference.html"><strong aria-hidden="true">5.5.</strong> Виведення типів</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types-and-values/exercise.html"><strong aria-hidden="true">5.6.</strong> Вправа: Фібоначчі</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types-and-values/solution.html"><strong aria-hidden="true">5.6.1.</strong> Рішення</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics.html"><strong aria-hidden="true">6.</strong> Основи потоку керування</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/if.html"><strong aria-hidden="true">6.1.</strong> Вирази if</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/loops.html"><strong aria-hidden="true">6.2.</strong> Цикли</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/loops/for.html"><strong aria-hidden="true">6.2.1.</strong> for</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/loops/loop.html"><strong aria-hidden="true">6.2.2.</strong> loop</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/break-continue.html"><strong aria-hidden="true">6.3.</strong> break та continue</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/break-continue/labels.html"><strong aria-hidden="true">6.3.1.</strong> Мітки</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/blocks-and-scopes.html"><strong aria-hidden="true">6.4.</strong> Блоки та області застосування</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/blocks-and-scopes/scopes.html"><strong aria-hidden="true">6.4.1.</strong> Області видимості та затінення</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/functions.html"><strong aria-hidden="true">6.5.</strong> Функції</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/macros.html"><strong aria-hidden="true">6.6.</strong> Макроси</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/exercise.html"><strong aria-hidden="true">6.7.</strong> Вправа: Послідовність Коллатца</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/solution.html"><strong aria-hidden="true">6.7.1.</strong> Рішення</a></span></li></ol></li></ol><li class="chapter-item "><li class="part-title">День 1: Полудень</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="welcome-day-1-afternoon.html"><strong aria-hidden="true">7.</strong> Ласкаво просимо</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="tuples-and-arrays.html"><strong aria-hidden="true">8.</strong> Кортежі та масиви</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="tuples-and-arrays/arrays.html"><strong aria-hidden="true">8.1.</strong> Масиви</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="tuples-and-arrays/tuples.html"><strong aria-hidden="true">8.2.</strong> Кортежі</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="tuples-and-arrays/iteration.html"><strong aria-hidden="true">8.3.</strong> Ітерація масиву</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="tuples-and-arrays/destructuring.html"><strong aria-hidden="true">8.4.</strong> Патерни та деструктуризація</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="tuples-and-arrays/exercise.html"><strong aria-hidden="true">8.5.</strong> Вправа: Вкладені масиви</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="tuples-and-arrays/solution.html"><strong aria-hidden="true">8.5.1.</strong> Рішення</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="references.html"><strong aria-hidden="true">9.</strong> Посилання</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="references/shared.html"><strong aria-hidden="true">9.1.</strong> Спільні посилання</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="references/exclusive.html"><strong aria-hidden="true">9.2.</strong> Ексклюзивні посилання</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="references/slices.html"><strong aria-hidden="true">9.3.</strong> Зрізи</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="references/strings.html"><strong aria-hidden="true">9.4.</strong> Рядки</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="references/exercise.html"><strong aria-hidden="true">9.5.</strong> Вправа: Геометрія</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="references/solution.html"><strong aria-hidden="true">9.5.1.</strong> Рішення</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="user-defined-types.html"><strong aria-hidden="true">10.</strong> Типи, які визначаються користувачем</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="user-defined-types/named-structs.html"><strong aria-hidden="true">10.1.</strong> Іменовані структури</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="user-defined-types/tuple-structs.html"><strong aria-hidden="true">10.2.</strong> Кортежні структури</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="user-defined-types/enums.html"><strong aria-hidden="true">10.3.</strong> Перелічувані типи</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="user-defined-types/const.html"><strong aria-hidden="true">10.4.</strong> Константи</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="user-defined-types/static.html"><strong aria-hidden="true">10.5.</strong> Статика</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="user-defined-types/aliases.html"><strong aria-hidden="true">10.6.</strong> Псевдоніми типу</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="user-defined-types/exercise.html"><strong aria-hidden="true">10.7.</strong> Вправа: події в ліфті</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="user-defined-types/solution.html"><strong aria-hidden="true">10.7.1.</strong> Рішення</a></span></li></ol></li></ol><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><li class="part-title">День 2: Ранок</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="welcome-day-2.html"><strong aria-hidden="true">11.</strong> Ласкаво просимо</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="pattern-matching.html"><strong aria-hidden="true">12.</strong> Зіставлення зразків</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="pattern-matching/match.html"><strong aria-hidden="true">12.1.</strong> Співставлення значень</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="pattern-matching/destructuring-structs.html"><strong aria-hidden="true">12.2.</strong> Деструктурування структур</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="pattern-matching/destructuring-enums.html"><strong aria-hidden="true">12.3.</strong> Деструктурування переліків</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="pattern-matching/let-control-flow.html"><strong aria-hidden="true">12.4.</strong> Потік контролю Let</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="pattern-matching/exercise.html"><strong aria-hidden="true">12.5.</strong> Вправа: обчислення виразу</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="pattern-matching/solution.html"><strong aria-hidden="true">12.5.1.</strong> Рішення</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="methods-and-traits.html"><strong aria-hidden="true">13.</strong> Методи та Трейти</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="methods-and-traits/methods.html"><strong aria-hidden="true">13.1.</strong> Методи</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="methods-and-traits/traits.html"><strong aria-hidden="true">13.2.</strong> Трейти</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="methods-and-traits/traits/implementing.html"><strong aria-hidden="true">13.2.1.</strong> Реалізація трейтів</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="methods-and-traits/traits/supertraits.html"><strong aria-hidden="true">13.2.2.</strong> Супертрейти</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="methods-and-traits/traits/associated-types.html"><strong aria-hidden="true">13.2.3.</strong> Асоційовані типи</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="methods-and-traits/deriving.html"><strong aria-hidden="true">13.3.</strong> Виведення</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="methods-and-traits/exercise.html"><strong aria-hidden="true">13.4.</strong> Вправа: Загальний логгер</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="methods-and-traits/solution.html"><strong aria-hidden="true">13.4.1.</strong> Рішення</a></span></li></ol></li></ol><li class="chapter-item "><li class="part-title">День 2: Полудень</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="welcome-day-2-afternoon.html"><strong aria-hidden="true">14.</strong> Ласкаво просимо</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="generics.html"><strong aria-hidden="true">15.</strong> Узагальнені типи</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="generics/generic-functions.html"><strong aria-hidden="true">15.1.</strong> Узагальнені функції</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="generics/generic-data.html"><strong aria-hidden="true">15.2.</strong> Узагальнені типи даних</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="generics/generic-traits.html"><strong aria-hidden="true">15.3.</strong> Узагальнені трейти</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="generics/trait-bounds.html"><strong aria-hidden="true">15.4.</strong> Обмеження трейту</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="generics/impl-trait.html"><strong aria-hidden="true">15.5.</strong> impl Trait</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="generics/dyn-trait.html"><strong aria-hidden="true">15.6.</strong> dyn Trait</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="generics/exercise.html"><strong aria-hidden="true">15.7.</strong> Вправа: узагальнена min</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="generics/solution.html"><strong aria-hidden="true">15.7.1.</strong> Рішення</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-types.html"><strong aria-hidden="true">16.</strong> Типи стандартної бібліотеки</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-types/std.html"><strong aria-hidden="true">16.1.</strong> Стандартна бібліотека</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-types/docs.html"><strong aria-hidden="true">16.2.</strong> Документація</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-types/option.html"><strong aria-hidden="true">16.3.</strong> Option</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-types/result.html"><strong aria-hidden="true">16.4.</strong> Result</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-types/string.html"><strong aria-hidden="true">16.5.</strong> String</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-types/vec.html"><strong aria-hidden="true">16.6.</strong> Vec</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-types/hashmap.html"><strong aria-hidden="true">16.7.</strong> HashMap</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-types/exercise.html"><strong aria-hidden="true">16.8.</strong> Вправа: Лічильник</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-types/solution.html"><strong aria-hidden="true">16.8.1.</strong> Рішення</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-traits.html"><strong aria-hidden="true">17.</strong> Трейти стандартної бібліотеки</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-traits/comparisons.html"><strong aria-hidden="true">17.1.</strong> Порівняння</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-traits/operators.html"><strong aria-hidden="true">17.2.</strong> Оператори</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-traits/from-and-into.html"><strong aria-hidden="true">17.3.</strong> From та Into</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-traits/casting.html"><strong aria-hidden="true">17.4.</strong> Приведення</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-traits/read-and-write.html"><strong aria-hidden="true">17.5.</strong> Read та Write</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-traits/default.html"><strong aria-hidden="true">17.6.</strong> Default, синтаксис оновлення структури</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-traits/closures.html"><strong aria-hidden="true">17.7.</strong> Закриття</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-traits/exercise.html"><strong aria-hidden="true">17.8.</strong> Вправа: ROT13</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-traits/solution.html"><strong aria-hidden="true">17.8.1.</strong> Рішення</a></span></li></ol></li></ol><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><li class="part-title">День 3: Ранок</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="welcome-day-3.html"><strong aria-hidden="true">18.</strong> Ласкаво просимо</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-management.html"><strong aria-hidden="true">19.</strong> Управління пам&#39;яттю</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-management/review.html"><strong aria-hidden="true">19.1.</strong> Огляд пам&#39;яті програми</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-management/approaches.html"><strong aria-hidden="true">19.2.</strong> Підходи до управління пам&#39;яттю</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-management/ownership.html"><strong aria-hidden="true">19.3.</strong> Володіння</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-management/move.html"><strong aria-hidden="true">19.4.</strong> Семантика переміщення</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-management/clone.html"><strong aria-hidden="true">19.5.</strong> Clone</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-management/copy-types.html"><strong aria-hidden="true">19.6.</strong> Типи які копіюються</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-management/drop.html"><strong aria-hidden="true">19.7.</strong> Drop</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-management/exercise.html"><strong aria-hidden="true">19.8.</strong> Вправа: Тип будівельника</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-management/solution.html"><strong aria-hidden="true">19.8.1.</strong> Рішення</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="smart-pointers.html"><strong aria-hidden="true">20.</strong> Розумні вказівники</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="smart-pointers/box.html"><strong aria-hidden="true">20.1.</strong> Box&lt;T&gt;</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="smart-pointers/rc.html"><strong aria-hidden="true">20.2.</strong> Rc</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="smart-pointers/trait-objects.html"><strong aria-hidden="true">20.3.</strong> Принадлежні об&#39;єкти трейтів</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="smart-pointers/exercise.html"><strong aria-hidden="true">20.4.</strong> Вправа: Бінарне дерево</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="smart-pointers/solution.html"><strong aria-hidden="true">20.4.1.</strong> Рішення</a></span></li></ol></li></ol><li class="chapter-item "><li class="part-title">День 3: Полудень</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="welcome-day-3-afternoon.html"><strong aria-hidden="true">21.</strong> Ласкаво просимо</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="borrowing.html"><strong aria-hidden="true">22.</strong> Запозичення</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="borrowing/shared.html"><strong aria-hidden="true">22.1.</strong> Запозичення значення</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="borrowing/borrowck.html"><strong aria-hidden="true">22.2.</strong> Перевірка запозичення</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="borrowing/examples.html"><strong aria-hidden="true">22.3.</strong> Помилки запозичення</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="borrowing/interior-mutability.html"><strong aria-hidden="true">22.4.</strong> Внутрішня мутабельність</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="borrowing/exercise.html"><strong aria-hidden="true">22.5.</strong> Вправа: Статистика здоров’я</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="borrowing/solution.html"><strong aria-hidden="true">22.5.1.</strong> Рішення</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lifetimes.html"><strong aria-hidden="true">23.</strong> Тривалість життя</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lifetimes/lifetime-annotations.html"><strong aria-hidden="true">23.1.</strong> Анотації тривалісті життя</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lifetimes/lifetime-elision.html"><strong aria-hidden="true">23.2.</strong> Упущення тривалісті життя</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lifetimes/struct-lifetimes.html"><strong aria-hidden="true">23.3.</strong> Тривалість життя структур</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lifetimes/exercise.html"><strong aria-hidden="true">23.4.</strong> Вправа: Розбір Protobuf</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lifetimes/solution.html"><strong aria-hidden="true">23.4.1.</strong> Рішення</a></span></li></ol></li></ol><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><li class="part-title">День 4: Ранок</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="welcome-day-4.html"><strong aria-hidden="true">24.</strong> Ласкаво просимо</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="iterators.html"><strong aria-hidden="true">25.</strong> Ітератори</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="iterators/iterator.html"><strong aria-hidden="true">25.1.</strong> Ітератор</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="iterators/intoiterator.html"><strong aria-hidden="true">25.2.</strong> IntoIterator</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="iterators/fromiterator.html"><strong aria-hidden="true">25.3.</strong> FromIterator</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="iterators/exercise.html"><strong aria-hidden="true">25.4.</strong> Вправа: ланцюжок методів ітератора</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="iterators/solution.html"><strong aria-hidden="true">25.4.1.</strong> Рішення</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="modules.html"><strong aria-hidden="true">26.</strong> Модулі</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="modules/modules.html"><strong aria-hidden="true">26.1.</strong> Модулі</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="modules/filesystem.html"><strong aria-hidden="true">26.2.</strong> Ієрархія файлової системи</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="modules/visibility.html"><strong aria-hidden="true">26.3.</strong> Видимість</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="modules/paths.html"><strong aria-hidden="true">26.4.</strong> use, super, self</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="modules/exercise.html"><strong aria-hidden="true">26.5.</strong> Вправа: Модулі для бібліотеки графічного інтерфейсу користувача</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="modules/solution.html"><strong aria-hidden="true">26.5.1.</strong> Рішення</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="testing.html"><strong aria-hidden="true">27.</strong> Тестування</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="testing/unit-tests.html"><strong aria-hidden="true">27.1.</strong> Тестові модулі</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="testing/other.html"><strong aria-hidden="true">27.2.</strong> Інші типи тестів</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="testing/lints.html"><strong aria-hidden="true">27.3.</strong> Лінти компілятора та Clippy</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="testing/exercise.html"><strong aria-hidden="true">27.4.</strong> Вправа: Алгоритм Луна</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="testing/solution.html"><strong aria-hidden="true">27.4.1.</strong> Рішення</a></span></li></ol></li></ol><li class="chapter-item "><li class="part-title">День 4: Полудень</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="welcome-day-4-afternoon.html"><strong aria-hidden="true">28.</strong> Ласкаво просимо</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="error-handling.html"><strong aria-hidden="true">29.</strong> Обробка помилок</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="error-handling/panics.html"><strong aria-hidden="true">29.1.</strong> Паніки</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="error-handling/result.html"><strong aria-hidden="true">29.2.</strong> Result</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="error-handling/try.html"><strong aria-hidden="true">29.3.</strong> Оператор спроб</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="error-handling/try-conversions.html"><strong aria-hidden="true">29.4.</strong> Перетворення спроб</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="error-handling/error.html"><strong aria-hidden="true">29.5.</strong> Error трейт</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="error-handling/thiserror.html"><strong aria-hidden="true">29.6.</strong> thiserror</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="error-handling/anyhow.html"><strong aria-hidden="true">29.7.</strong> anyhow</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="error-handling/exercise.html"><strong aria-hidden="true">29.8.</strong> Вправа: Переписування с Result</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="error-handling/solution.html"><strong aria-hidden="true">29.8.1.</strong> Рішення</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="unsafe-rust.html"><strong aria-hidden="true">30.</strong> Небезпечний Rust</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="unsafe-rust/unsafe.html"><strong aria-hidden="true">30.1.</strong> Unsafe</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="unsafe-rust/dereferencing.html"><strong aria-hidden="true">30.2.</strong> Розіменування &quot;сирих&quot; вказівників</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="unsafe-rust/mutable-static.html"><strong aria-hidden="true">30.3.</strong> Несталі статичні змінні</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="unsafe-rust/unions.html"><strong aria-hidden="true">30.4.</strong> Об&#39;єднання</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="unsafe-rust/unsafe-functions.html"><strong aria-hidden="true">30.5.</strong> Небезпечні функції</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="unsafe-rust/unsafe-traits.html"><strong aria-hidden="true">30.6.</strong> Небезпечні трейти</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="unsafe-rust/exercise.html"><strong aria-hidden="true">30.7.</strong> Вправа: обгортка FFI</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="unsafe-rust/solution.html"><strong aria-hidden="true">30.7.1.</strong> Рішення</a></span></li></ol></li></ol><li class="chapter-item "><li class="part-title">Android</li></li><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android.html"><strong aria-hidden="true">31.</strong> Ласкаво просимо</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/setup.html"><strong aria-hidden="true">32.</strong> Установка</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/build-rules.html"><strong aria-hidden="true">33.</strong> Правила побудови</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/build-rules/binary.html"><strong aria-hidden="true">33.1.</strong> Бінарний файл</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/build-rules/library.html"><strong aria-hidden="true">33.2.</strong> Бібліотека</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl.html"><strong aria-hidden="true">34.</strong> AIDL</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/birthday-service.html"><strong aria-hidden="true">34.1.</strong> Посібник із сервісу Birthday</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/example-service/interface.html"><strong aria-hidden="true">34.1.1.</strong> Інтерфейс</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/example-service/service-bindings.html"><strong aria-hidden="true">34.1.2.</strong> API сервісу</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/example-service/service.html"><strong aria-hidden="true">34.1.3.</strong> Сервіс</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/example-service/server.html"><strong aria-hidden="true">34.1.4.</strong> Сервер</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/example-service/deploy.html"><strong aria-hidden="true">34.1.5.</strong> Розгортка</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/example-service/client.html"><strong aria-hidden="true">34.1.6.</strong> Кліент</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/example-service/changing-definition.html"><strong aria-hidden="true">34.1.7.</strong> Зміна API</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/example-service/changing-implementation.html"><strong aria-hidden="true">34.1.8.</strong> Оновлення реалізацій</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/types.html"><strong aria-hidden="true">34.2.</strong> AIDL типи</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/types/primitives.html"><strong aria-hidden="true">34.2.1.</strong> Примітивні типи</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/types/arrays.html"><strong aria-hidden="true">34.2.2.</strong> Типи Масивів</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/types/objects.html"><strong aria-hidden="true">34.2.3.</strong> Надсилання об&#39;єктів</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/types/parcelables.html"><strong aria-hidden="true">34.2.4.</strong> Посилкові данні</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/types/file-descriptor.html"><strong aria-hidden="true">34.2.5.</strong> Надсилання файлів</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/testing.html"><strong aria-hidden="true">35.</strong> Тестування</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/testing/googletest.html"><strong aria-hidden="true">35.1.</strong> GoogleTest</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/testing/mocking.html"><strong aria-hidden="true">35.2.</strong> Mocking</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/logging.html"><strong aria-hidden="true">36.</strong> Журналювання</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability.html"><strong aria-hidden="true">37.</strong> Інтероперабельність</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/with-c.html"><strong aria-hidden="true">37.1.</strong> З С</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/with-c/bindgen.html"><strong aria-hidden="true">37.1.1.</strong> Виклик С за допомогою Bindgen</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/with-c/rust.html"><strong aria-hidden="true">37.1.2.</strong> Виклик Rust з C</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp.html"><strong aria-hidden="true">37.2.</strong> З С++</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/bridge.html"><strong aria-hidden="true">37.2.1.</strong> Модуль Bridge</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/rust-bridge.html"><strong aria-hidden="true">37.2.2.</strong> Rust Bridge</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/generated-cpp.html"><strong aria-hidden="true">37.2.3.</strong> Згенерований C++</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/cpp-bridge.html"><strong aria-hidden="true">37.2.4.</strong> C++ Bridge</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/shared-types.html"><strong aria-hidden="true">37.2.5.</strong> Спільні типи</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/shared-enums.html"><strong aria-hidden="true">37.2.6.</strong> Спільні переліки</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/rust-result.html"><strong aria-hidden="true">37.2.7.</strong> Обробка помилок в Rust</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/cpp-exception.html"><strong aria-hidden="true">37.2.8.</strong> Обробка помилок в C++</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/type-mapping.html"><strong aria-hidden="true">37.2.9.</strong> Додаткові типи</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/android-build-cpp.html"><strong aria-hidden="true">37.2.10.</strong> Збірка для Android: C++</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/android-cpp-genrules.html"><strong aria-hidden="true">37.2.11.</strong> Збірка для Android: Genrules</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/android-build-rust.html"><strong aria-hidden="true">37.2.12.</strong> Збірка для Android: Rust</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/java.html"><strong aria-hidden="true">37.3.</strong> З Java</a></span></li></ol><li class="chapter-item "><li class="part-title">Chromium</li></li><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium.html"><strong aria-hidden="true">38.</strong> Ласкаво просимо</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/setup.html"><strong aria-hidden="true">39.</strong> Установка</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/cargo.html"><strong aria-hidden="true">40.</strong> Порівняння екосистем Chromium і Cargo</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/policy.html"><strong aria-hidden="true">41.</strong> Політика</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/build-rules.html"><strong aria-hidden="true">42.</strong> Правила побудови</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/build-rules/unsafe.html"><strong aria-hidden="true">42.1.</strong> Небезпечний код</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/build-rules/depending.html"><strong aria-hidden="true">42.2.</strong> Залежнісь Chromium C++ від коду Rust</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/build-rules/vscode.html"><strong aria-hidden="true">42.3.</strong> Visual Studio Code</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/chromium/build-rules.html"><strong aria-hidden="true">42.4.</strong> Вправа</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/testing.html"><strong aria-hidden="true">43.</strong> Тестування</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/testing/rust-gtest-interop.html"><strong aria-hidden="true">43.1.</strong> Бібліотека rust_gtest_interop</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/testing/build-gn.html"><strong aria-hidden="true">43.2.</strong> Правила GN для тестів Rust</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/testing/chromium-import-macro.html"><strong aria-hidden="true">43.3.</strong> Макрос chromium::import!</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/chromium/testing.html"><strong aria-hidden="true">43.4.</strong> Вправа</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/interoperability-with-cpp.html"><strong aria-hidden="true">44.</strong> Взаємодія з C++</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/interoperability-with-cpp/example-bindings.html"><strong aria-hidden="true">44.1.</strong> Приклади прив&#39;язок</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/interoperability-with-cpp/limitations-of-cxx.html"><strong aria-hidden="true">44.2.</strong> Обмеження CXX</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/interoperability-with-cpp/error-handling.html"><strong aria-hidden="true">44.3.</strong> Обробка помилок в CXX</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/interoperability-with-cpp/error-handling-qr.html"><strong aria-hidden="true">44.3.1.</strong> Обробка помилок: приклад QR</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/interoperability-with-cpp/error-handling-png.html"><strong aria-hidden="true">44.3.2.</strong> Обробка помилок: приклад PNG</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/interoperability-with-cpp/using-cxx-in-chromium.html"><strong aria-hidden="true">44.4.</strong> Використання CXX у Chromium</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/chromium/interoperability-with-cpp.html"><strong aria-hidden="true">44.5.</strong> Вправа</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates.html"><strong aria-hidden="true">45.</strong> Додавання крейтів третіх сторін</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/configuring-cargo-toml.html"><strong aria-hidden="true">45.1.</strong> Налаштування Cargo.toml</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/configuring-gnrt-config-toml.html"><strong aria-hidden="true">45.2.</strong> Налаштування gnrt_config.toml</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/downloading-crates.html"><strong aria-hidden="true">45.3.</strong> Завантаження крейтів</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/generating-gn-build-rules.html"><strong aria-hidden="true">45.4.</strong> Створення правил побудови gn</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/resolving-problems.html"><strong aria-hidden="true">45.5.</strong> Вирішення проблем</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/resolving-problems/build-scripts-which-generate-code.html"><strong aria-hidden="true">45.5.1.</strong> Скрипти збірки, які генерують код</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/resolving-problems/build-scripts-which-take-arbitrary-actions.html"><strong aria-hidden="true">45.5.2.</strong> Скрипти збірки, які будують C++ або виконують довільні дії</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/depending-on-a-crate.html"><strong aria-hidden="true">45.6.</strong> Залежнісь від крейта</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/reviews-and-audits.html"><strong aria-hidden="true">45.7.</strong> Перевірки та аудити</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/checking-in.html"><strong aria-hidden="true">45.8.</strong> Реєстрація в Chromium Source Code</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/keeping-up-to-date.html"><strong aria-hidden="true">45.9.</strong> Підтримання крейтів в актуальному стані</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/chromium/third-party.html"><strong aria-hidden="true">45.10.</strong> Вправа</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/chromium/bringing-it-together.html"><strong aria-hidden="true">46.</strong> Зібрання усього разом - вправа</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/chromium/solutions.html"><strong aria-hidden="true">47.</strong> Рішення вправ</a></span></li><li class="chapter-item "><li class="part-title">Залізо: Ранок</li></li><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal.html"><strong aria-hidden="true">48.</strong> Ласкаво просимо</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/no_std.html"><strong aria-hidden="true">49.</strong> no_std</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/minimal.html"><strong aria-hidden="true">49.1.</strong> Мінімальний приклад</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/alloc.html"><strong aria-hidden="true">49.2.</strong> alloc</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/microcontrollers.html"><strong aria-hidden="true">50.</strong> Мікроконтролери</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/microcontrollers/mmio.html"><strong aria-hidden="true">50.1.</strong> Сирий ввід вивід з відображеної пам&#39;яті (MMIO)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/microcontrollers/pacs.html"><strong aria-hidden="true">50.2.</strong> Крейти доступу до периферійних пристроїв (PACs)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/microcontrollers/hals.html"><strong aria-hidden="true">50.3.</strong> Крейти абстракції обладнання (HAL)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/microcontrollers/board-support.html"><strong aria-hidden="true">50.4.</strong> Крейти підтримки плат</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/microcontrollers/type-state.html"><strong aria-hidden="true">50.5.</strong> Шаблон стану типу</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/microcontrollers/embedded-hal.html"><strong aria-hidden="true">50.6.</strong> embedded-hal</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/microcontrollers/probe-rs.html"><strong aria-hidden="true">50.7.</strong> probe-rs та cargo-embed</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/microcontrollers/debugging.html"><strong aria-hidden="true">50.7.1.</strong> Налагодження</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/microcontrollers/other-projects.html"><strong aria-hidden="true">50.8.</strong> Інші проєкти</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/bare-metal/morning.html"><strong aria-hidden="true">51.</strong> Вправи</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/bare-metal/compass.html"><strong aria-hidden="true">51.1.</strong> Компас</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/bare-metal/solutions-morning.html"><strong aria-hidden="true">51.2.</strong> Рішення</a></span></li></ol><li class="chapter-item "><li class="part-title">Залізо: Полудень</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps.html"><strong aria-hidden="true">52.</strong> Прикладні процесори</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/entry-point.html"><strong aria-hidden="true">52.1.</strong> Підготовка до Rust</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/inline-assembly.html"><strong aria-hidden="true">52.2.</strong> Вбудована збірка</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/mmio.html"><strong aria-hidden="true">52.3.</strong> Ввід вивід з відображеної пам&#39;яті (MMIO)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/uart.html"><strong aria-hidden="true">52.4.</strong> Давайте напишемо драйвер UART</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/uart/traits.html"><strong aria-hidden="true">52.4.1.</strong> Більше трейтів</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/better-uart.html"><strong aria-hidden="true">52.5.</strong> Кращий драйвер UART</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/better-uart/bitflags.html"><strong aria-hidden="true">52.5.1.</strong> Бітові прапорці (крейт bitflags)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/better-uart/registers.html"><strong aria-hidden="true">52.5.2.</strong> Кілька регістрів</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/better-uart/driver.html"><strong aria-hidden="true">52.5.3.</strong> Драйвер</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/better-uart/using.html"><strong aria-hidden="true">52.5.4.</strong> Використання</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/logging.html"><strong aria-hidden="true">52.6.</strong> Журналювання</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/logging/using.html"><strong aria-hidden="true">52.6.1.</strong> Використання</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/exceptions.html"><strong aria-hidden="true">52.7.</strong> Виключення</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/other-projects.html"><strong aria-hidden="true">52.8.</strong> Інші проєкти</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/useful-crates.html"><strong aria-hidden="true">53.</strong> Корисні крейти</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/useful-crates/zerocopy.html"><strong aria-hidden="true">53.1.</strong> zerocopy</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/useful-crates/aarch64-paging.html"><strong aria-hidden="true">53.2.</strong> aarch64-paging</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/useful-crates/buddy_system_allocator.html"><strong aria-hidden="true">53.3.</strong> buddy_system_allocator</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/useful-crates/tinyvec.html"><strong aria-hidden="true">53.4.</strong> tinyvec</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/useful-crates/spin.html"><strong aria-hidden="true">53.5.</strong> spin</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/android.html"><strong aria-hidden="true">54.</strong> Залізо на Android</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/android/vmbase.html"><strong aria-hidden="true">54.1.</strong> vmbase</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/bare-metal/afternoon.html"><strong aria-hidden="true">55.</strong> Вправи</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/bare-metal/rtc.html"><strong aria-hidden="true">55.1.</strong> Драйвер годинника реального часу (RTC)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/bare-metal/solutions-afternoon.html"><strong aria-hidden="true">55.2.</strong> Рішення</a></span></li></ol><li class="chapter-item "><li class="part-title">Одночасність виконання: Ранок</li></li><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/welcome.html"><strong aria-hidden="true">56.</strong> Ласкаво просимо</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/threads.html"><strong aria-hidden="true">57.</strong> Потоки</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/threads/plain.html"><strong aria-hidden="true">57.1.</strong> Звичайні потоки</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/threads/scoped.html"><strong aria-hidden="true">57.2.</strong> Потоки з областю видимості</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/channels.html"><strong aria-hidden="true">58.</strong> Канали</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/channels/senders-receivers.html"><strong aria-hidden="true">58.1.</strong> Відправники та отримувачі</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/channels/unbounded.html"><strong aria-hidden="true">58.2.</strong> Незав&#39;язані канали</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/channels/bounded.html"><strong aria-hidden="true">58.3.</strong> Зав&#39;язані канали</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/send-sync.html"><strong aria-hidden="true">59.</strong> Send та Sync</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/send-sync/marker-traits.html"><strong aria-hidden="true">59.1.</strong> Маркерні трейти</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/send-sync/send.html"><strong aria-hidden="true">59.2.</strong> Send</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/send-sync/sync.html"><strong aria-hidden="true">59.3.</strong> Sync</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/send-sync/examples.html"><strong aria-hidden="true">59.4.</strong> Приклади</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/shared-state.html"><strong aria-hidden="true">60.</strong> Спільний стан</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/shared-state/arc.html"><strong aria-hidden="true">60.1.</strong> Arc</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/shared-state/mutex.html"><strong aria-hidden="true">60.2.</strong> Mutex</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/shared-state/example.html"><strong aria-hidden="true">60.3.</strong> Приклад</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/sync-exercises.html"><strong aria-hidden="true">61.</strong> Вправи</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/sync-exercises/dining-philosophers.html"><strong aria-hidden="true">61.1.</strong> Вечеря філософів</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/sync-exercises/link-checker.html"><strong aria-hidden="true">61.2.</strong> Перевірка багатопоточних посилань</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/sync-exercises/solutions.html"><strong aria-hidden="true">61.3.</strong> Рішення</a></span></li></ol><li class="chapter-item "><li class="part-title">Одночасність виконання: Полудень</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/welcome-async.html"><strong aria-hidden="true">62.</strong> Ласкаво просимо</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/async.html"><strong aria-hidden="true">63.</strong> Основи асинхронізації</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/async/async-await.html"><strong aria-hidden="true">63.1.</strong> async/await</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/async/futures.html"><strong aria-hidden="true">63.2.</strong> Futures</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/async/runtimes.html"><strong aria-hidden="true">63.3.</strong> Середовища виконання</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/async/runtimes/tokio.html"><strong aria-hidden="true">63.3.1.</strong> Токіо</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/async/tasks.html"><strong aria-hidden="true">63.4.</strong> Завдання</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/async-control-flow.html"><strong aria-hidden="true">64.</strong> Канали та потік управління</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/async-control-flow/channels.html"><strong aria-hidden="true">64.1.</strong> Асинхронні канали</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/async-control-flow/join.html"><strong aria-hidden="true">64.2.</strong> Join</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/async-control-flow/select.html"><strong aria-hidden="true">64.3.</strong> Select</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/async-pitfalls.html"><strong aria-hidden="true">65.</strong> Підводні камені</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/async-pitfalls/blocking-executor.html"><strong aria-hidden="true">65.1.</strong> Блокування Виконавця</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/async-pitfalls/pin.html"><strong aria-hidden="true">65.2.</strong> Pin</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/async-pitfalls/async-traits.html"><strong aria-hidden="true">65.3.</strong> Асинхронні трейти</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/async-pitfalls/cancellation.html"><strong aria-hidden="true">65.4.</strong> Скасування</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/async-exercises.html"><strong aria-hidden="true">66.</strong> Вправи</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/async-exercises/dining-philosophers.html"><strong aria-hidden="true">66.1.</strong> Вечеря філософів</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/async-exercises/chat-app.html"><strong aria-hidden="true">66.2.</strong> Програма широкомовного чату</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/async-exercises/solutions.html"><strong aria-hidden="true">66.3.</strong> Рішення</a></span></li></ol><li class="chapter-item "><li class="part-title">Заключні слова</li></li><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="thanks.html"><strong aria-hidden="true">67.</strong> Дякую!</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="glossary.html"><strong aria-hidden="true">68.</strong> Глосарій</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="other-resources.html"><strong aria-hidden="true">69.</strong> Інші ресурси</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="credits.html"><strong aria-hidden="true">70.</strong> Кредити</a></span></li></ol>';
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

