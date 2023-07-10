function solution(date1, date2) {
    let answer = 0;

    console.log(date1[0])
    console.log(typeof date1[0])
    console.log(0 <= date1[0] >= 10000)
    console.log(!(0 <= date1[0] >= 10000))
    
    console.log(date2[0])
    console.log(typeof date2[0])
    console.log(0 <= date2[0] <= 10000)
    console.log(!(0 <= date2[0] <= 10000))

    if (!(0 <= date1[0] <= 10000)) {
        alert("date1 year error");
        return;
    } else if (!(0 <= date2[0] <= 10000)) {
        alert("date2 year error");
        return;
    }

    let convertDate1 = new Date(date1[0], date1[1]-1, date1[2]);
    let convertDate2 = new Date(date2[0], date2[1]-1, date2[2]);

    if (!(1 <= date1[1] <= 12)) {
        alert("date1 month error");
        return;
    } else if (!(1 <= date2[1] <= 12)) {
        alert("date2 month error");
        return;
    }

    // if (1 <= date1[2] <= ) {

    // }

    convertDate1 < convertDate2 && (answer = 1);

    return answer;
}