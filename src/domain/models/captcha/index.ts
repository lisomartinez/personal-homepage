export interface CaptchaRequest {
  key: string;
}

export interface CatpchaResponse {
  success: boolean;
  challenge_ts: string;
  hostname: string;
}
