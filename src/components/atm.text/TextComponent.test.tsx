import React from 'react';
import renderer from 'react-test-renderer';

import {Text} from '../index';

it('renders title correctly', () => {
  const title = renderer.create(<Text preset="title">Title</Text>).toJSON();

  expect(title).toMatchSnapshot();
});
