import React, { useEffect, useState } from "react";   
import { BrowserRouter, Link, Route, Routes, Navigate,useLocation, useParams } from 'react-router-dom';
import axios from "axios";

const MainCasino = () => { 

    const [providers, setProviders] = useState([]); 
    const [casinoGames, setCasinoGames] = useState([]); 

    useEffect(() => {
      const getProviders = async () => {
        try {
          const res = await axios.get("https://tipwin360-backend.herokuapp.com/api/casino/providers");  
          setProviders(res.data);  
        } catch (err) {}
      };
      getProviders();
    }, []);


    const {
        provider = 'novomatic', 
    } = useParams();
    
    useEffect(() => {  
        const getCasinoGames = async () => {
            try {
              const res = await axios.get(`http://localhost:5001/api/casino/games/${provider}`);  
              setCasinoGames(res.data);  
            } catch (err) {}
          };
          getCasinoGames();
        
    }, [provider]);

    
    return (
    <div>   

        
    <div className='all-games-page-component__content' style={{display:'block !important'}}>
        
        <div className='all-games-grid-nav'>
            <div className='all-games-grid-nav__menu'>
                <div className='all-games-grid-nav__wrapper'> 

                    {providers.map((provider) => (
                        <Link to={`/casino/provider/${provider.key}`}>
                            <div className='all-games-grid-nav__link'>
                                <img src={provider.img} className='all-games-grid-nav__link-image'/>
                                <div className='all-games-grid-nav__link-text'>{provider.title}</div>
                            </div> 
                        </Link>
                    ))}
                </div>
            </div>
        </div>

        <div className='all-games-grid'> 
                        
            {casinoGames ? ( casinoGames.map((game) => (
                <Link to="/casino/game/">
                    <div className='all-game-pod'>
                        <div className='all-game-pod__items'>
                            <div className='all-game-pod__image-container'>
                                <img src={game.img} className='all-game-pod__image' />
                            </div>
                            <div className='all-game-pod__title'>{game.title}</div>
                        </div>
                    </div>
                </Link>  
            ))) : "LOADING..."}
            
        </div>

        </div>
        

    </div>
  );
};

export default MainCasino;