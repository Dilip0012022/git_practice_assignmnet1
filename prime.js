let num=5;
for(let i=2;i<Math.sqrt(num);i++){
	if(num%i==0){
		count++;
	}
}
if(count>0){
	console.log("Not A Prime Number");   //corrected
}else{
	console.log("Prime NUmber");    //corrected
}