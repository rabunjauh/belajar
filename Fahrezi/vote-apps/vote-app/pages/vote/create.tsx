import Head from "next/head";
import Menu from "../../components/Menu";
import Image from "next/image";
import Form from "../../components/Form";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import CandidateForm from "../../components/CandidateForm";

export default function CreateVote() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="container mx-auto">
      <Head>
        <title>Voting Baru</title>
      </Head>

      <Menu />

      <div className="py-1-">
        <Image
          alt={"Create Vote"}
          src={"/assets/header.svg"}
          width={284}
          height={198}
        />

        <h1 className="text-4xl font-bold">Buat Voting Baru</h1>
        <h2 className="text-zinc-700 mt-3">
          Silahkan masukkan data yang dibutuhkan sebelum membuat vote online
        </h2>

        <form className="flex flex-col">
          {/* <Detail Vote> */}
          <div>
            <h3 className="font-medium text-xl mt-10">Detail Voting</h3>
            <div className="flex flex-col">
              <label className="text-sm mt-5" htmlFor="">
                Judul
              </label>
              <Form
                onChange={() => {}}
                value={""}
                placeHolder={"Contoh : Voting Calon Gubernur"}
                className="mt-1 w-1/2"
              />
            </div>
            <div className="flex flex-col w-2/3">
              <label className="text-sm" htmlFor="">
                Kapan Dimulai
              </label>
              <div className="inline-flex">
                <ReactDatePicker
                  showTimeSelect
                  selected={startDate}
                  onChange={(date) => date && setStartDate(date)}
                  dateFormat={"Pp"}
                  minDate={new Date()}
                  className={"w-full bg-zinc-100 py-2 px-3"}
                />
                <span className="text-sm text-center p-3">sampai</span>

                <ReactDatePicker
                  showTimeSelect
                  selected={endDate}
                  onChange={(date) => date && setEndDate(date)}
                  dateFormat={"Pp"}
                  minDate={startDate}
                  className={"w-full bg-zinc-100 py-2 px-3"}
                />
              </div>
            </div>
          </div>
          {/* </Detail Vote> */}

          {/* <Kandidat> */}
          <h3 className="font-medium text-xl mt-10">Kandidat</h3>
          <div className="grid gap-4 grid-cols-4 mt-5">
            <CandidateForm />
            <CandidateForm />
            <CandidateForm />
            <CandidateForm />
            <CandidateForm />
          </div>
          {/* </Kandidat> */}
        </form>
      </div>
    </div>
  );
}
