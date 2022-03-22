function one() {
 two();
}

function two() {
 one();
}

one();

// 맥시멈 콜스텍 확인하는 코드

let i = 0;
function recurse(){
    i++;
    recurse();
} try {
    recurse();
} catch(ex) {
    alert('최대크기는'+i+'\nerror'+ex);
}

// 여기서부터 진짜 원시형 데이터 타입!

//String -> 규칙: 같은 모양새로 시작했다가 끝나기
"yunseop"
'yunseop'

"yunseop' // 은 에러가 난다.

"Hello They call me \"the awesome man\""

//이스케이프를 하기 위해 \를 사용해주었다.


//정수
30

//실수
1.2

//boolean
true
false

//값 유무
undefined // 값이 아직 정의되지 않았다
null // "값이 없음"을 정의해주었다.
NaN // 값이 들어가야 할 곳에 숫자가 들어갔을 때 "이 놈은 숫자가 아니여~ (Not a Number)라는 뜻으로 씀