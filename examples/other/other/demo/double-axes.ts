import { Chart } from '@antv/g2';

const data = [
  { time: '10:10', call: 4, waiting: 2, people: 2 },
  { time: '10:15', call: 2, waiting: 6, people: 3 },
  { time: '10:20', call: 13, waiting: 2, people: 5 },
  { time: '10:25', call: 9, waiting: 9, people: 1 },
  { time: '10:30', call: 5, waiting: 2, people: 3 },
  { time: '10:35', call: 8, waiting: 2, people: 1 },
  { time: '10:40', call: 13, waiting: 1, people: 2 }
];

const chart = new Chart({
  container: 'container',
  autoFit: true,
  height: 500
});
chart.data(data);
chart.scale({
  call: {
    min: 0
  },
  people: {
    min: 0
  },
  waiting: {
    min: 0
  }
});
chart.legend({
  custom: true,
  items: [
    { value: 'waiting', name: 'waiting', marker: { symbol: 'square', style: {fill: '#3182bd', r: 5} } },
    { value: 'people', name: 'people', marker: { symbol: 'hyphen', style: {stroke: '#fdae6b', r: 5, lineWidth: 3} } }
  ],
});
chart.axis('people', {
  grid: null,
  label: {
    style: {
      fill: '#fdae6b'
    }
  }
});
chart.interval()
  .position('time*waiting')
  .color('#3182bd');
chart.line()
  .position('time*people')
  .color('#fdae6b')
  .size(3)
  .shape('smooth');
chart.point()
  .position('time*people')
  .color('#fdae6b')
  .size(3)
  .shape('circle');
chart.render();
