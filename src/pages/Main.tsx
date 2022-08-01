import React from 'react';
import TopSlider from '../components/main/slider'
import '../assets/main/index.scss'
const Main = () => {
    return (
          <div className="main page">
              <div className="banner">
                  Реклама
              </div>
              <section className="top-chart">
                  <div className="global-wrapper">
                      <b className="content-title"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23.8995 4.10059L14.0001 10.3206L4.10059 4.10059L10.3206 14.0001L4.10059 23.8995L14.0001 17.6795L23.8995 23.8995L17.6795 14.0001L23.8995 4.10059Z" fill="#B6FB46"/>
                          <path d="M8.38288 13.9999L7.33141 12.3264L0 13.9999L7.33141 15.6734L8.38288 13.9999Z" fill="#B6FB46"/>
                          <path d="M19.6172 13.9999L20.6687 15.6734L28.0001 13.9999L20.6687 12.3264L19.6172 13.9999Z" fill="#B6FB46"/>
                          <path d="M12.3267 20.6687L14.0002 28.0001L15.6736 20.6687L14.0002 19.6172L12.3267 20.6687Z" fill="#B6FB46"/>
                          <path d="M15.6736 7.33141L14.0002 0L12.3267 7.33141L14.0002 8.38288L15.6736 7.33141Z" fill="#B6FB46"/>
                      </svg>
                          Топ-чарт</b>
                      <div className="filter">
                          <ul>
                              <li>Мейнстрим</li>
                              <li>Восходящее</li>
                              <li>Хиты 2022</li>
                          </ul>
                      </div>
                      <div className="chart-slider">
                          <TopSlider/>
                      </div>
                  </div>
              </section>
              <section className="appropriate">
                  <div className="global-wrapper">
                        <b className="appropriate-title">Подходящее вам</b>
                        <p className="appropriate-description">На основе того, что вы слушали последние 2 месяца</p>
                  </div>
              </section>
          </div>
    );
};



export default Main;