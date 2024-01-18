import styles from './index.module.css';

const Home = () => {
  const number = 38; //ここの値で表示する牌をずらせる
  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {[...Array(14)].map((_, i) => (
          <div
            className={styles.pai}
            key={i}
            style={{ backgroundPositionX: `calc(${100 * (number / 38)}%)` }}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
