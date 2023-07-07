
const Conditional: React.FC<{
    condition: any;
    fallback?: () => React.ReactNode,
    children: React.ReactNode
}> = ({ condition, fallback, children }) => {
    if(Boolean(condition)) {
        return <>{children}</>;
    } else if (fallback) {
        return <>{fallback()}</>;
    };

    return null;
};

export { Conditional };