//UC 5
let number_of_workingDays=20;
let MAx_hrs_inMonth=100;
let totalEmphrs=0;
let totalworkingdays=0;
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
while(totalEmphrs<=MAx_hrs_inMonth && totalworkingdays<number_of_workingDays)
{
    totalworkingdays++;
    let empcheck=Math.floor(Math.random()*10)%3;
    totalEmphrs+=getWorkingHrs(empcheck);
}
let empwage=totalEmphrs*wage_per_hr;
console.log("UC5 Total Days: "+totalworkingdays+"  total hrs: "+totalEmphrs+ " emp wage: "+ empwage);
