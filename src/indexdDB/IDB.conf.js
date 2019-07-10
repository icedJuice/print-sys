/**
  * ======================
  * indexdDB 配置表
  * 
  * 同一个FEED数据库下建立两个表
  * feed 表 存放记录
  * prefab 表存放模板
  * ======================
  * 
 **/
export const feedDbConf = {
  name: 'FEED', //数据库名
  version: 1,  // 数据库版本号
  tableName: 'feed', //表名
  keyPath: 'id', // 默认以id 为主键,可选
  indexArr: [
    {
      indexName: 'feed_id',
      unique: true,
    },
    {
      indexName: 'created_at',
      unique: true,
    },
    {
      indexName: 'c_name',
      unique: false,
    },
    {
      indexName: 'c_phone',
      unique: false,
    },
  ]   // 索引数组
}

export const prefabDbConf = {
  name: 'PREFAB', //数据库名
  version: 1,  // 数据库版本号
  tableName: 'prefab', //表名
  keyPath: 'id', // 默认以id 为主键,可选
  indexArr: [
    {
      indexName: 'prefab_id',
      unique: true,
    },
    {
      indexName: 'created_at',
      unique: false,
    },
  ]
}


