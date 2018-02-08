import * as React from 'react';
import App from '../src/views/App';
import * as renderer from 'react-test-renderer';

test('Ejemplo de Test Instantaneo N° ~> ', () => {
  const component = renderer.create(
      <App />,
  );

  let tree  = component.toJSON();

  /**
   * crea evento change en input
   */
  tree.children[1].children[2].props.onChange({ target: { value: 'test instantaneo'} });

  /**
   *  N° ~> 1
   * test tag <a> (test contenido) </a>
   */
  tree  = component.toJSON();
  expect(tree.children[1].children[0].children[0]).toEqual('test instantaneo');
  expect(tree).toMatchSnapshot();

  /**
   * evento click en button
   */
  tree.children[1].children[3].props.onClick(null);
  
  /**
   *  N° ~> 2
   * test tag <ul> (test contenido) </ul>
   */
  tree  = component.toJSON();
  expect(tree.children[2].children.length).toEqual(1);
  expect(tree).toMatchSnapshot();

  /**
   *  N° ~> 3
   * test tag <ol> (test contenido) </ol>
   */
  if (tree.children[2].children.length > 0) {
    tree  = component.toJSON();
    expect(tree.children[2].children[0].children[0]).toEqual('test instantaneo');
    expect(tree).toMatchSnapshot();
  }

  // console.log( tree.children[2].children.length );

});
