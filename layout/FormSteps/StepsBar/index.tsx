import { useAppSelector } from '@/store/hooks';
import { selectQuoteFormMobileStatus } from '@/store/quoteForm';
import { useMemo } from 'react';
import classNames from 'classnames';
import classes from './index.module.css';
import useWindowSize from '@/hooks/useWindowSize';

type ActiveStep = 1 | 2 | 3 | 4;

interface IProps {
    activeStep: ActiveStep; 
    setInputBorderAnime: (to: 'back' | 'continue') => void;
};

interface IContentsStepsBar {
    id: ActiveStep;
    text: string;
};

const initialContentsStepsBar: Array<IContentsStepsBar> = [
    { id: 1, text: 'Select a root' },
    { id: 2, text: 'Select an Options' },
    { id: 3, text: 'Confirmation' },
    { id: 4, text: 'Get a Quote' },
];

const StepsBar: React.FC<IProps> = ({ activeStep, setInputBorderAnime }) => {
    const isOpen = useAppSelector(selectQuoteFormMobileStatus);
    const { width } = useWindowSize();

    const contentsStepsBar: Array<IContentsStepsBar> = useMemo(() => {
        if(Number(width) <= 768) {
            const activeStapIndex = initialContentsStepsBar.findIndex(item => item.id === activeStep)
            const length = activeStapIndex < initialContentsStepsBar.length ? initialContentsStepsBar.length : activeStapIndex + 2;
            return initialContentsStepsBar.slice(activeStapIndex === 3 ? 2 : activeStapIndex, length);
        };
        return initialContentsStepsBar;
    }, [isOpen, activeStep, width]);

    const tryToChangeStep = (id) => {
        if(activeStep !== id) {
            setInputBorderAnime(id > activeStep ? 'continue' : 'back')
        };
    };

    return (
        <div className={classes.stepsBar}>
            { contentsStepsBar.map(({ id, text }, index) => (
                <div
                    key={id}
                    onClick={() => tryToChangeStep(id)}
                    className={classNames(classes.step, {
                        [classes.activeStep]: activeStep === id,
                        [classes.firstStep]: index === 0,
                        [classes.lastStep]: index === contentsStepsBar.length - 1,
                    })}
                >
                    <p className={classes.id}>{id}</p>
                    <span className={classes.text}>{text}</span>
                    { id !== 4 &&
                        <div className={classes.row} />
                    }
                </div>
            ))}
        </div>
    );
};

export { StepsBar };