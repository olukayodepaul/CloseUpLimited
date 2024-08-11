import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    console.log(screenWidth);
    if (typeof window !== "undefined") {
      const handleResize = () => setScreenWidth(window.innerWidth);
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  console.log(screenWidth);
  return screenWidth;
};

export default useScreenSize;
