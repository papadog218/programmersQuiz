/*
    정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.
    
    입출력 예 #1
    [1, 2, 3, 4, 5]의 각 원소에 두배를 한 배열 [2, 4, 6, 8, 10]을 return합니다.
    
    입출력 예 #2
    [1, 2, 100, -99, 1, 2, 3]의 각 원소에 두배를 한 배열 [2, 4, 200, -198, 2, 4, 6]을 return합니다.
*/

function solution(numbers) {
    let answer = [];
    /*
        의사 코드
        1. 배열을 풀어헤친다
        2. 배열안의 각각의 값에 *2를 한다
        3. 두배가 된 값을 answer에 넣는다
    */
    numbers.map((num) => answer.push(num * 2));

    // reduce() 신기한게 많네.. 속도는 내가 더 빠름!
    // numbers.reduce((a, b) => [...a, b * 2], []);
    
    return answer;
}