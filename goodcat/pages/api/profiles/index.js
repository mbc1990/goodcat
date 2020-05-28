const db = require('../../../lib/db')

module.exports = async (req, res) => {
  console.log("In index endpoint");
  let page = parseInt(req.query.page) || 1
  const limit = parseInt(req.query.limit) || 9
  if (page < 1) page = 1
  console.log("Getting some data from the database");
  const posts = await db.any(`
      SELECT *
      FROM posts 
      ORDER BY id
      LIMIT $1
      OFFSET $2
    `, [limit, (page-1) * limit])
  const count = await db.any(`
      SELECT COUNT(*)
      AS postsCount
      FROM posts 
    `)
  const { postsCount } = count[0]
  const pageCount = Math.ceil(postsCount / limit)

  res.status(200).json({ posts, pageCount, page })
}
