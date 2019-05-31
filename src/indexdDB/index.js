import MyDb from './IDBClass';
import { feedDbConf, prefabDbConf } from './IDB.conf';

const DB_FEED = new MyDb(feedDbConf);

DB_FEED.init();


const DB_PREFAB = new MyDb(prefabDbConf);

DB_PREFAB.init();

export default { DB_FEED, DB_PREFAB };