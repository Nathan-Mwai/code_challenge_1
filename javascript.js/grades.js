// the first test
function grading(marks){
    if (marks >= 79 && marks <= 100){
        // if student gets between 79 - 100 he/she gets an A
        return  `A`;
    }else if(marks < 79 && marks >= 60){
        // if student gets between 60 - 79 he/she gets an B
        return `B`;
    }else if(marks < 59 && marks >= 49){
        // if student gets between 49 - 59 he/she gets an C
        return `C`;
    }else if(marks < 49 && marks >= 40){
        // if student gets between 40 - 49 he/she gets an D
        return `D`
    }else if(marks < 40){
        // if student gets between 0 - 40 he/she gets an E
        return `E`
    }else if(marks > 100){
        // if Teacher inputs more than 100 error shows up
        return`Please input your correct grade.`
    }
    else{
        // if Teacher inputs nothing
        //NB if the student did not do the exam put 0. It is only fair!
        return `Please input your grade here.`
    }
}

// Example: Student Gradings
const Bruce = 100;
console.log(grading(Bruce));