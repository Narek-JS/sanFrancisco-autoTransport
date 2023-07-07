import React from "react";

export const BurgerCloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <svg {...{props}} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_472_3709)">
      <circle cx="12.5" cy="12" r="11" stroke="#FFFFFF" strokeWidth="2"></circle>
      <line x1="1" y1="-1" x2="16.0366" y2="-1" transform="matrix(0.678282 0.734801 -0.678282 0.734801 6.5 6)" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"></line>
      <line x1="1" y1="-1" x2="16.0366" y2="-1" transform="matrix(0.678282 -0.734801 0.678282 0.734801 6.94434 19)" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"></line>
    </g>
    <defs>
      <clipPath id="clip0_472_3709">
        <rect width="24" height="24" fill="white" transform="translate(0.5)"></rect>
      </clipPath>
      <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#F83600" />
        <stop offset="100%" stopColor="#FE8C00" />
      </linearGradient>
    </defs>
  </svg>
);