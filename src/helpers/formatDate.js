const formatDate = (dateObj) => {
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    const hours = dateObj.getHours();
    const mins = dateObj.getMinutes();

    return `${year}. ${month}. ${day} - ${hours}:${mins}`;
};

export default formatDate;
