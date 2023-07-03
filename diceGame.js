function solution(a, b) {
    var answer = 0;
    // a와 b가 모두 홀수라면 a2 + b2 점을 얻습니다.
    if (a % 2 != 0 & b % 2 != 0) {
        console.log("모두 홀수!");
        console.log("(a**2) + (b**2) = ");
        answer = (a**2) + (b**2);
    } else if (a % 2 != 0 | b % 2 != 0) { // a와 b 중 하나만 홀수라면 2 × (a + b) 점을 얻습니다.
        console.log("하나만 홀수!");
        console.log("2*(a+b) = ");
        answer = 2*(a+b);
    }
    // a와 b 모두 홀수가 아니라면 |a - b| 점을 얻습니다.
    if (a % 2 == 0 && b % 2 == 0) {
        aconsole.logert("모두 짝수!");
        console.log("|a-b| = ");
        answer = Math.abs(a-b);
    }
    return answer;
}