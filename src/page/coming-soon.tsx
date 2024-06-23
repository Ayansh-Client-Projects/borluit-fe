import Page from "@/container/page";

const ComingSoon = () => {
  return (
    <section className="relative h-screen bg-hero bg-cover bg-[top_right_40%] bg-no-repeat lg:bg-center">
      <h1 className="font-jost absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 text-5xl font-bold capitalize tracking-wider text-canopy lg:text-8xl">
        <div>coming</div>
        <div>soon</div>
      </h1>
    </section>
  );
};

export const ComingSoonPage = () => (
  <Page>
    <ComingSoon />
  </Page>
);

export default ComingSoon;
