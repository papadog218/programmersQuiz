function solution(seoul) {
    let answer = '';
    // for (let i=0; i <= seoul.length; i++) {
    //     if (seoul[i] == "Kim") {
    //         answer = `�輭���� ${i}�� �ִ�`;
    //     }
    // }
    seoul.map((item, idx) => item.includes("Kim") && (answer = `�輭���� ${idx}�� �ִ�`));

    return answer;
}