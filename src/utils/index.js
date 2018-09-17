export const importAll = (r) => {
    return r.keys().map(r);
}

export const hasProperty = (property, object) => {
    try {
        return (typeof object === "object") && !Array.isArray(object) && object.hasOwnProperty(property);
    } catch (e) {
        console.warn(e.message, e);
        return false;
    }
}

export const isObject = (object) => {
    try {
        return (typeof object === "object") && !Array.isArray(object);
    } catch(e) {
        console.warn(e.message, e);
        return false;
    }
}