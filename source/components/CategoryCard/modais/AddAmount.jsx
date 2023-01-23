import Modal from '../../UI/Modal';
import styles from '../../../components/UI/Modal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAddAmount } from '../../../store/ui-slice';
import { useState } from 'react';
import useUpdateDoc from '../../../hooks/useUpdateDoc';
import { serverTimestamp } from '@firebase/firestore';
import useAddDoc from '../../../hooks/useAddDoc';



const AddAMount = () => {
    const [av, setAv] = useState([]);
    const [ title, setTitle] = useState('');
    const [amount, setAmount ] = useState(0)

    const {isVisible, category} = useSelector((state) => state.ui.addAmount);
    const dispath = useDispatch();

    const addAmountHandler = useUpdateDoc();
    const addTransactionHandler = useAddDoc();

    const addAmount = (e) => {
        e.preventDefault();

        if (!title || !amount) return;

        addAmountHandler('categorias', category.id, {
            amount: category.amount + Number(amount),
         });

         addTransactionHandler('transactions', {
            amount: Number(amount),
            title,
            av,
            type: 'income',
            date: serverTimestamp(),
          });

        

        setTitle('');
        setAmount(0)
        dispath(toggleAddAmount(null));
    };

    return (
        <Modal isOpen={isVisible}
         onClose={() => dispath(toggleAddAmount(null))}
         title = 'Adicionar'>
            <div>
                <form onSubmit={addAmount}>
                    <div className={styles['label-input']}>
                        <label htmlFor='title' className='p'>Título</label>
                        <input type='text'
                            id='title'
                            name='title'
                            placeholder='Ex: venda do teclado '
                            onChange={e => setTitle(e.target.value)}
                        />
                    </div>
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
                        onChange={e => setAmount(e.target.value)}
                    />
                    </div>
                    <div className={styles['label-input']}>
                    <label htmlFor="av" className="p">Forma de Pagamentos</label>
                        <select 
                            id="av"
                            name="av"
                            placeholder="Forma de Pagamentos"
                            onChange={(e) => setAv(e.target.value)}
                        >
                            <option value="Selecione a categoria">Selecione a forma De Pagamento</option>
                            <option value="Banco">Dinheiro Para o Banco</option>
                            <option value="Pix">Pix</option>
                            <option value="Cartão de Crédito">Visa</option>
                            <option value="Duplicata">Duplicata/Outro</option>
                            <option value="Av">Av</option>
                        </select>
                    </div>
                    <div className={styles.buttons}>
                        <button type='submit' className='btn btn-primary'>Adicionar</button>
                    </div>
                </form>
            </div>
        </Modal >
    );
};

export default AddAMount;