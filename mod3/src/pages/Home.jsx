import Navegator from '../components/Navigator';
import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {setSaveUserLogged} from '../redux/actions';

const Home = () => {

const dispatch=useDispatch();

    useEffect(() => {
        dispatch(setSaveUserLogged('JPV'));
},[]);
    return (
    <div>
        <Navegator></Navegator>
        <h2>Home Page</h2>
    </div>
);
};


export default Home;
