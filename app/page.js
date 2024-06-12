'use client';

import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="main">
            <div className="con1">
                <div className="container">
                    <div className="mark">
                        <h1>Front-End</h1>
                        <h2>프론트엔드 개발자 김수환</h2>
                    </div>
                    {/* <span className="line"></span>
                    <h3>
                    안녕하세요.<br></br> 신입 프론트엔드 개발자 <span>김수환</span>입니다.
                </h3> */}
                    <div className="introduce">
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
                                <span className="i_menu">이력서</span>{' '}
                                <span className="i_con">
                                    <a href="https://my.surfit.io/w/529780883" target="_blank">
                                       🔗 https://my.surfit.io/w/529780883
                                    </a>
                                </span>
                            </li>
                        </ul>
                        <div className="me"></div>
                    </div>
                </div>
            </div>
            <div className="con2"></div>
            <div className="con2"></div>
            <div className="con2"></div>
            <div className="con2"></div>
            <div className="con2"></div>
            <div className="con2"></div>
        </div>
    );
}
