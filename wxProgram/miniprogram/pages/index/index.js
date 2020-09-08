//index.js
const app = getApp()

Page({
  data: {
    swipers:['cloud://test-za1ea.7465-test-za1ea-1301302580/banner/banner1.jpg','cloud://test-za1ea.7465-test-za1ea-1301302580/banner/banner2.jpg','cloud://test-za1ea.7465-test-za1ea-1301302580/banner/banner3.jpg','cloud://test-za1ea.7465-test-za1ea-1301302580/banner/banner4.jpg'],
    datalist:[],
    leftList: [],
    rightList: [],
    leftHight: 0,
    rightHight: 0
  },

  onLoad: function() {
    let db=wx.cloud.database();
    let collect=db.collection('pro_info');
    var leftH = this.data.leftHight;
    var rightH = this.data.rightHight;
    var leftData = [];
    var rightData = [];
    collect.get().then(res=>{
      // console.log(res.data);
      let allData=res.data
      for (let i = 0; i < allData.length; i++) {
        var currentItemHeight = parseInt(Math.round(520 * 345 / 360));
        if (leftH == rightH || leftH < rightH) {//判断左右两侧当前的累计高度，来确定item应该放置在左边还是右边
          leftData.push(allData[i]);
          leftH += currentItemHeight;
        } else {
          rightData.push(allData[i]);
          rightH += currentItemHeight;
        }
      }
      this.setData({
        datalist:res.data,
        leftHight: leftH,
        rightHight: rightH,
        leftList: leftData,
        rightList: rightData
      })
    })
  },
})
