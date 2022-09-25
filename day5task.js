//arrow function
//Print odd numbers in an array
var array =[1,2,3,4,5,6,7,8,9]
var odd=[]
var oddNumber = (num)=>{
    for(var i=0; i<num.length; i++){
        if(num[i]%2!=0){
            odd.push(num[i])
        }
    }
    return odd
}
console.log(oddNumber(array))

//Convert all the strings to title caps in a string array
var titleCase =(str) => {
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
var sumArray =(number)=>{
    for(var num of number){
        sum+=num
    }
    return sum
}
console.log(sumArray(array))

//Return all the prime numbers in an array

var array = [2,3,4,5,6,7,8,9]
var temp=[]
 var findPrime =(arr)=>{
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

var palindrome = (array)=>{
    for(var i=0; i<array.length; i++){
        if(array[i]===array[i].split("").reverse().join("")){
            temp.push(array[i])
        }
    }
    return temp
}
console.log(palindrome(array))

