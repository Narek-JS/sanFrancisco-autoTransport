
const MailIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({...props}) => (
    <svg
        {...{props}}
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M24 12L16 17L8 12V10L16 15L24 10M24 8H8C6.89 8 6 8.89 6 10V22C6 22.5304 6.21071 23.0391 6.58579 23.4142C6.96086 23.7893 7.46957 24 8 24H24C24.5304 24 25.0391 23.7893 25.4142 23.4142C25.7893 23.0391 26 22.5304 26 22V10C26 9.46957 25.7893 8.96086 25.4142 8.58579C25.0391 8.21071 24.5304 8 24 8Z"
            fill="#E53E29"
        />
    </svg>
);

export { MailIcon };