console.log('chalange');
function printInTwoSecond(message){
	setTimeout(function(){
		console.log(message)
	},2000)
}
printInTwoSecond('hello async');