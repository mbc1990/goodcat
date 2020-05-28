const db = require('../../../lib/db')

module.exports = async (req, res) => {
  console.log("Getting a post");
  const [profiles] = await db.any(`
    SELECT *
    FROM posts 
    WHERE id = $1
  `, [req.query.id])
  console.log("Got a post: " + profiles);
  res.status(200).json({profiles})
}
