import React, {FC} from 'react';
import {Form, Formik} from "formik";
import {FlexDiv, FormTextInput, MaskInput} from "../../styles/styles";
import {useAppDispatch} from "../../hooks/hooks";
import {changeState} from "../../store/reducers";
import {useNavigate} from "react-router-dom";
import {MainSchema} from "../../Services/YupService";
import {ErrorBloc, MemoBtn, MemoLabel} from "../InputComponents/MemoComponent";


interface MainForm {
    phone: string,
    email: string
}

enum FormValues {
    phone = '+7 (982) 976-54-15',
    email = 'dmitriy7444@mail.ru',
}

const MainForm: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    return (
        <Formik
            initialValues={{
                phone: FormValues.phone,
                email: FormValues.email,
            }}
            validationSchema={MainSchema}
            onSubmit={values => {
                const {phone, email}: MainForm = values;
                dispatch(changeState({phone, email}))
                navigate('/create')
            }}
        >
            {({errors, touched, values, handleChange}) => (
                <Form>
                    <FlexDiv dir='col' align='start'>
                        <>
                            <MemoLabel id="phone" text='Номер телефона'/>
                            <FormTextInput name="phone" render={() => (
                                <MaskInput
                                    mask='+7 (999) 999-99-99'
                                    name="phone"
                                    value={values.phone}
                                    onChange={handleChange}
                                    placeholder='Placeholder'
                                />
                            )}/>
                            <ErrorBloc noTip={true} err={errors.phone} touched={touched.phone}/>
                        </>
                        <>
                            <MemoLabel id="email" text='Email'/>
                            <FormTextInput name="email" type="email" placeholder='Placeholder'/>
                            <ErrorBloc noTip={true} err={errors.email} touched={touched.email}/>
                        </>
                        <MemoBtn action='next' id='button-start' btnType='submit'>Начать</MemoBtn>
                    </FlexDiv>
                </Form>
            )}
        </Formik>
    );
};

export default MainForm;