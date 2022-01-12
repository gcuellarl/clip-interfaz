import fetch from "isomorphic-unfetch";

import { NextConnect } from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";

import http from "http";
import listen from "test-listen";
import { apiResolver } from "next/dist/server/api-utils";

export default class ApiFetcher {
  static async get(
    handler: NextConnect<NextApiRequest, NextApiResponse<any>>,
    query?: any
  ): Promise<Response> {
    const server = await ApiFetcher.open(handler, query);
    const response = await fetch(await listen(server));
    await server.close();

    return response;
  }

  static async post(
    handler: NextConnect<NextApiRequest, NextApiResponse<any>>,
    query?: any,
    data?: any
  ): Promise<Response> {
    const server = await ApiFetcher.open(handler, query);
    const response = await fetch(await listen(server), {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await server.close();

    return response;
  }

  static async put(
    handler: NextConnect<NextApiRequest, NextApiResponse<any>>,
    query?: any,
    data?: any
  ): Promise<Response> {
    const server = await ApiFetcher.open(handler, query);
    const response = await fetch(await listen(server), {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await server.close();

    return response;
  }

  static async open(
    handler: NextConnect<NextApiRequest, NextApiResponse<any>>,
    query: any
  ) {
    return http.createServer((req, res) => {
      apiResolver(
        req,
        res,
        query,
        handler,
        {
          previewModeId: "",
          previewModeEncryptionKey: "",
          previewModeSigningKey: "",
        },
        false
      );
    });
  }
}
