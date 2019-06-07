/*
 * 格式化时间方法
 *
 * @param {timeStamp} 时间戳戳
 * @params {datetype} 时间格式  yyyy-mm-dd-hh-nn-ss
 *
 * @returns {String} 格式后的时间 2019-06-08-12-24-00
 **/
export default function(time, datetype){
    const date = new Date(time);
    let yyyy = date.getFullYear();
    let mm = date.getMonth() + 1;
    mm = mm > 9 ? mm : '0' + mm;
    let dd = date.getDate();
    dd = dd > 9 ? dd : '0' + dd;
    let hh = date.getHours();
    hh = hh > 9 ? hh : '0' + hh;
    let nn = date.getMinutes();
    nn = nn > 9 ? nn : '0' + nn;
    let ss = date.getSeconds();
    ss = ss > 9 ? ss : '0' + ss;
    return datetype.replace('yyyy', yyyy)
                    .replace('mm', mm)
                    .replace('dd', dd)
                    .replace('hh', hh)
                    .replace('hh', hh)
                    .replace('nn', nn)
                    .replace('ss', ss);
  }