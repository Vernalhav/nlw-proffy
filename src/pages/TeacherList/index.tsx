import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';

function TeacherList() {

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    function handleTeacherSearch(e: FormEvent){
        e.preventDefault();
        console.log(week_day, time);
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
                        value={week_day}
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
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    );
}

export default TeacherList;