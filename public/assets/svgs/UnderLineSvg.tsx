export const UnderLineSvg: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => (
    <div style={{ overflowX: "clip" }}>
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="99%"
            height="2"
            viewBox="0 0 1220 2"
            fill="none"
        >
            <path
                d="M1 1H1219"
                stroke="#E53E29"
                strokeOpacity="0.4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="20 20"
            />
        </svg>
    </div>
);