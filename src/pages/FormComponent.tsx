import React, {useState} from 'react';
import {
    Container,
    FlexDiv,
    FormTextInput,
} from "../styles/styles";
import {useAppSelector} from "../hooks/hooks";
import {FieldArray, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {PlusSvg} from "../components/Svg/Svg";
import {ErrorBloc, MemoBtn, MemoLabel} from "../components/InputComponents/MemoComponent";
import {FirstStepSchema, SecondStepSchema, ThirdStepSchema} from "../Services/YupService";
import CustomSelect from "../components/InputComponents/CustomSelect/CustomSelect";
import CheckboxGroup from "../components/InputComponents/CheckBox/CheckboxGroup";
import RadioButtons from "../components/InputComponents/RadioButtons/RadioButtons";
import TextAreaField from "../components/InputComponents/TextArea/TextAreaItem";
import AdvantageItem from "../components/InputComponents/AdvantageItem/AdvantageItem";
import {Modal, Response} from "../components/Modal/Modal";
import {Path} from "../App";
import {ProgressBar} from "../components/ProgessBar/ProgressBar";


enum Sex {
    man = 'man',
    woman = 'woman'
}

export interface FormInterface {
    nickname: string,
    name: string,
    sername: string,
    sex: string | null,
    advantages: string[],
    checkbox: number[],
    radio: number | undefined,
    about: string,
}

const FormComponent = () => {
    const [select, setSelect] = useState([Sex.man,Sex.woman]);// стейт селекта
    const [selectId, setSelectId] = useState(['field-sex-option-man', 'field-sex-option-woman']); // id select
    const [checkBox, setCheckBox] = useState([1, 2, 3]) // стейт чекбокс групп
    const [radio, setRadio] = useState([1, 2, 3]) // стейт радио групп
    const [tabs, setTabs] = useState([1, 2, 3]) // кол-во табов
    const [tab, setTab] = useState(1) // текущий таб
    const [isOpen, setIsOpen] = useState(false) // стейт открытия модального окна
    const [response, setResponse] =  useState<Response| undefined>(undefined) // стейт ответа с сервера success или error
    const main = useAppSelector((state) => state.main); // вывод данных с редакса (телефон и емаил)
    const navigate = useNavigate();

    const initialValues = { //дефолтные значения формик
        nickname: '',
        name: '',
        sername: '',
        sex: '',
        advantages: ['', '', ''],
        checkbox: [],
        radio: undefined,
        about: '',
    }

// подстановка схемы по табам
    const validationSchema = tab === 2 ?
        SecondStepSchema
        : tab > 2 ? ThirdStepSchema
            : FirstStepSchema;


// отправка данных на сервер и конкатенация тела запроса - нужно вынести в отдельный сервис работу с api
    const postData = (body: FormInterface) => {
        fetch("https://api.sbercloud.ru/content/v1/bootcamp/frontend", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...main, ...body})
        })
            .then((response) => {
                if (response.status === 404) {
                    throw new Error(response.statusText)
                } else {
                    setResponse(Response.success)
                    setIsOpen(true)
                }
            })
            .catch(() => {
                setResponse(Response.error)
                setIsOpen(true)
            })
    }

    // навигация по табам
    const prev = (): void => {
        if (tab != 1) {
            setTab(prev => prev - 1)
        } else {
            navigate(Path.Main)
        }
    }
    const next = (): void => {
        if (tab != tabs.length) {
            setTab(prev => prev + 1)
        } else {
            return
        }
    }



//получился достаточно большой компонент в дальнейшем декомпозировал его дальше при достатке времени
    return (
        <Container>
            <ProgressBar tabs={tabs} tab={tab}/>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values: FormInterface) => {
                    if (tab < tabs.length) {
                        next()
                    } else {
                        postData(values)
                    }
                }}
            >
                {({errors, touched, values, setFieldValue}) => (
                    <Form>
                        <FlexDiv dir='col' align='start'>
                            {tab === 1 ?
                                (<>
                                    <>
                                        <MemoLabel id="nickname" text='Nickname'/>
                                        <FormTextInput name="nickname" id='field-nickname' value={values.nickname}
                                                       placeholder='Placeholder'/>
                                        <ErrorBloc err={errors.nickname} touched={touched.nickname}/>
                                    </>
                                    <>
                                        <MemoLabel id="name" text='Name'/>
                                        <FormTextInput name="name" id='field-name' value={values.name}
                                                       placeholder='Placeholder'/>
                                        <ErrorBloc err={errors.name} touched={touched.name}/>
                                    </>
                                    <>
                                        <MemoLabel id="sername" text='Sername'/>
                                        <FormTextInput name="sername" id='field-sername' value={values.sername}
                                                       placeholder='Placeholder'/>
                                        <ErrorBloc err={errors.sername} touched={touched.sername}/>
                                    </>
                                    <>
                                        <MemoLabel id="sex" text='Sex'/>
                                        <CustomSelect name='sex' selectId={selectId} selectOption={select} setFieldValue={setFieldValue}
                                                      val={values.sex}/>
                                        <ErrorBloc err={errors.sex} touched={touched.sex}/>
                                    </>
                                </>)
                                :
                                tab === 2 ?
                                    (
                                        <>
                                            <>
                                                <MemoLabel id="advantages" text='Advantages'/>
                                                <FieldArray
                                                    name="advantages"
                                                    render={arrayHelpers => (
                                                        <>
                                                            {values.advantages && values.advantages.length > 0 ?
                                                                (values.advantages.map((advantage, index) => (
                                                                    <div key={index}>
                                                                            <AdvantageItem
                                                                                index={index}
                                                                                err={errors.advantages ? errors.advantages[index] : null}
                                                                                touched={touched.advantages}
                                                                                name={`advantages[${index}]`}
                                                                                idInput={'field-advantages-' + (index + 1)}
                                                                                idBtn={'button-remove-' + (index + 1)}
                                                                                placeholder='Placeholder'
                                                                                arrayHelpers={arrayHelpers}
                                                                            />
                                                                    </div>
                                                                    ))
                                                                ) : null}
                                                            <ErrorBloc noTip={true}
                                                                       err={errors.advantages}
                                                                       touched={touched.advantages}/>
                                                            <MemoBtn mt='8px' padding='12px'
                                                                     id='button add button-add'
                                                                     func={() => arrayHelpers.push('')}>
                                                                <PlusSvg/>
                                                            </MemoBtn>
                                                        </>
                                                    )}
                                                />
                                            </>
                                            <>
                                                <CheckboxGroup
                                                    name="checkbox"
                                                    label="Checkbox group"
                                                >
                                                    {checkBox && checkBox.length > 0 ? (checkBox.map(item =>
                                                        <CheckboxGroup.Item
                                                            id={`field-checkbox-group-option-${item}`}
                                                            key={item} label={item.toString()}
                                                            value={item}/>
                                                    )) : ''}
                                                </CheckboxGroup>
                                            </>
                                            <>
                                                <RadioButtons
                                                    setField={setFieldValue}
                                                    options={radio} label='Radio group'
                                                    name="radio" id='field-radio-group-option-'
                                                />
                                                <ErrorBloc noTip={true} err={errors.radio}
                                                           touched={touched.radio}/>
                                            </>
                                        </>
                                    )
                                    :
                                    (<TextAreaField
                                            name='about'
                                            label='About'
                                            placeholder='Placeholder'
                                            err={errors.about}
                                            value={values.about}
                                            touched={touched.about}
                                    />)
                            }
                        </FlexDiv>
                        <FlexDiv jc='space-between' create={'true'}>
                            <MemoBtn id='button-back' func={prev}>Назад</MemoBtn>
                            <MemoBtn action='next' id={tab === tabs.length ? 'button-send' : 'button-next'}
                                     btnType='submit'>{tab === tabs.length ? 'Отправить' : 'Далее'}</MemoBtn>
                        </FlexDiv>
                    </Form>
                )}
            </Formik>
            <Modal isOpen={isOpen} response={response} nav={() => navigate(Path.Main)} prev={() => setIsOpen(prev => !prev)}/>
        </Container>
    );
};

export default FormComponent;
