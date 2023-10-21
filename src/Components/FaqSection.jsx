import React, { useState } from "react";
import styles from "./FaqSection.module.css";
import { AiOutlineArrowDown } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

export default function FaqSection() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const questions = [
    {
      question: "What services does your digital agency provide?",
      answer: ` We offer a range of services, including website design
      and development, video production, graphic design, and
      UX/UI design. Whether you need a stunning website,
      engaging videos, captivating graphics, or seamless user
      experiences, we've got you covered.`,
    },
    {
      question: "How experienced is your team?",
      answer: ` Our team boasts extensive experience in the digital
      realm. We've successfully completed numerous projects
      across various industries, gaining expertise in creating
      impactful digital solutions.`,
    },
    {
      question: `What makes your website design unique?`,
      answer: ` Our website design focuses on blending aesthetics with
      functionality. We create visually appealing and
      user-friendly websites that not only look great but also
      provide seamless navigation and optimal performance.`,
    },
    {
      question: "Can you handle both small and large projects?",
      answer: `Absolutely, we're equipped to handle projects of all
      sizes. Whether you're a startup, small business, or
      enterprise, we tailor our services to match your
      specific needs and objectives.`,
    },
  ];

  const toggleQuestion = (index) => {
    if (openQuestion === index) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(index);
    }
  };

  return (
    <section className={styles.FaqSection}>
      <div data-aos="fade-up" data-aos-duration="2000" className={styles.grid}>
        <div>
          <img src="/images/bgr-play-video2.png" alt="Video" />
        </div>
        <div>
          <h3>
            Frequently Asked <span>Questions</span>
          </h3>
          <div className={styles.faqContainer}>
            {questions.map((q, index) => (
              <div
                key={index}
                className={
                  openQuestion === index
                    ? `${styles.faqItem} ${styles.open}`
                    : styles.faqItem
                }
                onClick={() => toggleQuestion(index)}
              >
                <div className={styles.question}>
                  {q.question}
                  {openQuestion === index ? (
                    <IoMdClose />
                  ) : (
                    <AiOutlineArrowDown />
                  )}
                </div>
                {openQuestion === index && (
                  <div className={styles.answer}>{q.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
