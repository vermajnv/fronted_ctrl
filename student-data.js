
const noOfRecords = 10;
const students = [];
const fakeNames = ['ravi', 'ayush', 'ujji', 'nayan','rishabh','golu','chandan','vishal','rahul','vaibhav'];
const fakeColleges = ['UCER', 'UIT', 'UCEM', 'UIM','PSIT','HBTI','IIT KANPUR','BHU','JNV','ITI'];
const fakeAddresses = ['NAINI', 'ALD', 'LMP', 'KARCHHANA','PIPARI','SITAPUR','DELHI','MUMBAI','KANPUR','BRUCLYNE'];

for (let i = 0; i < 18; i++) {
    students.push({
        id: i,
        name: fakeNames[randomIndex(noOfRecords)],
        address: fakeAddresses[randomIndex(noOfRecords)],
        college: fakeColleges[randomIndex(noOfRecords)]
    });

    
}

// function removeUndefinedIndex(studentsRecord) {
// 	const selectedUndefinedStudent=studentsRecord.findIndex((student)=>{
// 		return student.name==='undefined';
// 	});

// 	studentsRecord.splice(selectedUndefinedStudent,1);
// 	const content=el('#containerData');
// 	content.innerHTML=listTemp();
// }


function randomIndex(maxNumber) {
	const randomNumber = Math.floor((Math.random() * maxNumber-1)+ 1);
	console.log('Random Number : ' + randomNumber);
    return randomNumber;
}

