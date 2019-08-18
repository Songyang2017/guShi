
/**
 *
 * @param {*} pageSize 分页数据
 * @param {*} pageNo 页码
 * @param {*} name 集合名字
 * @param {*} queryObj 查询条件
 */
export const getDataList = (pageSize, pageNo, name, queryObj) => {
  return new Promise((resolve, reject) => {
    wx.cloud.callFunction({
      name: 'pages',
      data: {
        pageSize: pageSize,
        pageNo: pageNo,
        name: name,
        queryObj: queryObj
      },
      success: res => {
        resolve(res.result)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}
