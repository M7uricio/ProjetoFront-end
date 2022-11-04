import { createContext, useState } from "react";
interface iCommentContextProps {
  children: React.ReactNode;
}
interface iCommentContext {}
export const CommentContext = createContext<iCommentContext>(
  {} as iCommentContext
);

export const CommentProvider = ({ children }: iCommentContextProps) => {
  return (
    <CommentContext.Provider value={{}}>{children}</CommentContext.Provider>
  );
};
