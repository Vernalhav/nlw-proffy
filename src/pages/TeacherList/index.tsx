import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import api from '../../services/api';

import './styles.css';


function TeacherList() {
    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    async function handleTeacherSearch(e: FormEvent){
        e.preventDefault();

        const response = await api.get('classes', {
            params: { subject, week_day, time }
        });

        setTeachers(response.data);
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os Profys disponíveis">
               <form id="search-teachers" onSubmit={handleTeacherSearch}>
                   <Select
                        name="subject"
                        label="Matéria"
                        onChange={(e) => {setSubject(e.target.value)}}
                        options={[
                            { value: "Artes", label: "Artes" },
                            { value: "Biologia", label: "Biologia" },
                            { value: "Ciências", label: "Ciências" },
                            { value: "Matemática", label: "Matemática" },
                            { value: "Literatura", label: "Literatura" },
                            { value: "Português", label: "Português" },
                            { value: "Ingles", label: "Ingles" },
                            { value: "Física", label: "Física" },
                            { value: "Química", label: "Química" },
                            { value: "Computação", label: "Computação" },
                            { value: "Geografia", label: "Geografia" },
                            { value: "Filosofia", label: "Filosofia" },
                            { value: "História", label: "História" },
                            { value: "Sociologia", label: "Sociologia" }
                        ]}
                    />
                    <Select
                        name="week_day"
                        label="Dia da semana"
                        onChange={(e) => {setWeekDay(e.target.value)}}
                        options = {[
                            { value: "0", label: "Domingo" },
                            { value: "1", label: "Segunda" },
                            { value: "2", label: "Terça" },
                            { value: "3", label: "Quarta" },
                            { value: "4", label: "Quinta" },
                            { value: "5", label: "Sexta" },
                            { value: "6", label: "Sábado" }
                        ]}
                    />
                    <Input
                        name="time"
                        label="Horário"
                        type="time"
                        value={time}
                        onChange={(e) => {setTime(e.target.value)}}
                    />
                    <button type="submit">
                        Go
                    </button>
               </form>
            </PageHeader>

            <main>
                { teachers.map((teacher: Teacher) => {
                    return <TeacherItem teacher={teacher} key={teacher.id} /> 
                })}
            </main>
        </div>
    );
}

export default TeacherList;