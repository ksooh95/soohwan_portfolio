import React from 'react';

const PortModal = ({ closeModal }) => {
    return (
        <div className="modal">
            <div className="modal_header">
                <h1>SooHwan Portfolio</h1>
                <button
                    onClick={() => {
                        closeModal('');
                    }}
                >
                    <img src="/close.png" alt="" />
                </button>
            </div>
            <div className="modal_content">
                <div className="l_con"></div>
                <div className="r_con"></div>
            </div>
        </div>
    );
};

export default PortModal;
