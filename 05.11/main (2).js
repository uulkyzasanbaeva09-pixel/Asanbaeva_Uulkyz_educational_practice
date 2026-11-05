const employee = {
    name: 'Лилли',
    position: 'Веб-разработчик',
    showInfo() {
        console.log(this.name, this.position);
    }
};
console.log('Обычный вызов');
employee.showInfo();
console.log('Вызов через переменную (без bind)');
const fn = employee.showInfo;
fn(); 
console.log('Вызов через bind()');
const boundFn = employee.showInfo.bind(employee);
boundFn();
const employee2 = {
    name: 'Милвис',
    position: 'Дизайнер'
};
const boundFn2 = employee.showInfo.bind(employee2);
console.log('Метод первого сотрудника, но контекст второго');
boundFn2(); 