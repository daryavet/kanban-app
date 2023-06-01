import React from 'react';
import css from './Select.module.scss'
import { useState } from 'react'


const SelectAddNewTask = props => {
    const [isOpen, setOpen] = useState(false)
   
    const {filteredTasks, allTasks, setTasks, status, setFormVisible } = props

    const handleOpen = () => setOpen(!isOpen);

    const classs = css.select__icn +' '+css.turn

    const handleSelectChange = (e) => {
        const updateTasks = allTasks.map(task => {
            if (task.id === e.target.value) {
                return {...task, status: status}
            }
            return task
        })
        setTasks(updateTasks)
        setFormVisible(false)
    }

    const handleBlur = e => {
        if (!e.target.style.value) {
            setFormVisible(false)
        }
    }
     

    return (
 
        <div className={css.select} onChange={handleSelectChange} onBlur={handleBlur} >
            <div className={css.select__header} onClick={handleOpen}>
                <span className={css.select__current}></span>
                {isOpen?<div className={classs}>&or;</div>:<div className={css.select__icn}>&or;</div>
}           
            </div>{
                isOpen && ( 
                <div id="select_body" className={css.select__body}>
               {filteredTasks.map(task => <option className={css.select__item} key={task.id} value={task.id} onClick={handleSelectChange}>{task.title}
               </option>)
               } 
            
            </div>)
            }

           
        </div>
    )
    // return (
    //     <select className={css.select} onChange={handleSelectChange} onBlur={handleBlur} >
    //     <option ></option>
    //      {filteredTasks.map(task => <option key={task.id} value={task.id}>{task.title}</option>)}
    //      </select>
    //  );
        }

export default SelectAddNewTask;