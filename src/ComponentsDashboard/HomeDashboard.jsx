import React, { useRef, useState } from "react";
import styles from "./HomeDashboard.module.css";
import { BsEmojiSmile } from "react-icons/bs";
import { GrCompliance } from "react-icons/gr";
import { ImStatsBars } from "react-icons/im";
import { BiLogoFacebook, BiPencil } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";

function HomeDashboard() {
  const stats = [
    {
      id: 1,
      icone: <BsEmojiSmile size={32} />,
      Name: "Happy Clients",
      Number: "320",
      percentage: "+12%",
      compare: "Compared to (300 last mouth)",
    },
    {
      id: 2,
      icone: <GrCompliance size={32} />,
      Name: "Projects complete",
      Number: "110",
      percentage: "+12%",
      compare: "Compared to (300 last mouth)",
    },
    {
      id: 3,
      icone: <ImStatsBars size={32} />,
      Name: "Number of visites",
      Number: "4843",
      percentage: "+12%",
      compare: "Compared to (300 last mouth)",
    },
  ];
  const users = [
    {
      name: "Youssef Ababou",
      image: "images/client1.jpg",
      projectName: "Project name",
      Paid: "Paid",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      name: "Robert Kyusaki",
      image: "images/client2.jpg",
      projectName: "ProjectName",
      Paid: "Paid",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
  ];
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
    <section>
      <div className={styles.up}>
        <div>
          {stats.map((stat) => (
            <Card key={stat.id} stat={stat} />
          ))}
        </div>
        <div className={styles.card2}>
          <h5>My Profile</h5>
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
            <h3>Youssef Ababou</h3>
            <p>@ichigo</p>
            <h4>Join on 24 July 2023</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
              cum!
            </p>
            <div className={styles.flex}>
              <div className={styles.left}>
                <BiLogoFacebook size={20} />
              </div>
              <div className={styles.left}>
                <BsInstagram size={20} />
              </div>
              <div className={styles.left}>
                <BiLogoLinkedin size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.down}>
        <div className={styles.card3}>
          <div className={styles.card_up}>
            <h5>Recent projects</h5>
            <p>See All</p>
          </div>
          {users.map((user) => (
            <User user={user} key={user.name} />
          ))}
        </div>
        <div className={styles.card4}>
          <div className={styles.card_up}>
            <h5>Recent projects</h5>
            <p>See All</p>
          </div>
          {users.map((user) => (
            <div key={user.name} className={styles.card_flex}>
              <div>
                <img src={user.image}></img>
              </div>
              <div>
                <h4>{user.name}</h4>
                <p>{user.projectName}</p>
              </div>
              <div className={styles.description}>
                <p>{user.description}</p>
              </div>
              <div>
                <div className={styles.alert}>
                  <h5>New</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ stat }) {
  return (
    <div className={styles.card1}>
      <div className={styles.flex1}>
        {stat.icone}
        <h3>{stat.Name}</h3>
      </div>
      <div className={styles.flex1}>
        <h3 className={styles.stats}>{stat.Number}</h3>
        <p>{stat.percentage}</p>
      </div>
      <div>
        <p>{stat.compare}</p>
      </div>
    </div>
  );
}
function User({ user }) {
  return (
    <div className={styles.user}>
      <div>
        <img src={user.image} alt="" />
      </div>
      <div>
        <h4>{user.name}</h4>
        <p>{user.projectName}</p>
      </div>
      <div>
        <div className={styles.paid}>
          <h3>{user.Paid}</h3>
        </div>
      </div>
    </div>
  );
}
export default HomeDashboard;
