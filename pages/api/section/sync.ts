import "reflect-metadata";
import { TYPES } from "../../../src/inversify.types";
import { myContainer } from "../../../src/inversify.config";

import SectionAPI from "../../../src/api/section-api";

import nextConnect from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = nextConnect<NextApiRequest, NextApiResponse>();
const sectionApi = myContainer.get<SectionAPI>(TYPES.API.SECTION);
/**
 * @swagger
 * components:
 *   schemas:
 *     totalSection:
 *       type: integer
 *       required:
 *         - totalSection
 */
/**
 * @swagger
 * /api/section/sync:
 *  put:
 *    tags:
 *    - "Section"
 *    summary: syncs the EFINFO sections
 *    responses:
 *      200:
 *        description: return the sections
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/totalSection'
 */
handler.put(async (req, res) => {
  const { status, type, body } = await sectionApi.sectionSync(req);

  res.status(status);
  res.setHeader("Content-Type", type);
  res.write(body);
  res.end();
});

export default handler;
