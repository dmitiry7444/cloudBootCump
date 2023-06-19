import { createGlobalStyle } from 'styled-components'
// @ts-ignore
import SBSans  from "../static/fonts/SBSansInterface.ttf";

export default createGlobalStyle`
  @font-face {
    font-family: 'SBSans';
    src: url(${SBSans}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }

  * {
  ...
  }

  *::before,
  *::after {
  ...
  }

  body {
    font-family: SBSans, sans-serif;
    font-weight: 400;
    font-size: 14px;
    margin: 0 auto;
    max-width: 1200px;
    background: #F4F4F5;
  }

  input[type="checkbox"]:checked,
  input[type="checkbox"]:not(:checked),
  input[type="radio"]:checked,
  input[type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
  }

  input[type="checkbox"]:checked + span,
  input[type="checkbox"]:not(:checked) + span,
  input[type="radio"]:checked + label,
  input[type="radio"]:not(:checked) + label {
    display: inline-block;
    position: relative;
    padding-left: 26px;
    cursor: pointer;
  }

  input[type="checkbox"]:checked + span:before,
  input[type="checkbox"]:not(:checked) + span:before,
  input[type="radio"]:checked + label:before,
  input[type="radio"]:not(:checked) + label:before {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    width: 18px;
    height: 18px;
    border: 1px solid #dddddd;
    background-color: #ffffff;
  }

  input[type="checkbox"]:checked + span:before,
  input[type="checkbox"]:not(:checked) + span:before {
    box-sizing: border-box;
    width: 16px;
    height: 16px;
    border: 2px solid rgba(0, 0, 0, 0.24);
    border-radius: 4px;
  }

  input[type="radio"]:checked + label:before,
  input[type="radio"]:not(:checked) + label:before {
    box-sizing: border-box;
    border-radius: 50%;
    border: 1.5px solid rgba(0, 0, 0, 0.24);
    width: 16px;
    height: 16px;
  }

  input[type="checkbox"]:checked + span:after,
  input[type="checkbox"]:not(:checked) + span:after,
  input[type="radio"]:checked + label:after,
  input[type="radio"]:not(:checked) + label:after {
    content: "";
    position: absolute;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  input[type="checkbox"]:checked + span:after,
  input[type="checkbox"]:not(:checked) + span:after {
    left: 3px;
    top: 3px;
    width: 8px;
    height: 4px;
    border-radius: 1px;
    border-left: 4px solid #5558FA;
    border-bottom: 4px solid #5558FA;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  input[type="radio"]:checked + label:after,
  input[type="radio"]:not(:checked) + label:after {
    left: 4px;
    top: 4px;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color: #5558FA;
  }

  input[type="checkbox"]:not(:checked) + span:after,
  input[type="radio"]:not(:checked) + label:after {
    opacity: 0;
  }

  input[type="checkbox"]:checked + span:after,
  input[type="radio"]:checked + label:after {
    opacity: 1;
  }
`