export const httpRequest = (filePath, callBackFn) => {
    const xReq = new XMLHttpRequest();
    xReq.open("GET", filePath, true);
    xReq.onload = () => {
        if (xReq.readyState === 4) {
            if (xReq.status === 200) {
                callBackFn(xReq.responseText);
            } else {
                console.log('status text: ', xReq.statusText);
            }
        }
    };
    xReq.onerror = () => {
        console.log('error loading references: ', xReq.statusText);
    }
    xReq.send(null);
}