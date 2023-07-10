function solution(array, n) {
    let answer = 0;

    const findArrCnt = array.filter(item => item === n).length;
    answer = findArrCnt;

    return answer;
}