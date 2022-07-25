import React from 'react';
import s from './Contact.module.css'
// @ts-ignore
import Fade from 'react-reveal/Fade';
import {useFormik} from "formik";
import axios from "axios";

type FormikErrorType = {
    name?: string
    email?: string
    message?: string
}

export const Contact = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            if(!values.name) {
                errors.name = 'Required'
            }
            if(!values.message) {
                errors.message = 'Required'
            }
            return errors
        },
        onSubmit: values => {
            formik.resetForm()
            alert(JSON.stringify(values));
            axios.post('http://localhost/:3010/sendMessage', values)
        },
    })


    return (
        <div className={s.contact}>
            <h2>Contact Me</h2>

            <Fade bottom>
                <form className={s.form} onSubmit={formik.handleSubmit}>
                    <div className={s.formItem}>
                        <label htmlFor="name">Name</label>
                        <input className={s.input}
                               type="text"
                            {...formik.getFieldProps('name')}/>
                        {formik.touched.name && formik.errors.name ? <div style={{color: 'red'}}>{formik.errors.name}</div> : null}
                    </div>

                    <div className={s.formItem}>
                        <label htmlFor="email">Email</label>
                        <input className={s.input}
                               type="text"
                               {...formik.getFieldProps('email')}/>
                        {formik.touched.email && formik.errors.email ? <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
                    </div>

                    <div className={`${s.formItem} ${s.text}`}>
                        <label htmlFor="message">Message</label>
                        <textarea className={s.input}
                                  {...formik.getFieldProps('message')}/>
                        {formik.touched.message && formik.errors.message ? <div style={{color: 'red'}}>{formik.errors.message}</div> : null}
                    </div>

                    <div className={s.btn}>
                        <button type={'submit'} >Send</button>
                    </div>
                </form>
            </Fade>
        </div>
    );
};
