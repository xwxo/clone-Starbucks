const searchEl = document.querySelector('.search');
//class가 search인 html 요소를 선택하여 searchEl이라는 상수에 할당함

const searchInputEl = searchEl.querySelector('input');
//=document.querySelector('.search input') -> serchEl 안에서 input 요소를 선택하여 할당

//search의 어느부분을 클릭해도(ex.돋보기아이콘) input창을 포커스 한것과 같게함
searchEl.addEventListener('click', function (){
  searchInputEl.focus();
}) //searchEl을 클릭하면 함수(searchInputEl에 focus해라 = 인풋요소에 포커스해라)가 실행된다.

//어려움)) 검색창 포커스시 통합검색이라는 placeholder(힌트어) 출력
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused'); //input에 포커스되면 search에 'focused'라는 class내용을 추가하겠다
  searchInputEl.setAttribute('placeholder', '통합검색'); //input의 요소 속성을 추가한다
  //<input type="text"> -> <input type="text" placeholder="통합검색">
})
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused'); //input에 포커스가 해제(blur)되면 상위단계에서 추가된 focuser class를 삭제함
  searchInputEl.setAttribute('placeholder', ''); //input의 요소속성으로 placeholder='' (빈문자열)로 바꿔줌
})