import React, { useState } from "react";  
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom';

const Navbar = () => {  

    const [opeendMenu, setOpenMenu] = useState(false);
    var sm = document.querySelector('.sm'); 
    var swSite = document.querySelector('.sw-Site'); 
    var Main = document.querySelector('.Main'); 
    // var InstantGames = document.querySelector(".instat-games");
    
    console.log(sm);
    const handleMenuClick = (e) => { 
        // if(opeendMenu === false){
        //     setOpenMenu(true);
        //     sm.className += " sm-Show";
        //     swSite.className += " state-SidebarVisible";
        //     Main.className += " MainAside";
        //     // InstantGames.className += " MenuActiveInstantGames";

        // }else{
        //     setOpenMenu(false);
        //     sm.classList.remove('sm-Show');
        //     swSite.classList.remove('state-SidebarVisible');
        //     Main.classList.remove('MainAside');
        //     // InstantGames.classList.remove('MenuActiveInstantGames');
        // }
        // console.log(opeendMenu);
    } 

    return (
        <div>    
            <div className={"hm-HeaderModule_Narrow-main"+`${opeendMenu === true ? " ActiveMenu" : "" }`}>
            <div className="hm-ProductPod">
                <div className="hm-ProductPod_HideBtn">X</div>
                <div className="hm-ProductPod_Scrollable">
                    <div className="ns_BasteUI-Cell hm-ProductLink_Link hm-ProductLink_Current ns_BasteUI-NoFloat">Sporte</div>
                    <div className="ns_BasteUI-Cell hm-ProductLink_Link ns_BasteUI-NoFloat">Live</div>
                    <div className="ns_BasteUI-Cell hm-ProductLink_Link ns_BasteUI-NoFloat">Kazino</div>
                </div>
            </div>
            <div className="hm-HeaderPod_LoadComplete hm-HeaderPod">
                <div className="hm-HeaderPod_Nav">
                    
                  <div className={"hm-HeaderLink hm-HeaderLinkAtoz_SidebarLauncher"+`${opeendMenu === true ? " MenuLunched" : "" }`} onClick={(e) => handleMenuClick(e)}>A-Z</div>
                  <div className="hm-HeaderLink hm-HeaderLinkLive">
                        <a href="/?Key=0_0_0_0_0_0_4_0#type=InPlay" style={{textDecoration:"none", color:'white'}}>
                            <div>Live</div>
                        </a> 
                    </div> 

                    <a href="/" style={{textDecoration:"none"}}>
                        <div className="hm-HeaderLink hm-HeaderLinkLogo"> 
                            <div className='logomain'><label style={{fontWeight:'bold', fontSize:'20px'}}>tipwin</label><span style={{color:'#ffdf1b', fontSize:'20px', fontWeight:'bold'}}>360</span></div>
                        </div>
                    </a>
                    <div className="hm-HeaderLinkHome_Cover"></div>
                    <div className="hm-HeaderLink hm-HeaderLinkJoin">
                        <div>Register</div>
                    </div>
                    <div className="hm-HeaderLink hm-HeaderLinkLogin_Launcher">
                        <div>Login</div>
                    </div>
                    <div className="hm-HeaderLink hm-HeaderLinkMyBets ns_BasteUI-Hide">
                        <div className="hm-HeaderLinkMyBets_Text">My Bets</div>
                    </div>
                    <div className="hm-HeaderLink hm-Header_Search"></div>
                    <div className="hm-HeaderLink hm-HeaderLinkUser_AccountLauncher ns_BasteUI-Hide">
                        <div className="hm-HeaderLinkUser_UserInfo">
                        <div className="hm-HeaderLinkUser_Icon"></div>
                        <div className="hm-HeaderLinkUser_UserBalance">
                            <div className="hm-HeaderLinkUser_Amount">100.00</div>
                            <div className="hm-HeaderLinkUser_Currency">EUR</div>
                        </div>
                        </div>
                    </div>
                    {/* <div className="ns_BasteUI-Cell hm-VijaCon" style="top: 43px; height: 3px; transform-origin: left center 0px; transition: all 100ms ease 0s; width: 222px; left: 444px;"></div> */}
                </div>
            </div>
            </div>

            

        </div>
    );
};

export default Navbar;     