"use client";

import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.href = "/signin";
  }, []);
  return <></>;
}
