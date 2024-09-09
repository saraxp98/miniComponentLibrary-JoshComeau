import React from 'react';
import {getDisplayedValue} from './Select.helpers';
import styled from "styled-components";
import {COLORS} from "../../constants";
import Icon from "../Icon";

const Select = ({label, value, onChange, children}) => {
    const displayedValue = getDisplayedValue(value, children);

    return (<Wrapper>
            <NativeSelect value={value} onChange={onChange} style={{appearance: 'none'}}>
                {children}
            </NativeSelect>
            <PresentationalBit>
                {displayedValue}
                <IconWrapper style={{'--size': 24 + 'px'}}>
                    <Icon id="chevron-down"/>
                </IconWrapper>
            </PresentationalBit>
        </Wrapper>
    );
};

const Wrapper = styled.div`  /* grows based on the size of not-absolute children!!! */
    position: relative;
    width: 300px;`

const NativeSelect = styled.select`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    /* Allow the select to span the full height in Safari */
    -webkit-appearance: none;

    & > option {
        font-size: ${16 / 16}rem;
    }`

const IconWrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 10px;
    margin: auto;
    width: var(--size);
    height: var(--size);
    pointer-events: none;`

const PresentationalBit = styled.div`
    color: ${COLORS.gray700};
    background-color: ${COLORS.transparentGray15};
    font-size: ${16 / 16}rem;
    padding: 12px 52px 12px 16px;
    border-radius: 8px;

    ${NativeSelect}:focus + & { /* with "+" operator I apply the style to PresentationalBit that are directly adjacent to NativeSelect */
        outline: 1px dotted #212121; /* apply this style to PresentationalBit if the next "outline" style is invalid */
        outline: 5px auto -webkit-focus-ring-color;
    }

    ${NativeSelect}:hover + & {
        color: ${COLORS.black};
    }`

export default Select;
