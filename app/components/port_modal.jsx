'use client';

import React, { useState } from 'react';

const PortModal = ({ closeModal, project }) => {
    const [largeImage, setLargeImage] = useState(null);

    const handleImageClick = (imgUrl) => {
        setLargeImage(imgUrl);
    };

    const closeLargeImageModal = () => {
        setLargeImage(null);
    };
    return (
        <div className="modal">
            <div className="modal_back"></div>
            <div className="modal_body">
                <div className="modal_header">
                    <h1>{project.title}</h1>
                    <button
                        onClick={() => {
                            closeModal('');
                        }}
                    >
                        <img src="/close.png" alt="" />
                    </button>
                </div>
                <div className="modal_content">
                    <div className="l_con">
                        <img src={project.img} alt="" />
                    </div>
                    <div className="r_con">
                        <p>{project.description2}</p>
                        <ul>
                            <li>
                                <span>Stacks : {project.stack.join(', ')}</span>
                            </li>
                            <li>
                                <span>Deployment : Vercel</span>
                            </li>
                            <li>
                                <span>
                                    배포 주소 :{' '}
                                    <a href={project.deploy === null ? '/' : project.deploy}>
                                        {project.deploy === null ? '배포중단' : project.deploy}
                                    </a>{' '}
                                </span>
                            </li>
                            <li>
                                <span>
                                    깃허브 :{' '}
                                    <a href={project.git === null ? '/' : project.git} target="_blank">
                                        {project.git === null ? '-' : project.git}
                                    </a>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="more_img">
                    {project.subimg
                        ? project.subimg.map((subimg, i) => {
                              return (
                                  <div className="subimg">
                                      <div className="subimg_hover" onClick={() => handleImageClick(subimg)}>
                                          <img src="/scale2.png" alt="" />
                                      </div>
                                      <img src={subimg} alt="" key={i} />
                                  </div>
                              );
                          })
                        : ''}
                </div>
            </div>
            {largeImage && (
                <div className="large_image_modal">
                    <div className="large_image_back" onClick={closeLargeImageModal}></div>
                    <div className="large_image_body">
                        <img src={largeImage} alt="Large" />
                        <button onClick={closeLargeImageModal}>
                            <img src="/close.png" alt="Close" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PortModal;
