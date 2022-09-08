import * as open from 'open';
import { CLIENT_ID, SCOPES } from '../credentials';

export const openLink = () => {
    const scopeList = SCOPES.join(',');
    const userLink = `https://avito.ru/oauth?response_type=code&client_id=${CLIENT_ID}&scope=${scopeList}`;

    return open(userLink);
};

export const infoMessage = () => {
    console.log('Next step:');
    console.log('STEP=TOKEN CODE=<code from redirect> npm start');
};
