// src/components/Home.jsx

import React from "react";
import { useNavigate } from "react-router-dom";


import { FaPlay } from "react-icons/fa6";
import { MdEmojiPeople } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { MdEmail } from "react-icons/md";


import logo from '../assets/logo.png';
import esLogo from '../assets/esLogo.png';
import image from '../assets/image.png'; 
import andreza from '../assets/andreza.png'; 


import './Home3.css'; 

export default function Home() {
    const navigate = useNavigate();

    const handleAndrezaClick = () => { 
        navigate('/home2'); 
        console.log('Imagem de Andreza clicada! Navegando para outra tela.');
    };

    // NOVA FUNÇÃO para o botão Voltar
    const handleGoBack = () => {
        navigate(-1); 
        console.log('Botão Voltar clicado!');
    };

    return (
        <div className="container">
            <img src={logo} className="logo" alt="Application Logo" aria-label="Application Logo" />
            <img src={esLogo} className="esLogo" alt="World Illustration" aria-label="World Illustration" />
            <img src={image} className="image" alt="Text" aria-label="Text" />

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
                className="andreza" // Classe CSS para a imagem da Andreza
                onClick={handleAndrezaClick} // Função de clique da Andreza
                alt="Voltar para a tela de login"
                role="button"
                tabIndex={0}
            />
            <button
                className="back-button" 
                onClick={handleGoBack}
                role="button"
                tabIndex={0}
            >
                Voltar
            </button>

        </div>
    );
}