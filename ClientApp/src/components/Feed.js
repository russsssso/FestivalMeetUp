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
                        <Card
                            style={{width: "100%",marginTop:"20px"}}
                            actions={[
                                <div key="settings" style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                                    <div style={{display: 'flex'}}>
                                        <div key="likes" style={{display:"flex",flexDirection:"row",marginLeft:"30px",marginRight:"30px"}}>
                                            <HeartOutlined />
                                            <div style={{marginLeft:"20px"}}> 30</div>
                                        </div>
                                        <div key="comments" style={{display:"flex",flexDirection:"row",marginLeft:"30px",marginRight:"30px"}}>
                                            <CommentOutlined />
                                            <div style={{marginLeft:"20px"}}> 42</div>
                                        </div>
                                        <div key="shares" style={{display:"flex",flexDirection:"row",marginLeft:"30px",marginRight:"30px"}}>
                                            <ShareAltOutlined />
                                            <div style={{marginLeft:"20px"}}> 34</div>
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
                                title="Username_1"
                                description="4 days ago"
                                style={{
                                    marginBottom: "20px",
                                    paddingBottom: "20px",
                                    borderBottom: "1px solid lightgray"
                                }}
                            />
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse
                                lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum
                                ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin
                                porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit
                                amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a,
                                enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum
                                bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim.
                                Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus
                                orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede
                                pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit. </p>

                        </Card>
                        <Card
                            style={{width: "100%",marginTop:"20px"}}
                            actions={[
                                <div key="settings" style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                                    <div style={{display: 'flex'}}>
                                        <div key="likes" style={{display:"flex",flexDirection:"row",marginLeft:"30px",marginRight:"30px"}}>
                                            <HeartOutlined />
                                            <div style={{marginLeft:"20px"}}> 30</div>
                                        </div>
                                        <div key="comments" style={{display:"flex",flexDirection:"row",marginLeft:"30px",marginRight:"30px"}}>
                                            <CommentOutlined />
                                            <div style={{marginLeft:"20px"}}> 42</div>
                                        </div>
                                        <div key="shares" style={{display:"flex",flexDirection:"row",marginLeft:"30px",marginRight:"30px"}}>
                                            <ShareAltOutlined />
                                            <div style={{marginLeft:"20px"}}> 34</div>
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
                                title="Username_2"
                                description="6 days ago"
                                style={{
                                    marginBottom: "20px",
                                    paddingBottom: "20px",
                                    borderBottom: "1px solid lightgray"
                                }}
                            />
                            <Image width="100%"
                                   height="400px"
                                   preview={false} src="/post.jpg" alt="photo"/>

                        </Card>
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
                        <div style={{marginTop: "20px", paddingBottom: "10px", borderBottom: "1px solid lightgray"}}>
                            <Image width="100%"
                                   height="200px"
                                   preview={false} src="/post.jpg" alt="photo"/>
                            <div style={{fontSize: "14px", fontWeight: "700", marginTop: "20px"}}>
                                Electric Castle
                            </div>
                            <div style={{marginTop: "20px", color: "gray"}}>
                                10th edition: 17-21 July 2024
                                One of Europe's few
                                truly 24-hour festival. Featuring
                                artists such as: Sean Paul, Bring me
                                The Horizon, Nina Kraviz and many more.
                            </div>
                        </div>
                        <div style={{marginTop: "20px", paddingBottom: "10px", borderBottom: "1px solid lightgray"}}>
                            <Image width="100%"
                                   height="200px"
                                   preview={false} src="/post.jpg" alt="photo"/>
                            <div style={{fontSize: "14px", fontWeight: "700", marginTop: "20px"}}>
                                Electric Castle
                            </div>
                            <div style={{marginTop: "20px", color: "gray"}}>
                                10th edition: 17-21 July 2024
                                One of Europe's few
                                truly 24-hour festival. Featuring
                                artists such as: Sean Paul, Bring me
                                The Horizon, Nina Kraviz and many more.
                            </div>
                        </div>
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
