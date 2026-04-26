class Person {
    firstName
    lastName;
    age
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
class Student extends Person {
    studentID;
    courses;
    constructor(firstName, lastName, age, studentID) {
        super(firstName, lastName, age);
        this.studentID = studentID;
        this.courses = [];
    }
    enroll(course){
        this.courses.push(course);
    }
    getCourses() {
        return this.courses;
    }
}
class Course {
    courseName;
    courseCode;
    credits;
    constructor(courseName, courseCode, credits) {
        this.courseName = courseName;
        this.courseCode = courseCode;
        this.credits = credits;
    }
    getCourseInfo() {
        return `${this.courseName} ${this.courseCode} ${this.credits}`;
    }
}

class University {
    students;
    courses;
    constructor() {
        this.students = []
        this.courses = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    addCourse(course) {
        this.courses.push(course);
    }
    getStudentInfo(studentId) {
        return this.students.find((student) => student.studentID === studentId);
    }
}

const course1 = new Course('Math', 'M101', 3);
const course2 = new Course('Physics', 'P202', 4);
const course3 = new Course('Programming', 'CS50', 5);

const student1 = new Student('Maksym', 'Ivanov', 25, 1);
const student2 = new Student('Anna', 'Petrova', 22, 2);

student1.enroll(course1);
student1.enroll(course3);
student2.enroll(course2);

const university = new University();

university.addStudent(student1);
university.addStudent(student2);
university.addCourse(course1);
university.addCourse(course2);
university.addCourse(course3);

console.log(university.getStudentInfo(2));

console.log('Info about course =>', course1.getCourseInfo()); // get info about some course
console.log('Info about specific user =>', student1.getFullName()); // get info about specific user
console.log('Info about courses of user =>', student1.getCourses()); // get info about courses of user