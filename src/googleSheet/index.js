const { GoogleSpreadsheet } = require('google-spreadsheet');
const {
  GOOGLE_SERVICE_ACCOUNT_EMAIL,
  GOOGLE_PRIVATE_KEY,
  DOC_ID,
} = require('./meta');

let CATEGORIES = [];

(async function () {
  const doc = new GoogleSpreadsheet(DOC_ID);
  await doc.useServiceAccountAuth({
    client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: GOOGLE_PRIVATE_KEY,
  });
  await doc.loadInfo(); // loads document properties and worksheets
  // console.log(doc);

  const sheets = doc.sheetsByIndex;
  CATEGORIES = sheets.map((sheet) => sheet.title);
  console.log(CATEGORIES);
  await sheets[0].loadCells('A1:E10');
  const a1 = sheets[0].getCell(0, 0);
  console.log(a1.value);
})();
