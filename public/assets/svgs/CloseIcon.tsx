export const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> & {
    color?: string;
    width?: number;
    height?: number;
} = ({
    color="#FFFFFF",
    width,
    height,
    ...props
}) => (
    <svg
        {...{props}}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...(width && { width: `${width}` })}
        {...(height && { height: `${height}` })}
    >
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill={color}/>
    </svg>
);