const AboutUs = () => {
  return (
    <section className="flex flex-col bg-[#F0F0F0] lg:relative lg:h-screen lg:flex-row lg:items-center lg:p-[120px]">
      <section className="bg-aboutUs flex-1 basis-[456px] bg-center bg-no-repeat lg:h-[576px] lg:w-[975px]"></section>
      <section className="flex-1 space-y-4 bg-white px-6 py-8 lg:absolute lg:right-[10%] lg:top-1/2 lg:max-h-[456px] lg:max-w-[490px] lg:-translate-y-1/2 lg:p-14">
        <h2 className="font-display text-2xl font-semibold uppercase tracking-widest text-canopy lg:text-4xl">
          About Us
        </h2>
        <p className="text-perrywinkle font-satoshi tracking-wider">
          Founded in 2015, Borluit Tea is dedicated to bringing the rich
          heritage and exquisite flavors of Assam to tea lovers around the
          world. Our journey began with a passion for sharing the finest teas,
          handpicked from the lush tea gardens of Assam, known for producing
          some of the world&apos;s most exceptional teas. At Borluit Tea, we
          believe in preserving tradition while embracing innovation. Our
          carefully curated collection includes robust Assam Black Tea,
          refreshing Assam Green Tea, aromatic Masala Chai, delicate Assam White
          Tea, and soothing Herbal Infusions. Each blend is crafted to provide a
          unique and delightful tea experience, embodying the essence of
          Assam&apos;s tea culture. We are committed to quality and
          sustainability, ensuring that every cup of Borluit Tea not only
          delights your senses but also supports the livelihoods of local tea
          growers. Join us on a journey of flavor, wellness, and tradition with
          Borluit Tea.
        </p>
      </section>
    </section>
  );
};

export default AboutUs;
