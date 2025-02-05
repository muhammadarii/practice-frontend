"use client";
import SliceCountry from "@/components/SliceCountry";
import Link from "next/link";
import React from "react";

const LandingPage = () => {
  return (
    <>
      <div className="flex flex-col p-4">
        <h1 className="text-3xl font-bold text-center py-4">
          Countries in restcountries.com
        </h1>
        <Link href="https://restcountries.com/v3.1/all">
          API from https://restcountries.com/v3.1/all
        </Link>
        <SliceCountry />
      </div>
    </>
  );
};

export default LandingPage;
