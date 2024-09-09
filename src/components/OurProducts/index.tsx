import Carousel from "react-multi-carousel";
import styles from "./OurProducts.module.css";
import clsx from "clsx";
import { ButtonGroup } from "../Carousel";
import carouselStyles from "../Carousel/Carousel.module.css";
import AssamTeaProduct from "@/assets/img/assam-tea-product.webp";
import AssamTeaLeaves from "@/assets/img/assam-tea-leaves-tranparent.webp";
import GreenTeaProduct from "@/assets/img/green-tea-product.webp";
import GreenTeaLeaves from "@/assets/img/green-tea-leaves-transparent.webp";
import MasalaChaiProduct from "@/assets/img/masala-chai-product.webp";
import MasalaChaiLeavesT from "@/assets/img/masala-chai-leaves-transparent.webp";

interface Product {
  name: string;
  productImg: string;
  leavesImg: string;
}

const ProductsList: Product[] = [
  {
    name: "Assam Tea",
    productImg: AssamTeaProduct,
    leavesImg: AssamTeaLeaves,
  },
  {
    name: "Green Tea",
    productImg: GreenTeaProduct,
    leavesImg: GreenTeaLeaves,
  },
  {
    name: "Masala Chai",
    productImg: MasalaChaiProduct,
    leavesImg: MasalaChaiLeavesT,
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
      <div className="space-y-4 lg:max-w-[900px]">
        <h2 className="font-jost text-2xl font-semibold uppercase tracking-wider text-canopy lg:text-center lg:text-4xl">
          our products
        </h2>

        <p className="text-justify font-satoshi tracking-wider text-perrywinkle lg:text-center">
          {/* <span className="text-md font-jost">Assam Tea:</span>  */}
          Discover the essence of Assam Tea with Borluit Tea. Our collection
          features a range of teas,- Black Tea, Green Tea, Masala Chai, Herbal
          Tea and many more, each meticulously crafted to deliver an
          unparalleled tea experience. Indulge in the bold and robust flavor of
          our Assam Black Tea, perfect for kickstarting your day. For a
          healthier option, savor the fresh and earthy notes of our Assam Green
          Tea leaves, rich in antioxidants and many benefits of green tea
          properties. Our Masala Chai blends traditional Assam tea with aromatic
          spices, offering a warm and comforting treat. Buy masala chai tea
          online and savour the taste of uniqueness which parallels with Green
          tea nutrients. For a more refined taste, our Assam White Tea provides
          a delicate and sweet flavor, ideal for a luxurious tea experience.
        </p>
        <p className="text-justify font-satoshi tracking-wider text-perrywinkle lg:text-center">
          {/* <span className="text-md font-jost">Green Tea:</span> */}
          Additionally, our Herbal Infusions combine the finest Assam tea with
          carefully selected herbs, creating a calming and aromatic journey
          perfect for relaxation and well-being. With Borluit Tea, every cup is
          a celebration of tradition, quality, and the rich heritage of Assam.
        </p>
        {/* <p className="text-justify font-satoshi tracking-wider text-perrywinkle lg:text-center">
          <span className="text-md font-jost">Masala Chai:</span> Indulge in the
          aromatic embrace of our Masala Chai. This harmonious blend marries the
          robust Assam tea base with a symphony of fragrant spices. The smooth,
          creamy texture is punctuated by the warmth of nutmeg, the sweetness of
          cardamom and cinnamon, and the earthy depth of cloves. Each sip
          unfolds a new layer of flavour, culminating in a lingering,
          spice-infused aftertaste that comforts and invigorates.
        </p> */}
      </div>
      <div className="relative sm:mt-16 sm:h-[448px] lg:w-[90%]">
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
          {ProductsList.map((p, idx) => (
            <ProductItem
              productImg={p.productImg}
              leavesImg={p.leavesImg}
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
  productImg: string;
  leavesImg: string;
}) => {
  return (
    <>
      <div className="group relative m-auto h-[400px] w-[300px]">
        <div
          className="absolute left-[0%] top-[20%] h-full w-full sm:group-hover:-translate-y-2 sm:group-hover:scale-105"
          style={{
            transition: "all ease-in 150ms",
          }}
        >
          <img src={props.leavesImg} alt="Experience Assam’s Finest Tea" />
        </div>

        <img
          className="absolute -top-6 h-full w-full translate-x-4 object-cover sm:group-hover:-translate-y-8 sm:group-hover:scale-105"
          src={props.productImg}
          style={{
            transition: "all ease-in 150ms",
          }}
          alt="Assam’s Tea Crafted with Tradition and Care"
        />
      </div>
      <p className="text-center font-jost text-2xl font-semibold capitalize text-canopy">
        {props.name}
      </p>
    </>
  );
};

export default OurProducts;
