import React from 'react';

import Icon from '../Icon';
import styled from "styled-components";
import {COLORS} from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const INPUT_SIZES = {
    small: {
        fontSize: 14,
        lineHeight: 16.41,
        iconSize: 16,
        borderBottomWidth: 1,
        paddingLeft: 24,
    },
    large: {
        fontSize: 18,
        lineHeight: 21.09,
        iconSize: 24,
        borderBottomWidth: 2,
        paddingLeft: 36
    }
};

const IconInput = ({label, icon, width = 250, size, placeholder,}) => {
    const style = INPUT_SIZES[size];

    if (!style) {
        throw new Error(`Unknown INPUT size: ${size}!`);
    }

    return <Wrapper>
        <IconWrapper style={{'--size': style.size + 'px'}}>
            <MyIcon id={icon} size={style.iconSize}/>
            {/*<Icon id={icon} size={style.iconSize} style={{position: 'absolute', top: 0, bottom: 0, left: 0}}/>*/}
        </IconWrapper>
        <Input placeholder={placeholder} style={{
            '--borderBottomWidth': style.borderBottomWidth + 'px',
            '--fontSize': style.fontSize + 'px',
            '--paddingLeft': style.paddingLeft + 'px',
            '--lineHeight': style.lineHeight + 'px',
            '--inputWidth': width + 'px',
        }}/>
        <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
};

const Wrapper = styled.div`
    position: relative
`

const IconWrapper = styled.div`
    width: var(--size);
    height: var(--size);
`
const MyIcon = styled(Icon)`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    color: ${COLORS.gray700};
    /* BORDER ??? */
`

const Input = styled.input`
    font-size: var(--fontSize);
    line-height: var(--lineHeight);
    font-weight: 700;
    color: ${COLORS.gray700};

    padding-left: var(--paddingLeft);
    border: none;
    border-bottom: var(--borderBottomWidth) solid ${COLORS.black};
    width: var(--inputWidth);

    &::placeholder {
        color: ${COLORS.gray500};
        font-weight: 400;
    }

    &:focus {
        outline-offset: 4px;
    }

    &:hover {
        outline-style: auto;
        outline-offset: 4px;
        outline-color: ${COLORS.transparentGray15};
    }
`

export default IconInput;
