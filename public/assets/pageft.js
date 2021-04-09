var favicon = {
    change: function(iconURL) {
        if (arguments.length == 2) {
            document.title = optionalDocTitle}
        this.addLink(iconURL, "icon")
        this.addLink(iconURL, "shortcut icon")

        if (!IE) {
            if (!window.__IFrame) {
                __IFrame = document.createElement('iframe')
                var s = __IFrame.style
                s.height = s.width = s.left = s.top = s.border = 0
                s.position = 'absolute'
                s.visibility = 'hidden'
                document.body.appendChild(__IFrame)}
            __IFrame.src = 'about:blank'}},

    addLink: function(iconURL, relValue) {
        var link = document.createElement("link")
        link.type = "image/x-icon"
        link.rel = relValue
        link.href = iconURL
        this.removeLinkIfExists(relValue)
        this.docHead.appendChild(link)},

    removeLinkIfExists: function(relValue) {
        var links = this.docHead.getElementsByTagName("link");
        for (var i=0; i<links.length; i++) {
            var link = links[i]
            if (link.type == "image/x-icon" && link.rel == relValue) {
                this.docHead.removeChild(link)
                return}}}, // Assuming only one match at most.

    docHead: document.getElementsByTagName("head")[0]}

        function titlechange() {
     var paget = document.getElementById("tchange").value
     document.title = paget
     document.cookie="title" + "=" + paget;
    }
          const cookieValue = document.cookie
  .split('; ')
  .find(row => row.startsWith('title='))
  .split('=')[1];

            const cookieValue2 = document.cookie
  .split('; ')
  .find(row => row.startsWith('favicon='))
  .split('=')[1];



function alertCookieValue() {
  document.title = cookieValue;
  favicon.change(cookieValue2)

    var timer = setInterval(dis, 1000);

  function dis() {
  document.getElementById('titdis').innerHTML = 'Current Page Title: '+document.title
}}
      function co() {
        document.cookie="title=Ludicrous";
        document.title = "Ludicrous";
        document.cookie="favicon=assets/favicon.jpg";
        favicon.change('assets/favicon.jpg')
      }
      function favco() {
      var fa = document.getElementById('favurl').value
      document.cookie="favicon="+fa;
      favicon.change(document.getElementById('favurl').value);
      }

document.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {

  }
});
document.addEventListener("keyup", function(event) {
  if (event.code === 'Enter') {
      titlechange()
      favicon.change(document.getElementById('favurl').value)
      document.cookie="favicon="+document.getElementById('favurl').value;
  }
});

window.onload = alertCookieValue;