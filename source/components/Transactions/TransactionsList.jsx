import { useSelector } from 'react-redux';
import TransactionsCard from './TransactionsCard';
import styles from './TransactionsList.module.scss';

const TransactionsList = ({ title, type}) => {
    const list = useSelector((state) => state.app.transactions)
    .filter((transaction) => transaction.type.toLowerCase() === type)
    .sort((a, b) => b.date?.toDate() - a.date?.toDate())
    .slice(0, 8)
    .map((el) => <TransactionsCard key={el.id} transaction={el} />);


    return (
        <div className={styles.transactions}>
            <h2>{title}</h2>
            <div>
                <ul className={styles.list}>{list}</ul>
            </div>
        </div>
    );
};

export default TransactionsList;