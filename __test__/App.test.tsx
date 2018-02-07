import * as React from 'react';
import App from '../src/views/App';
import * as renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
      <App />,
  );

  let tree  = component.toJSON();
  expect(tree.props.className).toEqual('App');
  expect(tree).toMatchSnapshot();

  let input1 = tree.children[1].children[2];

  input1.props.onChange({ target: { value: 'test instantaneo'} });

  tree  = component.toJSON();
  expect(tree.children[1].children[0].children[0]).toEqual('test instantaneo');
  expect(tree).toMatchSnapshot();
  
  // console.log(tree.children[1].children[0]);

});
