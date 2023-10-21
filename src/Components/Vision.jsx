import styles from "./Vision.module.css";
const vision = [
  {
    image: "/images/img-banner4.png",
    title: "Web Design and Development",
    description: `  Unlock your brand's online potential with our Web Design and
  Development services. Our expert team combines innovative design
  with cutting-edge technology to craft visually stunning and
  seamlessly functional websites. From eye-catching layouts to
  user-friendly interfaces, we tailor every element to captivate your
  audience. Whether you need a responsive website, e-commerce
  platform, or a complete redesign, our services ensure a digital
  presence that resonates with your brand's essence and engages users
  effortlessly. Step into the spotlight of the digital landscape with
  a website that not only looks remarkable but also performs
  exceptionally.`,
  },
  {
    image: "/images/img-banner5.png",
    title: "Graphic Design",
    description: `Elevate your brand's visual identity with our Graphic Design services. Our skilled designers blend creativity with strategy to craft captivating visuals that communicate your brand's story and values. From logos that leave a lasting impression to engaging social media graphics, our designs resonate with your audience across every touchpoint. Whether you're launching a campaign, revitalizing your brand, or need custom illustrations, we bring your ideas to life with a perfect blend of aesthetics and purpose. Let us create a visual language that sets your brand apart and creates memorable connections.`,
  },
  {
    image: "/images/img-banner6.png",
    title: "Video Production",
    description: `Unleash the power of storytelling with our Video Production services. Our talented team transforms concepts into captivating visual narratives that engage, inform, and inspire. From concept development to filming, editing, and post-production, we handle every aspect to deliver videos that resonate with your audience. Whether it's promotional videos, explainer animations, or brand stories, we combine creativity and expertise to craft videos that convey your message effectively. Elevate your brand's presence with videos that evoke emotion, spark conversations, and leave a lasting impact in the digital realm.`,
  },
  {
    image: "/images/img-banner7.png",
    title: "UI/UX Designs",
    description: `Crafting seamless digital experiences is our expertise through UI/UX Design services. We fuse artistry with functionality to create interfaces that not only look stunning but also guide users intuitively. Our team meticulously designs every interaction, ensuring that your audience navigates effortlessly through your digital platform. From user-centric layouts to responsive designs, we sculpt every detail to optimize engagement, conversions, and overall user satisfaction. Elevate your brand's digital journey with UI/UX designs that inspire, engage, and create lasting connections.`,
  },
];
function Vision() {
  return (
    <section className={styles.vision}>
      <h3 data-aos="fade-up" data-aos-duration="1000">
        Your Vision to Digital Solutions
      </h3>
      {vision.map((v, index) => (
        <div
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          className={`${styles.card} ${
            index % 2 === 0 ? styles.cardLeft : styles.cardRight
          }`}
        >
          <div>
            <img src={v.image} alt="poster" />
          </div>
          <div>
            <h4>{v.title}</h4>
            <p>{v.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Vision;
