let arrPri = [];

let sum = 0 ;

for (let i = 0; i <= process.argv[2]; i++) {
		
		if (i % 1 === 0)  {    	
		sum = sum + i; 
		arrPri.splice(0,0,i);  
//		console.log(i);
		};

//	console.log(i);

};


let arrPri2 = arrPri.slice(1,-2);

arrPri2.reverse();

let resultArr = [];

//console.log(arrPri2);

for (let i = 0; i <= process.argv[2]-3 ; i++) {

	let funNumber = process.argv[2]/arrPri2[i]
	
	//console.log(funNumber);

	 resultArr.unshift(Number.isSafeInteger(funNumber));
	
	
}


//console.log(resultArr);


//console.log(!!(resultArr.indexOf(true)+1));


if (!!(resultArr.indexOf(true)+1) === true) {


console.log(` ${process.argv[2]} is Not Prime `);

} else { 

console.log(` ${process.argv[2]} is Prime ` );

};
