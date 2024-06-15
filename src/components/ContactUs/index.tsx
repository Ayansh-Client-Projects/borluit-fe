import UserIcon from "@/assets/svg/userform.svg?react";
import BoxIcon from "@/assets/svg/box.svg?react";
import EmailIcon from "@/assets/svg/email.svg?react";
import PhoneIcon from "@/assets/svg/phone.svg?react";
import { InputHTMLAttributes, ReactElement } from "react";
import styles from "./ContactUs.module.css";
import clsx from "clsx";

const ContactUs = () => {
  return (
    <section
      id="contactus"
      className={clsx(
        "bg-[#F0F0F0] px-6 py-16 lg:px-32 lg:py-32",
        styles["background-mask"],
      )}
    >
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
    <form
      name="contact-us"
      data-netlify={true}
      className="space-y-4 pt-6 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0 lg:pt-0"
    >
      <MyInput icon={<UserIcon />} placeholder="Name" />
      <MyInput
        icon={<BoxIcon />}
        placeholder="Product Looking For"
        name="product"
      />
      <MyInput icon={<PhoneIcon />} placeholder="Phone Number" />
      <MyInput icon={<EmailIcon />} placeholder="Email" type={"email"} />
      <div className="col-span-2 flex min-h-[140px] gap-x-4 rounded-[4px] bg-white p-4">
        <textarea
          placeholder="Your Message"
          className="flex-1 font-display font-medium tracking-wider text-perrywinkle placeholder-perrywinkle"
        />
      </div>
      <button
        type="submit"
        className="h-14 w-36 rounded-2xl bg-honey font-display font-medium text-white hover:opacity-60"
        style={{
          transition: "opacity ease-in 300ms",
        }}
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
  name?: string;
}) => {
  return (
    <div className="flex h-14 gap-x-4 rounded-[4px] bg-white p-4">
      {props.icon && <span>{props.icon}</span>}
      <input
        name={
          props.name?.toLocaleLowerCase() ?? props.placeholder.toLowerCase()
        }
        type={type}
        className="w-auto flex-1 font-display font-medium tracking-wider text-perrywinkle placeholder-perrywinkle"
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
        title="Borluit Tea House"
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
      <h3 className="pb-4 font-display text-2xl font-medium tracking-widest text-wine lg:font-semibold">
        {props.title}
      </h3>
      <p className="font-satoshi tracking-wider text-perrywinkle">
        {props.line1}
      </p>
      <p className="font-satoshi tracking-wider text-perrywinkle">
        {props.line2}
      </p>
    </div>
  );
};

export default ContactUs;
