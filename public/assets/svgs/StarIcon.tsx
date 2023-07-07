import { useEffect, useState } from "react";


export const StarIcon: React.FC<React.SVGProps<SVGSVGElement> & { precent?: number}> = ({ precent = 100, ...props }) => {
    
    const [ precentState, setPrecentState ] = useState<Record<'precent', number>>({ precent });

    useEffect(() => {setPrecentState({precent})}, []);

    return (
        <svg {...{props}} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset={`${precentState.precent}%`} stopColor="rgba(255,214,10,1)" />
                    <stop offset={`${precentState.precent}%`} stopColor="rgba(255,255,255,1)" />
                </linearGradient>
            </defs>
            <path
                d="M9.93275 16.5542L5.11798 19.575C4.90528 19.716 4.68291 19.7764 4.45088 19.7562C4.21884 19.7361 4.01581 19.6556 3.84178 19.5146C3.66775 19.3736 3.5324 19.1976 3.43571 18.9865C3.33903 18.7747 3.31969 18.5378 3.3777 18.276L4.65391 12.5667L0.390228 8.73021C0.196864 8.54896 0.0762045 8.34233 0.0282502 8.11033C-0.0204776 7.87914 -0.00616872 7.65278 0.071177 7.43125C0.148523 7.20972 0.264541 7.02847 0.419232 6.8875C0.573924 6.74653 0.786624 6.6559 1.05733 6.61563L6.68423 6.10208L8.85958 0.725001C8.95626 0.483334 9.10631 0.302083 9.30973 0.18125C9.51238 0.0604168 9.72005 0 9.93275 0C10.1455 0 10.3535 0.0604168 10.5569 0.18125C10.7596 0.302083 10.9092 0.483334 11.0059 0.725001L13.1813 6.10208L18.8082 6.61563C19.0789 6.6559 19.2916 6.74653 19.4463 6.8875C19.601 7.02847 19.717 7.20972 19.7943 7.43125C19.8717 7.65278 19.8864 7.87914 19.8384 8.11033C19.7897 8.34233 19.6686 8.54896 19.4753 8.73021L15.2116 12.5667L16.4878 18.276C16.5458 18.5378 16.5265 18.7747 16.4298 18.9865C16.3331 19.1976 16.1978 19.3736 16.0237 19.5146C15.8497 19.6556 15.6467 19.7361 15.4146 19.7562C15.1826 19.7764 14.9602 19.716 14.7475 19.575L9.93275 16.5542Z"
                fill="url(#myGradient)"
            />
        </svg>
    );
};
