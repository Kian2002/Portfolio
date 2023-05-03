import Head from "next/head";
import { Navbar } from "@/components";

import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Kian Abdollahzadeh Portfolio</title>
        <meta
          name="description"
          content="Kian Abdollahzadeh web developer portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${poppins.className} bg-black`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quaerat
        provident dolorem, temporibus magni deserunt, obcaecati ut fuga odit
        laboriosam ducimus corporis eum, excepturi recusandae. Dolor unde
        molestiae placeat hic.
      </main>
    </>
  );
}
