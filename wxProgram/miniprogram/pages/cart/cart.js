// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderlist:[{
      image:"cloud://test-za1ea.7465-test-za1ea-1301302580/products/2815649.jpg",
      name:"初音未来",
      price:"898",
      num:"1",
    }],
    selectAllState:false,
  },
  selectAll(){
    if(this.data.selectAllState==false){
      this.setData({
        selectAllState:true
      })
    }else{
      this.setData({
        selectAllState:false
      })
    }
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

  }
})