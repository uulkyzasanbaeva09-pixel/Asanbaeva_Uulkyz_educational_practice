const students = [
    { name: 'Anna', grade: 5 },
    { name: 'Ivan', grade: 4 },
    { name: 'Anna', grade: 5 }, 
    { name: 'Petr', grade: 3 },
    { name: 'Olga', grade: 4 },
    { name: 'Ivan', grade: 4 }  
];
const uniqueStrings = new Set(students.map(s => JSON.stringify(s)));
const uniqueStudents = [...uniqueStrings].map(s => JSON.parse(s));
console.log("Уникальные студенты:", uniqueStudents);
const gradeMap = new Map();
students.forEach(function(student) {
if (!gradeMap.has(student.grade)) {
        gradeMap.set(student.grade, []);
    }
    gradeMap.get(student.grade).push(student.name);
});
gradeMap.forEach(function(names, grade) {
    console.log(`Оценка ${grade}: ${names.join(', ')}`);
});
const allGrades = [...gradeMap.keys()];
console.log("Все оценки:", allGrades);