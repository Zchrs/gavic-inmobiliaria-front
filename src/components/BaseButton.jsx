/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { getFile, getImg } from "../../globalActions";

import styled from "styled-components";

export const BaseButton = ({
  label,
  icon,
  link,
  img,
  svg,
  classs,
  textLabel,
  handleClick,
  disabled,
  onMouseEnter,
  onMouseLeave,
  target,
  onSubmit,
}) => {
  return (
    <ButtonBase>
      <button
        disabled={disabled}
        onClick={handleClick}
        className={`${classs} ${disabled ? "disabled" : ""}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onSubmit={onSubmit}
        {...(target & { target })}>
        <Link className="button__a" to={link} rel="noopener" target={target}>
          {img && <img src={getImg("svg", `${icon}`, "svg")} alt="" />}
          {svg && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18.571"
              height="18.711"
              viewBox="0 0 18.571 18.711">
              <g id="ic-actions-search" transform="translate(-2.969 -2.4)">
                <circle
                  id="Elipse_12"
                  dataname="Elipse 12"
                  cx="7"
                  cy="7"
                  r="7"
                  transform="translate(6.79 3.15)"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="bevel"
                  strokeWidth="1.5"></circle>
                <line
                  id="Línea_50"
                  dataname="Línea 50"
                  x1="4.88"
                  y2="4.88"
                  transform="translate(4.03 15.17)"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="bevel"
                  strokeWidth="1.5"></line>
              </g>
            </svg>
          )}
          {link && <span className="button__span">{label}</span>}
          {textLabel && <span>{label}</span>}
        </Link>
      </button>
    </ButtonBase>
  );
};

const ButtonBase = styled.div`
  background: transparent;
  display: grid;

  .button {
    background: transparent;
    cursor: pointer;
    outline: none;
    border: none;
    width: fit-content;
    height: fit-content;
    margin: 0;
    padding: 0;

    &.little-red-md {
      display: flex;
      width: fit-content;
      height: fit-content;
      background: #990000;
      border-radius: 10px;
      color: white;
      padding: 8px 16px;
      font-weight: 800;
      font-size: 17px;
      line-height: 120%;
    }

    &.little-secondary {
      display: grid;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      a {
        gap: 5px;
        display: flex;
        padding: 10px 32px;
        width: fit-content;
        height: fit-content;
        background: var(--bg-secondary);
        color: white;
        border-radius: 5px;
        font-weight: 600;
        font-size: 17px;
        transition: all ease 0.3s;
        text-decoration: none;
        img {
          filter: brightness(500%);
          width: 13%;
        }
        &:hover {
          background: #477c46;
        }
        span {
          width: fit-content;
          background: transparent;
        }

        @media (max-width: 800px) {
          padding: 5px 17px;
        }
      }

      p {
        margin: 0;
        padding: 0;
      }

      &.disabled {
        cursor: default;
        z-index: 50;
        opacity: 0.6;
        transition: all ease 0.4s;

        a {
          cursor: not-allowed;
          background: gray;
        }

        &:hover {
          a {
            background: gray;
          }
        }
      }
    }
    &.little-red-pq {
      display: flex;
      width: fit-content;
      height: fit-content;
      background: #990000;
      border-radius: 10px;
      color: white;
      padding: 5px 16px;
      font-weight: 800;
      font-size: 17px;
      line-height: 120%;
    }
    &.little-red-md {
      display: grid;
      width: fit-content;
      height: fit-content;
      a {
        justify-content: center;
        align-items: center;
        gap: 5px;
        display: flex;
        padding: 16px;
        width: fit-content;
        height: fit-content;
        background: #990000;
        color: white;
        border-radius: 10px;
        font-weight: 800;
        font-size: 17px;
        line-height: 120%;
        transition: all ease 0.3s;
        text-decoration: none;
        img {
          filter: brightness(500%);
          width: 13%;
        }
        &:hover {
          background: #df898b;
        }
        span {
          width: fit-content;
          background: transparent;
        }
      }
    }
    &.mini-red {
      display: flex;
      width: 100%;
      height: fit-content;
      a {
        text-align: center;
        text-decoration: none;
        gap: 5px;
        display: grid;
        padding: 7px 16px;
        height: 100%;
        width: 100%;
        background: #990000;
        color: white;
        border-radius: 50px;
        font-weight: 800;
        font-size: 15px;
        line-height: 120%;
        transition: all ease 0.3s;
        img {
          filter: brightness(500%);
          width: 13%;
        }
        &:hover {
          background: #df898b;
        }
        span {
          width: fit-content;
          background: transparent;
        }
      }
    }
    &.full-red {
      display: grid;
      width: 100%;
      height: 100%;
      clip-path: polygon(
        3% 0,
        97% 0,
        100% 20%,
        100% 80%,
        97% 100%,
        3% 100%,
        0 80%,
        0 20%
      );
      position: relative;
      background: var(--bg-primary);
      a {
        text-decoration: none;
        justify-content: center;
        align-items: center;
        gap: 5px;
        display: flex;
        padding: 10px 16px;
        height: 100%;
        width: 100%;
        z-index: 500;
        color: white;
        border-radius: 10px;
        font-weight: 800;
        font-size: 17px;
        line-height: 120%;
        transition: all ease 0.3s;
        img {
          filter: brightness(500%);
          width: 13%;
        }
        &:hover {
          background: #df898b;
        }
        span {
          width: fit-content;
        }
      }
      &::before {
        display: block;
        position: absolute;
        content: "";
        clip-path: polygon(
          3% 0,
          97% 0,
          100% 20%,
          100% 80%,
          97% 100%,
          3% 100%,
          0 80%,
          0 20%
        );

        top: 1px;
        left: 1px;
        width: 99%;
        height: 95%;
        background: var(--bg-4th);
        z-index: 400;
      }
    }

    &.full-black {
      display: grid;
      width: 100%;
      height: 100%;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        gap: 5px;
        background: black;
        border-radius: 20px;
        padding: 8px 16px;
        font-weight: 500;
        font-size: 17px;
        line-height: 120%;
        transition: all ease 0.3s;

        img {
          filter: brightness(500%);
          width: 15%;
          margin: 0;
          padding: 0;

          @media (max-width: 550px) {
            width: 12%;
          }
        }

        &:hover {
          background: rgb(43, 42, 42);
        }
        p {
          height: fit-content;
          // border: #007a5a 1px solid;
          color: white;
          margin: 0;
          padding: 0;
        }
      }
    }
    &.short-black {
      display: grid;
      width: 100%;
      height: 100%;

      a {
        text-decoration: none;
        display: grid;
        place-items: center;
        width: fit-content;
        height: 100%;
        background: black;
        border-radius: 10px;
        color: white;
        padding: 7px 15px;
        font-weight: 500;
        font-size: 15px;
        line-height: 120%;
        transition: all ease 0.3s;
        @media (max-width: 550px) {
          padding: 14px;
        }
        img {
          margin: auto;
          filter: brightness(500%);
          width: 55%;
          @media (max-width: 550px) {
            width: 40%;
          }
        }

        &:hover {
          background: #990000;
        }
      }
    }
    &.full-red-bullet {
      display: grid;
      width: 100%;
      height: 100%;
      overflow: hidden;

      &.disabled {
        cursor: default;
        z-index: 50;
        opacity: 0.6;
        transition: all ease 0.4s;

        a {
          cursor: not-allowed;
          background: gray;
        }

        &:hover {
          a {
            background: gray;
          }
        }
      }
      a {
        position: relative;
        overflow: hidden;
        text-decoration: none;
        margin: 0 auto;
        display: grid;
        justify-content: center;
        width: 80%;
        height: fit-content;
        background: rgb(153, 0, 0);
        border-radius: 50px;
        color: white;
        padding: 14px 16px;
        font-weight: 600;
        font-size: 17px;
        line-height: 120%;
        transition: all ease 0.3s;
        margin-top: 20px;
        @media (max-width: 550px) {
          padding: 16px;
        }

        img {
          filter: brightness(500%);
          width: 18%;
        }

        &:hover {
          background: #007a5a;
        }
      }
    }

    &.full-outline {
      display: grid;
      width: 100%;
      height: 100%;
      a {
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 5px;
        justify-content: center;
        width: 100%;
        height: 100%;
        background: transparent;
        border: var(--bg-tertiary) 1px solid;
        color: var( --text-tertiary);
        border-radius: 5px;
        padding: 7px 16px;
        font-weight: 400;
        font-size: 17px;
        line-height: 120%;
        @media (max-width: 820px) {
          font-size: 14px;
        }

        p {
          color: black;
          margin: 0;
          padding: 0;
        }
        span{
          display: flex;
          align-items: center;
          justify-content: center;
          width: fit-content;
        }

        img {
          width: 15%;
          filter: brightness(500%);
        }
      }
    }
    &.outline-white {
      display: grid;
      width: fit-content;
      height: 100%;

      a {
        text-decoration: none;
        z-index: 10;
        display: flex;
        gap: 5px;
        width: 100%;
        height: 100%;
        background: transparent;
        border: #9f9e9d 1px solid;
        color: #9f9e9d;
        border-radius: 50px;
        padding: 7px 16px;
        font-weight: 300;
        font-size: 14px;
        line-height: 120%;

        :hover {
          color: white;
          border: white 1px solid;

          span {
            border: none;
          }
        }

        img {
          width: 13%;
          filter: brightness(10%);
        }
      }

      :hover {
        color: white;
        border: white 1px solid;

        span {
          border: none;
        }
      }
    }

    &.full-primary {
      display: grid;
      width: 100%;
      height: 100%;
      a {
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 5px;
        justify-content: center;
        width: 100%;
        height: 100%;
        background: var(--bg-primary);
        border: none;
        color: white;
        border-radius: 7px;
        padding: 12px 16px;
        font-weight: 400;
        font-size: 17px;
        line-height: 120%;
        &:hover{
          background: var(--bg-primary-semi);
        }

        p {
          font-weight: 400;
          margin: 0;
          padding: 0;
        }
        span{
          display: grid;
          align-items: center;
          width: fit-content;
          margin: auto;
        }

        img {
          width: 14%;
          filter: brightness(500%);
        }
      }
    }
    &.full-secondary {
      display: grid;
      width: 100%;
      height: fit-content;

      a {
        font-size: 16px;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 5px;
        justify-content: center;
        width: 100%;
        height: 100%;
        background: var(--bg-secondary);
        border: none;
        color: white;
        border-radius: 7px;
        padding: 10px 8px;
        font-weight: 800;
        line-height: 120%;
        transition: all ease 0.3s;

        p {
          font-weight: 400;
          margin: 0;
          padding: 0;
        }

        img {
          width: 10%;
          filter: brightness(500%);
        }
        &:hover {
          background: #15586b;
        }
      }
    }
    &.full-outline-white {
      display: grid;
      width: 100%;
      height: 100%;
      a {
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 5px;
        justify-content: center;
        width: 100%;
        height: fit-content;
        background: transparent;
        border: white 1px solid;
        color: white;
        border-radius: 10px;
        padding: 12px 16px;
        font-weight: 800;
        font-size: 17px;
        line-height: 120%;

        img {
          width: 14%;
        }
      }
    }
    &.full-outline-white-small {
      display: grid;
      width: 100%;
      height: 100%;
      a {
        margin: auto;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 5px;
        justify-content: center;
        width: fit-content;
        height: fit-content;
        background: transparent;
        border: white 1px solid;
        color: white;
        border-radius: 10px;
        padding: 8px 12px;
        font-weight: 500;
        font-size: 17px;
        line-height: 120%;

        img {
          width: 14%;
        }
      }
    }
    &.full-outline-soft {
      display: grid;
      width: 100%;
      height: fit-content;
      background: transparent;
      border: #621415 1px solid;
      color: #990000;
      border-radius: 10px;
      font-weight: 800;
      font-size: 17px;
      line-height: 120%;
      gap: 8px;
      padding: 8px;
      margin: 0;

      img {
        margin: 0;
        padding: 0;
      }
    }
    &.outline-soft {
      display: grid;
      width: fit-content;
      height: fit-content;
      background: transparent;
      border: #621415 1px solid;
      color: #990000;
      border-radius: 10px;
      font-weight: 800;
      font-size: 17px;
      line-height: 120%;
      gap: 8px;
      padding: 16px;
      margin: 0;
    }
    &.small-outline-a {
      display: grid;
      justify-content: center;
      width: fit-content;
      height: fit-content;
      background: transparent;
      border: 1px solid #990000;
      color: #990000;
      border-radius: 10px;
      font-weight: 800;
      font-size: 17px;
      line-height: 120%;
      padding: 16px;
    }
    &.small-outline-pq {
      display: grid;
      justify-content: center;
      width: fit-content;
      height: fit-content;
      background: transparent;
      border: 1px solid #990000;
      color: #990000;
      border-radius: 10px;
      font-weight: 800;
      font-size: 17px;
      line-height: 120%;
      padding: 4px 16px;
    }
    &.mini-outline {
      display: grid;
      justify-content: center;
      width: fit-content;
      height: fit-content;
      background: transparent;
      border: 1px solid #990000;
      color: #990000;
      border-radius: 10px;
      font-weight: 700;
      font-size: 17px;
      line-height: 120%;
      padding: 12px;
    }
    &.small-outline {
      display: grid;
      width: fit-content;
      height: 100%;
      align-items: center;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: fit-content;
        background: transparent;
        border: 1px solid var(--bg-tertiary);
        color: var(--text-tertiary);
        border-radius: 5px;
        font-weight: 500;
        font-size: 17px;
        line-height: 120%;
        padding: 5px 15px;
      }
    }
    &.small-outline-md {
      display: grid;
      justify-content: center;
      width: fit-content;
      height: fit-content;
      background: transparent;
      border: #990000 1px solid;
      color: #990000;
      border-radius: 10px;
      font-weight: 800;
      font-size: 17px;
      line-height: 120%;
      padding: 8px 16px;
    }

    &.no-border {
      border: none;
      width: fit-content;
      height: fit-content;
      background: transparent;
      color: #990000;
      font-weight: 800;
      font-size: 17px;
      line-height: 120%;
      padding: 16px;
    }

    &.no-border-font {
      border: none;
      width: fit-content;
      height: fit-content;
      background: transparent;
      color: #990000;
      font-weight: 800;
      font-size: 17px;
      line-height: 120%;
    }
    &.green {
      width: 100%;
      height: 100%;
      background: transparent;
      a {
        text-decoration: none;
        display: grid;
        align-items: center;
        background: linear-gradient(0deg, #007a5a, #007a5a), #20b556;
        border-radius: 10px;
        padding: 5px 15px;
        gap: 4px;
        color: white;
        width: 100%;
        height: 100%;
        font-weight: 500;
        line-height: 2;
        font-size: 16px;
        cursor: pointer;
        &:hover {
          background: #18803e;
        }
      }

      img {
        margin-top: -2px;
      }
    }

    &.red {
      justify-content: center;
      display: grid;
      align-items: center;
      width: 100%;
      height: fit-content;
      text-align: center;
      padding: 16px;
      gap: 8px;
      background: #ffffff;
      border: 1px solid #9d153f;
      border-radius: 10px;
      color: #9d153f;
      font-weight: 800;
      font-size: 17px;
      line-height: 120%;
    }
    &.small-gray {
      display: grid;
      align-items: center;
      gap: 4px;
      background: var(--bg-secondary);
      border-radius: 5px;
      color: white;
      width: fit-content;
      height: 100%;
      line-height: 140%;
      transition: all ease 0.3s;
      a {
        font-weight: 400;
        font-size: 17px;
        display: flex;
        gap: 5px;
        color: white;
        align-items: center;
        padding: 5px 15px;
        z-index: 100;
        width: fit-content;
        height: fit-content;

        @media (max-width: 500px) {
          padding: 5px 10px;
          font-size: 13px;
        }
        @media (max-width: 300px) {
          padding: 5px 5px;
          font-size: 11px;
        }
      }
      img {
        margin-top: -2px;
      }
      &:hover {
        transition: all ease 0.3s;
        background: #ef4a4d;
        a {
          text-shadow: black 1px 1px 1px;
        }
      }
    }
    &.small-outline-red {
      display: grid;
      gap: 4px;
      background: transparent;
      border-radius: 10px;
      color: #990000;
      border: 1px solid #990000;
      width: 100%;
      height: 100%;
      height: fit-content;
      font-weight: 400;
      font-size: 15px;
      line-height: 140%;
      transition: all ease 0.3s;

      a {
        display: block;
        width: 100%;
        height: 100%;
        place-items: center;
        padding: 5px 16px;
        z-index: 100;
        color: #990000;
        // border: 1px solid;

        @media (max-width: 500px) {
          padding: 5px 10px;
          font-size: 13px;
        }
      }
      img {
        margin-top: -2px;
      }
      &:hover {
        background: #ec33362a;
        a {
          text-shadow: rgba(108, 105, 105, 0.738) 1px 1px 1px;
        }
      }
    }
    &.small {
      align-items: center;
      gap: 8px;
      width: 121px;
      height: 48px;
      background: #f6f8fa;
      border-radius: 100px;
      padding: 8px 12px 8px 8px;
      color: #1f3e56;
      width: fit-content;
      height: fit-content;
      font-weight: 400;
      font-size: 14px;
      line-height: 140%;
    }
    &.little-red-t {
      align-items: center;
      padding: 0px 12px;
      gap: 8px;
      background: #990000;
      border-radius: 1000px;
      font-weight: 800;
      font-size: 13px;
      line-height: 140%;
      color: white;
      width: 97px;
      height: 40px;
    }
    &.little-outline {
      align-items: center;
      text-align: center;
      padding: 8px 12px;
      gap: 8px;
      border: var(--bg-tertiary) 1px solid;
      color: var(--text-tertiary);
      border-radius: 5px;
      font-weight: 800;
      font-size: 17px;
      line-height: 120%;
      width: fit-content;
      height: fit-content;
    }
    &.rounded {
      background: url(@/assets/images/icon-arrow-down-white.svg);
      width: 40px;
      height: 40px;
    }
    &__span {
      background: transparent;
      color: inherit;
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: center;
      padding: 0;
      margin: 0;
      gap: 7px;
    }
    &__p {
      color: inherit;
      text-align: center;
    }
    &__a {
      color: inherit;
    }

    &.little-red-xl {
      display: flex;
      width: 100%;
      height: fit-content;
      background: #990000;
      border-radius: 10px;
      color: white;
      padding: 9px 16px;
      font-weight: 800;
      font-size: 17px;
      line-height: 120%;
      justify-content: center;
    }
    &.small-outline-xl {
      display: grid;
      justify-content: center;
      width: 100%;
      height: fit-content;
      background: transparent;
      border: #990000 1px solid;
      color: #990000;
      border-radius: 10px;
      padding: 4px 16px;
      justify-content: center;
      font-weight: 400;
      font-size: 15px;
      line-height: 140%;
    }

    &.delete {
      display: grid;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      a {
        gap: 5px;
        display: flex;
        align-items: center;
        padding: 10px;
        width: 100%;
        height: 100%;
        background: #990000;
        color: white;
        border-radius: 7px;
        font-weight: 400;
        font-size: 12px;
        transition: all ease 0.3s;
        text-decoration: none;
        border: none;
        outline: none;
        img {
          filter: brightness(500%);
          width: 13%;
        }
        &:hover {
          background: #990000;
        }
        span {
          width: fit-content;
        }
      }
      p {
        margin: 0;
        padding: 0;
      }
    }
    &.update {
      display: grid;
      width: 100%;
      height: 100%;
      a {
        font-size: 11px;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 5px;
        justify-content: center;
        width: 100%;
        height: 100%;
        background: #1b6b84;
        border: none;
        color: white;
        border-radius: 7px;
        padding: 10px 8px;
        line-height: 120%;
        transition: all ease 0.3s;
        img {
          filter: brightness(500%);
          width: 13%;
        }
        &:hover {
          background: #15586b;
          color: white;
        }
        span {
          width: fit-content;
        }
      }
      p {
        margin: 0;
        padding: 0;
      }
    }
  }
`;
