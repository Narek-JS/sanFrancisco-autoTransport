import { Fragment, useState } from 'react';
import { calculated_data as calculatedSteps } from '@/TEST_DATA/calculated_data';
import { ArrowDynamic } from '@/public/assets/svgs/ArrowDynamic';
import useWindowSize from '@/hooks/useWindowSize';
import classNames from 'classnames';
import classes from './index.module.css';

interface IStep {
    text: string;
    answer: string;
    isActive: boolean;
}; 

const CalculatedSteps: React.FC = () => {
    const [ steps, setSteps ] = useState<Array<IStep>>(
        calculatedSteps.calculatedSteps.map(_ => ({..._, isActive: false}))
    );
    const { width } = useWindowSize();

    const toogleStep = (index) => {
        setSteps(steps.map((_, i) => ({ ..._, isActive: index === i && !_.isActive })))
    };

    const isOpen = (): Boolean => { 
        return Boolean(steps.find(step => step.isActive));
    };

    const getHeight = (): number => {

        if(Number(width) > 768) return 380;

        const maxHeight = 730; // Set the maximum height value;
        const minHeight = 380; // Set the minimum height value;

        const minWidth  = 320; // Set the minimum window width;
        const maxWidth  = 800; // Set the maximum window width;

        const height = maxHeight - ((Number(width) - minWidth) / (maxWidth - minWidth)) * (maxHeight - minHeight);

        return isOpen() ? height : height - 100;
    };

    return (
        <div
            className={classes.calculatedSteps}
            style={{ height: getHeight() + 'px' }}
        >
            { steps.map(({ answer, isActive, text }, index) => (
                <Fragment key={index}>
                    <div
                        className={classNames(classes.step, {
                            [classes.activeStep]: isActive
                        })}
                        onClick={() => toogleStep(index)}
                    >
                        <div className={classes.question}>
                            <div className={classes.wrapperQuestionText}>
                                <div className={classes.dot} />
                                <p className={classes.questionText}>{text}</p>
                            </div>
                            <ArrowDynamic
                                color='#E53E29'
                                {...(isActive && { rotate: 180 })}
                            />
                        </div>
                        <div className={classes.answer}>
                            <p>{answer}</p>
                        </div>
                    </div>
                    <div className={classes.row}/>
                </Fragment>
            ))}
        </div>
    );
};

export { CalculatedSteps };