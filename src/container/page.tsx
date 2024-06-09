import Navbar from "@/components/Navbar";
import { ReactElement } from "react";

const Page = (props: { children: ReactElement }) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};

export default Page;
