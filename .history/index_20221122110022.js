// Code your solution in this file!

const returnFirstTwoDrivers = drivers => drivers.slice(0,2);

console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));

const returnLastTwoDrivers = drivers => drivers.slice(-2);

console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fareMultiplier) {
    return fare => fare * fareMultiplier;
}


const fareDoubler = fare => createFareMultiplier(2)(fare);

console.log(fareDoubler(10));
