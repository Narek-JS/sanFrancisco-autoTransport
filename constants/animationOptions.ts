import { TargetAndTransition } from 'framer-motion';

interface IMotion {
    animate?: TargetAndTransition;
    whileInView?: TargetAndTransition;
    initial?: any;
}

const motionOption: {
    right: IMotion;
    left: IMotion;
    bottom: IMotion;
    top: IMotion;
    skew: IMotion;
} = {
    right: {
        animate: { transform: "translateX(100px)", opacity: 0 },
        whileInView: { transform: "translateX(0px)", opacity: 1 },
        initial: { transform: "translateX(100px)", opacity: 0 },
    },
    left: {
        animate: { transform: "translateX(-100px)", opacity: 0 },
        whileInView: { transform: "translateX(0px)", opacity: 1 },
        initial: { transform: "translateX(-100px)", opacity: 0 },
    },
    bottom: {
        animate: { transform: "translate(0, 100px)", opacity: 0 },
        whileInView: { transform: "translate(0, 0px)", opacity: 1 },
        initial: { transform: "translate(0, 100px)", opacity: 0 },
    },
    top: {
        animate: { transform: "translate(0, -100px)", opacity: 0 },
        whileInView: { transform: "translate(0, 0px)", opacity: 1 },
        initial: { transform: "translate(0, -100px)", opacity: 0 },
    },
    skew: {
        animate: { transform: "skew(90deg) scale(0)" },
        whileInView: { transform: "skew(0deg) scale(1)" },
        initial: { transform: "skew(0deg) scale(1)" }
    }
};

export { motionOption };
