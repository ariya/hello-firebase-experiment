var axios = require('axios');

it('should have a working ping function', async function () {
    const res = await axios.get('http://localhost:5000/ping');
    const status = res.data.substr(0, 2);
    const timestamp = res.data.substr(3);
    expect(status).toEqual('OK');
    expect(timestamp).toMatch(/[0-9]+/);
});
