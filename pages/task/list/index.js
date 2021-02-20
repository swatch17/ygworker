// pages/task/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    taskList: ['全部', '待审核', '已取消', '已通过', '已拒绝', '被抢单', '已完成'],
    taskStatus: [{
      label: '全部',
      value: ''
    }, {
      label: '待审核',
      value: 0
    }, {
      label: '已取消',
      value: 1
    }, {
      label: '已通过',
      value: 2
    }, {
      label: '已拒绝',
      value: 3
    }, {
      label: '被抢单',
      value: 4
    }, {
      label: '已完成',
      value: 5
    }],
    status: '',
    index: 0
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
  onPicker: function (e) {
    const {
      value
    } = e.detail
    let status = value == 0 ? '' : value - 1;
    console.log(status)
    this.setData({
      status,
      index: value
    })
  }
})