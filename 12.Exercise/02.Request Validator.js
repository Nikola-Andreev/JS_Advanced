function validateRequest(obj) {

    let method = obj.method
    if(method == undefined){
        throw new Error('Invalid request header: Invalid Method')
    }
    else if(method !== 'GET' && method !== 'POST' && method !== 'CONNECT' && method !== 'DELETE'){
       throw new Error('Invalid request header: Invalid Method')
    }
    else if(obj.uri == undefined){
        throw new Error('Invalid request header: Invalid URI')
    }
    else if( !obj.uri.match(/^[0-9a-zA-Z.]+$/)){
        if(obj.uri != '*' || obj.uri == ''){
            throw new Error('Invalid request header: Invalid URI')
        }
    }
    else if(obj.version == undefined){
        throw new Error('Invalid request header: Invalid Version')
    }
    else if(obj.version !== 'HTTP/0.9' && obj.version !== 'HTTP/1.0' && obj.version !== 'HTTP/1.1' && obj.version !== 'HTTP/2.0'){
        throw new Error('Invalid request header: Invalid Version')
    }
    else if(obj.message == undefined){
        throw new Error('Invalid request header: Invalid Message')
    }
    else if(obj.message.match(/[<>\\&'"]/g)){
        throw new Error('Invalid request header: Invalid Message')
    } else {
        return obj
    }
}

validateRequest({
        method: 'POST',
        version: 'HTTP/2.0',
        message: 'rm -rf /*'
});

