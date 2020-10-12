import React from 'react';
import ContactComponent from '../ui/contact';
import { GetStaticProps } from 'next';
import { getSiteKey } from '../lib/captcha/captch-validator';
// import axios from 'axios';

// const validate = async (value: string): boolean => {
//   return await axios
//       .post('http://localhost:3000/api/verify', {
//         key: value,
//       })
//       .then((res) => res.data.allowed)
//       .then((validated: boolean) => {
//         console.log('validated: ', validated);
//         return validated;
//       });
// };

type Props = {
  siteKey: string;
};

const Contact: React.FC<Props> = ({ siteKey }) => {
  return <ContactComponent siteKey={siteKey} />;
};

export default Contact;

export const getStaticProps: GetStaticProps = async () => {
  const siteKey = process.env.RECAPTCHA_SITE_KEY;
  return {
    props: {
      siteKey: siteKey,
    },
  };
};
