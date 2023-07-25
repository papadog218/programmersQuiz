function solution(arr, query) {
    var answer = [];
    // query의 인덱스가 짝수이면 해당 인덱스의 값으로 arr의 인덱스 뒷부분을 자르기 arr.splice(item, arr.length)
    // console.log(arr);
    // console.log(query[0]);
    // console.log(arr.splice(query[0]+1));
    // console.log(arr);
    // console.log(query[1]);
    // console.log(arr.splice(0, query[1]));
    // console.log(arr);
    // console.log(query[2]);
    // console.log(arr.splice(query[2]+1));
    console.log(arr);
    query.map((item, idx) => idx % 2 == 0 ? arr.splice(item+1) : arr.splice(0, item));
    console.log("변환후");
    console.log(arr);
    answer = arr;
    // console.log(query);
    return answer;
}