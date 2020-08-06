import React from 'react';

import wppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';


export interface Teacher {
    name: string,
    avatar: string,
    bio: string,
    cost: number,
    id: number,
    subject: string,
    whatsapp: string
}

interface TeacherItemProps {
    teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {
    return (
        <article className="teacher-item">
        <header>
            <div>
                <img src={teacher.avatar} alt={teacher.name}/>
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </div>
        </header>
        <p> {teacher.bio} </p>
        <footer>
            <p>Preço/hora: <strong>R$ {teacher.cost}</strong></p>
            <button type="button">
                <img src={wppIcon} alt="ícone Whatsapp"/>
                Entrar em contato.
            </button>
        </footer>
    </article>

    );
}

export default TeacherItem;