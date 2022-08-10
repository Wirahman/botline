const { router, line  } = require('bottender/router');

// const { api } = require('messaging-api-line');

// const client = new api({
//   accessToken: 'qjhTFVIwTQmUL5u8uohcGVOcwdkMgQtqyR8MN96HaxWMH56UT5hHmLHewPYNBC9bQMbLrL3SXxgyAQRxLGTydadDvnyGwJ1WnS6N9PE8uIFB+Id75gQ4UEcLIMlGFkwiz5kYNNKGYE/xk6/RzXmA/gdB04t89/1O/w1cDnyilFU=',
//   channelSecret: 'faad076cdc0af36786d50db3066d6586',
// });

const lineNotify = new LineNotify({
  clientId: '<LINE_NOTIFY_CLIENT_ID>',
  clientSecret: '<LINE_NOTIFY_CLIENT_SECRET>',
  redirectUri: 'https://example.com/your/notify/redirect/path',
});

module.exports = async function App() {
  // return HandleMessage;
  return router([
    line.message(HandleMessage),
    line.message(ChatBlubuk),
  ]);
};

//Untuk handle event tentang chat tentang blubuk
async function ChatBlubuk(context){
  if(context.event.text.toLowerCase().indexOf('blubuk') >= 0){
    if(context.event.text.toLowerCase() === 'blubuk') {
      await context.replyText(
        'Ya Hadir, Blubuk Disini...'
      );
    }else if(context.event.text.toLowerCase().indexOf('halo') >= 0) {
      await context.sendText(
        'Hallo juga kakak.', {
          emojis: [
            {
              index: 14,
              productId: '5ac1bfd5040ab15980c9b435',
              emojiId: '001',
            },
          ],
        }
      );
    }
  }  
}

//Untuk handle event balasan chat berupa teks
async function HandleMessage(context) {
  if(context.event.isText) {
    // Untuk handle apabila bot menerima input berupa text
    if(context.event.text.toLowerCase() === 'freya'){
      await context.replyText(
        'Gas main mobile legend'
      );
    } else if(context.event.text.toLowerCase() === 'andi') {
      await context.replyText(
        'Hallo nama saya andi...'
      );
    } else if(context.event.text.toLowerCase().indexOf('hell') >= 0){
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
