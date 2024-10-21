import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const getChartData = (innerCircleWidth: number) => {
  const innerCircleDiameter = innerCircleWidth;
  const innerCircleRadius = innerCircleDiameter / 2;
  const innerCirclePadding = innerCircleWidth * 0.3; // 30% of inner circle
  const outerCircleDiameter = (4 / 6) * innerCircleDiameter; // 4/6 of inner circle
  const outerCircleRadius = outerCircleDiameter / 2;
  const outerCirclePadding = outerCircleDiameter * 0.3; // 30% of outer circle

  // const distanceFromCenter = innerCircleDiameter + 0.15 * innerCircleDiameter; // 15% of inner circle
  // const distanceFromCenter = innerCircleRadius + outerCircleRadius + 200; // for specific distance
  const distanceFromCenter = (innerCircleRadius + outerCircleRadius) * 1.5; // 1.5 times of inner circle

  const lineWidth =
    distanceFromCenter - (innerCircleRadius + outerCircleRadius);

  return {
    innerCircle: {
      diameter: innerCircleDiameter,
      radius: innerCircleRadius,
      padding: innerCirclePadding,
      image: {
        width: innerCircleDiameter - innerCirclePadding,
        height: innerCircleDiameter - innerCirclePadding,
      },
    },
    outerCircle: {
      diameter: outerCircleDiameter,
      radius: outerCircleRadius,
      padding: outerCirclePadding,
      image: {
        width: outerCircleDiameter - outerCirclePadding,
        height: outerCircleDiameter - outerCirclePadding,
      },
    },
    distanceFromCenter,
    lineWidth,
  };
};
