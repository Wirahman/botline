const { router, line } = require('bottender/router');
//Untuk local variable penampung order dan total harga
let order = [];
let summary_total_harga = 0;

module.exports = async function App() {
  return router([
    line.message(HandleMessage),
  ]);
};

//Untuk handle event balasan chat berupa teks
async function HandleMessage(context) {
  let input = context.event.isText;
  if(input) {
    // Untuk handle apabila bot menerima input berupa text
    if(input.toLowerCase() === 'blubuk') {
          await context.replyText(
            'Ya Hadir'
          );
    } else if(input.toLowerCase() === 'freya'){
      await context.replyText(
        'Gas main mobile legend'
      );
    // } else if(input.indexOf("blu").toLowerCase() != 1){
    //   await context.replyText(
    //     'Ya Hadir, Blubuk Disini...'
    //   );
    } 
    
  }else if(context.event.isLocation){
    //Untuk handle apabila bot menerima input berupa lokasi
  }
}
