import React from 'react';
import ContactComponent from '../ui/contact';
import { GetStaticProps } from 'next';

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
