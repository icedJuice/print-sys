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

export const getFeedById = data => {
  console.log(data)
  // return new Promise((resolve, reject) => {
  //   DB_FEED.getByName
  // })
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

export const getAllFeeds = () => new Promise(resolve => {
  DB_FEED.readAll((res) => {
    resolve(res);
  })
})


export const saveFeed = feed => {
  return new Promise((resolve, reject) => {
    const dataBody = JSON.parse(feed.body);
    const data = {
      id: Date.now(),
      feed_id: Date.now(),
      created_at: Date.now(),
      c_name: feed.c_name,
      data: dataBody.data,
    }
    DB_FEED.addData(data, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    })

  })
}