import Navbar from "@/components/Navbar";
import { ReactElement } from "react";
import ComingSoon from "./coming-soon";

const Page = (props: { children: ReactElement }) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};

export const ComingSoonPage = () => (
  <Page>
    <ComingSoon />
  </Page>
);
