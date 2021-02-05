import styles from '../dealer-area.module.css';

export default function DealerArea({ children }) {
  return (
    <div className={styles['dealer-pool']}>
      { children }
    </div>
  )
}