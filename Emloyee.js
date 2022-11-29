//UC 3
const part_time=1;
const full_time=2;
const prat_time_hrs=4;
const full_time_hrs=8;
const wage_per_hr=20;
const Maxhrs=100;
const number_of_workingDays=20;
const totalEmphrs=;
let emphrs=0;
function getWorkingHrs(empcheck)
{
    switch(empcheck)
    {
       case part_time:
        return prat_time_hrs;
    
        case full_time:
            return full_time_hrs;
            
           default: return 0;
    }
}
let empcheck=Math.floor(Math.random()*10)%3;
let empwage=emphrs*wage_per_hr;
emphrs=getWorkingHrs(empcheck);
console.log("emp wage: "+empwage);
