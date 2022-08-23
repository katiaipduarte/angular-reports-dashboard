import { InitialsPipe } from './initials.pipe';

describe('InitialsPipe', () => {
  let pipe: InitialsPipe;
  beforeEach(() => (pipe = new InitialsPipe()));

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('transform()', () => {
    it('should return empty string for empty entry value', () => {
      expect(pipe.transform('')).toBe('');
    });

    it('should return single initial for string with one name', () => {
      expect(pipe.transform('Ananas')).toBe('AN');
    });

    it('should return initials for full name with two names', () => {
      const fullName = 'Ananas Banana';
      expect(pipe.transform(fullName)).toBe('AB');
    });

    it('should return initials for full name with three names', () => {
      const fullName = 'Ananas of banana';
      expect(pipe.transform(fullName)).toBe('AB');
    });

    it('should return initials for full name with four names', () => {
      const fullName = 'Ananas test test Banana';
      expect(pipe.transform(fullName)).toBe('AB');
    });

    it('should return initials toUpperCase', () => {
      const fullName = 'test test';
      expect(pipe.transform(fullName)).toBe('TT');
    });
  });
});
