let wrap = document.querySelector("#wrap");
let box = wrap.querySelector("div");

wrap.addEventListener("click", function(){

    // box.style.backgroundColor = "pink";
    //활성화 클래스의 제어가 아닌 js만의 제어로 색을 바꾼것
    //이런 코드는 js의 개입이 많은 코드로 좋은 코드가 아닙니다
    
    
    let isOn = wrap.classList.contains("on");
    //wrap이라는 대상의 클래스를 조사해서 on이라는 클래스가 있는지
    //없는지를 판별해서 변수로 담는다는 뜻, 결과로 불린값을 반환
    
    
    // if(isOn){
    //     wrap.classList.remove("on");
    // }else{
    //     wrap.classList.add("on");
    // }

    /*
    삼항연산자
    
    @단항 a++
    @이항 a + b
    
    
    @삼항
    (조건식) ? 참일때 실행하는 문구 : 거짓일때 실행하는 문구;
    */

    let go = (isOn) ?  wrap.classList.remove("on") : wrap.classList.add("on");


})

// wrap.addEventListener("click", function(){
//     wrap.classList.toggle("on")
// })
// toggle은 바꿔야하는 변수가 많은 경우가 많아서 잘 안씀




//____________________________________// 활성화 클래스를 이요한 제어를 배웠다면

//------------------------------------// 활성화 클래스를 함수로 바꿔서 이용

let boxes = document.querySelectorAll("section article");
let btns = document.querySelectorAll(".btns li")

for(let i=0; i< btns.length; i++ ){
    //버튼을 클릭했을때
    // btns[0].addEventListener("click",function(){})
    // btns[1].addEventListener("click",function(){})
    // btns[2].addEventListener("click",function(){})

    btns[i].addEventListener("click",function(){

    /*
    on(활성화클래스)가 0인덱스에 있는데 js는 어느 인덱스에 있는지를 추적하면 코드가 길고 복잡하다
    따라서 js코드를 적게 쓰려면 on클래스를 모든 곳에서 제거하고 필요한 곳에 on클래스를 부여한다 */
        
        // for(let el of btns){
        //     el.classList.remove("on");
        // }
        // btns[i].classList.add("on");

        // for(let el of boxes){
        //     el.classList.remove("on");
        // }
        // boxes[i].classList.add("on");

        activation(btns, i);
        activation(boxes, i);
    

    })
}
/*
함수패키징 방법
1. 반복적으로 중복적으로 사용되는 같은 기능을 하는 코드를 함수안에
가져옵니다
1-1 함수를 만듭니다
function activation(){}
1-2 생성한 함수 안에 같은 기능 코드를 넣습니다
function activation(){
    for (let el of boxes) {
          el.classList.remove("on");
       }
       boxes[i].classList.add("on");
}
2. 중복되는 코드 외에 변경이 되는 내용을 지우고 그 내용에 매개변수로
대체합니다 -> 매개변수자리에 같은 이름을 작성합니다
2-1 변경이 되는 내용을 지웁니다
function activation(){
    for (let el of ) {
          el.classList.remove("on");
       }
       [i].classList.add("on");
}
지우고 매개변수로 대체합니다 (boxes -> list 대체합니다)
function activation(list){
    for (let el of list) {
          el.classList.remove("on");
       }
       list[i].classList.add("on");
}
2-2 외부에서 받아 와야하는 내용을 매개변수로 만듦니다
함수 내부의 i는 내부에서 생성되는 내용이 아니라 외부에서 받아서
들어오는 내용이므로 매개변수로 만들어야 합니다
function activation(list){
    for (let el of list) {
          el.classList.remove("on");
       }
       list[i].classList.add("on");
}
따라서 i -> index
function activation(list, index){
    for (let el of list) {
          el.classList.remove("on");
       }
       list[index].classList.add("on");
}

cf) 매개변수?? 인수는 무엇인가??
매개변수는 함수의 ()안에 작성되는 변수입니다
인수는 함수를 호출할때 매개변수자리에 넣어질 값을 의미합니다
activation(boxes, i); <-- 여기에서 boxes는 인수입니다
지우고 매개변수로 대체합니다 (boxes -> list  대체합니다)
*/

function activation(list, index){
    for(let el of list){
        el.classList.remove("on");
    }
    list[index].classList.add("on");

}

/*
절차지향 - 코드내용을 단계단계 차근차근 표현하는 것을 의미합니다
단점 : 길다, 필요없는 내용이 너무 많다, => 생산성 저하 발생



함수 패키징 - 자주사용되거 , 같은 기능을 하는 내용을 함수로 패키징합니다
이때 함수에 매개변수를 만들어서 틀을 만들어주는 것입니다
장점 : 코드가 비교적 짧아지고, 재활용을 하기때문에 생산성이 높아집니다
단점 : 함수가 너무 많아집니다, 함수안에 또 함수가 오는등의 복잡해집니다
=>결과 생산성이 더 떨어지는경우가 발생합니다

객체지향 - 함수패키징이 눈오리 도구 였다면 객체지향은 공장입니다
클래스를 만들어서 생산합니다
단점 : 어렵다


*/
       