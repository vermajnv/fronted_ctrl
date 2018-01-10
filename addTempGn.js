// const studentObj = {};

let counter = 10;
const addTemp = () => {
    // console.log('nayan yooo');
    return `
        <div id="style-pg">
            <label for="">name</label>
            <input type="text" name="" id="name">
        </div>
        <div id="style-pg">
            <label for="">address</label>
            <input type="text" name="" id="address">
        </div>
        <div id="style-pg">
            <label for="">college</label>
            <input type="text" name="" id="college">
        </div>
        <div id="btn-style">
            <button onclick="add()">submit</button>
            <button onclick="clearValue()">reset</button>
        </div>`;
};

const add = () => {
    const name = el("#name").value;
    const address = el("#address").value;
    const college = el("#college").value;
    // studentObj.name = name;
    // studentObj.address = address;
    // studentObj.college = college;
    students.push({
        id: counter++,
        name,
        address,
        college
    });
    console.log("students", students);
    window.location.hash = 'List';
}