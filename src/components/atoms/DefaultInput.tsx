import moment from 'moment';
import React, { HTMLInputTypeAttribute, useEffect } from 'react';
import styled from 'styled-components';
import { colors } from '../../constant/colors';
import { InputValueTypes } from '../../types/defaultTypes';

interface LocalProps {
    type: HTMLInputTypeAttribute;
    value?: InputValueTypes;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    name?: string;
    checked?: boolean;
    onBlur?: () => Promise<void>;
    inputRef?: React.RefObject<HTMLInputElement>;
}
const DefaultInput = ({
    type,
    onChange,
    value,
    name,
    placeholder,
    onBlur,
    inputRef,
}: LocalProps) => {
    useEffect(() => {
        if (inputRef) inputRef?.current?.focus();
    }, [inputRef]);

    return (
        <StyledInput
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            onBlur={onBlur}
            min={'1900-01-01'}
            step="1"
            max={moment(new Date()).format('YYYY-MM-DD')}
            ref={inputRef}
            maxLength={name === 'userHp' ? 13 : name === 'userBirth' ? 10 : 30}
        />
    );
};

export default DefaultInput;

const StyledInput = styled.input<{
    type: HTMLInputTypeAttribute;
}>`
    display: ${(props) => (props.type === 'radio' ? 'none' : 'flex')};
    outline: none;
    width: 10rem;
    align-items: center;
    padding: 10px 8px;
    border: 1px solid ${colors.gray};
    border-radius: 4px;
    background: transparent;
    &:focus {
        border: 2px solid ${colors.violet};
    }
    &:invalid {
        border: solid red 2px;
    }
`;
