// api接口管理文件
function getIndex() {
    return request.post('555', {

    }).then(res => {
        console.log(res);
    })

} 