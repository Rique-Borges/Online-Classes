/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import qr from "qr-image";
import inquirer from "inquirer";
import fs from "fs";

inquirer
  .prompt([
    {
    message: "What site would you want to turn into a QR Code?",
    name: "URL"
    }
  ])
  .then((answers) => {
    const url = answers.URL;
    let qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFileFile('URL.txt', url, (err) => {
        if (err) throw err;
        console.log("QR Code Generated successfully")
    });

  })
  .catch((error) => {
    if (error.isTtyError) {
        console.log("error");
    } else {
        console.log("error");
    }
  });