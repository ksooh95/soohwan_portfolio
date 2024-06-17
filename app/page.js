'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import PortModal from './components/port_modal';

export default function Home() {
    useEffect(() => {
        AOS.init();
    }, []);

    const [modal, setModal] = useState('');
    const closeModal = () => {
        setModal('');
    };

    const project = [
        {
            tag: '개인 프로젝트',
            img: '/port.png',
            title: 'SooHwan Portfolio',
            description:
                '김수환의 개인 포트폴리오 사이트, 개인프로젝트와 팀프로젝트 등 한데 모아둔 포트폴리오 사이트입니다.',
            status: ['배포예정', '업데이트중', '개인 프로젝트'],
            git: 'https://github.com/ksooh95/soohwan_portfolio',
            deploy: null,
        },
        {
            tag: '개인 프로젝트',
            img: '/smdb.png',
            title: 'SMDB MOVIE',
            description:
                'NextJS 환경에서 혼자 만들어본 TMDB OPEN API 를 사용하여 현재 개봉영화, 인기있는 TV시리즈, 현재 검색 트렌드 등을 소개해주는 사이트입니다.',
            status: ['배포완료', '업데이트중', '개인 프로젝트'],
            git: 'https://github.com/ksooh95/SMDB',
            deploy: 'https://vercel-smdb.vercel.app/',
        },
        {
            tag: '팀 프로젝트',
            img: '/pop.png',
            title: 'Pop, spot !',
            description:
                '엘리스 부트캠프 2차 팀프로젝트때 팀원들과 제작했던 팝업스토어의 정보와 예약을 할수있는 홈페이지 입니다.',
            status: ['배포중단', '제작완료', '팀 프로젝트'],
            git: '',
            deploy: null,
        },
        {
            tag: '개인 프로젝트',
            img: '/memo.png',
            title: 'MEMO APP',
            description: 'NextJs 환경에서 MongoDB를 사용하여 프론트와,백 둘다 처음 혼자 만들어본 간단한 메모 앱입니다.',
            status: ['배포완료', '업데이트중', '개인 프로젝트'],
            git: 'https://github.com/ksooh95/memoapp',
            deploy: 'https://memoapp-sable.vercel.app/list',
        },
        {
            tag: '팀 프로젝트',
            img: '/panda.png',
            title: 'Panda Flower',
            description: '엘리스 부트캠프 팀프로젝트 1차 때 만든 카테고리별로 꽃을 판매하는 사이트를 제작하였습니다.',
            status: ['배포중단', '제작완료', '팀 프로젝트'],
            git: '',
            deploy: null,
        },
    ];

    return (
        <div className="main">
            <div className="con1">
                <div className="mark">
                    <h1>
                        FRONTEND<br></br>DEVELOPER
                    </h1>
                    <h2>- FRONT END</h2>
                </div>
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
                <div className="update">
                    <p>Update 2024.06.15</p>
                </div>
            </div>
            <div className="con2">
                <div className="container">
                    <div className="about_me">
                        <h1 className="side_tit">About me</h1>
                        <div className="right_con1">
                            <div className="sec">
                                <h2>Info</h2>
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
                    <div className="about_me pro">
                        <h1 className="side_tit">Project</h1>
                        <div className="right_con1">
                            <div className="pro_sec_wrap">
                                {project.map((a, ai) => {
                                    return (
                                        <div key={ai} className="pro_sec">
                                            <div className="pro_con">
                                                <div className="pro_con_hover">
                                                    <h3>{a.title}</h3>
                                                    <button
                                                        className="more_btn"
                                                        onClick={() => {
                                                            setModal(a.title);
                                                            console.log(modal);
                                                        }}
                                                    >
                                                        자세히보기
                                                    </button>
                                                    {a.deploy === null ? null : (
                                                        <a href={a.deploy} target="_blank">
                                                            배포사이트 바로가기
                                                        </a>
                                                    )}

                                                    <a href={a.git} target="_blank">
                                                        GitHub 바로가기
                                                    </a>
                                                </div>
                                                <img src={a.img} alt="" />
                                                <div className="pro_info">
                                                    <h3>{a.title}</h3>
                                                    <p>{a.description}</p>
                                                    <div className="pro_info2">
                                                        {a.status.map((e, ei) => {
                                                            return <span key={ei}>{e}</span>;
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {modal === '' ? null : <PortModal closeModal={closeModal} />}
        </div>
    );
}
