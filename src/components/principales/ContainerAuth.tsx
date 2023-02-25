import BreadCrumbs from "./BreadCrumbs";
import Sidebar from "./Sidebar";

function ContainerAuth(props: any) {
  return (
    <>
      <div className="auth-container d-flex">
        <div className="container mx-auto align-self-center">
          {props.children}
        </div>
      </div>
    </>
  );
}

export default ContainerAuth;
