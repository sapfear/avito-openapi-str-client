export const infoMessage = ({ result, error, bookings }) => {
    if (bookings) {
        console.log('Getted avito bookings:');
        console.log(bookings);
        return true;
    }

    if (result === 'success') {
        console.log('Successful update');
        return true;
    }

    if (error) {
        console.log('Fail update');

        if (error) {
            console.log(`Code: ${error.code}`);
            console.log(error.fields);
            console.log(`Message: ${error.message}`);
        }
        return false;
    }

    if (typeof result === 'object') {
        console.log('Fail update');
        console.log(`Message: ${result.message}`);
        return false;
    }

    return false;
};
