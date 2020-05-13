//Enter querySelector Code 
var header = document.querySelector("#header").innerHTML;
var linkText = document.querySelector("#left a").innerHTML // or document.querySelector('a').text
var linkHref = document.querySelector("#left a").getAttribute('href')  //or // document.querySelector('a') 


// NO NEED TO MODIFY BELOW HERE
console.log(`The header is: ${header}`)
console.log(`The first link text is: ${linkText}`)
console.log(`The first link href is: ${linkHref}`)
 

// document.querySelector('a').text