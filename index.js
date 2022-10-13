console.log("asynchonous with callback 1");

getDate(1)
.then(students => {
    console.log(students)
        getCourses(students)
        .then(students => {
            console.log(students.courses)
                getMarks(students.courses)
                .then(marks => {
                    console.log(marks)
                })
                })
})

console.log("asynchonous with callback 2");


function getDate (id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ({id: id, name: 'Md. Omar Faruk'});
        }, 500);
    });
    
};

function getCourses (id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ({id: id.id, name: id.name, courses: ["JavaScript", "Python"]});
        }, 550)
    });
    
}

function getMarks(courses) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ({[courses[0]]: 99, [courses[1]]: 100,});
        }, 600)
    });
}
