const calendarContainer = document.querySelector('.calendar-container');
const calendarBody = document.querySelector('.calendar-body');
const activityList = document.querySelector('.activity-list');

// generate days of the week
const daysOfWeek = ['Mon2', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const tableBody = calendarBody.querySelector('tbody');
daysOfWeek.forEach((day) => {
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.textContent = day;
    row.appendChild(cell);
    tableBody.appendChild(row);
});

// generate activity list
const activities = [
    { date: '2023-03-01', activity: 'Sample activities' },
    { date: '2023-03-05', activity: 'Project deadline' },
    { date: '2023-03-10', activity: 'Team lunch' },
    { date: '2023-03-10', activity: 'Team lunch' },
    { date: '2023-03-10', activity: 'Team lunch' },
    { date: '2023-03-10', activity: 'Team lunch' },
    { date: '2023-03-10', activity: 'Team lunch' },
    // add more activities here
];

activities.forEach((activity) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${activity.date} - ${activity.activity}`;
    activityList.querySelector('ul').appendChild(listItem);
});