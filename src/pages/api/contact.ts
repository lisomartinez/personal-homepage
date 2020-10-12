import { NextApiRequest, NextApiResponse } from 'next';
import initMiddleware from '../../lib/init-middleware';
import Cors from 'cors';
import contactController from '../../controllers/contact.controller';

const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['POST'],
  })
);

const reqIsPost = (req: NextApiRequest) => req.method === 'POST';

const sendMethodNotAllowedResponse = (
  res: NextApiResponse,
  req: NextApiRequest
) => {
  res.statusCode = 405;
  res.json({ reason: `${req.method} not allowed` });
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (reqIsPost(req)) {
    await contactController.handle(req, res);
  } else {
    sendMethodNotAllowedResponse(res, req);
  }
};
