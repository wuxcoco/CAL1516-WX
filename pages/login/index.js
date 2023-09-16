// pages/login/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stuId: "", //学号
    password: "", //密码 
    checked: true,
    btnC: "linear-gradient(90deg, rgba(193,239,245,0.90) 0%, #0AE8F0 0%, #88F2DF 100%);"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  login() {
    const postData = {
      stuId: this.data.stuId,
      password: this.data.password,
    }
    wx.request({
      url: 'http://localhost:3000/login',
      data: postData,
      method: 'POST',
      success: (result) => {
        console.log(result);
        wx.setStorageSync('token', result.data.data.cookie)
      },
      fail: (err) => { },
      complete: (res) => { },
    })
    wx.showToast({
      title: 'success',
      icon: "success",
      duration: 1000,
    })
  },
  loginWX() { },
  onCheckboxChange(event) {
    this.setData({
      checked: event.detail,
    });
  }
})