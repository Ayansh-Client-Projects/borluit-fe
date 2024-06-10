import { ReactElement } from "react";

const circularCardTexts = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo enim sit amet magna semper lacinia.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo enim sit amet magna semper lacinia.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo enim sit amet magna semper lacinia.",
];

const MissionVision = () => {
  const textClasses =
    "text-perrywinkle text-center font-display font-medium tracking-wider";

  return (
    <section className="space-y-16 bg-[#F0F0F0] px-6 pt-16 shadow-inner">
      <section className="space-y-9">
        <Card header="Our Vision">
          <p className={textClasses}>
            Borluit{" "}
            <span
              className={`before:font-palanquin relative before:absolute before:left-1/2 before:top-0 before:block before:-translate-x-1/2 before:-translate-y-6 before:rotate-180 before:scale-[6] before:font-semibold before:tracking-[0.15em] before:text-canopy before:opacity-10 before:content-["''"]`}
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
            Borluit Tea strives to perfect the craft of Assam tea, capturing its
            unique flavors and cultural heritage in every brew.
          </p>
        </Card>
      </section>
      <section className="flex flex-col items-center">
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
  return (
    <section className="space-y-9">
      <h2 className="relative text-center font-display text-2xl font-semibold uppercase tracking-wider text-canopy before:absolute before:left-1/2 before:block before:-translate-x-1/2 before:scale-[2] before:opacity-10 before:content-['our_vision']">
        {props.header}
      </h2>
      {props.children}
    </section>
  );
};

const CardCircular = (props: {
  text: string;
  classes: string;
  position: number;
}) => {
  return (
    <div
      className={
        "grid size-[250px] place-items-center rounded-full border-4 border-[#55634B] border-opacity-30 px-4 text-center"
      }
      style={{
        transform:
          props.position > 0 ? `translateY(-${24 * props.position}px)` : "none",
      }}
    >
      <p className={props.classes}>{props.text}</p>
    </div>
  );
};

export default MissionVision;
