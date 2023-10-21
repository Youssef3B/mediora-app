import styles from "./ClientsSection.module.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const clients = [
  {
    name: "Caleb Williams",
    description: ` Mediora truly exceeded my expectations with the logo they
designed for me. Their team's creativity and attention to detail
brought my vision to life in ways I hadn't even imagined. From
the initial concept to the final product, their communication
and professionalism were remarkable. The logo perfectly captures
the essence of my brand and has received numerous compliments.
Mediora's work has undoubtedly elevated my business identity. I
wholeheartedly recommend their services to anyone seeking
top-notch design expertise.`,
    image: "/images/img-admin1-60x60.png",
  },
  {
    name: "Ethan Reynolds",
    description: `  Collaborating with Mediora on our ad was an outstanding
    experience. Their team's expertise, creativity, and devotion to
    capturing our brand's essence were commendable. The resulting
    video exceeded our expectations, effectively conveying our
    message in a captivating way. From scriptwriting to
    post-production, each step was handled with precision. The final
    result met and surpassed our goals, and positive feedback from
    our audience showcases Mediora's exceptional work. I highly
    recommend their video services for impactful advertising.`,
    image: "/images/client1.jpg",
  },
  {
    name: "Brandon Foster",
    description: `  Mediora revamped our digital presence with remarkable UX/UI
    design. Their expertise and focus on user experience were
    evident throughout the process. The designs they made are
    visually stunning yet intuitive, simplifying navigation.
    Mediora's skill in grasping our brand and creating a seamless
    online experience is impressive. Their commitment to results
    aligning with our goals is commendable. We're thrilled with the
    final product and thankful for the partnership. For exceptional
    UX/UI design, trust Mediora.`,
    image: "/images/client2.jpg",
  },
  {
    name: "Ryan Mitchell",
    description: `  Mediora excels in crafting our website. From the start, their
    team understood our vision and business goals. The site they
    made captures our brand essence and offers a seamless user
    experience. Attention to detail, creative flair, and technical
    expertise shine. Mediora maintained open communication
    throughout, valuing our feedback. The result exceeds
    expectations, praised by clients and visitors. Their dedication
    to an authentic digital representation is commendable. We
    wholeheartedly recommend their top-tier website services`,
    image: "/images/client3.jpg",
  },
];
export default function ClientsSection() {
  return (
    <section className={styles.ClientsSection}>
      <h2 data-aos="fade-up" data-aos-duration="2000">
        What’s Clients Say
      </h2>
      <div data-aos="fade-up" data-aos-duration="2000">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <style>
            {`
      .swiper-pagination-bullet {
        background-color: #ef3a5d; /* Change bullet color */
      }

      .swiper-button-next, .swiper-button-prev {
        color: #ef3a5d; /* Change navigation arrow color */
      }
    `}
          </style>
          {clients.map((client) => (
            <SwiperSlide>
              <Client client={client} key={client.name} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function Client({ client }) {
  return (
    <div className={styles.card}>
      <img src={client.image} alt="card"></img>
      <h4>{client.name}</h4>
      <p>{client.description}</p>
    </div>
  );
}
