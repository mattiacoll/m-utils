## Functions

<dl>
<dt><a href="#byId">byId(id)</a> ⇒ <code>Element</code> | <code>null</code></dt>
<dd><p>Shorthand for <code>document.getElementById</code></p>
</dd>
<dt><a href="#byClass">byClass(selClass, [parent])</a> ⇒ <code>HTMLCollection</code></dt>
<dd><p>Shorthand for <code>document.getElementsByClassName</code></p>
</dd>
<dt><a href="#query">query(selector, [parent])</a> ⇒ <code>Element</code> | <code>null</code></dt>
<dd><p>Shorthand for <code>document.querySelector</code></p>
</dd>
<dt><a href="#queryAll">queryAll(selector, [parent])</a> ⇒ <code>NodeList</code></dt>
<dd><p>Shorthand per <code>document.querySelectorAll</code></p>
</dd>
<dt><a href="#forEachHTML">forEachHTML(els, fn, [scope])</a></dt>
<dd><p>Foreach polyfill for NodeList and HTMLCollection
<a href="https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/">https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/</a></p>
</dd>
<dt><a href="#nextFrame">nextFrame(fn)</a></dt>
<dd><p>Runs a function the next frame useful for effects
from <code>display:none</code> to <code>display:block</code> and transition</p>
</dd>
<dt><a href="#addClass">addClass(el, ...classes)</a></dt>
<dd><p>Shorthand for <code>element.classList.add</code>, works with multiple nodes</p>
</dd>
<dt><a href="#removeClass">removeClass(el, ...classes)</a></dt>
<dd><p>Shorthand for <code>element.classList.remove</code>, works with multiple nodes</p>
</dd>
<dt><a href="#hasClass">hasClass(el, ...classes)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Checks if an element has a class or not
// TODO: check for multiple classes of multiple elements</p>
</dd>
<dt><a href="#addEvent">addEvent(el, ev, fn, [opts])</a></dt>
<dd><p>Shorthand for <code>element.addEventListener</code>, works with multiple elements</p>
</dd>
<dt><a href="#removeEvent">removeEvent(el, ev, fn, [opts])</a></dt>
<dd><p>Shorthand for <code>element.removeEventListener</code>, works with multiple elements</p>
</dd>
<dt><a href="#getTopPos">getTopPos(el, [topEl])</a> ⇒ <code>Number</code></dt>
<dd><p>Gets an element top position</p>
</dd>
<dt><a href="#getLeftPos">getLeftPos(el, [topEl])</a> ⇒ <code>Number</code></dt>
<dd><p>Gets an element left position</p>
</dd>
<dt><a href="#getElementIndex">getElementIndex(el)</a> ⇒ <code>Number</code></dt>
<dd><p>Similar to jQuery <code>$( el ).index()</code>
index start at 0</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#foreachCB">foreachCB</a> : <code>function</code></dt>
<dd><p>Foreach callback</p>
</dd>
</dl>

<a name="byId"></a>

## byId(id) ⇒ <code>Element</code> \| <code>null</code>
Shorthand for `document.getElementById`

**Kind**: global function  
**Returns**: <code>Element</code> \| <code>null</code> - - The selected element  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | The selector's id |

<a name="byClass"></a>

## byClass(selClass, [parent]) ⇒ <code>HTMLCollection</code>
Shorthand for `document.getElementsByClassName`

**Kind**: global function  
**Returns**: <code>HTMLCollection</code> - - The selected elements  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selClass | <code>String</code> |  | The selector's class |
| [parent] | <code>Element</code> | <code>document</code> | Parent element |

<a name="query"></a>

## query(selector, [parent]) ⇒ <code>Element</code> \| <code>null</code>
Shorthand for `document.querySelector`

**Kind**: global function  
**Returns**: <code>Element</code> \| <code>null</code> - - The selected element  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>String</code> |  | Selector |
| [parent] | <code>Element</code> | <code>document</code> | Parent element |

<a name="queryAll"></a>

## queryAll(selector, [parent]) ⇒ <code>NodeList</code>
Shorthand per `document.querySelectorAll`

**Kind**: global function  
**Returns**: <code>NodeList</code> - - The selected element  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>String</code> |  | Selector |
| [parent] | <code>Element</code> | <code>document</code> | Parent element |

<a name="forEachHTML"></a>

## forEachHTML(els, fn, [scope])
Foreach polyfill for NodeList and HTMLCollection
https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| els | <code>Array</code> \| <code>NodeList</code> \| <code>HTMLCollection</code> | A list of elements |
| fn | [<code>foreachCB</code>](#foreachCB) | Callback containing ( value, index ) as arguments |
| [scope] | <code>Scope</code> | Scope |

<a name="nextFrame"></a>

## nextFrame(fn)
Runs a function the next frame useful for effects
from `display:none` to `display:block` and transition

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | Callback |

<a name="addClass"></a>

## addClass(el, ...classes)
Shorthand for `element.classList.add`, works with multiple nodes

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>Element</code> \| <code>HTMLCollection</code> \| <code>NodeList</code> | A list of elements |
| ...classes | <code>String</code> | Classes to add |

<a name="addClass..addClassEl"></a>

### addClass~addClassEl(elem, ...remClass)
Adds classes to a single element

**Kind**: inner method of [<code>addClass</code>](#addClass)  

| Param | Type | Description |
| --- | --- | --- |
| elem | <code>Element</code> | An HTML element |
| ...remClass | <code>String</code> | Classes to add |

<a name="removeClass"></a>

## removeClass(el, ...classes)
Shorthand for `element.classList.remove`, works with multiple nodes

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>Element</code> \| <code>HTMLCollection</code> \| <code>NodeList</code> | A list of elements |
| ...classes | <code>String</code> | Classes to remove |

<a name="removeClass..removeClassEl"></a>

### removeClass~removeClassEl(elem, ...remClass)
Adds classes to a single element

**Kind**: inner method of [<code>removeClass</code>](#removeClass)  

| Param | Type | Description |
| --- | --- | --- |
| elem | <code>Element</code> | An HTML element |
| ...remClass | <code>String</code> | Classes to remove |

<a name="hasClass"></a>

## hasClass(el, ...classes) ⇒ <code>Boolean</code>
Checks if an element has a class or not
// TODO: check for multiple classes of multiple elements

**Kind**: global function  
**Returns**: <code>Boolean</code> - - The element has the class  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>Element</code> | An HTML element |
| ...classes | <code>String</code> | Classes to check the presence of |

<a name="addEvent"></a>

## addEvent(el, ev, fn, [opts])
Shorthand for `element.addEventListener`, works with multiple elements

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>Element</code> \| <code>HTMLCollection</code> \| <code>NodeList</code> | A list of elements |
| ev | <code>String</code> | Event's name |
| fn | <code>function</code> | Event's function |
| [opts] | <code>Options</code> | Optional event options |

<a name="removeEvent"></a>

## removeEvent(el, ev, fn, [opts])
Shorthand for `element.removeEventListener`, works with multiple elements

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>Element</code> \| <code>HTMLCollection</code> \| <code>NodeList</code> | A list of elements |
| ev | <code>String</code> | Event's name |
| fn | <code>function</code> | Event's function |
| [opts] | <code>Options</code> | Optional event options |

<a name="getTopPos"></a>

## getTopPos(el, [topEl]) ⇒ <code>Number</code>
Gets an element top position

**Kind**: global function  
**Returns**: <code>Number</code> - Element's top position  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| el | <code>Element</code> |  | An HTML element |
| [topEl] | <code>Element</code> | <code>document.body</code> | Wrapping element |

<a name="getLeftPos"></a>

## getLeftPos(el, [topEl]) ⇒ <code>Number</code>
Gets an element left position

**Kind**: global function  
**Returns**: <code>Number</code> - Element's left position  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| el | <code>Element</code> |  | An HTML element |
| [topEl] | <code>Element</code> | <code>document.body</code> | Wrapping element |

<a name="getElementIndex"></a>

## getElementIndex(el) ⇒ <code>Number</code>
Similar to jQuery `$( el ).index()`
index start at 0

**Kind**: global function  
**Returns**: <code>Number</code> - - The element's index  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>Element</code> | An HTML element |

<a name="foreachCB"></a>

## foreachCB : <code>function</code>
Foreach callback

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Element</code> | The element |
| [index] | <code>Number</code> | The index of the element |

