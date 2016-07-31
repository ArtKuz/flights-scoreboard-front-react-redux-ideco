import moment from 'moment';

export function dateTimeFormatForRead(date, format) {
    if (!date) return null;
    return moment(date, 'YYYYMMDDTHHmm').format(format);
}

export function comparisonMore(date1, date2) {
    if (!date1 || !date2) return null;
    return moment(moment(date1, 'YYYYMMDDTHHmm')).isBefore(moment(date2, 'YYYYMMDDTHHmm'));
}