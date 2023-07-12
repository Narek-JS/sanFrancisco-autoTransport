import { Container } from '@/sharedComponents/Container';
import { FormikValues, useFormik } from 'formik';
import { useState } from 'react';
import { FormikErrors } from '@/sharedComponents/FormikError';
import { RowForMore } from '@/public/assets/svgs/RowForMore';
import { Conditional } from '@/sharedComponents/Conditional';
import classNames from 'classnames';
import Image from 'next/image';
import * as yup from "yup";
import classes from './index.module.css';

interface IFormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
};

const initialValues: IFormData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
};

const validationSchema = yup.object({
    email: yup.string().required().email(),
    message: yup.string().required(),
    name: yup.string().required(),
    phone: yup.string().required(),
    subject: yup.string().required(),
});

type NamesType = 'name' | 'email' | 'phone' | 'subject';

const placeholders: Record<NamesType, string> = {
    name: 'Your Name',
    email: 'Your Email',
    phone: 'Your Phone',
    subject: 'Subject',
};

const inputNames: Array<NamesType> = Object.keys(placeholders) as Array<NamesType>;

interface IGroupInput<Values extends FormikValues> {
    formik: ReturnType<typeof useFormik<Values>>,
    name: NamesType | 'message';
    placeholder?: string;
};

const InputGroup: React.FC<IGroupInput<IFormData>> = ({ formik, name, placeholder }) => (
    <div className={classes.inputGroup}>
        <input
            autoComplete='off'
            placeholder={placeholder}
            className={classes.input}
            onChange={formik.handleChange}
            value={formik.values[name]}
            name={name}
        />
        <FormikErrors {...{ formik, classes, name }}/>
    </div>
);

const FormAgent: React.FC = () => {
    const [ recaptchaAnswer, setRecaptchaAnswer ] = useState<null | boolean>(null);

    const formik = useFormik<IFormData>({
        initialValues,
        onSubmit: () => {
            if(recaptchaAnswer !== true) {
                return setRecaptchaAnswer(false);
            };
        },
        validationSchema
    });

    return (
        <section>
            <Container>
                <div className={classes.content}>
                    <div className={classes.blockNode}>
                        <p className={classes.description}>
                            if you have any <span>question</span> please leave a message and we'll get back to you !
                        </p>

                        <form
                            className={classes.form}
                            onSubmit={formik.handleSubmit}
                        >
                            <h2 className={classes.formTitle}>Get a <span>FREE</span> consultation</h2>
                            <div className={classes.formContent}>
                                <div className={classes.inputs}>
                                    { inputNames.map((name, index) => (
                                        <InputGroup
                                            key={index}
                                            formik={formik}
                                            name={name}
                                            placeholder={placeholders[name]}
                                        />
                                    ))}
                                </div>
                                <div className={classes.wrapperSeccondLine}>
                                    <div className={classes.wrapperTextarea}>
                                        <textarea 
                                            wrap="soft"
                                            placeholder='Your Message'
                                            className={classes.message}
                                            onChange={formik.handleChange}
                                            value={formik.values.message}
                                            name='message'
                                        />
                                        <FormikErrors {...{ classes, formik, name: 'message' }}/>
                                    </div>
                                    <div className={classes.uniqRecaptcha}>
                                        <p>Which one is <span>Enclosed</span> Car Trailer ?</p>
                                        <div className={classNames(classes.recaptchaBoxes, {
                                            [classes.recaptchaBoxesInActive]: recaptchaAnswer
                                        })}>
                                            <div
                                                className={classes.recaptchaBox}
                                                onClick={() => !recaptchaAnswer && setRecaptchaAnswer(true)}
                                            >
                                                <Conditional
                                                    condition={recaptchaAnswer}
                                                    fallback={() => (
                                                        <Image
                                                            alt="Enclosed Truck image"
                                                            src='/assets/images/enclosedTruck.png'
                                                            width={40}
                                                            height={20}
                                                            className={classes.truckImage}
                                                        />
                                                    )}
                                                >
                                                    <Image
                                                        alt="star image"
                                                        src='/assets/images/star.png'
                                                        width={40}
                                                        height={20}
                                                        className={classes.starImage}
                                                    />
                                                </Conditional>
                                            </div>
                                            <div
                                                className={classes.recaptchaBox}
                                                onClick={() => recaptchaAnswer === null && setRecaptchaAnswer(false)}
                                            >
                                                <Image
                                                    alt="Enclosed Truck image"
                                                    src='/assets/images/closedTruck.png'
                                                    width={40}
                                                    height={20}
                                                    className={classes.truckImage}
                                                />
                                            </div>

                                            <Conditional condition={recaptchaAnswer === false}>
                                                <span className={classes.error}>please look at the images and write question</span>
                                            </Conditional>
                                        </div>
                                    </div>
                                    <button
                                        className={classes.btn}
                                        type="submit"
                                    >
                                        <RowForMore color="#FFFFFF"/>
                                        Send
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div
                        className={classes.blockNode}
                    >
                        <h2 className={classes.imageDescription}>
                            <span>Live </span>
                            Agents Available
                        </h2>
                        <Image
                            alt="image Agent"
                            src='assets/images/agentImage.png'
                            width={354}
                            height={267}
                            className={classes.agentImage}
                        />
                        <p className={classes.link}>
                            Phone: 
                            <span> ( 628 ) 246 - 1557</span>
                        </p>
                        <p className={classes.link}>
                            Email: 
                            <span> info@sanfranciscocartransport.com</span>
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export { FormAgent };