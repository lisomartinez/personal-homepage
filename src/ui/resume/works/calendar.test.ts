import Calendar from './calendar';

describe('Calendar', () => {
  describe('translate a string date to month and year text', () => {
    it('should translate 2011-1-1 to Enero de 2011', () => {
      expect(Calendar.convertDate('2011-1-1')).toBe('Enero de 2011');
    });
    it('should translate 2011-2-1 to Febrero de 2011', () => {
      expect(Calendar.convertDate('2011-2-1')).toBe('Febrero de 2011');
    });
    it('should translate 2011-3-1 to Marzo de 2011', () => {
      expect(Calendar.convertDate('2011-3-1')).toBe('Marzo de 2011');
    });
    it('should translate 2011-4-1 to Abril de 2011', () => {
      expect(Calendar.convertDate('2011-4-1')).toBe('Abril de 2011');
    });
    it('should translate 2011-5-1 to Mayo de 2011', () => {
      expect(Calendar.convertDate('2011-5-1')).toBe('Mayo de 2011');
    });
    it('should translate 2011-6-1 to Junio de 2011', () => {
      expect(Calendar.convertDate('2011-6-1')).toBe('Junio de 2011');
    });
    it('should translate 2011-7-1 to Julio de 2011', () => {
      expect(Calendar.convertDate('2011-7-1')).toBe('Julio de 2011');
    });
    it('should translate 2011-8-1 to Agosto de 2011', () => {
      expect(Calendar.convertDate('2011-8-1')).toBe('Agosto de 2011');
    });
    it('should translate 2011-9-1 to Septiembre de 2011', () => {
      expect(Calendar.convertDate('2011-9-1')).toBe('Septiembre de 2011');
    });
    it('should translate 2011-10-1 to Octubre de 2011', () => {
      expect(Calendar.convertDate('2011-10-1')).toBe('Octubre de 2011');
    });
    it('should translate 2011-11-1 to Noviembre de 2011', () => {
      expect(Calendar.convertDate('2011-11-1')).toBe('Noviembre de 2011');
    });
    it('should translate 2011-12-1 to Diciembre de 2011', () => {
      expect(Calendar.convertDate('2011-12-1')).toBe('Diciembre de 2011');
    });
  });
});
