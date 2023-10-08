function Student(fullName, dateOfBirthday, gender, major, phoneNumber) {
    this.fullName = fullName;
    this.dateOfBirthday = dateOfBirthday;
    this.gender = gender;
    this.major = major;
    this.phoneNumber = phoneNumber;
}

function addStudent() {
    const fullName = document.getElementById("fullName").value;
    const dateOfBirthday = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const major = document.getElementById("major").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const grade = document.getElementById("grade").value;

    const dRow = document.createElement("tr");
    dRow.innerHTML = `<td>${fullName}</td>
                        <td>${dateOfBirthday}</td>
                        <td>${gender}</td>
                        <td>${major}</td>
                        <td>${phoneNumber}</td>
                        <td>${grade}</td>`;

    document.getElementById("studentTableBody").appendChild(dRow);

    const students = JSON.parse(localStorage.getItem("students")) || [];

    const student = new Student(fullName, dateOfBirthday, gender, major, phoneNumber);
    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    // Clear existing content in carSection
    const carSection = document.getElementById("carSection");
    carSection.innerHTML = '';

    students.forEach(function (element) {
        const studentCard = document.createElement('div');
        studentCard.className = 'card mt-3';
        studentCard.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${element.fullName}</h5>
                <p class="card-text">Date of Birth: ${element.dateOfBirthday}</p>
                <p class="card-text">Gender: ${element.gender}</p>
                <p class="card-text">Major: ${element.major}</p>
                <p class="card-text">Phone Number: ${element.phoneNumber}</p>
            </div>
        `;

        carSection.appendChild(studentCard);
    });
}

// Fetch stored students from localStorage
const storedStudents = JSON.parse(localStorage.getItem("students")) || [];

// Loop through stored students and recreate cards
storedStudents.forEach(function (element) {
    const studentCard = document.createElement('div');
    studentCard.className = 'card mt-3';
    studentCard.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${element.fullName}</h5>
            <p class="card-text">Date of Birth: ${element.dateOfBirthday}</p>
            <p class="card-text">Gender: ${element.gender}</p>
            <p class="card-text">Major: ${element.major}</p>
            <p class="card-text">Phone Number: ${element.phoneNumber}</p>
        </div>
    `;

    document.getElementById("carSection").appendChild(studentCard);
});