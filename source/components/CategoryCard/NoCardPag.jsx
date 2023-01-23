import styles from './NoCard.module.scss';
import { TbPlus } from 'react-icons/tb';
import { toggleAddPagments } from '../../store/ui-slice';
import { useDispatch } from 'react-redux';

const NoCardPag = () => {
    const dispath = useDispatch();

    return (
        <div className={styles['no-card']} onClick={() => dispath(toggleAddPagments(null))}>
            <TbPlus className='icon' />
        </div>
    );
};

export default NoCardPag;