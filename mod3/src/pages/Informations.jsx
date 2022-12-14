import Navegator from '../components/Navigator';
import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setSaveUserLogged} from '../redux/actions';
import {setSaveInformations} from '../redux/actions';
import { useSelect } from '@mui/base';

const Informations = () => {

  const dispatch=useDispatch();
  dispatch(setSaveInformations('Infos'));


const informations=useSelector((state) => state.informations);
    return (
    <div>
        <Navegator></Navegator>
        <h2>Informations Page</h2>
        <h1>{informations}</h1>
    </div>
);
};


export default Informations;