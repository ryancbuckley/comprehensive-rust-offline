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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="index.html">Te damos la bienvenida a Comprehensive Rust 🦀</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running-the-course.html"><strong aria-hidden="true">1.</strong> Desarrollo del curso</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running-the-course/course-structure.html"><strong aria-hidden="true">1.1.</strong> Estructura del curso</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running-the-course/keyboard-shortcuts.html"><strong aria-hidden="true">1.2.</strong> Combinaciones de teclas</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running-the-course/translations.html"><strong aria-hidden="true">1.3.</strong> Traducciones</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="cargo.html"><strong aria-hidden="true">2.</strong> Usando Cargo</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="cargo/rust-ecosystem.html"><strong aria-hidden="true">2.1.</strong> Ecosistema Rust</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="cargo/code-samples.html"><strong aria-hidden="true">2.2.</strong> Ejemplos de Código</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="cargo/running-locally.html"><strong aria-hidden="true">2.3.</strong> Ejecutar Cargo a nivel local</a></span></li></ol><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><li class="part-title">Día 1: mañana</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="welcome-day-1.html"><strong aria-hidden="true">3.</strong> Te damos la bienvenida</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hello-world.html"><strong aria-hidden="true">4.</strong> Hola, Mundo</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hello-world/what-is-rust.html"><strong aria-hidden="true">4.1.</strong> ¿Qué es Rust?</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hello-world/benefits.html"><strong aria-hidden="true">4.2.</strong> Ventajas de Rust</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hello-world/playground.html"><strong aria-hidden="true">4.3.</strong> Playground</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types-and-values.html"><strong aria-hidden="true">5.</strong> Tipos y valores</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types-and-values/hello-world.html"><strong aria-hidden="true">5.1.</strong> Hola, Mundo</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types-and-values/variables.html"><strong aria-hidden="true">5.2.</strong> Variables</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types-and-values/values.html"><strong aria-hidden="true">5.3.</strong> Valores</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types-and-values/arithmetic.html"><strong aria-hidden="true">5.4.</strong> Aritmética</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types-and-values/inference.html"><strong aria-hidden="true">5.5.</strong> Inferencia de tipos</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types-and-values/exercise.html"><strong aria-hidden="true">5.6.</strong> Ejercicio: Fibonacci</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types-and-values/solution.html"><strong aria-hidden="true">5.6.1.</strong> Solución</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics.html"><strong aria-hidden="true">6.</strong> Conceptos básicos del flujo de control</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/if.html"><strong aria-hidden="true">6.1.</strong> Expresiones if</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/loops.html"><strong aria-hidden="true">6.2.</strong> Bucles</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/loops/for.html"><strong aria-hidden="true">6.2.1.</strong> for</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/loops/loop.html"><strong aria-hidden="true">6.2.2.</strong> loop</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/break-continue.html"><strong aria-hidden="true">6.3.</strong> break y continue</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/break-continue/labels.html"><strong aria-hidden="true">6.3.1.</strong> Etiquetas</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/blocks-and-scopes.html"><strong aria-hidden="true">6.4.</strong> Bloques y ámbitos</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/blocks-and-scopes/scopes.html"><strong aria-hidden="true">6.4.1.</strong> Ámbitos y Shadowing</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/functions.html"><strong aria-hidden="true">6.5.</strong> Funciones</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/macros.html"><strong aria-hidden="true">6.6.</strong> Macros</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/exercise.html"><strong aria-hidden="true">6.7.</strong> Ejercicio: secuencia de Collatz</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/solution.html"><strong aria-hidden="true">6.7.1.</strong> Solución</a></span></li></ol></li></ol><li class="chapter-item "><li class="part-title">Día 1: Tarde</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="welcome-day-1-afternoon.html"><strong aria-hidden="true">7.</strong> Te damos la bienvenida</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="tuples-and-arrays.html"><strong aria-hidden="true">8.</strong> Tuplas y arrays</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="tuples-and-arrays/arrays.html"><strong aria-hidden="true">8.1.</strong> Arrays</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="tuples-and-arrays/tuples.html"><strong aria-hidden="true">8.2.</strong> Tuplas</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="tuples-and-arrays/iteration.html"><strong aria-hidden="true">8.3.</strong> Iteración de Arreglos (Arrays)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="tuples-and-arrays/destructuring.html"><strong aria-hidden="true">8.4.</strong> Patrones y Desestructuración</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="tuples-and-arrays/exercise.html"><strong aria-hidden="true">8.5.</strong> Ejercicio: arrays anidados</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="tuples-and-arrays/solution.html"><strong aria-hidden="true">8.5.1.</strong> Solución</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="references.html"><strong aria-hidden="true">9.</strong> Referencias</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="references/shared.html"><strong aria-hidden="true">9.1.</strong> Referencias compartidas</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="references/exclusive.html"><strong aria-hidden="true">9.2.</strong> Referencias exclusivas</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="references/slices.html"><strong aria-hidden="true">9.3.</strong> Slices: &amp;&#92;[T&#92;]</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="references/strings.html"><strong aria-hidden="true">9.4.</strong> Cadenas de texto (Strings)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="references/exercise.html"><strong aria-hidden="true">9.5.</strong> Ejercicio: geometría</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="references/solution.html"><strong aria-hidden="true">9.5.1.</strong> Solución</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="user-defined-types.html"><strong aria-hidden="true">10.</strong> Tipos definidos por el usuario</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="user-defined-types/named-structs.html"><strong aria-hidden="true">10.1.</strong> Estructuras con nombre</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="user-defined-types/tuple-structs.html"><strong aria-hidden="true">10.2.</strong> Estructuras de tuplas</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="user-defined-types/enums.html"><strong aria-hidden="true">10.3.</strong> Enumeraciones</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="user-defined-types/static.html"><strong aria-hidden="true">10.4.</strong> Estático</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="user-defined-types/const.html"><strong aria-hidden="true">10.5.</strong> Const (constantes)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="user-defined-types/aliases.html"><strong aria-hidden="true">10.6.</strong> Aliases de tipo</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="user-defined-types/exercise.html"><strong aria-hidden="true">10.7.</strong> Ejercicio: eventos de ascensor</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="user-defined-types/solution.html"><strong aria-hidden="true">10.7.1.</strong> Solución</a></span></li></ol></li></ol><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><li class="part-title">Día 2: Mañana</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="welcome-day-2.html"><strong aria-hidden="true">11.</strong> Te damos la bienvenida</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="pattern-matching.html"><strong aria-hidden="true">12.</strong> Correspondencia de Patrones</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="pattern-matching/match.html"><strong aria-hidden="true">12.1.</strong> Correspondencia de Valores</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="pattern-matching/destructuring-structs.html"><strong aria-hidden="true">12.2.</strong> Desestructurando Structs</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="pattern-matching/destructuring-enums.html"><strong aria-hidden="true">12.3.</strong> Desestructurando Enums</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="pattern-matching/let-control-flow.html"><strong aria-hidden="true">12.4.</strong> Control de Flujo Let</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="pattern-matching/exercise.html"><strong aria-hidden="true">12.5.</strong> Ejercicio: evaluación de expresiones</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="pattern-matching/solution.html"><strong aria-hidden="true">12.5.1.</strong> Solución</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="methods-and-traits.html"><strong aria-hidden="true">13.</strong> Métodos y Traits</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="methods-and-traits/methods.html"><strong aria-hidden="true">13.1.</strong> Métodos</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="methods-and-traits/traits.html"><strong aria-hidden="true">13.2.</strong> Traits</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="methods-and-traits/traits/implementing.html"><strong aria-hidden="true">13.2.1.</strong> Implementación de Traits</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="methods-and-traits/traits/supertraits.html"><strong aria-hidden="true">13.2.2.</strong> Supertraits</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="methods-and-traits/traits/associated-types.html"><strong aria-hidden="true">13.2.3.</strong> Tipos de datos asociados</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="methods-and-traits/deriving.html"><strong aria-hidden="true">13.3.</strong> Derivación de Traits</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="methods-and-traits/exercise.html"><strong aria-hidden="true">13.4.</strong> Ejercicio: registro genérico</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="methods-and-traits/solution.html"><strong aria-hidden="true">13.4.1.</strong> Solución</a></span></li></ol></li></ol><li class="chapter-item "><li class="part-title">Día 2: tarde</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="welcome-day-2-afternoon.html"><strong aria-hidden="true">14.</strong> Te damos la bienvenida</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="generics.html"><strong aria-hidden="true">15.</strong> Genéricos</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="generics/generic-functions.html"><strong aria-hidden="true">15.1.</strong> Funciones genéricas</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="generics/generic-data.html"><strong aria-hidden="true">15.2.</strong> Tipos de Datos Genéricos</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="generics/generic-traits.html"><strong aria-hidden="true">15.3.</strong> Traits Genéricos</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="generics/trait-bounds.html"><strong aria-hidden="true">15.4.</strong> Trait Bounds</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="generics/impl-trait.html"><strong aria-hidden="true">15.5.</strong> impl Trait</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="generics/dyn-trait.html"><strong aria-hidden="true">15.6.</strong> dyn Trait</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="generics/exercise.html"><strong aria-hidden="true">15.7.</strong> Ejercicio: min genérico</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="generics/solution.html"><strong aria-hidden="true">15.7.1.</strong> Solución</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-types.html"><strong aria-hidden="true">16.</strong> Tipos de la Biblioteca Estándar</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-types/std.html"><strong aria-hidden="true">16.1.</strong> Biblioteca estándar</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-types/docs.html"><strong aria-hidden="true">16.2.</strong> Documentación</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-types/option.html"><strong aria-hidden="true">16.3.</strong> Option</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-types/result.html"><strong aria-hidden="true">16.4.</strong> Result</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-types/string.html"><strong aria-hidden="true">16.5.</strong> String</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-types/vec.html"><strong aria-hidden="true">16.6.</strong> Vec (Vectores)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-types/hashmap.html"><strong aria-hidden="true">16.7.</strong> HashMap</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-types/exercise.html"><strong aria-hidden="true">16.8.</strong> Ejercicio: Contador</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-types/solution.html"><strong aria-hidden="true">16.8.1.</strong> Solución</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-traits.html"><strong aria-hidden="true">17.</strong> Traits de la biblioteca estándar</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-traits/comparisons.html"><strong aria-hidden="true">17.1.</strong> Comparaciones</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-traits/operators.html"><strong aria-hidden="true">17.2.</strong> Operadores</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-traits/from-and-into.html"><strong aria-hidden="true">17.3.</strong> From e Into</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-traits/casting.html"><strong aria-hidden="true">17.4.</strong> Conversión de tipos (Casting)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-traits/read-and-write.html"><strong aria-hidden="true">17.5.</strong> Read y Write</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-traits/default.html"><strong aria-hidden="true">17.6.</strong> Default, sintaxis de actualización de structs</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-traits/closures.html"><strong aria-hidden="true">17.7.</strong> Cierres</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-traits/exercise.html"><strong aria-hidden="true">17.8.</strong> Ejercicio: ROT13</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-traits/solution.html"><strong aria-hidden="true">17.8.1.</strong> Solución</a></span></li></ol></li></ol><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><li class="part-title">Día 3: Mañana</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="welcome-day-3.html"><strong aria-hidden="true">18.</strong> Te damos la bienvenida</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-management.html"><strong aria-hidden="true">19.</strong> Manejo de Memoria</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-management/review.html"><strong aria-hidden="true">19.1.</strong> Revisión de la memoria de programas</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-management/approaches.html"><strong aria-hidden="true">19.2.</strong> Métodos de Gestión de Memoria</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-management/ownership.html"><strong aria-hidden="true">19.3.</strong> Ownership</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-management/move.html"><strong aria-hidden="true">19.4.</strong> Semántica de movimiento</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-management/clone.html"><strong aria-hidden="true">19.5.</strong> Trait Clone</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-management/copy-types.html"><strong aria-hidden="true">19.6.</strong> Tipos Copy</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-management/drop.html"><strong aria-hidden="true">19.7.</strong> Trait Drop</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-management/exercise.html"><strong aria-hidden="true">19.8.</strong> Ejercicio: Constructores</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-management/solution.html"><strong aria-hidden="true">19.8.1.</strong> Solución</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="smart-pointers.html"><strong aria-hidden="true">20.</strong> Punteros inteligentes</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="smart-pointers/box.html"><strong aria-hidden="true">20.1.</strong> Box&lt;T&gt;</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="smart-pointers/rc.html"><strong aria-hidden="true">20.2.</strong> Rc</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="smart-pointers/trait-objects.html"><strong aria-hidden="true">20.3.</strong> Objetos Trait Poseídos</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="smart-pointers/exercise.html"><strong aria-hidden="true">20.4.</strong> Ejercicio: Árbol binario</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="smart-pointers/solution.html"><strong aria-hidden="true">20.4.1.</strong> Solución</a></span></li></ol></li></ol><li class="chapter-item "><li class="part-title">Día 3: Tarde</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="welcome-day-3-afternoon.html"><strong aria-hidden="true">21.</strong> Te damos la bienvenida</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="borrowing.html"><strong aria-hidden="true">22.</strong> Préstamos (Borrowing)</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="borrowing/shared.html"><strong aria-hidden="true">22.1.</strong> Emprestar (borrow) un valor</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="borrowing/borrowck.html"><strong aria-hidden="true">22.2.</strong> Verificación de Préstamos</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="borrowing/examples.html"><strong aria-hidden="true">22.3.</strong> Errores de Préstamo</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="borrowing/interior-mutability.html"><strong aria-hidden="true">22.4.</strong> Mutabilidad Interior</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="borrowing/exercise.html"><strong aria-hidden="true">22.5.</strong> Ejercicio: Estadísticas de Salud</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="borrowing/solution.html"><strong aria-hidden="true">22.5.1.</strong> Solución</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lifetimes.html"><strong aria-hidden="true">23.</strong> Duraciones de vida</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lifetimes/lifetime-annotations.html"><strong aria-hidden="true">23.1.</strong> Anotaciones de duración de vida</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lifetimes/lifetime-elision.html"><strong aria-hidden="true">23.2.</strong> Elisión de duración de vida</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lifetimes/struct-lifetimes.html"><strong aria-hidden="true">23.3.</strong> Duraciones de vida de estructuras (structs)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lifetimes/exercise.html"><strong aria-hidden="true">23.4.</strong> Ejercicio: Análisis de Protobuf</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lifetimes/solution.html"><strong aria-hidden="true">23.4.1.</strong> Solución</a></span></li></ol></li></ol><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><li class="part-title">Día 4: Mañana</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="welcome-day-4.html"><strong aria-hidden="true">24.</strong> Te damos la bienvenida</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="iterators.html"><strong aria-hidden="true">25.</strong> Iteradores</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="iterators/iterator.html"><strong aria-hidden="true">25.1.</strong> Iterator</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="iterators/intoiterator.html"><strong aria-hidden="true">25.2.</strong> IntoIterator</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="iterators/fromiterator.html"><strong aria-hidden="true">25.3.</strong> FromIterator</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="iterators/exercise.html"><strong aria-hidden="true">25.4.</strong> Ejercicio: Encadenamiento de métodos del iterador</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="iterators/solution.html"><strong aria-hidden="true">25.4.1.</strong> Solución</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="modules.html"><strong aria-hidden="true">26.</strong> Módulos</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="modules/modules.html"><strong aria-hidden="true">26.1.</strong> Módulos</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="modules/filesystem.html"><strong aria-hidden="true">26.2.</strong> Jerarquía del sistema de archivos</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="modules/visibility.html"><strong aria-hidden="true">26.3.</strong> Visibilidad</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="modules/paths.html"><strong aria-hidden="true">26.4.</strong> use, super, self</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="modules/exercise.html"><strong aria-hidden="true">26.5.</strong> Ejercicio: Módulos para una biblioteca GUI</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="modules/solution.html"><strong aria-hidden="true">26.5.1.</strong> Solución</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="testing.html"><strong aria-hidden="true">27.</strong> Probando</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="testing/unit-tests.html"><strong aria-hidden="true">27.1.</strong> Módulos de Pruebas</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="testing/other.html"><strong aria-hidden="true">27.2.</strong> Otros tipos de pruebas</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="testing/lints.html"><strong aria-hidden="true">27.3.</strong> Lints de compiladores y Clippy</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="testing/exercise.html"><strong aria-hidden="true">27.4.</strong> Ejercicio: Algoritmo de Luhn</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="testing/solution.html"><strong aria-hidden="true">27.4.1.</strong> Solución</a></span></li></ol></li></ol><li class="chapter-item "><li class="part-title">Día 4: Tarde</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="welcome-day-4-afternoon.html"><strong aria-hidden="true">28.</strong> Te damos la bienvenida</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="error-handling.html"><strong aria-hidden="true">29.</strong> Manejo de Errores</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="error-handling/panics.html"><strong aria-hidden="true">29.1.</strong> Pánicos</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="error-handling/result.html"><strong aria-hidden="true">29.2.</strong> Result</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="error-handling/try.html"><strong aria-hidden="true">29.3.</strong> Operador Try (Intentar)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="error-handling/try-conversions.html"><strong aria-hidden="true">29.4.</strong> Conversiones Try (Intentar)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="error-handling/error.html"><strong aria-hidden="true">29.5.</strong> Trait Error</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="error-handling/thiserror-and-anyhow.html"><strong aria-hidden="true">29.6.</strong> thiserror y anyhow</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="error-handling/exercise.html"><strong aria-hidden="true">29.7.</strong> Ejercicio: Reescribir con Result</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="error-handling/solution.html"><strong aria-hidden="true">29.7.1.</strong> Solución</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="unsafe-rust.html"><strong aria-hidden="true">30.</strong> Unsafe Rust</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="unsafe-rust/unsafe.html"><strong aria-hidden="true">30.1.</strong> Unsafe</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="unsafe-rust/dereferencing.html"><strong aria-hidden="true">30.2.</strong> Dereferenciación de Punteros Sin Formato</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="unsafe-rust/mutable-static.html"><strong aria-hidden="true">30.3.</strong> Variables Estáticas Mutables</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="unsafe-rust/unions.html"><strong aria-hidden="true">30.4.</strong> Uniones</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="unsafe-rust/unsafe-functions.html"><strong aria-hidden="true">30.5.</strong> Funciones Inseguras (Unsafe)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="unsafe-rust/unsafe-traits.html"><strong aria-hidden="true">30.6.</strong> Traits unsafe (inseguros)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="unsafe-rust/exercise.html"><strong aria-hidden="true">30.7.</strong> Ejercicio: Envoltorio de FFI</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="unsafe-rust/solution.html"><strong aria-hidden="true">30.7.1.</strong> Solución</a></span></li></ol></li></ol><li class="chapter-item "><li class="part-title">Android</li></li><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android.html"><strong aria-hidden="true">31.</strong> Te damos la bienvenida</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/setup.html"><strong aria-hidden="true">32.</strong> Configurar</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/build-rules.html"><strong aria-hidden="true">33.</strong> Reglas de Compilación (Build)</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/build-rules/binary.html"><strong aria-hidden="true">33.1.</strong> Binarios</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/build-rules/library.html"><strong aria-hidden="true">33.2.</strong> Biblioteca</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl.html"><strong aria-hidden="true">34.</strong> AIDL</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/birthday-service.html"><strong aria-hidden="true">34.1.</strong> Tutorial de Servicio de Cumpleaños</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/example-service/interface.html"><strong aria-hidden="true">34.1.1.</strong> Interfaz</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/example-service/service-bindings.html"><strong aria-hidden="true">34.1.2.</strong> API de Servicios</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/example-service/service.html"><strong aria-hidden="true">34.1.3.</strong> Servicio</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/example-service/server.html"><strong aria-hidden="true">34.1.4.</strong> Servidor</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/example-service/deploy.html"><strong aria-hidden="true">34.1.5.</strong> Despliegue</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/example-service/client.html"><strong aria-hidden="true">34.1.6.</strong> Cliente</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/example-service/changing-definition.html"><strong aria-hidden="true">34.1.7.</strong> Cambio de API</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/example-service/changing-implementation.html"><strong aria-hidden="true">34.1.8.</strong> Actualizando Implementaciones</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/types.html"><strong aria-hidden="true">34.2.</strong> Tipos AIDL</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/types/primitives.html"><strong aria-hidden="true">34.2.1.</strong> Tipos Primitivos</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/types/arrays.html"><strong aria-hidden="true">34.2.2.</strong> Tipos Array</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/types/objects.html"><strong aria-hidden="true">34.2.3.</strong> Enviando objetos</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/types/parcelables.html"><strong aria-hidden="true">34.2.4.</strong> Parcelables</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/types/file-descriptor.html"><strong aria-hidden="true">34.2.5.</strong> Enviando archivos</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/testing.html"><strong aria-hidden="true">35.</strong> Probando</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/testing/googletest.html"><strong aria-hidden="true">35.1.</strong> GoogleTest</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/testing/mocking.html"><strong aria-hidden="true">35.2.</strong> Simulaciones</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/logging.html"><strong aria-hidden="true">36.</strong> Almacenamiento de registros</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability.html"><strong aria-hidden="true">37.</strong> Interoperabilidad</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/with-c.html"><strong aria-hidden="true">37.1.</strong> Con C</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/with-c/bindgen.html"><strong aria-hidden="true">37.1.1.</strong> Llamar a C con Bindgen</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/with-c/rust.html"><strong aria-hidden="true">37.1.2.</strong> Llamar a Rust desde C</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp.html"><strong aria-hidden="true">37.2.</strong> Con C++</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/bridge.html"><strong aria-hidden="true">37.2.1.</strong> El módulo puente (Bridge)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/rust-bridge.html"><strong aria-hidden="true">37.2.2.</strong> Rust Bridge (Puente)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/generated-cpp.html"><strong aria-hidden="true">37.2.3.</strong> C++ generado</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/cpp-bridge.html"><strong aria-hidden="true">37.2.4.</strong> Bridge en C++</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/shared-types.html"><strong aria-hidden="true">37.2.5.</strong> Tipos de datos compartidos</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/shared-enums.html"><strong aria-hidden="true">37.2.6.</strong> Enums compartidos</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/rust-result.html"><strong aria-hidden="true">37.2.7.</strong> Manejo de Errores en Rust</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/cpp-exception.html"><strong aria-hidden="true">37.2.8.</strong> Manejo de Errores en C++</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/type-mapping.html"><strong aria-hidden="true">37.2.9.</strong> Tipos adicionales</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/android-build-cpp.html"><strong aria-hidden="true">37.2.10.</strong> Compilar en Android: C++</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/android-cpp-genrules.html"><strong aria-hidden="true">37.2.11.</strong> Compilar en Android: Genrules</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/android-build-rust.html"><strong aria-hidden="true">37.2.12.</strong> Compilar en Android: Rust</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/java.html"><strong aria-hidden="true">37.3.</strong> Con Java</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/android/morning.html"><strong aria-hidden="true">38.</strong> Ejercicios</a></span></li><li class="chapter-item "><li class="part-title">Chromium</li></li><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium.html"><strong aria-hidden="true">39.</strong> Te damos la bienvenida</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/setup.html"><strong aria-hidden="true">40.</strong> Configurar</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/cargo.html"><strong aria-hidden="true">41.</strong> Comparación de los ecosistemas de Chromium y Cargo</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/policy.html"><strong aria-hidden="true">42.</strong> Política</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/build-rules.html"><strong aria-hidden="true">43.</strong> Reglas de Compilación (Build)</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/build-rules/unsafe.html"><strong aria-hidden="true">43.1.</strong> Código inseguro</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/build-rules/depending.html"><strong aria-hidden="true">43.2.</strong> Depender de código de Rust desde Chromium C++</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/build-rules/vscode.html"><strong aria-hidden="true">43.3.</strong> Visual Studio Code</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/chromium/build-rules.html"><strong aria-hidden="true">43.4.</strong> Ejercicio</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/testing.html"><strong aria-hidden="true">44.</strong> Probando</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/testing/rust-gtest-interop.html"><strong aria-hidden="true">44.1.</strong> Biblioteca rust_gtest_interop</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/testing/build-gn.html"><strong aria-hidden="true">44.2.</strong> Reglas GN para pruebas de Rust</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/testing/chromium-import-macro.html"><strong aria-hidden="true">44.3.</strong> Macro chromium::import!</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/chromium/testing.html"><strong aria-hidden="true">44.4.</strong> Ejercicio</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/interoperability-with-cpp.html"><strong aria-hidden="true">45.</strong> Interoperabilidad con C++</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/interoperability-with-cpp/example-bindings.html"><strong aria-hidden="true">45.1.</strong> Ejemplos</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/interoperability-with-cpp/limitations-of-cxx.html"><strong aria-hidden="true">45.2.</strong> Limitaciones de CXX</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/interoperability-with-cpp/error-handling.html"><strong aria-hidden="true">45.3.</strong> Manejo de Errores en CXX</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/interoperability-with-cpp/error-handling-qr.html"><strong aria-hidden="true">45.3.1.</strong> Manejo de Errores: Ejemplo QR</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/interoperability-with-cpp/error-handling-png.html"><strong aria-hidden="true">45.3.2.</strong> Manejo de Errores: Ejemplo PNG</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/interoperability-with-cpp/using-cxx-in-chromium.html"><strong aria-hidden="true">45.4.</strong> Usar CXX en Chromium</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/chromium/interoperability-with-cpp.html"><strong aria-hidden="true">45.5.</strong> Ejercicio</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates.html"><strong aria-hidden="true">46.</strong> Añadir crates de terceros</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/configuring-cargo-toml.html"><strong aria-hidden="true">46.1.</strong> Configurar Cargo.toml</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/configuring-gnrt-config-toml.html"><strong aria-hidden="true">46.2.</strong> Configurar gnrt_config.toml</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/downloading-crates.html"><strong aria-hidden="true">46.3.</strong> Descargar crates</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/generating-gn-build-rules.html"><strong aria-hidden="true">46.4.</strong> Generar reglas de compilación gn</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/resolving-problems.html"><strong aria-hidden="true">46.5.</strong> Resolución de problemas</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/resolving-problems/build-scripts-which-generate-code.html"><strong aria-hidden="true">46.5.1.</strong> Compilar secuencias de comandos que generan código</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/resolving-problems/build-scripts-which-take-arbitrary-actions.html"><strong aria-hidden="true">46.5.2.</strong> Compilar secuencias de comandos que compilan C++ o llevan a cabo acciones arbitrarias</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/depending-on-a-crate.html"><strong aria-hidden="true">46.6.</strong> Depender de un crate</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/reviews-and-audits.html"><strong aria-hidden="true">46.7.</strong> Revisiones y auditorías</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/checking-in.html"><strong aria-hidden="true">46.8.</strong> Comprobaciones en el código fuente de Chromium</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/keeping-up-to-date.html"><strong aria-hidden="true">46.9.</strong> Mantener los crates actualizados</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/chromium/third-party.html"><strong aria-hidden="true">46.10.</strong> Ejercicio</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/chromium/bringing-it-together.html"><strong aria-hidden="true">47.</strong> Poner en práctica todo lo aprendido: ejercicio</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/chromium/solutions.html"><strong aria-hidden="true">48.</strong> Soluciones de Ejercicios</a></span></li><li class="chapter-item "><li class="part-title">Bare Metal: mañana</li></li><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal.html"><strong aria-hidden="true">49.</strong> Te damos la bienvenida</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/no_std.html"><strong aria-hidden="true">50.</strong> no_std</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/minimal.html"><strong aria-hidden="true">50.1.</strong> Un Pequeño Ejemplo</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/alloc.html"><strong aria-hidden="true">50.2.</strong> alloc</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/microcontrollers.html"><strong aria-hidden="true">51.</strong> Microcontroladores</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/microcontrollers/mmio.html"><strong aria-hidden="true">51.1.</strong> MMIO sin procesar</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/microcontrollers/pacs.html"><strong aria-hidden="true">51.2.</strong> PAC</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/microcontrollers/hals.html"><strong aria-hidden="true">51.3.</strong> Crates HAL</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/microcontrollers/board-support.html"><strong aria-hidden="true">51.4.</strong> Crates de Soporte de Placa</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/microcontrollers/type-state.html"><strong aria-hidden="true">51.5.</strong> El Patrón de Tipo de Estado</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/microcontrollers/embedded-hal.html"><strong aria-hidden="true">51.6.</strong> embedded-hal</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/microcontrollers/probe-rs.html"><strong aria-hidden="true">51.7.</strong> probe-rs y cargo-embed</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/microcontrollers/debugging.html"><strong aria-hidden="true">51.7.1.</strong> Depuración</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/microcontrollers/other-projects.html"><strong aria-hidden="true">51.8.</strong> Otros proyectos</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/bare-metal/morning.html"><strong aria-hidden="true">52.</strong> Ejercicios</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/bare-metal/compass.html"><strong aria-hidden="true">52.1.</strong> Brújula</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/bare-metal/solutions-morning.html"><strong aria-hidden="true">52.2.</strong> Soluciones</a></span></li></ol><li class="chapter-item "><li class="part-title">Bare Metal: tarde</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps.html"><strong aria-hidden="true">53.</strong> Procesadores de aplicaciones</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/entry-point.html"><strong aria-hidden="true">53.1.</strong> Iniciación a Rust</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/inline-assembly.html"><strong aria-hidden="true">53.2.</strong> Ensamblador en línea</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/mmio.html"><strong aria-hidden="true">53.3.</strong> MMIO</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/uart.html"><strong aria-hidden="true">53.4.</strong> Escribir un controlador UART</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/uart/traits.html"><strong aria-hidden="true">53.4.1.</strong> Más traits</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/better-uart.html"><strong aria-hidden="true">53.5.</strong> Un controlador UART mejor</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/better-uart/bitflags.html"><strong aria-hidden="true">53.5.1.</strong> Bitflags</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/better-uart/registers.html"><strong aria-hidden="true">53.5.2.</strong> Varios registros</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/better-uart/driver.html"><strong aria-hidden="true">53.5.3.</strong> Controlador</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/better-uart/using.html"><strong aria-hidden="true">53.5.4.</strong> Cómo usarlo</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/logging.html"><strong aria-hidden="true">53.6.</strong> Almacenamiento de registros</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/logging/using.html"><strong aria-hidden="true">53.6.1.</strong> Cómo usarlo</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/exceptions.html"><strong aria-hidden="true">53.7.</strong> Excepciones</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/other-projects.html"><strong aria-hidden="true">53.8.</strong> Otros proyectos</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/useful-crates.html"><strong aria-hidden="true">54.</strong> Crates útiles</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/useful-crates/zerocopy.html"><strong aria-hidden="true">54.1.</strong> zerocopy</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/useful-crates/aarch64-paging.html"><strong aria-hidden="true">54.2.</strong> aarch64-paging</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/useful-crates/buddy_system_allocator.html"><strong aria-hidden="true">54.3.</strong> buddy_system_allocator</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/useful-crates/tinyvec.html"><strong aria-hidden="true">54.4.</strong> tinyvec</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/useful-crates/spin.html"><strong aria-hidden="true">54.5.</strong> spin</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/android.html"><strong aria-hidden="true">55.</strong> Android</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/android/vmbase.html"><strong aria-hidden="true">55.1.</strong> vmbase</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/bare-metal/afternoon.html"><strong aria-hidden="true">56.</strong> Ejercicios</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/bare-metal/rtc.html"><strong aria-hidden="true">56.1.</strong> Controlador RTC</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/bare-metal/solutions-afternoon.html"><strong aria-hidden="true">56.2.</strong> Soluciones</a></span></li></ol><li class="chapter-item "><li class="part-title">Concurrencia: mañana</li></li><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/welcome.html"><strong aria-hidden="true">57.</strong> Te damos la bienvenida</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/threads.html"><strong aria-hidden="true">58.</strong> Hilos</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/threads/plain.html"><strong aria-hidden="true">58.1.</strong> Hilos Simples</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/threads/scoped.html"><strong aria-hidden="true">58.2.</strong> Hilos con ámbito</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/channels.html"><strong aria-hidden="true">59.</strong> Canales</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/channels/senders-receivers.html"><strong aria-hidden="true">59.1.</strong> Emisores y receptores</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/channels/unbounded.html"><strong aria-hidden="true">59.2.</strong> Canales sin límites</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/channels/bounded.html"><strong aria-hidden="true">59.3.</strong> Canales delimitados</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/send-sync.html"><strong aria-hidden="true">60.</strong> Send y Sync</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/send-sync/marker-traits.html"><strong aria-hidden="true">60.1.</strong> Traits de Marcador</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/send-sync/send.html"><strong aria-hidden="true">60.2.</strong> Send</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/send-sync/sync.html"><strong aria-hidden="true">60.3.</strong> Sync</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/send-sync/examples.html"><strong aria-hidden="true">60.4.</strong> Ejemplos</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/shared-state.html"><strong aria-hidden="true">61.</strong> Estado compartido</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/shared-state/arc.html"><strong aria-hidden="true">61.1.</strong> Arc</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/shared-state/mutex.html"><strong aria-hidden="true">61.2.</strong> Mutex</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/shared-state/example.html"><strong aria-hidden="true">61.3.</strong> Ejemplo</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/sync-exercises.html"><strong aria-hidden="true">62.</strong> Ejercicios</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/sync-exercises/dining-philosophers.html"><strong aria-hidden="true">62.1.</strong> La cena de los filósofos</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/sync-exercises/link-checker.html"><strong aria-hidden="true">62.2.</strong> Comprobador de enlaces multihilo</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/sync-exercises/solutions.html"><strong aria-hidden="true">62.3.</strong> Soluciones</a></span></li></ol><li class="chapter-item "><li class="part-title">Concurrencia: tarde</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/welcome-async.html"><strong aria-hidden="true">63.</strong> Te damos la bienvenida</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/async.html"><strong aria-hidden="true">64.</strong> Conceptos básicos de Async</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/async/async-await.html"><strong aria-hidden="true">64.1.</strong> async/await</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/async/futures.html"><strong aria-hidden="true">64.2.</strong> Future</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/async/runtimes.html"><strong aria-hidden="true">64.3.</strong> Runtimes (Tiempos de Ejecución)</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/async/runtimes/tokio.html"><strong aria-hidden="true">64.3.1.</strong> Tokio</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/async/tasks.html"><strong aria-hidden="true">64.4.</strong> Tasks</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/async-control-flow.html"><strong aria-hidden="true">65.</strong> Canales y Control de Flujo</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/async-control-flow/channels.html"><strong aria-hidden="true">65.1.</strong> Canales asíncronos</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/async-control-flow/join.html"><strong aria-hidden="true">65.2.</strong> Unir</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/async-control-flow/select.html"><strong aria-hidden="true">65.3.</strong> Seleccionar</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/async-pitfalls.html"><strong aria-hidden="true">66.</strong> Inconvenientes</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/async-pitfalls/blocking-executor.html"><strong aria-hidden="true">66.1.</strong> Bloqueo del ejecutor</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/async-pitfalls/pin.html"><strong aria-hidden="true">66.2.</strong> Pin</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/async-pitfalls/async-traits.html"><strong aria-hidden="true">66.3.</strong> Traits asíncronos</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/async-pitfalls/cancellation.html"><strong aria-hidden="true">66.4.</strong> Cancelación</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/async-exercises.html"><strong aria-hidden="true">67.</strong> Ejercicios</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/async-exercises/dining-philosophers.html"><strong aria-hidden="true">67.1.</strong> La cena de los filósofos</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/async-exercises/chat-app.html"><strong aria-hidden="true">67.2.</strong> Aplicación de chat de difusión</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/async-exercises/solutions.html"><strong aria-hidden="true">67.3.</strong> Soluciones</a></span></li></ol><li class="chapter-item "><li class="part-title">Conclusiones</li></li><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="thanks.html"><strong aria-hidden="true">68.</strong> ¡Gracias!</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="glossary.html"><strong aria-hidden="true">69.</strong> Glosario</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="other-resources.html"><strong aria-hidden="true">70.</strong> Otros recursos</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="credits.html"><strong aria-hidden="true">71.</strong> Créditos</a></span></li></ol>';
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

