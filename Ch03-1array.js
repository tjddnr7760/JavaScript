//배열 생성
let arr0 = new Array(5);
let arr1 = [];

//초기화된 배열 생성
let arr2 = [1, 2, 3, 4, 5];

//배열 전체값 한번에 초기화
let arr3 = Array(10).fill(1);

//특정 로직으로 초기화, 배열입력 , value와 key매개변수 받아서 value리턴
let arr4 = Array.from({length : 100}, (v, k) => k);

//임의 배열 생성
const randarray = [1, 2, 3];

//푸쉬, 푸쉬의 경우 O(1) 상수시간이 걸린다
randarray.push(4);
randarray.push(5, 6);

//팝
randarray.pop();

//배열 중간에 추가, 제거, 선형시간 가짐
randarray.splice(3, 0, 111);
randarray.splice(3, 1);

//배열길이 출력
randarray.length;

//배열 join함수
console.log(randarray.join("+ "));

//배열 reverse함수
console.log(randarray.reverse());

//배열 합치기
const secondarr = [7, 8, 9, 10];
console.log(randarray.concat(secondarr));

//shift, unshift 맨앞에 요소 추가, 삭제
randarray.shift();
randarray.unshift(9);

//배열 중간 자르기 slice, 자를 첫번째 index, 어떤 index앞까지 짜를지
//slice의경우 원본 배열이 변경되지 않음
randarray.slice(2, 4);

//배열의 순회
for(let i =0; i < 10; i++){
    console.log(randarray[i]);
}

for (const item of randarray) {
    console.log(item);
}

//배열은 객체와 타입이 동일하다. 배열을 객체와 동일하게 사용가능, 배열의 길이는 달라지지 않음
console.log(typeof randarray);

//객체의 생성
const obj1 = new Object();
const obj2 = {};
const obj3 = {name : "john", company : "changwon national univ"};

//객체에서 값추가
obj3["email"] = "xxxxx@xxxxx";
obj3.phone = "01000000000";

//객체에서 삭제
delete obj3.phone;

//객체에서 key있는지 확인
"email" in obj3;
"phone" in obj3;

//객체에서의 키 확인
console.log(Object.keys(obj3));
console.log(Object.values(obj3));

//객체 순환 방법
for(const key in obj3){
    console.log(key, obj3[key]);
}