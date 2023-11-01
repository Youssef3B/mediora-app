import React, { useRef, useState } from "react";
import styles from "./AdminProfile.module.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoFacebook } from "react-icons/bi";
import { BiPencil } from "react-icons/bi";

function AdminProfile() {
  return (
    <section className={styles.grid}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
}

function Card() {
  const [image, setImage] = useState(null);
  const inputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleEditClick = () => {
    // Trigger a click on the hidden input element
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles["avatar-upload"]}>
        <div className={styles["avatar-edit"]}>
          <input
            ref={inputRef} // Add a ref to the input element
            type="file"
            id="imageUpload"
            accept=".png, .jpg, .jpeg"
            onChange={handleImageChange}
          />
          <label className={styles.center} onClick={handleEditClick}>
            <BiPencil size={22} />
          </label>
        </div>
        <div className={styles["avatar-preview"]}>
          {image ? ( // Conditionally render the image if it exists
            <div
              id="imagePreview"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ) : (
            <div
              id="imagePreview"
              style={{ backgroundImage: `url(/images/admin.avif)` }}
            ></div> // Display "No Image" when there is no image
          )}
        </div>
      </div>
      <div className={styles.center}>
        <h4>Youssef Ababou</h4>
        <p>Member</p>
        <div className={styles.flex}>
          <a href="">
            <AiOutlineInstagram color="#ef3a5d" size={25} />
          </a>
          <a href="">
            <BiLogoLinkedin color="#ef3a5d" size={25} />
          </a>
          <a href="">
            <BiLogoFacebook color="#ef3a5d" size={25} />
          </a>
        </div>
        <a className={styles.view}>View Profile</a>
      </div>
    </div>
  );
}

export default AdminProfile;
