import React, { FC } from "react";

//import libraries
import styled from "styled-components";

interface Props {
  name?: string;
  label?: string;
  color?: string;
  disabled?: boolean;
  shape?: "pill" | "rounded" | "rectangle";
  fullwidth?: boolean;
  icon?: boolean;
  handleClick?: () => void;
}

export const TextButton: FC<Props> = ({
  label,
  color,
  disabled,
  handleClick,
}) => {
  return (
    <TextButtonContainer
      aria-label={label}
      color={color}
      disabled={disabled && true}
      onClick={handleClick}
    >
      <p>{label}</p>
    </TextButtonContainer>
  );
};

export const FilledButton: FC<Props> = ({
  label,
  color,
  disabled,
  shape,
  fullwidth,
  icon,
  handleClick,
  children,
}) => {
  return (
    <FilledContainer
      aria-label={label}
      color={color}
      shape={shape}
      disabled={disabled && true}
      fullwidth={fullwidth}
      onClick={handleClick}
    >
      <Flex>
        {icon && children}
        <p>{label}</p>
      </Flex>
    </FilledContainer>
  );
};

export const OutlinedButton: FC<Props> = ({
  label,
  color,
  disabled,
  shape,
  fullwidth,
  icon,
  children,
  handleClick,
}) => {
  return (
    <OutlinedContainer
      aria-label={label}
      color={color}
      shape={shape}
      disabled={disabled && true}
      fullwidth={fullwidth}
      onClick={handleClick}
    >
      <Flex>
        {icon && children}
        <p>{label}</p>
      </Flex>
    </OutlinedContainer>
  );
};

export const IconButton: FC<Props> = ({
  name,
  color,
  children,
  disabled,
  handleClick,
}) => {
  return (
    <IconContainer
      aria-label={name}
      color={color}
      disabled={disabled && true}
      onClick={handleClick}
    >
      {children}
    </IconContainer>
  );
};

const TextButtonContainer = styled.button`
  font-weight: 600;
  background: transparent;
  border: 0;
  border-bottom: ${(props) => `2px solid ${props.color}`};
  transition: 0.2s;

  &:hover {
    color: ${(props) => props.color};
    border-bottom-color: transparent;
  }

  &:disabled {
    color: #666;
    border-bottom-color: transparent;
    cursor: not-allowed;
  }
`;

const FilledContainer = styled.button<Props>`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.05rem;
  width: ${(props) => (props.fullwidth ? "100%" : null)};
  background-color: ${(props) => props.color};
  border: transparent;
  border-radius: ${(props) =>
    props.shape === "pill" ? "2em" : props.shape === "rounded" ? ".5em" : 0};
  color: #fff;
  padding: 1.125em 1.5em;
  transition: opacity 0.5s ease-out;

  &:hover {
    opacity: 0.85;
  }

  &:active {
    opacity: 1;
  }

  &:disabled {
    background-color: #b0b0b0;
    opacity: 1;
    cursor: not-allowed;
  }
`;

const OutlinedContainer = styled.button<Props>`
  font-weight: 600;
  width: ${(props) => (props.fullwidth ? "100%" : null)};
  background-color: transparent;
  border: ${(props) => `2px solid ${props.color}`};
  border-radius: ${(props) =>
    props.shape === "pill" ? "2em" : props.shape === "rounded" ? ".5em" : 0};
  color: ${(props) => props.color};
  padding: 0.875em 1.5em;
  transition: opacity 0.3s ease-out;

  &:hover {
    opacity: 0.65;
  }

  &:active {
    opacity: 1;
  }

  &:disabled {
    border-color: #b0b0b0;
    color: #b0b0b0;
    opacity: 1;
    cursor: not-allowed;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-right: 0.5em;
  }
`;

const IconContainer = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};
  padding: 0.75em;
  border-radius: 100%;
  border: none;
  outline: transparent;
  transition: opacity 0.3s ease-out;

  &:hover {
    opacity: 0.65;
  }

  &:active {
    opacity: 0.85;
  }

  &:disabled {
    background-color: #b0b0b0;
    color: #b0b0b0;
    opacity: 1;
    cursor: not-allowed;
  }
`;
