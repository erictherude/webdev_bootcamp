let userAgeYears = prompt("How many years old are you?");

let userLeapYears = userAgeYears / 4;

let userAgeDays = userAgeYears * 365 + userLeapYears;

console.log("You are approxiamately " + userAgeDays + " days old.");