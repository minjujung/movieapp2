import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
    color: white;
    position:fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    padding: 0px 10px;
    display: flex;
    align-items: center;
    background-color: rgba(20, 20, 20, 0.8);
    z-index: 10;
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
    display: flex;
    justify-content: space-between;
`;

const Item = styled.li`
    width: 80px;
    height: 50px;
    text-align: center;
    border-bottom: 3px solid ${props => props.current ? "#e74c3c" : "transparent"};
    transition: border-bottom .3s ease-out;
`;

const SLink = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

// withRouter로 component를 감싸면 props를 가짐
// 이 props로 다른 component들과 연결 가능!!

export default withRouter(({ location: { pathname } }) => (
    <Header>
        <List>
            <Item current={pathname === "/"}>
                <SLink to="/">Movies</SLink>
            </Item>
            <Item current={pathname === "/tv"}>
                <SLink to="/tv">Tv</SLink>
            </Item>
            <Item current={pathname === "/search"}>
                <SLink to="/search">Search</SLink>
            </Item>
        </List>
    </Header>
))