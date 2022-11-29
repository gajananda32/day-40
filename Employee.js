//UC 4
const part_time=1;
const full_time=2;
const prat_time_hrs=4;
const full_time_hrs=8;
const wage_per_hr=20;
 let emphrs=0;
let number_of_workingDays=20;
let MAx_hrs_inMonth=100;
let totalEmphrs=0;
let totalworkingdays=0;
for(let day=0;day<number_of_workingDays; day++)
{
    let empcheck=Math.floor(Math.random()*10)%3;
    emphrs+=getWorkingHrs(empcheck);
}
let empwage=emphrs*wage_per_hr;
console.log("Tatal Hrs: "+emphrs+" empWage: "+empwage);
