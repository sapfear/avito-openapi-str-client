import axios from 'axios';
import { CLIENT_ID, CLIENT_SECRET, TOKEN_URL } from '../credentials';

enum TokenRequestType {
    Get = 'authorization_code',
    Refresh = 'refresh_token',
}

const getData = (authCode: string, requestType: TokenRequestType) => {
    const data = new URLSearchParams();

    data.append('grant_type', requestType);
    data.append('client_id', CLIENT_ID);
    data.append('client_secret', CLIENT_SECRET);

    if (requestType === TokenRequestType.Get) {
        data.append('code', authCode);
    }

    if (requestType === TokenRequestType.Refresh) {
        data.append('refresh_token', authCode);
    }

    return data;
};

export const getAccessToken = async authCode => {
    const data = getData(authCode, TokenRequestType.Get);

    return (
        axios
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            .post(TOKEN_URL, data)
            .then(r => r.data)
    );
};

export const refreshAccessToken = async authCode => {
    const data = getData(authCode, TokenRequestType.Refresh);

    return (
        axios
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            .post(TOKEN_URL, data)
            .then(r => r.data)
    );
};

export const infoMessage = ({ access_token, refresh_token }) => {
    console.log('Next step:');
    console.log(
        `STEP=PUSH_BOOKINGS TOKEN=${access_token} ITEM_ID=<your item id> USER_ID=<your seller id> npm start`,
    );
    console.log(
        `STEP=GET_BOOKINGS TOKEN=${access_token} ITEM_ID=<your item id> USER_ID=<your seller id> npm start`,
    );
    console.log(
        `STEP=SET_PARAMS TOKEN=${access_token} ITEM_ID=<your item id> USER_ID=<your seller id> npm start`,
    );
    console.log('or');
    console.log(`STEP=REFRESH CODE=${refresh_token} npm start`);
};
