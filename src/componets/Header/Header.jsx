import React from 'react'
import './Header.css'
import menu from '../../img/burgermenu.jpg'
import photo from '../../img/profile.jpg'


import $ from 'jquery'
import { NavLink } from 'react-router-dom'



export const Header = () => {
    


    const modalShow = () => {
        
        if(document.getElementById('modal').style.transform==='translateX(0px)'){
            document.getElementById('modal').style='z-index: -333;'
            document.getElementById('modal').style='transform: translateX(2000px)'
            
            
        }else{
            document.getElementById('modal').style='z-index: 999;'
            document.getElementById('modal').style='transform: translateX(0px)'
            
            
        }
        
       
    }
    

    return (
        <div>
            <div className='header'>
                <div className='js'>
                    JavaScript Developer
                </div>
                {window.innerWidth > 600 && <div>
                    <button ><NavLink className='btnAbout' to='/' style={{ color: "black" }} onClick={()=>{
                        $('#modal').fadeOut(500) 
                        $('#modalFace').fadeOut(500)
                        $('.btnAbout').fadeOut(0)
                        $('.btnAbout').fadeIn(300)
                        }}>About me</NavLink></button>
                    <button><NavLink className='btnProject' to='/projects' style={{ color: "black" }} onClick={()=>{
                        $('#modal').fadeOut(500); 
                        $('#modalFace').fadeOut(500)
                        $('.btnProject').fadeOut(0)
                        $('.btnProject').fadeIn(300)
                        }}>My projects</NavLink></button>
                    <button onClick={()=>{
                        $('#modalFace').fadeIn(500)
                        $('.btnContacts').fadeOut(0)
                        $('.btnContacts').fadeIn(300)
                        }    
                        }><span className='btnContacts' >Contacts</span></button>
                </div>}
                {window.innerWidth < 600 &&
                    <div>

                        <img src={menu} onClick={modalShow} />


                    </div>
                }
                <div className='modal' id='modal'>
                    <ul>
                        <li><NavLink to='/' style={{ color: "white" }} onClick={()=>{modalShow(); $('#modalFace').fadeOut(500)}}>About me</NavLink></li>
                        <li><NavLink to='/projects' style={{ color: "white" }}onClick={()=>{modalShow(); $('#modalFace').fadeOut(500)}}>My projects</NavLink></li>
                        <li onClick={()=>{
                            $('#modalFace').fadeIn(500)
                            modalShow()
                            }}>Contacts</li>
                    </ul>
                </div>

                <div id='modalFace' className='modalFace'>
                    <div className='modalFaceIn'>
                        <ul>
                            <li>Имя: Иван</li>
                            <li>Телефон: 8-999-999-16-20</li>
                            <li>e-mail: OzzOzzz@mail.ru </li>
                            <li>город: Москва</li>
                            <li><img className='myPhoto' src={photo}/></li>
                            <div onClick={()=>$('#modalFace').fadeOut(500)}>Закрыть</div>
                        </ul>
                        
                    </div>
                </div>


            </div>
        </div>
    )
}