const formatDate = (dateObj) => {
    if (!(dateObj instanceof Date)) {
        throw new Error('valid Date object expected');
    }

    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    const hours = dateObj.getHours();
    const mins = dateObj.getMinutes();

    return `${year}. ${month}. ${day} - ${hours}:${mins.toString().length < 2 ? `0${mins.toString()}` : mins}`;
};

export default formatDate;
