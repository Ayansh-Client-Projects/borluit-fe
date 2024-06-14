import { Header } from "@components/CS";
import TestmonialCarousel from "../Carousel";
import clsx from "clsx";
import styles from "./Review.module.css";

const Review = () => {
  return (
    <section
      id="testamonial"
      className={clsx(
        "bg-[#F0F0F0] px-6 pt-16 lg:flex lg:flex-col lg:items-center lg:p-32",
        styles["background-mask"],
      )}
    >
      <Header title="What our customers are saying" />
      <div className="relative mt-8 lg:w-[1200px]">
        <TestmonialCarousel />
      </div>
    </section>
  );
};

export default Review;
