import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'react-emotion';
import { withTheme } from 'emotion-theming';

import Input from '../Input';
import IconInputWrapper from '../IconInputWrapper';
import HtmlElement from '../HtmlElement';

const iconBaseStyles = ({ theme }) => css`
  color: ${theme.colors.b700};
`;

/**
 * SearchInput component for forms.
 */
const CurrencyInput = ({ iconPosition, currency, disabled, theme, ...props }) => (
  <IconInputWrapper
    iconPosition={iconPosition}
    icon={({ className, disabledClassName }) => (
      <HtmlElement
        className={cx(iconBaseStyles({theme}), className, { [disabledClassName]: disabled })}
      >{currency}</HtmlElement>
    )}
    input={({ className }) => <Input {...{ ...props, disabled, className }} />}
  />
);

/**
 * Triggers disabled styles on the component. This is also forwarded as
 * attribute to the <input> element.
 */
CurrencyInput.propTypes = {
  iconPosition: PropTypes.oneOf(['left', 'right']),
  textAlign: PropTypes.oneOf(['left', 'right']),
  currency: PropTypes.string.request,
  disabled: PropTypes.bool,
};

CurrencyInput.defaultProps = {
  iconPosition: 'right',
  textAlign: 'right',
  currency: '€',
  disabled: false
};

/**
 * @component
 */
export default withTheme(CurrencyInput);
