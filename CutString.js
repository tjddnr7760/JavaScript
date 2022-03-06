//문자열 가공
let string = "This is String";

//문자열 하나씩 자르기- charAt()함수
console.log(string.charAt(4));

//문자열 하나씩 자르기 - 배열형태로 반환
console.log(string[0]);

//문자열의 특정지점부터 시작하여 파라미터로 받은 길이만큼 자르는 함수
console.log(string.substr(1, 2));

//문자열의 특정지점부터 특정 지점까지 자르는 함수, 두함수의 차이점은 예외처리에 있음
console.log(string.substring(0, 3));
console.log(string.slice(0, 3));

//문자열을 구분자로 잘라서 배열로 저장하는 방법
//split("구분자", int : 만들 배열갯수)
console.log(string.split(" "));
console.log(string.split(""));
console.log(string.split(","));

//for...of 문을 이용하여 string 하나씩 처리
for(const c of string){
    console.log(c);
}

//문자열 비교, 타입신경안쓰고 비교, 타입까지 비교, ASCII비교
const string1 = "1";
const number = 1
console.log(string1 == number);
console.log(string1 === number);
console.log(string1 > string);