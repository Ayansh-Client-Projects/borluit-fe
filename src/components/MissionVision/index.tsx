import clsx from "clsx";
import { ReactElement } from "react";
import styles from "./MissionVision.module.css";

const circularCardTexts = [
  "Celebrate Assam's diverse flavours and cultural heritage through our carefully crafted tea blends, honouring centuries-old traditions and showcasing the region's unique terroir",
  "Embrace eco-friendly methods at every stage of tea production, from sustainable farming practices to environmentally conscious packaging, minimizing our ecological footprint and preserving the natural beauty of Assam's tea-growing landscapes.",
  "Uplift local communities by partnering with small-scale tea growers, providing fair wages, promoting education and healthcare initiatives, and empowering individuals to thrive economically while preserving their cultural heritage and way of life.",
];

const MissionVision = () => {
  const textClasses =
    "text-perrywinkle text-center font-display font-medium tracking-wider lg:max-w-[920px] lg:text-center";

  return (
    <section
      className={clsx(
        "space-y-16 bg-[#F0F0F0] px-6 pt-16 shadow-inner lg:space-y-32 lg:p-32 lg:shadow-none",
        styles["background-mask"],
      )}
    >
      <section className="space-y-9">
        <Card header="Our Vision">
          <p className={textClasses}>
            Borluit{" "}
            <span
              className={`relative before:absolute before:left-1/2 before:top-0 before:block before:-translate-x-1/2 before:-translate-y-6 before:rotate-180 before:scale-[6] before:font-palanquin before:font-semibold before:tracking-[0.15em] before:text-canopy before:opacity-10 before:content-["''"]`}
            >
              Tea aims
            </span>{" "}
            to lead in Assam tea, crafting each cup with the region&apos;s
            finest flavors and traditions & We&apos;re committed to uplifting
            Assam&apos;s communities through fair practices and sustainable
            initiatives.
          </p>
        </Card>
      </section>
      <section className="space-y-5">
        <Card header="Our Mission">
          <p className={textClasses}>
            At Borluit Tea, our mission is to deliver the finest Assam teas that
            embody the rich heritage and traditions of the region. We are
            dedicated to maintaining the highest standards of quality and
            sustainability, ensuring that each cup of tea brings joy and
            well-being to our customers
          </p>
        </Card>
      </section>
      <section className="flex flex-col items-center lg:flex-row lg:justify-center">
        {circularCardTexts.map((text, index) => (
          <CardCircular
            text={text}
            position={index}
            key={text.slice(0, 4) + index}
            classes={textClasses}
          />
        ))}
      </section>
    </section>
  );
};

const Card = (props: { header: string; children: ReactElement }) => {
  let content = "before:content-['our_vision']";
  if (props.header.toLocaleLowerCase() === "our mission") {
    content = "before:content-['our_mission']";
  }

  return (
    <section className="space-y-9">
      <h2
        className={clsx(
          "relative text-center font-display text-2xl font-semibold uppercase tracking-wider text-canopy before:absolute before:left-1/2 before:block before:-translate-x-1/2 before:scale-[2] before:text-[1.35rem] before:opacity-10 lg:text-4xl lg:before:text-4xl",
          content,
        )}
      >
        {props.header}
      </h2>
      <div className="lg:grid lg:place-items-center">{props.children}</div>
    </section>
  );
};

const CardCircular = (props: {
  text: string;
  classes: string;
  position: number;
}) => {
  let translateClass =
    "-translate-y-[0px] lg:-translate-x-[0px] lg:-translate-y-[0px]";
  switch (props.position) {
    case 1:
      translateClass =
        "-translate-y-[24px] lg:-translate-x-[24px] lg:-translate-y-[0px]";
      break;
    case 2:
      translateClass =
        "-translate-y-[48px] lg:-translate-x-[48px] lg:-translate-y-[0px]";
      break;
    case 3:
      translateClass =
        "-translate-y-[72px] lg:-translate-x-[72px] lg:-translate-y-[0px]";
      break;
    default:
      break;
  }

  return (
    <div
      className={clsx(
        "group grid size-[250px] place-items-center rounded-full border-4 border-[#55634b2f] border-opacity-30 px-4 text-center hover:bg-[#55634ba5] hover:bg-opacity-95",
        translateClass,
      )}
      style={{
        transition: "background ease-in 200ms",
      }}
    >
      <p className={clsx(props.classes, "group-hover:text-white")}>
        {props.text}
      </p>
    </div>
  );
};

export default MissionVision;
