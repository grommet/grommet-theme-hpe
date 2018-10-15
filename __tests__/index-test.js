import { hpe } from '../src/js';

test('Loads hpe theme', () => {
  expect(hpe).toMatchSnapshot();
});
