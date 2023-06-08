function counter(countTo, countBy){
    let num1 = countTo; 
    let num2 = countBy;

    if (!Number(num1)) {
        return "please enter number";
        if (num1.trim().length === 0) {
            return "please enter number";
        }
    } 
    if (!Number(num2)) {
        return "please enter number";
        if (num2.trim().length === 0) {
            return "please enter number";
        }
    }
    if (num1 < 0) {
        return "please enter number"
    }
    if (num2 < 0) {
        return "please enter number"
    }
    if (num2 > num1) {
        return "please enter number"
    }
    for (let i = num2; i <= num1; i += num2) {
    console.log(i);
    }
};
