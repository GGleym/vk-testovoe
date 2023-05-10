import {InputSelect} from "./forms/InputSelect";
import styles from './styles/Forms.module.css'
import {options} from "./optionsSelect/towerOptions";
import {floorsOptions} from "./optionsSelect/florsOptions";
import {roomOptions} from "./optionsSelect/roomOptions";
import DatePicker from 'react-datepicker'
import {useState} from "react";
import React from 'react';
import "react-datepicker/dist/react-datepicker.css";

function App() {
    const [startDate, setStartDate] = useState(new Date())
    const [firstSelect, setFirstSelect] = useState()
    const [secondSelect, setSecondSelect] = useState()
    const [thirdSelect, setThirdSelect] = useState()
    const [text, setText] = useState('')


    const clearForm = (e) => {
        e.preventDefault()
        setFirstSelect(null);
        setSecondSelect(null);
        setThirdSelect(null);
        setStartDate(new Date());
        setText('')
    };

    const submitForm = (e) => {
        e.preventDefault()
        console.log('Не успел дорешать задачку :(. ВК, я хочу к вам <3')
    }


  return (
    <div className={styles.formWrapper}>
        <form action="#"  className={styles.mainForm}>
            <h1 className={styles.header}>Бронирование в VK</h1>
            <p className={styles.formDescription}>Здесь вы можете забронировать комнату в одной из башен VK</p>
            <InputSelect upText={'Выберите башню'} options={options} placeholder={'Выбрать башню...'} onChange={(e) => setFirstSelect(e.value)}></InputSelect>
            <InputSelect upText={'Выберите этаж'} options={floorsOptions()} placeholder={'Выбрать этаж...'}  onChange={(e) => setSecondSelect(e.value)}></InputSelect>
            <InputSelect upText={'Выберите переговорную'} options={roomOptions} placeholder={'Выбрать переговорную...'}  onChange={(e) => setThirdSelect(e.value)}></InputSelect>
            <div className={styles.date}>
                <p className={styles.upText}>Выберите дату бронирования</p>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}  showTimeSelect/>
            </div>

            <div className={styles.textArea}>
                <textarea name="textarea" value={text} onChange={(e) => setText(e.target.value)} id="1" cols="65" rows="10" placeholder={'Можете оставить какое-нибудь замечание...'}></textarea>
            </div>
            <div style={{margin: '10px auto', width: '30%'}}>
                <button className={styles.formBtn}  type={'submit'} >Забронировать</button>
            </div>
            <div style={{width: '20%', margin: '20px auto'}}>
                <button className={styles.formBtn} onClick={(e) => clearForm(e)}>Очистить все поля</button>
            </div>
        </form>
    </div>
  );
}

export default App;
