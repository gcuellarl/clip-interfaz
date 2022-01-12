import "reflect-metadata";
import { TYPES } from "../../../src/inversify.types";
import { myContainer } from "../../../src/inversify.config";

import MediumApi from "../../../src/api/medium-api";

import nextConnect from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = nextConnect<NextApiRequest, NextApiResponse>();
const mediumApi = myContainer.get<MediumApi>(TYPES.API.MEDIUM);

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
 * /api/medium/sync:
 *  put:
 *    tags:
 *    - "Medium"
 *    summary: return total sync of mediums
 *    responses:
 *      200:
 *        description: sync mediums
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/sync'
 *
 */

handler.put(async (req, res) => {
  const { status, type, body } = await mediumApi.mediumsSync(req);

  res.status(status);
  res.setHeader("Content-Type", type);
  res.write(body);
  res.end();
});

export default handler;
