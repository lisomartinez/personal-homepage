import Calendar from './calendar';

describe('Calendar', () => {
  describe('translate a string date to month and year text', () => {
    it('should translate 2011-1-1 to Enero de 2011', () => {
      expect(Calendar.convertDate('2011-1-1', 'ES')).toBe('Enero 2011 ');
    });
    it('should translate 2011-2-1 to Febrero de 2011', () => {
      expect(Calendar.convertDate('2011-2-1', 'ES')).toBe('Febrero 2011 ');
    });
    it('should translate 2011-3-1 to Marzo de 2011', () => {
      expect(Calendar.convertDate('2011-3-1', 'ES')).toBe('Marzo 2011 ');
    });
    it('should translate 2011-4-1 to Abril de 2011', () => {
      expect(Calendar.convertDate('2011-4-1', 'ES')).toBe('Abril 2011 ');
    });
    it('should translate 2011-5-1 to Mayo de 2011', () => {
      expect(Calendar.convertDate('2011-5-1', 'ES')).toBe('Mayo 2011 ');
    });
    it('should translate 2011-6-1 to Junio de 2011', () => {
      expect(Calendar.convertDate('2011-6-1', 'ES')).toBe('Junio 2011 ');
    });
    it('should translate 2011-7-1 to Julio de 2011', () => {
      expect(Calendar.convertDate('2011-7-1', 'ES')).toBe('Julio 2011 ');
    });
    it('should translate 2011-8-1 to Agosto de 2011', () => {
      expect(Calendar.convertDate('2011-8-1', 'ES')).toBe('Agosto 2011 ');
    });
    it('should translate 2011-9-1 to Septiembre de 2011', () => {
      expect(Calendar.convertDate('2011-9-1', 'ES')).toBe('Septiembre 2011 ');
    });
    it('should translate 2011-10-1 to Octubre de 2011', () => {
      expect(Calendar.convertDate('2011-10-1', 'ES')).toBe('Octubre 2011 ');
    });
    it('should translate 2011-11-1 to Noviembre de 2011', () => {
      expect(Calendar.convertDate('2011-11-1', 'ES')).toBe('Noviembre 2011 ');
    });
    it('should translate 2011-12-1 to Diciembre de 2011', () => {
      expect(Calendar.convertDate('2011-12-1', 'ES')).toBe('Diciembre 2011 ');
    });
  });
});
