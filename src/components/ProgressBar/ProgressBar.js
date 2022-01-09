/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const styles = {
  large: { height: '24px', padding: '4px' },
  medium: { height: '12px' },
  small: { height: '8px' },
};

const Wrapper = styled.div`
  width: 370px;
  overflow: hidden;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
  border-radius: 8px;
`;

const RadiusOverflow = styled.div`
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

const ActiveBar = styled.div`
  background-color: ${COLORS.primary};
  width: ${({ value }) => value}%;
  height: 100%;
`;

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper
      role='progressbar'
      aria-valuemin='0'
      aria-valuemax='100'
      aria-valuenow={value}
      style={styles[size]}
    >
      <RadiusOverflow>
        <ActiveBar value={value} size={size} />
      </RadiusOverflow>
    </Wrapper>
  );
};

export default ProgressBar;
