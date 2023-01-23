import styles from './Transactions.module.scss';
import TransactionsList from './TransactionsList';

const Transactions = () => {
    return (
        <section className={styles.section}>
            <TransactionsList type={'income'} title='Entradas' />
            <TransactionsList type={'expense'} title='Saídas' />
            
        </section>
    );
};

export default Transactions;