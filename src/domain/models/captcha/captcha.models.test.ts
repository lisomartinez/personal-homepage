import { CaptchaRequest, CaptchaResponse, CaptchaToken } from './index';

describe('captcha models tests', () => {
  describe('captcha token', () => {
    let token: CaptchaToken;
    it('should known if its value is empty when key is empty', () => {
      token = new CaptchaToken('');
      expect(token.isEmpty()).toBeTruthy();
    });

    it('should known if its value is empty when key is null', () => {
      token = new CaptchaToken(null);
      expect(token.isEmpty()).toBeTruthy();
    });

    it('should known if its value is empty when key is undefined', () => {
      token = new CaptchaToken(undefined);
      expect(token.isEmpty()).toBeTruthy();
    });

    it('should have value as its key', () => {
      token = new CaptchaToken('token');
      expect(token.key).toBe('token');
    });
  });

  it('captcha request should have key as field', () => {
    const request: CaptchaRequest = {
      key: 'key',
    };
    expect(request.key).toBeTruthy();
  });

  it('captcha response should have success as field', () => {
    const response: CaptchaResponse = {
      success: true,
      challenge_ts: '',
      hostname: '',
    };

    expect(response.success).toBeTruthy();
  });
});
