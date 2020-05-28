import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

HomePage.getInitialProps = async ({ req, query }) => {
    /*
  const protocol = req
    ? `${req.headers['x-forwarded-proto']}:`
    : 'https';
  const host = req ? req.headers['x-forwarded-host'] : 'localhost';
  const pageRequest = `${protocol}//${host}/api/profiles?page=${query.page ||
    1}&limit=${query.limit || 9}`
    */
  const protocol = 'http:';
  const host = 'localhost:3000';
  const pageRequest = `${protocol}//${host}/api/profiles?page=${query.page ||
    1}&limit=${query.limit || 9}`
  console.log(pageRequest);
  const res = await fetch(pageRequest)
  console.log("Status: " + res.status);

  // console.log(await res.json());
  console.log(req.headers);
  // const json = await res.json()
  // return json
  return {'profiles': [{'id': 1, 'avatar': '', 'name': 'testname'}]};
}

function HomePage({ profiles, page, pageCount }) {
  return (
    <>
      <ul>
        {profiles.map(p => (
          <li className="profile" key={p.id}>
            <Link href={`/profile?id=${p.id}`}>
              <a>
                <img src={p.avatar} />
                <span>{p.name}</span>
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
