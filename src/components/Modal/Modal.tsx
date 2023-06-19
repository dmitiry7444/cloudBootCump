import React from 'react';
import {
    ActionBtn, CloseTag,
    ModalActions,
    ModalBlock,
    ModalContainer,
    ModalImage,
    ModalImageBlock,
    ModalTitle
} from "../../styles/styles";
import {CloseSvg, ErrorResponseSvg, SuccessResponseSvg} from "../Svg/Svg";

export enum Response {
    success = 'success',
    error = 'error'
}

interface Prop {
    isOpen: boolean;
    response?: Response | undefined;
    nav?: () => void;
    prev?: () => void;
}

export const Modal = React.memo(({isOpen, response, nav, prev}: Prop) => {
    return <>
        {isOpen ?
            <ModalContainer>
                <ModalBlock>
                    <ModalTitle response={response}>
                        {response === Response.success ? 'Форма успешно отправлена'
                            :
                            <><>Ошибка</>
                                <CloseTag onClick={prev}><CloseSvg/></CloseTag></>
                        }
                    </ModalTitle>
                    <ModalImageBlock>
                        <ModalImage response={response}>
                            {response === Response.success ? <SuccessResponseSvg/> : <ErrorResponseSvg/>}
                        </ModalImage>
                    </ModalImageBlock>
                    <ModalActions response={response}>
                        {response === Response.success ?
                            <ActionBtn id='button-to-main' mt='0' action='next' onClick={nav}>На главную</ActionBtn>
                            :
                            <ActionBtn id='button-close' mt='0' action='next' onClick={prev}>Закрыть</ActionBtn>
                        }
                    </ModalActions>
                </ModalBlock>
            </ModalContainer>
            : null}
    </>

})