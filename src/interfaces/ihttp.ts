export interface HttpRequest {
  query: {
    [key: string]: string | string[];
  };
  body: any;
}

export interface HttpResponse {
  body: any;
  type: string;
  status: number;
}
