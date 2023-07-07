export const ArrowIcon: React.FC<React.SVGProps<SVGSVGElement>> & {
  rotate?: number;
} = ({ rotate = 45, ...props }) => (
  <i>
    <svg
      {...{props}}
      style={{
        transform: `rotate(${rotate}deg)`,
        transition: "all .3s"
      }}
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="50"
        height="50"
        rx="15"
        fill="#E53E29"
      />
      <path
        d="M14 33L25.4783 17L36 33"
        stroke="#FDFDFF"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  </i>
);



