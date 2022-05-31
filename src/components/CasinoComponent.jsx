
import React from "react";  
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom';

import LuckyLadyCasinoImg from "../img/luckyladyscharmdeluxe6.jpeg";
import BookOfRaCasinoImg from "../img/bookofradeluxe6.jpeg";
import SizhotCasinoImg from "../img/sizhot.png";

const CasinoComponent = () => { 
  return (
    <div className="instat-games">
        <div>
            <div className="ig-InstantGamesModule_Title">Casinooooo</div>
            <div className="ig-HorizontalScroller">
                <a href="/casino">

                    <div className="ig-HorizontalScroller_HScroll">
                        <div className="ig-InstantGamesModule_GamesContainer ig-h100 ig-HorizontalScroller_ScrollContent">
                        {/* <div className="ig-GameItem"><img src={SizhotCasinoImg}alt="alt" className="ig-GameItem_Image" /></div> */}

                        {/* <div className="ig-GameItem"><img src={BookOfRaCasinoImg} alt="alt" className="ig-GameItem_Image" /></div> */}
                        {/* <div className="ig-GameItem"><img src={LuckyLadyCasinoImg} alt="alt" className="ig-GameItem_Image" /></div> */}
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>

    );
};

export default CasinoComponent;     