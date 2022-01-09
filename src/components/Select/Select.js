import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect label={label} value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <SelectPresentation>
        <DisplayValue>{displayedValue}</DisplayValue>
        <IconWrapper style={{ '--size': 24 + 'px' }}>
          <Icon id='chevron-down' as='span' size={24} />
        </IconWrapper>
      </SelectPresentation>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  opacity: 0;
`;

const SelectPresentation = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  border: none;

  color: ${COLORS.gray700};

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const DisplayValue = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  padding: 12px 16px;
  padding-right: 52px;
`;

const IconWrapper = styled.span`
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0px;

  width: var(--size);
  height: var(--size);
  margin: auto;

  pointer-events: none;
`;

export default Select;
