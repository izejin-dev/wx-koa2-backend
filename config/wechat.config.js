/**
 * 微信相关配置信息
 * @type {{appScrect: string, appID: string, token: string}}
 */
const wechat = {
  appID: 'wxc2362f9e21c6d051',
  appScrect: 'f2ece2afa3c1b45a5e1ab592d49a1ab4',
  token: 'testcubesuger'
}
const api = {
  //获取access_token
  accessToken: 'https://api.weixin.qq.com/cgi-bin/token',
  //获取jsapi_ticket
  jsapiTicket: 'https://api.weixin.qq.com/cgi-bin/ticket/getticket',
  // 创建菜单
  createMenu: 'https://api.weixin.qq.com/cgi-bin/menu/create',
  // 删除菜单
  deleteMenu: 'https://api.weixin.qq.com/cgi-bin/menu/delete',
  // 网页授权access_token
  oauthAccessToken: 'https://api.weixin.qq.com/sns/oauth2/access_token',
  // 获取授权后的用户资料
  oauthUserInfo: 'https://api.weixin.qq.com/sns/userinfo',
  // 视频上传
  // uploadTemplateMedia: 'https://api.weixin.qq.com/cgi-bin/media/upload',
  // 创建二维码
  // createQRCode: 'https://api.weixin.qq.com/cgi-bin/qrcode/create',
  //
  // fetchQRCodeWithTicket: 'https://mp.weixin.qq.com/cgi-bin/showqrcode',
  // createShortUrl: 'https://api.weixin.qq.com/cgi-bin/shorturl'
}

module.exports = {
  wechat,
  api
}
