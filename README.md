**Important note**: You need to add and verify your website in project platforms tab at your Arvia Chat account to be able to use Arvia Chat Web SDK on your website

# Arvia Chat Web SDK Implementation

## 1. Include SDK files
First include **arvia.chat.js** and **arvia.chat.css** in your page by using the `<script>` and `<link>` tags in your html header.

*`<html>`<br />
&nbsp;&nbsp;`<head>`<br />*
#### &nbsp;&nbsp;&nbsp;&nbsp;`<script type="text/javascript" src="https://arvia.chat/js/arvia.chat.js" ></script>`
#### &nbsp;&nbsp;&nbsp;&nbsp;`<link rel="stylesheet" href="https://arvia.chat/css/arvia.chat.css" ></link>`
*&nbsp;&nbsp;`</head>`<br />
&nbsp;&nbsp;`<body>`<br />
&nbsp;&nbsp;&nbsp;&nbsp;...<br />
&nbsp;&nbsp;`</body>`<br />
`</html>`*

## 2. Create the target div element
Create a div element in your file. All of the Arvia Chat elements will be created in this div. Give an id to ths div.

*`<html>`<br />
&nbsp;&nbsp;`<head>`<br />
&nbsp;&nbsp;&nbsp;&nbsp;`<script type="text/javascript" src="https://arvia.chat/js/arvia.chat.js" ></script>`<br />
&nbsp;&nbsp;&nbsp;&nbsp;`<link rel="stylesheet" href="https://arvia.chat/css/arvia.chat.css" ></link>`<br />
&nbsp;&nbsp;`</head>`<br />
&nbsp;&nbsp;`<body>`<br />*
#### &nbsp;&nbsp;`<div id="arvia.chat"></div>`
&nbsp;&nbsp;&nbsp;&nbsp;...<br />
*&nbsp;&nbsp;`</body>`<br />
`</html>`*

## 3. Init, set, connect
Add a script tag to use Arvia Chat SDK methods. Call **init** method of the SDK to create the chat interface. Pass the **div id** as the parameter. Then call **setRoom** method with the **room name** as the parameter. Finally call **connect** method to make the connection.

*`<html>`<br />
&nbsp;&nbsp;`<head>`<br />
&nbsp;&nbsp;&nbsp;&nbsp;`<script type="text/javascript" src="https://arvia.chat/js/arvia.chat.js" ></script>`<br />
&nbsp;&nbsp;&nbsp;&nbsp;`<link rel="stylesheet" href="https://arvia.chat/css/arvia.chat.css" ></link>`<br />
&nbsp;&nbsp;`</head>`<br />
&nbsp;&nbsp;`<body>`<br /><br />
&nbsp;&nbsp;`<div id="arvia.chat">`<br />*
#### &nbsp;&nbsp;`<script type="text/javascript">`<br />
```javascript
    var arviaChat = new ArviaChat();
    arviaChat.init("arvia.chat");
    arviaChat.setRoom("my-room");
    arviaChat.connect();
```
#### &nbsp;&nbsp;`</script>` <br /><br />
*&nbsp;&nbsp;`</body>`<br />
`</html>`*

##### That's it! Enjoy!



# SDK Reference
Take a look at the [SDK Reference](https://arvia.chat/sdk/web/reference/index.html) for more options and customization.<br />
For md version on this repository go to [reference.md](reference.md)


# Live Demo With Sample SDK Usage
Try the SDK live on [sdk sample page](https://arvia.chat/sdk/web/example.html)
