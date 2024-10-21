import React from "react";
import Image from "next/image";

import type { Bank } from "@/dummy";

interface CentralBankProps {
  data: Bank;
}

const CentralBank: React.FC<CentralBankProps> = ({ data }) => {
  return (
    <div className='flex flex-col'>
      <div className='flex w-full items-center justify-center gap-x-5 p-5'>
        <Image src={data.logo} alt='Bank Logo' width={70} height={70} className='rounded-full' />

        <div>
          <h1 className='text-2xl font-bold'>Central Bank (ID-{data.id})</h1>
          <p className='text-lg text-slate-400'>This is the central bank.</p>
        </div>
      </div>
    </div>
  );
};

export default CentralBank;
