import axios from 'axios';
import { getFormattedDateWithAddFromNow } from '../utils';

const getUrl = ({ itemId, userId }) => {
    return `https://api.avito.ru/realty/v1/accounts/${userId}/items/${itemId}/prices`;
};

export const setParams = async ({ accessToken, itemId, userId }) => {
    const data = {
        prices: [
            {
                date_from: getFormattedDateWithAddFromNow(2),
                date_to: getFormattedDateWithAddFromNow(4),
                extra_guest_fee: 500,
                minimal_duration: 1,
                night_price: 1500,
            },
            {
                date_from: getFormattedDateWithAddFromNow(5),
                date_to: getFormattedDateWithAddFromNow(7),
                extra_guest_fee: 1000,
                minimal_duration: 7,
                night_price: 5000,
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
