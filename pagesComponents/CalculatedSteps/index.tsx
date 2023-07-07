import { Fragment, useState } from 'react';
import { calculatedSteps } from '@/TEST_DATA/calculated_data.json';
import classes from './index.module.css';
import classNames from 'classnames';
import { ArrowDynamic } from '@/public/assets/svgs/ArrowDynamic';

interface IStep {
    text: string;
    answer: string;
    isActive: boolean;
}; 

const CalculatedSteps: React.FC = () => {
    const [ steps, setSteps ] = useState<Array<IStep>>(
        calculatedSteps.map(_ => ({..._, isActive: false}))
    );

    const toogleStep = (index) => {
        setSteps(steps.map((_, i) => ({ ..._, isActive: index === i && !_.isActive })))
    };

    return (
        <div className={classes.calculatedSteps}>
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