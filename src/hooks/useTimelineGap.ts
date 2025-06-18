import { useEffect, useState } from "react";

const breakpoints = [
  { minWidth: 1536, value: 350 }, // 2xl
  { minWidth: 1280, value: 325 }, // xl
  { minWidth: 1024, value: 300 }, // lg
  { minWidth: 768, value: 275 }, // md
  { minWidth: 640, value: 250 }, // sm
  { minWidth: 0, value: 225 }, // default
];

export function useTimelineGap(multiplier: number = 1) {
  const [top, setTop] = useState(0);

  useEffect(() => {
    const updateTop = () => {
      const width = window.innerWidth;
      const base = breakpoints.find((bp) => width >= bp.minWidth)?.value || 200;
      setTop(base * multiplier);
    };

    updateTop();
    window.addEventListener("resize", updateTop);
    return () => window.removeEventListener("resize", updateTop);
  }, [multiplier]);

  return top;
}
