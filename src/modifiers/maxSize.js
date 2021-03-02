// @flow
import { detectOverflow } from '../utils/detectOverflow';
import type { ModifierArguments } from '../types';

export default {
  name: 'maxSize',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['offset', 'preventOverflow', 'flip'],
  fn({ state, name, options }: ModifierArguments<{}>) {
    const overflow = detectOverflow(state, options);
    const { x, y } = state.modifiersData.preventOverflow || { x: 0, y: 0 };
    const { width, height } = state.rects.popper;
    const [basePlacement] = state.placement.split('-');

    const widthProp = basePlacement === 'left' ? 'left' : 'right';
    const heightProp = basePlacement === 'top' ? 'top' : 'bottom';

    state.modifiersData[name] = {
      width: width - overflow[widthProp] - x,
      height: height - overflow[heightProp] - y,
      isOverflow:
        overflow[widthProp] > 0
          ? overflow[heightProp] > 0
            ? true
            : 'width'
          : overflow[heightProp] > 0
          ? 'height'
          : false,
    };
  },
};
