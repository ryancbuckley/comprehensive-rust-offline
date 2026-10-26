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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="index.html">Comprehensive Rust에 오신 것을 환영합니다 🦀</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running-the-course.html"><strong aria-hidden="true">1.</strong> 강의 진행</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running-the-course/course-structure.html"><strong aria-hidden="true">1.1.</strong> 강의 구성</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running-the-course/keyboard-shortcuts.html"><strong aria-hidden="true">1.2.</strong> 단축키</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running-the-course/translations.html"><strong aria-hidden="true">1.3.</strong> 다른 언어들</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="cargo.html"><strong aria-hidden="true">2.</strong> 카고 사용하기</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="cargo/rust-ecosystem.html"><strong aria-hidden="true">2.1.</strong> 러스트 생태계</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="cargo/code-samples.html"><strong aria-hidden="true">2.2.</strong> 코드 샘플</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="cargo/running-locally.html"><strong aria-hidden="true">2.3.</strong> 카고(Cargo) 수행하기</a></span></li></ol><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><li class="part-title">1일차 오전</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="welcome-day-1.html"><strong aria-hidden="true">3.</strong> 개요</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hello-world.html"><strong aria-hidden="true">4.</strong> Hello World!</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hello-world/what-is-rust.html"><strong aria-hidden="true">4.1.</strong> 러스트란?</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hello-world/benefits.html"><strong aria-hidden="true">4.2.</strong> Rust의 이점</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="hello-world/playground.html"><strong aria-hidden="true">4.3.</strong> 플레이그라운드</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types-and-values.html"><strong aria-hidden="true">5.</strong> 타입 및 값</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types-and-values/hello-world.html"><strong aria-hidden="true">5.1.</strong> Hello World!</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types-and-values/variables.html"><strong aria-hidden="true">5.2.</strong> 변수</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types-and-values/values.html"><strong aria-hidden="true">5.3.</strong> 값</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types-and-values/arithmetic.html"><strong aria-hidden="true">5.4.</strong> 연산</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types-and-values/strings.html"><strong aria-hidden="true">5.5.</strong> 문자열</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types-and-values/inference.html"><strong aria-hidden="true">5.6.</strong> 타입 추론</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types-and-values/exercise.html"><strong aria-hidden="true">5.7.</strong> 연습문제: 피보나치</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types-and-values/solution.html"><strong aria-hidden="true">5.7.1.</strong> 해답</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics.html"><strong aria-hidden="true">6.</strong> 흐름 제어</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/if.html"><strong aria-hidden="true">6.1.</strong> if 표현식</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/loops.html"><strong aria-hidden="true">6.2.</strong> 배열과 for 반복문</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/loops/for.html"><strong aria-hidden="true">6.2.1.</strong> 배열과 for 반복문</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/loops/loop.html"><strong aria-hidden="true">6.2.2.</strong> loop</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/break-continue.html"><strong aria-hidden="true">6.3.</strong> break와 continue</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/break-continue/labels.html"><strong aria-hidden="true">6.3.1.</strong> Labels</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/blocks-and-scopes.html"><strong aria-hidden="true">6.4.</strong> 블록 및 범위</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/blocks-and-scopes/scopes.html"><strong aria-hidden="true">6.4.1.</strong> 범위(Scopes)와 쉐도잉(Shadowing)</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/functions.html"><strong aria-hidden="true">6.5.</strong> 함수</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/macros.html"><strong aria-hidden="true">6.6.</strong> 매크로</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/exercise.html"><strong aria-hidden="true">6.7.</strong> 연습문제: 콜라츠 수열</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="control-flow-basics/solution.html"><strong aria-hidden="true">6.7.1.</strong> 해답</a></span></li></ol></li></ol><li class="chapter-item "><li class="part-title">1일차 오후</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="welcome-day-1-afternoon.html"><strong aria-hidden="true">7.</strong> 개요</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="tuples-and-arrays.html"><strong aria-hidden="true">8.</strong> 튜플 및 배열</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="tuples-and-arrays/arrays.html"><strong aria-hidden="true">8.1.</strong> 배열</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="tuples-and-arrays/tuples.html"><strong aria-hidden="true">8.2.</strong> 튜플</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="tuples-and-arrays/iteration.html"><strong aria-hidden="true">8.3.</strong> 배열 순회</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="tuples-and-arrays/destructuring.html"><strong aria-hidden="true">8.4.</strong> 열거형 분해(역구조화)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="tuples-and-arrays/exercise.html"><strong aria-hidden="true">8.5.</strong> 연습문제: 중첩 배열</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="tuples-and-arrays/solution.html"><strong aria-hidden="true">8.5.1.</strong> 해답</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="references.html"><strong aria-hidden="true">9.</strong> 참조</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="references/shared.html"><strong aria-hidden="true">9.1.</strong> 공유 참조</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="references/exclusive.html"><strong aria-hidden="true">9.2.</strong> 배타적(Exclusive) 참조</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="references/exercise.html"><strong aria-hidden="true">9.3.</strong> 연습문제: 기하</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="references/solution.html"><strong aria-hidden="true">9.3.1.</strong> 해답</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="user-defined-types.html"><strong aria-hidden="true">10.</strong> 사용자 정의 타입</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="user-defined-types/named-structs.html"><strong aria-hidden="true">10.1.</strong> 구조체</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="user-defined-types/tuple-structs.html"><strong aria-hidden="true">10.2.</strong> 튜플</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="user-defined-types/enums.html"><strong aria-hidden="true">10.3.</strong> 열거형</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="user-defined-types/static-and-const.html"><strong aria-hidden="true">10.4.</strong> 정적변수(static)와 상수(const)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="user-defined-types/aliases.html"><strong aria-hidden="true">10.5.</strong> 타입 별칭</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="user-defined-types/exercise.html"><strong aria-hidden="true">10.6.</strong> 연습문제: 엘리베이터 이벤트</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="user-defined-types/solution.html"><strong aria-hidden="true">10.6.1.</strong> 해답</a></span></li></ol></li></ol><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><li class="part-title">2일차 오전</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="welcome-day-2.html"><strong aria-hidden="true">11.</strong> 개요</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="pattern-matching.html"><strong aria-hidden="true">12.</strong> 패턴 매칭</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="pattern-matching/match.html"><strong aria-hidden="true">12.1.</strong> Matching Values</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="pattern-matching/destructuring.html"><strong aria-hidden="true">12.2.</strong> 열거형 분해(역구조화)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="pattern-matching/let-control-flow.html"><strong aria-hidden="true">12.3.</strong> 흐름 제어</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="pattern-matching/exercise.html"><strong aria-hidden="true">12.4.</strong> 연습문제: 수식 계산</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="pattern-matching/solution.html"><strong aria-hidden="true">12.4.1.</strong> 해답</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="methods-and-traits.html"><strong aria-hidden="true">13.</strong> 메소드와 트레이트</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="methods-and-traits/methods.html"><strong aria-hidden="true">13.1.</strong> 메서드</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="methods-and-traits/traits.html"><strong aria-hidden="true">13.2.</strong> 트레잇(Trait)</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="methods-and-traits/traits/implementing.html"><strong aria-hidden="true">13.2.1.</strong> 안전하지 않은 트레잇 구현하기</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="methods-and-traits/traits/supertraits.html"><strong aria-hidden="true">13.2.2.</strong> 트레잇(Trait)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="methods-and-traits/traits/associated-types.html"><strong aria-hidden="true">13.2.3.</strong> 공유 타입</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="methods-and-traits/deriving.html"><strong aria-hidden="true">13.3.</strong> 트레잇 상속하기</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="methods-and-traits/exercise.html"><strong aria-hidden="true">13.4.</strong> 연습문제: 범용 로거</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="methods-and-traits/solution.html"><strong aria-hidden="true">13.4.1.</strong> 해답</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="generics.html"><strong aria-hidden="true">14.</strong> 제네릭</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="generics/generic-functions.html"><strong aria-hidden="true">14.1.</strong> 제네릭 함수</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="generics/generic-data.html"><strong aria-hidden="true">14.2.</strong> 제네릭 데이터 타입</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="generics/generic-traits.html"><strong aria-hidden="true">14.3.</strong> 제네릭 트레잇</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="generics/trait-bounds.html"><strong aria-hidden="true">14.4.</strong> 제네릭 타입 제한(트레잇 경계)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="generics/impl-trait.html"><strong aria-hidden="true">14.5.</strong> 트레잇 구현하기(impl Trait)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="generics/exercise.html"><strong aria-hidden="true">14.6.</strong> 연습문제: 범용 min</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="generics/solution.html"><strong aria-hidden="true">14.6.1.</strong> 해답</a></span></li></ol></li></ol><li class="chapter-item "><li class="part-title">2일차 오후</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="welcome-day-2-afternoon.html"><strong aria-hidden="true">15.</strong> 개요</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-types.html"><strong aria-hidden="true">16.</strong> 표준 라이브러리 타입</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-types/std.html"><strong aria-hidden="true">16.1.</strong> 표준 라이브러리</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-types/docs.html"><strong aria-hidden="true">16.2.</strong> 문서화</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-types/option.html"><strong aria-hidden="true">16.3.</strong> Option</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-types/result.html"><strong aria-hidden="true">16.4.</strong> Option, Result</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-types/string.html"><strong aria-hidden="true">16.5.</strong> String</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-types/vec.html"><strong aria-hidden="true">16.6.</strong> Vec</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-types/hashmap.html"><strong aria-hidden="true">16.7.</strong> HashMap</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-types/exercise.html"><strong aria-hidden="true">16.8.</strong> 연습문제: 카운터</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-types/solution.html"><strong aria-hidden="true">16.8.1.</strong> 해답</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-traits.html"><strong aria-hidden="true">17.</strong> 표준 라이브러리 트레잇</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-traits/comparisons.html"><strong aria-hidden="true">17.1.</strong> 비교</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-traits/operators.html"><strong aria-hidden="true">17.2.</strong> 연산자</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-traits/from-and-into.html"><strong aria-hidden="true">17.3.</strong> From과 Into</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-traits/casting.html"><strong aria-hidden="true">17.4.</strong> 캐스팅</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-traits/read-and-write.html"><strong aria-hidden="true">17.5.</strong> Read와 Write</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-traits/default.html"><strong aria-hidden="true">17.6.</strong> Default, 구조체 업데이트 문법</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-traits/closures.html"><strong aria-hidden="true">17.7.</strong> 클로저(Closure)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-traits/exercise.html"><strong aria-hidden="true">17.8.</strong> 연습문제: ROT13</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="std-traits/solution.html"><strong aria-hidden="true">17.8.1.</strong> 해답</a></span></li></ol></li></ol><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><li class="part-title">3일차 오전</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="welcome-day-3.html"><strong aria-hidden="true">18.</strong> 개요</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-management.html"><strong aria-hidden="true">19.</strong> 메모리 관리</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-management/review.html"><strong aria-hidden="true">19.1.</strong> 프로그램 메모리 검토</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-management/approaches.html"><strong aria-hidden="true">19.2.</strong> 메모리 관리에 대한 접근</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-management/ownership.html"><strong aria-hidden="true">19.3.</strong> 소유권</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-management/move.html"><strong aria-hidden="true">19.4.</strong> Move 문법</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-management/clone.html"><strong aria-hidden="true">19.5.</strong> Clone</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-management/copy-types.html"><strong aria-hidden="true">19.6.</strong> 복사 타입</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-management/drop.html"><strong aria-hidden="true">19.7.</strong> Drop</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-management/exercise.html"><strong aria-hidden="true">19.8.</strong> 연습문제: Builder 타입</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-management/solution.html"><strong aria-hidden="true">19.8.1.</strong> 해답</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="smart-pointers.html"><strong aria-hidden="true">20.</strong> 스마트 포인터</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="smart-pointers/box.html"><strong aria-hidden="true">20.1.</strong> Box</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="smart-pointers/rc.html"><strong aria-hidden="true">20.2.</strong> Rc</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="smart-pointers/trait-objects.html"><strong aria-hidden="true">20.3.</strong> 트레잇 객체</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="smart-pointers/exercise.html"><strong aria-hidden="true">20.4.</strong> 연습문제: 바이너리 트리</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="smart-pointers/solution.html"><strong aria-hidden="true">20.4.1.</strong> 해답</a></span></li></ol></li></ol><li class="chapter-item "><li class="part-title">3일차 오후</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="welcome-day-3-afternoon.html"><strong aria-hidden="true">21.</strong> 개요</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="borrowing.html"><strong aria-hidden="true">22.</strong> 대여</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="borrowing/shared.html"><strong aria-hidden="true">22.1.</strong> 값 대여</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="borrowing/borrowck.html"><strong aria-hidden="true">22.2.</strong> 대여 검증</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="borrowing/interior-mutability.html"><strong aria-hidden="true">22.3.</strong> 상호운용성</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="borrowing/exercise.html"><strong aria-hidden="true">22.4.</strong> 연습문제: 건강검진</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="borrowing/solution.html"><strong aria-hidden="true">22.4.1.</strong> 해답</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="slices-and-lifetimes.html"><strong aria-hidden="true">23.</strong> 슬라이스와 수명</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="slices-and-lifetimes/slices.html"><strong aria-hidden="true">23.1.</strong> Slices: &amp;&#92;[T&#92;]</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="slices-and-lifetimes/str.html"><strong aria-hidden="true">23.2.</strong> 문자열 레퍼런스</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="slices-and-lifetimes/lifetime-annotations.html"><strong aria-hidden="true">23.3.</strong> 함수 호출에서의 수명</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="slices-and-lifetimes/lifetime-elision.html"><strong aria-hidden="true">23.4.</strong> 수명 표기의 생략</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="slices-and-lifetimes/struct-lifetimes.html"><strong aria-hidden="true">23.5.</strong> 구조체의 수명</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="slices-and-lifetimes/exercise.html"><strong aria-hidden="true">23.6.</strong> 연습문제: Protobuf 파싱</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="slices-and-lifetimes/solution.html"><strong aria-hidden="true">23.6.1.</strong> 해답</a></span></li></ol></li></ol><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><li class="part-title">4일차 오전</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="welcome-day-4.html"><strong aria-hidden="true">24.</strong> 개요</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="iterators.html"><strong aria-hidden="true">25.</strong> Iterators</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="iterators/iterator.html"><strong aria-hidden="true">25.1.</strong> Iterator</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="iterators/intoiterator.html"><strong aria-hidden="true">25.2.</strong> IntoIterator</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="iterators/fromiterator.html"><strong aria-hidden="true">25.3.</strong> FromIterator</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="iterators/exercise.html"><strong aria-hidden="true">25.4.</strong> 연습문제: Iterator 메서드 체이닝</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="iterators/solution.html"><strong aria-hidden="true">25.4.1.</strong> 해답</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="modules.html"><strong aria-hidden="true">26.</strong> 모듈</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="modules/modules.html"><strong aria-hidden="true">26.1.</strong> 모듈</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="modules/filesystem.html"><strong aria-hidden="true">26.2.</strong> 파일시스템 계층</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="modules/visibility.html"><strong aria-hidden="true">26.3.</strong> 가시성</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="modules/paths.html"><strong aria-hidden="true">26.4.</strong> use, super, self</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="modules/exercise.html"><strong aria-hidden="true">26.5.</strong> 연습문제: GUI 라이브러리 모듈 만들기</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="modules/solution.html"><strong aria-hidden="true">26.5.1.</strong> 해답</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="testing.html"><strong aria-hidden="true">27.</strong> 테스트</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="testing/unit-tests.html"><strong aria-hidden="true">27.1.</strong> 테스트 모듈</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="testing/other.html"><strong aria-hidden="true">27.2.</strong> 다른 테스트 프로젝트 타입</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="testing/lints.html"><strong aria-hidden="true">27.3.</strong> 컴파일러 린트 및 Clippy</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="testing/exercise.html"><strong aria-hidden="true">27.4.</strong> 룬 알고리즘</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="testing/solution.html"><strong aria-hidden="true">27.4.1.</strong> 해답</a></span></li></ol></li></ol><li class="chapter-item "><li class="part-title">4일차 오후</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="welcome-day-4-afternoon.html"><strong aria-hidden="true">28.</strong> 개요</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="error-handling.html"><strong aria-hidden="true">29.</strong> 오류처리</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="error-handling/panics.html"><strong aria-hidden="true">29.1.</strong> 패닉</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="error-handling/try.html"><strong aria-hidden="true">29.2.</strong> Iterator</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="error-handling/try-conversions.html"><strong aria-hidden="true">29.3.</strong> 묵시적 형변환</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="error-handling/error.html"><strong aria-hidden="true">29.4.</strong> Error 트레잇</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="error-handling/thiserror-and-anyhow.html"><strong aria-hidden="true">29.5.</strong> From과 Into</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="error-handling/exercise.html"><strong aria-hidden="true">29.6.</strong> Result를 이용한 구조화된 오류처리</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="error-handling/solution.html"><strong aria-hidden="true">29.6.1.</strong> 해답</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="unsafe-rust.html"><strong aria-hidden="true">30.</strong> 안전하지 않은 러스트</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="unsafe-rust/unsafe.html"><strong aria-hidden="true">30.1.</strong> 안전하지 않은 러스트</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="unsafe-rust/dereferencing.html"><strong aria-hidden="true">30.2.</strong> 원시 포인터 역참조(따라가기)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="unsafe-rust/mutable-static.html"><strong aria-hidden="true">30.3.</strong> 정적 가변 변수</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="unsafe-rust/unions.html"><strong aria-hidden="true">30.4.</strong> Unions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="unsafe-rust/unsafe-functions.html"><strong aria-hidden="true">30.5.</strong> 안전하지 않은 함수 호출</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="unsafe-rust/unsafe-traits.html"><strong aria-hidden="true">30.6.</strong> 안전하지 않은 트레잇 구현하기</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="unsafe-rust/exercise.html"><strong aria-hidden="true">30.7.</strong> 연습문제: FFI 래퍼(wrapper)</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="unsafe-rust/solution.html"><strong aria-hidden="true">30.7.1.</strong> 해답</a></span></li></ol></li></ol><li class="chapter-item "><li class="part-title">안드로이드</li></li><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android.html"><strong aria-hidden="true">31.</strong> 개요</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/setup.html"><strong aria-hidden="true">32.</strong> 설치</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/build-rules.html"><strong aria-hidden="true">33.</strong> 빌드 규칙</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/build-rules/binary.html"><strong aria-hidden="true">33.1.</strong> 바이너리</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/build-rules/library.html"><strong aria-hidden="true">33.2.</strong> 라이브러리</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl.html"><strong aria-hidden="true">34.</strong> AIDL</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/birthday-service.html"><strong aria-hidden="true">34.1.</strong> /&#92;*&#92;* 생일 서비스 인터페이스입니다. &#92;*/</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/example-service/interface.html"><strong aria-hidden="true">34.1.1.</strong> AIDL 인터페이스</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/example-service/service-bindings.html"><strong aria-hidden="true">34.1.2.</strong> 서비스 API</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/example-service/service.html"><strong aria-hidden="true">34.1.3.</strong> AIDL 서비스</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/example-service/server.html"><strong aria-hidden="true">34.1.4.</strong> AIDL 서버</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/example-service/deploy.html"><strong aria-hidden="true">34.1.5.</strong> 배포</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/example-service/client.html"><strong aria-hidden="true">34.1.6.</strong> 클라이언트</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/example-service/changing-definition.html"><strong aria-hidden="true">34.1.7.</strong> API 수정</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/example-service/changing-implementation.html"><strong aria-hidden="true">34.1.8.</strong> 구헌체 업데이트</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/types.html"><strong aria-hidden="true">34.2.</strong> AIDL 타입</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/types/primitives.html"><strong aria-hidden="true">34.2.1.</strong> 원시 타입</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/types/arrays.html"><strong aria-hidden="true">34.2.2.</strong> 배열</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/types/objects.html"><strong aria-hidden="true">34.2.3.</strong> 트레잇 객체</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/types/parcelables.html"><strong aria-hidden="true">34.2.4.</strong> 변수</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/aidl/types/file-descriptor.html"><strong aria-hidden="true">34.2.5.</strong> Sending Files</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/testing.html"><strong aria-hidden="true">35.</strong> 테스트</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/testing/googletest.html"><strong aria-hidden="true">35.1.</strong> GoogleTest</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/testing/mocking.html"><strong aria-hidden="true">35.2.</strong> 모의 처리</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/logging.html"><strong aria-hidden="true">36.</strong> 로깅</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability.html"><strong aria-hidden="true">37.</strong> 상호운용성</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/with-c.html"><strong aria-hidden="true">37.1.</strong> C와의 상호운용성</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/with-c/bindgen.html"><strong aria-hidden="true">37.1.1.</strong> Bindgen을 사용한 C호출</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/with-c/rust.html"><strong aria-hidden="true">37.1.2.</strong> C에서 러스트 호출</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp.html"><strong aria-hidden="true">37.2.</strong> C++와의 상호운용성</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/bridge.html"><strong aria-hidden="true">37.2.1.</strong> 브리지 모듈</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/rust-bridge.html"><strong aria-hidden="true">37.2.2.</strong> Rust 브리지</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/generated-cpp.html"><strong aria-hidden="true">37.2.3.</strong> 생성된 C++</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/cpp-bridge.html"><strong aria-hidden="true">37.2.4.</strong> C++ 브리지</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/shared-types.html"><strong aria-hidden="true">37.2.5.</strong> 공유 타입</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/shared-enums.html"><strong aria-hidden="true">37.2.6.</strong> 공유 Enum</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/rust-result.html"><strong aria-hidden="true">37.2.7.</strong> Rust 오류처리</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/cpp-exception.html"><strong aria-hidden="true">37.2.8.</strong> C++ 오류처리</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/type-mapping.html"><strong aria-hidden="true">37.2.9.</strong> 추가 타입</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/android-build-cpp.html"><strong aria-hidden="true">37.2.10.</strong> Android용 빌드: C++</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/android-cpp-genrules.html"><strong aria-hidden="true">37.2.11.</strong> Android용 빌드: Genrules</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/cpp/android-build-rust.html"><strong aria-hidden="true">37.2.12.</strong> Android용 빌드: Rust</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="android/interoperability/java.html"><strong aria-hidden="true">37.3.</strong> Java와의 상호운용성</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/android/morning.html"><strong aria-hidden="true">38.</strong> 연습문제</a></span></li><li class="chapter-item "><li class="part-title">Chromium</li></li><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium.html"><strong aria-hidden="true">39.</strong> 개요</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/setup.html"><strong aria-hidden="true">40.</strong> 설치</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/cargo.html"><strong aria-hidden="true">41.</strong> Chromium 및 Cargo 생태계 비교</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/policy.html"><strong aria-hidden="true">42.</strong> 정책</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/build-rules.html"><strong aria-hidden="true">43.</strong> 빌드 규칙</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/build-rules/unsafe.html"><strong aria-hidden="true">43.1.</strong> 안전하지 않은 코드</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/build-rules/depending.html"><strong aria-hidden="true">43.2.</strong> Chromium C++에 의존하는 Rust 코드</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/build-rules/vscode.html"><strong aria-hidden="true">43.3.</strong> Visual Studio Code</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/chromium/build-rules.html"><strong aria-hidden="true">43.4.</strong> 연습문제</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/testing.html"><strong aria-hidden="true">44.</strong> 테스트</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/testing/rust-gtest-interop.html"><strong aria-hidden="true">44.1.</strong> rust_gtest_interop Library</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/testing/build-gn.html"><strong aria-hidden="true">44.2.</strong> GN Rules for Rust Tests</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/testing/chromium-import-macro.html"><strong aria-hidden="true">44.3.</strong> chromium::import! Macro</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/chromium/testing.html"><strong aria-hidden="true">44.4.</strong> 연습문제</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/interoperability-with-cpp.html"><strong aria-hidden="true">45.</strong> C++와의 상호운용성</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/interoperability-with-cpp/example-bindings.html"><strong aria-hidden="true">45.1.</strong> 예제</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/interoperability-with-cpp/limitations-of-cxx.html"><strong aria-hidden="true">45.2.</strong> CXX 제한사항</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/interoperability-with-cpp/error-handling.html"><strong aria-hidden="true">45.3.</strong> CXX에서의 오류처리</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/interoperability-with-cpp/error-handling-qr.html"><strong aria-hidden="true">45.3.1.</strong> 오류처리 예제: QR</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/interoperability-with-cpp/error-handling-png.html"><strong aria-hidden="true">45.3.2.</strong> 오류처리 예제: PNG</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/interoperability-with-cpp/using-cxx-in-chromium.html"><strong aria-hidden="true">45.4.</strong> Chromium에서 CXX 사용</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/chromium/interoperability-with-cpp.html"><strong aria-hidden="true">45.5.</strong> 연습문제</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates.html"><strong aria-hidden="true">46.</strong> 서드 파티 크레이트 추가</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/configuring-cargo-toml.html"><strong aria-hidden="true">46.1.</strong> Cargo.toml 구성</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/configuring-gnrt-config-toml.html"><strong aria-hidden="true">46.2.</strong> gnrt_config.toml 구성</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/downloading-crates.html"><strong aria-hidden="true">46.3.</strong> 크레이트 다운로드</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/generating-gn-build-rules.html"><strong aria-hidden="true">46.4.</strong> gn 빌드 규칙 생성</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/resolving-problems.html"><strong aria-hidden="true">46.5.</strong> 문제 해결</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/resolving-problems/build-scripts-which-generate-code.html"><strong aria-hidden="true">46.5.1.</strong> 코드를 생성하는 스크립트 빌드</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/resolving-problems/build-scripts-which-take-arbitrary-actions.html"><strong aria-hidden="true">46.5.2.</strong> C++를 빌드하거나 임의의 작업을 실행하는 스크립트 빌드</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/depending-on-a-crate.html"><strong aria-hidden="true">46.6.</strong> 크레이트에 따라 다름</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/reviews-and-audits.html"><strong aria-hidden="true">46.7.</strong> 검토 및 분석</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/checking-in.html"><strong aria-hidden="true">46.8.</strong> Chromium 소스 코드에 체크인</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chromium/adding-third-party-crates/keeping-up-to-date.html"><strong aria-hidden="true">46.9.</strong> 크레이트를 최신 상태로 유지</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/chromium/third-party.html"><strong aria-hidden="true">46.10.</strong> 연습문제</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/chromium/bringing-it-together.html"><strong aria-hidden="true">47.</strong> 총정리 - 연습문제</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/chromium/solutions.html"><strong aria-hidden="true">48.</strong> 연습문제 해답</a></span></li><li class="chapter-item "><li class="part-title">Bare Metal 오전</li></li><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal.html"><strong aria-hidden="true">49.</strong> 개요</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/no_std.html"><strong aria-hidden="true">50.</strong> no_std</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/minimal.html"><strong aria-hidden="true">50.1.</strong> 작은 예제</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/alloc.html"><strong aria-hidden="true">50.2.</strong> alloc</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/microcontrollers.html"><strong aria-hidden="true">51.</strong> 마이크로컨트롤러</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/microcontrollers/mmio.html"><strong aria-hidden="true">51.1.</strong> 원시 MMIO</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/microcontrollers/pacs.html"><strong aria-hidden="true">51.2.</strong> PAC</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/microcontrollers/hals.html"><strong aria-hidden="true">51.3.</strong> HAL 크레이트</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/microcontrollers/board-support.html"><strong aria-hidden="true">51.4.</strong> 보드 지원 크레이트</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/microcontrollers/type-state.html"><strong aria-hidden="true">51.5.</strong> Type State 패턴</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/microcontrollers/embedded-hal.html"><strong aria-hidden="true">51.6.</strong> embedded-hal</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/microcontrollers/probe-rs.html"><strong aria-hidden="true">51.7.</strong> probe-rs, cargo-embed</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/microcontrollers/debugging.html"><strong aria-hidden="true">51.7.1.</strong> 디버깅</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/microcontrollers/other-projects.html"><strong aria-hidden="true">51.8.</strong> 다른 프로젝트</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/bare-metal/morning.html"><strong aria-hidden="true">52.</strong> 연습문제</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/bare-metal/compass.html"><strong aria-hidden="true">52.1.</strong> 나침반</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/bare-metal/solutions-morning.html"><strong aria-hidden="true">52.2.</strong> 해답</a></span></li></ol><li class="chapter-item "><li class="part-title">Bare Metal 오후</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps.html"><strong aria-hidden="true">53.</strong> 애플리케이션 프로세서</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/entry-point.html"><strong aria-hidden="true">53.1.</strong> Rust 수행 준비</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/inline-assembly.html"><strong aria-hidden="true">53.2.</strong> 인라인 어셈블리</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/mmio.html"><strong aria-hidden="true">53.3.</strong> MMIO</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/uart.html"><strong aria-hidden="true">53.4.</strong> UART 드라이버 작성</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/uart/traits.html"><strong aria-hidden="true">53.4.1.</strong> 더 많은 트레잇</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/better-uart.html"><strong aria-hidden="true">53.5.</strong> 더 나은 UART 드라이버</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/better-uart/bitflags.html"><strong aria-hidden="true">53.5.1.</strong> 비트플래그</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/better-uart/registers.html"><strong aria-hidden="true">53.5.2.</strong> 더 많은 레지스터</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/better-uart/driver.html"><strong aria-hidden="true">53.5.3.</strong> 드라이버</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/better-uart/using.html"><strong aria-hidden="true">53.5.4.</strong> 사용해 보기</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/logging.html"><strong aria-hidden="true">53.6.</strong> 로깅</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/logging/using.html"><strong aria-hidden="true">53.6.1.</strong> 사용해 보기</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/exceptions.html"><strong aria-hidden="true">53.7.</strong> 예외</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/aps/other-projects.html"><strong aria-hidden="true">53.8.</strong> 다른 프로젝트</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/useful-crates.html"><strong aria-hidden="true">54.</strong> 유용한 크레이트</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/useful-crates/zerocopy.html"><strong aria-hidden="true">54.1.</strong> zerocopy</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/useful-crates/aarch64-paging.html"><strong aria-hidden="true">54.2.</strong> aarch64-paging</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/useful-crates/buddy_system_allocator.html"><strong aria-hidden="true">54.3.</strong> buddy_system_allocator</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/useful-crates/tinyvec.html"><strong aria-hidden="true">54.4.</strong> tinyvec</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/useful-crates/spin.html"><strong aria-hidden="true">54.5.</strong> 회전</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/android.html"><strong aria-hidden="true">55.</strong> 안드로이드</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bare-metal/android/vmbase.html"><strong aria-hidden="true">55.1.</strong> vmbase</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/bare-metal/afternoon.html"><strong aria-hidden="true">56.</strong> 연습문제</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/bare-metal/rtc.html"><strong aria-hidden="true">56.1.</strong> RTC 드라이버</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/bare-metal/solutions-afternoon.html"><strong aria-hidden="true">56.2.</strong> 해답</a></span></li></ol><li class="chapter-item "><li class="part-title">동시성 오전</li></li><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency.html"><strong aria-hidden="true">57.</strong> 개요</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/threads.html"><strong aria-hidden="true">58.</strong> 스레드</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/scoped-threads.html"><strong aria-hidden="true">58.1.</strong> 범위 스레드(Scoped Threads)</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/channels.html"><strong aria-hidden="true">59.</strong> 채널</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/channels/unbounded.html"><strong aria-hidden="true">59.1.</strong> 무경계 채널</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/channels/bounded.html"><strong aria-hidden="true">59.2.</strong> 경계 채널</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/send-sync.html"><strong aria-hidden="true">60.</strong> Send와 Sync</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/send-sync/send.html"><strong aria-hidden="true">60.1.</strong> Send</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/send-sync/sync.html"><strong aria-hidden="true">60.2.</strong> Sync</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/send-sync/examples.html"><strong aria-hidden="true">60.3.</strong> 예제</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/shared_state.html"><strong aria-hidden="true">61.</strong> 상태 공유</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/shared_state/arc.html"><strong aria-hidden="true">61.1.</strong> Arc</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/shared_state/mutex.html"><strong aria-hidden="true">61.2.</strong> Mutex</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="concurrency/shared_state/example.html"><strong aria-hidden="true">61.3.</strong> 예제</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/concurrency/morning.html"><strong aria-hidden="true">62.</strong> 연습문제</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/concurrency/dining-philosophers.html"><strong aria-hidden="true">62.1.</strong> 식사하는 철학자들</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/concurrency/link-checker.html"><strong aria-hidden="true">62.2.</strong> 멀티스레드 링크 검사기</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/concurrency/solutions-morning.html"><strong aria-hidden="true">62.3.</strong> 해답</a></span></li></ol><li class="chapter-item "><li class="part-title">동시성 오후</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="async.html"><strong aria-hidden="true">63.</strong> 비동기 관련 기본사항</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="async/async-await.html"><strong aria-hidden="true">63.1.</strong> async/await</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="async/futures.html"><strong aria-hidden="true">63.2.</strong> Future</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="async/runtimes.html"><strong aria-hidden="true">63.3.</strong> 비동기 런타임들</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="async/runtimes/tokio.html"><strong aria-hidden="true">63.3.1.</strong> Tokio</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="async/tasks.html"><strong aria-hidden="true">63.4.</strong> 태스크</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="async/channels.html"><strong aria-hidden="true">63.5.</strong> 비동기 채널</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="async/control-flow.html"><strong aria-hidden="true">64.</strong> 흐름 제어</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="async/control-flow/join.html"><strong aria-hidden="true">64.1.</strong> Join</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="async/control-flow/select.html"><strong aria-hidden="true">64.2.</strong> Select</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="async/pitfalls.html"><strong aria-hidden="true">65.</strong> 함정</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="async/pitfalls/blocking-executor.html"><strong aria-hidden="true">65.1.</strong> Executor 블로킹 하기</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="async/pitfalls/pin.html"><strong aria-hidden="true">65.2.</strong> Pin</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="async/pitfalls/async-traits.html"><strong aria-hidden="true">65.3.</strong> 비동기 트레잇</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="async/pitfalls/cancellation.html"><strong aria-hidden="true">65.4.</strong> 취소</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/concurrency/afternoon.html"><strong aria-hidden="true">66.</strong> 연습문제</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/concurrency/dining-philosophers-async.html"><strong aria-hidden="true">66.1.</strong> 식사하는 철학자들</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/concurrency/chat-app.html"><strong aria-hidden="true">66.2.</strong> 채팅 애플리케이션</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="exercises/concurrency/solutions-afternoon.html"><strong aria-hidden="true">66.3.</strong> 해답</a></span></li></ol><li class="chapter-item "><li class="part-title">끝으로...</li></li><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="thanks.html"><strong aria-hidden="true">67.</strong> 감사인사</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="glossary.html"><strong aria-hidden="true">68.</strong> 용어집</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="other-resources.html"><strong aria-hidden="true">69.</strong> 러스트 참고 자료</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="credits.html"><strong aria-hidden="true">70.</strong> 도와주신 분들</a></span></li></ol>';
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

