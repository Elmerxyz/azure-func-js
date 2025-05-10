module.exports = async function (context, req) {
    context.res = {
        status: 200,
        body: {
            message: "Hello dfgdfWorld",
            date: new Date().toISOString()
        },
        headers: {
            "Content-Type": "application/json"
        }
    };
};