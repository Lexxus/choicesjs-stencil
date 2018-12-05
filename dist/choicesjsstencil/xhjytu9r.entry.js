const e=window.ChoicesJSStencil.h;function t(e){return void 0!==e}function s(t){return[].concat("string"==typeof t?t?t.split(","):[]:t).map(t=>e("option",{value:t},t))}class i{async highlightItem(e,t){return this.choice.highlightItem(e,t),this}async unhighlightItem(e){return this.choice.unhighlightItem(e),this}async highlightAll(){return this.choice.highlightAll(),this}async unhighlightAll(){return this.choice.unhighlightAll(),this}async removeActiveItemsByValue(e){return this.choice.removeActiveItemsByValue(e),this}async removeActiveItems(e){return this.choice.removeActiveItems(e),this}async removeHighlightedItems(e){return this.choice.removeHighlightedItems(e),this}async showDropdown(e){return this.choice.showDropdown(e),this}async hideDropdown(e){return this.choice.hideDropdown(e),this}async toggleDropdown(){return this.choice.toggleDropdown(),this}async getValue(e){return this.choice.getValue(e)}async setValue(e){return this.choice.setValue(e),this}async setChoiceByValue(e){return this.choice.setChoiceByValue(e),this}async setChoices(e,t,s,i){return this.choice.setChoices(e,t,s,i),this}async clearStore(){return this.choice.clearStore(),this}async clearInput(){return this.choice.clearInput(),this}async enable(){return this.choice.enable(),this}async disable(){return this.choice.disable(),this}async ajax(e){return this.choice.ajax(e),this}componentDidLoad(){this.init()}componentDidUpdate(){this.init()}componentDidUnload(){this.destroy()}render(){const t={"data-selector":"root",name:this.name||null};switch(this.destroy(),this.type){case"single":this.element=e("select",Object.assign({},t),this.value?s(this.value):null);break;case"multiple":this.element=e("select",Object.assign({multiple:!0},t),this.value?s(this.value):null);break;case"text":default:this.element=e("input",Object.assign({type:"text",value:this.value},t))}return this.element}init(){const e=(s={silent:this.silent,items:this.items,choices:this.choices,renderChoiceLimit:this.renderChoiceLimit,maxItemCount:this.maxItemCount,addItems:this.addItems,removeItems:this.removeItems,removeItemButton:this.removeItemButton,editItems:this.editItems,duplicateItemsAllowed:this.duplicateItemsAllowed,delimiter:this.delimiter,paste:this.paste,searchEnabled:this.searchEnabled,searchChoices:this.searchChoices,searchFields:this.searchFields,searchFloor:this.searchFloor,searchResultLimit:this.searchResultLimit,position:this.position,resetScrollPosition:this.resetScrollPosition,regexFilter:this.regexFilter,shouldSort:this.shouldSort,shouldSortItems:this.shouldSortItems,sortFn:this.sortFn,placeholder:!0,placeholderValue:this.placeholderValue||"string"==typeof this.placeholder&&this.placeholder||" ",searchPlaceholderValue:this.searchPlaceholderValue,prependValue:this.prependValue,appendValue:this.appendValue,renderSelectedChoices:this.renderSelectedChoices,loadingText:this.loadingText,noResultsText:this.noResultsText,noChoicesText:this.noChoicesText,itemSelectText:this.itemSelectText,addItemText:this.addItemText,maxItemText:this.maxItemText,uniqueItemText:this.uniqueItemText,classNames:this.classNames,fuseOptions:this.fuseOptions,callbackOnInit:this.callbackOnInit,callbackOnCreateTemplates:this.callbackOnCreateTemplates},i=t,Object.keys(s).reduce((e,t)=>{const o=s[t];return i(o,t,s)&&(e[t]=o),e},{}));var s,i;this.choice=new Choices(this.root.querySelector('[data-selector="root"]'),e)}destroy(){this.element&&(this.element=null),this.choice&&(this.choice.destroy(),this.choice=null)}static get is(){return"choicesjs-stencil"}static get properties(){return{addItems:{type:Boolean,attr:"add-items"},addItemText:{type:String,attr:"add-item-text"},ajax:{method:!0},appendValue:{type:String,attr:"append-value"},callbackOnCreateTemplates:{type:"Any",attr:"callback-on-create-templates"},callbackOnInit:{type:"Any",attr:"callback-on-init"},choices:{type:"Any",attr:"choices"},classNames:{type:"Any",attr:"class-names"},clearInput:{method:!0},clearStore:{method:!0},delimiter:{type:String,attr:"delimiter"},disable:{method:!0},duplicateItemsAllowed:{type:Boolean,attr:"duplicate-items-allowed"},editItems:{type:Boolean,attr:"edit-items"},enable:{method:!0},fuseOptions:{type:"Any",attr:"fuse-options"},getValue:{method:!0},hideDropdown:{method:!0},highlightAll:{method:!0},highlightItem:{method:!0},items:{type:"Any",attr:"items"},itemSelectText:{type:String,attr:"item-select-text"},loadingText:{type:String,attr:"loading-text"},maxItemCount:{type:Number,attr:"max-item-count"},maxItemText:{type:String,attr:"max-item-text"},name:{type:String,attr:"name"},noChoicesText:{type:String,attr:"no-choices-text"},noResultsText:{type:String,attr:"no-results-text"},passedElement:{elementRef:!0},paste:{type:Boolean,attr:"paste"},placeholder:{type:"Any",attr:"placeholder"},placeholderValue:{type:String,attr:"placeholder-value"},position:{type:String,attr:"position"},prependValue:{type:String,attr:"prepend-value"},regexFilter:{type:"Any",attr:"regex-filter"},removeActiveItems:{method:!0},removeActiveItemsByValue:{method:!0},removeHighlightedItems:{method:!0},removeItemButton:{type:Boolean,attr:"remove-item-button"},removeItems:{type:Boolean,attr:"remove-items"},renderChoiceLimit:{type:Number,attr:"render-choice-limit"},renderSelectedChoices:{type:String,attr:"render-selected-choices"},resetScrollPosition:{type:Boolean,attr:"reset-scroll-position"},root:{elementRef:!0},searchChoices:{type:Boolean,attr:"search-choices"},searchEnabled:{type:Boolean,attr:"search-enabled"},searchFields:{type:String,attr:"search-fields"},searchFloor:{type:Number,attr:"search-floor"},searchPlaceholderValue:{type:String,attr:"search-placeholder-value"},searchResultLimit:{type:Number,attr:"search-result-limit"},setChoiceByValue:{method:!0},setChoices:{method:!0},setValue:{method:!0},shouldSort:{type:Boolean,attr:"should-sort"},shouldSortItems:{type:Boolean,attr:"should-sort-items"},showDropdown:{method:!0},silent:{type:Boolean,attr:"silent"},sortFn:{type:"Any",attr:"sort-fn"},toggleDropdown:{method:!0},type:{type:String,attr:"type"},unhighlightAll:{method:!0},unhighlightItem:{method:!0},uniqueItemText:{type:String,attr:"unique-item-text"},value:{type:String,attr:"value"}}}static get events(){return[{name:"addItem",method:"addItemEvent",bubbles:!0,cancelable:!0,composed:!0},{name:"removeItem",method:"removeItemEvent",bubbles:!0,cancelable:!0,composed:!0},{name:"highlightItem",method:"highlightItemEvent",bubbles:!0,cancelable:!0,composed:!0},{name:"unhighlightItem",method:"unhighlightItemEvent",bubbles:!0,cancelable:!0,composed:!0},{name:"choice",method:"choiceEvent",bubbles:!0,cancelable:!0,composed:!0},{name:"change",method:"changeEvent",bubbles:!0,cancelable:!0,composed:!0},{name:"search",method:"searchEvent",bubbles:!0,cancelable:!0,composed:!0},{name:"showDropdown",method:"showDropdownEvent",bubbles:!0,cancelable:!0,composed:!0},{name:"hideDropdown",method:"hideDropdownEvent",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".choices{position:relative;margin-bottom:24px;font-size:16px}.choices:focus{outline:none}.choices:last-child{margin-bottom:0}.choices.is-disabled .choices__inner,.choices.is-disabled .choices__input{background-color:#eaeaea;cursor:not-allowed;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.choices.is-disabled .choices__item{cursor:not-allowed}.choices[data-type*=select-one]{cursor:pointer}.choices[data-type*=select-one] .choices__inner{padding-bottom:7.5px}.choices[data-type*=select-one] .choices__input{display:block;width:100%;padding:10px;border-bottom:1px solid #ddd;background-color:#fff;margin:0}.choices[data-type*=select-one] .choices__button{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yLjU5Mi4wNDRsMTguMzY0IDE4LjM2NC0yLjU0OCAyLjU0OEwuMDQ0IDIuNTkyeiIvPjxwYXRoIGQ9Ik0wIDE4LjM2NEwxOC4zNjQgMGwyLjU0OCAyLjU0OEwyLjU0OCAyMC45MTJ6Ii8+PC9nPjwvc3ZnPg==);padding:0;background-size:8px;position:absolute;top:50%;right:0;margin-top:-10px;margin-right:25px;height:20px;width:20px;border-radius:10em;opacity:.5}.choices[data-type*=select-one] .choices__button:focus,.choices[data-type*=select-one] .choices__button:hover{opacity:1}.choices[data-type*=select-one] .choices__button:focus{-webkit-box-shadow:0 0 0 2px #00bcd4;box-shadow:0 0 0 2px #00bcd4}.choices[data-type*=select-one]:after{content:\"\";height:0;width:0;border-style:solid;border-color:#333 transparent transparent transparent;border-width:5px;position:absolute;right:11.5px;top:50%;margin-top:-2.5px;pointer-events:none}.choices[data-type*=select-one].is-open:after{border-color:transparent transparent #333 transparent;margin-top:-7.5px}.choices[data-type*=select-one][dir=rtl]:after{left:11.5px;right:auto}.choices[data-type*=select-one][dir=rtl] .choices__button{right:auto;left:0;margin-left:25px;margin-right:0}.choices[data-type*=select-multiple] .choices__inner,.choices[data-type*=text] .choices__inner{cursor:text}.choices[data-type*=select-multiple] .choices__button,.choices[data-type*=text] .choices__button{position:relative;display:inline-block;margin-top:0;margin-right:-4px;margin-bottom:0;margin-left:8px;padding-left:16px;border-left:1px solid #008fa1;background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yLjU5Mi4wNDRsMTguMzY0IDE4LjM2NC0yLjU0OCAyLjU0OEwuMDQ0IDIuNTkyeiIvPjxwYXRoIGQ9Ik0wIDE4LjM2NEwxOC4zNjQgMGwyLjU0OCAyLjU0OEwyLjU0OCAyMC45MTJ6Ii8+PC9nPjwvc3ZnPg==);background-size:8px;width:8px;line-height:1;opacity:.75;border-radius:0}.choices[data-type*=select-multiple] .choices__button:focus,.choices[data-type*=select-multiple] .choices__button:hover,.choices[data-type*=text] .choices__button:focus,.choices[data-type*=text] .choices__button:hover{opacity:1}.choices__inner{display:inline-block;vertical-align:top;width:100%;background-color:#f9f9f9;padding:7.5px 7.5px 3.75px;border:1px solid #ddd;border-radius:2.5px;font-size:14px;min-height:44px;overflow:hidden}.is-focused .choices__inner,.is-open .choices__inner{border-color:#b7b7b7}.is-open .choices__inner{border-radius:2.5px 2.5px 0 0}.is-flipped.is-open .choices__inner{border-radius:0 0 2.5px 2.5px}.choices__list{margin:0;padding-left:0;list-style:none}.choices__list--single{display:inline-block;padding:4px 16px 4px 4px;width:100%}[dir=rtl] .choices__list--single{padding-right:4px;padding-left:16px}.choices__list--single .choices__item{width:100%}.choices__list--multiple{display:inline}.choices__list--multiple .choices__item{display:inline-block;vertical-align:middle;border-radius:20px;padding:4px 10px;font-size:12px;font-weight:500;margin-right:3.75px;margin-bottom:3.75px;background-color:#00bcd4;border:1px solid #00a5bb;color:#fff;word-break:break-all}.choices__list--multiple .choices__item[data-deletable]{padding-right:5px}[dir=rtl] .choices__list--multiple .choices__item{margin-right:0;margin-left:3.75px}.choices__list--multiple .choices__item.is-highlighted{background-color:#00a5bb;border:1px solid #008fa1}.is-disabled .choices__list--multiple .choices__item{background-color:#aaa;border:1px solid #919191}.choices__list--dropdown{display:none;z-index:1;position:absolute;width:100%;background-color:#fff;border:1px solid #ddd;top:100%;margin-top:-1px;border-bottom-left-radius:2.5px;border-bottom-right-radius:2.5px;overflow:hidden;word-break:break-all}.choices__list--dropdown.is-active{display:block}.is-open .choices__list--dropdown{border-color:#b7b7b7}.is-flipped .choices__list--dropdown{top:auto;bottom:100%;margin-top:0;margin-bottom:-1px;border-radius:.25rem .25rem 0 0}.choices__list--dropdown .choices__list{position:relative;max-height:300px;overflow:auto;-webkit-overflow-scrolling:touch;will-change:scroll-position}.choices__list--dropdown .choices__item{position:relative;padding:10px;font-size:14px}[dir=rtl] .choices__list--dropdown .choices__item{text-align:right}\@media (min-width:640px){.choices__list--dropdown .choices__item--selectable{padding-right:100px}.choices__list--dropdown .choices__item--selectable:after{content:attr(data-select-text);font-size:12px;opacity:0;position:absolute;right:10px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}[dir=rtl] .choices__list--dropdown .choices__item--selectable{text-align:right;padding-left:100px;padding-right:10px}[dir=rtl] .choices__list--dropdown .choices__item--selectable:after{right:auto;left:10px}}.choices__list--dropdown .choices__item--selectable.is-highlighted{background-color:#f2f2f2}.choices__list--dropdown .choices__item--selectable.is-highlighted:after{opacity:.5}.choices__item{cursor:default}.choices__item--selectable{cursor:pointer}.choices__item--disabled{cursor:not-allowed;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:.5}.choices__heading{font-weight:600;font-size:12px;padding:10px;border-bottom:1px solid #f7f7f7;color:grey}.choices__button{text-indent:-9999px;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;background-color:transparent;background-repeat:no-repeat;background-position:50%;cursor:pointer}.choices__button:focus{outline:none}.choices__input{display:inline-block;vertical-align:baseline;background-color:#f9f9f9;font-size:14px;margin-bottom:5px;border:0;border-radius:0;max-width:100%;padding:4px 0 4px 2px}.choices__input:focus{outline:0}[dir=rtl] .choices__input{padding-right:2px;padding-left:0}.choices__placeholder{opacity:.5}.choices[data-type*=select-multiple] .choices__input.is-hidden,.choices[data-type*=select-one] .choices__input.is-hidden,.choices__input.is-hidden{display:none}"}}export{i as ChoicesjsStencil};