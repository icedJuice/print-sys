/** 
 * 存储信息的结构
 * 
 * @attribute { String } id 每条信息的id
 * @attribute { String | Integar } prefab_id 每条信息的prefab_id 
 * @attribute { Date } created_at 每条信息的的创建时间
 * @prefab { String } 预设版信息通常为Dom 生成的字符串
 * 
*/

export default {
  id: null,  // unique
  feed_id: Date.now(), // unique
  created_at: Date.now(),
  c_phone: '13099999999',
  c_name: null,
  data: {
    c_adress: '北京市启明 B 606',
    c_phone: '13099999999',
    feed_id: '121212',
    c_name: '3232',
    amount_all: data.amount_all,
    amount_youhui: data.amount_youhui,
    amount_yufu: data.amount_yufu,
    amount_pay: 0,
    sum1: {},
    sum2: {},
    sum4: {},
    c_msg: {},
    s_msg: {},
    good_list: []
  }
}