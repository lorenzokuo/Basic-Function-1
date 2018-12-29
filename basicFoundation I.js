//1.Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function returnOneToTwoFiveFive() {
	let arr=[];
	for (var i=1; i<256; i++) {
		arr.push(i);
	}
	return arr;
}
//2.Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
function sumOfEven() {
	let sum =0;
	for (var i=1; i<=1000; i++) {
		if (i%2==0) {
			sum+=i;
		}
	}
  console.log(sum);
}
//checker
sumOfEven();

//3.Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
function returnSumOfOdd(){
	let sum = 0;
	for (var i=1; i<=5000; i++){
		if (i%2==1){
			sum +=i;
		}
	}
	return sum;
}
//checker
returnSumOfOdd();

//4.Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function returnSumOfValue(arr) {
	let sum =0;
	for (var i=0; i<arr.length; i++){
		sum+=arr[i];
	}
	return sum;
}
//checker
console.log(returnSumOfValue([1,2,5]));
console.log(returnSumOfValue([-5,2,5,12]));

//5.Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
function returnMax(arr) {
	let max=0;
	for (var i=0; i<arr.length; i++){
		if (arr[i]>max){
			max=arr[i];
		}
	}
	return max;
}
//checker
console.log(returnMax([-3,3,5,7]))

//6.Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
function returnAvg(arr){
	let sum=0;
	let avg=0;
	for (var i=0; i<arr.length; i++){
		sum +=arr[i];
	}
	avg=sum/arr.length;
  return avg;
}
//checker
console.log(returnAvg([1,3,5,7,20]));
//7.Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function returnOdd() {
	let arr=[];
	for (var i=1; i<50; i++){
		if(i%2==1){
			arr.push(i);
		}
	}
	return arr;
}
//given
console.log(returnOdd());

//8.Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
function greaterThanY(arr,y){
	let newArr=[];
	for (var i=0; i<arr.length; i++){
		if(arr[i]>y){
			newArr.push(arr[i]);
		}
	}
	return newArr.length;
}
//given
console.log(greaterThanY([1,3,5,7],3))

//9.Squares - Given an array with multiple values, write a function that replaces each value in the array with the product of the original value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
function squareItSelf(arr){
	for(var i=0; i<arr.length; i++){
		arr[i]=arr[i]*arr[i];
	}
  return arr;
}
//given
console.log(squareItSelf([1,5,10,-2]));

//10.Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
function replaceNeg(arr){
	for(var i=0; i<arr.length; i++){
		if (arr[i]<0){
			arr[i]=0;
		}
	}return arr;
}
//given
console.log(replaceNeg([1,5,10,-2]));

//11.Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
function maxMinAvg(arr){
	let newArr=[];
	let max=arr[0];
	let min=arr[0];
	let avg=0;
	let sum=0;
	for(var i=0; i<arr.length; i++){
		if(arr[i]>max){
			max=arr[i];
		}
		if(arr[i]<min){
			min=arr[i];
		}
		sum+=arr[i];
	}
	avg=sum/arr.length;
  newArr.push(max,min,avg);
  return newArr;
}
//given
console.log(maxMinAvg([1,5,10,-2]));

//12.Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
function swapValue(arr){
	let temp=arr[0]
	arr[0]=arr[arr.length-1];
	arr[arr.length-1]=temp;
	return arr;
}
//given
console.log(swapValue([1,5,10,-2]))

//13.Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
function numToString(arr){
	for(var i=0;i<arr.length;i++){
		if(arr[i]<0){
			arr[i]="Dojo";
		}
	}
	return arr;
}
//given
console.log(numToString([-1,-3,2]));
















