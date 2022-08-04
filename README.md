# Web Tools

**Web Tools** are tools that I often use in frontend to make website or to add little nice things.

Available tools :

* Basic loader before the website
* The title of the website animated
* An  auto copy system with display
* Scrollbar custom

# Table Of Content

* [Usage](#usage)
  * [Loader](#loader)
  * [Animated Title](#animated-title)
  * [Clickable Ip](#clickable-ip)
  * [Scrollbar Custom](#scrollbar-custom)

# Usage

Here are the little things to know about the different tools.

## Loader

This is the explanation for the [Loader](https://github.com/Eliott-Srl/web-tools/tree/main/loader).

It is based on the [melonhtml5](https://melonhtml5.com/demo/royal_preloader/) system. I've just simplified the css and give you a tutorial to use it.

### Dependencies

You will need [jquery](https://jquery.com/download/) for this project or just download this [jquery.min.js](https://github.com/Eliott-Srl/web-tools/tree/main/loader/js/jquery.min.js) file, it will work properly.

Download these two files:
* [royal_preloader.min.js](https://github.com/Eliott-Srl/web-tools/tree/main/loader/js/royal_preloader.min.js)
* [royal_preloader.css](https://github.com/Eliott-Srl/web-tools/tree/main/loader/css/royal_preloader.css)

And put them respectively in a ```js``` and ```css``` folder.

### Getting started

To make it work properly, add these eleven lines in the ``<head>`` of the page you want your loader in :
```html
<link  href="css/royal_preloader.css"  rel="stylesheet">
<script  type="text/javascript"  src="js/jquery.min.js"></script>
<script  type="text/javascript"  src="js/royal_preloader.min.js"></script>
<script  type="text/javascript">
	Royal_Preloader.config({
		mode:  'text',
		text:  'Put here vat u vant in textual',
		timeout:  '1200',
		showProgress:  false,
		background:  '#1d1d1d'
	});
</script>
```
and add this line in top of the ```<body>```  :
```html
<div  id="royal_preloader"></div>
```

### Customization

Unfortunately, there is no real wiki. So here are some use cases with their respective Royal_Preloader.config. All cases below are from [melonhtml5](https://melonhtml5.com/demo/royal_preloader/).

#### Text

The result : 
https://melonhtml5.com/demo/royal_preloader/index.php

The config :
```js
Royal_Preloader.config({
	mode: 'text',
	text: 'Your text',
	background:"#000000"
});
```

#### Progress

The result : 
https://melonhtml5.com/demo/royal_preloader/progress.php

The config :
```js
Royal_Preloader.config({
	mode: 'progress',
	background: '#262D33'
});
```

#### Number

The result : 
https://melonhtml5.com/demo/royal_preloader/number.php

The config :
```js
Royal_Preloader.config({
	mode: 'number', 
	show_percentage: true, 
	background: "#000000", 
	text_colour: "#FFFFFF"
});
```

#### Logo

The result : 
https://melonhtml5.com/demo/royal_preloader/logo.php

The config :
```js
Royal_Preloader.config({
	mode: 'logo', 
	logo: 'images/your-logo.png', 
	text_colour: '#1247AB', 
	background: "#FFFFFF"
});
```

#### Scale Text

The result : 
https://melonhtml5.com/demo/royal_preloader/scale_text.php

The config :
```js
Royal_Preloader.config({
	mode: 'scale_text', 
	text: 'Your Long Text Goes Here', 
	background: "#FFFFFF", 
	text_colour: '#666666'
});
```

## Animated Title

This is the explanation for the [Animated Title](https://github.com/Eliott-Srl/web-tools/blob/main/animated-title/).

There is nothing very magic here, just a basic js script, but beautiful

### Dependencies

You need [title_animation.js](https://github.com/Eliott-Srl/web-tools/blob/main/animated-title/js/title_animation.js). When you have downloaded it, put it in a ```js``` folder.

### Getting started

To make it work properly, add these seven lines in the ``<head>`` of the page you want your animated text in :
```html
<script  src="js/title_animation.js"></script>
<script  type="text/javascript">
	Title_Animation.config({
		text:  "Put here vat u vant in textual",
		timeBetweenEachLetters:  300
	});
</script>
```

### Customisation

You can do two things :
 * Modify the ```text``` 
 * Modify the ```timeBetweenEachLetters```

That's it lol

## Clickable Ip

This is the explanation for the [Clickable Ip](https://github.com/Eliott-Srl/web-tools/tree/main/clickable-ip).

This system is inspired by [funcraft](https://www.funcraft.net/).  it's a system that allows to have something nice to get the ip of a minecraft server while being sober.

### Dependencies

Download these two files:
* [clickable_ip.js](https://github.com/Eliott-Srl/web-tools/blob/main/clickable-ip/js/clickable_ip.js) 
* [clickable_ip.css](https://github.com/Eliott-Srl/web-tools/blob/main/clickable-ip/css/clickable_ip.css)

And put them respectively in a ```js``` and ```css``` folder.

### Getting started

To make it work properly, add this line in the ``<head>`` of the page you want your clickable ip in :
```html
<link  rel="stylesheet"  href="css/clickable_ip.css">
```
And put these lines where you want your clickable ip :
```html
<div id="container-copy">
	<button onclick="copyToClickBoard()">
		<code id="ip">your-ip.net</code>
	</button>
	<p id="textvolant" style="display: none;"></p>
	<script src="js/clickable_ip.js"></script>
</div>
```

### Customization

You can modify ```your-ip.net``` and create a nice website for your nice minecraft server.

## Scrollbar Custom

This is the explanation for the [Scrollbar Custom](https://github.com/Eliott-Srl/web-tools/tree/main/scrollbar-custom).

This tool is my favorite I use it really often. It allows you to have a scrollbar cutom whatever the browser except Internet Explorer obviously lol.

### Dependencies

Download this file : [scrollbar_custom.css](https://github.com/Eliott-Srl/web-tools/tree/main/scrollbar-custom/css/scrollbar_custom.css)

And put it in a ```css``` folder.

### Getting started

To make it work properly, add these seven lines in the ``<head>`` of the page you want the custom scrollbar in :
```html
<link  rel="stylesheet"  href="css/scrollbar_custom.css">
<style>
	:root{
		--scrollbar-track: #6e6e6e;
		--scrollbar-thumb: #202225;
	}
</style>
```
And that's it.

### Customization

You can simply change the scrollbar color with ```--scrollbar-track``` and ```--scrollbar-thumb```. But for more modifications you can modify ```scrollbar_custom.css```.
