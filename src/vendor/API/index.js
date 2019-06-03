import { GET, POST } from './utils';

/**
 * 获取预制板列表
 *
 * @returns { prefabs: [] } prefabs 预制板数组;
 */
export const getPrefabs = GET('/prefab/get');

/**
 * 存储一个预制板信息
 * 
 * @param {Object} prefab 预制板信息
 * @returns result
 */
export const savePrefabs = POST('/prefab/save');

/**
 * 通过id 获取详情
 * 
 * @param {object} {id: ***} feedid
 * @returns result
 */

export const getFeedById = POST('/feed/getbyid');

/**
 * 获取所有feed
 * 
 * @returns result
 */
export const getAllFeeds = GET('/feed/getall');
/**
 * 存储一个feed
 * 
 * @param {Object} data {feed: {***}} feed
 * @returns result
 */
export const saveFeed = POST('/feed/save');