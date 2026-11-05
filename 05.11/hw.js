const student = {
    name: "Гарри Джеймс Поттер",
    specialty: "Боевая магия",
    course: 3,
    faculty: "Гриффиндор",
    subjects: [
        "Зельеварение",
        "Трансфигурация",
        "Защита от тёмных искусств",
        "Травология",
        "Заклинания",
        "Астрономия"
    ]
};

const card = document.querySelector("#studentCard");
const nameEl = document.querySelector("#name");
const specialtyEl = document.querySelector("#specialty");
const courseEl = document.querySelector("#course");
const facultyEl = document.querySelector("#faculty");
const editBtn = document.querySelector("#editBtn");
const hideBtn = document.querySelector("#hideBtn");
const showBtn = document.querySelector("#showBtn");

editBtn.addEventListener("click", function() {
    const newName = prompt("Введите имя студента:", student.name);
    const newSpecialty = prompt("Введите специальность:", student.specialty);
    const newCourse = prompt("Введите курс:", student.course);
    const newFaculty = prompt("Введите факультет:", student.faculty);

    if (newName !== null) student.name = newName;
    if (newSpecialty !== null) student.specialty = newSpecialty;
    if (newCourse !== null) student.course = newCourse;
    if (newFaculty !== null) student.faculty = newFaculty;

    nameEl.textContent = student.name;
    specialtyEl.textContent = student.specialty;
    courseEl.textContent = student.course;
    facultyEl.textContent = student.faculty;
});

hideBtn.addEventListener("click", function() {
    card.style.display = "none";
    showBtn.style.display = "inline-block";
});

showBtn.addEventListener("click", function() {
    card.style.display = "block";
    showBtn.style.display = "none";
});