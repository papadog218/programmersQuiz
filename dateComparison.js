function solution(date1, date2) {
    var answer = 0;
    let convertDate1 = new Date(date1[0], date1[1]-1, date1[2]);
    let convertDate2 = new Date(date2[0], date2[1]-1, date2[2]);
    convertDate1 < convertDate2 && (answer = 1);
    return answer;
}