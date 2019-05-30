import MyDb from './IDBClass';
import { feedDbConf, prefabDbConf } from './IDB.conf';

export const DB_FEED = new MyDb(feedDbConf);

DB_FEED.init();

export const DB_PREFAB = new MyDb(prefabDbConf);

DB_PREFAB.init();

