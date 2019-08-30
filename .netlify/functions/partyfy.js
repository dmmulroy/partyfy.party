const partyfy = require('partyfy');
const Multipart = require('lambda-multipart');

exports.handler = event => {
  return new Promise((yah, nah) => {
    try {
      const parser = new Multipart(event);
      parser.on('file', async file => {
        console.log('here!');
        try {
          const partyImage = await partyfy(file);

          yah({
            status: 200,
            body: partyImage
          });
        } catch (err) {
          nah(err);
        }
      });
    } catch (err) {
      nah(err);
    }
  });
};
