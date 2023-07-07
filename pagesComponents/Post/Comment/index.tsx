import { FormikErrors } from '@/sharedComponents/FormikError';
import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import { motionOption } from '@/constants/animationOptions';
import * as yup from "yup";
import classes from './index.module.css';

interface IFormData {
    name: string;
    email: string;
    phone: string;
    comment: string;
    checkbox: boolean;
};

const schema = yup.object().shape({
    name: yup.string().required(),
    phone: yup.string().required(),
    email: yup.string().required().matches(
        /[A-z0-9]+@{1}[A-z0-9]+\.[A-z]{2,}$/,
      'Invalid email'
    ),
    comment: yup.string().required(),
    checkbox: yup.bool().oneOf([true])
});

const Comment = () => {
    const formik = useFormik<IFormData>({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            comment: '',
            checkbox: false
        },
        onSubmit: values => console.log(values),
        validationSchema: schema
    });

    const onSubmit = (data: IFormData) => {
        alert(JSON.stringify(data, undefined, 2));
    };

    return ( 
        <motion.div
            className={classes.postComment}
            {...motionOption.right}
        >
            <h2 className={classes.postCommentTitle}>Leave a Reply</h2>
            <form className={classes.form} onSubmit={formik.handleSubmit}>
                <div className={classes.inputs}>
                    <div className={classes.inputList}>
                        <input
                            placeholder='Name *'
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            name='name'
                        />
                        <FormikErrors {...{ classes, formik, name: 'name' }}/>
                    </div>
                    <div className={classes.inputList}>
                        <input
                            placeholder='Email Address *'
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            name='email'
                        />
                        <FormikErrors {...{ classes, formik, name: 'email' }}/>
                    </div>
                    <div className={classes.inputList}>
                        <input
                            placeholder='Phone Number *'
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                            name='phone'
                        />
                        <FormikErrors {...{ classes, formik, name: 'phone' }}/>
                    </div>
                </div>
                <div className={classes.wrapperSubmit}>
                    <textarea
                        wrap="soft"
                        placeholder='Your comment here...'
                        className={classes.comment}
                        onChange={formik.handleChange}
                        value={formik.values.comment}
                        name='comment'
                    />
                    <FormikErrors {...{ classes, formik, name: 'comment' }}/>
                </div>
                <div className={classes.wrapperCheckbox}>
                    <div className={classes.checkNode}>
                        <label className={classes.checkbox}>
                            <input
                                type="checkbox"
                                onChange={formik.handleChange}
                                checked={formik.values.checkbox}
                                name='checkbox'
                            />
                            <span className={classes.checkmark} />
                        </label>
                        <FormikErrors {...{ classes, formik, name: 'checkbox' }}/>
                        <p
                            className={classes.emailSaveText}
                            onClick={() => formik.setValues(values => ({...values, checkbox: !values.checkbox}))}
                        >
                            Save my name, email, and website in this browser for the next time I comment
                        </p>
                    </div>
                </div>
                <button className={classes.btn} type='submit'>
                    Post Comment
                </button>
            </form>
        </motion.div>
    );
};

export { Comment };