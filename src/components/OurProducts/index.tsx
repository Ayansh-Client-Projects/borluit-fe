import styles from "./OurProducts.module.css";
import clsx from "clsx";

const productsList = [
  {
    image: "black",
    name: "Black Tea",
  },
  {
    image: "green",
    name: "Green Tea",
  },
  {
    image: "black",
    name: "Black Tea",
  },
];

const OurProducts = () => {
  return (
    <section className="bg-[#F0F0F0] px-6 py-16 lg:flex lg:justify-center lg:pt-28">
      <div className="space-y-8 lg:max-w-[920px]">
        <h2 className="font-display text-2xl font-semibold uppercase tracking-wider text-canopy lg:text-center lg:text-4xl">
          our products
        </h2>
        <p className="font-satoshi text-perrywinkle tracking-wider lg:text-center">
          Discover the perfect cup with our premium tea selection. Handpicked
          from the finest gardens, each blend offers a unique taste experience.
          From classic black teas to refreshing green and herbal varieties, our
          collection is crafted to elevate your tea time. Indulge in quality,
          flavour, and tradition with every sip.
        </p>
        <p className="font-satoshi text-perrywinkle tracking-wider lg:text-center">
          Experience the finest blends with our premium tea collection! Sourced
          from the world&apos;s best tea gardens in Assam, our teas promise
          unparalleled taste and aroma. Whether you prefer classic black,
          soothing green, or exotic herbal infusions, each cup delivers pure
          satisfaction. Elevate your tea time with our exquisite selection
          today!
        </p>
        <div
          className={clsx(
            "group relative flex h-[448px] overflow-x-hidden lg:mt-[64px_!important]",
            styles.wrapper,
          )}
        >
          {productsList.map((p, idx) => (
            <ProductItem
              imgName={p.image}
              name={p.name}
              position={idx + 1}
              key={p.name.toLocaleLowerCase() + idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductItem = (props: {
  position: number;
  name: string;
  imgName: string;
}) => {
  let imgClasses = "";
  if (props.imgName.toLocaleLowerCase() === "green") {
    imgClasses = "bg-teaBag hover:bg-teaLeavesGreen";
  }
  if (props.imgName.toLocaleLowerCase() === "black") {
    imgClasses = "bg-teaBag hover:bg-teaLeavesBlack";
  }

  return (
    <div
      className={clsx(
        "absolute w-[400px] group-hover:[animation-play-state:paused]",
        styles.item,
      )}
      style={{
        animationDelay: `calc(25s / 3 * (3 - ${props.position}) * -1)`,
      }}
    >
      <div
        className={clsx(
          imgClasses,
          "h-[400px] hover:bg-[length:80%_80%] hover:bg-center hover:bg-no-repeat",
        )}
      />
      <p className="text-center font-display text-2xl font-semibold capitalize">
        {props.name}
      </p>
    </div>
  );
};

export default OurProducts;
