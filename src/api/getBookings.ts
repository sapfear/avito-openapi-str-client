import axios from 'axios';
import { getFormattedDateWithAddFromNow } from '../utils';

const getUrl = ({ itemId, userId }) => {
    return `https://api.avito.ru/realty/v1/accounts/${userId}/items/${itemId}/bookings`;
};

export const getBookings = async ({ accessToken, itemId, userId }) => {
    const params = {
        date_start: getFormattedDateWithAddFromNow(1),
        date_end: getFormattedDateWithAddFromNow(10),
    };
    const headers = {
        Authorization: `Bearer ${accessToken}`,
    };

    return (
        axios
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            .get(getUrl({ itemId, userId }), { headers, params })
            .catch(result => result.response)
            .then(r => r.data)
    );
};
