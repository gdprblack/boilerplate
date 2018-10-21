var PDFDocument, doc;
var fs = require('fs');
PDFDocument = require('pdfkit');
doc = new PDFDocument;

// Set a title and pass the X and Y coordinates
doc.fontSize(25).text('Confidential data request', 120, 20);
// Set the paragraph width and align direction
//doc.text('Wally Gator is a swinging alligator in the swamp. He\'s the greatest percolator when he really starts to romp. There has never been a greater operator in the swamp. See ya later, Wally Gator.', {
 //   width: 410,
 //   align: 'left'
//});
doc.image('logo3.png',15,15);

doc.fontSize(12).text('The data of the user with ID H57V44O, who were stored by Coinbase and encrypted from day 05/07/2018, have been accessed on the 09/09/2018, with the authorization of the DPO and the following board members:', 120, 60);


doc.lineCap('butt')
  .moveTo(270, 115)
  .lineTo(270, 215)
  .stroke()
  .fontSize(12)


row(doc, 110);
row(doc, 130);
row(doc, 150);
row(doc, 170);
row(doc, 190);

textInRowFirst(doc, 'Board Member 1', 120);
textInRowFirst(doc, 'Board Member 2', 140);
textInRowFirst(doc, 'Board Member 3', 160);
textInRowFirst(doc, 'Board Member 4', 180);
textInRowFirst(doc, 'DPO', 200);


textInRowTwo(doc, 'F9S34FG', 120);
textInRowTwo(doc, 'H8543WW', 140);
textInRowTwo(doc, 'P34GYT6', 160);
textInRowTwo(doc, 'JG854SD', 180);
textInRowTwo(doc, '12FSD86', 200);

doc.fontSize(18).text('User data:', 70, 250);
doc.fontSize(12).text('Name: Enric Moreu', 70, 270);
doc.fontSize(12).text('Age: 24', 70, 290);
doc.fontSize(12).text('Email: enric.moreu@gmail.com', 70, 310);
doc.fontSize(12).text('Phone: +34669214500', 70, 330);


doc.pipe(fs.createWriteStream('output.pdf'));
// PDF Creation logic goes here
doc.end();

function textInRowFirst(doc, text, heigth) {
  doc.y = heigth;
  doc.x = 50;
  doc.fillColor('black')
  doc.text(text, {
    paragraphGap: 5,
    indent: 10,
    align: 'justify',
    columns: 1,
  });
  return doc
}

function textInRowTwo(doc, text, heigth) {
  doc.y = heigth;
  doc.x = 280;
  doc.fillColor('black')
  doc.text(text, {
    paragraphGap: 5,
    indent: 10,
    align: 'justify',
    columns: 1,
  });
  return doc
}


function row(doc, heigth) {
  doc.lineJoin('miter')
    .rect(30, heigth+5, 500, 20)
    .stroke()
  return doc
}