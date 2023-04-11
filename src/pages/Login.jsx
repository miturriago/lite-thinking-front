import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import loginService from '../services/user';
import jwt_decode from "jwt-decode";
import Swal from 'sweetalert2'
import AppContext from '../context/AppContext';

// Components
import Loader from '../components/Loader';


const Login = () => {
    const { setRole, setIsLogged } = useContext(AppContext)
    const [isLoad, setIsload] = useState(false)
    const [data, setData] = useState({ email: "", password: "" })
    let navigate = useNavigate();

    const getRole = (token)=>{
        var decoded = jwt_decode(token);
        setRole(decoded.profile);
        localStorage.setItem("profile", decoded.profile);
    }

    const handleLogin = async () => {
        setIsload(true)
        const response = await loginService(data)
        if (response.message === "Success") {
            localStorage.setItem("token", response.token);
            getRole(response.token);
            setIsLogged(true);
            setIsload(false)
            navigate("home");
        }else{
            setIsload(false)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                confirmButtonColor: '#fee804',
                text: 'Algo salió  mal!, intentalo nuevamente',
              })
        }
    };

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    return (
        <div className='Div_Login' data-testid="login">

            
            <Loader isLoad={isLoad}  onclose={()=> {setIsload(false)}}></Loader>
            <div className='Div_form_container'>
                <div className='Div_logo'></div>

                <div className='Div_center'>
                    <div className='Div_form'>
                        <h1>Inicia sesión</h1>
                        <TextField className='textField' id="outlined-email" label="Email" name="email" value={data.email} variant="outlined" onChange={handleChange} />

                        <TextField className='textField' type="password" id="outlined-password" label="Contraseña" name="password" value={data.password} variant="outlined" onChange={handleChange} />

                        <Button onClick={handleLogin} className='button' variant="contained">Entrar</Button>


                    </div>

                </div>
            </div>
            <div className='Div_background'>

            </div>
        </div>
    )
}

export default Login;
