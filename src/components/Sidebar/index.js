import "./index.css"
import { useState } from "react";

const Sidebar = ({ menuOption, setMenuOption, setIsCategory, refresh, setRefresh, getObjectData, trigSidebar,  selectMenu, isSideBarOpen }) => {
    // const [isOpen, setOpen] = useState(true)

    // const trigSidebar = () => {
    //     setOpen(!isOpen);
    // }

    // const handleMenu = (index) => {
    //     if (index === 6) getObjectData();
    //     let tempData = menuOption;
    //     setOpen(false);
    //     for (let i = 0; i < tempData.length; i++) {
    //         if (i === index) {
    //             tempData[i] = true;
    //         }
    //         else {
    //             tempData[i] = false;
    //         }
    //     }
    //     setRefresh(refresh + 1);
    //     setMenuOption([...tempData])
    //     setIsCategory(false)
    // }

    return <div className="sidebar" style={{
        width: isSideBarOpen ? '230px' : '60px'
    }}>
        <div className="button-group">
            <div>
                <div onClick={trigSidebar} className='trig-btn mb-5 py-3 w-100 border-bottom'>
                    <img className="p-2 ms-2" src="assets/ui/dashes.svg"></img>
                </div>
                <div onClick={() => selectMenu(0)} className='trig-btn w-100'>
                    <img className="p-2" src="assets/ui/layout.png" style={{ width: "60px"}}></img>
                    <div className="ml-2" style={{ display: (isSideBarOpen ? "" : "none"), color: "black" }} >Room Layout
                    </div>
                </div>
                <div onClick={() => selectMenu(1)} className='trig-btn w-100'>
                    <img className="p-2" src="assets/ui/element.png" style={{ width: "60px"}}></img>
                    <div className="ml-2" style={{ display: (isSideBarOpen ? "" : "none"), color: "black" }} >Bathroom Elements
                    </div>
                </div>
                <div onClick={() => selectMenu(2)} className='trig-btn w-100'>
                    <img className="p-2" src="assets/ui/bathroom.png" style={{ width: "60px"}}></img>
                    <div className="ml-2" style={{ display: (isSideBarOpen ? "" : "none"), color: "black" }} >Bathroom Products
                    </div>
                </div>
                <div onClick={() => selectMenu(3)} className='trig-btn w-100'>
                    <img className="p-2" src="assets/ui/style.png" style={{ width: "60px"}}></img>
                    <div className="ml-2" style={{ display: (isSideBarOpen ? "" : "none"), color: "black" }} > Styling
                    </div>
                </div>
                <div onClick={() => selectMenu(4)} className='trig-btn w-100'>
                    <img className="p-2" src="assets/ui/product.png" style={{ width: "60px"}}></img>
                    <div className="ml-2" style={{ display: (isSideBarOpen ? "" : "none"), color: "black" }} > Product Summary
                    </div>
                </div>
            </div>
            <div>
                <div onClick={() => selectMenu(5)} className='trig-btn w-100'>
                    <img className="p-2" src="assets/ui/calendar.png" style={{ width: "60px"}}></img>
                    <div className="ml-2" style={{ display: (isSideBarOpen ? "" : "none"), color: "black" }} > Book a consultation
                    </div>
                </div>
                <div onClick={() => selectMenu(6)} className='trig-btn w-100'>
                    <img className="p-2" src="assets/ui/Download.png" style={{ width: "60px"}}></img>
                    <div className="ml-2" style={{ display: (isSideBarOpen ? "" : "none"), color: "black" }} > Save
                    </div>
                </div>
            </div>
        </div>

    </div>
}

export default Sidebar;