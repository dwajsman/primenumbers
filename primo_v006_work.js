console.log(process.argv[2]);

let numB = process.argv[2]; 

for (let x = 2; x < numB; x++) {
  
	let divNum = (numB/x);

	console.log(divNum);

		if (Number.isInteger(divNum)){
	    
	    	console.log("Not Prime")
			return;
		};


};

console.log(" Prime")