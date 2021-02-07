import React from 'react'
import './Header.css'
import menu from '../../img/burgermenu.jpg'
import photo from '../../img/profile.jpg'


import $ from 'jquery'
import { NavLink } from 'react-router-dom'



export const Header = () => {
    


    const modalShow = () => {

        $('#modal').slideToggle(500)
       
    }
    

    return (
        <div>
            <div className='header'>
                <div>
                    JavaScript Developer
                </div>
                {window.innerWidth > 600 && <div>
                    <button><NavLink to='/' style={{ color: "black" }} onClick={()=>{$('#modal').fadeOut(500); $('#modalFace').fadeOut(500)}}>About me</NavLink></button>
                    <button><NavLink to='/projects' style={{ color: "black" }} onClick={()=>{$('#modal').fadeOut(500); $('#modalFace').fadeOut(500)}}>My projects</NavLink></button>
                    <button onClick={()=>{$('#modalFace').fadeIn(500)}}>Contacts</button>
                </div>}
                {window.innerWidth < 600 &&
                    <div>

                        <img src={menu} onClick={modalShow} />


                    </div>
                }
                <div className='modal' id='modal'>
                    <ul>
                        <li><NavLink to='/' style={{ color: "white" }} onClick={()=>{$('#modal').fadeOut(500); $('#modalFace').fadeOut(500)}}>About me</NavLink></li>
                        <li><NavLink to='/projects' style={{ color: "white" }}onClick={()=>{$('#modal').fadeOut(500); $('#modalFace').fadeOut(500)}}>My projects</NavLink></li>
                        <li onClick={()=>{
                            $('#modalFace').fadeIn(500)
                            modalShow()
                            }}>Contacts</li>
                    </ul>
                </div>

                <div id='modalFace' className='modalFace'>
                    <div className='modalFace'>
                        <ul>
                            <li>Имя: Иван</li>
                            <li>Телефон: 8-999-999-16-20</li>
                            <li>e-mail: OzzOzzz@mail.ru </li>
                            <li>город: Москва</li>
                            <li><img src={photo}/></li>
                            <div onClick={()=>$('#modalFace').fadeOut(500)}>Закрыть</div>
                        </ul>
                        
                    </div>
                </div>


            </div>
        </div>
    )
}