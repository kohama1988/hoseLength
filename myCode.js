

// draw input table
const input = document.querySelector('#input');

let inputData = [
  [0, 20.1, 0, ,],
  [0, 85.1, 0, 29,],
  [-16.3, 106.9, -52.4, 29,],
  [-44.3, 117, -80.6, 29,],
  [-61.3, 135.2, -106.3, 29,],
  [-65, 178.7, -128.1, 31,],
  [-56.8, 222.7, -115.3, ,],
  [, , , ,],
  [, , , ,],
  [, , , ,],
  [, , , ,],
  [, , , ,],
  [, , , ,],
  [, , , ,],
  [, , , ,],
];

const inputTable = new Handsontable(input, {
  data: inputData,
  height: 'auto',
  width: 'auto',
  colWidths: 64,
  rowHeaders: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'M', 'N', 'P', 'Q', 'R', 'S'],
  colHeaders: ['X', 'Y', 'Z', 'R'],
  licenseKey: 'non-commercial-and-evaluation'
});

function getCoord() {
  let data = inputTable.getData().map(item => item.map(n => parseFloat(n)));
}
getCoord();

inputTable.addHook('construct', () => {
  console.log('initiated!')
})

inputTable.addHook('afterChange', calZeroCoord)

// swap col and row
const transpose = a => a[0].map((_, c) => a.map(r => r[c]));

// draw result-1 table
const coord1 = document.getElementById('coord1');

let data1 = [
  [, , , , , , , , , , , , , , ,],
  [, , , , , , , , , , , , , , ,],
  [, , , , , , , , , , , , , , ,],
  [, , , , , , , , , , , , , , ,],
];

const hot1 = new Handsontable(coord1, {
  data: data1,
  height: 'auto',
  width: 'auto',
  rowHeaderWidth: 60,
  colWidths: 60,
  readOnly: true,
  rowHeaders: ['X', 'Y', 'Z', 'R'],
  colHeaders: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'M', 'N', 'P', 'Q', 'R', 'S'],
  licenseKey: 'non-commercial-and-evaluation'
});

function calZeroCoord() {
  // tranpose dataFromInput to 0 coordinates
  dataFromInput = inputTable.getData();
  let result1 = transpose(dataFromInput);

  // get the 1st null of coordinates
  let index = result1[0].indexOf(null);
  // substractd by the 1st one
  for (let i = 0; i < result1.length; i++) {
    let temp = result1[i][0]
    for (let j = 0; j < result1[i].length; j++) {
      result1[i][j] -= temp;
    }
  }
  // replace extraordinary data by null
  for (let i = 0; i < result1.length; i++) {
    for (let j = index; j < result1[i].length; j++) {
      result1[i][j] = null;
    }
  }
  // update data of 0 coordinates
  hot1.updateData(result1);

  console.table(result1);
}

function calL(){

}


// draw result-2 table
const coord2 = document.getElementById('coord2');

let data2 = [
  [, , , , , , , , , , , , , , ,],
  [, , , , , , , , , , , , , , ,],
  [, , , , , , , , , , , , , , ,],
  [, , , , , , , , , , , , , , ,],
  [, , , , , , , , , , , , , , ,],
  [, , , , , , , , , , , , , , ,],
  [, , , , , , , , , , , , , , ,],
];

const hot2 = new Handsontable(coord2, {
  data: data2,
  height: 'auto',
  width: 'auto',
  rowHeaderWidth: 60,
  colWidths: 60,
  readOnly: true,
  rowHeaders: ['L1', 'M1', '曲げ角', 'N1', 'R長さ', 'R間長さ', '相対角'],
  colHeaders: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'M', 'N', 'P', 'Q', 'R', 'S'],
  licenseKey: 'non-commercial-and-evaluation'
});

// draw judge table
let judge = document.querySelector('#judge');

let judgeData = [
  [, ,],
  [, ,],
  [, ,],
  [, ,],
  [, ,],
  [, ,],
  [, ,],
  [, ,],
];

const judgeTable = new Handsontable(judge, {
  data: judgeData,
  height: 'auto',
  width: 'auto',
  colWidths: 75,
  rowHeaderWidth: 150,
  rowHeaders: ['ホース全長', 'R間ストレート長', '曲げR[MIN]', '直角曲げ後の連続R距離', '曲げ角[MIN]', '曲げ数[総数]', '相対角', 'AI判定結果'],
  colHeaders: ['設計標準', '図面値'],
  licenseKey: 'non-commercial-and-evaluation',
  columns: [
    { data: '設計標準', readOnly: true },
    { data: '図面値' }
  ]
})

// draw hose shape
const shape = document.querySelector('#shape');

function setup() {
  // let canvas = createCanvas(500, 300);
  let canvas = createCanvas(500, 300);
  canvas.parent(shape);
}
function draw() {
  background(220);
  ellipse(50, 50, 80, 80);
}
