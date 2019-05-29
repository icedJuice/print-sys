import { GET, POST } from './utils';

/**
 * 获取预制板列表
 *
 * @returns { prefabs: [] } prefabs 预制板数组;
 */
export const getPrefabs = params => GET('/prefab/get', params);

/**
 * 存储一个预制板信息
 * 
 * @param {Object} prefab 预制板信息
 * @returns result
 */
export const savePrefabs = prefab => POST('/prefab/save', prefab);

/**
 * 通过id 获取详情
 * 
 * @param {object} {id: ***} feedid
 * @returns result
 */
export const getFeedyId = params => GET('/feed/getbyid', params);

/**
 * 存储一个feed
 * 
 * @param {Object} data {feed: {***}} feed
 * @returns result
 */
export const saveFeed = data => POST('/feed/save');