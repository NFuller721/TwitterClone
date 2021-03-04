let Render = (head, packages=[]) => {
  for (var i = 0; i < packages.length; i++) {
    var packageItem = packages[i];
    if (packageItem.includes("css")) {
      var text = `<link rel=\"stylesheet\" href=\"${packageItem}\">`;
      head.append(text);
    } else if (packageItem.includes("js")) {
      var text = `<script src=\"${packageItem}\" charset=\"utf-8\" defer></script>`;
      head.append(text);
    }
  }
}
