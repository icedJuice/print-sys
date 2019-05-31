/** 
 * 预设板数据结构
 * 
 * @attribute { String } id 每条信息的id
 * @attribute { String | Integar } prefab_id 每条信息的prefab_id 
 * @attribute { Date } created_at 每条信息的的创建时间
 * @prefab { String } 预设版信息通常为Dom 生成的字符串
 * 
*/

export default {
  id: null,
  prefab_id: Date.now(),
  created_at: Date.now(),
  prefab: null,
}