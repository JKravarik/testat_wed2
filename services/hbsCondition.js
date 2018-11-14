module.exports = function registerHelpers(hbs) {
    hbs.registerHelper('ifCond', function (v1, operator, v2, options) {

        switch (operator) {
            case '==':
                return (v1 == v2) ? options.fn(this) : options.inverse(this);
            case '===':
                return (v1 === v2) ? options.fn(this) : options.inverse(this);
            case '<':
                return (v1 < v2) ? options.fn(this) : options.inverse(this);
            case '<=':
                return (v1 <= v2) ? options.fn(this) : options.inverse(this);
            case '>':
                return (v1 > v2) ? options.fn(this) : options.inverse(this);
            case '>=':
                return (v1 >= v2) ? options.fn(this) : options.inverse(this);
            case '&&':
                return (v1 && v2) ? options.fn(this) : options.inverse(this);
            case '||':
                return (v1 || v2) ? options.fn(this) : options.inverse(this);
            default:
                return options.inverse(this);
        }
    });

    hbs.registerHelper('copy', function(n, block){
        let result = '';
        for(let i = 0; i < n; ++i){
            result += block.fn(i);
        }
        return result;
    });

    hbs.registerHelper("not", function(n){
        return !n;
    });
    let empty = false;
    hbs.registerHelper("getEmpty", function(){
        console.log("getEmpty", empty);
        return empty;
    });

    hbs.registerHelper("setEmpty", function(bool) {
        console.log("setEmpty: ",empty, bool);
        empty = bool;
    })
}

