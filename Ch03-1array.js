//배열 생성
let arr0 = new Array(5);
let arr1 = [];

//초기화된 배열 생성
let arr2 = [1, 2, 3, 4, 5];

//배열 전체값 한번에 초기화
let arr3 = Array(10).fill(1);

//특정 로직으로 초기화
let arr4 = Array.from({length : 100}, (_, i) => i);

//임의 배열 생성
const randarray = [1, 2, 3];

//푸쉬, 푸쉬의 경우 O(1) 상수시간이 걸린다
randarray.push(4);
randarray.push(5, 6);

//배열 중간에 추가, 제거, 선형시간 가짐
randarray.splice(3, 0, 111);
randarray.splice(3, 1);

//배열길이 출력
console.log(randarray.length);




