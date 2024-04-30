import React, {useEffect, useState} from 'react';
import {Avatar, Image, Layout, Menu} from 'antd';
import {
    HomeOutlined, MessageOutlined,
    PlusSquareOutlined, SearchOutlined, UserOutlined,
} from '@ant-design/icons';
import Link from "antd/lib/typography/Link";

const {Header, Footer, Sider, Content} = Layout;
const headerStyle = {
    textAlign: 'center',
    color: 'black',
    height: 64,
    paddingInline: 48,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
};
const contentStyle = {

    minHeight: 120,

    color: 'black',
    backgroundColor: 'white',
};
const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: 'black',
    backgroundColor: 'white',
};

const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: '100%',
    maxWidth: '100%',
    height: '100%',

};

const items = [
    {
        key: '1',
        icon: <HomeOutlined style={{fontSize: "25px"}}/>,
        label: (
            <Link style={{fontSize: "20px"}} href="/">
                Activity Feed
            </Link>
        ),
    },
    {
        key: '2',
        icon: <SearchOutlined style={{fontSize: "25px"}}/>,
        label: (
            <Link style={{fontSize: "20px"}} href="/events">
                Events
            </Link>
        ),
    },
    {
        key: '3',
        icon: <PlusSquareOutlined style={{fontSize: "25px"}}/>,
        label: (
            <Link style={{fontSize: "20px"}} href="/post">
                New post
            </Link>
        ),
    },
    {
        key: '4',
        icon: <MessageOutlined style={{fontSize: "25px"}}/>,
        label: (
            <Link style={{fontSize: "20px"}} href="/messages">
                Messages
            </Link>
        ),
    },
    {
        key: '5',
        icon: <Avatar size={25} icon={<UserOutlined/>}/>,
        label: (
            <Link style={{fontSize: "20px"}} href="/profile">
                Profile
            </Link>
        ),
    }
];
const AppLayout = (props) => {

    const [selectedKeys, setSelectedKeys] = useState(["1"]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (window.location.pathname.includes("events")) {
            setSelectedKeys(["2"]);
        } else if (window.location.pathname.includes("post")) {
            setSelectedKeys(["3"]);
        } else if (window.location.pathname.includes("messages")) {
            setSelectedKeys(["4"]);
        } else if (window.location.pathname.includes("profile")) {
            setSelectedKeys(["5"]);
        } else {
            setSelectedKeys(["1"]);
        }

    }, [window.location.pathname]);

    useEffect(() => {
        setMounted(true);
    }, []);

    const url = window.location.pathname;

    return (
        <>
            {mounted && (
                <Layout style={layoutStyle}>
                    {url !== "/login-test" &&
                        (
                            <Header style={headerStyle}>
                                <a href="/">
                                    <Image
                                        style={{borderRadius: 50}}
                                        alt="poza"
                                        width="60px"
                                        height="60px"
                                        preview={false}
                                        src="/festivalAvatar.webp"/>
                                </a>
                                <a href="/">
                                    <div style={{
                                        marginLeft: "20px",
                                        fontWeight: "bold",
                                        fontSize: "24px",
                                        textDecoration: "none",
                                        color: "black"
                                    }}>
                                        Festival Meet-Up
                                    </div>
                                </a>

                            </Header>
                        )
                    }

                    <Layout>
                        {url !== "/login-test" &&
                            (
                                <Sider width="25%" style={siderStyle}>
                                    <Menu
                                        mode="inline"
                                        selectedKeys={selectedKeys}
                                        onClick={({key}) => setSelectedKeys([key.toString()])}
                                        style={{
                                            height: '100%',
                                            padding: 20,
                                            paddingRight: 200,
                                            borderRight: "none",
                                            backgroundColor: 'white',

                                            color: 'black',
                                        }}
                                    >
                                        {items?.map((item) => (
                                            <Menu.Item key={item?.key} icon={item?.icon}>
                                                {item?.label}
                                            </Menu.Item>
                                        ))}
                                    </Menu>
                                </Sider>
                            )
                        }
                        <Content style={contentStyle}>
                            {props.children}
                        </Content>
                    </Layout>

                </Layout>
            )}
        </>
    );

}

export default AppLayout;