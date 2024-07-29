"use client";

import Link from "next/link";
import { useState } from "react";
import ReactDOM from "react-dom";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { QueryClient, QueryClientProvider } from "react-query";

import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  name: string;
  email: string;
  profile: string;
}

export default function Home() {
  // const { register, handleSubmit, formState, reset } = useForm<IFormInput>();
  // const [formValuesArray, setFormValuesArray] = useState<IFormInput[]>([]);
  // const onSubmit = (data: IFormInput) => {
  //   setFormValuesArray([...formValuesArray, data]);
  //   console.log("Form Values Array:", formValuesArray);
  //   reset();
  // };
  // const { errors } = formState;
  const router = useRouter();

  const navigate = (name: any) => {
    router.push(name);
  };

  return (
    // <main className="w-[300px] h-[300px] mx-auto my-auto bg-gray-300">
    //   <div className="h-full w-full flex flex-row items-center justify-center">
    //     <form
    //       onSubmit={handleSubmit(onSubmit)}
    //       className="bg-white p-6 rounded shadow-md w-full max-w-md"
    //     >
    //       <div className="mb-4">
    //         <label
    //           className="block text-gray-700 text-sm font-bold mb-2"
    //           htmlFor="name"
    //         >
    //           Name:
    //         </label>
    //         <input
    //           {...register("name", {
    //             required: {
    //               value: true,
    //               message: "Name is Mandatory!",
    //             },
    //           })}
    //           id="name"
    //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         />
    //       </div>
    //       <div className="mb-4">
    //         <label
    //           className="block text-gray-700 text-sm font-bold mb-2"
    //           htmlFor="email"
    //         >
    //           Email:
    //         </label>
    //         <input
    //           {...register("email", {
    //             required: {
    //               value: true,
    //               message: "Email is Mandatory!",
    //             },
    //           })}
    //           id="email"
    //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         />
    //       </div>
    //       <div className="mb-4">
    //         <label
    //           className="block text-gray-700 text-sm font-bold mb-2"
    //           htmlFor="profile"
    //         >
    //           Profile:
    //         </label>
    //         <input
    //           {...register("profile")}
    //           id="profile"
    //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         />
    //       </div>
    //       <div className="flex items-center justify-center">
    //         <input
    //           type="submit"
    //           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer "
    //         />
    //       </div>
    //     </form>
    //   </div>

    //   <div className="">
    //     <h2>Submitted Values:</h2>
    //     <ul>
    //       {formValuesArray.map((item, index) => (
    //         <li key={index}>
    //           Name: {item.name},
    //           <br />
    //           Email: {item.email},
    //           <br />
    //           Profile: {item.profile}
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </main>
    <QueryClientProvider client={new QueryClient()}>
      <main className="h-full w-full">
        <div className="mt-[10px] flex items-center justify-center gap-7 bg-red-200 shadow-xl py-4 rounded-sm">
          <Link href="/">Home Page</Link>
          <Link href="/TraditionalHomePage">Traditional Home Page</Link>
          <Link href="/RHomePage">RQ Home Page</Link>
        </div>
      </main>
    </QueryClientProvider>
  );
}
