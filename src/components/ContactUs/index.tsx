import UserIcon from "@/assets/svg/userform.svg?react";
import BoxIcon from "@/assets/svg/box.svg?react";
import EmailIcon from "@/assets/svg/email.svg?react";
import PhoneIcon from "@/assets/svg/phone.svg?react";
import { InputHTMLAttributes, ReactElement } from "react";
const ContactUs = () => {
  return (
    <section className="bg-[#F0F0F0] px-6 py-16 lg:px-32 lg:py-32">
      <h2 className="font-display text-2xl font-semibold uppercase tracking-widest text-canopy lg:text-center lg:text-4xl">
        contact us
      </h2>
      <section className="lg:flex lg:flex-row-reverse lg:justify-between lg:pt-16">
        <MyForm />
        <ContactSection />
      </section>
    </section>
  );
};

const MyForm = () => {
  return (
    <form className="space-y-4 pt-6 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0 lg:pt-0">
      <MyInput icon={<UserIcon />} placeholder="Name" />
      <MyInput icon={<BoxIcon />} placeholder="Product Looking For" />
      <MyInput icon={<PhoneIcon />} placeholder="Phone Number" />
      <MyInput icon={<EmailIcon />} placeholder="Email" type={"email"} />
      <div className="col-span-2 flex min-h-[140px] gap-x-4 rounded-[4px] bg-white p-4">
        <textarea
          placeholder="Your Message"
          className="text-perrywinkle placeholder-perrywinkle flex-1 font-display font-medium tracking-wider"
        />
      </div>
      <button
        type="submit"
        className="bg-honey h-14 w-36 rounded-2xl font-display font-medium text-white"
      >
        Submit
      </button>
    </form>
  );
};

export const MyInput = ({
  type = "text",
  ...props
}: {
  icon?: ReactElement;
  placeholder: string;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
}) => {
  return (
    <div className="flex h-14 gap-x-4 rounded-[4px] bg-white p-4">
      {props.icon && <span>{props.icon}</span>}
      <input
        type={type}
        className="text-perrywinkle placeholder-perrywinkle w-auto flex-1 font-display font-medium tracking-wider"
        placeholder={props.placeholder}
      />
    </div>
  );
};

const ContactSection = () => {
  return (
    <section className="mt-6 space-y-6 lg:mt-0 lg:space-y-12">
      <ContactUnit
        title="Customer Care"
        line1="Phone No : +91-6000644486 (8 am to 9 pm)"
        line2="Email : borluittea@gmail.com"
      />
      <ContactUnit
        title="Boluit Tea House"
        line1="1st Floor, AAC Complex, S. J Road, Athgaon,"
        line2="Guwahati- 781001, Assam, India"
      />
      <ContactUnit
        title="Sales related queries / Complaints"
        line1="1 No. Ambikapur, P.O. Brahmajan, P.S. Pengeri,"
        line2="District- Tinsukia, Assam - 786174, India"
      />
    </section>
  );
};

const ContactUnit = (props: {
  title: string;
  line1: string;
  line2: string;
}) => {
  return (
    <div>
      <h3 className="text-wine pb-4 font-display text-2xl font-medium tracking-widest lg:font-semibold">
        {props.title}
      </h3>
      <p className="text-perrywinkle font-satoshi tracking-wider">
        {props.line1}
      </p>
      <p className="text-perrywinkle font-satoshi tracking-wider">
        {props.line2}
      </p>
    </div>
  );
};

export default ContactUs;