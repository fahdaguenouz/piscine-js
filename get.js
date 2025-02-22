

function get(obj, path) {
    let keys = path.split(".");
    let res = obj;

    for (let key of keys) {
        if (Array.isArray(res) && !isNaN(key)) {
            key = Number(key);
        }

        if (res && key in res) {
            res = res[key];
        } else {
            return undefined;
        }
    }

    return typeof res === "function" ? res : res;
}
console.log(get({ key: 'value' }, 'key'));
