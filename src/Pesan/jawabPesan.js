
//Untuk handle event balasan chat berupa teks
async function HandleMessage(context) {
    if(context.event.isText) {
      // Untuk handle apabila bot menerima input berupa text
      if(context.event.text.toLowerCase() === 'blubuk1') {
            await context.replyText(
              'Ya Hadir 1'
            );
      } else if(context.event.text.toLowerCase() === 'freya1'){
        await context.replyText(
          'Gas main mobile legend 1'
        );
      } else if(context.event.text.toLowerCase().indexOf('blu1') >= 0){
        await context.replyText(
          'Ya Hadir, Blubuk Disini 1...'
        );
      } 
    }else if(context.event.isLocation){
      //Untuk handle apabila bot menerima input berupa lokasi
    }
  }
  