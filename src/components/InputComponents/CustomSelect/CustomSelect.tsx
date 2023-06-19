import React, { useState } from "react";
import {
    ArrowSvg,
    DropDownContainer,
    DropDownHeader,
    DropDownList,
    DropDownListContainer,
    FlexDiv,
    ListItem
} from "../../../styles/styles";



interface Prop {
    selectOption: string[] | number[];
    selectId: string[]
    setFieldValue: any;
    name: string;
    val: string;
}

export default function CustomSelect({ selectOption,selectId, setFieldValue, name, val}: Prop) {
    const [isOpen, setIsOpen] = useState(false);
    const [options, setOptions] = useState(selectOption || []);
    const [selectedOption, setSelectedOption] = useState<string | null>(val || null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (value:string) => () => {
        setSelectedOption(value)
        setFieldValue(name,value);
        setIsOpen(false);
    };

    return (
            <DropDownContainer>
                <DropDownHeader onClick={toggling} id='field-sex'>
                    <FlexDiv jc='space-between'>
                    {selectedOption || "Не выбрано"}
                    <ArrowSvg isOpen={isOpen}/>
                        </FlexDiv>
                </DropDownHeader>
                {isOpen && (
                    <DropDownListContainer>
                        <DropDownList>
                            {options.map((option, index) => (
                                <ListItem id={selectId[index]} onClick={onOptionClicked(option.toString())} key={Math.random()}>
                                    {option}
                                </ListItem>
                            ))}
                        </DropDownList>
                    </DropDownListContainer>
                )}
            </DropDownContainer>
    );
}