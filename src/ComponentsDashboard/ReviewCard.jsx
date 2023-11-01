import ButtonDash from "./ButtonDash";
import styles from "./ReviewCard.module.css";
function ReviewCard() {
  return (
    <div>
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default ReviewCard;

function Card() {
  return (
    <div className={styles.card2}>
      <div>
        <img src="/images/admin.avif" alt="" />
      </div>
      <div>
        <h2>Elon Musk</h2>
        <h4>Job : business manager</h4>
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
