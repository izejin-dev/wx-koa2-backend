/**
 * 处理用户发送的消息和内容，返回不同的内容给用户
 */
module.exports = async(message) => {
  let replyBody = "您在说什么，我听不懂！";

  if (message.MsgType === "text") {
    let content = message.Content;
    if (content === "云商") {
      replyBody = "云商描述";
    }
  } else if (message.MsgType === "voice") {
    options.msgType = "voice";
    options.mediaId = message.MediaId;
    console.log(message.Recognition);
  } else if (message.MsgType === "event") {
    if (message.Event === "subscribe") {
      replyBody = "欢迎您的关注~\n" +
        "回复 云商 查看哈哈哈页面\n" +
        "也可以点击下面的菜单按钮来了解其它信息~";
    } else if (message.Event === "unsubscribe") {
      console.log("用户取消关注了！")
    } else if (message.Event === "CLICK") {
      replyBody = "您可以按照以下提示来进行操作~\n" +
        "回复 云商 查看哈哈哈页面\n" +
        "也可以点击下面的菜单按钮来了解其它信息~";
    }
  }

  return replyBody;
}
