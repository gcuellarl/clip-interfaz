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
 *     IDPP:
 *       type: object
 *       required:
 *         - id
 *         - section
 *         - description
 *         - active
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         description:
 *           type: string
 *         active:
 *           type: integer
 *
 */

/**
 * @swagger
 * /api/idpp:
 *  get:
 *    tags:
 *    - "IDPP"
 *    summary: return the list of all the idpp
 *    responses:
 *      200:
 *        description: list of the idpp
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/IDPP'
 */

handler.get(async (req, res) => {
  const { status, type, body } = await idppAPI.getAll(req);

  res.status(status);
  res.setHeader("Content-Type", type);
  res.write(body);
  res.end();
});

export default handler;
