const { router, line } = require('bottender/router');
// const { api } = require('messaging-api-line');

// const client = new api({
//   accessToken: 'qjhTFVIwTQmUL5u8uohcGVOcwdkMgQtqyR8MN96HaxWMH56UT5hHmLHewPYNBC9bQMbLrL3SXxgyAQRxLGTydadDvnyGwJ1WnS6N9PE8uIFB+Id75gQ4UEcLIMlGFkwiz5kYNNKGYE/xk6/RzXmA/gdB04t89/1O/w1cDnyilFU=',
//   channelSecret: 'faad076cdc0af36786d50db3066d6586',
// });

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
    } if(context.event.text.toLowerCase() === 'Andi') {
      await context.replyText(
        'Hallo nama saya andi...'
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
      }
    } else if(context.event.text.toLowerCase() === 'profilpengguna'){
      // await context.replyText(
      //   console.log(context.session.user)
      // );

      // client.reply(REPLY_TOKEN, [
      //   api.createText('Hello'),
      //   api.createImage({
      //     originalContentUrl: 'https://i.pinimg.com/564x/44/05/66/4405664b090a9b633d6f04519a47b885.jpg',
      //     previewImageUrl: 'https://i.pinimg.com/564x/44/05/66/4405664b090a9b633d6f04519a47b885.jpg',
      //   }),
      //   api.createText('End'),
      // ]);
    } 

  }else if(context.event.isLocation){
    //Untuk handle apabila bot menerima input berupa lokasi
  }
}
