import React from "react";
import $, { data } from "jquery";
import "../App.css";


export default function WallType(wallindex, types) {
    // eslint-disable-next-line default-case
    switch (types) {
        case 1: $("#type1").css({display: "block"}); break;
        case 2: $("#type2").css({display: "block"}); break;
        case 3: $("#type3").css({display: "block"}); break;
        case 4: $("#type4").css({display: "block"}); break;
        case 5: $("#type5").css({display: "block"}); break;
        case 6: $("#type6").css({display: "block"}); break;    
    }
    return(
        <div>
            <div id="type1">
                  <button onClick={()=>{wallindex = 1}} style={{backgroundColor: "green", margin:"3px"}}>1</button>
                  <button onClick={()=>{wallindex = 2}} style={{backgroundColor: "green", margin:"3px"}}>2</button>
                  <button onClick={()=>{wallindex = 3}} style={{backgroundColor: "green", margin:"3px"}}>3</button>
                  <button onClick={()=>{wallindex = 4}} style={{backgroundColor: "green", margin:"3px"}}>4</button>
            </div>
            <div id="type2"> 
                  <button onClick={()=>{wallindex = 1}} style={{backgroundColor: "green", margin:"3px"}}>1</button>
                  <button onClick={()=>{wallindex = 2}} style={{backgroundColor: "green", margin:"3px"}}>2</button>
                  <button onClick={()=>{wallindex = 3}} style={{backgroundColor: "green", margin:"3px"}}>3</button>
                  <button onClick={()=>{wallindex = 4}} style={{backgroundColor: "green", margin:"3px"}}>4</button>
                  <button onClick={()=>{wallindex = 5}} style={{backgroundColor: "green", margin:"3px"}}>5</button>
                  <button onClick={()=>{wallindex = 6}} style={{backgroundColor: "green", margin:"3px"}}>6</button>
            </div>
            {/* <div id="type3">
                <div style={{width: "70%", height: "5%", backgroundColor: "blue", display: "none"}} onClick={()=>{wallindex = 1}}></div>
                    <div className="d-flex flex-row" style={{width: "70%", height: "50%"}}>
                        <div style={{width: "1.4%", backgroundColor: "blue"}} onClick={()=>{wallindex = 2}}></div>
                        <div style={{width: "100%"}}></div>
                        <div style={{width: "1.4%", backgroundColor: "blue"}} onClick={()=>{wallindex = 3}}></div>
                    </div>              
                <div style={{width: "70%", height: "5%", backgroundColor: "blue"}} onClick={()=>{wallindex = 4}}></div>
            </div>
            <div id="type4">
                <div style={{width: "70%", height: "5%", backgroundColor: "blue", display: "none"}} onClick={()=>{wallindex = 1}}></div>
                    <div className="d-flex flex-row" style={{width: "70%", height: "50%"}}>
                        <div style={{width: "1.4%", backgroundColor: "blue"}} onClick={()=>{wallindex = 2}}></div>
                        <div style={{width: "100%"}}></div>
                        <div style={{width: "1.4%", backgroundColor: "blue"}} onClick={()=>{wallindex = 3}}></div>
                    </div>              
                <div style={{width: "70%", height: "5%", backgroundColor: "blue"}} onClick={()=>{wallindex = 4}}></div>
            </div>
            <div id="type5">
                <div style={{width: "70%", height: "5%", backgroundColor: "blue", display: "none"}} onClick={()=>{wallindex = 1}}></div>
                    <div className="d-flex flex-row" style={{width: "70%", height: "50%"}}>
                        <div style={{width: "1.4%", backgroundColor: "blue"}} onClick={()=>{wallindex = 2}}></div>
                        <div style={{width: "100%"}}></div>
                        <div style={{width: "1.4%", backgroundColor: "blue"}} onClick={()=>{wallindex = 3}}></div>
                    </div>              
                <div style={{width: "70%", height: "5%", backgroundColor: "blue"}} onClick={()=>{wallindex = 4}}></div>
            </div>
            <div id="type6">
                <div style={{width: "70%", height: "5%", backgroundColor: "blue", display: "none"}} onClick={()=>{wallindex = 1}}></div>
                    <div className="d-flex flex-row" style={{width: "70%", height: "50%"}}>
                        <div style={{width: "1.4%", backgroundColor: "blue"}} onClick={()=>{wallindex = 2}}></div>
                        <div style={{width: "100%"}}></div>
                        <div style={{width: "1.4%", backgroundColor: "blue"}} onClick={()=>{wallindex = 3}}></div>
                    </div>              
                <div style={{width: "70%", height: "5%", backgroundColor: "blue"}} onClick={()=>{wallindex = 4}}></div>
            </div> */}
        </div>

    );
}