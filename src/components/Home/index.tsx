import clsx from "clsx";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section
      className={`${clsx("grid h-screen place-items-center bg-hero bg-cover px-6 md:bg-right-top lg:justify-start lg:px-32", styles["background-slide"])}`}
    >
      <Hero />
    </section>
  );
};

const Hero = () => {
  return (
    <article
      className={clsx(
        "space-y-4 pr-8 lg:max-w-[600px]",
        styles["content-slide"],
      )}
    >
      <h1 className="font-display text-3xl font-bold tracking-wider text-canopy lg:text-6xl">
        From our tea <br /> gardens directly <br /> to your cup
      </h1>
      <p className="font-satoshi tracking-wider text-[#303030]">
        Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. In
        commodo enim sit amet magna semper lacinia. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. In commodo enim sit amet.
      </p>
      <button
        className="bg-honey h-14 w-36 rounded-2xl font-display font-medium text-white hover:opacity-60"
        style={{
          transition: "opacity ease-in 300ms",
        }}
      >
        Explore
      </button>
    </article>
  );
};

export default Home;
