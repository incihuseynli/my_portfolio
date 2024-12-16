import React from "react";
import SectionHead from "../SectionHead";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="#contact">
      <SectionHead sectTitle="Contact" sectSub="Get in touch with me" />
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 place-content-center justify-between w-full">
        <Form />
        <div className="w-full h-full flex items-center justify-center">
          <div className="bg-contactBg bg-cover bg-no-repeat bg-center hidden lg:block md:h-[28rem] md:w-[28rem] animate-spin-slow" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
