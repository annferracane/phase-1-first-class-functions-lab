// Code your solution in this file!

const returnFirstTwoDrivers = drivers => drivers.slice(0,2);

console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));

const returnLastTwoDrivers = drivers => drivers.slice(-2);

console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
    return function (fare) { fare * 4};

}