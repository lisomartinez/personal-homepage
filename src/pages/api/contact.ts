import { NextApiRequest, NextApiResponse } from 'next';
import initMiddleware from '../../lib/init-middleware';
import Cors from 'cors';
import contactController from '../../controllers/contact';
import createContactController from '../../domain/service/factories';
import { HttpRequest, HttpResponse } from '../../domain/models/http';

const cors = initMiddleware(
  Cors({
    methods: ['POST', 'OPTIONS'],
  })
);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res);
  if (reqIsPost(req)) {
    try {
      const httpRequest: HttpRequest = fromNextApiRequest(req);
      const httpResponse = await createContactController().handle(httpRequest);
      sendResponse(httpResponse, res);
    } catch (errorHttpResponse) {
      sendResponse(errorHttpResponse, res);
    }
  } else {
    sendMethodNotAllowedResponse(res, req);
  }
};

const reqIsPost = (req: NextApiRequest) => req.method === 'POST';

const fromNextApiRequest = (req: NextApiRequest) => ({
  body: req.body,
  method: req.method,
});

function sendResponse(httpResponse: HttpResponse, res: NextApiResponse) {
  res.statusCode = httpResponse.statusCode;
  res.json(httpResponse.json);
  res.end();
}

const sendMethodNotAllowedResponse = (
  res: NextApiResponse,
  req: NextApiRequest
) => {
  res.statusCode = 405;
  res.json({ reason: `${req.method} not allowed` });
  res.end();
};
