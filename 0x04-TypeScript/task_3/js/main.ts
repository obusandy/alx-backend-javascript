//<reference path='./crud.d.ts'>
import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};
//  update the row
const brandnwRowID: RowID = CRUD.insertRow(row);
const revampRow: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 23,
};
CRUD.updateRow(brandnwRowID, revampRow);
CRUD.deleteRow(brandnwRowID);
