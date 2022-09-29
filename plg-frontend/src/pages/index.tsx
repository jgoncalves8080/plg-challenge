import type { NextPage } from 'next'
import Head from 'next/head'
import UpcomingReleases from 'src/views/UpcomingReleases'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>RD Station</title>
      </Head>
      <main>
        <UpcomingReleases />
      </main>
    </div>
  )
}

export default Home
