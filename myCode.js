$(function () {

  // draw result-1 table
  const coord1 = document.getElementById('coord1');

  const data1 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [, , , , , , , , , , , , , , , ,],
    [, , , , , , , , , , , , , , , ,],
    [, , , , , , , , , , , , , , , ,],
  ];

  const hot1 = new Handsontable(coord1, {
    data1,
    height: 'auto',
    width: 'auto',
    rowHeaders: ['X', 'Y', 'Z', 'R'],
    colHeaders: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'M', 'N', 'P', 'Q', 'R',],
    licenseKey: 'non-commercial-and-evaluation'
  });

  // draw result-2 table
  /*const coord2 = document.getElementById('coord2');

  const data2 = [
    ['L1', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['M1', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['曲げ角', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['N1', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['R長さ', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['R間長さ', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['相対角', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '-'],
  ];

  const hot2 = new Handsontable(coord2, {
    data2,
    height: 'auto',
    width: 'auto',
    colHeaders: ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'M', 'N', 'P', 'Q', 'R', 'S'],
    minSpareRows: 1,
    licenseKey: 'non-commercial-and-evaluation'
  });*/

  // const container1 = document.getElementById('coord1');
  //   const hot3 = new Handsontable(container1, {
  //     data: Handsontable.helper.createSpreadsheetData(5, 5),
  //     rowHeaders: true,
  //     colHeaders: true,
  //     licenseKey: 'non-commercial-and-evaluation'
  //   });
  //   const container2 = document.getElementById('coord2');
  //   const hot4 = new Handsontable(container2, {
  //     data: Handsontable.helper.createSpreadsheetData(5, 5),
  //     rowHeaders: true,
  //     colHeaders: true,
  //     licenseKey: 'non-commercial-and-evaluation'
  //   });

})