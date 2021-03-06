import {baseURL} from '../../api-performance/src/constants';

// Do know that this does NOT work if there's NO transition between urls
async function postPageTest (context, commands) {
    await commands.navigate(baseURL);
    await commands.wait.bySelector('#hero');

    try {
        await commands.measure.start('Post Page');
        await commands.click.bySelector('tbody tr:nth-child(1) td:nth-child(1) a');
        await commands.wait.bySelector('body pre');
        await commands.measure.stop();

    } catch (e) {
        throw new Error(e);
    }
}

module.exports = {
    test: postPageTest
};