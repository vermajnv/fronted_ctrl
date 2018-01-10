let studentToBeModify = {};

const listTemp = () => {
    return `<table id="table">
                <tr><th onclick = "sortBy('name')">Name<i value = "name" id = "nameSymb"></i></th><th onclick = "sortBy('address')">Address<i></i></th><th onclick = "sortBy('college')">College<i></i></th><th>Update Action</th><th>Update Action</th>   </tr>
                ${students.map((student)=>{
                    return `<tr> <td>${student.name}</td> <td>${student.address}</td> <td>${student.college}</td> <td><button onclick="erase(${student.id})">X</button></td><td> <button onclick="update(${student.id},'Update')">Update</button></td></tr>`;
                }).join('')
            }
            </table>
            <button onclick="onAddClick('Add')">Add</button>`;
}


const onAddClick = (to) => {
    // console.log('some kind of processing....');
    navigate(to);
}

/**
constructing the comparator function on the basis of property
*/
const sortByProp = (prop) => {
    return (student1, student2) => {
        console.log();
        return (student1[prop].toUpperCase() >= student2[prop].toUpperCase()) ? 1 : -1;
    };
}




// TODO: pass a parameter 
// use === instead of '=='
const sortBy = (prop) => {
    // const prop = el("#sortBy").value;
    // const prop = el("#nameSymb").value;
    // console.log('sortByElement',sortByElement);
    console.log('prop : ' + prop);

    const comparatorCallback = sortByProp(prop);
    console.log('comparatorCallback', +comparatorCallback);
    // modifieng the current array
    students.sort(comparatorCallback);

    const content = el("#containerData");
    content.innerHTML = listTemp();
    console.log('students', students);
}



const erase = (selectedId) => {
    console.log("selectedId", selectedId);
    const getIndex = students.findIndex((student) => {
        return (student.id === selectedId);
    });
    // console.log("getIndex", getIndex);
    students.splice(getIndex, 1);
    // htmlFrag=listTemp();
    const content = el("#containerData");

    // content.innerHTML = htmlFrag;
    content.innerHTML = listTemp();
}

const update = (selectedId, to) => {
    console.log('id : ' + selectedId);
    const selectedStudent = students.find(student => {
        return student.id === selectedId;
    });
    const selectedStudentIndex = students.findIndex(student => {
        return student.id === selectedId;
    });
    studentToBeModify = selectedStudent;
    // Object.assign(studentToBeModify, selectedStudent);
    // studentToBeModify.selectedStudentIndex = selectedStudentIndex;
    // window.location.hash='Update';
    navigate(to);
    console.log("studentToBeModify", studentToBeModify);
}

const arrowUp = () => {
    // console.log('nayan');
    const nameArrow = el("#nameSymb");
    // console.dir(nameArrow);
    nameArrow.classList.toggle("upper-arrow");
    // transform(nameArrow);

}

// const transform = (nameArrow) => {

//     nameArrow.style.transform="rotate(-135deg)";
// }