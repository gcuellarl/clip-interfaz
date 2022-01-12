import "reflect-metadata";
import { TYPES } from "../../../src/inversify.types";
import { myContainer } from "../../../src/inversify.config";

import IdppAPI from "../../../src/api/idpp-api";

import nextConnect from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = nextConnect<NextApiRequest, NextApiResponse>();
const idppAPI = myContainer.get<IdppAPI>(TYPES.API.IDPP);

/**
 * @swagger
 * components:
 *   schemas:
 *     sync:
 *       type: object
 *       required:
 *         - totalSync
 *       properties:
 *         totalSync:
 *           type: integer
 *
 */

/**
 * @swagger
 * /api/idpp/sync:
 *  get:
 *    tags:
 *    - "IDPP"
 *    summary: return total sync of idpps
 *    responses:
 *      200:
 *        description: sync idpp
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/sync'
 *
 */

handler.put(async (req, res) => {
  const { status, type, body } = await idppAPI.SyncIdpp(req);

  res.status(status);
  res.setHeader("Content-Type", type);
  res.write(body);
  res.end();
});

export default handler;
