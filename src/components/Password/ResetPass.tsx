import React from 'react';
import { Link } from 'react-router-dom';

const ResetPass = () => {
  return (
    <div className="flex flex-col gap-8 ">
      <div className="text-center">
        <h1 className="main-title">Reset your password</h1>
        <p className="main-paragraph">
          Enter your email and we’ll send you a link to <br /> reset your
          password
        </p>
      </div>
      <div>
        <label className="font-extrabold text-[16px] mb-[10px]">Email</label>
        <div className="flex items-center relative ">
          <div className="icon-Input">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none">
              <path
                d="M18.75 0.5H0.75C0.551088 0.5 0.360322 0.579018 0.21967 0.71967C0.0790176 0.860322 0 1.05109 0 1.25V14C0 14.3978 0.158035 14.7794 0.43934 15.0607C0.720644 15.342 1.10218 15.5 1.5 15.5H18C18.3978 15.5 18.7794 15.342 19.0607 15.0607C19.342 14.7794 19.5 14.3978 19.5 14V1.25C19.5 1.05109 19.421 0.860322 19.2803 0.71967C19.1397 0.579018 18.9489 0.5 18.75 0.5ZM9.75 8.48281L2.67844 2H16.8216L9.75 8.48281ZM7.00406 8L1.5 13.0447V2.95531L7.00406 8ZM8.11406 9.01719L9.23906 10.0531C9.37743 10.1801 9.55842 10.2506 9.74625 10.2506C9.93408 10.2506 10.1151 10.1801 10.2534 10.0531L11.3784 9.01719L16.8159 14H2.67844L8.11406 9.01719ZM12.4959 8L18 2.95438V13.0456L12.4959 8Z"
                fill="#F09272"
              />
            </svg>
          </div>
          <input
            type="email"
            placeholder="name@gmail.com"
            className="primary-input"
          />
        </div>
      </div>
      <Link to={'/emailsent'} className="primary-button text-center">
        Send link to email
      </Link>
    </div>
  );
};

export default ResetPass;
