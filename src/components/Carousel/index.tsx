import Carousel from "react-multi-carousel";
import AvatarImg from "@/assets/img/imageavatar.png";
import styles from "./Carousel.module.css";
import clsx from "clsx";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
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

const list = [1, 2, 3, 4, 5, 6, 7, 8];

const ButtonGroup = ({
  next,
  previous,
  ...rest
}: {
  next?: () => void;
  previous?: () => void;
}) => {
  const { carouselState } = rest as {
    carouselState: {
      itemWidth: number;
      slidesToShow: number;
      currentSlide: number;
      totalItems: number;
      deviceType: string;
      domLoaded: boolean;
      transform: number;
      containerWidth: number;
    };
  };

  return (
    <div className="hidden lg:absolute lg:top-[calc(50%-2rem)] lg:flex lg:w-[105%] lg:-translate-x-[2.5%] lg:justify-between">
      <button
        className={clsx(
          styles.button,
          carouselState.currentSlide === 0 && "pointer-events-none opacity-0",
        )}
        onClick={() => previous && previous()}
      ></button>
      <button
        className={clsx(
          styles.button,
          styles._right,
          carouselState.slidesToShow + carouselState.currentSlide ===
            carouselState.totalItems && "pointer-events-none opacity-0",
        )}
        onClick={() => next && next()}
      ></button>
    </div>
  );
};

const MyComp = () => {
  return (
    <Carousel
      responsive={responsive}
      swipeable={true}
      draggable={true}
      showDots={true}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass={styles["custom-dot-list-style"]}
      renderButtonGroupOutside={true}
      arrows={false}
      customButtonGroup={<ButtonGroup />}
    >
      {list.map((_, idx) => (
        <Card key={idx} />
      ))}
    </Carousel>
  );
};

const Card = () => {
  return (
    <div className="mx-4 flex min-h-80 flex-col items-center gap-y-4 rounded-2xl bg-white px-4 py-6 lg:mx-8 lg:max-w-[565px]">
      <img src={AvatarImg} className="size-20 rounded-full" />
      <p className="text-center font-satoshi text-perrywinkle">
        &quot;Excellent teas. We have been having it for over a year now and
        absolutely love the taste. Online buying of exclusive teas is very
        smooth & easy. Thank you.&quot;
      </p>
      <div>
        <p className="text-center font-display text-2xl font-semibold tracking-widest text-wine">
          Virat
        </p>
        <p className="font-display text-2xl font-medium text-[#303030]">
          Green Tea
        </p>
      </div>
    </div>
  );
};

export default MyComp;
