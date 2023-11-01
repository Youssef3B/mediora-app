import React from "react";
import ButtonDash from "./ButtonDash";
import styles from "./BlogProfile.module.css";

function BlogProfile() {
  return (
    <>
      <Card />
      <Card />
      <Card />
      <Card />
    </>
  );
}
function Card() {
  return (
    <div className={styles.card}>
      <div>
        <img src="/images/blog.jpg" alt="" />
      </div>
      <div>
        <h2>Post Title</h2>
        <h4>Category : Web Site</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          quaerat, aperiam animi commodi labore dolore quidem doloremque maiores
          autem voluptatem, assumenda, magnam laborum voluptas fugiat ex
          consectetur. Perspiciatis expedita repudiandae temporibus saepe vel,
          itaque voluptatibus ad molestias aliquid doloribus dignissimos?
        </p>
        <div className={styles.flex}>
          <div className={styles.left}>
            <ButtonDash color="yellow">Edit</ButtonDash>
          </div>
          <div>
            <ButtonDash color="red">Delete</ButtonDash>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogProfile;
