import React from 'react';
import {FlexDiv, FormTextInput, Link} from "../../../styles/styles";
import {DeleteBtnSvg} from "../../Svg/Svg";
import {ErrorBloc} from "../MemoComponent";

const AdvantageItem = (prop: any) => {
    const {index, err, touched, name, idInput, idBtn, placeholder, arrayHelpers, ...rest} = prop;
    return (<>
            <FlexDiv wrap='nowrap'>
                <FormTextInput mt='8px'
                               err={err}
                               name={name}
                               {...rest}
                               id={idInput}
                               placeholder={placeholder}/>
                <Link ml='16px'
                      id={idBtn}
                      onClick={() => {
                          arrayHelpers.remove(index);
                      }}>
                    <DeleteBtnSvg/>
                </Link>
            </FlexDiv>
    <ErrorBloc noTip={true}
               err={err}
               touched={touched}/>
        </>
    );
};

export default AdvantageItem;