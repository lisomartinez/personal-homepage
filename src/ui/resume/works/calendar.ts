class Calendar {
  static conversions = new Map<number, string>([
    [1, 'Enero'],
    [2, 'Febrero'],
    [3, 'Marzo'],
    [4, 'Abril'],
    [5, 'Mayo'],
    [6, 'Junio'],
    [7, 'Julio'],
    [8, 'Agosto'],
    [9, 'Septiembre'],
    [10, 'Octubre'],
    [11, 'Noviembre'],
    [12, 'Diciembre'],
  ]);

  static convertDate = (date: string): string => {
    const dateFields = date.split('-');
    const year = dateFields[0];
    const month = Calendar.conversions.get(parseInt(dateFields[1]));
    return `${month} de ${year}`;
  };
}

export default Calendar;
