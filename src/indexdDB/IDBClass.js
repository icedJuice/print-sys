export default class MyDb {
  constructor(options) {
    let defaultOpts = { //默认选项
      db: {},
      name: 'myDB', //数据库名
      version: 1,  // 数据库版本号
      tableName: 'test', //表名
      keyPath: 'id', // 默认以__id 为主键,可选
      indexArr: []   // 索引数组
    }
    this.options = Object.assign(defaultOpts, options)
  }
  init(fn) {
    for (let k in this.options) {
      this[k] = this.options[k];
    }
    this.openDb(this.indexArr, fn);
  }
  openDb(indexArr, fn) {
    /* 新建或打开数据库 */
    // 返回一个 IDBRequest 对象,有以下三种结果
    // 名字,版本,版本必须为整数.新建时默认为1,打开时默认为当前版本,不带版本号时自动打开在最新的
    let request = window.indexedDB.open(this.name);
    // 打开数据库成功,新建时走onupgradeneeded线
    request.onsuccess = () => {
      this.db = request.result;  // 获取数据库对象
      fn && fn()
      console.log('数据库打开成功---');
      console.log('version----', this.version)   // 获取版本号,得到整数
    };
    // 新建或打开失败
    request.onerror = (e) => {
      console.log('数据库打开报错');
    };
    // 新建数据库,或者指定的版本号大于数据库的实际版本号，就会发生数据库升级事件upgradeneeded,不再支持 setVersion()来设置版本号
    // 在此回调中,数据库处于升级状态,不能进行增删改查的操作
    request.onupgradeneeded = (e) => {
      //  console.log('数据库进入升级---');
      //  console.log('this-----------',this)
      this.db = e.target.result;
      let myStore;
      if (!this.db.objectStoreNames.contains(this.tableName)) { // 若不存在名为person的表,就新建
        // myStore = this.db.createObjectStore('person', { keyPath: 'xxx' , autoIncrement: true}); // 新增一张叫做person的表格，指定主键名为id
        let keyCfg = this.keyPath ? { keyPath: this.keyPath } : { autoIncrement: true }
        myStore = this.db.createObjectStore(this.tableName, keyCfg); // 若不指定主键,让IndexedDB自动生成一个递增的整数为主键
        indexArr.forEach(v => {    // 建立索引,索引名称、索引所在的属性、配置对象（说明该表中该属性是否包含重复的值）。
          myStore.createIndex(v.indexName, v.indexName, { unique: v.unique })
        });
      }
    }
  }
  // 向数据库写入数据
  /**
   * 在对新数据库做任何事情之前,如增删改查操作，都需要开始一个事务。
   *事务有三种模式，网上都有，我也把罗列一下
  *只读：readonly，不能修改数据库数据，可以并发执行
  *读写：readwrite，可以进行读写操作
  *版本变更，versionchange
  */
  addData(data, cb) {
    console.log(data)
    let request = this.db.transaction([this.tableName], 'readwrite')  // 写入数据需要新建一个事务,新建时必须指定表格名称和操作模式（"只读"或"读写"）
      .objectStore(this.tableName) // 获取指定的IDBObjectStore 对象，
      .add(data);  // 通过表格对象的add()方法，向表格写入一条记录,写入操作是一个异步操作。
    // data 中应该有主键,索引
    // .add({xxx: Date.now(),name: '李四', age: Math.round(Math.random()*10+15), email: 'zhangsan@example.com' });

    // 通过监听连接对象的success事件和error事件，了解是否写入成功
    request.onsuccess = (e) => cb && cb(null, e);
    request.onerror = (e) => cb && cb(e, null);
  }
  // 遍历表中的数据,将全部数据data传入fn中进行调用
  readAll(fn) {
    let objectStore = this.db.transaction(this.tableName).objectStore(this.tableName);
    let data = [] // 不能放在onsuccess内部
    // 新建指针对象的openCursor()方法是一个异步操作，所以要监听success事件。
    // 当记录有多条时,openCursor会多次执行
    objectStore.openCursor().onsuccess = (e) => {
      let cursor = e.target.result;
      if (cursor) {
        data.push(JSON.parse(JSON.stringify(cursor.value)))
        cursor.continue();
      } else {
        // console.log('全部数据-----',data)
        fn && fn(data)
      }
    };
  }
  // 更新数据,newData必须含主键名,全部索引键值对
  update(newData, cb) {
    var request = this.db.transaction([this.tableName], 'readwrite').objectStore(this.tableName).put(newData)
    // .put({ id: 1, name: '李四', age: 35, email: 'lisi@example.com' });   // put()方法自动更新了主键为1的记录(主键key名为 id)。

    request.onsuccess = (e) => cb && cb(null, e);
    request.onerror = (e) => cb(e, null);
  }
  // 根据主键值查询,将查到的值传入fn进行操作
  readData(val, cb) {
    var objectStore = this.db.transaction([this.tableName], 'readonly').objectStore(this.tableName); // 获取指定的IDBObjectStore 对象
    var request = objectStore.get(val);  // 读取数据，参数是主键的值。
    request.onerror = (e) => cb && cb(e, null);
    request.onsuccess = (e) => cb && cb(null, request.result);
  }
  // 按照索引值来查询数据,将结果传入fn中操作
  getByName(indexName, val, cb) {
    var transaction = this.db.transaction([this.tableName], 'readonly');
    var store = transaction.objectStore(this.tableName);
    var index = store.index(indexName);
    var request = index.get(val);

    request.onerror = (e) => cb && cb(e, null);
    request.onsuccess = (e) => cb && cb(null, e.target.result);
  }
  // 关闭数据库,相对于open
  closeDB() {
    this.db.close();
  }
  //  删除数据库中指定主键值的某条记录
  remove(val) {
    var request = this.db.transaction([this.tableName], 'readwrite').objectStore(this.tableName).delete(val);  // 删除指定主键值的某条记录

    request.onsuccess = (e) => {
      console.log('数据删除成功');
    };
  }
  // 删除某张指定表名的表
  delTable(tableName) {
    this.db.deleteObjectStore(tableName);
  }
  // 对某张表清空但不删除
  clearTable(tableName) {
    var transaction = this.db.transaction(tableName, 'readwrite');
    var store = transaction.objectStore(tableName);
    store.clear();
  }

  // 删除数据库,name为 open时用的名字
  deleteDB(name) {
    let DBDelRequest = window.indexedDB.deleteDatabase(name);  // 删除指定数据库
    DBDelRequest.onerror = (e) => {
      console.log("删除失败");
    };
    DBDelRequest.onsuccess = (e) => {
      console.log("删除成功");
      console.log(e.result); // 删除成功后得到 undefined
    };
  }
}
