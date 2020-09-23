

/**
 *  获取缓存数据
 */
function getSessionStorage(data) {
    return sessionStorage.getItem(data)
}


/**
 *  写入缓存数据
 */
function setSessionStorage(value, data) {
    sessionStorage.setItem(value, data)
}