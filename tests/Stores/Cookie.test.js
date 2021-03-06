const Cookie = require('./../../src/Stores/Cookie');
jest.mock('js-cookie');
const cookies = require('js-cookie');

test("It can store the token", () => {
    let Store = new Cookie();
    Store.store('test');
    expect(cookies.set).toHaveBeenLastCalledWith('jwt', 'test');
});

test("It can get the token", () => {
    let Store = new Cookie();
    let token = Store.retrieve();
    expect(cookies.get).toHaveBeenLastCalledWith('jwt');
});

test("It can forget the token", () => {
    let Store = new Cookie();
    Store.forget();
    expect(cookies.remove).toHaveBeenLastCalledWith('jwt');
});