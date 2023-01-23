import Modal from '../../UI/Modal';
import styles from '../../../components/UI/Modal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAddSalary } from '../../../store/ui-slice';
import { useState } from 'react';
import useUpdateDoc from '../../../hooks/useUpdateDoc';

const AddSalary = () => {
    const [amount, setAmount] = useState(0);

    const {isVisible} = useSelector((state) => state.ui.addSalary);
    const {categories } = useSelector((state) => state.app)
    const dispath = useDispatch();

    const addSalaryHandler = useUpdateDoc();

    const addSalary = (e) => {
        e.preventDefault();

        if (!amount) return;

        categories.forEach((category) => {
            const totalAmount = (Number(amount) * category.percentage) / 100;

            addSalaryHandler('categorias', category.id, {
                amount: category.amount + totalAmount,
            });
        });

        dispath(toggleAddSalary(null));
        setAmount(0);
    };

    return (
        <Modal isOpen={isVisible}
         onClose={() => dispath(toggleAddSalary(null))}
         title = 'Adicionar salario'>
            <div>
                <form onSubmit={addSalary}>
                <div className={styles['label-input']}>
                        <label htmlFor='amount' className='p'>
                            Valor
                        </label>
                        <input 
                        type='text'
                        id='amount'
                        name='amount'
                        placeholder='R$'
                        className='max-width' 
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    </div>
                    <div className={styles.buttons}>
                        <button type='submit' className='btn btn-primary'>
                            Adicionar</button>
                    </div>
                </form>
            </div>
        </Modal >
    );
};

export default AddSalary;