import React, {useState} from 'react';
import {Button, Input} from 'antd';

const LoginTest = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div style={{display: "flex", flexDirection: "row", height: "100%"}}>
            <div style={{display: "flex", width: "50%", height: "100%"}}>
                <img width="100%" src="/festival.jpg" alt="poza"/>
                <p style={{
                    position: "absolute",
                    fontSize: "60px",
                    fontWeight: "bold",
                    top: "50%",
                    left: "25%",
                    color: "white",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center"
                }}>Welcome to Festival Meet-Up</p>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                width: "50%",
                height: "100%",
                
            }}>
                <div style={{
                    margin: "20%",
                    width: "60%",
                    height: "80%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    
                }}>
                    <h1>Sign In</h1>
                    <p style={{color: "gray", marginTop: "20px"}}>Enter your email and password to login to your
                        account</p>
                    <Input
                        style={{marginTop: "20px", padding: "10px", borderRadius: "5px", border: "1px solid lightgray"}}
                        type="text"
                        placeholder="Email Address"
                        allowClear
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    <Input
                        style={{marginTop: "20px", padding: "10px", borderRadius: "5px", border: "1px solid lightgray"}}
                        type="password"
                        placeholder="Password"
                        allowClear
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                    <Button
                        style={{
                            marginTop: "20px",
                            height: "40px",
                            borderRadius: "5px",
                            border: "1px solid lightgray",
                            backgroundColor: "gray",
                            color: "white"
                        }}>Sign In
                    </Button>
                    <p
                        style={{
                            marginTop: "20px",
                            color: "black",
                            textAlign: "center",
                        }}
                    >
                        Want to create an account? &nbsp;
                        <a href="/register">Sign Up</a>
                    </p>

                </div>
            </div>
        </div>
    );

}
export default LoginTest;