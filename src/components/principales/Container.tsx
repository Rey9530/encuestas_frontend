import BreadCrumbs from "./BreadCrumbs";
import Sidebar from "./Sidebar"; 
 
function Container(props: any) {
  return (
    <>
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
              <div className="row layout-top-spacing"> {props.children}</div>
              {/* <!-- CONTENT AREA --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Container;
