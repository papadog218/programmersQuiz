function solution(a, b, flag) {
    var answer = 0;
    // 제한사항
    if (-1000 <= a & b <= 1000) {
        flag ? answer = a + b : answer = a - b;
    } else {
        alert("제한사항과 맞지 않아요!");
    }
    return answer;
}