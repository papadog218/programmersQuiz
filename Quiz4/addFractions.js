/*
    첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1,
    두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다.
    두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

    입출력 예 #1
    1 / 2 + 3 / 4 = 5 / 4입니다. 따라서 [5, 4]를 return 합니다.

    입출력 예 #2
    9 / 2 + 1 / 3 = 29 / 6입니다. 따라서 [29, 6]을 return 합니다.
*/

function solution(numer1, denom1, numer2, denom2) {
    let answer = [];
    
    // 두수의 최대공약수 계산
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    // 공통 분모 찾기
    const commonDenominator = denom1 * denom2;
    console.log(`commonDenominator = ${commonDenominator}`);
    
    // 분자 계산
    const newNumerator1 = numer1 * denom2;
    const newNumerator2 = numer2 * denom1;
    console.log(`newNumerator1 = ${newNumerator1}`);
    console.log(`newNumerator2 = ${newNumerator2}`);
    
    // 두 분수의 덧셈
    const sumNumerator = newNumerator1 + newNumerator2;
    console.log(`sumNumerator = ${sumNumerator}`);

    // 결과의 최대공약수 찾기
    const greatestCommonDivisor = gcd(sumNumerator, commonDenominator);
    console.log(`greatestCommonDivisor = ${greatestCommonDivisor}`);
    
    answer.push(sumNumerator / greatestCommonDivisor);
    answer.push(commonDenominator / greatestCommonDivisor);
    
    return answer;
}