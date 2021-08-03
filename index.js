function on(eventName, handler) {
    window.addEventListener(eventName, handler);
}

function off(eventName, handler) {
    window.removeEventListener(eventName, handler);
}

function dispatch(eventName, data) {
    window.dispatchEvent(
        new CustomEvent(eventName, {detail: data})
    );
}

module.exports = {
    on,
    off,
    dispatch
};
