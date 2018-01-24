const fs = require('fs'); // file systems

const dankmeme = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getDankMeme = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(dankmeme);
  response.end();
};

module.exports.getDankMeme = getDankMeme;
