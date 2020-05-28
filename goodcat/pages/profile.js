import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

ProfilePage.getInitialProps = async ({ req, query }) => {
    /*
  const protocol = req
    ? `${req.headers['x-forwarded-proto']}:`
    : location.protocol
  const host = req ? req.headers['x-forwarded-host'] : location.host
  const pageRequest = `${protocol}//${host}/api/profiles/${query.id}`
  */

  const protocol = 'http:';
  const host = 'localhost:3000';
  // const pageRequest = `${protocol}//${host}/api/profiles?page=${query.page ||
    // 1}&limit=${query.limit || 9}`
  const pageRequest = `${protocol}//${host}/api/profiles/${query.id}`
  const res = await fetch(pageRequest)
  console.log("profile res: " + await res.text());
  // const json = await res.json()
  // console.log(json);
  const json = {};
  return json
}

function ProfilePage({ post}) {
  return (
    <>
      <div>
        <img src={post.url} />
        <p>{post.created_at}</p>
        <Link href="/">
          <a>← Back to posts</a>
        </Link>
      </div>
    </>
  )
}

export default ProfilePage
