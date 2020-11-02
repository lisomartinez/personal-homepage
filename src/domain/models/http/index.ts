export interface HttpRequest {
  method: string;
  body: any;
}

export interface HttpResponse {
  statusCode: number;
  json: Record<string, unknown>;
}
