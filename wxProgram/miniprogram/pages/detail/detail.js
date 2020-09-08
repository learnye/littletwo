// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datalist: [],
    imagelist: [],
    num: 0,
    uname: ""
  },
  gotoCart() {
    wx.switchTab({
      url: '/pages/cart/cart',
    })
  },
  addCar() {
    // 判断用户是否授权登录
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          this.setData({
            num: this.data.num + 1
          })
          let db = wx.cloud.database();
          let collect = db.collection('order');
          // console.log(this.data.datalist.Pid)
          collect.where({
            Pid: db.command.eq(`${this.data.datalist.Pid}`)
          }).get({
            success: res => {
              console.log(res.data)
              // console.log(res.data[0]._id)
              if (res.data.length > 0) {
                wx.cloud.callFunction({
                  name: 'update',
                  data: {
                    num: this.data.num,
                    _id: res.data[0]._id
                  },
                  success: function (res) {
                    console.log(res)
                  },
                  fail: console.error
                })
              } else {
                console.log(1);
                // cloud.init({
                //   env:'test-za1ea',
                //   traceUser:true,
                // })
                // let db = wx.cloud.database()
                // db.collection('order').add({
                //   data:{
                //     Pid: this.data.datalist.Pid,
                //     num: this.data.num,
                //     uname: this.data.uname
                //     // _openid:'odQzd4k-RkybTTW-DYJq4DnIT1wA'
                //   },
                //   success:res=>{
                //     console.log(res);
                //   },
                //   fail:res=>[
                //     console.log(res)
                //   ]
                // })
                wx.cloud.callFunction({
                  name: 'insert',
                  data: {
                    "Pid": this.data.datalist.Pid,
                    "num": this.data.num,
                    "uname": this.data.uname,
                    "_openid":'odQzd4k-RkybTTW-DYJq4DnIT1wA'
                  },
                  success(res) {
                    console.log("订单提交数据库成功") // 3
                    console.log(res.result)
                  },
                  fail: console.error
                })
              }

            },
            fail: res => {
              console.log(res)
            }
          })
          // console.log(this.data.num)
        } else {
          wx.showToast({
            title: '请授权登录',
            icon: 'none',
            duration: 1500,
            complete: res => {
              wx.switchTab({
                url: "/pages/user/user"
              })
            }
          })
        }
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'username',
      success: res => {
        // console.log(res)
        this.setData({
          uname: res.data
        })
        // console.log(this.data.uname)
      }
    })
    let id = options.id;
    if (!id) {
      id = 2815649
    }
    let id1 = id;
    if (id1 > 2815648) {
      id1 = 2815648;
    }
    // console.log(id);
    let db = wx.cloud.database();
    let db1 = wx.cloud.database();
    let collect = db.collection('pro_info');
    let collect1 = db1.collection('pro_desc');
    collect.where({
      Pid: db.command.eq(`${id}`)
    }).get().then(res => {
      this.setData({
        datalist: res.data[0]
      })
      // console.log(res.data)
    })
    collect1.where({
      'Dpid': db.command.eq(`${id1}`)
    }).get().then(res => {
      this.setData({
        imagelist: res.data
      })
      // console.log(res.data)
    })
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