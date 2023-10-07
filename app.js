function Student(fullName , dateOfBirthday , gender , major  , phoneNumber, img){
    this.fullName = fullName;
    this.dateOfBirthday = dateOfBirthday;
    this.gender = gender;
    this.major = major;
    this.phoneNumber = phoneNumber;
    // this.img = img;
    
}

function addStudent(){

    const fullName = document.getElementById("fullName").value;
    const dateOfBirthday = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const major = document.getElementById("major").value;
    
    const phoneNumber = document.getElementById("phoneNumber").value;
    const grade = document.getElementById("grade").value;
    // const img = document.getElementById("image").value;

    

    const dRow = document.createElement("tr");
    dRow.innerHTML = `<td>${name}</td>
                        <td>${dateOfBirthday}</td>
                        <td>${gender}</td>
                        <td>${major}</td>
                        <td>${phoneNumber}</td>
                        <td>${grade}</td>`;

    document.getElementById("studentTableBody").appendChild(dRow);

    const student = new Student(fullName , dateOfBirthday ,gender , major  , phoneNumber);

    studentInf(student);

    function studentInf(student) {

       

        var studentCard = document.createElement('div');
        studentCard.className = 'card mt-3';
        studentCard.innerHTML = `
            // <img src="assets/${student.img}" class="card-img-top" alt="${student.fullName}'s Image" style="max-height: 200px;">
            <div class="card-body">
                <h5 class="card-title">${student.fullName}</h5>
                <p class="card-text">Date of Birth: ${student.dob}</p>
                <p class="card-text">Gender: ${student.gender}</p>
                <p class="card-text">Major: ${student.major}</p>
                <p class="card-text">Phone Number: ${student.phoneNumber}</p>
            </div>
        `;
            document.getElementById("carSection").appendChild(studentCard);


        const students = JSON.parse(localStorage.getItem("students")) || [];

        students.push(student);

        localStorage.setItem("students", JSON.stringify(students));
            
    }
    // const userArray = ["Username:",`${phoneNumber}`, "Dob:" , `${dateOfBirthday}`];
    // localStorage.setItem('user', JSON.stringify(userArray));
    // console.log(userArray);
}
