import Modal from '../../UI/Modal';
import styles from '../../../components/UI/Modal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleEditCategory } from '../../../store/ui-slice';
import { useState } from 'react';
import useUpdateDoc from '../../../hooks/useUpdateDoc';
import useDeleteDoc from '../../../hooks/useDeleteDoc';

const EditCategory = () => {
    const [av ,setAv] = useState('');
    const [amount, setAmount ] = useState(0)
    const [pagments, setPagments] = useState('');
    const [title, setTitle ] = useState('') ;
    const [percentage, setPercentage] = useState(0);

    const {isVisible, category} = useSelector((state) => state.ui.editCategory);
    const dispath = useDispatch();

    const editCategoryHandler = useUpdateDoc();
    const deleteCategoryHandler = useDeleteDoc();


    const editCategory = (e) => {
        e.preventDefault();

        if (!title /*|| !percentage*/) return;

        editCategoryHandler('categorias', category.id, { title, av});

        dispath(toggleEditCategory(null));
        setAmount(0);
        setAv('');
        //setTitle('');
        //setPercentage(0);
    };

    const deleteCategory = () => {
        deleteCategoryHandler('categorias', category.id);
        dispath(toggleEditCategory(null));
        //setPagments('');
        setTitle('');
        //setPercentage(0);
    }

    return (
        <Modal isOpen={isVisible}
         onClose={() => dispath(toggleEditCategory(null))}
         title = 'Editar'>
            <div>
                <form onSubmit={editCategory}>
                    <div className={styles['label-input']}>
                        <label htmlFor='title' className='p'>
                            Nome da Pessoa
                        </label>
                        <input type='text' id='title'name='title' placeholder='Nome da pessoa ' onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className={styles['label-input']}>
                        <label htmlFor='av' className='p'>
                        Mude a forma de Pagamento
                        </label>
                        <input 
                        type='text'
                        id='av'
                        name='av'
                        placeholder='Mude a forma de Pagamento'
                        onChange={(e) => setAv(e.target.value)}
                         />
                    </div>

                    <div className={styles['label-input']}>
                        <label htmlFor='av' className='p'>
                        Mude o Valor
                        </label>
                        <input 
                        type='text'
                        id='av'
                        name='av'
                        placeholder='Mude o Valor'
                        onChange={(e) => setAmount(e.target.value)}
                         />
                    </div>

                    <div className={styles.buttons}>
                        <button type='submit' className='btn btn-primary'>Salvar</button>
                        <button type='button' className='btn bt-secondary' onClick={deleteCategory}>Excluir</button>
                    </div>
                </form>
            </div>
        </Modal >
    );
};

export default EditCategory;