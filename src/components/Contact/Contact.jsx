import React, { useRef } from "react";
import './contact.css';
import emailjs from "@emailjs/browser";
import { AiOutlineMail } from "react-icons/ai";
import { BsArrowRightShort, BsWhatsapp } from "react-icons/bs";
import { TbBrandTelegram } from "react-icons/tb";
import { IoPaperPlaneOutline } from "react-icons/io5";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t7d7iln",
        "template_97zaply",
        form.current,
        "3f0JbSF6LP8Eg3oRs"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="contact section" id="contact">
      <h3 className="section__title">Contact Me</h3>
      <span className="section__subtitle">Get in touch</span>
      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>
          <div className="contact__info">
            <div className="contact__card">
              <AiOutlineMail className="contact__card-icon" />
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">user@email.com</span>
              <a
                href="mailto:recipient_email@theofortunefunction@gmail.com"
                className="contact__button"
              >
                Write me <BsArrowRightShort className="contact__button-icon" />
              </a>
            </div>
            <div className="contact__card">
              <BsWhatsapp className="contact__card-icon" />
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+234-706-839-2370</span>
              <a
                href="https://wa.me/+2347068392370"
                className="contact__button"
              >
                Write me <BsArrowRightShort className="contact__button-icon" />
              </a>
            </div>
            <div className="contact__card">
              <TbBrandTelegram className="contact__card-icon" />
              <h3 className="contact__card-title">Telegram</h3>
              <span className="contact__card-data">czarultimate</span>
              <a href="https://t.me/czarultimate" className="contact__button">
                Write me <BsArrowRightShort className="contact__button-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>
          <form className="contact__form" ref={form} onSubmit={sendEmail}>
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Input your name"
                className="container__form-input"
              />
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Input your email"
                className="container__form-input"
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Project</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                placeholder="Write your project"
                className="container__form-input"
              ></textarea>
            </div>
            <button href="#contact" className="button button__flex">
              Send Message
              <IoPaperPlaneOutline
                style={{ color: "var(--container-color)" }}
                className="button__icon"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
