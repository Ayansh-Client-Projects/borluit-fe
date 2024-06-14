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
        Assam&apos;s Tea Crafted with Tradition and Care
      </h1>
      <p className="font-satoshi tracking-wider text-perrywinkle lg:text-[#303030]">
        Elevate your tea experience with Borluit Tea, where tradition meets
        innovation. Sourced from one of the finest tea growing regions in the
        world. Discover the art of tea with Borluit Tea.
      </p>
      <a
        href="#ourproducts"
        className="flex h-14 w-36 items-center justify-center rounded-2xl bg-honey font-display font-medium text-white hover:opacity-60"
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
