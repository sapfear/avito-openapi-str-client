import { openLink, infoMessage as infoLinkMessage } from './cmd/link';
import {
    getAccessToken,
    refreshAccessToken,
    infoMessage as infoTokenMessage,
} from './cmd/token';
import { fillBookings } from './api/setBookings';
import { getBookings } from './api/getBookings';
import { setParams } from './api/setParams';
import { infoMessage as infoApi } from './api/utils';

const main = async () => {
    if (process.env.STEP === 'LINK') {
        await openLink();

        infoLinkMessage();
    }

    if (process.env.STEP === 'TOKEN') {
        const authCode = process.env.CODE;

        const result = await getAccessToken(authCode);

        infoTokenMessage(result);
    }

    if (process.env.STEP === 'REFRESH') {
        const authCode = process.env.CODE;

        const result = await refreshAccessToken(authCode);

        infoTokenMessage(result);
    }

    if (process.env.STEP === 'PUSH_BOOKINGS') {
        const accessToken = process.env.TOKEN;
        const userId = process.env.USER_ID;
        const itemId = process.env.ITEM_ID;

        const result = await fillBookings({ accessToken, userId, itemId });

        infoApi(result);
    }

    if (process.env.STEP === 'GET_BOOKINGS') {
        const accessToken = process.env.TOKEN;
        const userId = process.env.USER_ID;
        const itemId = process.env.ITEM_ID;

        const result = await getBookings({ accessToken, userId, itemId });

        infoApi(result);
    }

    if (process.env.STEP === 'SET_PARAMS') {
        const accessToken = process.env.TOKEN;
        const userId = process.env.USER_ID;
        const itemId = process.env.ITEM_ID;

        const result = await setParams({ accessToken, userId, itemId });

        infoApi(result);
    }
};

main();
