import "reflect-metadata";
import { TYPES } from "../../../src/inversify.types";
import { myContainer } from "../../../src/inversify.config";

import nextConnect from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";

import SectionApi from "../../../src/api/section-api";

const handler = nextConnect<NextApiRequest, NextApiResponse>();
const sectionApi = myContainer.get<SectionApi>(TYPES.API.SECTION);

/**
 * @swagger
 * components:
 *   schemas:
 *     section:
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
 * /api/section/[idMedium]:
 *  get:
 *    tags:
 *    - "Section"
 *    summary: syncs the EFINFO sections
 *    parameters:
 *       - in: query
 *         name: idMedium
 *         description: id medium
 *         schema:
 *           type: integer
 *    responses:
 *      200:
 *        description: return the sections
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/section'
 */
handler.get(async (req, res) => {
  const { status, type, body } = await sectionApi.getByMediumId(req);

  res.status(status);
  res.setHeader("Content-Type", type);
  res.write(body);
  res.end();
});
export default handler;
