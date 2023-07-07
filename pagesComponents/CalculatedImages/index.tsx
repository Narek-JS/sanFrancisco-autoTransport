import { calculated_data as calculatedCards } from '@/TEST_DATA/calculated_data';
import { motion } from 'framer-motion';
import { motionOption } from '@/constants/animationOptions';
import Image from 'next/image';
import classes from './index.module.css';
interface ICard {
    imagePath: string;
    text: string;
    from?: 'right' | 'left' | 'bottom' | 'top';
};

const CalculatedCard: React.FC<ICard> = ({ imagePath, text, from }) => {

    return (
        <motion.div
            className={classes.calculatedCard}
            {...(from && motionOption[from])}
        >
            <Image
                width={60}
                height={60}
                alt='calculated Car Icon'
                src={imagePath}
            />
            <p>{text}</p>
        </motion.div>
    );
};

const CalculatedImages: React.FC = () => {
    
    return (
        <div className={classes.calculatedImages}>
            <motion.div
                className={classes.calculatedCenterImage}
                animate={{ transform: "translate(-100px)", opacity: 0 }}
                whileInView={{ transform: "translate(-50%, -50%)", opacity: 1 }}
            >
                <Image
                    width={60}
                    height={60}
                    alt='calculated group Icon'
                    src='/assets/images/calculatedCenterImage.png'
                />
            </motion.div>
            <div className={classes.calculatedCards}>
                { calculatedCards.calculatedCards.map(({ imagePath, text }, index) => (
                    <CalculatedCard
                        key={index}
                        imagePath={imagePath}
                        text={text}
                        from='left'
                    />
                ))}
            </div>
        </div>
    );
};

export { CalculatedImages };