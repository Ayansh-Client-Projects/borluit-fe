import { Header } from "@components/CS";
import MyComp from "../Carousel";

const Review = () => {
  return (
    <section className="bg-[#F0F0F0] px-6 pt-16 lg:flex lg:flex-col lg:items-center lg:p-32">
      <Header title="What our customers are saying" />
      <div className="pt-8 lg:max-w-[1200px]">
        <MyComp />
      </div>
    </section>
  );
};

export default Review;
