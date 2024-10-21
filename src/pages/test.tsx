import React from "react";
import Image from "next/image";

import { data } from "@/dummy";
import { getChartData } from "@/utils/helper";

const TestPage: React.FC = () => {
  const { innerCircle, outerCircle, distanceFromCenter, lineWidth } = getChartData(220);

  const [banks, setBanks] = React.useState(data);
  const [centralBank, setCentralBank] = React.useState<number>(101); // Central Bank ID

  const handleClick = (targetBank: number) => {
    const arr = [...banks];

    const central = arr.find((x) => x.id === centralBank);
    const target = arr.find((x) => x.id === targetBank);
    if (!central || !target) {
      return arr;
    }

    const temp = central;

    const centralIndex = arr.findIndex((x) => x.id === centralBank);
    const targetIndex = arr.findIndex((x) => x.id === targetBank);

    arr[centralIndex] = target;
    arr[targetIndex] = temp;

    setBanks([...arr]);
    setCentralBank(targetBank);
  };

  return (
    <div className='flex min-h-screen w-full flex-col items-center justify-center'>
      <div className='relative flex min-h-[800px] w-full max-w-6xl flex-col items-center justify-center border border-slate-800'>
        <div
          className='z-100 absolute flex items-center justify-center rounded-full border border-indigo-600 bg-slate-800'
          style={{
            width: innerCircle.diameter,
            height: innerCircle.diameter,
          }}
        >
          <Image
            src={banks.find((x) => x.id === centralBank)!.logo}
            alt='Bank Logo'
            width={innerCircle.image.width}
            height={innerCircle.image.height}
            className='rounded-full'
          />
        </div>

        {banks
          .filter((x) => x.id !== centralBank) // Exclude the central bank from the surrounding banks
          .slice(0, 8) // Show only 8 banks surrounding the central bank
          .map((bank, index) => {
            const rotate = (index + 1) * (360 / (banks.length - 1)) - 90; // equal angle between each bank

            return (
              <div
                key={bank.id}
                className='line-style absolute flex cursor-pointer items-center justify-center rounded-full border border-indigo-600 bg-slate-800 before:absolute before:h-[1px] before:bg-indigo-600 before:content-[""]'
                style={{
                  width: outerCircle.diameter,
                  height: outerCircle.diameter,
                  transform: `rotate(${rotate}deg) translate(${distanceFromCenter}px)`,
                }}
                onClick={() => handleClick(bank.id)}
              >
                <Image
                  src={bank.logo}
                  alt='Bank Logo'
                  width={outerCircle.image.width}
                  height={outerCircle.image.height}
                  className='rounded-full'
                  style={{
                    transform: `rotate(${-rotate}deg)`,
                  }}
                />
              </div>
            );
          })}

        <style jsx>{`
          .line-style::before {
            width: ${lineWidth}px;
            transform: translateX(calc(-50% - ${outerCircle.radius}px));
          }
        `}</style>
      </div>
    </div>
  );
};

export default TestPage;
