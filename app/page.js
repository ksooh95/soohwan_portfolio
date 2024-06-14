'use client';

import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="main">
            <div className="con1">
                <div className="mark">
                    <h1>
                        FRONTEND<br></br>DEVELOPER
                    </h1>
                    <h2>- FRONT END</h2>
                </div>
                {/* <div className="introduce" data-aos="fade" data-aos-duration="1000" data-aos-delay="500">
                    <h1>About me</h1>
                    <ul>
                        <li>
                            <span className="i_menu">이름</span> <span className="i_con">김수환</span>
                        </li>
                        <li>
                            <span className="i_menu">생년월일</span> <span className="i_con">1995. 09. 04</span>
                        </li>
                        <li>
                            <span className="i_menu">거주지</span> <span className="i_con">인천광역시</span>
                        </li>
                        <li>
                            <span className="i_menu">이메일</span> <span className="i_con">ksooh95@gmail.com</span>
                        </li>
                        <li>
                            <span className="i_menu">이력서</span>{' '}
                            <span className="i_con">
                                <a href="https://my.surfit.io/w/529780883" target="_blank">
                                    🔗 https://my.surfit.io/w/529780883
                                </a>
                            </span>
                        </li>
                    </ul>
                    <div className="me">
                        <div className="scroll_down">밑으로</div>
                    </div>
                </div> */}
                <div className="my_pic"></div>
                <div className="mark2">
                    <h2> - FRONT END</h2>
                    <h1>
                        KIM<br></br> SOO HWAN
                    </h1>
                </div>
                <div className="sc_down">
                    <span className="ar">↓</span>
                    <span className="ar_t">SCROLL</span>
                </div>
            </div>
            <div className="con2">
                <div className="container">
                    <div className="about_me">
                        <h1 className="side_tit">About me</h1>
                        <div className="right_con1">
                            <div className="sec">
                                <h2>About me</h2>
                                <ul>
                                    <li>
                                        <span>이름 :</span>
                                        <span> 김수환</span>
                                    </li>
                                    <li>
                                        <span>생년월일 :</span>
                                        <span> 1995. 09. 04</span>
                                    </li>
                                    <li>
                                        <span>이력서 :</span>
                                        <span className="li_i">
                                            <a href="https://my.surfit.io/w/529780883" target="_blank">
                                                🔗 https://my.surfit.io/w/529780883 ➤
                                            </a>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="sec">
                                <h2>Career</h2>
                                <div className="ca">
                                    <h3>주식회사 클라우드코리아</h3>
                                    <p>2022.07 ~ 2023.06</p>
                                    <p>웹퍼블리셔</p>
                                </div>
                                <div className="ca">
                                    <h3>주식회사 누리아이</h3>
                                    <p>2020.10 ~ 2021.05</p>
                                    <p>웹퍼블리셔</p>
                                </div>
                            </div>
                        </div>
                        <div className="right_con2">
                            <div className="sec">
                                <h2>Education</h2>
                                <div className="ca">
                                    <h3>엘리스 부트캠프</h3>
                                    <p>2023.09 ~ 2024.02</p>
                                    <p>SW Engineer 트랙 6기</p>
                                </div>
                                <div className="ca">
                                    <h3>가톨릭관동대학교</h3>
                                    <p>2014.03 ~ 2020.02</p>
                                    <p>전자정보통신공학부, 정보통신공학과</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
}
