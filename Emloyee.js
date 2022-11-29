// UC 2
const part_time=1;
const full_time=2;
const prat_time_hrs=4;
const full_time_hrs=8;
const wage_per_hr=20;
let emphrs=0;
let empcheck=Math.floor(Math.random()*10)%3;
switch(empcheck)
{
   case part_time:
    emphrs=prat_time_hrs;
    break;
    case full_time:
        emphrs=full_time_hrs;
        break;
       default: emphrs=0;
}
let empwage=emphrs*wage_per_hr;
console.log("emp wage: "+empwage);
