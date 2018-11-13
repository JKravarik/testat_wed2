module.exports = function (req, res, next) {
    // default Wert oder aktueller Wert von der Session lesen
    const userSettings = req.session.userSettings || {
        orderBy: 'orderBy',
        orderDirection: -1,
        filter: false,
        style: 'style'};
    const {orderBy, orderDirection, filter, style} = req.query;

    if (orderBy) {
        userSettings.orderBy = orderBy;
    }

    if(orderDirection) {
        userSettings.orderDirection = orderDirection;
    }

    if(filter) {
        userSettings.filter = filter;
    }

    if(style) {
        userSettings.style = style;
    }

    req.userSettings = req.session.userSettings = userSettings;
    next();
};