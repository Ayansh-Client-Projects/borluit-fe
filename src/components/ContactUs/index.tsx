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
      <h2 className="font-jost text-2xl font-semibold uppercase tracking-widest text-canopy lg:text-center lg:text-4xl">
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
      name="contact-us-form"
      method="POST"
      data-netlify="true"
      className="space-y-4 pt-6 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0 lg:pt-0"
    >
      <input type="hidden" name="form-name" value="contact-us-form" />
      <MyInput
        icon={<UserIcon />}
        placeholder="Name"
        name="name"
        required={true}
      />
      <MyInput
        icon={<BoxIcon />}
        placeholder="Product Looking For"
        name="product"
        required={true}
      />
      <MyInput
        icon={<PhoneIcon />}
        placeholder="Phone Number"
        name="phone-number"
        required={true}
      />
      <MyInput
        icon={<EmailIcon />}
        placeholder="Email"
        type={"email"}
        name="email"
        required={true}
      />
      <div className="col-span-2 flex min-h-[140px] gap-x-4 rounded-[4px] bg-white p-4">
        <textarea
          name="message"
          required={true}
          placeholder="Your Message"
          className="flex-1 font-jost font-medium tracking-wider text-perrywinkle placeholder-perrywinkle"
        />
      </div>
      <button
        type="submit"
        className="h-14 w-36 rounded-2xl bg-honey font-jost font-medium text-white hover:opacity-60"
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
  required = false,
  ...props
}: {
  icon?: ReactElement;
  placeholder: string;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
  name?: string;
  required?: boolean;
}) => {
  return (
    <div className="flex h-14 gap-x-4 rounded-[4px] bg-white p-4">
      {props.icon && <span>{props.icon}</span>}
      <input
        name={
          props.name?.toLocaleLowerCase() ?? props.placeholder.toLowerCase()
        }
        type={type}
        className="w-auto flex-1 font-jost font-medium tracking-wider text-perrywinkle placeholder-perrywinkle"
        placeholder={props.placeholder}
        required={required}
      />
    </div>
  );
};

const ContactSection = () => {
  return (
    <section className="mt-6 space-y-6 lg:mt-0 lg:space-y-12">
      <ContactUnit
        title="Customer Care"
        line1="Phone No : +91-6000644486 (8am to 9pm)"
        line2="Email : borluittea@gmail.com"
      />
      <ContactUnit
        title="Borluit Tea House"
        line1="1st Floor, AAC Commercial Complex, S.J Road,"
        line2="Athgaon, Guwahati- 781001, Assam, India"
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
      <h3 className="pb-4 font-jost text-2xl font-medium tracking-wide text-wine lg:font-semibold">
        {props.title}
      </h3>
      <p className="font-satoshi text-perrywinkle">{props.line1}</p>
      <p className="font-satoshi text-perrywinkle">{props.line2}</p>
    </div>
  );
};

export default ContactUs;
