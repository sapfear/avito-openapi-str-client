import axios from 'axios';
import { getFormattedDateWithAddFromNow } from '../utils';

const getUrl = ({ itemId, userId }) => {
    return `https://api.avito.ru/core/v1/accounts/${userId}/items/${itemId}/bookings`;
};

export const fillBookings = async ({ accessToken, itemId, userId }) => {
    const data = {
        bookings: [
            {
                date_start: getFormattedDateWithAddFromNow(2),
                date_end: getFormattedDateWithAddFromNow(3),
            },
            {
                date_start: getFormattedDateWithAddFromNow(4),
                date_end: getFormattedDateWithAddFromNow(5),
            },
        ],
    };

    const headers = {
        Authorization: `Bearer ${accessToken}`,
    };

    return (
        axios
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            .post(getUrl({ itemId, userId }), data, { headers })
            .catch(result => result.response)
            .then(result => result.data)
    );
};
