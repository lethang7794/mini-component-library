import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    iconSize: 16,
    fontSize: 14,
    borderThickness: 1,
    height: 24,
  },
  large: {
    iconSize: 24,
    fontSize: 18,
    borderThickness: 2,
    height: 36,
  },
};

const IconInput = ({
  label,
  icon = 'search',
  width = 250,
  size,
  placeholder = 'Search...',
  ...delegated
}) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknown size: ${size}`);
  }

  return (
    <Wrapper>
      <IconWrapper style={{ '--size': styles.iconSize + 'px' }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        <Icon id={icon} size={styles.iconSize} strokeWidth={2} />
      </IconWrapper>
      <Input
        {...delegated}
        placeholder={placeholder}
        style={{
          '--font-size': styles.fontSize / 16 + 'rem',
          '--height': styles.height + 'px',
          '--border-thickness': styles.borderThickness + 'px',
          '--width': width + 'px',
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;

  width: var(--size);
  height: var(--size);
  margin: auto;
`;

const Input = styled.input`
  height: var(--height);
  width: var(--width);
  padding-left: var(--height);

  color: inherit;
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};

  font-family: 'Roboto', sans-serif;
  font-size: var(--font-size);
  font-weight: 700;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline: -webkit-focus-ring-color auto 1px;
    outline-offset: 2px;
  }
`;

export default IconInput;
