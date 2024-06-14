import Carousel from "react-multi-carousel";
import styles from "./OurProducts.module.css";
import clsx from "clsx";
import { ButtonGroup } from "../Carousel";
import carouselStyles from "../Carousel/Carousel.module.css";

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
    <section
      id="ourproducts"
      className={clsx(
        "bg-[#F0F0F0] px-6 py-16 lg:flex lg:flex-col lg:items-center lg:pt-28",
        styles["background-mask"],
      )}
    >
      <div className="space-y-8 lg:max-w-[920px]">
        <h2 className="font-display text-2xl font-semibold uppercase tracking-wider text-canopy lg:text-center lg:text-4xl">
          our products
        </h2>
        <p className="text-justify font-satoshi tracking-wider text-perrywinkle lg:text-center">
          Discover the essence of Assam with Borluit Tea. Our collection
          features a range of exquisite teas, each meticulously crafted to
          deliver an unparalleled tea experience. Indulge in the bold and robust
          flavor of our Assam Black Tea, perfect for kickstarting your day. For
          a healthier option, savor the fresh and earthy notes of our Assam
          Green Tea, rich in antioxidants. Our Masala Chai blends traditional
          Assam tea with aromatic spices, offering a warm and comforting treat.
          For a more refined taste, our Assam White Tea provides a delicate and
          sweet flavor, ideal for a luxurious tea experience.
        </p>
        <p className="text-justify font-satoshi tracking-wider text-perrywinkle lg:text-center">
          Additionally, our Herbal Infusions combine the finest Assam tea with
          carefully selected herbs, creating a calming and aromatic journey
          perfect for relaxation and well-being. With Borluit Tea, every cup is
          a celebration of tradition, quality, and the rich heritage of Assam.
        </p>
      </div>
      <div className="relative mt-16 h-[448px] lg:w-[1380px]">
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          renderButtonGroupOutside={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          arrows={false}
          customButtonGroup={<ButtonGroup />}
          infinite
          showDots
          dotListClass={carouselStyles["custom-dot-list-style"]}
        >
          {productsList.map((p, idx) => (
            <ProductItem
              imgName={p.image}
              name={p.name}
              position={idx + 1}
              key={p.name.toLocaleLowerCase() + idx}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 645 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 645, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ProductItem = (props: {
  position: number;
  name: string;
  imgName: string;
}) => {
  let imgClasses = "";
  let bgChangeAnimationStyles: string[] = [];
  if (props.imgName.toLocaleLowerCase() === "green") {
    imgClasses = "bg-teaBag";
    bgChangeAnimationStyles = [styles["animate-background"], styles.green];
  }
  if (props.imgName.toLocaleLowerCase() === "black") {
    imgClasses = "bg-teaBag";
    bgChangeAnimationStyles = [styles["animate-background"], styles.black];
  }

  return (
    <div>
      <div
        className={clsx(
          imgClasses,
          "h-[400px] bg-contain bg-center bg-no-repeat",
          bgChangeAnimationStyles,
        )}
      />
      <p className="text-center font-display text-2xl font-semibold capitalize">
        {props.name}
      </p>
    </div>
  );
};

export default OurProducts;
