// export async function handler() {
//   return {
//     statusCode: 200,
//     body: JSON.stringify({ data: 'hello' })
//   };
// }
exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({ data: 'hello' })
  };
};
