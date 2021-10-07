import styles from "./FeatureCard.module.css";
const FeatureCard = ({ title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h1 className={styles.heading}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
