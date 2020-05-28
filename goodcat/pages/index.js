import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

HomePage.getInitialProps = async ({ req, query }) => {
  const protocol = 'http:';
  const host = 'localhost:3000';
  const pageRequest = `${protocol}//${host}/api/profiles?page=${query.page ||
    1}&limit=${query.limit || 9}`
  console.log(pageRequest);
  const res = await fetch(pageRequest)
  console.log("Status: " + res.status);

  console.log(req.headers);
  const json = await res.json()
  console.log(json);
  return json
}

function HomePage({ posts, page, pageCount }) {
  return (
    <>
      <ul>
        {posts.map(p => (
          <li className="post" key={p.id}>
            <Link href={`/profile?id=${p.id}`}>
              <a>
                <img src={p.url} />
                <span>{p.created_at}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <nav>
        {page > 1 && (
          <Link href={`/?page=${page - 1}&limit=9`}>
            <a>Previous</a>
          </Link>
        )}
        {page < pageCount && (
          <Link href={`/?page=${page + 1}&limit=9`}>
            <a className="next">Next</a>
          </Link>
        )}
      </nav>
    </>
  )
}

export default HomePage
