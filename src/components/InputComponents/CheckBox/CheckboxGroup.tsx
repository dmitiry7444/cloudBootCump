import { ErrorMessage, useField } from "formik";
import React, { ReactNode } from "react";
import Item from "./CheckboxGroupItem";
import { CheckboxProvider } from "./CheckboxContext";
import {MemoLabel} from "../MemoComponent";
import {FlexDiv} from "../../../styles/styles";

interface Props {
    children: ReactNode;
    name: string;
    label: string;
}

function CheckboxGroup({ name, label, children }: Props) {
    const [field, meta, helpers] = useField<string[]>(name);
    return (
        <CheckboxProvider value={{ field, helpers, meta }}>
            <FlexDiv dir='col' align='start'>
                <MemoLabel mb='0' id={name} text={label}/>
                {children}
                <ErrorMessage
                    name={name}
                    render={(msg) => <span style={{ color: "red", fontSize: '12px'}}>{msg}</span>}
                />
            </FlexDiv>
        </CheckboxProvider>
    );
}

export default Object.assign(CheckboxGroup, { Item });
