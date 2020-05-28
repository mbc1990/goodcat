// const db = require('../../lib/db')
// const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  throw "Heres a silly error";
  console.log("In index endpoint");
  let page = parseInt(req.query.page) || 1
  const limit = parseInt(req.query.limit) || 9
  if (page < 1) page = 1
  console.log("Getting some data from the database");
    /*
  const profiles = await db.query(escape`
      SELECT *
      FROM profiles
      ORDER BY id
      LIMIT ${(page - 1) * limit}, ${limit}
    `)
  const count = await db.query(escape`
      SELECT COUNT(*)
      AS profilesCount
      FROM profiles
    `)
  const { profilesCount } = count[0]
  const pageCount = Math.ceil(profilesCount / limit)
  */

  const profiles = {'profiles': [{'id': 1, 'avatar': '', 'name': 'testname'}]};
  // res.status(200).json({ profiles, pageCount, page })
  const pageCount = 1;
  res.status(200).json({ profiles, pageCount, page })
}
