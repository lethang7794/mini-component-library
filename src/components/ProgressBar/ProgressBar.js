/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  large: {
    height: 16,
    padding: 4,
    radius: 8,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  },
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
  border-radius: var(--radius);
`;

const RadiusOverflow = styled.div`
  border-radius: 4px;

  /* Trim off progress bar's head and tail (if it nearly full) */
  overflow: hidden;
`;

const ActiveBar = styled.div`
  background-color: ${COLORS.primary};
  width: var(--width);
  height: var(--height);
`;

const ProgressBar = ({ value, size }) => {
  const style = STYLES[size];
  if (!style) {
    throw new Error(`Unknown size passed to ProgressBar: ${size} `);
  }

  return (
    <Wrapper
      role='progressbar'
      aria-valuenow={value}
      aria-valuemin='0'
      aria-valuemax='100'
      style={{
        '--padding': style.padding + 'px',
        '--radius': style.radius + 'px',
      }}
    >
      <RadiusOverflow>
        <ActiveBar
          value={value}
          size={size}
          style={{
            '--width': value + '%',
            '--height': style.height + 'px',
          }}
        />
        <VisuallyHidden>{value}%</VisuallyHidden>
      </RadiusOverflow>
    </Wrapper>
  );
};

export default ProgressBar;
