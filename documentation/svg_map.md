# interactive_SVG_map


in /pages/map.vue, a iteractive svg map was created to show position of companies.
it is not completed because of time limitation.
The idea is that every position point is clickable and link to the detail page of 
the corresponding company.

in svg, 'a' tag can be used to add hyperlink. simply use it to wrap something that you want to make clickable.

for example: this code can make a text lead to home page.
```javascript
<a href="/">
<text xml:space="preserve"
                     style="font-size:2.11667px;font-family:'DejaVu Sans Mono';-inkscape-font-specification:'DejaVu Sans Mono';fill:#00ffff;stroke:none;stroke-width:0.264583"
                     x="48.417408" y="223.23935" id="text894">
                     <tspan sodipodi:role="line" id="tspan892" style="stroke-width:0.264583" x="48.417408"
                        y="223.23935">1</tspan>
                  </text>
</a>
```