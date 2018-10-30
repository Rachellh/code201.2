'use strict';

var userName = prompt('What\'s your name?');
if (userName.length >= 5) {
  alert('Welcome ' + userName + '.');
} else {
  alert('Welcome to my guessing game ' + userName + '.');
}


var userAge = prompt('What\'s my age?');
if (userAge = 30) {
  alert('Correct,' + userName + '.');
} else {
  alert('Wrong,' + userName + '.');
}


var responseOne = prompt('Do I like fishing?')
if (responseOne === 'Y' || responseOne === 'y' || responseOne === 'YES' || responseOne === 'yes') {
    alert('Congrats. You know me pretty well.');
} else {
    alert('Sorry, you were wrong.');
}


alert('Please respond to the following questions with Y/y/yes/YES or no...');
var responseTwo = prompt('Do I love to dance?');
var upperResponseTwo = responseTwo.toUpperCase();
if (responseTwo === 'Y') {
       alert('Congrats. You know me pretty well.');
 } else if (responseTwo === 'y') {
   alert('Congrats. You know me pretty well.');
 } else if (responseTwo === 'YES') {
   alert('Congrats. You know me pretty well.');
 } else if (responseTwo === 'yes') {
   alert('Congrats. You know me pretty well.');
 } else {
   alert('Sorry, you were wrong.');
 }


var responseThree = prompt('Was I born in WA state?').toUpperCase();
if (responseThree === 'N' || responseThree === 'NO') {
  alert('Congrats. You know me pretty well.');
} else {
  alert('Sorry, you were wrong.');
}