// src/components/Home2.jsx

import React from "react";
import { useNavigate } from "react-router-dom";


import { FaPlay } from "react-icons/fa6";
import { MdEmojiPeople } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { MdEmail } from "react-icons/md";


import logo from '../assets/logo.png';
import esLogo from '../assets/esLogo.png';
import ods2 from '../assets/ods2.png';
import andreza from '../assets/andreza.png';
import imageods from '../assets/imageods.png';



import './Home2.css'; 

export default function Home2() { 
const navigate = useNavigate();


const handleAndrezaClick = () => { 
 navigate('/home3'); 
        console.log('Imagem de Andreza clicada em Home2! Navegando para Home3.');
};

  const handleGoBackToHome = () => {
    navigate('/home'); 
    console.log('Botão Voltar clicado em Home2! Navegando para Home.');
  };

    return (
        <div className="container">
            <img src={logo} className="logo" alt="Application Logo" aria-label="Application Logo" />
            <img src={esLogo} className="esLogo" alt="World Illustration" aria-label="World Illustration" />
           <img src={ods2} className="ods2" alt="TextODS" aria-label="TextODS" />
           <img src={imageods} className="imageods" alt="ImageODS" aria-label="ImageODS" />
          

            <div className="playIcon" role="button" aria-label="Play Content">
                <FaPlay size={24} />
            </div>
            
            <div className="peopleIcon" role="button" aria-label="User Profiles">
                <MdEmojiPeople size={24} />
            </div>
            
            <div className="notificationIcon" role="button" aria-label="Notifications">
                <IoIosNotifications size={24} />
            </div>
            
            <div className="emailIcon" role="button" aria-label="Messages">
                <MdEmail size={24} />
            </div>
        
            <img
                src={andreza}
                className="andreza"
                onClick={handleAndrezaClick} 
                alt="Navegar para Home3"
                role="button"
                tabIndex={0}
 />
            <button
className="back-to-home-button" 
 onClick={handleGoBackToHome} 
 role="button"
tabIndex={0}
 >
 Voltar
 </button>

 </div>

 );
}