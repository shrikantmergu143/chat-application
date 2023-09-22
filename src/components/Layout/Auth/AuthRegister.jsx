import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { API_AUTH_REGISTER, App_url } from '../../common/Constant'
import { validateEmail } from '../../common/utils';
import { PostRequestCallAPI } from '../../common/PostRequest';
import { useDispatch } from 'react-redux';
import { setStoreLoginUser } from '../../../redux/actions';
import firebase from "firebase/compat/app"
const InputGroup = React.lazy(()=>import('../../common/InputGroup'))
const Button = React.lazy(()=>import('../../common/Button'));

export default function AuthRegister() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        email:"",
        password:"",
        username:"",
    });
    const [errors, setErrors] = useState({
        email:"",
        password:"",
        username:"",
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
        if(formData?.username?.length<=4){
            errors.username = "Enter valid username";
            value = false
        }
        if(formData?.username === ""){
            errors.username = "Enter your username";
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
            const response = await onSignUp();
            console.log("response", response)
            const payload = {
                email:formData?.email,
                password:formData?.password,
                username:formData?.username,
            }
            const resp = await PostRequestCallAPI(API_AUTH_REGISTER,payload);
            if(resp?.status === 200){
                dispatch(setStoreLoginUser(resp?.data?.userDetails));
            }else{

            }
        }
    }
    const onSignUp = () => {
        const payload = {
            email:formData?.email,
            password:formData?.password,
            username:formData?.username,
        }
        const response = firebase.auth().createUserWithEmailAndPassword(payload?.email, payload?.password)
            .then((result) => {
              return result;
            })
            .catch((error) => {
                return error;
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
                                    <h3 className="fw-bold mb-2">Sign Up</h3>
                                    <p>Follow the easy steps</p>
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
                                    placeholder={"Username"}
                                    label={"Username"}
                                    name='username'
                                    onChange={onChange}
                                    value={formData?.username}
                                    error={errors?.username}
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
                                <Button className="btn btn-block w-100" onClick={callSubmitForm} variant={"primary"} size={"md"} type="submit">Create Account</Button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="text-center mt-8">
                    <p>Already have an account? <Link to={App_url.Login} >Sign in</Link></p>
                    <p><Link >Forgot Password?</Link></p>
                </div>
            </div>
        </div> 
    </div>
  )
}
