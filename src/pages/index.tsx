import Chart from "@/components/chart";
import React from "react";

import { data } from "@/dummy";
import CentralBank from "@/components/central-bank";

const HomePage: React.FC = () => {
  const [banks, setBanks] = React.useState(data);
  const [centralBank, setCentralBank] = React.useState<number>(101); // Central Bank ID

  const centralBankData = data.find((x) => x.id === centralBank)!;

  return (
    <div className='flex w-full divide-x divide-slate-700'>
      <div className='relative flex min-h-screen flex-grow items-center justify-center'>
        <Chart banks={banks} centralBank={centralBank} setBanks={setBanks} setCentralBank={setCentralBank} />
      </div>

      <div className='w-full max-w-md flex-shrink-0'>
        <CentralBank data={centralBankData} />
      </div>
    </div>
  );
};

export default HomePage;
