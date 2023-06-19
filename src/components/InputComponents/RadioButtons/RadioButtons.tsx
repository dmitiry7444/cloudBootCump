import React from 'react'
import {Field} from 'formik'
import {FlexDiv, RadioInput, RadioLabel} from "../../../styles/styles";
import {MemoLabel} from "../MemoComponent";


interface Props {
    options: number[]
    name: string;
    label: string;
    id: string;
    setField : any
}

function RadioButtons (props:Props) {
    const { label,id, name, options, setField, ...rest } = props
    return (
        <>
            <MemoLabel mb='0' id={name} text={label}/>
            <Field name={name} >
                {({ field }: any) => {
                    return options.map(option => {
                        return (
                            <FlexDiv key={option}>
                                <RadioInput
                                    type='radio'
                                    id={`${id}${option}`}
                                    name={option}
                                    {...field}
                                    {...rest}
                                    onChange={ () => setField(name, option)}
                                    value={option}
                                    checked={+field.value === option}
                                />
                                <RadioLabel id={`${id}${option}`} htmlFor={`${id}${option}`}>{option}</RadioLabel>
                            </FlexDiv>
                        )
                    })
                }}
            </Field>
        </>
    )
}

export default RadioButtons