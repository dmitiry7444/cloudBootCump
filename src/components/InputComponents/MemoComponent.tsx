import {ActionBtn, Label, ValidateErr} from "../../styles/styles";
import React, {ReactNode} from "react";

type ErrorBlocProps = {
    err?: string | string[],
    touched?: boolean,
    noTip?: boolean,
}

type MemoLabelProps = {
    id?: string,
    text?: string,
    mb?: string,
}

type MemoBtn = {
    btnType?: "button" | "submit" | "reset" | undefined
    action?: string,
    func?: () => void,
    id: string,
    padding?: string,
    mt?: string,
    children: ReactNode
}


export const ErrorBloc = React.memo<ErrorBlocProps>(({err, touched, noTip}) => {
    return typeof err === 'string'  && touched ? (<ValidateErr>{noTip ? '' : 'Tip'} <span>{err}</span></ValidateErr>) : noTip ? <></> : (<ValidateErr>Tip</ValidateErr>);
})


export const MemoLabel = React.memo<MemoLabelProps>(({mb, id, text}) => {
    return (
        <Label htmlFor={id} mb={mb}>{text}</Label>
    );
});

export const MemoBtn = React.memo<MemoBtn>(({mt,padding,btnType = 'button', action, func, id, children}) => {
    return (
        <ActionBtn mt={mt} padding={padding} type={btnType} action={action} id={id} onClick={func}>{children}</ActionBtn>
    );
});










