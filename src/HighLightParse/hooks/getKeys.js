import { patterns } from './index.js';

export function getKeys(text, composeText) {
  text = text.replace(patterns.keys, (g0, index) => {
    let color = patterns.constants.test(g0) ? 'white' : 'orange';
    composeText[index] = `<span class="${color}-string">${g0}</span>`;
    return '~'.repeat(g0.length);
  });

  return [text, composeText];
}
