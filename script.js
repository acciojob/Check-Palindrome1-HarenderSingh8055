// complete the given function

function palindrome(str){
	var newStr = str.split(" ");
	var resultStr = newStr.join("");

	for(var i =0;i<resultStr.length;i++){
		if(resultStr[i] !==  resultStr[resultStr.length - 1 - i]){
			return false;
		}
	}
	return true;
	
}
module.exports = palindrome
