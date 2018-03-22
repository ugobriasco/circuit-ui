import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, cx } from 'react-emotion';
import { withTheme } from 'emotion-theming';

import IconInput from '../IconInput';
import { themePropType } from '../../util/shared-prop-types';

const currencyBaseStyles = ({ theme }) => css`
  color: ${theme.colors.b700};
`;

const CurrencyIcon = styled('span')`
  ${currencyBaseStyles};
`;

/**
 * SearchInput component for forms.
 */
const CurrencyInput = ({ currencyPosition, currency, theme, ...props }) => (
  <IconInput
    iconLeft={({ className }) =>
      currencyPosition === 'left' && (
        <CurrencyIcon className={className}>{currency}</CurrencyIcon>
      )
    }
    iconRight={({ className }) =>
      currencyPosition === 'right' && (
        <CurrencyIcon className={className}>{currency}</CurrencyIcon>
      )
    }
    {...{ theme, ...props }}
  />
);

CurrencyInput.propTypes = {
  theme: themePropType.isRequired,
  currencyPosition: PropTypes.oneOf(['left', 'right']),
  textAlign: PropTypes.oneOf(['left', 'right']),
  currency: PropTypes.string
};

CurrencyInput.defaultProps = {
  currencyPosition: 'right',
  textAlign: 'right',
  currency: '€'
};

/**
 * @component
 */
export default withTheme(CurrencyInput);
