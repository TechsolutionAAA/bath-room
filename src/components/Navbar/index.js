import { isDisabled } from "@testing-library/user-event/dist/utils";
import { Link, useNavigate } from "react-router-dom";
import { clearPositionData } from "../../utils/cacheData";
import "./index.css";

const Navbar = (props) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    localStorage.setItem("bathroom_login", false);
    localStorage.setItem("bathroom_isOwner", false);
    localStorage.setItem('new_plan', false);
    clearPositionData();
    navigate("/login");
    props.init();
  };

  return (
    <div className="header">
      <div className="d-flex justify-content-between p-2  h-100">
        <div className="logo flex flex-row">
          <img
            src="logo.png"
            className="h-[45px] cursor-pointer mr-0 logoImg"
            alt=""
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/";
            }}
          />
          <img
            src="logo1.png"
            className="h-[45px] cursor-pointer"
            alt=""
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/";
            }}
          />
        </div>
        <div className="b_login">
          <div className="save_part">
            <div className="save_name">
              <p>{props.curRoomTitle}</p>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="1.2"><path d="M14 5L8 12L2 5" stroke="#434648" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              {!props.isDashBoard &&
                  <div className="toggle_menu">
                    <div className="save pl-[10px]" onClick={() => props.handleProductSave()}>Save</div>
                    <div className="rename pl-[10px]" onClick={() => props.Rename()}>Rename</div>
                    <div className="delete pl-[10px]" onClick={() => window.location.href = "/"}>Delete</div>
                  </div>
              }
            </div>
            <div className="share">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-4 lg:mr-3 lg:w-[24px] lg:h-[24px]"><path d="M17.811 3.99695L20.9999 7.18578L17.811 10.3746" stroke="#434648" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.1263 13.3443V18.9247C19.1263 19.3233 18.7482 19.7219 18.37 19.7219H4.75632C4.37816 19.7219 4 19.3233 4 18.9247V7.76382C4 7.2855 4.37816 6.96661 4.75632 6.96661H7.78159" stroke="#434648" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 14C9 10.1023 12.3325 7 16.3152 7H20" stroke="#434648" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              <p>Share</p>
            </div>
          </div>
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="1.2" class="mr-2"><g clip-path="url(#clip0_2916:9967)"><path d="M7.99777 9.643C9.57572 9.643 10.8549 8.36381 10.8549 6.78585C10.8549 5.2079 9.57572 3.92871 7.99777 3.92871C6.41981 3.92871 5.14062 5.2079 5.14062 6.78585C5.14062 8.36381 6.41981 9.643 7.99777 9.643Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.11719 14.0997C3.62718 13.2626 4.34394 12.5707 5.19857 12.0906C6.05319 11.6106 7.01695 11.3584 7.99719 11.3584C8.97742 11.3584 9.94118 11.6106 10.7958 12.0906C11.6504 12.5707 12.3672 13.2626 12.8772 14.0997" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.99888 15.9284C12.1016 15.9284 15.4275 12.6025 15.4275 8.49986C15.4275 4.39717 12.1016 1.07129 7.99888 1.07129C3.8962 1.07129 0.570312 4.39717 0.570312 8.49986C0.570312 12.6025 3.8962 15.9284 7.99888 15.9284Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_2916:9967"><rect width="16" height="16" fill="white" transform="translate(0 0.5)"></rect></clipPath></defs></svg>
          {localStorage.getItem("bathroom_login") === "true" ? (
            <button
              style={{ borderColor: "white" }}
              onClick={(e) => handleClick(e)}
              className="logoutBtn mr-2 font-bold"
            >
              Logout
            </button>
          ) : (
            <Link to="/login"><p className="font-bold">Login/Register</p></Link>
          )}
        </div>
      </div>
      <div className="border-[1px] h-[1px] border-gray-400 z-[9999]" />
    </div>
  );
};

export default Navbar;
