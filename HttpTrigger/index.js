module.exports = async function (context, req) {
    context.res = {
        status: 200,
        body: {
            message: "Hello World",
            date: new Date().toISOString()
        },
        headers: {
            "Content-Type": "application/json"
        }
    };
};