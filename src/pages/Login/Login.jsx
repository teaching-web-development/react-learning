import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [getFromData, setFromData] = useState({});
    const navigate = useNavigate();

    const getData = (e) => {
        setFromData({ ...getFromData, [e.target.name]: e.target.value.trim() });
        getFromData.name && setFromData({ name: false });
    }

    const handleSubmit = e => {
        e.preventDefault();
        sessionStorage.setItem('amrUserInfo', JSON.stringify(getFromData));
        navigate("/about");
    }
    return (
        <div>
            <h1>This is Login page</h1>
            <form className='px-5' style={{ maxWidth: '450px' }} onSubmit={e => handleSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="text" name="email" className="form-control" placeholder="Enter email" onChange={(e) => getData(e)} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Password" onChange={(e) => getData(e)} />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
        </div>
    );
};

export default Login;