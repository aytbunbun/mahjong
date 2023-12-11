import styles from './index.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {[...Array(14)].map((_, i) => (
          <div className={styles.pai} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Home;
