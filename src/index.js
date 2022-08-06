const { router, line } = require('bottender/router');
//Untuk local variable penampung order dan total harga

module.exports = async function App() {
  return router([
    line.message(HandleMessage),
  ]);
};

//Untuk handle event balasan chat berupa teks
async function HandleMessage(context) {
  if(context.event.isText) {
    // Untuk handle apabila bot menerima input berupa text
    if(context.event.text.toLowerCase() === 'blubuk') {
          await context.replyText(
            'Ya Hadir'
          );
    } else if(context.event.text.toLowerCase() === 'freya'){
      await context.replyText(
        'Gas main mobile legend'
      );
    } else if(context.event.text.toLowerCase().indexOf('blu') >= 0){
      await context.replyText(
        'Ya Hadir, Blubuk Disini...'
      );
    }  else if(context.event.text.toLowerCase().indexOf('hell') >= 0){
      if(context.event.text.toLowerCase() === 'hell'){
        await context.replyText(
          'Hell Dipanggil tuh...'
        );
      } else if(context.event.text.toLowerCase().indexOf('nakal') >= 0){
        await context.replyText(
          'Iya emank, nakal si hell... Marahin aja kak...'
        );
      } else if(context.event.text.toLowerCase().indexOf('bandel') >= 0){
        await context.replyText(
          'Cie cie yang ehem ehem sama hell...'
        );
      } else if(context.event.text.toLowerCase() === 'profilpengguna'){
        await context.replyText(
          console.log(context.session.user);
        );
      } 
    } 
  }else if(context.event.isLocation){
    //Untuk handle apabila bot menerima input berupa lokasi
  }
}
