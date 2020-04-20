// @flow
import { createPopper } from '../../src/popper';

it('warns if SVG element is used as the arrow', () => {
  const reference = document.createElement('div');
  const popper = document.createElement('div');
  const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

  createPopper(reference, popper, {
    modifiers: [
      {
        name: 'arrow',
        options: {
          element: arrow,
        },
      },
    ],
  });

  expect(console.error).toHaveBeenCalledWith(
    [
      'Popper: "arrow" element must be an HTMLElement (not an SVGElement).',
      'To use an SVG arrow, wrap it in a HTMLElement that will be used as',
      'the arrow.',
    ].join(' ')
  );
});
