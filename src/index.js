const { router, line } = require('bottender/router');
const jawabPesan = require('./pesan/jawabanPesan');
//Untuk local variable penampung order dan total harga
let order = [];
let summary_total_harga = 0;

module.exports = async function App() {
  return router([
    line.message(HandleMessage),
    jawabPesan.message(jawabPesan),
  ]);
};
