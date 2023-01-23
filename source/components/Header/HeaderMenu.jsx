import CardMenu from '../UI/CardMenu';
import useCloseMenu from '../../hooks/useCloseMenu';
import { toggleAddPagments, toggleAddSalary } from '../../store/ui-slice';
import { useDispatch } from 'react-redux';

const HeaderMenu = ({toggleMenuHandler}) => {
    const cardRef = useCloseMenu(toggleMenuHandler);
    const dispath = useDispatch();

    return (
        <CardMenu ref={cardRef}>
            <li onClick={() => dispath(toggleAddSalary(null))}>Adicionar Salários</li>
            <li onClick={() => dispath(toggleAddPagments(null))}>Adicionar formas de pagamentos</li>
        </CardMenu>
    );
};

export default HeaderMenu;