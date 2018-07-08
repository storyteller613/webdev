
var num = -10
console.log("Print all numbers between -10 and 19");
while (num <20) {
	console.log(num);
	num +=1;
}

var num_1 = 10
console.log("Print all even numbers between 10 and 40");
while (num_1 <41) {
	if (num_1 % 2 === 0){
		console.log(num_1)
	}
	num_1 +=1
}

var num_2 = 300
console.log("Print all odd numbers between 300 and 333");
while (num_2 <334) {
	if (num_2 % 2 !== 0){
		console.log(num_2)
	}
	num_2 +=1;
}

var num_3 = 5
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
while (num_3 <51) {
	if (num_3 % 5 === 0 && num_3 % 3 === 0){
		console.log(num_3)
	}
	num_3 +=1;
}