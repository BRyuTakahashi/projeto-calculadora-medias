const form = document.getElementById('activity');
const imgApprove = '<img src="./assets/images/aprovado.png" alt="Emoji Celebrando">';
const imgDisapprove = '<img src="./assets/images/reprovado.png" alt="Emoji Decepcionado">';
const activities = [];
const grades = [];
const approveSpan = '<span class="resultado aprovado">Aprovado</span>';
const disapproveSpan = '<span class="resultado reprovado">Reprovado</span>';
const minimumGrade = parseFloat(prompt("Digite a nota minima:"));
let lines = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    addLine();
    updateTable();
    updateAverage();
});

function addLine() {
    const inputName = document.getElementById('activity-name');
    const inputGrade = document.getElementById('activity-grade');

    if(activities.includes(inputName.value)) {
        alert(`A atividade ${inputName.value} já foi inserida`)
    } else {
        activities.push(inputName.value);
        grades.push(parseFloat(inputGrade.value));

        let line = '<tr>';
        line += `<td>${inputName.value}</td>`;
        line += `<td>${inputGrade.value}</td>`
        line += `<td>${inputGrade.value >= minimumGrade ? imgApprove : imgDisapprove}</td>`
        line += `</tr>`
        
        lines += line;
    }

    
    inputGrade.value = '';
    inputName.value = '';    
}

function updateTable() {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = lines;
}

function updateAverage() {
    const finalAverage = calcFinalAverage();

    document.getElementById('final-average-value').innerHTML = finalAverage;
    document.getElementById('final-average-result').innerHTML = finalAverage >= minimumGrade ? approveSpan : disapproveSpan;
}

function calcFinalAverage() {
    let sumGrades = 0;

    for(let i = 0; i < grades.length; i++) {
        sumGrades += grades[i];
    }

    return sumGrades / grades.length;
}