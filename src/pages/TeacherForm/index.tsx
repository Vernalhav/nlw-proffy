import React, {useState, FormEvent} from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
};


function TeacherForm() {

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [bio, setBio] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    function handleClassCreation(e: FormEvent){
        e.preventDefault();

        api.post('', {
            name,
            avatar,
            bio,
            whatsapp,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(()=>{
            alert('Cadastro realizado com sucesso!');
        }).catch(()=>{
            alert('Erro no cadastro');
        });
    }

    function setScheduleItemValue(index: number, field: string, value: string){
        const updatedSchedule = scheduleItems.map((scheduleItem, i: number) => {
            if (i === index){
                return {...scheduleItem, [field]: value};
            }
            return scheduleItem;
        });

        setScheduleItems(updatedSchedule);
    }

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
                <form onSubmit={handleClassCreation}>
                    <fieldset>
                        <legend>Seus dados</legend>
                            <Input
                                name="name"
                                label="Nome completo"
                                value={name}
                                onChange={(e) => {setName(e.target.value)}}
                            />
                            <Input
                                name="avatar"
                                label="URL da foto de perfil"
                                value={avatar}
                                onChange={(e) => {setAvatar(e.target.value)}}
                            />
                            <Input
                                name="whatsapp"
                                label="Whatsapp"
                                value={whatsapp}
                                onChange={(e) => {setWhatsapp(e.target.value)}}
                            />
                            <Textarea 
                                name="bio"
                                label="Bio"
                                value={bio}
                                onChange={(e) => {setBio(e.target.value)}}
                            />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>
                            <Select
                                name="subject"
                                label="Matéria"
                                onChange = {(e) => {setSubject(e.target.value)}}
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
                                value = {cost}
                                onChange = {(e) => {setCost(e.target.value)}}
                            />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis
                            <button type="button" onClick={addNewScheduleItem}>+ Novo horário</button>
                        </legend>

                        { scheduleItems.map((scheduleItem: ScheduleItem, i: number) => {
                            return (
                                <div className="schedule-item" key={scheduleItem.week_day}>
                                    <Select
                                        name="week_day"
                                        label="Dia da semana"
                                        onChange={e => {setScheduleItemValue(i, 'week_day', e.target.value)}}
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
                                        name='from'
                                        label="das"
                                        type="time"
                                        value={scheduleItem.from}
                                        onChange={e => {setScheduleItemValue(i, 'from', e.target.value)}}
                                    />
                                    <Input
                                        name='to'
                                        label="até"
                                        type="time"
                                        value={scheduleItem.to}
                                        onChange={e => {setScheduleItemValue(i, 'to', e.target.value)}}
                                    />
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
                        <button type="submit">
                            Salvar cadastro
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    );
}

export default TeacherForm;