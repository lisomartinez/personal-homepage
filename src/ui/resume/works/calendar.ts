import { Languages } from '../../../utils/language';

class Calendar {
  static extractMonth = (date: string): string => {
    const dateFields = date.split('-');
    const year = dateFields[0];
    const month = dateFields[1];
    return `${month}-${year} `;
  };

  static monthsEs = new Map<string, string>([
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

  static monthsEn = new Map<string, string>([
    ['1', 'January'],
    ['2', 'February'],
    ['3', 'March'],
    ['4', 'April'],
    ['5', 'May'],
    ['6', 'June'],
    ['7', 'July'],
    ['8', 'August'],
    ['9', 'September'],
    ['10', 'October'],
    ['11', 'November'],
    ['12', 'December'],
  ]);

  static convertDate = (date: string, language: string): string => {
    if (date === 'actualidad') return 'Actualidad';
    if (date === 'present') return 'Present';
    return Calendar.mapToMonth(date, language);
  };

  static convertToMonth = (date: string): string => {
    if (date === 'actualidad') return `${date} `;
    return Calendar.mapToMonth(date, Languages.ES);
  };

  static mapToMonth = (date: string, language: string): string => {
    const dateFields = date.split('-');
    const year = dateFields[0];
    const month =
      language === Languages.EN
        ? Calendar.monthsEn.get(dateFields[1])
        : Calendar.monthsEs.get(dateFields[1]);
    return `${month} ${year} `;
  };
}

export default Calendar;
