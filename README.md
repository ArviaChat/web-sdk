# Arvia Chat Web SDK Implementation

## 1. Include SDK files
First include **arvia.chat.js** and **arvia.chat.css** in your page by using the `<script>` and `<link>` tags in your html header.

*`<html>`<br />
&nbsp;&nbsp;`<head>`<br />*
#### &nbsp;&nbsp;&nbsp;&nbsp;`<script type="text/javascript" src="https://arvia.chat/js/arvia.chat.js" />`
#### &nbsp;&nbsp;&nbsp;&nbsp;`<link rel="stylesheet" href="https://arvia.chat/css/arvia.chat.css" />`
*&nbsp;&nbsp;`</head>`<br />
&nbsp;&nbsp;`<body>`<br />
&nbsp;&nbsp;&nbsp;&nbsp;...<br />
&nbsp;&nbsp;`</body>`<br />
`</html>`*

## 2. Create the target div element
Create a div element in your file. All of the Arvia Chat elements will be created in this div. Give an id to ths div.

*`<html>`<br />
&nbsp;&nbsp;`<head>`<br />
&nbsp;&nbsp;&nbsp;&nbsp;`<script type="text/javascript" src="https://arvia.chat/js/arvia.chat.js" />`<br />
&nbsp;&nbsp;&nbsp;&nbsp;`<link rel="stylesheet" href="https://arvia.chat/css/arvia.chat.css" />`<br />
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
&nbsp;&nbsp;&nbsp;&nbsp;`<script type="text/javascript" src="https://arvia.chat/js/arvia.chat.js" />`<br />
&nbsp;&nbsp;&nbsp;&nbsp;`<link rel="stylesheet" href="https://arvia.chat/css/arvia.chat.css" />`<br />
&nbsp;&nbsp;`</head>`<br />
&nbsp;&nbsp;`<body>`<br /><br />
&nbsp;&nbsp;`<div id="arvia.chat">`<br />*
#### &nbsp;&nbsp;`<script type="text/javascript">`<br />
```javascript
    AC.init("arvia.chat");
    AC.setRoom("my-room");
    AC.connect();
```
#### &nbsp;&nbsp;`</script>` <br /><br />
*&nbsp;&nbsp;`</body>`<br />
`</html>`*

# That's it! Enjoy!

Take a look at the SDK Reference for more options and customization.
