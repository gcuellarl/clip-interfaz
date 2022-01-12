import "reflect-metadata";
import { TYPES } from "../../../src/inversify.types";
import { myContainer } from "../../../src/inversify.config";

import ProcessApi from "../../../src/api/process-api";

import nextConnect from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = nextConnect<NextApiRequest, NextApiResponse>();
const processApi = myContainer.get<ProcessApi>(TYPES.API.PROCESS);
/**
 * @swagger
 * components:
 *   schemas:
 *     InsertImages:
 *       type: object
 *       required:
 *         - fileName
 *         - status
 *       properties:
 *         fileName:
 *           type: string
 *         status:
 *           type: string
 *
 */

/**
 * @swagger
 * /api/processFile:
 *  post:
 *    summary: save in efinfo
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *           type: object
 *           propierties:
 *             fileName:
 *               type: string
 *           id:
 *              type: integer
 *           thumbnail:
 *              type: string
 *           example:
 *             fileName: img1.jpg
 *             id: 123
 *             thumbnail: http://localhost/img1.jpg
 *    responses:
 *      200:
 *        description: sucessfully insert
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/InsertImages'
 */

handler.post(async (req, res) => {
  const { status, type, body } = await processApi.process(req);

  res.status(status);
  res.setHeader("Content-Type", type);
  res.write(body);
  res.end();
});

export default handler;
