function timerFunction(context, myTimer) {
    const timeStamp = new Date().toISOString();
    context.log('Hello World at: ' + timeStamp);
}

module.exports = timerFunction;