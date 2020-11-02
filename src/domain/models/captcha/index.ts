export class CaptchaToken {
  constructor(private _key: string) {}

  get key(): string {
    return this._key;
  }

  isEmpty = (): boolean =>
    this._key === null || this._key === undefined || this._key === '';
}

export interface CaptchaRequest {
  key: string;
}

export interface CaptchaResponse {
  success: boolean;
  challenge_ts: string;
  hostname: string;
}
