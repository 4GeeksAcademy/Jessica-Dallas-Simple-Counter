import React from 'react';

const SecondsCounter = ({ seconds }) => {
    const digits = String(seconds).padStart(6, '0').split('');

    return (
        <div className="container text-center mt-5">
            <div className="d-flex justify-content-center bg-dark text-white p-3 fs-1">
                <div className="digit-box d-flex align-items-center justify-content-center border border-secondary px-3 rounded">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 512 512"
                        fill="white"
                    >
                        <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                    </svg>
                </div>


                {digits.map((digit, index) => (
                    <div key={index} className="mx-2 bg-dark border border-secondary px-3 rounded">
                        {digit}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SecondsCounter;

