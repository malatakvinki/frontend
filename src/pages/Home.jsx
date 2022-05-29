import React, { useState } from "react";  
import { BrowserRouter, Link, Route, Routes, Navigate,useLocation } from 'react-router-dom';
import CasinoComponent from "../components/CasinoComponent";
import Navbar from "./Navbar"; 


const Home = () => { 

    var win_location = window.location.href
    console.log(win_location);
    function waitForElm(selector) {
        return new Promise(resolve => {
            if (document.querySelector(selector)) {
                return resolve(document.querySelector(selector));
            }
    
            const observer = new MutationObserver(mutations => {
                if (document.querySelector(selector)) {
                    resolve(document.querySelector(selector));
                    observer.disconnect();
                }
            });
    
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        });
    }

    const [casinoOpen, setCasinoOpen] = useState(false);

    var sports = document.getElementById('sports-main-root'); 
    var sports_elements = document.getElementsByClassName('kr-qendra'); 
 
    if(sports==null){
        window.location.reload();
    }else{
        setTimeout(() => {
            if(sports_elements.length===0){
                window.location.reload();
            } 
        }, 3000);
    }



    waitForElm('.hm-HeaderModule_Narrow').then((elm) => {
        console.log(elm.remove());
        setCasinoOpen(true);
    });

    waitForElm('.hpf-Wrapper').then((elm) => {
        console.log(elm.remove());
    }); 

    waitForElm('.sm-HeaderPod_Nav').then((elm) => {
        // var menu_nav_bar_links = document.querySelector('.sm-HeaderPod_Nav');
        // var InPlayPro = document.querySelector('.InPlayPro');
        // var CasinoPro = document.querySelector('.CasinoPro');
        // console.log(InPlayPro);
        // if(InPlayPro===null){
        //     menu_nav_bar_links.innerHTML = menu_nav_bar_links.innerHTML + "<a href='/?Key=0_0_0_0_0_0_4_0#type=InPlay'><div class='sm-HeaderLink InPlayPro' style='opacity:1'>In Play</div></a>"
        // }

        // if(CasinoPro===null){
        //     menu_nav_bar_links.innerHTML = menu_nav_bar_links.innerHTML + "<div class='sm-HeaderLink CasinoPro' style='opacity:0'></div>"
        // }
    }); 
    
    
    

    return (
        <div>  
            {casinoOpen &&
                (
                    <> 
                        <Navbar />    
                    </>
                )
            }
            {casinoOpen &&
                (
                    <> 
                        <CasinoComponent />    
                    </>
                )
            }
        </div>
    );
};

export default Home;