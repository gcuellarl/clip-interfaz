import { NextApiRequest, NextApiResponse } from "next";

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

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    result: "hello pdf",
  });
};

export default handler;
