import Navegator from '../components/Navigator';
import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setSaveUserLogged} from '../redux/actions';
import { useSelect } from '@mui/base';

const Informations = () => {

//const nombreDelUsuario=useSelector((state) => state.user_logged);
    return (
    <div>
        <Navegator></Navegator>
        <h2>Informations Page</h2>
    </div>
);
};


export default Informations;