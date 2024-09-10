import React from 'react';

import Icon from '../Icon';
import styled from "styled-components";
import {COLORS} from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const INPUT_SIZES = {
    small: {
        fontSize: 14,
        borderThickness: 1,
        inputHeight: 24,
        lineHeight: 16.41,
        paddingLeft: 24,
    },
    large: {
        fontSize: 18,
        borderThickness: 2,
        inputHeight: 36,
        lineHeight: 21.09,
        paddingLeft: 36,
    }
};

const IconInput = ({label, icon, width = 250, size, placeholder,}) => {
    const styles = INPUT_SIZES[size];

    const iconSize = size === 'small' ? 16 : 24;

    if (!styles) {
        throw new Error(`Unknown INPUT size: ${size}!`);
    }

    return <Wrapper style={{'--height': styles.inputHeight + 'px'}}>
        <VisuallyHidden>{label}</VisuallyHidden>

        <IconWrapper style={{'--size': iconSize + 'px'}}>
            <MyIcon id={icon} size={iconSize}/>
            {/*<Icon id={icon} size={styles.iconSize} styles={{position: 'absolute', top: 0, bottom: 0, left: 0}}/>*/}
        </IconWrapper>
        <Input placeholder={placeholder} style={{
            '--borderThickness': styles.borderThickness + 'px',
            '--fontSize': (styles.fontSize / 16) + 'rem',
            '--paddingLeft': styles.paddingLeft + 'px',
            '--lineHeight': styles.lineHeight + 'px',
            '--inputWidth': width + 'px',
            '--inputHeight': (styles.inputHeight / 16) + 'rem',
        }}/>
    </Wrapper>
};

const Wrapper = styled.label` /* Se utilizzo una LABEL al posto di un DIV, qualsiasi elemento cliccato al suo interno, imposterà il cursore nell'input */
    display: block;
    position: relative;
    color: ${COLORS.gray700};

    max-width: fit-content;

    &:focus {
        outline-style: auto;
        outline-offset: 4px;
    }

    &:hover {
        color: ${COLORS.black};
    }
`

const IconWrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto 0;
    height: var(--size);

    width: var(--size);
`
const MyIcon = styled(Icon)`
    /* BORDER ??? */
`

const Input = styled.input`
    width: var(--inputWidth);
    height: var(--inputHeight);
    font-size: var(--fontSize);
    border: none;
    border-bottom: var(--borderThickness) solid ${COLORS.black};
    padding-left: var(--paddingLeft);
    color: inherit; /* Il colore non viene automaticamente ereditato come succede per l'icona, quindi devo specificare color:inherit */
    font-weight: 700;

    line-height: var(--lineHeight);

    &::placeholder {
        color: ${COLORS.gray500};
        font-weight: 400;
    }
`

export default IconInput;
