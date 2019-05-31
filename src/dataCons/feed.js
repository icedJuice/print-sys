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
  c_name: null, // unique
  data: {
    c_adress: '北京市启明 B 606',
    c_phone: '13099999999',
    good_list: [
      {
        index: 1,
        name: '小张',
        drops: 'pipe',
        Spec: '100*100',
        unit: 'm2',
        count: 3,
        area: 100,
        price: 100,
        all_price: 300,
        others: 'nothing'
      }
    ]
  }
}