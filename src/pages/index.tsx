import Head from "next/head";
import { Navbar, Hero, About } from "@/components";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "900"],
});

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
      <header className="p-6 w-full sticky top-0 z-20 bg-transparent backdrop-blur-lg">
        <Navbar />
      </header>
      <main className={`${poppins.className}`}>
        <Hero />
        <About />
      </main>
    </>
  );
}
