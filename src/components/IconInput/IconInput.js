import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    iconSize: 16,
    margin: 24,
    fontSize: 14,
    lineHeight: 16,
  },
  large: {
    iconSize: 24,
    margin: 36,
    fontSize: 18,
    lineHeight: 21,
  },
};

const IconInput = ({ label, icon = 'search', width = 250, size, placeholder = 'Search...' }) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknown size: ${size}`);
  }

  return (
    <Wrapper style={{ '--width': width + 'px' }}>
      <IconWrapper style={{ '--size': styles.iconSize + 'px' }}>
        <Icon id={icon} size={styles.iconSize} strokeWidth={2} />
        <VisuallyHidden>{label}</VisuallyHidden>
      </IconWrapper>
      <InputWrapper style={{ '--margin': styles.margin + 'px' }}>
        <Input
          placeholder={placeholder}
          style={{
            '--font-size': styles.fontSize / 16 + 'rem',
            '--line-height': styles.lineHeight / 16 + 'rem',
          }}
        />
      </InputWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  border-bottom: 1px solid ${COLORS.black};
  width: var(--width);

  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }

  &:focus-within {
    outline: -webkit-focus-ring-color auto 1px;
    outline-offset: 2px;
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

const InputWrapper = styled.div`
  margin-left: var(--margin);
`;

const Input = styled.input`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  color: ${COLORS.gray700};
  border: none;
  outline: none;

  font-family: 'Roboto', sans-serif;
  font-size: var(--font-size);
  line-height: var(--line-height);
  font-weight: 700;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  ${Wrapper}:hover & {
    color: ${COLORS.black};
  }
`;

export default IconInput;
