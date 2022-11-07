import { createContext, useEffect, useState } from "react";

interface iRenderContextProps {
  children: React.ReactNode;
}

interface iRenderContext {
  size: number;
}

export const RenderContext = createContext<iRenderContext>(
  {} as iRenderContext
);

export const RenderProvider = ({ children }: iRenderContextProps) => {
  const [size, setSize] = useState(0);
  useEffect(() => {
    setSize(window.innerWidth);
  }, []);
  window.addEventListener("resize", () => {
    setSize(window.innerWidth);
  });
  return (
    <RenderContext.Provider value={{ size }}>{children}</RenderContext.Provider>
  );
};
