import clsx from "clsx";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section
      className={`${clsx("grid h-dvh place-items-center bg-hero bg-cover px-6 md:bg-right-top lg:justify-start lg:px-32", styles["background-slide"])}`}
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
      <h1 className="font-jost text-3xl font-bold tracking-wider text-canopy lg:text-6xl">
        Assam&apos;s Tea
        <br /> Crafted with
        <br /> Tradition & Care
      </h1>
      <p className="font-satoshi tracking-wider text-perrywinkle lg:text-[#303030]">
        Elevate your Assam tea experience with Borluit Tea, where tradition
        meets innovation{" "}
        <span className="hidden sm:inline">
          sourced from one of the finest Assam tea garden , one of the world's
          highly recommended regions. Discover the art of tea with Borluit Tea.
          Buy Tea online from us, one of the best Assam tea sellers.
        </span>
      </p>
      <a
        href="#ourproducts"
        className="flex h-11 w-24 items-center justify-center rounded-2xl bg-honey font-jost font-medium text-white hover:opacity-60 sm:h-14 sm:w-36"
        style={{
          transition: "opacity ease-in 300ms",
        }}
      >
        Explore
      </a>
    </article>
  );
};

export default Home;
