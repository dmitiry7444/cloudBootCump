import React from 'react';
import {
    ProgressBarDiv,
    ProgressCount,
    ProgressCounts,
    ProgressLine,
    ProgressPoint,
    ProgressPoints
} from "../../styles/styles";
import {CurrentSvg, DoneSvg} from "../Svg/Svg";

interface ProgressBarProp {
    tabs: number[],
    tab : number
}

export const ProgressBar = React.memo(({tabs, tab}: ProgressBarProp): any => {
    const progressWidth = (100 / (tabs.length - 1) * (tab - 1)).toString(); //считаем ширину заполняемой области
    return <ProgressBarDiv>
        <ProgressLine width={progressWidth}></ProgressLine>
        <ProgressPoints>
            {tabs.map((item, index) =>
                <ProgressPoint key={index} active={tab >= index + 1 ? 'active' : ''}>
                    {tab > index + 1 ? <DoneSvg/> : tab === index + 1 ? <CurrentSvg/> : null}
                </ProgressPoint>
            )}
        </ProgressPoints>
        <ProgressCounts>
            {tabs.map((item, index) =>
                <ProgressCount key={index} active={tab >= index + 1 ? 'active' : ''}>{item}</ProgressCount>
            )}
        </ProgressCounts>
    </ProgressBarDiv>
})