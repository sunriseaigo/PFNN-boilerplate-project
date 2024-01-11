"use client";

import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    window.location.href = "/landing";
  }, []);
  return <></>;
};

export default Page;
