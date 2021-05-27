import Head from "next/head";
import Link from "next/link";

import axios from "configs/axios";

function Home(props) {
  console.log(props);
  return (
    <div className="container mx-auto mt-4">
      <Head>
        <title>BWAMICRO</title>
        <link rel="stylesheet" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Saya Halaman Utama</h1>
        <Link href="/random">Bring me to random page</Link>
      </main>
    </div>
  );
}

Home.getInitialProps = async () => {
  try {
    const data = await axios.get(`/courses`);
    return { data };
  } catch (error) {
    return error;
  }
};

export default Home;
