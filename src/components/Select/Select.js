import React, { useRef } from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  const selectRef = useRef();

  const handleFocusSelect = () => {
    if (selectRef.current) {
      selectRef.current.focus();
    }
  };

  return (
    <Wrapper onClick={handleFocusSelect}>
      <DisplayValue>{displayedValue}</DisplayValue>
      <IconWrapper>
        <Icon id='chevron-down' as='span' size={24} />
      </IconWrapper>
      <NativeSelect label={label} value={value} onChange={onChange}>
        {children}
      </NativeSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;

  display: inline-block;
  width: fit-content;

  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  border: none;

  &:focus-within {
    outline: 2px solid #4374cb;
  }
`;

const DisplayValue = styled.span`
  display: inline-block;

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: ${COLORS.gray700};
  padding: 12px 52px 12px 16px;

  ${Wrapper}:hover & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.span`
  display: inline-block;
  position: absolute;
  top: 10px;
  right: 10px;

  color: ${COLORS.gray700};
  ${Wrapper}:hover & {
    color: ${COLORS.black};
  }
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  opacity: 0;
`;

export default Select;
