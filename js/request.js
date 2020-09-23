/**
 * axios配置
 */

var request = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
});


// 添加请求拦截器
request.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject('请求拦截器错误: ', error);
});

// 添加响应拦截器
request.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么

    // 请求超时处理
    if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
        console.log('请求超时');
        return
    }
    return Promise.reject(error);
});