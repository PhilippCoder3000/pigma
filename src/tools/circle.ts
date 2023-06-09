import { Tool } from '~/types';

export const circle: Tool = (
  { clientX, clientY },
  { startX, startY, context, history, stateManager },
) => {
  context.putImageData(history[history.length - 1], 0, 0);

  context.beginPath();
  context.arc(
    startX + Math.abs(clientX - startX) / 2,
    startY + Math.abs(clientY - startY) / 2,
    Math.abs((clientX - startX) + (clientY - startY)) / 4,
    0,
    2 * Math.PI,
  );
  if (stateManager.state.figureType === 'fill') {
    context.fill()
  } else {
    context.stroke();
  }
};
