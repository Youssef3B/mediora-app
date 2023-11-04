import { useRef, useState } from "react";
import styles from "./ProfileForm.module.css";
import { BiPencil } from "react-icons/bi";
import Button from "../Components/Button";
import ButtonDash from "./ButtonDash";
function ProfileForm() {
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
    <form className={styles.form}>
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
      <div className={styles.label}>
        <label htmlFor="FirstName">First Name</label>
        <input type="text" value={"Youssef"} />
      </div>
      <div className={styles.label}>
        <label htmlFor="LastName">Last Name</label>
        <input type="text" value={"Ababou"} />
      </div>
      <div className={styles.label}>
        <label htmlFor="Email">Email</label>
        <input type="email" value={"3b.youssef@gmail.com"} />
      </div>
      <div className={styles.label}>
        <label htmlFor="CurrentPassword">Current Password</label>
        <input type="password" value={"123456"} />
      </div>
      <div className={styles.label}>
        <label htmlFor="NewPassword">Your New Password</label>
        <input type="password" />
      </div>
      <div className={styles.label}>
        <label htmlFor="YourNewPassword">confirm Your New Password</label>
        <input type="password" />
      </div>
      <div>
        <ButtonDash>Confirm</ButtonDash>
      </div>
    </form>
  );
}

export default ProfileForm;
