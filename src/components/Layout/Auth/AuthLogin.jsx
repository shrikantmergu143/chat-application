import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { App_url } from '../../common/Constant'
import { validateEmail } from '../../common/utils';
const InputGroup = React.lazy(()=>import('../../common/InputGroup'))
const Button = React.lazy(()=>import('../../common/Button'));

export default function AuthLogin() {
    const [formData, setFormData] = useState({
        email:"",
        password:""
    });
    const [errors, setErrors] = useState({
        email:"",
        password:""
    });
    const onChange = (e) =>{
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
        if(!validateEmail(formData?.email)){
            errors.email = ""
        }

    }
    const callSubmitForm = (e) =>{
        e.preventDefault();
        if(validation()){

        }
    }
  return (
    <div className="container">
        <div className="row align-items-center justify-content-center min-vh-100 gx-0">
            <div className="col-12 col-md-5 col-lg-4">
                <div className="card card-shadow border-0">
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
                                    type='email'
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
                                    type='password'
                                    onChange={onChange}
                                    value={formData?.password}
                                    error={errors?.password}
                                />
                            </div>

                            <div className="col-12">
                                <Button className="btn btn-block w-100" variant={"primary"} size={"md"} type="submit">Sign In</Button>
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
