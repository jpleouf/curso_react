import Navegator from '../components/Navigator';
import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setSaveUserLogged} from '../redux/actions';
import { useSelect } from '@mui/base';

const About = () => {

const nombreDelUsuario=useSelector((state) => state.user_logged);
const informations=useSelector((state) => state.informations);


return (
    <div>
        <Navegator></Navegator>
        <h2>About Page</h2>
        <h1>{informations}</h1>
    </div>
);
};


export default About;
