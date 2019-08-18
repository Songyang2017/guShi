// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()

exports.main = async (event, context) => {
  let { pageSize, pageNo, name, queryObj } = event
  // console.log(event)
  // 先取出集合记录总数
  const countResult = await db.collection(name).where(queryObj).count()
  const total = countResult.total

  const list = await db.collection(name).where(queryObj).skip((pageNo--) * pageSize).limit(pageSize).get()

  return {
    total,
    list
  }
}
