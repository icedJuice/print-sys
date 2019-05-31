import DB from '../indexdDB';

const { DB_FEED, DB_PREFAB } = DB;

export const getPrefabs = params => {
  return new Promise((resolve, reject) => {
    DB_PREFAB.readAll(data => {
      resolve(data)
    })
  })
}

export const savePrefab = data => {
  console.log(data);
  const res = {
    code: 0,
    message: ok,
    data
  }
  return res;
}

export const getFeedyId = id => {
  console.log(id);
  const res = {
    code: 0,
    message: ok,
    data: { id }
  }
  return res;
}

export const getFeedsByRole = role => {
  console.log(role);
  const res = {
    code: 0,
    message: ok,
    data: { id }
  }
  return res;
}

export const saveFeed = feed => {
  console.log(feed);
  const res = {
    code: 0,
    message: ok,
    data: { feed }
  }
  return res;
}