import clsx from "clsx";
import styles from "./AboutUs.module.css";
import TeaGarden from "@/assets/img/tea-garden.jpg";

const AboutUs = () => {
  return (
    <section
      id="aboutus"
      className={clsx(
        "flex flex-col bg-[#F0F0F0] lg:items-center lg:p-[120px]",
        styles["background-mask"],
      )}
    >
      <section className="flex-1 basis-[456px] lg:relative lg:h-[576px] lg:w-[975px]">
        <img
          src={TeaGarden}
          className="h-full w-full object-cover lg:hover:translate-x-1 lg:hover:translate-y-1 lg:hover:scale-[1.015]"
          style={{
            transition: "transform ease-in 300ms",
          }}
        />
        <Card classes="hidden lg:absolute lg:block lg:top-1/2 lg:-translate-y-1/2 lg:right-0 lg:translate-x-1/2 lg:max-h-[456px] lg:max-w-[490px] lg:p-14 " />
      </section>
      <Card classes="flex-1 lg:hidden" />
    </section>
  );
};

const Card = (props: { classes: string }) => {
  return (
    <section className={clsx("space-y-4 bg-white px-6 py-8", props.classes)}>
      <h2 className="font-display text-2xl font-semibold uppercase tracking-widest text-canopy lg:text-4xl">
        About Us
      </h2>
      <p className="font-satoshi tracking-wider text-perrywinkle">
        Founded in 2015, Borluit Tea is dedicated to bringing the rich heritage
        and exquisite flavors of Assam to tea lovers around the world. Our
        journey began with a passion for sharing the finest teas, handpicked
        from the lush tea gardens of Assam, known for producing some of the
        world&apos;s most exceptional teas. At Borluit Tea, we believe in
        preserving tradition while embracing innovation. Our carefully curated
        collection includes robust Assam Black Tea, refreshing Assam Green Tea,
        aromatic Masala Chai, delicate Assam White Tea, and soothing Herbal
        Infusions. Each blend is crafted to provide a unique and delightful tea
        experience, embodying the essence of Assam&apos;s tea culture. We are
        committed to quality and sustainability, ensuring that every cup of
        Borluit Tea not only delights your senses but also supports the
        livelihoods of local tea growers. Join us on a journey of flavor,
        wellness, and tradition with Borluit Tea.
      </p>
    </section>
  );
};

export default AboutUs;
