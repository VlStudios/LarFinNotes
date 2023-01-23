import styles from './CategoryCard.module.scss';
import { TbPencil} from 'react-icons/tb';
import useGetCurrency from '../../hooks/useGetCurrency';
import CategoryMenu from './CategoryMenu';
import useMenu from '../../hooks/useMenu';
import useGetDate from '../../hooks/useGetDate';


const CategoryCard = ({ data }) => {
    const { av, title, amount, categoria, percentage , date } = data;
    const [isVisible, toggleMenuHandler ] = useMenu();

    const formatedAmount = useGetCurrency(amount);
    const formatedDate = useGetDate(date);
  

    return (
        <div className={styles.card}>
            <div className={styles.edit}>
                <TbPencil className='ico hover' onClick={toggleMenuHandler} />
                {isVisible && <CategoryMenu toggleMenuHandler={toggleMenuHandler} data={data}/>} 
            </div>
            <h2>{title}</h2>
            <h2>{formatedDate}</h2>
            <h2>{av}</h2>
            <h2>{categoria}</h2>
            <h3>{formatedAmount}</h3>
           {/* <h4>Alocado: {percentage}%</h4> */}
        </div>
    );
};

export default CategoryCard;