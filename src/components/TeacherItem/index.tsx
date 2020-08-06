import React from 'react';

import api from '../../services/api';

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

    function createNewConnection(){
        api.post('connections', {
            user_id: teacher.id
        })
    }

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
            <a onClick={createNewConnection}
                target="_blank"
                rel="noopener noreferrer"
                href={`https://wa.me/${teacher.whatsapp}`}>
                <img src={wppIcon} alt="ícone Whatsapp"/>
                Entrar em contato.
            </a>
        </footer>
    </article>
    );
}

export default TeacherItem;