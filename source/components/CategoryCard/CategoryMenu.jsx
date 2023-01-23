import { useDispatch } from 'react-redux';
import useCloseMenu from '../../hooks/useCloseMenu';
import { toggleAddAmount, toggleEditCategory, toggleSubtractAmount, toggleTransferAmount } from '../../store/ui-slice';
import CardMenu from '../UI/CardMenu';

const CategoryMenu = ({ toggleMenuHandler , data }) => {
    const menuRef = useCloseMenu(toggleMenuHandler);
    const dispath = useDispatch();
    
    return (
        <CardMenu ref={menuRef}>
            <li onClick={() => dispath(toggleEditCategory(data))}>Editar</li>
        </CardMenu>
    );
};

export default CategoryMenu;