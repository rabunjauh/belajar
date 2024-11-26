import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Menu from "../components/Menu";
import Button from "../components/Button";
import { LinkIcon, TrashIcon } from "@heroicons/react/24/solid";

const Home: NextPage = () => {
  return (
    <div className="container mx-auto ">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      {/* <Header> */}
      <div className="flex flex-col place-items-center py-44 space-y-3">
        <h1 className="text-5xl font-bold">Ayo Mulai Voting</h1>
        <h2 className="text-lg bg-zinc-100 px-3 py-1">
          Web Voting No.1 Di Indonesia
        </h2>
        <Image
          alt={"Header"}
          src={"/assets/header.svg"}
          width={300}
          height={300}
        />

        <div className="space-x-10">
          <Button text="Buat Vote Baru" className="font-bold" />
          <Button text="Ikutan Vote" type="secondary" className="font-bold" />
        </div>
      </div>
      {/* </Header */}

      {/* <Table> */}
      <div>
        <p className="py-5 text-lg font-bold">Vote yang saya buat</p>
        <table className="table-auto w-full boder border-zinc-100">
          <thead>
            <tr className="border-b border-zinc-100">
              <th className="p-5 text-left">No</th>
              <th className="p-5 text-left">Judul</th>
              <th className="p-5 text-left">Kandidat</th>
              <th className="p-5 text-left">Kode</th>
              <th className="p-5 text-left">Mulai</th>
              <th className="p-5 text-left">Selesai</th>
              <th className="p-5 text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-5 text-left">1</td>
              <td className="px-5 text-left">Judul Voting</td>
              <td className="px-5 text-left">Budi vs Anto</td>
              <td className="px-5 text-left">BXAZIRH</td>
              <td className="px-5 text-left">20 Oct 2022 11:00</td>
              <td className="px-5 text-left">22 Oct 2022 11:00</td>
              <td className="px-5 text-left">
                <div>
                  <a href="#">
                    <LinkIcon className="w-8 h-8 p-2 hover:bg-zinc-100" />
                  </a>
                  <a href="#">
                    <TrashIcon className="w-8 h-8 p-2 hover:bg-zinc-100" />
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* </Table> */}
    </div>
  );
};

export default Home;
