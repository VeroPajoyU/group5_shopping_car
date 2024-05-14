import { success_response, err_response } from './response.js';

const async_wrapper = (fn) => {
    return async (req, res) => {
        try {
            success_response(await fn(req, res, req.params.id), res);
        } catch (error) {
            err_response(error, res);
        }
    }
}

export default async_wrapper;