function getCurrentDayOfWeek() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    return dayOfWeek;
}

function updateCurrentDayOfWeek() {
    const dayOfTheWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    dayOfTheWeekElement.textContent = getCurrentDayOfWeek();
}

function updateCurrentUTCTime() {
    const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    const currentDate = new Date();
    const utcTimeString = currentDate.toUTCString();
    utcTimeElement.textContent = utcTimeString;
}

function updateMyTrack() {
    const myTrackElement = document.querySelector('[data-testid="myTrack"]');
    myTrackElement.textContent = "Frontend";
}

updateCurrentDayOfWeek();
updateCurrentUTCTime();
updateMyTrack();

