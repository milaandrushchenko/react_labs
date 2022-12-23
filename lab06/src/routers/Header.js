import { Outlet, NavLink } from "react-router-dom";
import styled from "styled-components";
import glamorous from "glamorous";

export default function Headers() {
    const Bar = styled.nav`
        font-size: 18px;
        background-color: black; 
        padding-bottom: 10px;
        @media (min-width: 768px) {
            display: flex;
            justify-content: center;
            padding-bottom: 0;
            height: 70px;
            align-items: center;
        }
    `
    const MainNav = styled.ul`
        list-style-type: none;
        flex-direction: column;
        @media (min-width: 768px) {
            display: flex !important;
            margin-right: 30px;
            flex-direction: row;
            justify-content: flex-end;
        }
        `
    const NavLi = styled.li`
        text-align: center;
        margin: 15px;
        `
    const Box = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center
        `

    // const NavL = glamorous(NavLink)({
    //     listStyleType: "none",
    //     display: "flex",
    //     flexDirection: "column",
    //     textDecoration: "none",
    //     color: "#f2f2f2"
    // });
    return (
        <>
            <Bar>
                <MainNav >
                    <NavLi>
                        <NavLink to={'/'}>Home</NavLink>
                    </NavLi>
                    <NavLi>
                        <NavLink to={'/categories'}>Catagories</NavLink>
                    </NavLi>

                </MainNav>
            </Bar>
            <Box>
                <Outlet />
            </Box>
        </>
    );
}