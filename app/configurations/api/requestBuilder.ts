
import axios from 'axios'
const buildRequest = (request:any) => {
    const { body, method, url, headers, bodyparams, responseType } = request;
    const contentType = body instanceof FormData
        ? 'multipart/form-data'
        : 'application/json';
    let headersObj:any = {
        'Content-Type': contentType,
    };
    var requestConfig:any = {
        data: body,
        headers: headersObj,
        method,
        url
    };

    if (responseType) {
        requestConfig["responseType"] = responseType;
    }


    if (bodyparams) {
        requestConfig["params"] = bodyparams
    }

    return requestConfig;
};
export const makeRequest = async (request:any) => {

    const requestConfig = buildRequest(request);
    return new Promise((resolve, reject) => {
        const axiosRequest = axios(requestConfig);
        axiosRequest
            .then((values) => {

                resolve(values);
            })
            .catch(async (error:any) => {
                reject(formatError(error));

            });


    });
};

export const defaultResponse = {
    status: 500,
    data: {
        error: 'Server error',
    },
};

export const formatError = async (responseError:any) => {
    var blobError = "Server Error";
    try {
        var blobErrorData = JSON.parse(await responseError.response.data.text()).message;
        if (blobErrorData && blobErrorData.length > 0) {
            blobError = blobErrorData
        }
    } catch (err:any) { }
    const response = responseError.response || defaultResponse;
    const errors = response.data && (response.data.errors || response.data.error || response.data.message);
    return {
        code: response.status,
        message: errors || blobError,
    };
};


