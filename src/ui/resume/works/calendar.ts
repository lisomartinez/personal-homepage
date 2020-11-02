class Calendar {
  static extractMonth = (date: string): string => {
    const dateFields = date.split('-');
    const year = dateFields[0];
    const month = dateFields[1];
    return `${month}-${year} `;
  };

  static months = new Map<string, string>([
    ['1', 'Enero'],
    ['2', 'Febrero'],
    ['3', 'Marzo'],
    ['4', 'Abril'],
    ['5', 'Mayo'],
    ['6', 'Junio'],
    ['7', 'Julio'],
    ['8', 'Agosto'],
    ['9', 'Septiembre'],
    ['10', 'Octubre'],
    ['11', 'Noviembre'],
    ['12', 'Diciembre'],
  ]);
  static convertDate = (date: string): string => {
    if (date === 'actualidad') return 'Actualidad';
    return Calendar.mapToMonth(date);
  };

  static convertToMonth = (date: string): string => {
    if (date === 'actualidad') return `${date} `;
    return Calendar.mapToMonth(date);
  };

  static mapToMonth = (date: string): string => {
    const dateFields = date.split('-');
    const year = dateFields[0];
    const month = Calendar.months.get(dateFields[1]);
    return `${month} ${year} `;
  };
}

export default Calendar;
