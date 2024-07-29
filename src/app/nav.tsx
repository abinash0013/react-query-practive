"use client";

import Link from "next/link";
import { useState } from "react";
import ReactDOM from "react-dom";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  name: string;
  email: string;
  profile: string;
}

export default function Nav() {
  const router = useRouter();

  const navigate = (name: any) => {
    router.push(name);
  };

  return (
    <main className="h-full w-full">
      <div className="mt-[10px] flex items-center justify-center gap-7 bg-red-200 shadow-xl py-4 rounded-sm">
        <Link href="/">Home Page</Link>
        <Link href="/TraditionalHomePage">Traditional Home Page</Link>
        <Link href="/RHomePage">RQ Home Page</Link>
      </div>
    </main>
  );
}
