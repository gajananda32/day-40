//UC 8
let number_of_workingDays=20;
let MAx_hrs_inMonth=160;
let totalEmphrs=0;
let totalworkingdays=0;
let empDailwageArr=new Array();
let empDailyWahMap=new Map();
function CalDailwage(emphrs){
    return emphrs*wage_per_hr;
}
while(totalEmphrs<=MAx_hrs_inMonth && totalworkingdays<number_of_workingDays)
{
    totalworkingdays++;
    let empcheck=Math.floor(Math.random()*10)%3;
    let emphrs=getWorkingHrs(empcheck);
    totalEmphrs+=emphrs;
    empDailwageArr.push(CalDailwage(emphrs));
    empDailyWahMap.set(totalworkingdays,CalDailwage(emphrs));
}
console.log(empDailyWahMap);
function totalwages(totalwage,dailwage){
    return totalwage+dailwage;
}
console.log("Emp wage Map total hrs: "+Array.from(empDailyWahMap.values()).reduce(totalwages,0));
