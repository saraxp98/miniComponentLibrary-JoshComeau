/* eslint-disable no-unused-vars */
import React from 'react';
import styled from "styled-components";
import {COLORS} from "../../constants";

const PROGRESSBAR_STYLES = {
    small: {
        height: 8,
        padding: 0,
        radius:4,
    },
    medium: {
        height: 12,
        padding: 0,
        radius:4,
    },
    large: {
        height: 16,
        padding: 4,
        radius:8,
    }
}

const ProgressBar = ({value, size}) => {
    /*    let cssStyle;

        if (size === 'small') {
            cssStyle = PROGRESSBAR_STYLES.small;
        } else if (size === 'medium') {
            cssStyle = PROGRESSBAR_STYLES.medium;
        } else if (size === 'large') {
            cssStyle = PROGRESSBAR_STYLES.large;
        } else {
            throw new Error('size must be "small", "medium" or "large"!');
        }
        */

    const height = size === 'small' ? '8px' : '12px';

    const styles = PROGRESSBAR_STYLES[size];
    if (!styles) {
        throw new Error(`Unknown PROGRESSBAR size: ${size}!`);
    }

    return <div>
        <label for="myProgressBar" style={{marginRight: '20px', textTransform: 'capitalize'}}>{size}</label>
        <br/>
        <br/>
        <Wrapper role='progressbar' aria-valuemax={100} aria-valuemin={0} aria-valuenow={value}
                 style={{
                     '--padding': styles.padding + 'px',
                     '--radius': styles.radius + 'px'
                 }}>
            <BarWrapper >
                {/*<VisuallyHidden>{value}%</VisuallyHidden> /!* per screen readers!! *!/*/}
                <Bar style={{'--width': value + '%','--height': styles.height + 'px'}}/>
            </BarWrapper>
        </Wrapper>
    </div>
};

const Wrapper = styled.div`
    background-color: ${COLORS.transparentGray15};
    box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
    border-radius: var(--radius);
    padding: var(--padding);
`

const BarWrapper = styled.div`
    overflow: hidden; /* Trim off BAR corners when it is full */
    border-radius: 4px;
`

const Bar = styled.div`
    width: var(--width);
    height: var(--height);
    background-color: ${COLORS.primary};
    border-radius: 4px 0 0 4px;
`

export default ProgressBar;
