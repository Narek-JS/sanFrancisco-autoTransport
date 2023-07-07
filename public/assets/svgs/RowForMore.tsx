export const RowForMore: React.FC<React.SVGProps<SVGSVGElement>> & {
    color?: string
} = ({
    color='#E53E29',
    ...props
}) => (
    <svg
        {...{props}}
        width="21"
        height="16"
        viewBox="0 0 21 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289L14.3431 0.928932C13.9526 0.538408 13.3195 0.538408 12.9289 0.928932C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM0 9H20V7H0V9Z"
            fill={color}
        />
    </svg>
);