import moment from "moment";
const timeAgo = (dateString) => {
  if (dateString) {
    return moment(dateString).fromNow();
  }
  return "";
};

export default { timeAgo };