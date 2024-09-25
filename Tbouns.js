function performOperations() {
    let students = [
        { Name: 'Arwa', Degree: 95 },
        { Name: 'Mohamed', Degree: 85 },
        { Name: 'Ali', Degree: 50 },
        { Name: 'Menna', Degree: 75 },
        { Name: 'Reem', Degree: 55 },
    ];

    const topStudent = students.find(student => student.Degree >= 90 && student.Degree <= 100);
    const topStudentName = topStudent ? topStudent.Name : 'None';

    const lowScoringStudents = students.filter(student => student.Degree < 60);
    const lowScoringStudentNames = lowScoringStudents.map(student => student.Name).join(', ');

    students.push({ Name: 'Hager', Degree: 88 });

 
    let allStudentsAfterAdd = '';
    for (let index in students) {
        allStudentsAfterAdd += JSON.stringify(students[index]) + '<br>';
    }

    students.pop();

    let allStudentsAfterRemove = '';
    for (let student of students) {
        allStudentsAfterRemove += JSON.stringify(student) + '<br>';
    }

    students.sort((a, b) => a.Name.localeCompare(b.Name));
    const sortedStudents = students.map(student => JSON.stringify(student)).join('<br>');

    students.splice(2, 0, { Name: 'Yamen', Degree: 80 }, { Name: 'Yousef', Degree: 92 });
    const studentsAfterSpliceAdd = students.map(student => JSON.stringify(student)).join('<br>');

    students.splice(3, 1);
    const studentsAfterSpliceRemove = students.map(student => JSON.stringify(student)).join('<br>');

    document.getElementById('output').innerHTML = `
        <h3>Top Student (Degree between 90 and 100):</h3>
        <p>${topStudentName}</p>
        <h3>Students with Degree Less than 60:</h3>
        <p>${lowScoringStudentNames}</p>
        <h3>All Students after Adding a New Student:</h3>
        <p>${allStudentsAfterAdd}</p>
        <h3>All Students after Removing the Last Student:</h3>
        <p>${allStudentsAfterRemove}</p>
        <h3>Students Sorted Alphabetically by Name:</h3>
        <p>${sortedStudents}</p>
        <h3>Students after Adding 2 New Students after the Second Element:</h3>
        <p>${studentsAfterSpliceAdd}</p>
        <h3>Students after Removing 1 Student after the Third Element:</h3>
        <p>${studentsAfterSpliceRemove}</p>
    `;
}
