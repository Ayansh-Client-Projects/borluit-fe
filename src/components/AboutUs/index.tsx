const AboutUs = () => {
  return (
    <section className="flex flex-col bg-white">
      <section className="bg-aboutUs flex-1 basis-[456px] bg-center bg-no-repeat"></section>
      <section className="flex-1 space-y-4 px-6 py-8">
        <h2 className="font-display text-2xl font-semibold uppercase tracking-widest text-canopy">
          About Us
        </h2>
        <p className="text-perrywinkle tracking-wider">
          Founded in 2015 amidst the lush landscapes of Pengeree, Tinsukia,
          Assam, Borluit Tea embodies a legacy of excellence in tea
          craftsmanship. Nestled in the heart of the renowned Assam region, we
          meticulously cultivate and curate the finest tea leaves, harnessing
          centuries-old traditions and modern innovation. With a commitment to
          quality and sustainability, Borluit Tea brings you the essence of
          Assam in every cup, inviting you to savour the rich flavours and
          timeless heritage of our beloved region.
        </p>
      </section>
    </section>
  );
};

export default AboutUs;
