const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]
let grades = {"A":0, "B":0, "C":0, "D":0, "F":0} 

let gradeSort = (array) => {
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > 90) {
            grades["A"]++;
        } else if (scores[i] > 80 && scores[i] < 91) {
            grades["B"]++;
        } else if (scores[i] >70 && scores[i] < 81) {
            grades["C"]++;
        } else if (scores[i] >60 && scores[i] < 71) {
            grades["D"]++;
        } else if (scores[i] >=50 && scores[i] < 61) {
            grades["F"]++;
        }
    }
    return(grades);
}