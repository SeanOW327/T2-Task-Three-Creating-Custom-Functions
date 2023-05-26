

calculate = () => {
    let valueOne = +document.getElementById("valueOne").value;
    let valueTwo = +document.getElementById("valueTwo").value;
    let modifier = document.getElementById("modifier").value;
    let answer = 0;

    if(modifier === "Plus"){
        answer = valueOne + valueTwo;
    } else if(modifier === "Times"){
        answer = valueOne * valueTwo;
    } else if(modifier === "Minus"){
        answer = valueOne - valueTwo;
    } else if(modifier === "Divide"){
        answer = valueOne / valueTwo
    }

    alert(answer);
    console.log(answer);
}