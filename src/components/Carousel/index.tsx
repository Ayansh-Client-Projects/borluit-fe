import Carousel from "react-multi-carousel";
import AvatarImg from "@/assets/img/imageavatar.png";
import styles from "./Carousel.module.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 1024, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const list = [1, 2, 3, 4, 5, 6, 7, 8];

const MyComp = () => {
  return (
    <Carousel
      responsive={responsive}
      swipeable={true}
      draggable={true}
      showDots={true}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      partialVisible={false}
      dotListClass={styles["custom-dot-list-style"]}
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
      <p className="font-satoshi text-perrywinkle text-center">
        &quot;Excellent teas. We have been having it for over a year now and
        absolutely love the taste. Online buying of exclusive teas is very
        smooth & easy. Thank you.&quot;
      </p>
      <div>
        <p className="text-wine text-center font-display text-2xl font-semibold tracking-widest">
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
