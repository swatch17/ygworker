// pages/mine/edit/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '小飞侠',
    mobile: '18401603141',
    email: '1819802379@qq.com',
    loading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  // 上传头像
  onUpload: function () {},

  // 输入内容
  onChange: function (e) {
    const {
      value
    } = e.detail;
    const {
      type
    } = e.currentTarget.dataset;
    this.setData({
      [type]: value
    })
  },

  // 提交表单
  onSubmit: function () {

    const {
      name,
      mobile,
      email
    } = this.data;
    console.log(name, mobile, email)
    //返回上一页
    wx.navigateBack()
  },
  chooseImage: function () {
    let that = this;
    wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      itemColor: '#000',
      success: function (res) {
        console.log(res)
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            that.chooseWxImage('album')
          } else if (res.tapIndex == 1) {
            that.chooseWxImage('camera')
          }
        }
      }
    })
  },

  // 图片本地路径
  chooseImage: function (type) {
    let that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: [type],
      success: function (res) {
        console.log(res)
        // console.log(res.tempFilePaths[0]);
        // that.upImgs(res.tempFilePaths[0], 0) //调用上传方法
      }
    })
  },

  // 上传服务器
  upImgs: function (imgurl, index) {
    let that = this;
    wx.uploadFile({
      filePath: 'filePath',
      name: 'file',
      url: 'url',
    })
  }

})