import Mock from 'mockjs';
import conf from './mock.conf';
import * as query from './query';

Mock.setup(conf);

Mock.mock('/prefab/get', 'get', query.getPrefabs);
Mock.mock('/prefab/save', 'post', query.savePrefab);
Mock.mock('/feed/getbyid', 'get', query.getFeedyId);
Mock.mock('/prefab/save', 'post', query.saveFeed);

export default Mock;