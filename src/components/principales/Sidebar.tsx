function Sidebar(props:any) {
    return (
        <div className="sidebar-wrapper sidebarsidebar-theme"> 
            <nav id="sidebar"> 
                <div className="navbar-nav theme-brand flex-row  text-center">
                    <div className="nav-logo">
                        <div className="nav-item theme-logo">
                            <a href="./index.html">
                                <img src="/assets/img/logo.svg" className="navbar-logo" alt="logo" />
                            </a>
                        </div>
                        <div className="nav-item theme-text">
                            <a href="./index.html" className="nav-link"> CORK </a>
                        </div>
                    </div>
                    <div className="nav-item sidebar-toggle">
                        <div className="btn-toggle sidebarCollapse">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-left"><polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline></svg>
                        </div>
                    </div>
                </div>
                <div className="shadow-bottom"></div>
                <ul className="list-unstyled menu-categories" id="accordionExample">

                    <li className="menu active">
                        <a href="./table-basic.html" aria-expanded="false" className="dropdown-toggle">
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-layout"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                                <span>Demos</span>
                            </div>
                        </a>
                    </li>
                 
                    
                </ul>
                
            </nav>

        </div>
    );
}

export default Sidebar;