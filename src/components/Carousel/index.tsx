import Carousel from "react-multi-carousel";
import styles from "./Carousel.module.css";
import clsx from "clsx";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Testimonials = [
  {
    name: "Udita Kalita",
    content:
      "I've tried numerous green teas, but Borluit Green Tea stands out. The flavour is refreshingly pure and keeps me energized throughout the day.",
    product: "Borluit Green Tea",
  },
  {
    name: "Zainab Zeya",
    content:
      "As a health-conscious individual, Borluit Green Tea is my go-to. It offers a subtle, delightful taste without any artificial additives. Highly recommended!",
    product: "Borluit Green Tea",
  },
  {
    name: "Kirtana Das",
    content:
      "Borluit Orthodox Tea has a rich aroma that fills my kitchen every morning. The taste is impeccable, making it my favourite daily ritual.",
    product: "Borluit Orthodox Tea",
  },
  {
    name: "Nashique Ahmed",
    content:
      "For those who appreciate high-quality tea, Borluit Orthodox Tea is a must-try. The deep, robust flavour is unlike any other orthodox tea I've tasted.",
    product: "Borluit Orthodox Tea",
  },
  {
    name: "Anirudh Agarwala",
    content:
      "Borluit Assam Tea is my morning booster. Its bold, invigorating taste wakes me up instantly. It's the perfect start to my day.",
    product: "Borluit Assam Tea",
  },
  {
    name: "Chandralekha Bania",
    content:
      "The quality of Borluit Assam Tea is exceptional. It has a rich, full-bodied flavour that I can't get enough of. A true gem from Assam!",
    product: "Borluit Assam Tea",
  },
  {
    name: "Dhiraj Sharma",
    content:
      "I always serve Borluit Tea when I have guests over. Whether it's Green, Orthodox, or Assam, everyone loves it. It adds a touch of elegance to any gathering.",
    product: "Borluit Tea",
  },
  {
    name: "Mayank Ajitsariya",
    content:
      "My evenings are incomplete without a cup of Borluit Green Tea. It helps me unwind and relax after a long day. Truly soothing.",
    product: "Borluit Green Tea",
  },
  {
    name: "Heemanshu Agarwalla",
    content:
      "I trust Borluit Tea for its consistent quality and superior taste. Each variety offers a unique experience, making it a staple in my pantry.",
    product: "Borluit Tea",
  },
  {
    name: "Rojan Varghese",
    content:
      "Borluit Tea always arrives fresh and fragrant. The packaging preserves the quality, ensuring I get the best cup every time. Highly satisfied!",
    product: "Borluit Tea",
  },
];

export const ButtonGroup = ({
  next,
  previous,
}: {
  next?: () => void;
  previous?: () => void;
}) => {
  return (
    <div className="hidden lg:absolute lg:top-[calc(50%-2rem)] lg:flex lg:w-[105%] lg:-translate-x-[2.5%] lg:justify-between">
      <button
        className={clsx(styles.button)}
        onClick={() => previous && previous()}
      ></button>
      <button
        className={clsx(styles.button, styles._right)}
        onClick={() => next && next()}
      ></button>
    </div>
  );
};

const TestmonialCarousel = () => {
  return (
    <Carousel
      responsive={responsive}
      swipeable={true}
      draggable={true}
      showDots={true}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass={styles["custom-dot-list-style"]}
      renderButtonGroupOutside={true}
      infinite={true}
      arrows={false}
      customButtonGroup={<ButtonGroup />}
    >
      {Testimonials.map((testimonial, idx) => (
        <Card
          key={idx}
          name={testimonial.name}
          content={testimonial.content}
          product={testimonial.product}
        />
      ))}
    </Carousel>
  );
};

const Card = ({
  name,
  content,
  product,
}: {
  name: string;
  content: string;
  product: string;
}) => {
  return (
    <div className="mx-4 flex h-72 flex-col items-center justify-between gap-y-4 rounded-2xl bg-white px-4 py-6 sm:h-64 lg:mx-8">
      <p className="pb-4 sm:pb-7 sm:pt-2">
        <span
          className={`relative before:absolute before:left-1/2 before:top-0 before:block before:-translate-x-1/2 before:-translate-y-6 before:rotate-180 before:scale-[6] before:font-palanquin before:font-semibold before:tracking-[0.15em] before:text-perrywinkle before:opacity-20 before:content-["''"]`}
        ></span>
      </p>
      <p className="text-center font-satoshi text-perrywinkle">{content}</p>
      <div>
        <p className="font-jost text-center text-2xl font-semibold tracking-widest text-wine">
          {name}
        </p>
        <p className="font-jost text-center text-2xl font-medium text-[#303030]">
          {product}
        </p>
      </div>
    </div>
  );
};

export default TestmonialCarousel;
