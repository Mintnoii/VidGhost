// 封装json格式化, 避免error
const getJsonParse = (jsonStr: string): any => {
    let res = '';
    try {
        res = JSON.parse(jsonStr);
    } catch (e) {
        console.log(e);
        res = '';
    }
    return res;
}

export {
  getJsonParse
}