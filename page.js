document.addEventListener("DOMContentLoaded", ()=>{
 const currentDate = new Date();
 const currentDayOfWeek = currentDate.toLocaleDateString('en-US', {weekday: 'long'})
 const currentUTCTime = currentDate.getTime();

 document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = currentDayOfWeek;
 document.querySelector('[data-testid="currentUTCTime"]').textContent = currentUTCTime;
})