let students = 20;

students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;
let extraStudents = students % 3;

students += 1;
// students -= 1;
// students *= 1;
// students /= 1;
//! students %= 3;

document.getElementById('students').innerHTML = `Students: ${students}`;
document.getElementById('extra-students').innerHTML = `Extra students: ${extraStudents}`;
console.log(students);
console.log(extraStudents);


/**
 * Ordem de execução de operações matemáticas
 * 1. parenteses
 * 2. expoentes
 * 3. multiplicação e divisão
 * 4. adição e subtração
 */
let result = 1 + 2 * (3 + 4);

document.getElementById('result').innerHTML = `Result: ${result}`;
console.log(result);