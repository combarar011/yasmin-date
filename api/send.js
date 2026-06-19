export default async function handler(req, res) {

  const {message} = req.body;

  const token = process.env.BOT_TOKEN;
  const chatId = process.env.CHAT_ID;


  await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },

      body:JSON.stringify({

        chat_id:chatId,

        text:message

      })

    }
  );


  res.status(200).json({
    success:true
  });

}
