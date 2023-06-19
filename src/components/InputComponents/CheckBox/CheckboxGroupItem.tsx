import React from "react";
import { useCheckboxContext } from "./CheckboxContext";
import {CheckboxInput, CheckboxLabel} from "../../../styles/styles";

interface Props {
    id: string
    value: number;
    label: string;
}

export default function CheckboxGroupItem({ value, label, id }: Props) {
    const { field, helpers } = useCheckboxContext();
    const checked = Boolean(field.value && field.value.find((_) => +_ === value));
    return ( //айдишники повесил на все навсякий случай)
        <label id={id} style={{ display: "flex", alignItems: 'center'}}>
            <CheckboxInput
                {...field}
                id={id}
                type="checkbox"
                checked={checked}
                onChange={() => {
                    if (checked) {
                        helpers.setValue(field.value.filter((_) => +_ !== value));
                    } else {
                        helpers.setValue([...field.value, value]);
                    }
                }}
            />
            <CheckboxLabel id={id}>{label}</CheckboxLabel>
        </label>
    );
}
