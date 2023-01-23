import Modal from '../../UI/Modal';
import styles from '../../../components/UI/Modal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAddCategory } from '../../../store/ui-slice';
import { useEffect, useState } from 'react';
import useAddDoc from '../../../hooks/useAddDoc';
import { serverTimestamp } from '@firebase/firestore';

const AddCategory = () => {
    const [amount, setAmount ] = useState(0)
    const [av, setAv] = useState([]);
    const [title, setTitle] = useState('');
   const [percentage, setPercentage] = useState(0); 

   

    const {isVisible, category} = useSelector((state) => state.ui.addCategory);
    const dispath = useDispatch();

    
    const addCategoryHandler = useAddDoc();
    const addTransactionHandler = useAddDoc();


    const addCategory = (e) => {
        e.preventDefault();

        if(!title || !Number(amount)) return;

        addCategoryHandler('categorias', {
            title,
            av,
           /* percentage: Number(percentage), */
            date: serverTimestamp(),
            amount: Number(amount),
        });

        dispath(toggleAddCategory(null));
       // setPagments('');
        setAv('');
        setTitle('');
        setAmount(0);
        
    };



    return (
        <Modal isOpen={isVisible}
         onClose={() => dispath(toggleAddCategory(null))}
         title = 'Nova Categoria'>
            <div>
                <form onSubmit={addCategory}>
                    <div className={styles['label-input']}>
                        <label htmlFor='title' className='p'>Nome da Pessoa</label>
                        <input 
                        type='text'
                            id='title'
                            name='title'
                            placeholder='Nome da Pessoa'
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className={styles['label-input']}>
                    <label htmlFor='amount' className='p'>valor</label>
                        <input 
                        type='text'
                            id='amount'
                            name='amount'
                            placeholder='valor da venda'
                            onChange={(e) => setAmount(e.target.value)}
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
                            <text value="Selecione a categoria">Selecione a forma De Pagamento</text>
                            <option value="Banco">Dinheiro Para o Banco</option>
                            <option value="Pix">Pix</option>
                            <option value="Cartão de Crédito">Visa</option>
                            <option value="Duplicata">Duplicata/Outro</option>
                            <option value="Av">Av</option>
                            <option value="Despesas">Despesas</option>
                        </select>
                    </div>
                        {/*<select
                        
                        id='pagments'
                        name='pagments'
                        placeholder='R$'
                        onChange={e => setPagments(e.target.value)}
                    >
                        {options.map((option, i ) => {
                            return (
                            <option key={i} value={option}>
                                {option}
                            </option>
                            );
                         })}
                            
                        </select>*/}
                    
                    
                  {/* <div className={styles['label-input']}>
                        <label htmlFor='porcentagem' className='p'>
                            Porcentagem alocada
                        </label>
                        <input 
                        type='text'
                        id='porcentagem'
                        name='porcentagem'
                        placeholder='%'
                        className='max-width'
                        onChange={(e) => setPercentage(e.target.value)}
                         />
                    </div> */}
                    <div className={styles.buttons}>
                        <button type='submit' className='btn btn-primary'>Salvar</button>
                    </div>
                </form>
            </div>
        </Modal >
    );
};

export default AddCategory;