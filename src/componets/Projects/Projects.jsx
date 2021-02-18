import React, { useState } from 'react'
import './Projects.css'
import $ from 'jquery'

import Ball from '../../img/ball.png'
import Bot from '../../img/bot.png'
import chat from '../../img/chat.png'
import converter from '../../img/convertervalute.png'
import shop from '../../img/internetshop.png'
import gips from '../../img/gipsyard.jpg'
import aviaTicket from '../../img/aviaticket.png'
import changeTablet from '../../img/changeTablet.png'

export const Projects = () => {
    let arrProjects = [
        
        { id: 8, link: "https://ozzbabym.github.io/changeTablet/", photo: changeTablet, name: 'Change Tablet', description: 'Тестовое задание от работодателя, присудствует табло, выбираем номер ячейки, которая должна быть белой и в ней синяя цифра курсивом, остальные ячейки должны перекраситься в тот цвет, который выбран.' },
        { id: 7, link: "https://ozzbabym.github.io/aviaticket/", photo: aviaTicket, name: 'Avia Ticket', description: 'Тестовое задание от работодателя, отображается список билетов и филтрация для них, билеты берутся из JSON файла.' },
        { id: 1, link: "", photo: Bot, name: 'Tennis Bot', description: 'Бот работает на сервере, парсит базу 1xBet, собирает нужную инфу и присылает сообщение в Телеграм' },
        { id: 2, link: "https://ozzbabym.github.io/ChatMessages/#/", photo: chat, name: 'Chat Messages', description: 'Чат написан на React/Redux , сервер работает на NodeJs данные хранятся в MongoDB, не хватает webSocket.' },
        { id: 3, link: "https://ozzbabym.github.io/Valuteconverter/#/", photo: converter, name: 'Converter Valute', description: 'Тестовое задание от работодателя, выводит через открытое API данные с валютами, можно добавить в избранное, на другой странице можно конвертировать валюту в рубли.' },
        { id: 4, link: "https://ozzbabym.github.io/internetshop/", photo: shop, name: 'Internet Shop', description: 'Интернет магазин написан на React/Redux, есть категории товаров, можно добавить в корзину и в корзине оформить заказ, после можно увидеть в истории, историю заказов' },
        { id: 5, link: "https://ozzbabym.github.io/shopshop/", photo: gips, name: 'GipsYard', description: 'Интернет магазин для продажи декоративных стен' },
        { id: 6, link: "https://ozzbabym.github.io/BallSquared/", photo: Ball, name: 'BallSquared', description: 'Игра для телефона, вращай квадрат, собирай синиe кружки, не попади в центр.' }
    ]


    let arrMapProject = arrProjects.map(item =>
                <div id='arr' className='projects' key={item.id}>
                    <div>{item.name}</div>
                    <div>{item.description}</div>
                        <div><a href={item.link}>жми сюда, перейти на {item.name}</a></div>

                    <img src={item.photo} />

                </div>
    )

      const [count, setCount] = useState(0)

        const left=()=>{
            setCount(count - 1)
            $('.left').fadeOut(0)
            $('.left').fadeIn(300)
        }
        const right=()=>{
            setCount(count + 1)
            $('.right').fadeOut(0)
            $('.right').fadeIn(300)

        }



    return (
        <div>
            {window.innerWidth < 600 &&
                <div>

                    {arrProjects.map(item =>
                        <div className='projects' key={item.id}>
                            <div>{item.name}</div>
                            <div>{item.description}</div>
                            <div><a href={item.link}>жми сюда, перейти на {item.name}</a></div>

                            <img src={item.photo} />

                        </div>
                    )}

                </div>
            }
            {window.innerWidth > 600 &&
                <div className='arrow'>{count >= 1 &&
                    <button className='left' onClick={left}>⇚</button>}
                    {arrMapProject.length-1>count &&
                    <button className='right' onClick={right}>⇛</button>}

                    {arrMapProject[count]}
                    

                </div>
            }
        </div>
    )
}