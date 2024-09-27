import moment from "moment";
const timeAgo = (dateString) => {
  if (dateString) {
    return moment(dateString).fromNow();
  }
  return "";
};

const formatDateSort = (date) => {
  if (!date) {
    return "";
  }
  return moment(date).format("MMM, DD YYYY"); // Formats the date to 'Jun, 15 2019'
};

export default { timeAgo, formatDateSort };
