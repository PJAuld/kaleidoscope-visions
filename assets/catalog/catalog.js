export default {
  getCatalogData,
};

function getCatalogData() {
  const pieces = [
    { id: '0430-na', extension: 'jpg' },
    { id: '0464-na', extension: 'jpg' },
    { id: '0478-na', extension: 'jpg' },
    { id: '0494-na', extension: 'jpg' },
    { id: '2372-na', extension: 'jpg' },
    { id: '2373-na', extension: 'jpg' },
    { id: 'ACP4', extension: 'png' },
    { id: 'BP10', extension: 'png' },
    { id: 'CCP11', extension: 'png' },
    { id: 'JP9', extension: 'png' },
    { id: 'LH8', extension: 'png' },
    { id: 'PPB2a', extension: 'png' },
    { id: 'SF5', extension: 'png' },
    { id: 'STC6', extension: 'png' },
    { id: 'STC6a', extension: 'png' },
    { id: 'TG12-1', extension: 'png' },
    { id: 'TG12-2', extension: 'png' },
  ]
  .map(piece => {
    return { order: Math.random(), ...piece };
  })
  .sort((a, b) => a.order - b.order );

  return pieces;
}
