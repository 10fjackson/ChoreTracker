function createCalendar() {
  const calendarBody = document.getElementById('calendar-body');

  let dayCounter = 1;
  for (let row = 0; row < 5; row++) {
    const calendarRow = document.createElement('div');
    calendarRow.className = 'calendar-row';

    for (let col = 0; col < 7; col++) {
      const calendarCell = document.createElement('div');
      calendarCell.className = 'calendar-cell';

      if (dayCounter <= 31) {
        const dayNumber = document.createElement('div');
        dayNumber.className = 'day-number';
        dayNumber.textContent = dayCounter;
        calendarCell.appendChild(dayNumber);
        dayCounter++;
      }

      calendarRow.appendChild(calendarCell);
    }

    calendarBody.appendChild(calendarRow);
  }
}

createCalendar();
