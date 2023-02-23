import BreadCrumbs from "./BreadCrumbs";
import Sidebar from "./Sidebar";

function Container(props: any) {
  return (
    <div className="main-container " id="container">
      <div className="overlay"></div>
      <div className="search-overlay"></div>

      {/* Aqui ba el sliderbar */}
      <Sidebar />
      {/* BEGIN CONTENT AREA */}
      <div id="content" className="main-content">
        <div className="layout-px-spacing">
          <div className="middle-content container-xxl p-0">
            <BreadCrumbs />
            {/* CONTENT AREA  */}
            <div className="row layout-top-spacing">
              {/* <div className="col-12">
                            <div className="alert alert-arrow-right alert-icon-right alert-light-success alert-dismissible fade show mb-4" role="alert">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line></svg>
                                <strong>Kick Start you new project with ease!</strong> Learn more about Starter Kit by refering to the <a target="_blank" href="https://designreset.com/cork/documentation/getting-started.html">Documentation</a>
                            </div>
                        </div> */}

              <div className="col-md-12">{props.children}</div>
            </div>
            {/* <!-- CONTENT AREA --> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
