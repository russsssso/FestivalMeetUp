import React, {Component} from 'react';
import {
    CommentOutlined,
    DashOutlined,
    EditOutlined,
    EllipsisOutlined,
    FilterOutlined, HeartOutlined,
    SettingOutlined, ShareAltOutlined,
    UserOutlined
} from "@ant-design/icons";
import {Avatar, Card, Image} from "antd";
import Meta from "antd/lib/card/Meta";

export class Feed extends Component {
    static displayName = Feed.name;
    state = {
        posts: [],
        events: []
    };
    componentDidMount() {
        fetch('https://localhost:7179/Festival')
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(data => {
                console.log(data);
                this.setState({ posts: data });
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        fetch('https://localhost:7179/Festival/recommendedEvents')
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(data => {
                console.log(data);
                this.setState({ events: data });
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    render() {
        return (
            <div style={{display: "flex", flexDirection: "row"}}>
                <div style={{display: "flex", flexDirection: "column", width: "70%"}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <div style={{flex: 1}}>
                            <div style={{fontSize: "16px", color: "gray", fontWeight: '700'}}>ACTIVITY FEED</div>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center', color: "gray"}}>
                            <FilterOutlined style={{
                                fontSize: '15px',
                                marginRight: '10px'
                            }}></FilterOutlined>
                            <div style={{fontSize: "16px"}}>Filter</div>
                        </div>
                    </div>
                    <div>
                        {this.state.posts.map((post, index) => (
                            <Card
                                key = {index}
                                style={{width: "100%",marginTop:"20px"}}
                                actions={[
                                    <div key="settings" style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                                        <div style={{display: 'flex'}}>
                                            <div key="likes" style={{display:"flex",flexDirection:"row",marginLeft:"30px",marginRight:"30px"}}>
                                                <HeartOutlined />
                                                <div style={{marginLeft:"20px"}}> {post.likes}</div>
                                            </div>
                                            <div key="comments" style={{display:"flex",flexDirection:"row",marginLeft:"30px",marginRight:"30px"}}>
                                                <CommentOutlined />
                                                <div style={{marginLeft:"20px"}}> {post.comments}</div>
                                            </div>
                                            <div key="shares" style={{display:"flex",flexDirection:"row",marginLeft:"30px",marginRight:"30px"}}>
                                                <ShareAltOutlined />
                                                <div style={{marginLeft:"20px"}}> {post.shares}</div>
                                            </div>
                                        </div>
                                        <div key="reply" style={{display:"flex",flexDirection:"row",marginLeft:"10px",marginRight:"10px"}}>
                                            <div style={{marginLeft:"20px"}}> Reply</div>
                                        </div>
                                    </div>
                                ]}
                            >
                                <Meta
                                    avatar={<Avatar size={50} icon={<UserOutlined/>}/>}
                                    title={post.username}
                                    description={post.time}
                                    style={{
                                        marginBottom: "20px",
                                        paddingBottom: "20px",
                                        borderBottom: "1px solid lightgray"
                                    }}
                                />
                                <p> {post.content}</p>

                            </Card>
                        ))}
                        
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "20%",
                    marginLeft: "5%",
                    marginRight: "5%"
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingBottom: "10px",
                        borderBottom: "1px solid lightgray"
                    }}>
                        <div style={{flex: 1}}>
                            <div style={{fontSize: "16px", fontWeight: "700"}}>Recommended Events</div>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center', color: "gray"}}>
                            <DashOutlined style={{
                                fontSize: '15px',
                                marginRight: '10px'
                            }}></DashOutlined>
                        </div>
                    </div>
                    <div>
                        {this.state.events.map((event, index) => (
                            <div
                                key = {index}
                                style={{marginTop: "20px", paddingBottom: "10px", borderBottom: "1px solid lightgray"}}>
                                <Image width="100%"
                                       height="200px"
                                       preview={false} src="/post.jpg" alt="photo"/>
                                <div style={{fontSize: "14px", fontWeight: "700", marginTop: "20px"}}>
                                    {event.title}
                                </div>
                                <div style={{marginTop: "20px", color: "gray"}}>
                                    {event.details}
                                </div>
                            </div>
                        ))}


                        <div style={{
                            marginTop: "20px",
                            color: "blue",
                            alignItems: "center",
                            justifyContent: "center",
                            display: "flex"
                        }}>
                            <a>
                                See all
                            </a>

                        </div>

                    </div>
                </div>


            </div>


        );
    }
}
