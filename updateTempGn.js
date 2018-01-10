function updateTemp() {
    return `<div id="style-pg">
            <label for="">name</label>
            <input type="text" name="" id="name" value="${studentToBeModify.name}">
        </div>
        <div id="style-pg">
            <label for="">address</label>
            <input type="text" name="" id="address" value="${studentToBeModify.address}">
        </div>
        <div id="style-pg">
            <label for="">college</label>
            <input type="text" name="" id="college" value="${studentToBeModify.college}">
        </div>
        <div id="btn-style">
            <button onclick="updateData()">Update</button>
            <button onclick="clearValue()">reset</button>
        </div>`;
}

function updateData(){
	const name = el("#name").value;
    const address = el("#address").value;
    const college = el("#college").value;
    studentToBeModify.name = name;
    studentToBeModify.address = address;
    studentToBeModify.college = college;
    window.location.hash = 'List';
}	

// function appendPrevious() {
    
//     console.log("students", students);
    
//     students.push({
//     	id:studentToBeModify.id,
//         name,
//         address,
//         college
//     });
//     const content = el("#containerData");
//     content.innerHTML = listTemp();
// }