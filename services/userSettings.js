module.exports = function (req, res, next) {
    // default Wert oder aktueller Wert von der Session lesen
    const userSettings = req.session.userSettings || {
        orderBy: 'orderBy',
        orderDirection: -1,
        showFinished: false,
        style: 'style'};
    const {orderBy, orderDirection, showFinished, style} = req.query;

    if (orderBy) {
        userSettings.orderBy = orderBy;
    }

    if(orderDirection) {
        userSettings.orderDirection = orderDirection;
    }

    if(showFinished) {
        if(showFinished === "0"){
            userSettings.showFinished = null;
        }else{
            userSettings.showFinished = showFinished;
        }

    }

    if(style) {
        userSettings.style = style;
    }

    req.userSettings = req.session.userSettings = userSettings;
    next();
};