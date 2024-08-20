/**
 * @openapi
 * /apilogin/{mail}/{password}:
 *   get:
 *     summary: Authenticates a user by encrypted email and password
 *     parameters:
 *       - in: path
 *         name: mail
 *         required: true
 *         schema:
 *           type: string
 *           example: "user@example.com"
 *       - in: path
 *         name: password
 *         required: true
 *         schema:
 *           type: string
 *           example: "securepassword123"
 *     responses:
 *       201:
 *         description: User authenticated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 idusers:
 *                   type: integer
 *                   description: ID of the user
 *                 name:
 *                   type: string
 *                   description: Name of the user
 *                 mail:
 *                   type: string
 *                   description: Email of the user
 *                 role:
 *                   type: string
 *                   description: Role of the user
 *       404:
 *         description: Incorrect email or password
 *       500:
 *         description: Server error
 */