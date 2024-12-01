class Student {
    constructor(name, age) {
        this.name = name
        this.age = age;
        this.gradeList = [];
    }

    addGrade(...numbers) {
        this.gradeList.push(...numbers);
    }

    getAverage() {
        const sum = this.gradeList.reduce((acc, num) => acc + num);
        const average = sum / this.gradeList.length;
        console.log(`Average grade of student ${this.name} = ${average}`);
    }
}

const studentList = [];

const student1 = new Student('John', 25);
studentList.push(student1);

const student2 = new Student('Maria', 14);
studentList.push(student2);

student1.addGrade(1, 2, 3);
student1.getAverage();

student2.addGrade(4, 5);
student2.getAverage();