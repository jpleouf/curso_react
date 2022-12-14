import Navegator from '../components/Navigator';
import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setSaveUserLogged} from '../redux/actions';
import { useSelect } from '@mui/base';

const About = () => {

const nombreDelUsuario=useSelector((state) => state.user_logged);
    return (
    <div>
        <Navegator></Navegator>
        <h2>About Page</h2>
        <h1>{nombreDelUsuario}</h1>
    </div>
);
};


export default About;
