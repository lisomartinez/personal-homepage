import axios from 'axios';

const RECAPTCHA_SERVER_KEY = process.env.RECAPTCHA_SERVER_KEY;
const RECAPTCHA_SITE_KEY = process.env.RECAPTCHA_SITE_KEY;
const url = 'https://www.google.com/recaptcha/api/siteverify';

const validate = async (humanKey: string): Promise<boolean> => {
  if (humanKey === null) return Promise.resolve(false);
  return axios
    .post(url, null, {
      params: {
        secret: RECAPTCHA_SERVER_KEY,
        response: humanKey,
      },
    })
    .then((res) => res.data)
    .then((data) => data.success)
    .catch((err) => {
      throw new Error(`Error in Google Siteverify API. ${err.message}`);
    });
};

export default validate;

export const getSiteKey = async (): Promise<string> =>
  Promise.resolve(RECAPTCHA_SITE_KEY);
