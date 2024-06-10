import TeaImg from "@/assets/img/tea.png";

const Carousel = (props: { cards: JSX.Element[] }) => {
  return <div>{props.cards}</div>;
};

export const items = [
  {
    img: TeaImg,
    title: "Black Tea",
  },
  {
    img: TeaImg,
    title: "Green Tea",
  },
  {
    img: TeaImg,
    title: "Red Tea",
  },
];

export const Card = (props: { img: string; title: string }) => {
  return (
    <div className="">
      <img src={props.img} alt={props.title} className="size-[327px]" />
      <span className="text-xl font-[500] capitalize">{props.title}</span>
    </div>
  );
};

export default Carousel;
