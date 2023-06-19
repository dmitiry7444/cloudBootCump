import styled from 'styled-components'
import {Field} from "formik";
import InputMask from "react-input-mask";
import {SelectArrowSvg} from "../components/Svg/Svg";
import {Response} from "../components/Modal/Modal";


export const MainContainer = styled.div`
  max-width: 900px;
  padding: 24px 10px;
  margin: 0 auto;
`
export const Container = styled.div<{ pb?: string }>`
  width: 100%;
  padding: ${props => props.pb === 'main' ? '25px 24px 291px 24px' : '62px 110px 80px 110px'};
  box-sizing: border-box;
  background: #FFFFFF;
  border-radius: 24px;
  @media (max-width: 670px) {
    padding: ${props => props.pb === 'main' ? '25px 24px 191px 24px' : '60px 40px'} ;
  }
  @media (max-width: 560px) {
    padding: ${props => props.pb === 'main' ? '25px 24px 191px 24px' : '60px 24px'} ;
  }
`

export const FlexDiv = styled.div<{ dir?: string, align?: string, wrap?: string, jc?: string, create?: string }>`
  display: flex;
  width: 100%;
  justify-content: ${props => props.jc ? props.jc : 'start'};
  margin-top: ${props => props.create ? '16px' : '0'};
  align-items: ${props => props.align ? props.align : 'center'};
  align-self: flex-start;
  justify-self: start;
  flex-direction: ${props => props.dir === 'col' ? 'column' : 'row'};
  flex-wrap: ${props => props.wrap ? props.wrap : 'wrap'};
`
export const MainFlexDiv = styled.div`
  display: flex;
  /* width: 100%; */
  justify-content: start;
  margin-top: 0;
  align-items: start;
  align-self: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
`
export const ImageBlock = styled.img<{ url: string }>`
  width: 80px;
  height: 80px;
  margin-right: 24px;
  border-radius: 50%;
  text-align: center;
  background-image: url('${props => props.url}');
  background-size: cover;
  background-position: center;
`
export const Title = styled.h1`
  margin-top: 13px;
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 20px;
  color: #333333;
`
export const Link = styled.a<{ ml?: string }>`
  margin-left: ${props => props.ml ? props.ml : '0'};
  display: block;

  :first-child {
    margin-right: 4px;
  }

  font-size: 12px;
  margin-right: 16px;
  color: #5558FA;
  text-decoration: none;
  cursor: pointer;
`
export const Row = styled.hr`
  margin-top: 24px;
  margin-bottom: 0;
  border: 1px solid rgba(0, 0, 0, 0.08);
`
export const Label = styled.label<{ mb?: string }>`
  margin-top: 24px;
  line-height: 20px;
  margin-bottom: ${props => props.mb ? props.mb : '8px'};
  color: #333333;
  @media (max-width: 505px) {
    margin-top: 12px;
  }
`
export const CheckboxLabel = styled.span`
  color: #333333;
`
export const RadioLabel = styled.label`
  color: #333333;
`
export const CheckboxInput = styled.input`
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(0, 0, 0, 0.24);
  border-radius: 4px;
`
export const RadioInput = styled.input`
  width: 16px;
  height: 16px;
  box-sizing: border-box;
  border: 2px solid rgba(0, 0, 0, 0.24);
  border-radius: 100px;
`
export const FormTextInput = styled(Field)<{ err?: string | null, mt?: string }>`
  margin-top: ${props => props.mt ? props.mt : '0'};
  padding: 12px;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.48);
  background: white;
  width: 400px;
  height: 44px;
  border: 1px solid ${props => props.err ? 'red' : 'rgba(0, 0, 0, 0.16)'};
  border-radius: 4px;
  outline: none;

  &:not(:placeholder-shown) {
    background: rgba(0, 0, 0, 0.04);
  }

  @media (max-width: 470px) {
    width: 100% ;
  }
`
export const TextArea = styled(Field)`
  padding: 12px;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
  min-height: 84px;
  border: 1px solid rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  outline: none;
`
export const TextAreaCounter = styled.div`
  position: relative;
  top: 5px;
  padding: 5px;
  margin-top: 8px;
  font-size: 12px;
  color: #333333;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.16);
`

export const MaskInput = styled(InputMask)`
  padding: 12px;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.48);
  background: white;
  width: 400px;
  height: 44px;
  border: 1px solid rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  outline: none;

  &:not(:placeholder-shown) {
    background: rgba(0, 0, 0, 0.04);
  }
  @media (max-width: 470px) {
    width: 100% ;
  }
`
export const ValidateErr = styled.div`
  margin-top: 8px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.48);

  span {
    color: red;
  }
`
export const ActionBtn = styled.button<{ action?: string, padding?: string, mt?: string }>`
  margin-top: ${props => props.mt ? props.mt : '48px'};
  padding: ${props => props.padding ? props.padding : '12px 16px'};
  box-sizing: border-box;
  background: ${props => props.action === 'next' ? '#5558FA' : 'transparent'};
  color: ${props => props.action === 'next' ? '#FFFFFF' : '#5558FA'};
  border-radius: 4px;
  border: 2px solid #5558FA;
  cursor: pointer;
`


export const ProgressBarDiv = styled.div`
  width: 100%;
  margin-bottom: 85px;
  height: 8px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 8px;
`
export const ProgressLine = styled.div<{ width: string }>`
  height: 8px;
  width: ${props => props.width + '%'};
  background: #5558FA;
  border-radius: 8px;
  z-index: 1;
`
export const ProgressPoints = styled.div`
  width: 100%;
  z-index: 2;
  top: -12px;
  position: relative;
  display: flex;
  justify-content: space-between;
`
export const ProgressPoint = styled.div<{ active: string }>`
  width: 16px;
  height: 16px;
  background: ${props => props.active ? '#5558FA' : '#A6A6A6'};
  border-radius: 50%;
`
export const ProgressCounts = styled.div`
  width: 100%;
  z-index: 2;
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
`
export const ProgressCount = styled.div<{ active: string }>`
  font-weight: ${props => props.active ? '600' : '400'};
  color: ${props => props.active ? '#5558FA' : '#A6A6A6'};
`


//custom select


export const DropDownContainer = styled("div")`
  width: 400px;
  height: 44px;
  @media (max-width: 470px) {
    width: 100% ;
  }
`;

export const DropDownHeader = styled("div")`
  width: 100%;
  height: 100%;
  padding: 12px;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.48);
  border: 1px solid rgba(0, 0, 0, 0.16);
  background: #fff;
  border-radius: 4px;
  outline: none;
`;

export const DropDownListContainer = styled("div")`
  position: relative;
  z-index: 100;
  width: 100%;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
`;

export const DropDownList = styled("ul")`
  padding: 4px 0;
  margin: 0;
  background: #ffffff;
  box-sizing: border-box;
  color: #333333;
  font-weight: 500;
`;

export const ListItem = styled("li")`
  padding: 8px 12px;
  list-style: none;
  cursor: pointer;

  &:hover {
    color: rgba(0, 0, 0, 0.16);
  }
`;
export const ArrowSvg = styled(SelectArrowSvg)<{ isOpen?: boolean }>`
  transition: transform .3s;
  transform-origin: center center;
  transform: ${props => props.isOpen ? 'rotate(90deg)' : ''};
`


// modal

export const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.16);
  z-index: 999;
`
export const ModalBlock = styled.div`
  padding: 32px;
  box-sizing: border-box;
  width: 460px;
  background: #FFFFFF;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  @media (max-width: 470px) {
    width: 80% ;
  }
`
export const ModalTitle = styled.div<{ response?: Response.success | Response.error }>`
  width: 100%;
  display: ${props => props.response === Response.success ? 'block' : 'flex'};
  justify-content: space-between;
  text-align: center;
  margin-bottom: 26px;
  font-size: 20px;
  font-weight: 600;
  color: #333333;
`
export const ModalImageBlock = styled.div`
  width: 100%;
  padding: 26px 0;
  margin-bottom: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ModalImage = styled.div<{ response?: Response.success | Response.error }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background: ${props => props.response === Response.success ? 'rgba(5, 174, 113, 0.15)' : 'rgba(232, 78, 88, 0.15)'};
  border-radius: 50%;
`


export const ModalActions = styled.div<{ response?: Response.success | Response.error }>`
  width: 100%;
  display: ${props => props.response === Response.success ? 'block' : 'flex'};
  justify-content: end;
  text-align: center;
`
export const CloseTag = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  background: rgba(0, 0, 0, 0.04);
  border: none;
  border-radius: 50%;
  cursor: pointer;
`




