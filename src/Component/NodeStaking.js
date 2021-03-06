import React from "react";
import "./app.css";
import "./bootstrap.css";
import Staking from "../Images/staking.gif";
import UsPic from "../Images/flags/us.jpg";
import Profile from "../Images/users/avatar-4.jpg";
import { BiBell } from "react-icons/bi";

const NodeStaking = (props) => {
  return (
    <div id={props.leftPadding==true?"layout-wrapper":"layout-wrapperClosed"}>
      <header id="page-topbar" className={props.leftPadding==true?"topHeader":"topHeaderClosed"}>
        <div className="navbar-header">
          <div className="d-flex">
            {/* LOGO */}
            <div className="navbar-brand-box">
              <a href="" className="logo logo-dark">
                <span className="logo-sm">
                  <img src={Staking} alt="" height={23} />
                </span>
                <span className="logo-lg">
                  <img src="assets/images/logo.png" alt="" height={24} />
                </span>
              </a>
              <a href="" className="logo logo-light">
                <span className="logo-sm">
                  <img src="assets/images/logo-sm.png" alt="" height={23} />
                </span>
                <span className="logo-lg">
                  <img src="assets/images/logo.png" alt="" height={24} />
                </span>
              </a>
            </div>
            <button
              type="button"
              className="btn btn-sm px-3 font-size-16 header-item waves-effect vertical-menu-btn"
            >
              <div className="lines">
                <span />
                <span />
                <span />
              </div>
            </button>
            {/* App Search*/}
            <form className="app-search d-none d-lg-block">
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
                <span className="uil-search" />
              </div>
            </form>
          </div>
          <div className="d-flex">
            <div className="dropdown d-inline-block d-lg-none ms-2">
              <button
                type="button"
                className="btn header-item noti-icon waves-effect"
                id="page-header-search-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="uil-search" />
              </button>
              <div
                className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                aria-labelledby="page-header-search-dropdown"
              >
                <form className="p-3">
                  <div className="m-0">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search ..."
                        aria-label="Recipient's username"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">
                          <i className="mdi mdi-magnify" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="dropdown d-inline-block language-switch">
              <button
                type="button"
                className="btn header-item waves-effect"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img src={UsPic} alt="Header Language" height={16} />
              </button>
              <div className="dropdown-menu dropdown-menu-end">
                {/* item*/}
                <a href="" className="dropdown-item notify-item">
                  <img
                    src={UsPic}
                    alt="user-image"
                    className="me-1"
                    height={12}
                  />{" "}
                  <span className="align-middle">Spanish</span>
                </a>
                {/* item*/}
                <a href="" className="dropdown-item notify-item">
                  <img
                    src="assets/images/flags/germany.jpg"
                    alt="user-image"
                    className="me-1"
                    height={12}
                  />{" "}
                  <span className="align-middle">German</span>
                </a>
                {/* item*/}
                <a href="" className="dropdown-item notify-item">
                  <img
                    src="assets/images/flags/italy.jpg"
                    alt="user-image"
                    className="me-1"
                    height={12}
                  />{" "}
                  <span className="align-middle">Italian</span>
                </a>
                {/* item*/}
                <a href="" className="dropdown-item notify-item">
                  <img
                    src="assets/images/flags/russia.jpg"
                    alt="user-image"
                    className="me-1"
                    height={12}
                  />{" "}
                  <span className="align-middle">Russian</span>
                </a>
              </div>
            </div>
            <div className="dropdown d-none d-lg-inline-block ms-1">
              <button
                type="button"
                className="btn header-item noti-icon waves-effect"
                data-bs-toggle="fullscreen"
              >
                <i className="uil-minus-path" />
              </button>
            </div>
            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item noti-icon waves-effect"
                id="page-header-notifications-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <BiBell size={25} />
                <span className="badge bg-danger rounded-pill">3</span>
              </button>
              <div
                className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                aria-labelledby="page-header-notifications-dropdown"
              >
                <div className="p-3">
                  <div className="row align-items-center">
                    <div className="col">
                      <h5 className="m-0 font-size-16"> Notifications </h5>
                    </div>
                    <div className="col-auto">
                      <a href="" className="small">
                        {" "}
                        Mark all as read
                      </a>
                    </div>
                  </div>
                </div>
                <div data-simplebar style={{ maxHeight: "230px" }}>
                  <a className="text-reset notification-item">
                    <div className="d-flex align-items-start">
                      <div className="flex-shrink-0 me-3">
                        <div className="avatar-xs">
                          <span className="avatar-title bg-primary rounded-circle font-size-16">
                            <i className="uil-shopping-basket" />
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-1">Your order is placed</h6>
                        <div className="font-size-12 text-muted">
                          <p className="mb-1">
                            If several languages coalesce the grammar
                          </p>
                          <p className="mb-0">
                            <i className="mdi mdi-clock-outline" /> 3 min ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a className="text-reset notification-item">
                    <div className="d-flex align-items-start">
                      <div className="flex-shrink-0 me-3">
                        <img
                          src="assets/images/users/avatar-3.jpg"
                          className="rounded-circle avatar-xs"
                          alt="user-pic"
                        />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-1">James Lemire</h6>
                        <div className="font-size-12 text-muted">
                          <p className="mb-1">
                            It will seem like simplified English.
                          </p>
                          <p className="mb-0">
                            <i className="mdi mdi-clock-outline" /> 1 hours ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a className="text-reset notification-item">
                    <div className="d-flex align-items-start">
                      <div className="flex-shrink-0 me-3">
                        <div className="avatar-xs">
                          <span className="avatar-title bg-success rounded-circle font-size-16">
                            <i className="uil-truck" />
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-1">Your item is shipped</h6>
                        <div className="font-size-12 text-muted">
                          <p className="mb-1">
                            If several languages coalesce the grammar
                          </p>
                          <p className="mb-0">
                            <i className="mdi mdi-clock-outline" /> 3 min ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a className="text-reset notification-item">
                    <div className="d-flex align-items-start">
                      <div className="flex-shrink-0 me-3">
                        <img
                          src="assets/images/users/avatar-4.jpg"
                          className="rounded-circle avatar-xs"
                          alt="user-pic"
                        />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-1">Salena Layfield</h6>
                        <div className="font-size-12 text-muted">
                          <p className="mb-1">
                            As a skeptical Cambridge friend of mine occidental.
                          </p>
                          <p className="mb-0">
                            <i className="mdi mdi-clock-outline" /> 1 hours ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="p-2 border-top">
                  <div className="d-grid">
                    <a
                      className="btn btn-sm btn-link font-size-14 text-center"
                      href=""
                    >
                      <i className="uil-arrow-circle-right me-1" /> View More..
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item waves-effect"
                id="page-header-user-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  className="rounded-circle header-profile-user"
                  src={Profile}
                  alt="Header Avatar"
                />
                <span className="d-none d-xl-inline-block ms-1 fw-medium font-size-15">
                  Billie Campos
                </span>
                <i className="uil-angle-down d-none d-xl-inline-block font-size-15" />
              </button>
              <div className="dropdown-menu dropdown-menu-end">
                {/* item*/}
                <a className="dropdown-item" href="">
                  <i className="uil uil-user-circle font-size-18 align-middle text-muted me-1" />{" "}
                  <span className="align-middle">View Profile</span>
                </a>
                <a className="dropdown-item d-block" href="">
                  <i className="uil uil-cog font-size-18 align-middle me-1 text-muted" />{" "}
                  <span className="align-middle">Settings</span>
                </a>
                <a className="dropdown-item" href="">
                  <i className="uil uil-sign-out-alt font-size-18 align-middle me-1 text-muted" />{" "}
                  <span className="align-middle">Sign out</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* ========== Left Sidebar Start ========== */}

      {/* Left Sidebar End */}
      {/* ============================================================== */}
      {/* Start right Content here */}
      {/* ============================================================== */}
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* start page title */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0">Node Staking</h4>
                  <div className="page-title-right">
                    <button className="btn btn-info px-3 me-1">
                      Stake Your Node
                    </button>
                    <button className="btn btn-primary px-3">
                      Stake Solana
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* end page title */}
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="rcrfeature">
                  <div className="card">
                    <div className="card-header">
                      <div className="card-widgets">
                        <a
                          className="dwww"
                          data-bs-toggle="collapse"
                          href=""
                          role="button"
                          aria-expanded="false"
                          aria-controls="collapseCard1"
                        >
                          <i className="mdi mdi-minus" />
                        </a>
                        <a href="" data-toggle="remove">
                          <i className="mdi mdi-close" />
                        </a>
                      </div>
                      <h3 className="card-title">
                        Xenode <span className="text-info">#10</span>
                      </h3>
                    </div>
                    <div className="collapse show" id="collapseCard1">
                      <div className="bg-soft-success px-3 py-2 fs-5 text-center fw-bolder">
                        XENODE Staking
                      </div>
                      <div className="card-body">
                        <div className="stimg">
                          <img src={Staking} />
                        </div>
                      </div>
                      {/* end card-body*/}
                      <div className="bg-soft-primary p-3">
                        <div className="d-flex fw-bolder justify-content-between font-size-16">
                          <div>Timer:</div>
                          <div>00:14:63</div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/* end card*/}
                </div>
              </div>
              {/* end col */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="rcrfeature">
                  <div className="card">
                    <div className="card-header">
                      <div className="card-widgets">
                        <a
                          className="dwww"
                          data-bs-toggle="collapse"
                          href=""
                          role="button"
                          aria-expanded="false"
                          aria-controls="collapseCard2"
                        >
                          <i className="mdi mdi-minus" />
                        </a>
                        <a href="" data-toggle="remove">
                          <i className="mdi mdi-close" />
                        </a>
                      </div>
                      <h3 className="card-title">
                        Xenode <span className="text-info">#10</span>
                      </h3>
                    </div>
                    <div className="collapse show" id="collapseCard2">
                      <div className="bg-soft-success px-3 py-2 fs-5 text-center fw-bolder">
                        XENODE Staking
                      </div>
                      <div className="card-body">
                        <div className="stimg">
                          <img src={Staking} />
                        </div>
                      </div>
                      {/* end card-body*/}
                      <div className="bg-soft-primary p-3">
                        <div className="d-flex fw-bolder justify-content-between font-size-16">
                          <div>Timer:</div>
                          <div>00:14:63</div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/* end card*/}
                </div>
              </div>
              {/* end col */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="rcrfeature">
                  <div className="card">
                    <div className="card-header">
                      <div className="card-widgets">
                        <a
                          className="dwww"
                          data-bs-toggle="collapse"
                          href=""
                          role="button"
                          aria-expanded="false"
                          aria-controls="collapseCard3"
                        >
                          <i className="mdi mdi-minus" />
                        </a>
                        <a href="" data-toggle="remove">
                          <i className="mdi mdi-close" />
                        </a>
                      </div>
                      <h3 className="card-title">
                        Xenode <span className="text-info">#10</span>
                      </h3>
                    </div>
                    <div className="collapse show" id="collapseCard3">
                      <div className="bg-soft-success px-3 py-2 fs-5 text-center fw-bolder">
                        XENODE Staking
                      </div>
                      <div className="card-body">
                        <div className="stimg">
                          <img src={Staking} />
                        </div>
                      </div>
                      {/* end card-body*/}
                      <div className="bg-soft-primary p-3">
                        <div className="d-flex fw-bolder justify-content-between font-size-16">
                          <div>Timer:</div>
                          <div>00:14:63</div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/* end card*/}
                </div>
              </div>
              {/* end col */}
            </div>
            {/* end row */}
          </div>{" "}
          {/* container-fluid */}
        </div>
        {/* End Page-content */}
        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">?? SiteName.</div>
              <div className="col-sm-6">
                <div className="text-sm-end d-none d-sm-block">
                  Thanks <i className="mdi mdi-heart text-danger" /> From{" "}
                  <a href className="text-reset">
                    sdaminul
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      {/* end main content*/}
    </div>
  );
};

export default NodeStaking;
