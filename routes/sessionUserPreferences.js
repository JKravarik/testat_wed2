/*export function sessionUserPreferences(req, res, nect) {
    const userSettings = req.session.userSettings || {
        orderBy: 'default',
        orderDirection: -1,
        filter: false,
        style: 'pink.sass'
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

    req.userSettings = req.session.userSettings = userSettings;
    next();
} */