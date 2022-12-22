//html에 js를 연동 시켜서 js 코드를 작성 시 window.onload=function(){}작성 후 선언문을 function{안에 작성}
window.onload = function(){
let gnb = document.querySelectorAll('#gnb>li');
let gnbElement = document.querySelector('#gnb');

//마우스 클릭 했을 때 이벤트 발생
for(i=0; i<gnb.length; i++){
    gnb[i].addEventListener('mouseover',function(){
        gnbElement.classList.add('on'); //classList 라는 명령어가 있어서 ('on')-> "."이 안붙는다.
    });
}

let headerElement = document.querySelector('header');
//마우스 클릭 해제 했을 때 이벤트 발생
//event를 약자로 e로 주로 사용\
headerElement.addEventListener('mouseout',function(e){
    if(e.target.id=='gnb'){
        gnbElement.classList.remove('on');
    }
});}
