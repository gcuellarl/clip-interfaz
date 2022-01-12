import "reflect-metadata";
import { TYPES } from "../../../src/inversify.types";
import { myContainer } from "../../../src/inversify.config";

import SectionApi from "../../../src/api/section-api";

import nextConnect from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = nextConnect<NextApiRequest, NextApiResponse>();
const sectionApi = myContainer.get<SectionApi>(TYPES.API.SECTION);
/**
 * @swagger
 * components:
 *   schemas:
 *     sections:
 *       type: object
 *       required:
 *         - id
 *         - name
 *       properties:
 *         id:
 *           type: integer
 *         idMedium:
 *           type: integer
 *         name:
 *           type: string
 *         active:
 *           type: integer
 *         type:
 *           type: string
 *
 */

/**
 * @swagger
 * /api/section:
 *  get:
 *    tags:
 *    - "Section"
 *    summary: return the list of all the section
 *    responses:
 *      200:
 *        description: list of the section
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/sections'
 */
handler.get(async (req, res) => {
  const { status, type, body } = await sectionApi.getAll(req);

  res.status(status);
  res.setHeader("Content-Type", type);
  res.write(body);
  res.end();
});

export default handler;
