import React, {useState} from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
};


function TeacherForm() {

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    function addNewScheduleItem(){
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ]);
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrível que você quer dar aulas!"
                description="O primeiro passo é preencher esse formulário"
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                        <Input
                            name="name"
                            label="Nome completo"
                        />
                        <Input
                            name="avatar"
                            label="URL da foto de perfil"
                        />
                        <Input
                            name="whatsapp"
                            label="Whatsapp"
                        />
                        <Textarea 
                            name="bio"
                            label="Biografia"
                        />
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>
                        <Select
                            name="subject"
                            label="Matéria"
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
                        <Input
                            name="cost"
                            label="Custo da hora aula"
                        />
                </fieldset>

                <fieldset>
                    <legend>
                        Horários disponíveis
                        <button type="button" onClick={addNewScheduleItem}>+ Novo horário</button>
                    </legend>

                    { scheduleItems.map((scheduleItem: ScheduleItem) => {
                        return (
                            <div className="schedule-item" key={scheduleItem.week_day}>
                                <Select
                                    name="week_day"
                                    label="Dia da semana"
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
                                <Input name='from' label="das" type="time"/>
                                <Input name='to' label="até" type="time"/>
                            </div>
                        );})
                    }

                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante"/>
                        Importante <br />
                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>
            </main>
        </div>
    );
}

export default TeacherForm;