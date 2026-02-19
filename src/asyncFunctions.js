function fetchData(callback) {
    setTimeout(() => {
        callback("Dados recebidos");
    }, 1000);
}

function fetchDataPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Dados recebidos");
        }, 1000);
    });
}

module.exports = { fetchData, fetchDataPromise };