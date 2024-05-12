const success_response = (data, resp) => {
    resp.json({data});
}
const err_response = (err, resp) => {
    console.error(err);
    resp.status(500).json({ err: 'DATA NO FOUND' });
}

export {success_response, err_response};