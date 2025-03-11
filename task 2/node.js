
let students = [];
function createStudent(name, age, mark) {
    return { name: name, age: age, mark: mark }
}

students.push(createStudent("yanal", 19, 80));
students.push(createStudent("omar", 18, 50));
students.push(createStudent("moumen", 20, 30));
students.push(createStudent("hmaza", 19, 90));
students.push(createStudent("ahmed", 17, 70));

let successStudents = [];
let faildStudents = [];

for (let i = 0; i < students.length; i++) {
    if (students[i].mark >= 50) {
        successStudents.push(students[i]);
    } else {
        faildStudents.push(students[i]);
    }
}

console.log("sucess Studentss", successStudents)
console.log("faild Students", faildStudents)