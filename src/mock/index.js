import Mock from 'mockjs-async';
import conf from './mock.conf';
import * as query from './query';

Mock.setup(conf);

Mock.mock('/prefab/get', 'get', query.getPrefabs);
Mock.mock('/prefab/save', 'post', query.savePrefab);
Mock.mock('/feed/getbyid', 'post', query.getFeedById);
Mock.mock('/feed/getall', 'get', query.getAllFeeds);
Mock.mock('/feed/save', 'post', query.saveFeed);

export default Mock;