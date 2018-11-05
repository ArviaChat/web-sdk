## Installation
Just include **arvia.chat.js** on your page, create an empty div element and initialize ArviaChat in that div.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Arvia Chat</title>
    <script type="text/javascript" src="https://arvia.chat/js/arvia.chat.js" ></script>`
  </head>
  <body>
    <button id="startButton" style="height: 32px">Start Arvia Chat</button><br />
    <div id="arvia.chat">
    <script type="text/javascript">

      document.getElementById('startButton').addEventListener('click',
        
        function() {
          var arviaChat = new ArviaChat();
          arviaChat.setTestUser(true);
          arviaChat.setRoomName("test-room-1");
          arviaChat.init("arvia.chat");
          arviaChat.connect();
        }

      );

    </script>
  </body>
</html>
```

## Live Examples
SDK with default settings <a href="https://arvia.chat/sdk/web/example.html" target="_blank">https://arvia.chat/sdk/web/example.html</a><br />
Example with some buttons <a href="https://arvia.chat/sdk/web/example-some-methods.html" target="_blank">https://arvia.chat/sdk/web/example-some-methods.html</a><br />
Arvia Chat in a popup <a href="https://arvia.chat/sdk/web/example-popup.html" target="_blank">https://arvia.chat/sdk/web/example-popup.html</a><br />
Floating Chat Widget <a href="https://arvia.chat/sdk/web/example-widget.html" target="_blank">https://arvia.chat/sdk/web/example-widget.html</a><br />

## SDK Reference
Take a look at the <a href="https://arvia.chat/sdk/web/reference/index.html" target="_blank">SDK Reference</a> for more options and customization.<br /><br />
For mark down version, go to [reference.md](reference.md)