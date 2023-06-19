import React from 'react';
import {ErrorBloc, MemoLabel} from "../MemoComponent";
import {FlexDiv, TextArea, TextAreaCounter} from "../../../styles/styles";



const TextAreaField = (prop: any) => {
    const {label,value, name, placeholder,err,touched, ...rest} = prop
    const count = value.replace(/\s/g, "").length;

    return (
        <>
            <MemoLabel id={name} text={label}/>
            <TextArea name={name}
                      // maxLength='200'
                      id={name + ' field-about'}
                      component="textarea"
                      placeholder={placeholder}
                      {...rest}

            />
            <FlexDiv jc='space-between' align='end'>
            <ErrorBloc err={err}
                       touched={touched}/>
                <TextAreaCounter>{count +' / 200'}</TextAreaCounter>
            </FlexDiv>
        </>
    );
};

export default TextAreaField;