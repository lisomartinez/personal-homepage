class Calendar {
  static extractMonth = (date: string): string => {
    const dateFields = date.split('-');
    const year = dateFields[0];
    const month = dateFields[1];
    return `${month}-${year} `;
  };

  static convertDate = (date: string): string => {
    if (date === 'actualidad') return `${date} `;
    return Calendar.extractMonth(date);
  };
}

export default Calendar;
