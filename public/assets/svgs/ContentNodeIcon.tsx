export const ContentNodeIcon: React.FC<React.SVGProps<SVGSVGElement> & { color?: string }> = ({
    color = "#072765",
    ...props
}) => (
    <svg
        {...props}
        width="16"
        height="38"
        viewBox="0 0 16 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M8 0C3.58172 -1.93129e-07 1.93129e-07 3.58172 0 8C-1.93129e-07 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 1.93129e-07 8 0ZM6.5 8L6.5 38L9.5 38L9.5 8L6.5 8Z"
            fill={color}
        />
    </svg>
)
