export default function titleFormat(title) {
  return title.length <= 20 ? title : title.substr(0, 20) + "...";
}
