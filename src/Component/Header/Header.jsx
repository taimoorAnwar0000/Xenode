//import useState hook to create menu collapse state
import React, { useState } from "react";
import "./Header.css";
import logo from "./../../Images/logo.png";
import logoSm from "./../../Images/logo-sm.png";

//import react pro sidebar components
import {
  Button,
  Navbar,
  Container,
  Offcanvas,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { ImCross } from "react-icons/im";
import { GoThreeBars } from "react-icons/go";
import { FaList, FaRegHeart } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);

  const [menuCollpaseBtn, setMenuCollapseBtn] = useState(false);

  const [menuCollapseThird, setMenuCollapseThird] = useState(false);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    props.setLeftPadding(!props.leftPadding);

    setMenuCollapse(!menuCollapse);

    setMenuCollapseBtn(!menuCollpaseBtn);

    if (menuCollpaseBtn == false) {
      // setMenuCollapse(!menuCollapse)

      console.log("fun");
      mouseEnterHandler();
      mouseLeaveHandler();

      // if(menuCollapseThird==true) {
      //     setMenuCollapse(true);
      //     console.log("funTrueThird")
      //     console.log("mouseEnterIf",menuCollapseThird)

      // }
      // else {
      //         setMenuCollapse(false);
      //         console.log("funTrueThird")
      //         console.log("mouseLeaveElse",menuCollapseThird)
      // }
    }

    //condition checking to change state from true to false and vice versa
    // menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  // if(menuCollpaseBtn===true){
  const mouseEnterHandler = () => {
    setMenuCollapseThird(!menuCollapseThird);

    //    console.log("mouseEnter",menuCollapseThird)
  };

  const mouseLeaveHandler = () => {
    setMenuCollapseThird(!menuCollapseThird);
    // console.log("mouseLeave",menuCollapseThird)
    // menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);

    //   }
  };
  return (
    <>
      <div
        id="header"
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              {/* small and big change using menucollapse state */}
              {menuCollapse == true ? (
                <img src={logoSm} alt="" className="loogSm" />
              ) : (
                <img src={logo} alt="" className="logo" />
              )}
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle className="expanArrowIcon" />
              ) : (
                <GoThreeBars className="threeBars" />
              )}
            </div>
            <div className="topMenu">
              {" "}
              <p className="menuTxt">Menu</p>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <Link to="/">
                {" "}
                <MenuItem active={true} icon={<FiHome />}>
                  Insights
                </MenuItem>
              </Link>
              <Link to="/NodeStaking">
                {" "}
                <MenuItem icon={<FaList />}>Node Staking</MenuItem>{" "}
              </Link>
              <MenuItem icon={<FaRegHeart />}>Metrics</MenuItem>

              <Link to="/NodeIncome">
                {" "}
                <MenuItem icon={<RiPencilLine />}>Node Income</MenuItem>
              </Link>
              <Link to="/User">
                {" "}
                <MenuItem icon={<BiCog />}>Active Users</MenuItem>
              </Link>

              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarContent>
          {/* <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter> */}
        </ProSidebar>
      </div>

      <div className="topNavBar">
        <Navbar bg="light" expand={false}>
          <Container fluid>
            {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="start"
            >
              <ProSidebar collapsed={menuCollapse}>
                <SidebarHeader>
                  <div className="logotext">
                    {/* small and big change using menucollapse state */}
                    <img src={logoSm} alt="" className="loogSm" />
                  </div>
                  <div className="closemenu">
                    {/* changing menu collapse icon on click */}

                    <Navbar.Toggle aria-controls="offcanvasNavbar">
                      <ImCross className="threeBars" />
                    </Navbar.Toggle>
                  </div>
                </SidebarHeader>
                <div className="topMenu">
                  {" "}
                  <p className="menuTxt">Menu</p>
                </div>
                <SidebarContent>
                  <Menu iconShape="square">
                    <MenuItem active={true} icon={<FiHome />}>
                      Insights
                    </MenuItem>
                    <MenuItem icon={<FaList />}>Node Staking</MenuItem>
                    <MenuItem icon={<FaRegHeart />}>Metrics</MenuItem>
                    <MenuItem icon={<RiPencilLine />}>Node Income</MenuItem>
                    <MenuItem icon={<BiCog />}>Active Users</MenuItem>
                    <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
                  </Menu>
                </SidebarContent>
                {/* <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter> */}
              </ProSidebar>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
