import React from 'react';

import wppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

interface TeacherItemProps {
    
}

const TeacherItem: React.FC<TeacherItemProps> = (props) => {
    return (
        <article className="teacher-item">
        <header>
            <div>
                <img src="https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png" alt=""/>
                <div>
                    <strong>Victor Giovannoni</strong>
                    <span>Computação</span>
                </div>
            </div>
        </header>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br/>
            Facilis temporibus quas eos voluptates omnis recusandae perspiciatis autem, <br/>
            consectetur deserunt placeat ipsa unde. Aliquam ducimus atque distinctio libero quo quibusdam ut!
        </p>
        <footer>
            <p>Preço/hora: <strong>R$50,00</strong></p>
            <button type="button">
                <img src={wppIcon} alt="ícone Whatsapp"/>
                Entrar em contato.
            </button>
        </footer>
    </article>

    );
}

export default TeacherItem;