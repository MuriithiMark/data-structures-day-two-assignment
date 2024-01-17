function getStudentMarks() {
    let marks = parseInt(prompt('Total Marks For Student: '));
    let examType = prompt("Exam type done? 'Normal' | 'Final'");

    return {
        marks,
        examType
    }
}

function evaluateStudentGrade() {
    const { marks, examType } = getStudentMarks();

    var grade = '';

    if (examType != 'Final' && marks >= 89 && marks <= 100) {
        grade = 'A+'
    } else if (examType === 'Final' && marks >= 90 && marks <= 100) {
        grade = 'A+'
    } else {
        grade = 'F'
    }

    console.log('Grade ', grade);

    if (grade === 'A+') {
        return true;
    }

    return false;
}

evaluateStudentGrade()