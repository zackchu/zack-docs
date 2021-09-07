# `width`

## value:

1. `auto`
2. `max-content`
   ```css
    p.maxgreen {
    background: lightgreen;
    width: intrinsic;           /* Safari/WebKit uses a non-standard name */
    width: -moz-max-content;    /* Firefox/Gecko */
    width: -webkit-max-content; /* Chrome */
    width: max-content;
    }
    ```
   ```html
    <p class="maxgreen">The Mozilla community produces a lot of great software.</p>
    ```
3. `min-content`
   ```css
    p.minblue {
    background: lightblue;
    width: -moz-min-content;    /* Firefox */
    width: -webkit-min-content; /* Chrome */
    width: min-content;
    }
    ```
   ```html
    <p class="minblue">The Mozilla community produces a lot of great software.</p>
    ```
4. `fit-content(<length-percentage>)`
5. \<length\>
6. \<percentage\>
