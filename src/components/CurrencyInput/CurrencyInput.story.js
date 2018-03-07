import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import withTests from '../../util/withTests';
import CurrencyInput from './CurrencyInput';

storiesOf('CurrencyInput', module)
  .addDecorator(withTests('CurrencyInput'))
  .add('CurrencyInput', withInfo()(() => <CurrencyInput placeholder="123,45" />))
  .add('Disabled CurrencyInput', withInfo()(() => <CurrencyInput placeholder="123,45" disabled />))
  .add('CurrencyInput in лв.', withInfo()(() => <CurrencyInput placeholder="123,45" currency="лв." />))
  .add('CurrencyInput left align', withInfo()(() => <CurrencyInput placeholder="123,45" iconPosition="left" textAlign="left" />));
