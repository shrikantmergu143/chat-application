import moment from "moment";

export const validateEmail = (email) => {
  const check = String(email)
  .toLowerCase()
  .match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  if(!email){
    return "Enter your email"
  }
  if(!check){
    return "Enter valid email"
  }
  return "";
};
export function getTimeAgo(timestamp) {
  const currentDate = new Date();
  const targetDate = new Date(timestamp);

  const seconds = Math.floor((currentDate - targetDate) / 1000);

  if (seconds < 60) {
    return `${seconds} sec${seconds !== 1 ? 's' : ''} ago`;
  }

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return `${minutes} min${minutes !== 1 ? 's' : ''} ago`;
  }

  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  }

  const days = Math.floor(hours / 24);
  if (days < 30) {
    return moment(targetDate).format("MM, DD HH:mm A ");
  }

  return  moment(targetDate).format("MM, DD HH:mm A ");
}
