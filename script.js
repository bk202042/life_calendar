function getWeekNumber(d) {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    const weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    return [d.getUTCFullYear(), weekNo];
}

function isPastWeek(date) {
    const now = new Date();
    const [currentYear, currentWeek] = getWeekNumber(now);
    const [dateYear, dateWeek] = getWeekNumber(date);
    return dateYear < currentYear || (dateYear === currentYear && dateWeek < currentWeek);
}

function getString(startDate, years) {
    const startDateObj = new Date(startDate);
    const endDate = new Date(new Date(startDate).setFullYear(startDateObj.getFullYear() + years));
    let result = '';
    let currentDate = new Date(startDateObj);
    let totalWeeksLeft = 0;
    let totalWeeks = 0;

    const weekSet = new Set();

    while (currentDate <= endDate) {
        const [year, weekNo] = getWeekNumber(currentDate);
        const weekString = `${year}-W${weekNo}`;
        if (!weekSet.has(weekString)) {
            weekSet.add(weekString);
            totalWeeks++;
            result += `<span class="week ${isPastWeek(currentDate) ? 'past-week' : 'future-week'}">${isPastWeek(currentDate) ? '◻️' : '🟢'}</span>`;
            if (!isPastWeek(currentDate)) {
                totalWeeksLeft++;
            }
        }
        currentDate.setDate(currentDate.getDate() + 1); // Increment day by day
    }
    const weeksCompleted = totalWeeks - totalWeeksLeft;
    const percentageCompleted = ((weeksCompleted / totalWeeks) * 100).toFixed(2);
    result += `<br>Total Weeks Left: ${totalWeeksLeft}`;
    result += `<br>Percentage Completed: ${percentageCompleted}%`;
    return result;
}

document.getElementById('week-visualization').innerHTML = getString("1978-07-23", 80);
