const partyfy = require('partyfy');
const Multipart = require('lambda-multipart');

exports.handler = event => {
  return new Promise((yah, nah) => {
    try {
      const parser = new Multipart(event);
      parser.on('file', async file => {
        try {
          const partyImage = await partyfy(file);

          yah({
            status: 200,
            body: partyImage
          });
        } catch (err) {
          console.error(err);
          nah({ statusCode: 500, body: JSON.stringify(err) });
        }
      });

      parser.on('error', err => {
        console.error(err);
        nah({ statusCode: 500, body: JSON.stringify(err) });
      });
    } catch (err) {
      console.error(err);
      nah({ statusCode: 500, body: JSON.stringify(err) });
    }
  });
};
