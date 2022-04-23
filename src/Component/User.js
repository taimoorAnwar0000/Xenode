import React from "react";
import "./app.css";
import "./bootstrap.css";
// import "./icons.css";

const User = () => {
  return (
    <div id="layout-wrapper">
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            {/* LOGO */}
            <div className="navbar-brand-box">
              <a href="index.html" className="logo logo-dark">
                <span className="logo-sm">
                  <img src="assets/images/logo-sm.png" alt="" height={23} />
                </span>
                <span className="logo-lg">
                  <img src="assets/images/logo.png" alt="" height={24} />
                </span>
              </a>
              <a href="index.html" className="logo logo-light">
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
                <img
                  src="assets/images/flags/us.jpg"
                  alt="Header Language"
                  height={16}
                />
              </button>
              <div className="dropdown-menu dropdown-menu-end">
                {/* item*/}
                <a
                  href="javascript:void(0);"
                  className="dropdown-item notify-item"
                >
                  <img
                    src="assets/images/flags/spain.jpg"
                    alt="user-image"
                    className="me-1"
                    height={12}
                  />{" "}
                  <span className="align-middle">Spanish</span>
                </a>
                {/* item*/}
                <a
                  href="javascript:void(0);"
                  className="dropdown-item notify-item"
                >
                  <img
                    src="assets/images/flags/germany.jpg"
                    alt="user-image"
                    className="me-1"
                    height={12}
                  />{" "}
                  <span className="align-middle">German</span>
                </a>
                {/* item*/}
                <a
                  href="javascript:void(0);"
                  className="dropdown-item notify-item"
                >
                  <img
                    src="assets/images/flags/italy.jpg"
                    alt="user-image"
                    className="me-1"
                    height={12}
                  />{" "}
                  <span className="align-middle">Italian</span>
                </a>
                {/* item*/}
                <a
                  href="javascript:void(0);"
                  className="dropdown-item notify-item"
                >
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
                <i className="uil-bell" />
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
                      <a href="#!" className="small">
                        {" "}
                        Mark all as read
                      </a>
                    </div>
                  </div>
                </div>
                <div data-simplebar style={{ maxHeight: "230px" }}>
                  <a href className="text-reset notification-item">
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
                  <a href className="text-reset notification-item">
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
                  <a href className="text-reset notification-item">
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
                  <a href className="text-reset notification-item">
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
                      href="javascript:void(0)"
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
                  src="assets/images/users/avatar-4.jpg"
                  alt="Header Avatar"
                />
                <span className="d-none d-xl-inline-block ms-1 fw-medium font-size-15">
                  Billie Campos
                </span>
                <i className="uil-angle-down d-none d-xl-inline-block font-size-15" />
              </button>
              <div className="dropdown-menu dropdown-menu-end">
                {/* item*/}
                <a className="dropdown-item" href="#">
                  <i className="uil uil-user-circle font-size-18 align-middle text-muted me-1" />{" "}
                  <span className="align-middle">View Profile</span>
                </a>
                <a className="dropdown-item d-block" href="#">
                  <i className="uil uil-cog font-size-18 align-middle me-1 text-muted" />{" "}
                  <span className="align-middle">Settings</span>
                </a>
                <a className="dropdown-item" href="#">
                  <i className="uil uil-sign-out-alt font-size-18 align-middle me-1 text-muted" />{" "}
                  <span className="align-middle">Sign out</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* ========== Left Sidebar Start ========== */}
      <div className="vertical-menu">
        {/* LOGO */}
        <div className="navbar-brand-box">
          <a href="index.html" className="logo">
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
        <div data-simplebar className="sidebar-menu-scroll">
          {/*- Sidemenu */}
          <div id="sidebar-menu">
            {/* Left Menu Start */}
            <ul className="metismenu list-unstyled" id="side-menu">
              <li className="menu-title">Menu</li>
              <li>
                <a href="index.html">
                  <i className="bx bx-bar-chart-square" />
                  <span className="badge rounded-pill bg-danger float-end">
                    03
                  </span>
                  <span>Insights</span>
                </a>
              </li>
              <li>
                <a href="node-staking.html" className=" waves-effect">
                  <i className="bx bx-bolt-circle" />
                  <span>Node Staking</span>
                </a>
              </li>
              <li>
                <a href="metrics.html" className="waves-effect">
                  <i className="bx bx-layer" />
                  <span className="badge rounded-pill bg-warning float-end">
                    New
                  </span>
                  <span>Metrics</span>
                </a>
              </li>
              <li>
                <a href="node-income.html" className="waves-effect">
                  <i className="bx bx-dollar-circle" />
                  <span>Node Income</span>
                </a>
              </li>
              <li>
                <a href="users.html" className="waves-effect">
                  <i className="bx bx-user" />
                  <span>Active Users</span>
                </a>
              </li>
              <li>
                <a href="private-users.html" className="waves-effect">
                  <i className="bx bx-shield" />
                  <span>Private Users</span>
                </a>
              </li>
              <li>
                <a href="#" className="waves-effect">
                  <i className="bx bx-log-out-circle" />
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </div>
          {/* Sidebar */}
        </div>
      </div>
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
                  <h4 className="mb-0">Users</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="javascript: void(0);">SiteName</a>
                      </li>
                      <li className="breadcrumb-item active">Users</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {/* end page title */}
            <div className="card">
              <div className="card-header">
                <div className="card-widgets">
                  <div className="filselect">
                    <select className="form-select">
                      <option>Select Node</option>
                      <option>#53</option>
                      <option>#105</option>
                      <option>#21</option>
                      <option>All</option>
                    </select>
                  </div>
                </div>
                <h3 className="card-title">List of Users</h3>
              </div>
              <div className="collapse show" id="collapseCard2">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-centered table-nowrap mb-0">
                      <thead className="table-light">
                        <tr>
                          <th>Node #</th>
                          <th>Location</th>
                          <th>Elapsed Time</th>
                          <th>Time Remaining</th>
                          <th>Earnings</th>
                          <th>Type</th>
                          <th className="text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>#152</td>
                          <td>New York, USA</td>
                          <td>01:04:52</td>
                          <td>01:04:52</td>
                          <td>4 SOL</td>
                          <td>Private Dedicated</td>
                          <td className="text-center">
                            <a href="#">
                              <i className="fas fa-trash-alt text-danger fs-5" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>#152</td>
                          <td>New York, USA</td>
                          <td>01:04:52</td>
                          <td>01:04:52</td>
                          <td>4 SOL</td>
                          <td>Private Dedicated</td>
                          <td className="text-center">
                            <a href="#">
                              <i className="fas fa-trash-alt text-danger fs-5" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>#152</td>
                          <td>New York, USA</td>
                          <td>01:04:52</td>
                          <td>01:04:52</td>
                          <td>4 SOL</td>
                          <td>Private Dedicated</td>
                          <td className="text-center">
                            <a href="#">
                              <i className="fas fa-trash-alt text-danger fs-5" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>#152</td>
                          <td>New York, USA</td>
                          <td>01:04:52</td>
                          <td>01:04:52</td>
                          <td>4 SOL</td>
                          <td>Private Dedicated</td>
                          <td className="text-center">
                            <a href="#">
                              <i className="fas fa-trash-alt text-danger fs-5" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>#152</td>
                          <td>New York, USA</td>
                          <td>01:04:52</td>
                          <td>01:04:52</td>
                          <td>4 SOL</td>
                          <td>Private Dedicated</td>
                          <td className="text-center">
                            <a href="#">
                              <i className="fas fa-trash-alt text-danger fs-5" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>#152</td>
                          <td>New York, USA</td>
                          <td>01:04:52</td>
                          <td>01:04:52</td>
                          <td>4 SOL</td>
                          <td>Private Dedicated</td>
                          <td className="text-center">
                            <a href="#">
                              <i className="fas fa-trash-alt text-danger fs-5" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>#152</td>
                          <td>New York, USA</td>
                          <td>01:04:52</td>
                          <td>01:04:52</td>
                          <td>4 SOL</td>
                          <td>Private Dedicated</td>
                          <td className="text-center">
                            <a href="#">
                              <i className="fas fa-trash-alt text-danger fs-5" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>#152</td>
                          <td>New York, USA</td>
                          <td>01:04:52</td>
                          <td>01:04:52</td>
                          <td>4 SOL</td>
                          <td>Private Dedicated</td>
                          <td className="text-center">
                            <a href="#">
                              <i className="fas fa-trash-alt text-danger fs-5" />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* container-fluid */}
        </div>
        {/* End Page-content */}
        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">© SiteName.</div>
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

export default User;
