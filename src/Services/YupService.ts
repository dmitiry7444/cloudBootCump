import * as Yup from "yup";

const regPhone = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d*)\)?)[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?)+)(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;
const regEmail = /^\S+@\S+\.\S+$/;
const regForbiddenSymbol = /^[a-zа-яA-ZА-Я0-9 ]+$/;
const regLetters = /^[a-zа-яA-ZА-Я]+$/;


export const FirstStepSchema = Yup.object().shape({
    nickname: Yup.string()
        .max(30, 'Max 30 symbols')
        .matches(regForbiddenSymbol, 'Special symbols are not allowed')
        .required('Required'),
    name: Yup.string()
        .max(50, 'Max 50 symbols')
        .matches(regLetters, 'Only letters are allowed to be entered')
        .required('Required'),
    sername: Yup.string()
        .max(50, 'Max 50 symbols')
        .matches(regLetters, 'Only letters are allowed to be entered')
        .required('Required'),
    sex: Yup.string()
        .required('Required'),
});
export const SecondStepSchema = Yup.object().shape({
    advantages: Yup.lazy(val => (Array.isArray(val) ?
        Yup.array()
            .min(1, 'Minimum of 1 advantage')
            .of(Yup.string().max(30, 'Max 30 symbols')
                .matches(regLetters, 'Only letters are allowed to be entered')
                .required('Required'))
        :
        Yup.string().required('Must have friends'))
    ),
    // radio: Yup.number()
    //     .required('Required'),
    // checkbox: Yup.array()
    //     .min(1, 'Required')
    //     .required('Required'),
});
export const ThirdStepSchema = Yup.object().shape({
    about: Yup.string()
        .max(200, 'Max length 200 symbols')
        // .required('Обязательное поле'),
});

export const MainSchema = Yup.object().shape({
    phone: Yup.string()
        .matches(regPhone, 'Incorrect phone number')
        .required('Required'),
    email: Yup.string().matches(regEmail, 'Incorrect email').required('Required'),
});