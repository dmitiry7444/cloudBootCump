import React, {FC} from 'react';
import {FlexDiv, ImageBlock, Link, MainFlexDiv, Title} from "../../styles/styles";
import {Svg} from "../Svg/Svg";
// @ts-ignore
import ImageLink from '../../static/images/image.jpg'

enum Variables {
    name = 'Дмитрий Чепайкин',
    tg = 'https://t.me/dmitriy_chepaikin',
    git = 'https://github.com/dmitiry7444',
    cv = 'https://disk.yandex.ru/i/J94NNG_8Zno-XQ'
}

const MainTop: FC = () => {
    return (
        <FlexDiv>
            <ImageBlock url={ImageLink}/>
            <MainFlexDiv>
                <Title>{Variables.name}</Title>
                <FlexDiv>
                    <Link href={Variables.tg}>
                        <Svg/>
                        Telegram
                    </Link>
                    <Link href={Variables.git}>
                        <Svg/>
                        GitHub
                    </Link>
                    <Link href={Variables.cv}>
                        <Svg/>
                        Resume
                    </Link>
                </FlexDiv>
            </MainFlexDiv>
        </FlexDiv>
    );
};

export default MainTop;