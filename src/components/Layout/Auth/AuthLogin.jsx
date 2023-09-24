import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { API_AUTH_LOGIN, App_url } from '../../common/Constant'
import { validateEmail } from '../../common/utils';
import { PostRequestCallAPI } from '../../common/PostRequest';
import { useDispatch } from 'react-redux';
import { setStoreLoginUser } from '../../../redux/actions';
import firebase from "firebase/compat/app"
const InputGroup = React.lazy(()=>import('../../common/InputGroup'))
const Button = React.lazy(()=>import('../../common/Button'));

function AuthLogin() {
    // const userDetails = useSelector(state=>state?.allReducers);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        email:"",
        password:""
    });
    const [errors, setErrors] = useState({
        email:"",
        password:""
    });
    const onChange = (e) =>{
        let value = e.target.value
        if(e.target.name === "email"){
            e.target.value = value?.toLowerCase()
        }
        setFormData((data)=>({
            ...data,
            [e.target.name]:e.target.value
        }))
        setErrors((data)=>({
            ...data,
            [e.target.name]:""
        }))
    }
    const validation = () =>{
        let value = true
        if(validateEmail(formData?.email)){
            errors.email = validateEmail(formData?.email);
            value = false
        }
        if(formData?.password === ""){
            errors.password = "Enter your password";
            value = false
        }
        setErrors((data)=>({
            ...data,
            ...errors
        }))
        return value
    }
    const callSubmitForm = async (e) =>{
        e.preventDefault();
        if(validation()){
            const payload = {
                email:formData?.email,
                password:formData?.password,
            }
            const response = await onSignIn();
            if(response?.status){
                const resp = await PostRequestCallAPI(API_AUTH_LOGIN,payload);
                if(resp?.status === 200){
                    console.log("resp", resp)
                    dispatch(setStoreLoginUser(resp?.data?.userDetails));
                    navigate(App_url.Home)
                }else{

                }
            }
            console.log("response", response)
        }
    }
    const onSignIn = () => {
        const payload = {
            email:formData?.email,
            password:formData?.password,
        }
        const response = firebase.auth().signInWithEmailAndPassword(payload?.email, payload?.password)
            .then((result) => {
              return {data:result, status:true};
            })
            .catch((error) => {
                return {error:error, status:false};
            });
        return response
    }
  return (
    <div className="container">
        <div className="row align-items-center justify-content-center min-vh-100 gx-0">
            <div className="col-12 col-md-5 col-lg-5">
                <div className="card card-shadow border-0 pt-5 pb-5">
                    <div className="card-body">
                        <form onSubmit={callSubmitForm} className="row g-6">
                            <div className="col-12">
                                <div className="text-center">
                                    <h3 className="fw-bold mb-2">Sign In</h3>
                                    <p>Login to your account</p>
                                </div>
                            </div>

                            <div className="col-12">
                                <InputGroup
                                    floatStyle
                                    placeholder={"Email"}
                                    label={"Email"}
                                    name='email'
                                    onChange={onChange}
                                    value={formData?.email}
                                    error={errors?.email}
                                />
                            </div>

                            <div className="col-12">
                                <InputGroup
                                    floatStyle
                                    placeholder={"Password"}
                                    label={"Password"}
                                    name='password'
                                    type='password'
                                    onChange={onChange}
                                    value={formData?.password}
                                    error={errors?.password}
                                />
                            </div>

                            <div className="col-12">
                            <Button ripple={true} appearance="primary" className=" w-100" onClick={callSubmitForm} variant={"primary"}  type="submit">Sign In</Button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="text-center mt-8">
                    <p>Don't have an account yet? <Link to={App_url.Register} >Sign up</Link></p>
                    <p><Link >Forgot Password?</Link></p>
                </div>
            </div>
        </div> 
    </div>
  )
}
export default React.memo(AuthLogin)