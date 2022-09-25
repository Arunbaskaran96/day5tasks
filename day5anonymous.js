//Print odd numbers in an array
var array =[1,2,3,4,5,6,7,8,9]
var odd=[]
var oddNumber = function(num){
    for(var i=0; i<num.length; i++){
        if(num[i]%2!=0){
            odd.push(num[i])
        }
    }
    return odd
}
console.log(oddNumber(array))

//Convert all the strings to title caps in a string array

var titleCase =function(str) {
    str = str.split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
  }
  
  console.log(titleCase("this is my project"))

  //Sum of all numbers in an array
var array =[1,2,3,4,5,6,7,8,9]
var sum=0;
var sumArray =function(number){
    for(var num of number){
        sum+=num
    }
    return sum
}
console.log(sumArray(array))

//Return all the prime numbers in an array

var array = [2,3,4,5,6,7,8,9]
var temp=[]
 var findPrime =function(arr){
    arr.forEach(num => {
        let factor = 0
        for(var i=1; i<=num; i++){
            if(num%i==0){
                factor++
            }
        }
        if(factor ===2){
            temp.push(num)
        }
    })
    return temp
}

console.log(findPrime(array));

//Return all the palindromes in an array

var array = ["moon","madam","peep","master","deed"]
var temp=[]

var palindrome = function(array){
    for(var i=0; i<array.length; i++){
        if(array[i]===array[i].split("").reverse().join("")){
            temp.push(array[i])
        }
    }
    return temp
}
console.log(palindrome(array))

//Return median of two sorted arrays of the same size.

var median =function (arr1, arr2) {

    var arr3 = arr1.concat(arr2);
    console.log(arr3);
    
    arr3 = arr3.sort(function (a,b) {return a-b});
    
    var length = arr3.length;
    if(length %2==1){
        console.log(arr3(length/2)-.5)
        return arr3[(length/2)-.5]
    }
    else{
        console.log((arr3[length/2]+arr3[(length/2)-1])/2)
        return(arr3[length/2]+arr3[(length/2)-1])/2
    }
    
    }
    
    median([10,20,30], [40,50,60]);



//Remove duplicates from an array

var array=[1,2,3,4,5,6,5,4,3]
var temp=[]

var removeDup= function(array){
    for(var i=0; i<array.length; i++){
        if(temp.indexOf(array[i])==-1){
            temp.push(array[i])
        }
        if(temp.length===0){
            temp.push(array[i])
        }
    }
    return temp
}
console.log(removeDup(array))

//Rotate an array by k times

var arry = [1,2,3,4,5,6,7,8];
var n =array.length;
var k =4
k=k%n
var temp=[]

var rotateArray=function(array){
    for(var i=0; i<array.length; i++){
        if(i<k){
            temp.push(array[n+i-k])
        }else{
            temp.push(array[i-k])
        }
    }
    return temp
}
console.log(rotateArray(array))