import React, {Component} from 'react';
import {Avatar,Image} from "antd";
import {UserOutlined} from "@ant-design/icons";


export class Profile extends Component {
    static displayName = Profile.name;

    render() {
        return (
            <div>
                <div style={{display: "flex", justifyContent: "center",marginBottom:"10px"}}>
                    <Avatar size={200} icon={<UserOutlined/>}/>
                </div>
                <div>
                    <div style={{textAlign: "center", fontSize: "30px", marginBottom: '30px'}}>Username</div>
                </div>
                <div style={{display: "flex", fontWeight: "700", fontSize: "18px", justifyContent: "center"}}>
                    <div style={{marginRight: "45px",marginLeft:"45px"}}>9 posts</div>
                    <div style={{marginRight: "45px",marginLeft:"45px"}}>10k followers</div>
                    <div style={{marginRight: "45px",marginLeft:"45px"}}>5063 following</div>
                </div>
                <div style={{textAlign: "center", fontSize: "20px", marginTop: '20px'}}>
                    This is the bio / description.
                </div>

                <div style={{display: "flex", justifyContent: "center", marginTop: '20px'}}>
                    <button style={{
                        width: "200px",
                        height: "40px",
                        backgroundColor: "#0095f6",
                        color: "white",
                        borderRadius: "5px",
                        border: "none"
                    }}>Edit Profile
                    </button>
                </div>
                <div style={{textAlign: "center",fontWeight:"700", fontSize: "24px", marginTop: '20px',marginBottom:"50px"}}>
                    Your Photos
                </div>
                {Array.from({length: 2}).map((_, index) => (
                    <div key={index} style={{display: "flex", justifyContent: "center", flexWrap: "wrap",marginBottom:"40px"}}>
                        {Array.from({length: 3}).map((_, index) => (
                            <div key={index} style={{marginRight:"40px"}}>
                                <Image width="280px"
                                       height="280px"
                                       preview={false} src="/post.jpg" alt={`post_${index + 1}`}/>
                            </div>
                        ))}
                    </div>
                ))}


            </div>

        );
    }
}
