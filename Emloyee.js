//UC 6
function CalDailwage(emphrs){
    return emphrs*wage_per_hr;
}
let number_of_workingDays=20;
let MAx_hrs_inMonth=160;
let totalEmphrs=0;
let totalworkingdays=0;
let empDailwageArr=new Array();
while(totalEmphrs<=MAx_hrs_inMonth && totalworkingdays<number_of_workingDays)
{
    totalworkingdays++;
    let empcheck=Math.floor(Math.random()*10)%3;
    let emphrs=getWorkingHrs(empcheck);
    totalEmphrs+=emphrs;
    empDailwageArr.push(CalDailwage(emphrs));
}
let empwage=CalDailwage(totalEmphrs);
console.log("UC6 Total Days: "+totalworkingdays+"  total hrs: "+totalEmphrs+ " emp wage: "+ empwage);
