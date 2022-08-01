import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import '../../assets/main/topSlider.scss'
const Slider = () => {
    let music = [
        {
            title: 'Новая школа',
            description: 'Какой-то дескриптион',
            previewBy: 'OjBudy'
        },
        {
            title: 'Новая школа',
            description: 'Какой-то дескриптион',
            previewBy: 'OjBudy'
        },
        {
            title: 'Новая школа',
            description: 'Какой-то дескриптион',
            previewBy: 'OjBudy'
        },
        {
            title: 'Новая школа',
            description: 'Какой-то дескриптион',
            previewBy: 'OjBudy'
        },
        {
            title: 'Новая школа',
            description: 'Какой-то дескриптион',
            previewBy: 'OjBudy'
        },
        {
            title: 'Новая школа',
            description: 'Какой-то дескриптион',
            previewBy: 'OjBudy'
        },
        {
            title: 'Новая школа',
            description: 'Какой-то дескриптион',
            previewBy: 'OjBudy'
        },
        {
            title: 'Новая школа',
            description: 'Какой-то дескриптион',
            previewBy: 'OjBudy'
        },
        {
            title: 'Новая школа',
            description: 'Какой-то дескриптион',
            previewBy: 'OjBudy'
        },
        {
            title: 'Новая школа',
            description: 'Какой-то дескриптион',
            previewBy: 'OjBudy'
        },
        {
            title: 'Новая школа',
            description: 'Какой-то дескриптион',
            previewBy: 'OjBudy'
        }
    ]
    return (
        <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
        >
            {
                music.map((element, id)=>
                    <SwiperSlide key={id}>
                        <div className="preview-block">
                            <p><svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.04762 0C3.61905 0 0 4.95 0 9H19C19 5.4 16.5476 0 9.04762 0Z" fill="white" fillOpacity="0.15"/>
                                <path d="M9.50002 4C6.46246 4 4.00004 6.46244 4.00004 9.5L9.50002 15L15 9.5C15 6.46244 12.5376 4 9.50002 4Z" fill="white"/>
                            </svg>
                                Редакция</p>
                            <div className="preview"></div>
                        </div>
                        <div className="content">
                            <b>{ element.title }</b>
                            <p className='description'> { element.description } </p>
                            <p className='preview-by'>Обложка: { element.previewBy }</p>
                        </div>
                    </SwiperSlide>
                )
            }
        </Swiper>
    );
};

export default Slider;