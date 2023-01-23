import styles from './TransactionsCard.module.scss';
import {TbCurrencyDollar} from 'react-icons/tb';
import useGetCurrency from '../../hooks/useGetCurrency';
import useGetDate from '../../hooks/useGetDate';

const TransactionsCard = ({ transaction}) => {
    const {title, amount,date, type} = transaction;

    const formatedAmount = useGetCurrency(amount);
    const formatedDate = useGetDate(date);

    return (
        <li className={styles.item}>
            <div className={styles.content}>
                <div className={`${styles.icon} ${styles[type]}`}>
                    <TbCurrencyDollar />
                </div>
                <div>
                    <h2>{title}</h2>
                  <h4>{formatedDate}</h4>
                </div>
            </div>
            <div className={styles.price}>
                <span className={styles[type]}>{formatedAmount}</span>
            </div>
        </li>
    );
};

export default TransactionsCard;