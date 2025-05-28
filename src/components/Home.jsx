// src/components/Home.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


import { FaPlay } from "react-icons/fa6";
import { MdEmojiPeople } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { MdEmail } from "react-icons/md";


import logo from '../assets/logo.png';
import esLogo from '../assets/esLogo.png';
import ODS from '../assets/ODS.png';
import icnmenu from '../assets/icnmenu.png';
import menuopcoesImage from '../assets/menuopcoes.png'; 



import './Home.css';

export default function Home() {
    const navigate = useNavigate();
    const [showMenuOpcoes, setShowMenuOpcoes] = useState(false);

    const handleToggleMenuOpcoes = () => {
        setShowMenuOpcoes(!showMenuOpcoes);
        console.log('Alternando visibilidade do menu de opções.');
    };

   
    const goToHome2FromMenuOpcoes = () => {
        navigate('/home2');
        console.log('Navegando para Home2 via menuopcoes.');
     
    };


    const goToPreCadastro = () => {
        navigate('/pre-cadastro'); 
        console.log('Navegando para PreCadastro.');
    };

    return (
        <div className="container">
           
            <img src={logo} className="logo" alt="Application Logo" aria-label="Application Logo" />
            <img src={esLogo} className="esLogo" alt="World Illustration" aria-label="World Illustration" />
            <img src={ODS} className="ODS" alt="Sustainable Development Goals" aria-label="SDG Icon" />

         
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

            <div className="icnmenu-button-container">
                <img
                    src={icnmenu}
                    className="icnmenu-button"
                    onClick={handleToggleMenuOpcoes}
                    alt="Menu Icon"
                    role="button"
                    tabIndex={0}
                />
            </div>
            
            <img
                src={menuopcoesImage}
                className={`menu-below-logo ${showMenuOpcoes ? 'is-visible' : ''}`}
                onClick={goToHome2FromMenuOpcoes}
                alt="Menu de Opções Clicável"
                role="button"
                tabIndex={0}
            />
    
            <button
                className="back-to-PreCadastro-button" 
                onClick={goToPreCadastro}
                role="button"
                tabIndex={0}
            >
                Voltar
            </button>
            
        </div>
    );
}