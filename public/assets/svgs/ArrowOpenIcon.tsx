export const ArrowOpenIcon: React.FC<React.SVGProps<SVGSVGElement> & { rotate?: number }> = ({ rotate = 0 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="15"
        viewBox="0 0 20 15"
        fill="none"
        style={{ transform: `rotate(${rotate}deg)`, transition: 'all 0.3s' }}
    >
        <path
            d="M18 1L9.65217 13L2 0.999998"
            stroke="#E53E29"
            strokeWidth="3"
            strokeLinejoin="round"
        />
    </svg>
);