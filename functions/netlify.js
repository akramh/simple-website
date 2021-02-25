exports.handler = async function(event, context) {
    // your server-side functionality
}


exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({message: "Hello World"})
    };
}
