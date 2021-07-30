const isEmpty = (val) => {
    if (val !== undefined && val !== null && val.length > 0) {
        return false;
    } else {
        return true;
    }
}

const dumpLogs = (msg) => {
    console.log(msg);
}

export {isEmpty, dumpLogs}