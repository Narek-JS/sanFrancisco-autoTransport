
import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import classes from './index.module.css';
import classNames from 'classnames';

interface MotionProps {
    whileInView?: CSSProperties;
    initial?: CSSProperties;
};

interface IProps extends React.HTMLProps<HTMLDivElement> {
    children: React.ReactNode;
};

function getHtmlProps(_: IProps & MotionProps): IProps {
    const props = {..._};

    delete props.whileInView;
    delete props.initial;

    return props;
};

const Motion: React.FC<IProps & MotionProps> = (props) => {
    const classN = classNames(props.className, classes.motion);
    const HtmlProps = getHtmlProps(props);
    const initialStyles: CSSProperties = {...props.style, ...props.initial};
    const [ styles, setStyles ] = useState<CSSProperties>(initialStyles);
    const ref = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const options = {
            root: null,
            threshold: 0.5,
        };
    
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setStyles({...styles, ...props.whileInView})
                } else {
                    setStyles(initialStyles);
                };
            });
        }, options);
        
        ref.current && observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            {...HtmlProps}
            style={styles}
            className={classN}
            ref={ref}
        >
            {props.children}
        </div>
    );
};

export { Motion };