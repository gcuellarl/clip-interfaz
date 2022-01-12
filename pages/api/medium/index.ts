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
 *     Medium:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - active
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         active:
 *           type: integer
 */

/**
 * @swagger
 * /api/medium/index:
 *   get:
 *     tags:
 *     - "Medium"
 *     summary: return list of mediums
 *     parameters:
 *       - in: query
 *         name: MediumId
 *         description: medios.idMedio = tiposmedio.idMedio
 *         schema:
 *           type: integer
 *       - in: query
 *         name: category
 *         description: Medium category = "PRENSA" AND "REVISTA".
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *          description: >-
 *          content:
 *           application/json:
 *             examples:
 *               response:
 *                 value:
 *                   mediums:
 *                     - id: 1
 *                       name: medio1
 *                       active: 1
 */

handler.get(async (req, res) => {
  const { status, type, body } = await mediumApi.getAll(req);

  res.status(status);
  res.setHeader("Content-Type", type);
  res.write(body);
  res.end();
});

export default handler;
