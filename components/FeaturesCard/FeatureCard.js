import styles from "./FeatureCard.module.css";
const FeatureCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h1 className={styles.heading}>Heading</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
