import { PropsWithChildren } from "react";

export const PageContainer = ({ children }: PropsWithChildren) => {
  return <div className="mx-auto h-full w-full max-w-7xl">{children}</div>;
};
