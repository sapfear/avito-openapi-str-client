const MILLISECONDS_IN_DAY = 60 * 60 * 24 * 1000;

export const getFormattedDateWithAddFromNow = addCount => {
    return new Date(Date.now() + MILLISECONDS_IN_DAY * addCount)
        .toISOString()
        .split('T')[0];
};
