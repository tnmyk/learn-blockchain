import styles from "./Information.module.css";

const Information = ({ title, explaination }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.explaination}>{explaination}</p>
    </div>
  );
};

export default Information;
