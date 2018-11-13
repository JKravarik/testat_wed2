const userPreferences = require('../services/userPreferences');

module.exports = (req, res, next) => {
    const userSettings = req.session.userSettings || {
        // default Wert oder aktueller Wert von der Session lesen
        orderBy: 'default',
        orderDirection: -1,
        filter: false,
        theme: 'style'
    };
    const {orderBy, filter, theme} = req.query;

    if(orderBy) {
        userSettings.orderBy = orderBy;
    }
    if(filter) {
        userSettings.filter = filter;
    }
    if(theme) {
        userSettings.theme = theme;
    }
    req.userPreferences = req.session.userPreferences = userPreferences;
    next();
}
