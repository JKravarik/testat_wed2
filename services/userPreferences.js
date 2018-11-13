module.exports.setOrder = function (settings, newOrder) {
    if (settings.orderBy === newOrder) {
        settings.orderDirection = -settings.orderDirection;
    } else {
        settings.orderBy = newOrder;
        if (settings.orderBy === "finish-date") {
            settings.orderDirection = 1;
        } else {
            settings.orderDirection = -1;
        }
    }
};

module.exports.getOrderCriteria = function (settings) {
    switch (settings.orderBy) {
        case "finish-date":
            return {dueDate: settings.orderDirection};
        case "create-date":
            return {creationDate: settings.orderDirection};
        case "importance":
            return {importance: settings.orderDirection};
        default:
            return {};
    }
};

module.exports.getNextTheme = function (settings) {
    return settings.theme === "style" ? "pink" : "style";
};