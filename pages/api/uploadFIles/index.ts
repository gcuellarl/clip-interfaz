import { NextApiRequest, NextApiResponse } from 'next';
/**
 * @swagger
 * components:
 *   schemas:
 *     UploadFiles:
 *       type: object
 *       required:
 *         - fileNAme
 *         - id
 *         - thumbnail
 *         - status
 *       properties:
 *         id:
 *           type: integer
 *         fileNAme:
 *           type: string
 *         thumbnail:
 *           type: string
 *         status :
 *           type: string
 *
 */

/**
 * @swagger
 * /api/UploadFiles:
 *  post:
 *    summary: Process files
 *    description: process pdf file or images
 *    requestBody:
 *      content:
 *        multipart/form-data:
 *          schema:
 *            type: object
 *            properties:
 *              upfile:
 *                description: The file to upload.
 *                type: string
 *                format: binary
 *    responses:
 *      200:
 *        description: list of the UploadFiles
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/UploadFiles'
 */
const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    result: 'hello world',
  });
};

export default handler;