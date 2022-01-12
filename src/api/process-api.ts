import { NextApiRequest } from "next";

export default class ProcessApi {
  process(
    req: NextApiRequest
  ):
    | { status: any; type: any; body: any }
    | PromiseLike<{ status: any; type: any; body: any }> {
    throw new Error("Method not implemented.");
  }
}
