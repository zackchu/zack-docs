# `canvas`

## `getContext("2d")`

### 1.`createLinearGradient`, `createRadialGradient`

```js
ctx.createLinearGradient(x0, y0, x1, y1);
ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
```

```js
var lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
var radialgradient = ctx.createRadialGradient(75, 75, 0, 75, 75, 100);
```

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Create a linear gradient
// The start gradient point is at x=20, y=0
// The end gradient point is at x=220, y=0
var gradient = ctx.createLinearGradient(20, 0, 220, 0);

// Add three color stops
gradient.addColorStop(0, "green");
gradient.addColorStop(0.5, "cyan");
gradient.addColorStop(1, "green");

// Set the fill style and draw a rectangle
ctx.fillStyle = gradient;
ctx.fillRect(20, 20, 200, 100);
```

### 2.`drawImage`

```js
void ctx.drawImage(image, dx, dy);
void ctx.drawImage(image, dx, dy, dWidth, dHeight);
void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
```

> ![drawImage](https://mdn.mozillademos.org/files/225/Canvas_drawimage.jpg)

### 3. `arcTo`

```js
void ctx.arcTo(x1, y1, x2, y2, radius);
```

> `x1`: The x-axis coordinate of the first control point.  
> `y1`: The y-axis coordinate of the first control point.  
> `x2`: The x-axis coordinate of the second control point.  
> `y2`: The y-axis coordinate of the second control point.  
> `radius`: The arc's radius. Must be non-negative.

### 3.`canvas`转 `blob|dataURL`
