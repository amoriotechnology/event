;try{window.performance.mark('jira.webresources,jira.webresources,com.atlassian.administration.atlassian-admin-quicksearch-jira,jira.webresources,com.atlassian.jira.plugins.jira-development-integration-plugin,com.atlassian.analytics.analytics-client,com.atlassian.plugins.atlassian-connect-plugin,com.atlassian.jira.jira-fileviewer-plugin,com.atlassian.jira.jira-fileviewer-plugin,com.atlassian.jira.jira-issue-nav-plugin,com.atlassian.crowd.user-provisioning-vertigo-plugin,com.atlassian.jira.jira-atlaskit-plugin,com.atlassian.pas,com.atlassian.auiplugin,com.atlassian.jira.plugins.jira-development-integration-plugin,com.atlassian.jira.plugins.jira-browser-metrics,com.pyxis.greenhopper.jira,com.atlassian.plugins.browser.metrics.browser-metrics-plugin_batch_file_eval:start');} catch(e){};;
/* module-key = 'jira.webresources:key-commands', location = '/includes/jquery/plugins/keyevents/keyevents.js' */
!function(e){function t(t,n,r){function i(t){var i=n(t);if(i){var c=new e.Event(r);c.key=i,"aui:keypress"!==r&&(c.shiftKey=t.shiftKey,c.ctrlKey=t.ctrlKey,c.altKey=t.altKey);var u=t.target,a=9===u.nodeType?u:u.ownerDocument;a!==document?(c.target=u,arguments[0]=c,e.event.trigger(c,arguments,document,!0)):e(u).trigger(c),c.isDefaultPrevented()&&t.preventDefault()}}var c=0;e.event.special[r]={setup:function(){0===c&&e(document).bind(t,i),c++},teardown:function(){c--,0===c&&e(document).unbind(t,i)}}}var n={8:"Backspace",9:"Tab",13:"Return",16:"Shift",17:"Control",18:"Alt",27:"Esc",32:"Spacebar",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",46:"Del"},r={16:"Shift",17:"Control",18:"Alt"},i=0;t("keydown",function(e){if(e.which in r){if(e.which===i)return null;i=e.which}else i=0;return n[e.which]||null},"aui:keydown"),t("keypress",function(e){var t=e.altKey&&e.ctrlKey;switch(i=0,e.which){case 0:case 8:case 9:case 27:break;default:if(t||!e.ctrlKey&&!e.metaKey)return String.fromCharCode(e.which)}return null},"aui:keypress"),t("keyup",function(e){return e.which===i&&(i=0),n[e.which]||null},"aui:keyup")}(jQuery);;
;
/* module-key = 'jira.webresources:key-commands', location = '/includes/jquery/plugins/shortcuts/shortcuts.js' */
!function(t){function n(t){h&&r(),h=16!==t.which}function e(n){var e=t(n.target).prop("contenteditable");if(t(n.target).is(":input:not(button[type=button])")||"true"===e||""===e)return void r();a.push(n.key),clearTimeout(c),c=setTimeout(r,2e3),a.length>d&&a.shift();for(var o=a.join(""),i=0;i<o.length;i++){var s=o.slice(i);if(s in u){n.preventDefault(),n=new t.Event("shortcut"),n.data=s,u[s].call(document,n),a.length=0;break}}h=!1}function o(){h&&r()}function r(){a.length=0}function i(t,n){var e=t.length,o=n.length;if(e===o)return t===n;var r,i;return e<o?(r=n.indexOf(t),i=o-e):(r=t.indexOf(n),i=e-o),r>=0&&r<i}var u={},a=[],d=0,c=0,h=!1,s=t(document);t.event.special.shortcut={setup:function(){s.bind("keydown",n),s.bind("aui:keypress",e),s.bind("keyup",o)},teardown:function(){s.unbind("keydown",n),s.unbind("aui:keypress",e),s.unbind("keyup",o)},add:function(t){if(this!==document)throw new TypeError('"shortcut" event handlers must be bound at the document');if(void 0===t.data)throw new Error('No data argument supplied in call to jQuery.fn.bind("shortcut", '+(t.handler.name||"function")+")");if("string"!=typeof t.data)throw new TypeError("Object "+t.data+" is not a string");if(0===t.data.length)throw new Error("Shortcut sequence must not be empty");for(var n in u)if(i(n,t.data))return void console.log('Cannot bind new shortcut "'+t.data+'" due to conflict with existing shortcut "'+n+'"');t.data.length>d&&(d=t.data.length),u[t.data]=t.handler},remove:function(t){if(this!==document)throw new TypeError('"shortcut" event handlers must be bound at the document');delete u[t.data]}}}(jQuery);;
;
/* module-key = 'jira.webresources:key-commands', location = '/includes/ajs/keyboardshortcut/KeyboardShortcuts.js' */
define("jira/ajs/keyboardshortcut/keyboard-shortcut",["jira/util/formatter","aui/inline-dialog","wrm/context-path","jquery","underscore"],function(t,e,o,r,n){var i=o(),c=function(t,e){this._executer=null,this.shortcuts=[t],this._bindShortcut(t,e)};return c.prototype._bindShortcut=function(t,o){if("string"!=typeof t)throw new TypeError("KeyboardShortcut expects string; received "+typeof t);if(/^(?:ctrl|alt|shift|meta)+/i.test(t))throw new SyntaxError('KeyboardShortcut cannot bind the shortcut "'+t+'" because it uses a modifier');var n=this;r(document).bind("shortcut",t,function(r){n._executer&&!n._ignoreShortcut(r,t,o)&&(e.current&&e.current.hide(),n._executer(r),r.preventDefault())})},c.prototype._ignoreShortcut=function(t,e,o){var r=!1;return n.each(c._ignoreConditions,function(n){n(t,e,o)&&(r=!0)}),r},c.prototype._addShortcutTitle=function(e){var o=r(e),n=o.attr("title")||"",i="Type",c="then",u="OR",s=r.map(this.shortcuts,function(t){return" '"+t.split("").join("' "+c+" '")+"'"});n+=" ( "+i+s.join(" "+u+" ")+" )",o.attr("title",n)},c.prototype.moveToNextItem=function(t){this._executer=function(){var e,o=r(t),n=r(t+".focused");this._executer.blurHandler||r(document).one("keypress",function(t){27===t.keyCode&&n&&n.removeClass("focused")}),0===n.length?n=r(t).eq(0):(n.removeClass("focused"),e=r.inArray(n.get(0),o),e<o.length-1?(e+=1,n=o.eq(e)):(n.removeClass("focused"),n=r(t).eq(0))),n&&n.length>0&&(n.addClass("focused"),n.scrollIntoView(),n.find("a:first").focus())}},c.prototype.moveToPrevItem=function(t){this._executer=function(){var e,o=r(t),n=r(t+".focused");this._executer.blurHandler||r(document).one("keypress",function(t){27===t.keyCode&&n&&n.removeClass("focused")}),0===n.length?n=r(t+":last"):(n.removeClass("focused"),e=r.inArray(n.get(0),o),e>0?(e-=1,n=o.eq(e)):(n.removeClass("focused"),n=r(t+":last"))),n&&n.length>0&&(n.addClass("focused"),n.scrollIntoView(),n.find("a:first").focus())}},c.prototype.click=function(t){this._addShortcutTitle(t),this._executer=function(){var e=r(t).eq(0);e.length>0&&e.click()}},c.prototype.goTo=function(t){this._executer=function(){window.location.href=i+t}},c.prototype.followLink=function(t){this._addShortcutTitle(t),this._executer=function(){var e=r(t).eq(0);e.length>0&&("a"===e.prop("nodeName").toLowerCase()||"link"===e.prop("nodeName").toLowerCase())&&(e.click(),window.location.href=e.attr("href"))}},c.prototype.moveToAndClick=function(t){this._addShortcutTitle(t),this._executer=function(){var e=r(t).eq(0);e.length>0&&(e.click(),e.scrollIntoView())}},c.prototype.moveToAndFocus=function(t){this._addShortcutTitle(t),this._executer=function(e){var o=r(t).eq(0);o.length>0&&(o.focus(),o.scrollIntoView(),o.is(":input")&&e.preventDefault())}},c.prototype.evaluate=function(t){"function"!=typeof t&&(t=new Function(t)),t.call(this)},c.prototype.execute=function(t){var e=this;this._executer=function(){"function"!=typeof t&&(t=new Function(t)),t.call(e)}},c.prototype.or=function(t){return this.shortcuts.push(t),this._bindShortcut(t),this},c._ignoreConditions=[],c._shortcuts=[],c.addIgnoreCondition=function(t){c._ignoreConditions.push(t)},c.getKeyboardShortcutKeys=function(t){for(var e in c._shortcuts){var o=c._shortcuts[e];if(o.moduleKey===t)return o.keys.toString()}return null},c.fromJSON=function(t){var e;return t&&(c._shortcuts=t,e={},n.each(t,function(t){t.keys.forEach(function(o){var r=o.join("");if(o.length<r.length)throw new Error("Shortcut sequence ["+o.join(",")+"] contains invalid keys");var n=e[r]=new c(r,t.context);n[t.op](t.param)})})),e},c}),AJS.namespace("AJS.KeyboardShortcut",null,require("jira/ajs/keyboardshortcut/keyboard-shortcut"));;
;
/* module-key = 'jira.webresources:key-commands', location = '/includes/ajs/keyboardshortcut/initKeyboardShortcuts.js' */
!function(){var r=require("jira/ajs/keyboardshortcut/keyboard-shortcut"),e=require("jira/ajs/keyboardshortcut/keyboard-shortcut-toggle"),t=require("jira/util/data/meta"),u=require("jira/dialog/dialog"),a=require("aui/dropdown"),o=require("aui/popup"),i=require("jquery"),n=require("wrm/data");r.addIgnoreCondition(function(){return o.current||a.current||u.current||e.areKeyboardShortcutsDisabled()}),i(function(){t.get("keyboard-shortcuts-enabled")?e.enable():e.disable();var u=n.claim("jira.webresources:key-commands.shortcuts");u&&(AJS.activeShortcuts=r.fromJSON(u),i(document).bind("aui:keyup",function(r){var e,t;"Esc"===r.key&&(e=i(r.target),e.is(":input:not(button[type='button'])")&&(t=new i.Event("beforeBlurInput"),e.trigger(t,[{reason:"escPressed"}]),t.isDefaultPrevented()||e.blur()))}))})}();;
;
/* module-key = 'jira.webresources:key-commands', location = '/includes/ajs/whenitype/whenIType.js' */
!function(r){AJS.whenIType=function(e,n){return new r(e,n)},AJS.whenIType.fromJSON=r.fromJSON}(require("jira/ajs/keyboardshortcut/keyboard-shortcut"));;
;
/* module-key = 'jira.webresources:header', location = '/includes/jira/common/headerModule.js' */
define("jira/common/header",["jira/util/formatter","jira/message","jira/issue","jira/util/events","jquery","exports","wrm/context-path"],function(e,n,t,s,i,r,o){var a,c,u,d,p={},f={getPath:function(){return window.location.pathname}},m=function(n,t){var s=n.substr(0,n.indexOf("-"));return e.format('<a href="{0}" target="_blank">',o()+"/plugins/servlet/project-config/"+s+"/"+t)},l=function(e){e&&n.showSuccessMsg(e,{closeable:!0}),p={}},I=function(e,n){var t="";return p.versionCreated&&(t="<p>"+e+"</p>"),p.componentCreated&&(t+="<p>"+n+"</p>"),t},g=function(){var e=/jira\/software\/(c\/)?projects\/[a-zA-Z0-9]+\/boards\/\d+\/roadmap/g;return e.test(f.getPath())},v=function(){var e=/jira\/software\/projects\/[a-zA-Z0-9]+\/((boards\/\d+(\/)?$)|(boards\/\d+\/backlog)\/?)/g;return e.test(f.getPath())},b=function(){return!!(JIRA&&JIRA.Issues&&JIRA.Issues.Application)&&JIRA.Issues.Application};r.initialize=function(){s.bind("QuickCreateIssue.sessionComplete",a=function(n,s){if(!g()&&!v()){var i=[].concat(s).pop(),r=t.issueCreatedMessage(i);r+=I(e.format("You also added a new version to this project. You can set a release date for this version in {0}project admin{1}.",m(i.issueKey,"versions"),"</a>"),e.format("You also added a new component to this project. You can assign a component lead for this component in {0}project admin{1}.",m(i.issueKey,"administer-components"),"</a>")),l(r)}}),b()&&b().on("issueEditor:saveSuccess",c=function(n){var s=n&&n.issueKey?n.issueKey:t.getIssueKey(),i=I(e.format("A new version has been added to your project. You can set a release date for this version in {0}project admin{1}.",m(s,"versions"),"</a>"),e.format("A new component has been added to your project. You can assign a component lead for this component in {0}project admin{1}.",m(s,"administer-components"),"</a>"));l(i)}),s.bind("Issue.Version.new.selected",u=function(){p.versionCreated=!0}),s.bind("Issue.Component.new.selected",d=function(){p.componentCreated=!0})},r.unbind=function(){s.unbind("QuickCreateIssue.sessionComplete",a),s.unbind("Issue.Version.new.selected",u),s.unbind("Issue.Component.new.selected",d),b()&&b().unbind("issueEditor:saveSuccess",c)},r.location=f});;
;
/* module-key = 'jira.webresources:header', location = '/includes/jira/common/initHeader.js' */
!function(){var i=require("jira/common/header");jQuery(function(){i.initialize()})}();;
;
/* module-key = 'com.atlassian.administration.atlassian-admin-quicksearch-jira:admin-quicksearch-webresources', location = 'atlassian-admin-quicksearch-jira-module/com/atlassian/administration/quicksearch/jira/js/adminQuickNav.js' */
/**
 * Shifter group for admin search
 */
require([
    'jquery',
    'underscore',
    'jira/ajs/ajax/smart-ajax',
    'jira/shifter',
    'wrm/context-path'
], function (jQuery,
             _,
             SmartAjax,
             Shifter,
             contextPath) {
    Shifter.register(function () {
        var suggestionsDeferred = jQuery.Deferred();

        function formatItem(item) {
            return {
                label: item.label,
                value: item.linkUrl,
                keywords: item.aliases
            };
        }

        function getItemsInSection(section) {
            return _.map(section.items, formatItem).concat(_.map(section.sections, getItemsInSection));
        }

        function formatResponse(data) {
            return _.flatten(getItemsInSection(data));
        }

        SmartAjax.makeRequest({
            dataType: 'json',
            url: contextPath() + '/rest/adminquicksearch/latest/links/default'
        })
            .pipe(formatResponse)
            .done(function (suggestions) {
                suggestionsDeferred.resolve(suggestions);
            })
            .fail(function () {
                suggestionsDeferred.reject();
            });

        return {
            id: 'admin',
            name: "Administration",
            weight: 500,
            getSuggestions: function () {
                return suggestionsDeferred;
            },
            onSelection: function (value) {
                var ContainerApi;
                var nativeNavigate = function() {
                    window.location = value;
                };

                try {
                    ContainerApi = require('jira/container-api');
                } catch (e) {
                    nativeNavigate();
                }

                ContainerApi && ContainerApi.navigate(value, nativeNavigate);

                return jQuery.Deferred();
            }
        };
    });
});
;
;
/* module-key = 'jira.webresources:global-static', location = '/includes/jira/wikipreview/wiki-renderer.js' */
AJS.$(function(){AJS.$(".code-bidi-warning").tooltip()});;
;
/* module-key = 'com.atlassian.auiplugin:ajs-raf', location = 'auiplugin/node_modules/@atlassian/aui/src/js-vendor/raf/raf.js' */
("undefined"===typeof window?global:window).__0e57a5ff611a3173e3f9aa2306aea259=function(){for(var a=window,f=0,d=["webkit","moz"],b=a.requestAnimationFrame,c=a.cancelAnimationFrame,e=d.length;0<=--e&&!b;)b=a[d[e]+"RequestAnimationFrame"],c=a[d[e]+"CancelAnimationFrame"];if(!b||!c)b=function(a){var b=Date.now(),c=Math.max(f+16,b);return setTimeout(function(){a(f=c)},c-b)},c=clearTimeout;a.requestAnimationFrame=b;a.cancelAnimationFrame=c;return{}}.call(this);;
;
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-internal-is-input', location = 'auiplugin/node_modules/@atlassian/aui/src/js/aui/internal/is-input.js' */
("undefined"===typeof window?global:window).__f268bb685e7e11f511cb91a156a783b0=function(){var a={};"use strict";Object.defineProperty(a,"__esModule",{value:!0});a.default=function(a){return"value"in a||a.isContentEditable};return a=a["default"]}.call(this);;
;
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-vendor-raf-raf', location = 'auiplugin/node_modules/@atlassian/aui/src/js-vendor/raf/raf.js' */
("undefined"===typeof window?global:window).__0e57a5ff611a3173e3f9aa2306aea259=function(){for(var a=window,f=0,d=["webkit","moz"],b=a.requestAnimationFrame,c=a.cancelAnimationFrame,e=d.length;0<=--e&&!b;)b=a[d[e]+"RequestAnimationFrame"],c=a[d[e]+"CancelAnimationFrame"];if(!b||!c)b=function(a){var b=Date.now(),c=Math.max(f+16,b);return setTimeout(function(){a(f=c)},c-b)},c=clearTimeout;a.requestAnimationFrame=b;a.cancelAnimationFrame=c;return{}}.call(this);;
;
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-internal-has-touch', location = 'auiplugin/node_modules/@atlassian/aui/src/js/aui/internal/has-touch.js' */
("undefined"===typeof window?global:window).__29f0b74d9ef495751062ec4e83e0b098=function(){var a={};"use strict";Object.defineProperty(a,"__esModule",{value:!0});var b=window.DocumentTouch;a.default="ontouchstart"in window||b&&document instanceof b;return a=a["default"]}.call(this);;
;
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-internal-mediaQuery', location = 'auiplugin/node_modules/@atlassian/aui/src/js/aui/internal/mediaQuery.js' */
("undefined"===typeof window?global:window).__e67a99ea27950f14c1291fb7cebabf6d=function(){var a={};Object.defineProperty(a,"__esModule",{value:!0});a.default=function(a){if(window.matchMedia)return window.matchMedia(a).matches;var b=document.createElement("style");b.type="text/css";b.id="testMedia";b.innerText="@media "+a+" { #testMedia { width: 1px; } }";document.head.appendChild(b);a="1px"===window.getComputedStyle(b,null).width;b.parentNode.removeChild(b);return a};return a=a["default"]}.call(this);;
;
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-sidebar', location = 'auiplugin/node_modules/@atlassian/aui/src/js/aui/sidebar.js' */
("undefined"===typeof window?global:window).__c0275cfdb12ae34a5641a8e219403604=function(){function j(a){return a&&a.__esModule?a:{"default":a}}function c(a){this.$el=(0,e.default)(a);if(this.$el.length){this.$body=(0,e.default)("body");this.$wrapper=this.$el.children(".aui-sidebar-wrapper");this.$body.addClass("aui-page-sidebar");this._previousOffsetTop=this._previousViewportWidth=this._previousViewportHeight=this._previousScrollTop=null;this.submenus=new g;var b=this;if((0,e.default)(".aui-sidebar").length){b.$el.on("hover click focus",
b.collapsedTriggersSelector,function(a){a=(0,e.default)(a.target);r(b,a)});if(y.default&&(0,z.default)("only screen and (max-device-width:1024px)"))(0,e.default)("body").addClass("aui-page-sidebar-touch");var d=null,c=function(){null===d&&(d=requestAnimationFrame(function(){b.reflow();d=null}))};(0,e.default)(window).on("scroll resize",c);b.reflow();if(b.isAnimated())b.$el.on("transitionend webkitTransitionEnd",function(){b.$el.trigger(e.default.Event(l+(b.isCollapsed()?"collapse-end":"expand-end")))});
b.$el.on("click",".aui-sidebar-toggle",function(a){a.preventDefault();b.toggle()});(0,e.default)(".aui-page-panel").click(function(){!b.isCollapsed()&&b.isViewportNarrow()&&b.collapse()});var s=function(a){a.which===AJS.keyCode.LEFT_SQUARE_BRACKET&&(!a.shiftKey&&!a.ctrlKey&&!a.metaKey&&!(0,A.default)(a.target))&&b.toggle()};(0,e.default)(document).on("keypress",s);b._remove=function(){this._removeAllTooltips();(0,e.default)(this.inlineDialogSelector).remove();this.$el.off();this.$el.remove();(0,e.default)(document).off("keypress",
s);(0,e.default)(window).off("scroll resize",c)};b.$el.on("touchend",function(a){b.isCollapsed()&&(b.expand(),a.preventDefault())});b.$el.on("mouseenter focus",b.collapsedTriggersSelector,function(){if(b.isCollapsed()){var a=(0,e.default)(this);0!==m(a).length||t(a)}});b.$el.on("click blur mouseleave",b.collapsedTriggersSelector,function(){b.isCollapsed()&&u((0,e.default)(this))});b.$el.on("mouseenter focus",b.toggleSelector,function(){var a=(0,e.default)(this);b.isCollapsed()?a.data("tooltip","Expand sidebar ( [ )"):
a.data("tooltip","Collapse sidebar ( [ )");t(a)});b.$el.on("click blur mouseleave",b.toggleSelector,function(){u((0,e.default)(this))});b.$el.on("keydown",b.collapsedTriggersSelector,function(a){if(b.isCollapsed()){var d=a.target,c=v(d);if(c){var f=(0,e.default)(c);a.keyCode===AJS.keyCode.TAB&&(!a.shiftKey&&!a.altKey)&&c.open&&(a.preventDefault(),f.attr("persistent",""),f.find(":aui-tabbable").first().focus(),setTimeout(function(){f.removeAttr("persistent")},100),f.on("keydown",
function(a){if(a.keyCode===AJS.keyCode.TAB&&a.shiftKey&&a.target===f.find(":aui-tabbable")[0]||a.keyCode===AJS.keyCode.TAB&&(!a.shiftKey&&!a.altKey)&&a.target===f.find(":aui-tabbable").last()[0])d.focus(),(0,e.default)(this).off("keydown"),p()}))}}})}var f=this;(0,e.default)(f.collapsedTriggersSelector).each(function(){var a=(0,e.default)(this);r(f,a)})}}function w(a){return e.default.map(a.split(" "),function(a){return l+a}).join(" ")}function g(){this.inlineDialog=null}function m(a){return a.is("a")?
a.next(".aui-nav"):a.children(".aui-nav, hr")}function v(a){a=a.getAttribute("aria-controls");return document.getElementById(a)}function p(){var a=document.querySelectorAll(c.prototype.inlineDialogSelector);Array.prototype.forEach.call(a,function(a){a.open=!1})}function r(a,b){if(!b.data("_aui-sidebar-submenu-constructed")&&(b.data("_aui-sidebar-submenu-constructed",!0),0!==m(b).length)){var d=document.createElement("aui-inline-dialog"),g=(0,B.default)("sidebar-submenu");b.attr("aria-controls",g);
b.attr("data-aui-trigger","");x.default.init(b);d.setAttribute("id",g);d.setAttribute("alignment","right top");d.setAttribute("aria-hidden","true");a.isCollapsed()&&d.setAttribute("responds-to","hover");(0,e.default)(d).addClass(c.prototype.inlineDialogClass);document.body.appendChild(d);x.default.init(d);d.addEventListener("aui-layer-show",function(c){if(a.isCollapsed()){b.addClass("active");d.innerHTML=C;var f=b.is("a")?b.text():b.children(".aui-nav-heading").text(),c=(0,e.default)(d).find(".aui-navgroup-inner");
c.children(".aui-nav-heading").attr("title",f).children("strong").text(f);f=m(b);f=AJS.clone(f);f.hasClass("aui-expander-content")&&(f.find(".aui-expander-cutoff").remove(),f.removeClass("aui-expander-content"));f.appendTo(c)}else c.preventDefault()});d.addEventListener("aui-layer-hide",function(){b.removeClass("active")});return d}}function t(a){a.tipsy(D).tipsy("show");(a=a.data("tipsy")&&a.data("tipsy").$tip)&&a.css({opacity:""}).addClass("tooltip-shown")}function u(a){var b=a.data("tipsy")&&a.data("tipsy").$tip;
if(b){var d=b.css("transition-duration");d&&(d=0<=d.indexOf("ms")?parseInt(d.substring(0,d.length-2),10):1E3*parseInt(d.substring(0,d.length-1),10),setTimeout(function(){a.tipsy("hide")},d));b.removeClass("tooltip-shown")}}var o={};"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=j(__307d3e18fd611f85395c67cddeb1fe24);__f673a5150978887490995d88aeec0c8d;__0e57a5ff611a3173e3f9aa2306aea259;__d74c881c8f23921c15438d0f30c99f80;var k;var h=__c8cfa00f1eba9ac7af89ee3d0d33961d;if(h&&h.__esModule)k=
h;else{var n={};if(null!=h)for(k in h)Object.prototype.hasOwnProperty.call(h,k)&&(n[k]=h[k]);n.default=h;k=n}var h=j(__4d02fe17b8e885a34493e34af3d145dd),y=j(__29f0b74d9ef495751062ec4e83e0b098),A=j(__f268bb685e7e11f511cb91a156a783b0),z=j(__e67a99ea27950f14c1291fb7cebabf6d),x=j(__c1ce1f1e3e613f564fc234ff043570f1),B=j(__9fa5e8acd81f0f9028180b8fcdcd9cb4),n=j(__e3152236c406a356c24f20f7bfcccf21),E="undefined"!==typeof document.documentElement.style.transition||"undefined"!==typeof document.documentElement.style.webkitTransition,
l="_aui-internal-sidebar-";c.prototype.on=function(){var a=arguments[0],b=Array.prototype.slice.call(arguments,1),a=w(a);this.$el.on.apply(this.$el,[a].concat(b));return this};c.prototype.off=function(){var a=arguments[0],b=Array.prototype.slice.call(arguments,1),a=w(a);this.$el.off.apply(this.$el,[a].concat(b));return this};c.prototype.setHeight=function(a,b,d){a=Math.max(0,d-a);this.$wrapper.height(b-a);return this};c.prototype.setPosition=function(a){a=a||window.pageYOffset;this.$wrapper.toggleClass("aui-is-docked",
a>this.$el.offset().top);return this};c.prototype.setCollapsedState=function(a){var b={collapsed:{},expanded:{}};b.collapsed.narrow={narrow:e.default.noop,wide:function(b){b._expand(a,!0)}};b.collapsed.wide={narrow:e.default.noop,wide:e.default.noop};b.expanded.narrow={narrow:e.default.noop,wide:function(a){a.$body.removeClass("aui-sidebar-collapsed");a.$el.removeClass("aui-sidebar-fly-out")}};b.expanded.wide={narrow:function(a){a._collapse(!0)},wide:e.default.noop};var d=this.isCollapsed()?"collapsed":
"expanded",c=this.isViewportNarrow(this._previousViewportWidth)?"narrow":"wide",g=this.isViewportNarrow(a)?"narrow":"wide";b[d][c][g](this);return this};c.prototype._collapse=function(a){if(this.isCollapsed())return this;var b=e.default.Event(l+"collapse-start",{isResponsive:a});this.$el.trigger(b);if(b.isDefaultPrevented())return this;this.$body.addClass("aui-sidebar-collapsed");this.$el.attr("aria-expanded","false");this.$el.removeClass("aui-sidebar-fly-out");this.$el.find(this.submenuTriggersSelector).attr("tabindex",
0);(0,e.default)(this.inlineDialogSelector).attr("responds-to","hover");this.isAnimated()||this.$el.trigger(e.default.Event(l+"collapse-end",{isResponsive:a}));return this};c.prototype.collapse=function(){return this._collapse(!1)};c.prototype._expand=function(a,b){var d=e.default.Event(l+"expand-start",{isResponsive:b});this.$el.trigger(d);if(d.isDefaultPrevented())return this;d=this.isViewportNarrow(a);this.$el.attr("aria-expanded","true");this.$body.toggleClass("aui-sidebar-collapsed",d);this.$el.toggleClass("aui-sidebar-fly-out",
d);this.$el.find(this.submenuTriggersSelector).removeAttr("tabindex");(0,e.default)(this.inlineDialogSelector).removeAttr("responds-to");this.isAnimated()||this.$el.trigger(e.default.Event(l+"expand-end",{isResponsive:b}));return this};c.prototype.expand=function(){this.isCollapsed()&&this._expand(this._previousViewportWidth,!1);return this};c.prototype.isAnimated=function(){return E&&this.$el.hasClass("aui-is-animated")};c.prototype.isCollapsed=function(){return"false"===this.$el.attr("aria-expanded")};
c.prototype.isViewportNarrow=function(a){a=void 0===a?this._previousViewportWidth:a;return 1240>a};c.prototype._removeAllTooltips=function(){(0,e.default)(this.tooltipSelector).remove()};c.prototype.responsiveReflow=function(a,b){if(a){if(!this.isCollapsed()&&this.isViewportNarrow(b)){var d=this.isAnimated();d&&this.$el.removeClass("aui-is-animated");this.collapse();d&&(this.$el[0].offsetHeight,this.$el.addClass("aui-is-animated"))}}else b!==this._previousViewportWidth&&this.setCollapsedState(b)};
c.prototype.reflow=function(a,b,d,c){var a=void 0===a?window.pageYOffset:a,b=void 0===b?document.documentElement.clientHeight:b,c=void 0===c?document.documentElement.scrollHeight:c,d=void 0===d?window.innerWidth:d,e=this.$el.offset().top,f=null===this._previousViewportWidth;if(!(a===this._previousScrollTop&&b===this._previousViewportHeight&&e===this._previousOffsetTop)){this.isCollapsed()&&(!f&&a!==this._previousScrollTop)&&(p(),this._removeAllTooltips());var g=this.$body.hasClass("aui-page-sidebar-touch"),
c=a!==this._previousScrollTop&&(0>a||a+b>c);if(!g&&(f||!c))this.setHeight(a,b,e),this.setPosition(a)}"false"!==this.$el.attr("data-aui-responsive")?this.responsiveReflow(f,d):(f=!this.isCollapsed()&&this.isViewportNarrow(d),this.$el.toggleClass("aui-sidebar-fly-out",f));this._previousScrollTop=a;this._previousViewportHeight=b;this._previousViewportWidth=d;this._previousOffsetTop=e;return this};c.prototype.toggle=function(){this.isCollapsed()?(this.expand(),this._removeAllTooltips()):this.collapse();
return this};c.prototype.submenuTriggersSelector=".aui-sidebar-group:not(.aui-sidebar-group-tier-one)";c.prototype.collapsedTriggersSelector=[c.prototype.submenuTriggersSelector,".aui-sidebar-group.aui-sidebar-group-tier-one > .aui-nav > li > a",".aui-sidebar-footer > .aui-sidebar-settings-button"].join(", ");c.prototype.toggleSelector=".aui-sidebar-footer > .aui-sidebar-toggle";c.prototype.tooltipSelector=".aui-sidebar-section-tooltip";c.prototype.inlineDialogClass="aui-sidebar-submenu-dialog";c.prototype.inlineDialogSelector=
"."+c.prototype.inlineDialogClass;g.prototype.submenu=function(a){i();return m(a)};g.prototype.hasSubmenu=function(a){i();return 0!==m(a).length};g.prototype.submenuHeadingHeight=function(){i();return 34};g.prototype.isShowing=function(){i();return c.prototype.isSubmenuVisible()};g.prototype.show=function(a,b){i();v(b).open=!0};g.prototype.hide=function(){i();p()};g.prototype.inlineDialogShowHandler=function(){i()};g.prototype.inlineDialogHideHandler=function(){i()};g.prototype.moveSubmenuToInlineDialog=
function(){i()};g.prototype.restoreSubmenu=function(){i()};c.prototype.getVisibleSubmenus=function(){return Array.prototype.filter.call(document.querySelectorAll(c.prototype.inlineDialogSelector),function(a){return a.open})};c.prototype.isSubmenuVisible=function(){return 0<this.getVisibleSubmenus().length};var C='<div class="aui-inline-dialog-contents"><div class="aui-sidebar-submenu" ><div class="aui-navgroup aui-navgroup-vertical"><div class="aui-navgroup-inner"><div class="aui-nav-heading"><strong></strong></div></div></div></div></div>',
D={trigger:"manual",gravity:"w",className:"aui-sidebar-section-tooltip",title:function(){var a=(0,e.default)(this);return a.is("a")?a.attr("title")||a.find(".aui-nav-item-label").text()||a.data("tooltip"):a.children(".aui-nav").attr("title")||a.children(".aui-nav-heading").text()}},q=(0,n.default)("sidebar",c);(0,e.default)(function(){q(".aui-sidebar")});var i=k.getMessageLogger("Sidebar.submenus",{removeInVersion:"6.0",sinceVersion:"5.8"});(0,h.default)("sidebar",q);o.default=q;return o=o["default"]}.call(this);;
;
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-dialog2', location = 'auiplugin/node_modules/@atlassian/aui/src/js/aui/dialog2.js' */
("undefined"===typeof window?global:window).__bdbf9d213bf319eb4577ef21ac6c491c=function(){function f(a){return a&&a.__esModule?a:{"default":a}}function e(a){var c=this.$el=a?(0,g.default)(a):(0,g.default)(aui.dialog.dialog2({}));g.default.each(i,function(a,b){var d="data-"+a;c[0].hasAttribute(d)||c.attr(d,b)})}var h={};"use strict";Object.defineProperty(h,"__esModule",{value:!0});var g=f(__307d3e18fd611f85395c67cddeb1fe24),j=f(__574ac67f906effeb9d8ec2753b23cf28),k=f(__4d02fe17b8e885a34493e34af3d145dd),
b=f(__fe0cd0a7ef176e2ef4e0e105d1ce31f5),l=f(__e3152236c406a356c24f20f7bfcccf21),i={"aui-focus":"false","aui-blanketed":"true"};e.prototype.on=function(a,c){(0,b.default)(this.$el).on(a,c);return this};e.prototype.off=function(a,c){(0,b.default)(this.$el).off(a,c);return this};e.prototype.show=function(){(0,b.default)(this.$el).show();return this};e.prototype.hide=function(){(0,b.default)(this.$el).hide();return this};e.prototype.remove=function(){(0,b.default)(this.$el).remove();return this};e.prototype.isVisible=
function(){return(0,b.default)(this.$el).isVisible()};var d=(0,l.default)("dialog2",e);d.on=function(a,c){b.default.on(a,".aui-dialog2",c);return this};d.off=function(a,c){b.default.off(a,".aui-dialog2",c);return this};(0,g.default)(document).on("click",".aui-dialog2-header-close",function(a){a.preventDefault();d((0,g.default)(this).closest(".aui-dialog2")).hide()});d.on("show",function(a,c){var b;[".aui-dialog2-content",".aui-dialog2-footer",".aui-dialog2-header"].some(function(a){b=c.find(a+" :aui-tabbable");
return b.length});b&&b.first().focus()});d.on("hide",function(a,c){var d=(0,b.default)(c);c.data("aui-remove-on-hide")&&d.remove()});(0,j.default)("aui/dialog2",d);(0,k.default)("dialog2",d);h.default=d;return h=h["default"]}.call(this);;
;
/* module-key = 'com.atlassian.auiplugin:dialog2', location = 'auiplugin/src/soy/dialog2.soy' */
// This file was automatically generated from dialog2.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace aui.dialog.
 */

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.dialog == 'undefined') { aui.dialog = {}; }


aui.dialog.dialog2 = function(opt_data, opt_ignored) {
  return '' + aui.dialog.dialog2Chrome({id: opt_data.id, titleId: opt_data.id ? opt_data.id + '-dialog-title' : null, modal: opt_data.modal, tagName: opt_data.tagName, removeOnHide: opt_data.removeOnHide, visible: opt_data.visible, size: opt_data.size, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes, content: '' + aui.dialog.dialog2Content({id: null, titleText: opt_data.titleText, titleContent: opt_data.titleContent, headerActionContent: opt_data.headerActionContent, headerSecondaryContent: opt_data.headerSecondaryContent, modal: opt_data.modal, content: opt_data.content, footerHintText: opt_data.footerHintText, footerHintContent: opt_data.footerHintContent, footerActionContent: opt_data.footerActionContent})});
};
if (goog.DEBUG) {
  aui.dialog.dialog2.soyTemplateName = 'aui.dialog.dialog2';
}


aui.dialog.dialog2Chrome = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'section') + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ((opt_data.titleId) ? ' aria-labelledby="' + soy.$$escapeHtml(opt_data.titleId) + '"' : '') + ' role="dialog" class=" aui-layer aui-dialog2 aui-dialog2-' + soy.$$escapeHtml(opt_data.size ? opt_data.size : 'medium') + aui.renderExtraClasses(opt_data) + '"' + ((opt_data.modal) ? 'data-aui-modal="true"' : '') + ((opt_data.removeOnHide) ? 'data-aui-remove-on-hide="true"' : '') + ((opt_data.visible != true) ? 'aria-hidden="true"' : '') + aui.renderExtraAttributes(opt_data) + '>' + ((opt_data.content) ? soy.$$filterNoAutoescape(opt_data.content) : '') + '</' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'section') + '>';
};
if (goog.DEBUG) {
  aui.dialog.dialog2Chrome.soyTemplateName = 'aui.dialog.dialog2Chrome';
}


aui.dialog.dialog2Content = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '' + aui.dialog.dialog2Header({titleId: opt_data.id ? opt_data.id + '-dialog-title' : null, titleText: opt_data.titleText, titleContent: opt_data.titleContent, actionContent: opt_data.headerActionContent, secondaryContent: opt_data.headerSecondaryContent, modal: opt_data.modal}) + aui.dialog.dialog2Panel(opt_data) + aui.dialog.dialog2Footer({hintText: opt_data.footerHintText, hintContent: opt_data.footerHintContent, actionContent: opt_data.footerActionContent});
};
if (goog.DEBUG) {
  aui.dialog.dialog2Content.soyTemplateName = 'aui.dialog.dialog2Content';
}


aui.dialog.dialog2Header = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<header' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-dialog2-header' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '><h2 ' + ((opt_data.titleId) ? ' id="' + soy.$$escapeHtml(opt_data.titleId) + '"' : '') + ' class="aui-dialog2-header-main">' + ((opt_data.titleText) ? soy.$$escapeHtml(opt_data.titleText) : '') + ((opt_data.titleContent) ? soy.$$filterNoAutoescape(opt_data.titleContent) : '') + '</h2>' + ((opt_data.actionContent) ? '<div class="aui-dialog2-header-actions">' + soy.$$filterNoAutoescape(opt_data.actionContent) + '</div>' : '') + ((opt_data.secondaryContent) ? '<div class="aui-dialog2-header-secondary">' + soy.$$filterNoAutoescape(opt_data.secondaryContent) + '</div>' : '') + ((opt_data.modal != true) ? '<a class="aui-dialog2-header-close"><span class="aui-icon aui-icon-small aui-iconfont-close-dialog">' + soy.$$escapeHtml('Close') + '</span></a>' : '') + '</header>';
};
if (goog.DEBUG) {
  aui.dialog.dialog2Header.soyTemplateName = 'aui.dialog.dialog2Header';
}


aui.dialog.dialog2Footer = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<footer' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-dialog2-footer' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '>' + ((opt_data.actionContent) ? '<div class="aui-dialog2-footer-actions">' + soy.$$filterNoAutoescape(opt_data.actionContent) + '</div>' : '') + ((opt_data.hintText || opt_data.hintContent) ? '<div class="aui-dialog2-footer-hint">' + ((opt_data.hintText) ? soy.$$escapeHtml(opt_data.hintText) : '') + ((opt_data.hintContent) ? soy.$$filterNoAutoescape(opt_data.hintContent) : '') + '</div>' : '') + '</footer>';
};
if (goog.DEBUG) {
  aui.dialog.dialog2Footer.soyTemplateName = 'aui.dialog.dialog2Footer';
}


aui.dialog.dialog2Panel = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<div' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-dialog2-content' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '>' + ((opt_data.content) ? soy.$$filterNoAutoescape(opt_data.content) : '') + '</div>';
};
if (goog.DEBUG) {
  aui.dialog.dialog2Panel.soyTemplateName = 'aui.dialog.dialog2Panel';
}
;
;
/* module-key = 'com.atlassian.plugin.jslibs:marionette-2.1.0-factory', location = 'atlassian-jslibs/factories/marionette/2.1.0/marionette-2.1.0-factory.js' */
(function(l){define("atlassian/libs/factories/marionette-2.1.0",function(){return function(f,c){var i={_:f,Backbone:c};l.call(i);return i.Marionette.noConflict()}})})(function(){var l=this,f=this.Backbone,c=this._,i=function(a,b){var e=Error(a);e.name=b||"Error";throw e;},r=f.ChildViewContainer,m=function(a){this._views={};this._indexByModel={};this._indexByCustom={};this._updateLength();c.each(a,this.add,this)};c.extend(m.prototype,{add:function(a,b){var e=a.cid;this._views[e]=a;a.model&&(this._indexByModel[a.model.cid]=
e);b&&(this._indexByCustom[b]=e);this._updateLength();return this},findByModel:function(a){return this.findByModelCid(a.cid)},findByModelCid:function(a){return this.findByCid(this._indexByModel[a])},findByCustom:function(a){return this.findByCid(this._indexByCustom[a])},findByIndex:function(a){return c.values(this._views)[a]},findByCid:function(a){return this._views[a]},remove:function(a){var b=a.cid;a.model&&delete this._indexByModel[a.model.cid];c.any(this._indexByCustom,function(a,c){if(a===b)return delete this._indexByCustom[c],
!0},this);delete this._views[b];this._updateLength();return this},call:function(a){this.apply(a,c.tail(arguments))},apply:function(a,b){c.each(this._views,function(e){c.isFunction(e[a])&&e[a].apply(e,b||[])})},_updateLength:function(){this.length=c.size(this._views)}});c.each("forEach each map find detect filter select reject every all some any include contains invoke toArray first initial rest last without isEmpty pluck".split(" "),function(a){m.prototype[a]=function(){var b=[c.values(this._views)].concat(c.toArray(arguments));
return c[a].apply(c,b)}});f.ChildViewContainer=m;f.ChildViewContainer.VERSION="0.1.4";f.ChildViewContainer.noConflict=function(){f.ChildViewContainer=r;return this};var s=f.Wreqr,h=f.Wreqr={};f.Wreqr.VERSION="1.3.1";f.Wreqr.noConflict=function(){f.Wreqr=s;return this};var g=function(a){this.options=a;this._wreqrHandlers={};c.isFunction(this.initialize)&&this.initialize(a)};g.extend=f.Model.extend;c.extend(g.prototype,f.Events,{setHandlers:function(a){c.each(a,function(a,e){var d=null;c.isObject(a)&&
!c.isFunction(a)&&(d=a.context,a=a.callback);this.setHandler(e,a,d)},this)},setHandler:function(a,b,e){this._wreqrHandlers[a]={callback:b,context:e};this.trigger("handler:add",a,b,e)},hasHandler:function(a){return!!this._wreqrHandlers[a]},getHandler:function(a){var b=this._wreqrHandlers[a];if(b)return function(){var a=Array.prototype.slice.apply(arguments);return b.callback.apply(b.context,a)}},removeHandler:function(a){delete this._wreqrHandlers[a]},removeAllHandlers:function(){this._wreqrHandlers=
{}}});h.Handlers=g;g=function(a){this.options=a;this._commands={};c.isFunction(this.initialize)&&this.initialize(a)};c.extend(g.prototype,f.Events,{getCommands:function(a){var b=this._commands[a];b||(b={command:a,instances:[]},this._commands[a]=b);return b},addCommand:function(a,b){this.getCommands(a).instances.push(b)},clearCommands:function(a){this.getCommands(a).instances=[]}});h.CommandStorage=g;g=h.Handlers.extend({storageType:h.CommandStorage,constructor:function(a){this.options=a||{};this._initializeStorage(this.options);
this.on("handler:add",this._executeCommands,this);var b=Array.prototype.slice.call(arguments);h.Handlers.prototype.constructor.apply(this,b)},execute:function(a,b){a=arguments[0];b=Array.prototype.slice.call(arguments,1);this.hasHandler(a)?this.getHandler(a).apply(this,b):this.storage.addCommand(a,b)},_executeCommands:function(a,b,e){var d=this.storage.getCommands(a);c.each(d.instances,function(a){b.apply(e,a)});this.storage.clearCommands(a)},_initializeStorage:function(a){a=a.storageType||this.storageType;
this.storage=c.isFunction(a)?new a:a}});h.Commands=g;h.RequestResponse=h.Handlers.extend({request:function(){var a=arguments[0],b=Array.prototype.slice.call(arguments,1);if(this.hasHandler(a))return this.getHandler(a).apply(this,b)}});g=function(){};g.extend=f.Model.extend;c.extend(g.prototype,f.Events);h.EventAggregator=g;g=function(a){this.vent=new h.EventAggregator;this.reqres=new h.RequestResponse;this.commands=new h.Commands;this.channelName=a};c.extend(g.prototype,{reset:function(){this.vent.off();
this.vent.stopListening();this.reqres.removeAllHandlers();this.commands.removeAllHandlers();return this},connectEvents:function(a,b){this._connect("vent",a,b);return this},connectCommands:function(a,b){this._connect("commands",a,b);return this},connectRequests:function(a,b){this._connect("reqres",a,b);return this},_connect:function(a,b,e){if(b){var e=e||this,d="vent"===a?"on":"setHandler";c.each(b,function(b,f){this[a][d](f,c.bind(b,e))},this)}}});h.Channel=g;g=function(){this._channels={};this.vent=
{};this.commands={};this.reqres={};this._proxyMethods()};c.extend(g.prototype,{channel:function(a){if(!a)throw Error("Channel must receive a name");return this._getChannel(a)},_getChannel:function(a){var b=this._channels[a];b||(b=new h.Channel(a),this._channels[a]=b);return b},_proxyMethods:function(){c.each(["vent","commands","reqres"],function(a){c.each(t[a],function(b){var e=this;this[a][b]=function(c){var d=e._getChannel(c)[a],f=Array.prototype.slice.call(arguments,1);return d[b].apply(d,f)}},
this)},this)}});var t={vent:"on off trigger once stopListening listenTo listenToOnce".split(" "),commands:["execute","setHandler","setHandlers","removeHandler","removeAllHandlers"],reqres:["request","setHandler","setHandlers","removeHandler","removeAllHandlers"]},g=new g;h.radio=g;var u=f.ChildViewContainer.noConflict(),v=f.Wreqr.noConflict(),w=l.Marionette,d=f.Marionette={};d.VERSION="2.1.0";d.noConflict=function(){l.Marionette=w;return this};f.Marionette=d;d.Deferred=f.$.Deferred;var j=Array.prototype.slice;
d.extend=f.Model.extend;d.getOption=function(a,b){if(a&&b)return a.options&&void 0!==a.options[b]?a.options[b]:a[b]};d.proxyGetOption=function(a){return d.getOption(this,a)};d.normalizeMethods=function(a){var b={};c.each(a,function(a,d){c.isFunction(a)||(a=this[a]);a&&(b[d]=a)},this);return b};d.normalizeUIKeys=function(a,b){if("undefined"!==typeof a)return c.each(c.keys(a),function(e){var c=/@ui\.[a-zA-Z_$0-9]*/g;e.match(c)&&(a[e.replace(c,function(a){return b[a.slice(4)]})]=a[e],delete a[e])}),
a};d.actAsCollection=function(a,b){c.each("forEach each map find detect filter select reject every all some any include contains invoke toArray first initial rest last without isEmpty pluck".split(" "),function(e){a[e]=function(){var a=[c.values(c.result(this,b))].concat(c.toArray(arguments));return c[e].apply(c,a)}})};var x=function(a,b,e){return e.toUpperCase()},y=/(^|:)(\w)/gi;d.triggerMethod=function(a){var b=this["on"+a.replace(y,x)],e;c.isFunction(b)&&(e=b.apply(this,c.tail(arguments)));c.isFunction(this.trigger)&&
this.trigger.apply(this,arguments);return e};var z=document.documentElement,o=function(a){a._isShown&&a._isRendered&&f.$.contains(z,a.el)&&c.isFunction(a.triggerMethod)&&a.triggerMethod("dom:refresh")};d.MonitorDOMRefresh=function(a){a.listenTo(a,"show",function(){a._isShown=!0;o(a)});a.listenTo(a,"render",function(){a._isRendered=!0;o(a)})};var A=function(a,b,e,d){d=d.split(/\s+/);c.each(d,function(c){var d=a[c];d||i('Method "'+c+'" was configured as an event handler, but does not exist.');a.listenTo(b,
e,d)})},B=function(a,b,e,c){a.listenTo(b,e,c)},C=function(a,b,e,d){d=d.split(/\s+/);c.each(d,function(c){a.stopListening(b,e,a[c])})},D=function(a,b,c,d){a.stopListening(b,c,d)},p=function(a,b,e,d,f){b&&e&&(c.isFunction(e)&&(e=e.call(a)),c.each(e,function(e,g){c.isFunction(e)?d(a,b,g,e):f(a,b,g,e)}))};d.bindEntityEvents=function(a,b,c){p(a,b,c,B,A)};d.unbindEntityEvents=function(a,b,c){p(a,b,c,D,C)};d.proxyBindEntityEvents=function(a,b){return d.bindEntityEvents(this,a,b)};d.proxyUnbindEntityEvents=
function(a,b){return d.unbindEntityEvents(this,a,b)};d.Callbacks=function(){this._deferred=d.Deferred();this._callbacks=[]};c.extend(d.Callbacks.prototype,{add:function(a,b){var e=c.result(this._deferred,"promise");this._callbacks.push({cb:a,ctx:b});e.then(function(c){b&&(c.context=b);a.call(c.context,c.options)})},run:function(a,b){this._deferred.resolve({options:a,context:b})},reset:function(){var a=this._callbacks;this._deferred=d.Deferred();this._callbacks=[];c.each(a,function(a){this.add(a.cb,
a.ctx)},this)}});d.Controller=function(a){this.options=a||{};c.isFunction(this.initialize)&&this.initialize(this.options)};d.Controller.extend=d.extend;c.extend(d.Controller.prototype,f.Events,{destroy:function(){var a=j.call(arguments);this.triggerMethod.apply(this,["before:destroy"].concat(a));this.triggerMethod.apply(this,["destroy"].concat(a));this.stopListening();this.off();return this},triggerMethod:d.triggerMethod,getOption:d.proxyGetOption});d.Object=function(a){this.options=c.extend({},c.result(this,
"options"),a);this.initialize(this.options)};d.Object.extend=d.extend;c.extend(d.Object.prototype,{initialize:function(){},destroy:function(){this.triggerMethod("before:destroy");this.triggerMethod("destroy");this.stopListening()},triggerMethod:d.triggerMethod,getOption:d.proxyGetOption,bindEntityEvents:d.proxyBindEntityEvents,unbindEntityEvents:d.proxyUnbindEntityEvents});c.extend(d.Object.prototype,f.Events);d.Region=function(a){this.options=a||{};this.el=this.getOption("el");(this.el=this.el instanceof
f.$?this.el[0]:this.el)||i('An "el" must be specified for a region.',"NoElError");this.$el=this.getEl(this.el);if(this.initialize){var b=j.apply(arguments);this.initialize.apply(this,b)}};c.extend(d.Region,{buildRegion:function(a,b){if(c.isString(a))return this._buildRegionFromSelector(a,b);if(a.selector||a.el||a.regionClass)return this._buildRegionFromObject(a,b);if(c.isFunction(a))return this._buildRegionFromRegionClass(a);i("Improper region configuration type. Please refer to http://marionettejs.com/docs/marionette.region.html#region-configuration-types")},
_buildRegionFromSelector:function(a,b){return new b({el:a})},_buildRegionFromObject:function(a,b){var e=a.regionClass||b,d=c.omit(a,"selector","regionClass");a.selector&&!d.el&&(d.el=a.selector);e=new e(d);a.parentEl&&(e.getEl=function(b){if(c.isObject(b))return f.$(b);var e=a.parentEl;c.isFunction(e)&&(e=e());return e.find(b)});return e},_buildRegionFromRegionClass:function(a){return new a}});c.extend(d.Region.prototype,f.Events,{show:function(a,b){this._ensureElement();var e=b||{},d=a!==this.currentView,
f=!!e.forceShow,g=!!this.currentView;!e.preventDestroy&&d&&this.empty();if(d||f)a.once("destroy",c.bind(this.empty,this)),a.render(),g&&this.triggerMethod("before:swap",a),this.triggerMethod("before:show",a),c.isFunction(a.triggerMethod)?a.triggerMethod("before:show"):this.triggerMethod.call(a,"before:show"),this.attachHtml(a),this.currentView=a,g&&this.triggerMethod("swap",a),this.triggerMethod("show",a),c.isFunction(a.triggerMethod)?a.triggerMethod("show"):this.triggerMethod.call(a,"show");return this},
_ensureElement:function(){c.isObject(this.el)||(this.$el=this.getEl(this.el),this.el=this.$el[0]);(!this.$el||0===this.$el.length)&&i('An "el" '+this.$el.selector+" must exist in DOM")},getEl:function(a){return f.$(a)},attachHtml:function(a){this.el.innerHTML="";this.el.appendChild(a.el)},empty:function(){var a=this.currentView;if(a)return this.triggerMethod("before:empty",a),this._destroyView(),this.triggerMethod("empty",a),delete this.currentView,this},_destroyView:function(){var a=this.currentView;
a.destroy&&!a.isDestroyed?a.destroy():a.remove&&a.remove()},attachView:function(a){this.currentView=a;return this},hasView:function(){return!!this.currentView},reset:function(){this.empty();this.$el&&(this.el=this.$el.selector);delete this.$el;return this},getOption:d.proxyGetOption,triggerMethod:d.triggerMethod});d.Region.extend=d.extend;g=d.Controller.extend({constructor:function(a){this._regions={};d.Controller.call(this,a)},addRegions:function(a,b){c.isFunction(a)&&(a=a.apply(this,arguments));
var e={};c.each(a,function(a,d){c.isString(a)&&(a={selector:a});a.selector&&(a=c.defaults({},a,b));var f=this.addRegion(d,a);e[d]=f},this);return e},addRegion:function(a,b){var e;e=c.isObject(b);var n=c.isString(b),f=!!b.selector;e=n||e&&f?d.Region.buildRegion(b,d.Region):c.isFunction(b)?d.Region.buildRegion(b,d.Region):b;this.triggerMethod("before:add:region",a,e);this._store(a,e);this.triggerMethod("add:region",a,e);return e},get:function(a){return this._regions[a]},getRegions:function(){return c.clone(this._regions)},
removeRegion:function(a){var b=this._regions[a];this._remove(a,b);return b},removeRegions:function(){var a=this.getRegions();c.each(this._regions,function(a,c){this._remove(c,a)},this);return a},emptyRegions:function(){var a=this.getRegions();c.each(a,function(a){a.empty()},this);return a},destroy:function(){this.removeRegions();return d.Controller.prototype.destroy.apply(this,arguments)},_store:function(a,b){this._regions[a]=b;this._setLength()},_remove:function(a,b){this.triggerMethod("before:remove:region",
a,b);b.empty();b.stopListening();delete this._regions[a];this._setLength();this.triggerMethod("remove:region",a,b)},_setLength:function(){this.length=c.size(this._regions)}});d.actAsCollection(g.prototype,"_regions");d.RegionManager=g;d.TemplateCache=function(a){this.templateId=a};c.extend(d.TemplateCache,{templateCaches:{},get:function(a){var b=this.templateCaches[a];b||(b=new d.TemplateCache(a),this.templateCaches[a]=b);return b.load()},clear:function(){var a,b=j.call(arguments),c=b.length;if(0<
c)for(a=0;a<c;a++)delete this.templateCaches[b[a]];else this.templateCaches={}}});c.extend(d.TemplateCache.prototype,{load:function(){if(this.compiledTemplate)return this.compiledTemplate;var a=this.loadTemplate(this.templateId);return this.compiledTemplate=this.compileTemplate(a)},loadTemplate:function(a){var b=f.$(a).html();(!b||0===b.length)&&i('Could not find template: "'+a+'"',"NoTemplateError");return b},compileTemplate:function(a){return c.template(a)}});d.Renderer={render:function(a,b){a||
i("Cannot render the template since its false, null or undefined.","TemplateNotFoundError");return("function"===typeof a?a:d.TemplateCache.get(a))(b)}};d.View=f.View.extend({constructor:function(a){c.bindAll(this,"render");this.options=c.extend({},c.result(this,"options"),c.isFunction(a)?a.call(this):a);this.events=this.normalizeUIKeys(c.result(this,"events"));c.isObject(this.behaviors)&&new d.Behaviors(this);f.View.apply(this,arguments);d.MonitorDOMRefresh(this);this.listenTo(this,"show",this.onShowCalled)},
getTemplate:function(){return this.getOption("template")},serializeModel:function(a){return a.toJSON.apply(a,j.call(arguments,1))},mixinTemplateHelpers:function(a){var a=a||{},b=this.getOption("templateHelpers");c.isFunction(b)&&(b=b.call(this));return c.extend(a,b)},normalizeUIKeys:function(a){var b=c.result(this,"ui"),e=c.result(this,"_uiBindings");return d.normalizeUIKeys(a,e||b)},configureTriggers:function(){if(this.triggers){var a={},b=this.normalizeUIKeys(c.result(this,"triggers"));c.each(b,
function(b,d){var f=c.isObject(b),g=f?b.event:b;a[d]=function(a){if(a){var c=a.preventDefault,d=a.stopPropagation,n=f?b.stopPropagation:d;(f?b.preventDefault:c)&&c&&c.apply(a);n&&d&&d.apply(a)}this.triggerMethod(g,{view:this,model:this.model,collection:this.collection})}},this);return a}},delegateEvents:function(a){this._delegateDOMEvents(a);this.bindEntityEvents(this.model,this.getOption("modelEvents"));this.bindEntityEvents(this.collection,this.getOption("collectionEvents"));return this},_delegateDOMEvents:function(a){a=
a||this.events;c.isFunction(a)&&(a=a.call(this));var a=this.normalizeUIKeys(a),b={},e=c.result(this,"behaviorEvents")||{},d=this.configureTriggers();c.extend(b,e,a,d);f.View.prototype.delegateEvents.call(this,b)},undelegateEvents:function(){var a=j.call(arguments);f.View.prototype.undelegateEvents.apply(this,a);this.unbindEntityEvents(this.model,this.getOption("modelEvents"));this.unbindEntityEvents(this.collection,this.getOption("collectionEvents"));return this},onShowCalled:function(){},_ensureViewIsIntact:function(){if(this.isDestroyed){var a=
Error("Cannot use a view thats already been destroyed.");a.name="ViewDestroyedError";throw a;}},destroy:function(){if(!this.isDestroyed){var a=j.call(arguments);this.triggerMethod.apply(this,["before:destroy"].concat(a));this.isDestroyed=!0;this.triggerMethod.apply(this,["destroy"].concat(a));this.unbindUIElements();this.remove();return this}},bindUIElements:function(){if(this.ui){this._uiBindings||(this._uiBindings=this.ui);var a=c.result(this,"_uiBindings");this.ui={};c.each(c.keys(a),function(b){this.ui[b]=
this.$(a[b])},this)}},unbindUIElements:function(){this.ui&&this._uiBindings&&(c.each(this.ui,function(a,b){delete this.ui[b]},this),this.ui=this._uiBindings,delete this._uiBindings)},triggerMethod:d.triggerMethod,normalizeMethods:d.normalizeMethods,getOption:d.proxyGetOption,bindEntityEvents:d.proxyBindEntityEvents,unbindEntityEvents:d.proxyUnbindEntityEvents});d.ItemView=d.View.extend({constructor:function(){d.View.apply(this,arguments)},serializeData:function(){var a={};this.model?a=c.partial(this.serializeModel,
this.model).apply(this,arguments):this.collection&&(a={items:c.partial(this.serializeCollection,this.collection).apply(this,arguments)});return a},serializeCollection:function(a){return a.toJSON.apply(a,j.call(arguments,1))},render:function(){this._ensureViewIsIntact();this.triggerMethod("before:render",this);this._renderTemplate();this.bindUIElements();this.triggerMethod("render",this);return this},_renderTemplate:function(){var a=this.getTemplate();if(!1!==a){a||i("Cannot render the template since it is null or undefined.",
"UndefinedTemplateError");var b=this.serializeData(),b=this.mixinTemplateHelpers(b),a=d.Renderer.render(a,b,this);this.attachElContent(a);return this}},attachElContent:function(a){this.$el.html(a);return this},destroy:function(){if(!this.isDestroyed)return d.View.prototype.destroy.apply(this,arguments)}});d.CollectionView=d.View.extend({childViewEventPrefix:"childview",constructor:function(a){var b=a||{};this.sort=c.isUndefined(b.sort)?!0:b.sort;this._initChildViewStorage();d.View.apply(this,arguments);
this._initialEvents();this.initRenderBuffer()},initRenderBuffer:function(){this.elBuffer=document.createDocumentFragment();this._bufferedChildren=[]},startBuffering:function(){this.initRenderBuffer();this.isBuffering=!0},endBuffering:function(){this.isBuffering=!1;this._triggerBeforeShowBufferedChildren();this.attachBuffer(this,this.elBuffer);this._triggerShowBufferedChildren();this.initRenderBuffer()},_triggerBeforeShowBufferedChildren:function(){this._isShown&&c.invoke(this._bufferedChildren,"triggerMethod",
"before:show")},_triggerShowBufferedChildren:function(){this._isShown&&(c.each(this._bufferedChildren,function(a){c.isFunction(a.triggerMethod)?a.triggerMethod("show"):d.triggerMethod.call(a,"show")}),this._bufferedChildren=[])},_initialEvents:function(){this.collection&&(this.listenTo(this.collection,"add",this._onCollectionAdd),this.listenTo(this.collection,"remove",this._onCollectionRemove),this.listenTo(this.collection,"reset",this.render),this.sort&&this.listenTo(this.collection,"sort",this._sortViews))},
_onCollectionAdd:function(a){this.destroyEmptyView();var b=this.getChildView(a),c=this.collection.indexOf(a);this.addChild(a,b,c)},_onCollectionRemove:function(a){a=this.children.findByModel(a);this.removeChildView(a);this.checkEmpty()},onShowCalled:function(){this.children.each(function(a){c.isFunction(a.triggerMethod)?a.triggerMethod("show"):d.triggerMethod.call(a,"show")})},render:function(){this._ensureViewIsIntact();this.triggerMethod("before:render",this);this._renderChildren();this.triggerMethod("render",
this);return this},resortView:function(){this.render()},_sortViews:function(){this.collection.find(function(a,b){var c=this.children.findByModel(a);return!c||c._index!==b},this)&&this.resortView()},_renderChildren:function(){this.destroyEmptyView();this.destroyChildren();this.isEmpty(this.collection)?this.showEmptyView():(this.triggerMethod("before:render:collection",this),this.startBuffering(),this.showCollection(),this.endBuffering(),this.triggerMethod("render:collection",this))},showCollection:function(){var a;
this.collection.each(function(b,c){a=this.getChildView(b);this.addChild(b,a,c)},this)},showEmptyView:function(){var a=this.getEmptyView();if(a&&!this._showingEmptyView){this.triggerMethod("before:render:empty");this._showingEmptyView=!0;var b=new f.Model;this.addEmptyView(b,a);this.triggerMethod("render:empty")}},destroyEmptyView:function(){this._showingEmptyView&&(this.destroyChildren(),delete this._showingEmptyView)},getEmptyView:function(){return this.getOption("emptyView")},addEmptyView:function(a,
b){var e=this.getOption("emptyViewOptions")||this.getOption("childViewOptions");c.isFunction(e)&&(e=e.call(this));e=this.buildChildView(a,b,e);this._isShown&&this.triggerMethod.call(e,"before:show");this.children.add(e);this.renderChildView(e,-1);this._isShown&&this.triggerMethod.call(e,"show")},getChildView:function(){var a=this.getOption("childView");a||i('A "childView" must be specified',"NoChildViewError");return a},addChild:function(a,b,e){var d=this.getOption("childViewOptions");c.isFunction(d)&&
(d=d.call(this,a,e));a=this.buildChildView(a,b,d);this._updateIndices(a,!0,e);this._addChildView(a,e);return a},_updateIndices:function(a,b,c){this.sort&&(b?(a._index=c,this.children.each(function(b){b._index>=a._index&&b._index++})):this.children.each(function(b){b._index>=a._index&&b._index--}))},_addChildView:function(a,b){this.proxyChildEvents(a);this.triggerMethod("before:add:child",a);this.children.add(a);this.renderChildView(a,b);this._isShown&&!this.isBuffering&&(c.isFunction(a.triggerMethod)?
a.triggerMethod("show"):d.triggerMethod.call(a,"show"));this.triggerMethod("add:child",a)},renderChildView:function(a,b){a.render();this.attachHtml(this,a,b);return a},buildChildView:function(a,b,e){a=c.extend({model:a},e);return new b(a)},removeChildView:function(a){a&&(this.triggerMethod("before:remove:child",a),a.destroy?a.destroy():a.remove&&a.remove(),this.stopListening(a),this.children.remove(a),this.triggerMethod("remove:child",a),this._updateIndices(a,!1));return a},isEmpty:function(){return!this.collection||
0===this.collection.length},checkEmpty:function(){this.isEmpty(this.collection)&&this.showEmptyView()},attachBuffer:function(a,b){a.$el.append(b)},attachHtml:function(a,b,c){a.isBuffering?(a.elBuffer.appendChild(b.el),a._bufferedChildren.push(b)):a._insertBefore(b,c)||a._insertAfter(b)},_insertBefore:function(a,b){var c;this.sort&&b<this.children.length-1&&(c=this.children.find(function(a){return a._index===b+1}));return c?(c.$el.before(a.el),!0):!1},_insertAfter:function(a){this.$el.append(a.el)},
_initChildViewStorage:function(){this.children=new u},destroy:function(){if(!this.isDestroyed)return this.triggerMethod("before:destroy:collection"),this.destroyChildren(),this.triggerMethod("destroy:collection"),d.View.prototype.destroy.apply(this,arguments)},destroyChildren:function(){var a=this.children.map(c.identity);this.children.each(this.removeChildView,this);this.checkEmpty();return a},proxyChildEvents:function(a){var b=this.getOption("childViewEventPrefix");this.listenTo(a,"all",function(){var d=
j.call(arguments),f=d[0],g=this.normalizeMethods(c.result(this,"childEvents"));d[0]=b+":"+f;d.splice(1,0,a);"undefined"!==typeof g&&c.isFunction(g[f])&&g[f].apply(this,d.slice(1));this.triggerMethod.apply(this,d)},this)}});d.CompositeView=d.CollectionView.extend({constructor:function(){d.CollectionView.apply(this,arguments)},_initialEvents:function(){this.once("render",function(){this.collection&&(this.listenTo(this.collection,"add",this._onCollectionAdd),this.listenTo(this.collection,"remove",this._onCollectionRemove),
this.listenTo(this.collection,"reset",this._renderChildren),this.sort&&this.listenTo(this.collection,"sort",this._sortViews))})},getChildView:function(){var a=this.getOption("childView")||this.constructor;a||i('A "childView" must be specified',"NoChildViewError");return a},serializeData:function(){var a={};this.model&&(a=c.partial(this.serializeModel,this.model).apply(this,arguments));return a},render:function(){this._ensureViewIsIntact();this.isRendered=!0;this.resetChildViewContainer();this.triggerMethod("before:render",
this);this._renderTemplate();this._renderChildren();this.triggerMethod("render",this);return this},_renderChildren:function(){this.isRendered&&d.CollectionView.prototype._renderChildren.call(this)},_renderTemplate:function(){var a={},a=this.serializeData(),a=this.mixinTemplateHelpers(a);this.triggerMethod("before:render:template");var b=this.getTemplate(),a=d.Renderer.render(b,a,this);this.attachElContent(a);this.bindUIElements();this.triggerMethod("render:template")},attachElContent:function(a){this.$el.html(a);
return this},attachBuffer:function(a,b){this.getChildViewContainer(a).append(b)},_insertAfter:function(a){this.getChildViewContainer(this).append(a.el)},getChildViewContainer:function(a){if("$childViewContainer"in a)return a.$childViewContainer;var b;(b=d.getOption(a,"childViewContainer"))?(b=c.isFunction(b)?b.call(a):b,b="@"===b.charAt(0)&&a.ui?a.ui[b.substr(4)]:a.$(b),0>=b.length&&i('The specified "childViewContainer" was not found: '+a.childViewContainer,"ChildViewContainerMissingError")):b=a.$el;
return a.$childViewContainer=b},resetChildViewContainer:function(){this.$childViewContainer&&delete this.$childViewContainer}});d.LayoutView=d.ItemView.extend({regionClass:d.Region,constructor:function(a){a=a||{};this._firstRender=!0;this._initializeRegions(a);d.ItemView.call(this,a)},render:function(){this._ensureViewIsIntact();this._firstRender?this._firstRender=!1:this._reInitializeRegions();return d.ItemView.prototype.render.apply(this,arguments)},destroy:function(){if(this.isDestroyed)return this;
this.regionManager.destroy();return d.ItemView.prototype.destroy.apply(this,arguments)},addRegion:function(a,b){this.triggerMethod("before:region:add",a);var c={};c[a]=b;return this._buildRegions(c)[a]},addRegions:function(a){this.regions=c.extend({},this.regions,a);return this._buildRegions(a)},removeRegion:function(a){this.triggerMethod("before:region:remove",a);delete this.regions[a];return this.regionManager.removeRegion(a)},getRegion:function(a){return this.regionManager.get(a)},getRegions:function(){return this.regionManager.getRegions()},
_buildRegions:function(a){var b=this,c={regionClass:this.getOption("regionClass"),parentEl:function(){return b.$el}};return this.regionManager.addRegions(a,c)},_initializeRegions:function(a){var b;this._initRegionManager();b=c.isFunction(this.regions)?this.regions(a):this.regions||{};var d=this.getOption.call(a,"regions");c.isFunction(d)&&(d=d.call(this,a));c.extend(b,d);this.addRegions(b)},_reInitializeRegions:function(){this.regionManager.emptyRegions();this.regionManager.each(function(a){a.reset()})},
getRegionManager:function(){return new d.RegionManager},_initRegionManager:function(){this.regionManager=this.getRegionManager();this.listenTo(this.regionManager,"before:add:region",function(a){this.triggerMethod("before:add:region",a)});this.listenTo(this.regionManager,"add:region",function(a,b){this[a]=b;this.triggerMethod("add:region",a,b)});this.listenTo(this.regionManager,"before:remove:region",function(a){this.triggerMethod("before:remove:region",a)});this.listenTo(this.regionManager,"remove:region",
function(a,b){delete this[a];this.triggerMethod("remove:region",a,b)})}});g=function(a,b){this.view=b;this.defaults=c.result(this,"defaults")||{};this.options=c.extend({},this.defaults,a);this.$=function(){return this.view.$.apply(this.view,arguments)};this.initialize.apply(this,arguments)};c.extend(g.prototype,f.Events,{initialize:function(){},destroy:function(){this.stopListening()},triggerMethod:d.triggerMethod,getOption:d.proxyGetOption,bindEntityEvents:d.proxyBindEntityEvents,unbindEntityEvents:d.proxyUnbindEntityEvents});
g.extend=d.extend;d.Behavior=g;var k=function(a,b){b=k.parseBehaviors(a,b||c.result(a,"behaviors"));k.wrap(a,b,c.keys(q))},q={setElement:function(a,b){a.apply(this,c.tail(arguments,2));c.each(b,function(a){a.$el=this.$el;a.el=this.el},this);return this},destroy:function(a,b){var d=c.tail(arguments,2);a.apply(this,d);c.invoke(b,"destroy",d);return this},bindUIElements:function(a,b){a.apply(this);c.invoke(b,a)},unbindUIElements:function(a,b){a.apply(this);c.invoke(b,a)},triggerMethod:function(a,b){var d=
c.tail(arguments,2);a.apply(this,d);c.each(b,function(b){a.apply(b,d)})},delegateEvents:function(a,b){var e=c.tail(arguments,2);a.apply(this,e);c.each(b,function(a){d.bindEntityEvents(a,this.model,d.getOption(a,"modelEvents"));d.bindEntityEvents(a,this.collection,d.getOption(a,"collectionEvents"))},this);return this},undelegateEvents:function(a,b){var e=c.tail(arguments,2);a.apply(this,e);c.each(b,function(a){d.unbindEntityEvents(a,this.model,d.getOption(a,"modelEvents"));d.unbindEntityEvents(a,this.collection,
d.getOption(a,"collectionEvents"))},this);return this},behaviorEvents:function(a,b){var e={},f=c.result(this,"ui");c.each(b,function(a,b){var g={},h=c.clone(c.result(a,"events"))||{},i=c.result(a,"ui"),i=c.extend({},f,i),h=d.normalizeUIKeys(h,i);c.each(c.keys(h),function(d){var e=Array(b+2).join(" "),e=d+e,d=c.isFunction(h[d])?h[d]:a[h[d]];g[e]=c.bind(d,a)});e=c.extend(e,g)});return e}};c.extend(k,{behaviorsLookup:function(){throw Error("You must define where your behaviors are stored.See https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.behaviors.md#behaviorslookup");
},getBehaviorClass:function(a,b){return a.behaviorClass?a.behaviorClass:c.isFunction(k.behaviorsLookup)?k.behaviorsLookup.apply(this,arguments)[b]:k.behaviorsLookup[b]},parseBehaviors:function(a,b){return c.chain(b).map(function(b,d){var f=new (k.getBehaviorClass(b,d))(b,a),g=k.parseBehaviors(a,c.result(f,"behaviors"));return[f].concat(g)}).flatten().value()},wrap:function(a,b,d){c.each(d,function(d){a[d]=c.partial(q[d],a[d],b)})}});d.Behaviors=k;d.AppRouter=f.Router.extend({constructor:function(a){f.Router.apply(this,
arguments);this.options=a||{};var b=this.getOption("appRoutes"),c=this._getController();this.processAppRoutes(c,b);this.on("route",this._processOnRoute,this)},appRoute:function(a,b){var c=this._getController();this._addAppRoute(c,a,b)},_processOnRoute:function(a,b){var d=c.invert(this.getOption("appRoutes"))[a];if(c.isFunction(this.onRoute))this.onRoute(a,d,b)},processAppRoutes:function(a,b){if(b){var d=c.keys(b).reverse();c.each(d,function(c){this._addAppRoute(a,c,b[c])},this)}},_getController:function(){return this.getOption("controller")},
_addAppRoute:function(a,b,d){var f=a[d];f||i('Method "'+d+'" was not found on the controller');this.route(b,d,c.bind(f,a))},getOption:d.proxyGetOption});d.Application=function(a){this._initializeRegions(a);this._initCallbacks=new d.Callbacks;this.submodules={};c.extend(this,a);this._initChannel()};c.extend(d.Application.prototype,f.Events,{execute:function(){this.commands.execute.apply(this.commands,arguments)},request:function(){return this.reqres.request.apply(this.reqres,arguments)},addInitializer:function(a){this._initCallbacks.add(a)},
start:function(a){this.triggerMethod("before:start",a);this._initCallbacks.run(a,this);this.triggerMethod("start",a)},addRegions:function(a){return this._regionManager.addRegions(a)},emptyRegions:function(){return this._regionManager.emptyRegions()},removeRegion:function(a){return this._regionManager.removeRegion(a)},getRegion:function(a){return this._regionManager.get(a)},getRegions:function(){return this._regionManager.getRegions()},module:function(a,b){var c=d.Module.getClass(b),f=j.call(arguments);
f.unshift(this);return c.create.apply(c,f)},getRegionManager:function(){return new d.RegionManager},_initializeRegions:function(a){var b=c.isFunction(this.regions)?this.regions(a):this.regions||{};this._initRegionManager();var e=d.getOption(a,"regions");c.isFunction(e)&&(e=e.call(this,a));c.extend(b,e);this.addRegions(b);return this},_initRegionManager:function(){this._regionManager=this.getRegionManager();this.listenTo(this._regionManager,"before:add:region",function(a){this.triggerMethod("before:add:region",
a)});this.listenTo(this._regionManager,"add:region",function(a,b){this[a]=b;this.triggerMethod("add:region",a,b)});this.listenTo(this._regionManager,"before:remove:region",function(a){this.triggerMethod("before:remove:region",a)});this.listenTo(this._regionManager,"remove:region",function(a,b){delete this[a];this.triggerMethod("remove:region",a,b)})},_initChannel:function(){this.channelName=c.result(this,"channelName")||"global";this.channel=c.result(this,"channel")||v.radio.channel(this.channelName);
this.vent=c.result(this,"vent")||this.channel.vent;this.commands=c.result(this,"commands")||this.channel.commands;this.reqres=c.result(this,"reqres")||this.channel.reqres},triggerMethod:d.triggerMethod,getOption:d.proxyGetOption});d.Application.extend=d.extend;d.Module=function(a,b,d){this.moduleName=a;this.options=c.extend({},this.options,d);this.initialize=d.initialize||this.initialize;this.submodules={};this._setupInitializersAndFinalizers();this.app=b;this.startWithParent=!0;c.isFunction(this.initialize)&&
this.initialize(a,b,this.options)};d.Module.extend=d.extend;c.extend(d.Module.prototype,f.Events,{initialize:function(){},addInitializer:function(a){this._initializerCallbacks.add(a)},addFinalizer:function(a){this._finalizerCallbacks.add(a)},start:function(a){this._isInitialized||(c.each(this.submodules,function(b){b.startWithParent&&b.start(a)}),this.triggerMethod("before:start",a),this._initializerCallbacks.run(a,this),this._isInitialized=!0,this.triggerMethod("start",a))},stop:function(){this._isInitialized&&
(this._isInitialized=!1,this.triggerMethod("before:stop"),c.each(this.submodules,function(a){a.stop()}),this._finalizerCallbacks.run(void 0,this),this._initializerCallbacks.reset(),this._finalizerCallbacks.reset(),this.triggerMethod("stop"))},addDefinition:function(a,b){this._runModuleDefinition(a,b)},_runModuleDefinition:function(a,b){if(a){var e=c.flatten([this,this.app,f,d,f.$,c,b]);a.apply(this,e)}},_setupInitializersAndFinalizers:function(){this._initializerCallbacks=new d.Callbacks;this._finalizerCallbacks=
new d.Callbacks},triggerMethod:d.triggerMethod});c.extend(d.Module,{create:function(a,b,d){var f=a,g=j.call(arguments);g.splice(0,3);var b=b.split("."),h=[];h[b.length-1]=d;c.each(b,function(b,c){var i=f;f=this._getModule(i,b,a,d);this._addModuleDefinition(i,f,h[c],g)},this);return f},_getModule:function(a,b,d,f){var g=c.extend({},f),f=this.getClass(f),h=a[b];h||(h=new f(b,d,g),a[b]=h,a.submodules[b]=h);return h},getClass:function(a){var b=d.Module;return!a?b:a.prototype instanceof b?a:a.moduleClass||
b},_addModuleDefinition:function(a,b,c,d){var f=this._getDefine(c),c=this._getStartWithParent(c,b);f&&b.addDefinition(f,d);this._addStartWithParent(a,b,c)},_getStartWithParent:function(a,b){var e;return c.isFunction(a)&&a.prototype instanceof d.Module?(e=b.constructor.prototype.startWithParent,c.isUndefined(e)?!0:e):c.isObject(a)?(e=a.startWithParent,c.isUndefined(e)?!0:e):!0},_getDefine:function(a){return c.isFunction(a)&&!(a.prototype instanceof d.Module)?a:c.isObject(a)?a.define:null},_addStartWithParent:function(a,
b,c){b.startWithParent=b.startWithParent&&c;b.startWithParent&&!b.startWithParentIsConfigured&&(b.startWithParentIsConfigured=!0,a.addInitializer(function(a){b.startWithParent&&b.start(a)}))}});this.Marionette=d});;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:marionette', location = 'jira-projects-module/sidebar/lib/backbone.marionette.adapter.js' */
define("jira/projects/libs/marionette",["backbone","underscore","atlassian/libs/factories/marionette-2.1.0"],function(e,r,t){"use strict";return t(r,e)}),AJS.namespace("JIRA.Projects.Libs.Marionette",null,require("jira/projects/libs/marionette"));;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:marionette', location = 'jira-projects-module/sidebar/lib/backbone.marionette.mixins.js' */
!function(){"use strict";function e(e,t){var i=this,r=_.defaults({},t||{},{isPrevented:!1,emitter:this,preventDefault:function(){this.isPrevented=!0,i.trigger(e+":prevented",this)}});return this.trigger(e,r),r}function t(e,t){var i=this.triggerPreventable(e,t);i.isPrevented&&t.preventDefault()}_.extend(JIRA.Projects.Libs.Marionette.View.prototype,{unwrapTemplate:function(){if(this.$el.parent().length){var e=this.$el.children();this.$el.replaceWith(e),this.setElement(e)}else this.setElement(this.$el.children())},triggerPreventable:e,retriggerPreventable:t}),_.extend(JIRA.Projects.Libs.Marionette.Controller.prototype,{triggerPreventable:e,retriggerPreventable:t}),JIRA.Projects.Libs.Marionette.ViewManager=JIRA.Projects.Libs.Marionette.Controller.extend({constructor:function(){JIRA.Projects.Libs.Marionette.Controller.apply(this,arguments),this.views={}},hideView:function(e){var t=this.views[e];t&&(this.stopListening(t),t.isDestroyed||t.destroy(),delete this.views[e])},showView:function(e,t){var i=this.buildView(e,t);i.render()},buildView:function(e,t){var i=this.views[e];return i||(i=t.call(this),this.listenTo(i,"destroy",function(){this.hideView(e)}),this.views[e]=i),i},getView:function(e){return this.views[e]}})}();;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:data', location = 'jira-projects-module/data/web-resource-manager.js' */
define("jira/projects/data/WRM",window.WRM);;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:projects-api', location = 'jira-projects-module/page/projects-api.js' */
define("jira/api/projects",["jira/projects/data/WRM"],function(e){"use strict";function t(t,r){if(void 0!==t)return t;var n=e.data.claim(r);return void 0!==n?n:AJS.Meta.get(r)}function r(e){return AJS.$('meta[name="'+e+'"]').attr("content")}var n=e.data.claim("project-key"),i=e.data.claim("project-id"),c=e.data.claim("project-name"),a=e.data.claim("project-type"),o=e.data.claim("is-project-admin"),u=e.data.claim("project-simplified");return{ProjectType:Object.freeze({SOFTWARE:"software",BUSINESS:"business"}),getCurrentProjectId:function(e){return i=t(i,"project-id"),(null==i||e)&&(i=r("ghx-project-id")),i},getCurrentProjectKey:function(e){return n=t(n,"project-key"),(null==n||e)&&(n=r("ghx-project-key")),n},getCurrentProjectName:function(){return c=t(c,"project-name")},getCurrentProjectType:function(){return a=t(a,"project-type")},isCurrentUserProjectAdmin:function(){return o=t(o,"is-project-admin")},isCurrentProjectSimplified:function(){return u=t(u,"project-simplified")}}}),AJS.namespace("JIRA.API.Projects",null,require("jira/api/projects"));;
;
/* module-key = 'com.atlassian.jira.jira-issue-nav-components:ajs-helper', location = 'jira-issue-navigator-components-module/util/ajshelper.js' */
define("jira/components/utils/ajshelper",[],function(){"use strict";function e(){return function(e,n){if(n){var r=n.data||{};r.searchSessionId=r.searchSessionId||t.Meta.get("search-session-id"),r.searchObjectId=r.searchObjectId||t.Meta.get("search-object-id"),r.searchContainerId=r.searchContainerId||t.Meta.get("search-container-id"),r.searchContentType=r.searchContentType||t.Meta.get("search-content-type"),n.data=r}t.trigger(e,n)}}var t=window.AJS;return{escapeHtml:t.escapeHtml.bind(t),LEFT:t.LEFT,Templates:t.Templates,HIDE_REASON:t.HIDE_REASON,trigger:e(),log:t.log.bind(t),extractBodyFromResponse:t.extractBodyFromResponse,whenIType:function(){return t.whenIType},activeShortcuts:function(){return t.activeShortcuts}}});
//# sourceMappingURL=ajshelper-min.js.map
;
;
/* module-key = 'com.atlassian.plugin.jslibs:underscore-1.5.2', location = 'atlassian-jslibs/libs/underscore/1.5.2/underscore-1.5.2.js' */
!function(n){define("atlassian/libs/underscore-1.5.2",(function(){var t={};return n.call(t),"undefined"!=typeof exports?"undefined"!=typeof module&&module.exports?module.exports.noConflict():exports.noConflict():t._.noConflict()}))}((function(){(function(){var n=this,t=n._,r={},e=Array.prototype,i=Object.prototype,u=Function.prototype,o=e.push,a=e.slice,c=e.concat,l=i.toString,f=i.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,d=e.filter,y=e.every,g=e.some,m=e.indexOf,x=e.lastIndexOf,w=Array.isArray,b=Object.keys,_=u.bind,j=function(n){return n instanceof j?n:this instanceof j?void(this._wrapped=n):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.5.2";var A=j.each=j.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var i=0,u=n.length;i<u;i++)if(t.call(e,n[i],i,n)===r)return}else{var o=j.keys(n);for(i=0,u=o.length;i<u;i++)if(t.call(e,n[o[i]],o[i],n)===r)return}};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,(function(n,i,u){e.push(t.call(r,n,i,u))})),e)};var E="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var i=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=j.bind(t,e)),i?n.reduce(t,r):n.reduce(t);if(A(n,(function(n,u,o){i?r=t.call(e,r,n,u,o):(r=n,i=!0)})),!i)throw new TypeError(E);return r},j.reduceRight=j.foldr=function(n,t,r,e){var i=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=j.bind(t,e)),i?n.reduceRight(t,r):n.reduceRight(t);var u=n.length;if(u!==+u){var o=j.keys(n);u=o.length}if(A(n,(function(a,c,l){c=o?o[--u]:--u,i?r=t.call(e,r,n[c],c,l):(r=n[c],i=!0)})),!i)throw new TypeError(E);return r},j.find=j.detect=function(n,t,r){var e;return O(n,(function(n,i,u){if(t.call(r,n,i,u))return e=n,!0})),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:d&&n.filter===d?n.filter(t,r):(A(n,(function(n,i,u){t.call(r,n,i,u)&&e.push(n)})),e)},j.reject=function(n,t,r){return j.filter(n,(function(n,e,i){return!t.call(r,n,e,i)}),r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var i=!0;return null==n?i:y&&n.every===y?n.every(t,e):(A(n,(function(n,u,o){if(!(i=i&&t.call(e,n,u,o)))return r})),!!i)};var O=j.some=j.any=function(n,t,e){t||(t=j.identity);var i=!1;return null==n?i:g&&n.some===g?n.some(t,e):(A(n,(function(n,u,o){if(i||(i=t.call(e,n,u,o)))return r})),!!i)};j.contains=j.include=function(n,t){return null!=n&&(m&&n.indexOf===m?-1!=n.indexOf(t):O(n,(function(n){return n===t})))},j.invoke=function(n,t){var r=a.call(arguments,2),e=j.isFunction(t);return j.map(n,(function(n){return(e?t:n[t]).apply(n,r)}))},j.pluck=function(n,t){return j.map(n,(function(n){return n[t]}))},j.where=function(n,t,r){return j.isEmpty(t)?r?void 0:[]:j[r?"find":"filter"](n,(function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0}))},j.findWhere=function(n,t){return j.where(n,t,!0)},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);if(!t&&j.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,(function(n,i,u){var o=t?t.call(r,n,i,u):n;o>e.computed&&(e={value:n,computed:o})})),e.value},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);if(!t&&j.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,(function(n,i,u){var o=t?t.call(r,n,i,u):n;o<e.computed&&(e={value:n,computed:o})})),e.value},j.shuffle=function(n){var t,r=0,e=[];return A(n,(function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n})),e},j.sample=function(n,t,r){return arguments.length<2||r?n[j.random(n.length-1)]:j.shuffle(n).slice(0,Math.max(0,t))};var k=function(n){return j.isFunction(n)?n:function(t){return t[n]}};j.sortBy=function(n,t,r){var e=k(t);return j.pluck(j.map(n,(function(n,t,i){return{value:n,index:t,criteria:e.call(r,n,t,i)}})).sort((function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||void 0===r)return 1;if(r<e||void 0===e)return-1}return n.index-t.index})),"value")};var F=function(n){return function(t,r,e){var i={},u=null==r?j.identity:k(r);return A(t,(function(r,o){var a=u.call(e,r,o,t);n(i,a,r)})),i}};j.groupBy=F((function(n,t,r){(j.has(n,t)?n[t]:n[t]=[]).push(r)})),j.indexBy=F((function(n,t,r){n[t]=r})),j.countBy=F((function(n,t){j.has(n,t)?n[t]++:n[t]=1})),j.sortedIndex=function(n,t,r,e){for(var i=(r=null==r?j.identity:k(r)).call(e,t),u=0,o=n.length;u<o;){var a=u+o>>>1;r.call(e,n[a])<i?u=a+1:o=a}return u},j.toArray=function(n){return n?j.isArray(n)?a.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){if(null!=n)return null==t||r?n[0]:a.call(n,0,t)},j.initial=function(n,t,r){return a.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){if(null!=n)return null==t||r?n[n.length-1]:a.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return a.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var M=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,(function(n){j.isArray(n)||j.isArguments(n)?t?o.apply(r,n):M(n,t,r):r.push(n)})),r)};j.flatten=function(n,t){return M(n,t,[])},j.without=function(n){return j.difference(n,a.call(arguments,1))},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var i=r?j.map(n,r,e):n,u=[],o=[];return A(i,(function(r,e){(t?e&&o[o.length-1]===r:j.contains(o,r))||(o.push(r),u.push(n[e]))})),u},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=a.call(arguments,1);return j.filter(j.uniq(n),(function(n){return j.every(t,(function(t){return j.indexOf(t,n)>=0}))}))},j.difference=function(n){var t=c.apply(e,a.call(arguments,1));return j.filter(n,(function(n){return!j.contains(t,n)}))},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;r<n;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,i=n.length;e<i;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,i=n.length;if(r){if("number"!=typeof r)return n[e=j.sortedIndex(n,t)]===t?e:-1;e=r<0?Math.max(0,i+r):r}if(m&&n.indexOf===m)return n.indexOf(t,r);for(;e<i;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(x&&n.lastIndexOf===x)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var i=e?r:n.length;i--;)if(n[i]===t)return i;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),i=0,u=new Array(e);i<e;)u[i++]=n,n+=r;return u};var R=function(){};j.bind=function(n,t){var r,e;if(_&&n.bind===_)return _.apply(n,a.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=a.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(a.call(arguments)));R.prototype=n.prototype;var i=new R;R.prototype=null;var u=n.apply(i,r.concat(a.call(arguments)));return Object(u)===u?u:i}},j.partial=function(n){var t=a.call(arguments,1);return function(){return n.apply(this,t.concat(a.call(arguments)))}},j.bindAll=function(n){var t=a.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,(function(t){n[t]=j.bind(n[t],n)})),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=a.call(arguments,2);return setTimeout((function(){return n.apply(null,r)}),t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(a.call(arguments,1)))},j.throttle=function(n,t,r){var e,i,u,o=null,a=0;r||(r={});var c=function(){a=!1===r.leading?0:new Date,o=null,u=n.apply(e,i)};return function(){var l=new Date;a||!1!==r.leading||(a=l);var f=t-(l-a);return e=this,i=arguments,f<=0?(clearTimeout(o),o=null,a=l,u=n.apply(e,i)):o||!1===r.trailing||(o=setTimeout(c,f)),u}},j.debounce=function(n,t,r){var e,i,u,o,a;return function(){u=this,i=arguments,o=new Date;var c=function(){var l=new Date-o;l<t?e=setTimeout(c,t-l):(e=null,r||(a=n.apply(u,i)))},l=r&&!e;return e||(e=setTimeout(c,t)),l&&(a=n.apply(u,i)),a}},j.once=function(n){var t,r=!1;return function(){return r||(r=!0,t=n.apply(this,arguments),n=null),t}},j.wrap=function(n,t){return function(){var r=[n];return o.apply(r,arguments),t.apply(this,r)}},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){if(--n<1)return t.apply(this,arguments)}},j.keys=b||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),i=0;i<r;i++)e[i]=n[t[i]];return e},j.pairs=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),i=0;i<r;i++)e[i]=[t[i],n[t[i]]];return e},j.invert=function(n){for(var t={},r=j.keys(n),e=0,i=r.length;e<i;e++)t[n[r[e]]]=r[e];return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(a.call(arguments,1),(function(t){if(t)for(var r in t)n[r]=t[r]})),n},j.pick=function(n){var t={},r=c.apply(e,a.call(arguments,1));return A(r,(function(r){r in n&&(t[r]=n[r])})),t},j.omit=function(n){var t={},r=c.apply(e,a.call(arguments,1));for(var i in n)j.contains(r,i)||(t[i]=n[i]);return t},j.defaults=function(n){return A(a.call(arguments,1),(function(t){if(t)for(var r in t)void 0===n[r]&&(n[r]=t[r])})),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var i=l.call(n);if(i!=l.call(t))return!1;switch(i){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var u=r.length;u--;)if(r[u]==n)return e[u]==t;var o=n.constructor,a=t.constructor;if(o!==a&&!(j.isFunction(o)&&o instanceof o&&j.isFunction(a)&&a instanceof a))return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==i){if(f=(c=n.length)==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=w||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],(function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}})),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return!0===n||!1===n||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return void 0===n},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),i=0;i<n;i++)e[i]=t.call(r,i);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var I={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};I.unescape=j.invert(I.escape);var T={escape:new RegExp("["+j.keys(I.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(I.unescape).join("|")+")","g")};j.each(["escape","unescape"],(function(n){j[n]=function(t){return null==t?"":(""+t).replace(T[n],(function(t){return I[n][t]}))}})),j.result=function(n,t){if(null!=n){var r=n[t];return j.isFunction(r)?r.call(n):r}},j.mixin=function(n){A(j.functions(n),(function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return o.apply(n,arguments),z.call(this,r.apply(j,n))}}))};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","\t":"t","\u2028":"u2028","\u2029":"u2029"},C=/\\|'|\r|\n|\t|\u2028|\u2029/g,D=/^\s*(\w|\$)+\s*$/;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var i=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),u=0,o="__p+='";n.replace(i,(function(t,r,e,i,a){return o+=n.slice(u,a).replace(C,(function(n){return"\\"+B[n]})),r&&(o+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(o+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),i&&(o+="';\n"+i+"\n__p+='"),u=a+t.length,t})),o+="';\n";var a=r.variable;if(a){if(!D.test(a))throw new Error(a)}else o="with(obj||{}){\n"+o+"}\n",a="obj";o="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{e=new Function(a,"_",o)}catch(n){throw n.source=o,n}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+a+"){\n"+o+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],(function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}})),A(["concat","join","slice"],(function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}})),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this)}));;
;
/* module-key = 'com.atlassian.jira.jira-issue-nav-components:underscore', location = 'jira-issue-navigator-components-module/libs/underscore.js' */
define("jira/components/libs/underscore",["require"],function(e){"use strict";return e("atlassian/libs/underscore-1.5.2")});
//# sourceMappingURL=underscore-min.js.map
;
;
/* module-key = 'com.atlassian.jira.jira-issue-nav-components:analytics-tracker', location = 'jira-issue-navigator-components-module/analytics-tracker/tracker.js' */
define("jira/components/analytics-tracker/tracker",["jira/components/libs/underscore","jira/issue","jira/components/utils/ajshelper","jquery","jira/customevents/trigger-custom-event"],function(e,t,n,r,i){"use strict";function o(){if(!h)try{h=require("jira/api/projects")}catch(e){h=null}}function a(){return g?g:(o(),h?h.getCurrentProjectId():void 0)}function c(){return j?j:(o(),h?h.getCurrentProjectType():void 0)}function s(){return k?k:t?t.getIssueId():void 0}function u(e){if(e.attr("class")||e.attr("id"))return e;var t=e.parent().closest("[class], [id]");return t.length?t:e}function d(e){var t=r(e.target).closest(p),n=u(t);v("viewissue","generic-action",{className:n.attr("class")||"no-element-className",id:n.attr("id")||"no-element-id"}),w=!1}function l(){r(".issue-container").off("click",p,d).on("click",p,d),r("#create_link").off("click",d).on("click",d),y&&clearTimeout(y),y=setTimeout(function(){w&&v("viewissue","inactive-timeout")},m)}function v(t,r,o){var u=f+"."+t+"."+r;I=I||Math.round(performance.now());var d=Math.round(performance.now())-I;o=o||{};var l={projectId:o.projectId||a(),projectType:o.projectType||c(),issueId:o.issueId||s(),userAgent:window.navigator.userAgent,timeSinceIssueLoaded:d},v=e.extend(l,o);n.trigger("analyticsEvent",{name:u,data:v}),i.trigger("legacy-gas-v2-event",u,v)}var f="jira.platform.fe.web",m=3e5,p="a, .editable-field, button",g=void 0,j=void 0,k=void 0,w=void 0,y=void 0,I=void 0,h=void 0;return{initialize:function(e,t,n){g=e,j=t,k=n,w=!0,I=Math.round(performance.now()),l()},trackEvent:v}});
//# sourceMappingURL=tracker-min.js.map
;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-component', location = 'jira-projects-module/sidebar/component/component.js' */
define("jira/projects/sidebar/component",["underscore","jira/projects/data/WRM"],function(e,t){"use strict";var r=Boolean(t.data.claim("is-global-sidebar"));return JIRA.Projects.Libs.Marionette.CompositeView.extend({childEvents:{"before:select":function(e,t){this.hasASelectedItem()||(t.isInitial=!0),this.retriggerPreventable("before:select",t),t.isPrevented||this.deselectAllGroups()},select:function(e,t){this.trigger("select",t)},"before:deselect":function(e,t){this.retriggerPreventable("before:deselect",t)},deselect:function(e,t){this.trigger("deselect",t)},"before:navigate":function(e,t){this.retriggerPreventable("before:navigate",t)},"before:navigate:prevented":function(e,t){this.trigger("before:navigate:prevented",t)}},events:{"click .js-nav-project-title-link":"_clickProjectName","click .js-nav-project-avatar-link":"_clickProjectAvatar","click a[data-link-id='com.atlassian.jira.jira-projects-plugin:summary-page']":"_clickProjectSummary"},initialize:function(){this.render({force:!0});try{this.tracker=require("jira/components/analytics-tracker/tracker")}catch(e){}this.bindUIElements();var t=AJS.sidebar(".aui-sidebar");e.each(["expand-end","collapse-end","collapse-start"],function(e){t.on(e,function(){this.trigger(e)}.bind(this))}.bind(this))},render:function(t){t=e.defaults({},t,{force:!1});var r="el"in t,i=r||t.force===!0,n=this.children.length>0;if(!i)return this;var a=this.triggerPreventable("before:render");if(a.isPrevented)return this;if(n){var c=this.triggerPreventable("before:detach");if(c.isPrevented)return this;this.destroyChildren({checkEmpty:!1}),this.trigger("detach")}if(r){var o=jQuery(t.el);this.$el.replaceWith(o),this.setElement(o)}return this.$(".aui-sidebar-group").each(e.bind(function(e,t){var r=new JIRA.Projects.Sidebar.Component.NavigationGroup({el:t}),i=!!this.getGroup(r.id);i&&AJS.warn&&AJS.warn('Duplicated IDs detected. There are more than one NavigationGroup with id data-id="'+r.id+'"'),this.proxyChildEvents(r),this.children.add(r,r.id)},this)),this.trigger("render"),this},reflow:function(){AJS.sidebar(".aui-sidebar").reflow()},isCollapsed:function(){return AJS.sidebar(".aui-sidebar").isCollapsed()},deselectAllGroups:function(){this.children.call("deselect")},on:function(){return JIRA.Projects.Libs.Marionette.CompositeView.prototype.on.apply(this,arguments)},off:function(){return JIRA.Projects.Libs.Marionette.CompositeView.prototype.off.apply(this,arguments)},replaceGroup:function(e,t){var r=this.getGroup(e);r.$el.replaceWith(t.$el),t.cid=r.cid,this.children.remove(r),this.children.add(t,t.id)},getGroup:function(e){return this.children.findByCustom(e)},getGroupAt:function(e){return this.children.findByIndex(e)},getItem:function(e){return this.getDefaultGroup().getItem(e)},getElement:function(){return this._trackDeprecated("getElement"),this.el},getDefaultGroup:function(){return this.getGroup("sidebar-navigation-panel")},isProjectSidebar:function(){return!r},getSelectedScopeFilterId:function(){return this._trackDeprecated("getSelectedScopeFilterId"),this.$(".scope-filter a.scope-filter-trigger").attr("data-scope-filter-id")},setReportsItemLink:function(e){this._trackDeprecated("setReportsItemLink");var t=this.getGroup("sidebar-navigation-panel"),r=t.getItem("com.atlassian.jira.jira-projects-plugin:report-page");"undefined"==typeof r&&(r=t.getItem("com.pyxis.greenhopper.jira:global-sidebar-report")),r&&r.attr("href",e)},getAUISidebar:function(){return this._trackDeprecated("getAUISidebar"),AJS.sidebar(".aui-sidebar")},getContentContainer:function(){return this._trackDeprecated("getContentContainer"),this.$(".aui-sidebar-body .sidebar-content-container")},getSelectedNavigationItem:function(){return this.getDefaultGroup().getSelectedNavigationItem()},hasASelectedItem:function(){return this.getDefaultGroup().hasASelectedItem()},dim:function(){this._trackDeprecated("dim"),this.$el.attr({dimmed:"","aria-hidden":"true"})},undim:function(){this._trackDeprecated("undim"),this.$el.removeAttr("dimmed"),this.$el.removeAttr("aria-hidden")},_clickProjectName:function(){"undefined"!=typeof this.tracker&&this.tracker.trackEvent("project.sidebar","click.projectName")},_clickProjectAvatar:function(){"undefined"!=typeof this.tracker&&this.tracker.trackEvent("project.sidebar","click.avatar")},_clickProjectSummary:function(){"undefined"!=typeof this.tracker&&this.tracker.trackEvent("project.sidebar","click.projectSummary")},_trackDeprecated:function(e){AJS.warn("The Sidebar method "+e+" is going to be deprecated"),AJS.trigger("analyticsEvent",{name:"jira.project.centric.navigation.sidebar.method.deprecated",data:{method:e}})}})}),AJS.namespace("JIRA.Projects.Sidebar.Component",null,require("jira/projects/sidebar/component"));;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-component', location = 'jira-projects-module/sidebar/component/navigation-item.js' */
!function(){"use strict";AJS.namespace("JIRA.Projects.Sidebar.Component.NavigationItem"),JIRA.Projects.Sidebar.Component.NavigationItem=JIRA.Projects.Libs.Marionette.CompositeView.extend({ui:{link:"a.aui-nav-item"},events:{'simpleClick @ui.link:not([target="_blank"])':function(e){e.preventDefault(),this.navigate()}},initialize:function(){this.id=this.$el.find(">a").attr("data-link-id"),this.bindUIElements()},onDestroy:function(){this.unbind()},getElement:function(){return this._trackDeprecated("getElement"),this.el},navigate:function(){if(this.select()){var e=this.triggerPreventable("before:navigate");if(e.isPrevented)return!1;var t=this.ui.link.attr("href");return t&&require("jira/util/browser").reloadViaWindowLocation(t),!0}},select:function(){var e=this.triggerPreventable("before:select");return!e.isPrevented&&(this.$el.addClass("aui-nav-selected"),this.trigger("select",e),!0)},deselect:function(){if(!this.isSelected())return!0;var e=this.triggerPreventable("before:deselect");return!e.isPrevented&&(this.$el.removeClass("aui-nav-selected"),this.$el.find("a").blur(),this.trigger("deselect",e),!0)},isSelected:function(){return this.$el.hasClass("aui-nav-selected")},removeBadge:function(){this.$el.find(".aui-badge").remove()},getId:function(){return this.id},getSelectedNavigationItem:function(){if(this.isSelected())return this},hasASelectedItem:function(){return this.isSelected()},attr:function(e,t){var i=this.ui.link.attr(e,t);return t?i:this},_trackDeprecated:function(e){AJS.warn("The Sidebar item method "+e+" is going to be deprecated"),AJS.trigger("analyticsEvent",{name:"jira.project.centric.navigation.sidebar.item.method.deprecated",data:{method:e}})}})}();;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-component', location = 'jira-projects-module/sidebar/component/navigation-group.js' */
!function(){"use strict";AJS.namespace("JIRA.Projects.Sidebar.Component.NavigationGroup"),JIRA.Projects.Sidebar.Component.NavigationGroup=JIRA.Projects.Libs.Marionette.CompositeView.extend({childEvents:{"before:select":function(e,t){if(this.retriggerPreventable("before:select",t),!t.isPrevented){var i=this.deselect();i||t.preventDefault()}},select:function(e,t){this.trigger("select",t)},"before:deselect":function(e,t){this.retriggerPreventable("before:deselect",t)},deselect:function(e,t){this.trigger("deselect",t)},"before:navigate":function(e,t){this.retriggerPreventable("before:navigate",t)},"before:navigate:prevented":function(e,t){this.trigger("before:navigate:prevented",t)}},initialize:function(){this.id=this.$el.attr("data-id"),this.$(">ul>li").each(_.bind(function(e,t){var i=JIRA.Projects.Sidebar.Component.NavigationGroup.build(t),n=!!this.getItem(i.id);n&&AJS.warn&&AJS.warn("Duplicated IDs detected. There are more than one NavigationItem with id data-link-id='"+i.id+"'"),this.proxyChildEvents(i),this.children.add(i,i.id)},this))},onDestroy:function(){this.unbind()},getElement:function(){return this._trackDeprecated("getElement"),this.el},deselect:function(){var e=this.triggerPreventable("before:deselect");if(e.isPrevented)return!1;var t=!0;return this.children.each(function(e){t=e.deselect()&&t}),t},getItem:function(e){return this.children.findByCustom(e)},getItemAt:function(e){return this.children.findByIndex(e)},getSelectedNavigationItem:function(){var e=this.children.find(function(e){return e.hasASelectedItem()});if(e)return e.getSelectedNavigationItem()},hasASelectedItem:function(){return this.children.any(function(e){return e.hasASelectedItem()})},_trackDeprecated:function(e){AJS.warn("The Sidebar group method "+e+" is going to be deprecated"),AJS.trigger("analyticsEvent",{name:"jira.project.centric.navigation.sidebar.group.method.deprecated",data:{method:e}})}},{build:function(e){var t;return t=AJS.$(e).find("ul").length?new JIRA.Projects.Sidebar.Component.NavigationSubgroup({el:e}):new JIRA.Projects.Sidebar.Component.NavigationItem({el:e})}})}();;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-component', location = 'jira-projects-module/sidebar/component/navigation-subgroup.js' */
!function(){"use strict";AJS.namespace("JIRA.Projects.Sidebar.Component.NavigationSubgroup"),JIRA.Projects.Sidebar.Component.NavigationSubgroup=JIRA.Projects.Sidebar.Component.NavigationGroup.extend({childEvents:{"before:select":function(e,t){JIRA.Projects.Sidebar.Component.NavigationGroup.prototype.childEvents["before:select"].apply(this,arguments),t.isPrevented||this.expand()}},initialize:function(){this.childEvents=_.extend({},JIRA.Projects.Sidebar.Component.NavigationGroup.prototype.childEvents,this.childEvents),JIRA.Projects.Sidebar.Component.NavigationGroup.prototype.initialize.apply(this,arguments),this.id=this.$el.find(">a[data-link-id]").attr("data-link-id")},expand:function(){this.$el.attr("aria-expanded","true")},collapse:function(){this.$el.attr("aria-expanded","false")},isExpanded:function(){return"true"===this.$el.attr("aria-expanded")},isSelected:function(){return this.$el.hasClass("aui-nav-selected")},getId:function(){return this.id},getSelectedNavigationItem:function(){if(this.isSelected())return this;var e=this.children.find(function(e){return e.hasASelectedItem()});return e?e.getSelectedNavigationItem():void 0},hasASelectedItem:function(){return!!this.isSelected()||this.children.any(function(e){return e.hasASelectedItem()})}})}();;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-api', location = 'jira-projects-module/sidebar/api.js' */
!function(){"use strict";AJS.namespace("JIRA.Projects.Sidebar"),AJS.namespace("JIRA.API");var e=AJS.$.Deferred();JIRA.API.getSidebar=JIRA.API.getSidebar||function(){return e.promise()},JIRA.Projects.Sidebar.initAPI=function(r){JIRA.API.Sidebar=r,e.resolve(JIRA.API.Sidebar)}}();;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = 'jira-projects-module/sidebar/project-shortcuts/templates.soy.js' */
if("undefined"==typeof JIRA)var JIRA={};"undefined"==typeof JIRA.Projects&&(JIRA.Projects={}),"undefined"==typeof JIRA.Projects.Sidebar&&(JIRA.Projects.Sidebar={}),"undefined"==typeof JIRA.Projects.Sidebar.ProjectShortcuts&&(JIRA.Projects.Sidebar.ProjectShortcuts={}),"undefined"==typeof JIRA.Projects.Sidebar.ProjectShortcuts.Templates&&(JIRA.Projects.Sidebar.ProjectShortcuts.Templates={}),JIRA.Projects.Sidebar.ProjectShortcuts.Templates.content=function(t,e){var o="";if(t.canManage||t.numberOfShortcuts>0){if(o+='<div class="aui-sidebar-group jira-sidebar-group-with-divider project-shortcuts-group'+(0==t.numberOfShortcuts?" project-shortcuts-group_empty":"")+'" data-id="project-shortcuts-group"><div class="aui-nav-heading">'+soy.$$escapeHtml("Project Shortcuts")+'</div><ul class="aui-nav project-shortcuts-list">',t.shortcuts)for(var s=t.shortcuts,a=s.length,i=0;i<a;i++){var r=s[i];o+=JIRA.Projects.Sidebar.ProjectShortcuts.Templates.shortcut({id:r.id,name:r.name,url:r.url,icon:r.icon,canManage:t.canManage,iconsMap:t.iconsMap,isWithIcon:t.isWithIcons})}o+=(t.canManage?'<li><a class="aui-nav-item project-shortcuts-group__add" href="#" data-link-id="project-shortcut-add"><span class="aui-icon aui-icon-large aui-iconfont-add-small"></span><span class="aui-nav-item-label">'+soy.$$escapeHtml("Add shortcut")+"</span></a></li>":"")+"</ul></div>"}return o},JIRA.Projects.Sidebar.ProjectShortcuts.Templates.shortcut=function(t,e){return'<li class="project-shortcut"><a class="aui-nav-item project-shortcuts-group__link" href="'+soy.$$escapeHtml(t.url)+'" title="'+soy.$$escapeHtml(t.name)+'" target="_blank" data-shortcut-id="'+soy.$$escapeHtml(t.id)+'" data-link-id="project-shortcut-'+soy.$$escapeHtml(t.id)+'">'+(t.isWithIcon?'<span class="aui-icon aui-icon-large '+JIRA.Projects.Sidebar.ProjectShortcuts.Templates.icon({iconId:t.icon,iconsMap:t.iconsMap})+'" data-project-shortcuts-icon-id="'+soy.$$escapeHtml(t.icon)+'">'+soy.$$escapeHtml("Project shortcut icon")+"</span>":"")+'<span class="aui-nav-item-label">'+soy.$$escapeHtml(t.name)+"</span></a>"+(t.canManage?'<a href="#project-shortcuts-dropdown_'+soy.$$escapeHtml(t.id)+'" aria-owns="project-shortcuts-dropdown_'+soy.$$escapeHtml(t.id)+'" aria-haspopup="true" class="aui-dropdown2-trigger project-shortcuts-group__actions"><span>'+soy.$$escapeHtml("Actions")+'</span></a><div id="project-shortcuts-dropdown_'+soy.$$escapeHtml(t.id)+'" class="aui-dropdown2 aui-style-default project-shortcuts-group__dropdown"><ul class="aui-list-truncate"><li><a class="project-shortcuts-group__actions__edit" href="#">'+soy.$$escapeHtml("Edit")+'</a></li><li><a class="project-shortcuts-group__actions__delete  " href="#">'+soy.$$escapeHtml("Delete")+"</a></li></ul></div>":"")+"</li>"},JIRA.Projects.Sidebar.ProjectShortcuts.Templates.icon=function(t,e){t=t||{};var o="";if(t.iconsMap){var s=t.iconId&&t.iconsMap[t.iconId]?t.iconId:"1";o+=t.iconsMap[s]?soy.$$escapeHtml(t.iconsMap[s].className):""}return o},JIRA.Projects.Sidebar.ProjectShortcuts.Templates.shortcutFormFields=function(t,e){return'<div class="project-shortcuts-field-group">'+aui.form.textField({name:"project-shortcuts-url-"+t.action,id:"project-shortcuts-url-"+t.action,labelContent:"Web address",placeholderText:"e.g. http://www.atlassian.com",extraClasses:"project-shortcuts-url",value:t.url?t.url:"",errorTexts:t.errors.urlError?[t.errors.urlError]:[]})+'<div class="field-group project-shortcuts-name">'+aui.form.label({forField:"project-shortcuts-name-"+t.action,content:"Name"})+'<div class="project-shortcuts-name-icon-block"><div class="project-shortcuts-icon-picker-block"></div>'+aui.form.input({name:"project-shortcuts-name-"+t.action,id:"project-shortcuts-name-"+t.action,placeholderText:"e.g. Atlassian website",extraClasses:"project-shortcuts-name-input"+(t.isWithIcon?" project-shortcuts-name-input-with-icon":""),value:t.name?t.name:"",type:"text"})+"</div>"+(t.errors.iconError?aui.form.fieldError({message:t.errors.iconError}):"")+(t.errors.nameError?aui.form.fieldError({message:t.errors.nameError}):"")+"</div></div>"},JIRA.Projects.Sidebar.ProjectShortcuts.Templates.iconsPicker=function(t,e){return"<span>"+JIRA.Projects.Sidebar.ProjectShortcuts.Templates.iconsList(t)+"</span>"+aui.dropdown2.trigger({menu:{id:"project-shortcuts-icons-list-"+t.cid},extraClasses:"aui-button project-shortcuts-icons-picker",iconClasses:"aui-icon aui-icon-large  "+soy.$$escapeHtml(t.icon.className),extraAttributes:{href:"#"}})},JIRA.Projects.Sidebar.ProjectShortcuts.Templates.iconsList=function(t,e){for(var o='<div id="project-shortcuts-icons-list-'+soy.$$escapeHtml(t.cid)+'" aria-hidden="true" class="aui-style-default aui-dropdown2 project-shortcuts-icons-list aui-dropdown2-section"><ul>',s=t.iconsList,a=s.length,i=0;i<a;i++){var r=s[i];o+='<li><a class="project-shortcuts-icons-icon" data-project-shortcuts-icons-id="'+soy.$$escapeHtml(r.name)+'"><span class="aui-icon aui-icon-large '+soy.$$escapeHtml(r.className)+'">'+soy.$$escapeHtml("Project shortcut icon")+"</span></a></li>"}return o+="</ul></div>"},JIRA.Projects.Sidebar.ProjectShortcuts.Templates.addDialog=function(t,e){return'<section role="dialog" id="add-shortcut-dialog" class="aui-layer aui-dialog2 aui-dialog2-medium" aria-hidden="false"><header class="aui-dialog2-header" id="add-shortcut-dialog-header"></header><div class="aui-dialog2-content"><div id="image-behind"><div id="image-behind-top"></div><div id="image-behind-bottom"></div></div><div id="add-shortcut-image-container"><div id="add-shortcut-dialog-image"></div></div><form action="" method="post" class="aui"><h1>'+soy.$$escapeHtml("Add shortcut")+"</h1><fieldset>"+JIRA.Projects.Sidebar.ProjectShortcuts.Templates.shortcutFormFields(soy.$$augmentMap(t,{action:"add"}))+'</fieldset><button type="submit" class="project-shortcuts-hidden-submit" tabindex="-1"></button></form></div><div class="aui-dialog2-footer"><div class="buttons-container"><div class="buttons"><button class="aui-button aui-button-primary project-shortcuts-submit">'+soy.$$escapeHtml("Add")+'</button><button class="aui-button aui-button-text aui-button-subtle project-shortcuts-cancel">'+soy.$$escapeHtml("Cancel")+"</button></div></div></div></section>"},JIRA.Projects.Sidebar.ProjectShortcuts.Templates.editDialogChrome=function(t,e){return'<section role="dialog" id="edit-project-shortcut-dialog" class="aui-layer aui-dialog2 aui-dialog2-small" aria-hidden="true" data-aui-remove-on-hide="true"><header class="aui-dialog2-header"><h2 class="aui-dialog2-header-main">'+soy.$$escapeHtml("Edit shortcut")+"</h2></header></section>"},JIRA.Projects.Sidebar.ProjectShortcuts.Templates.editDialog=function(t,e){return'<section role="dialog" id="add-shortcut-dialog" class="aui-layer aui-dialog2 aui-dialog2-medium" aria-hidden="false"><header class="aui-dialog2-header" id="add-shortcut-dialog-header"></header><div class="aui-dialog2-content"><div id="image-behind"><div id="image-behind-top"></div><div id="image-behind-bottom"></div></div><div id="add-shortcut-image-container"><div id="add-shortcut-dialog-image"></div></div><form class="aui" method="post"><h1>'+soy.$$escapeHtml("Edit shortcut")+"</h1>"+JIRA.Projects.Sidebar.ProjectShortcuts.Templates.shortcutFormFields(soy.$$augmentMap(t,{action:"edit"}))+'<button type="submit" class="project-shortcuts-hidden-submit" tabindex="-1"></button></form></div><footer class="aui-dialog2-footer"><div class="aui-dialog2-footer-actions"><button class="aui-button project-shortcuts-delete">'+soy.$$escapeHtml("Delete")+'</button><button class="aui-button aui-button-primary project-shortcuts-submit">'+soy.$$escapeHtml("Save")+'</button><button class="aui-button aui-button-link project-shortcuts-cancel aui-button-subtle">'+soy.$$escapeHtml("Cancel")+"</button></div></footer></section>"},JIRA.Projects.Sidebar.ProjectShortcuts.Templates.deleteDialog=function(t,e){return'<section role="dialog" id="delete-project-shortcut-dialog" class="aui-layer aui-dialog2 aui-dialog2-small" aria-hidden="true" data-aui-remove-on-hide="true"><header class="aui-dialog2-header"><h2 class="aui-dialog2-header-main">'+soy.$$escapeHtml("Delete shortcut")+'</h2></header><div class="aui-dialog2-content"><p>'+soy.$$escapeHtml("Are you sure you want to delete this shortcut?")+'</p></div><footer class="aui-dialog2-footer"><div class="aui-dialog2-footer-actions"><button class="aui-button aui-button-primary project-shortcuts-submit">'+soy.$$escapeHtml("Delete")+'</button><button class="aui-button aui-button-link project-shortcuts-cancel aui-button-subtle">'+soy.$$escapeHtml("Cancel")+"</button></div></footer></section>"};;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = 'jira-projects-module/sidebar/project-shortcuts/dialogs/Add.js' */
define("jira/projects/sidebar/projectShortcuts/dialogs/add",["underscore","jquery","jira/projects/libs/marionette","aui/flag"],function(e,t,i,o){return i.Controller.extend({initialize:function(t){e.bindAll(this,"hide","refresh","focusForm");var i=this;this.analyticsSave=!1,this.sidebarItem=t.sidebarItem,this.projectKey=t.projectKey,this.collection=t.collection,this.model=new JIRA.Projects.Sidebar.ProjectShortcuts.Entities.Shortcut(null,{projectKey:this.projectKey}),this.errorModel=new JIRA.Projects.Sidebar.ProjectShortcuts.Entities.ShortcutErrors(null,{model:this.model}),this.view=new JIRA.Projects.Sidebar.ProjectShortcuts.Views.AddDialogContent({model:this.model,errorModel:this.errorModel}),this.view.render(),this.dialog=AJS.dialog2(i.view.$el),this.dialog.show(),this.view.ui.url.focus(),this.dialog.on("hide",function(){i.trigger("dialog:close",i.analyticsSave)}),this.listenTo(this.view,"render",this.refresh),this.listenTo(this.view,"cancel",this.hideAndRender),this.listenTo(this.model,"save:success",function(){var e=new JIRA.Projects.Sidebar.ProjectShortcuts.Entities.Shortcut(this.model.toJSON(),{projectKey:this.projectKey});this.model.clear(),this.collection.add(e),this._addToADG3Sidebar(e),o({type:"success",title:"You have added the shortcut",body:"Nicely done! Your team is going to love this.",close:"auto"}),this.analyticsSave=!0,this.hide()})},_addToADG3Sidebar:function(e){JIRA.API.getSidebar().done(function(t){var i="sidebar-project-shortcuts",o="com.atlassian.jira.jira-projects-plugin:project.shortcut.default.link."+e.id,r={id:o,name:e.get("name"),url:e.get("url"),icon:"shortcut",canEdit:!0};t.addItem(i,r,!0)})},show:function(){this.dialog.show()},hide:function(){this.view.hideIconPicker(),this.dialog.hide()},refresh:function(){this.view.hideIconPicker()},hideAndRender:function(){this.hide()},focusForm:function(){this.view.ui.url.focus()}})}),AJS.namespace("JIRA.Projects.Sidebar.ProjectShortcuts.Dialogs.Add",null,require("jira/projects/sidebar/projectShortcuts/dialogs/add"));;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = 'jira-projects-module/sidebar/project-shortcuts/services/AvailableIcons.js' */
!function(){"use strict";AJS.namespace("JIRA.Projects.Sidebar.ProjectShortcuts.Services.AvailableIcons");var t=[],n={},e=!1;JIRA.Projects.Sidebar.ProjectShortcuts.Services.AvailableIcons={initialize:function(e){t=e||t,n={},_.each(e,function(t){n[t.name]=t})},getIconsList:function(){return t},getIconsMap:function(){return n},getAllIconsClasses:function(){return _.reduce(t,function(t,n){return t+n.className+" "},"")},getIconFromName:function(t){return this.getIconsMap()[t]?this.getIconsMap()[t]:this.getIconsList()[0]?this.getIconsList()[0]:{}},setWithIcons:function(t){e=t},isWithIcons:function(){return e}}}();;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = 'jira-projects-module/sidebar/project-shortcuts/entities/Shortcut.js' */
!function(){"use strict";function t(t){var e;try{e=JSON.parse(t.responseText)}catch(t){e={message:"We couldn\'t complete the action as there seems to be a communication issue."}}return e}AJS.namespace("JIRA.Projects.Sidebar.ProjectShortcuts.Entities.Shortcut"),JIRA.Projects.Sidebar.ProjectShortcuts.Entities.Shortcut=Backbone.Model.extend({defaults:{url:"",name:"",icon:"",type:""},initialize:function(t,e){if(!e||!e.projectKey)throw"Project key is required";this.projectKey=e.projectKey},urlRoot:function(){return AJS.contextPath()+"/rest/projects/1.0/project/"+encodeURIComponent(this.projectKey)+"/shortcut"},clear:function(){this.unset("id"),this.set("url",this.defaults.url),this.set("name",this.defaults.name),this.set("icon",this.defaults.icon),this.set("type",this.defaults.type)},save:function(){if(1!=this.saving){this.saving=!0;var e=this;e.trigger("save:start");var s=this.isNew()?"create":"update";this.sync(s,e).always(function(){e.saving=!1,e.trigger("save:finish")}).done(function(t){e.set(t,{silent:!0}),JIRA.trace("jira.projects.shortcuts."+s+".success"),e.trigger("save:success")}).fail(function(r){var i=t(r);JIRA.trace("jira.projects.shortcuts."+s+".fail"),e.trigger("save:failure",i)})}},destroy:function(){if(1!=this.saving){this.saving=!0;var e=this;e.trigger("remove:start");var s=Backbone.Model.prototype.destroy.apply(this,arguments);return s.always(function(){e.saving=!1,e.trigger("remove:finish")}).done(function(){e.trigger("remove:success")}).fail(function(s){var r=t(s);e.trigger("remove:failure",r)}),s}}})}();;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = 'jira-projects-module/sidebar/project-shortcuts/entities/ShortcutErrors.js' */
!function(){"use strict";AJS.namespace("JIRA.Projects.Sidebar.ProjectShortcuts.Entities.ShortcutErrors"),JIRA.Projects.Sidebar.ProjectShortcuts.Entities.ShortcutErrors=Backbone.Model.extend({defaults:{urlError:"",nameError:"",iconError:"",generalError:""},initialize:function(r,e){var s=e.model;this.listenTo(s,"save:failure remove:failure",function(r){this.set({urlError:r.errors&&r.errors.url,nameError:r.errors&&r.errors.name,iconError:r.errors&&r.errors.icon,generalError:r.message||r.errorMessages&&r.errorMessages.length>0?r.message||r.errorMessages[0]:void 0})}),this.listenTo(s,"save:success remove:success",this.clear)}})}();;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = 'jira-projects-module/sidebar/project-shortcuts/entities/Shortcuts.js' */
!function(){"use strict";AJS.namespace("JIRA.Projects.Sidebar.ProjectShortcuts.Entities.Shortcuts"),JIRA.Projects.Sidebar.ProjectShortcuts.Entities.Shortcuts=Backbone.Collection.extend({model:JIRA.Projects.Sidebar.ProjectShortcuts.Entities.Shortcut,initialize:function(t,e){this.projectKey=e.projectKey}})}();;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = 'jira-projects-module/sidebar/project-shortcuts/views/IconPickerContent.js' */
!function(i){"use strict";function c(i,c){var e,o=5,n=i.ui.iconList.find(".active"),s=i.ui.iconList.find("li").size();switch(c.keyCode){case AJS.keyCode.LEFT:e=-1;break;case AJS.keyCode.RIGHT:e=1;break;case AJS.keyCode.DOWN:e=o;break;case AJS.keyCode.UP:e=-o;break;default:e=0}var a=n.closest("li").index()+e;(a<0||a>=s)&&(a+=s,a%=s),n.removeClass(t),i.ui.icon.eq(a).addClass(t)}var e="projectShortcutsIconsId",t="active aui-dropdown2-active";AJS.namespace("JIRA.Projects.Sidebar.ProjectShortcuts.Views.IconPickerContent"),JIRA.Projects.Sidebar.ProjectShortcuts.Views.IconPickerContent=JIRA.Projects.Libs.Marionette.ItemView.extend({template:JIRA.Projects.Sidebar.ProjectShortcuts.Templates.iconsPicker,ui:{icon:".project-shortcuts-icons-icon",iconList:".project-shortcuts-icons-list",iconPicker:".project-shortcuts-icons-picker"},modelEvents:{"change:icon":function(){var i=this._modelIcon(),c=this.ui.iconPicker.children();c.removeClass(this.iconFactory.getAllIconsClasses()),c.addClass(i.className),this.ui.iconPicker.data(e,i.name)},"save:start":function(){this.ui.iconPicker.attr("aria-disabled",!0)},"save:finish":function(){this.ui.iconPicker.attr("aria-disabled",!1)}},events:{"keydown @ui.iconPicker":function(i){if(this.isPickerActive())switch(i.keyCode){case AJS.keyCode.LEFT:case AJS.keyCode.RIGHT:case AJS.keyCode.DOWN:case AJS.keyCode.UP:c(this,i),i.stopPropagation(),i.preventDefault(),this.ui.iconList.trigger("aui-dropdown2-item-selected");break;case AJS.keyCode.ESCAPE:this.hideIconPicker(),i.stopPropagation(),i.preventDefault()}}},initialize:function(i){this.iconFactory=JIRA.Projects.Sidebar.ProjectShortcuts.Services.AvailableIcons,this.analytics=JIRA.Projects.Sidebar.ProjectShortcuts.Analytics},onRender:function(){var c=this;this.ui.icon.on("click",function(){var t=i(this).data(e);c.analytics.iconChangeConfirmed(c.model,t),c.analyticsOldIconId="",c.analyticsIconClicked=!0,c.model.set("icon",t),c.ui.iconPicker.focus()}),this.ui.iconList.on("aui-dropdown2-show",function(){c.ui.iconPicker.focus(),c.analyticsIconClicked=!1,c.analytics.iconPickerOpened(c.model)}),this.ui.iconList.on("aui-dropdown2-hide",function(){c.analytics.iconPickerClosed(c.model,c.analyticsIconClicked)}),this.analyticsOldIconId="",this.ui.iconList.on("aui-dropdown2-item-selected",function(i){var t=AJS.$(this).find(".active").data(e);c.analyticsOldIconId&&c.analyticsOldIconId!==t&&c.analytics.iconChanged(c.model,t,c.analyticsOldIconId),c.analyticsOldIconId=t}),this.ui.iconPicker.data(e,this.model.get("icon"))},hideIconPicker:function(){this.isPickerActive()&&this.ui.iconPicker.trigger("aui-button-invoke")},isPickerActive:function(){return this.ui.iconPicker.hasClass("active")},_modelIcon:function(){return this.iconFactory.getIconFromName(this.model.get("icon"))},onFormSubmit:function(){this.model.set("icon",this.ui.iconPicker.data(e)||"")},focus:function(){this.ui.iconPicker.focus()},serializeData:function(){return{iconsList:this.iconFactory.getIconsList(),icon:this._modelIcon(),cid:this.cid}}})}(AJS.$);;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = 'jira-projects-module/sidebar/project-shortcuts/views/DialogContent.js' */
!function(t){"use strict";AJS.namespace("JIRA.Projects.Sidebar.ProjectShortcuts.Views.DialogContent"),JIRA.Projects.Sidebar.ProjectShortcuts.Views.DialogContent=JIRA.Projects.Libs.Marionette.LayoutView.extend({ui:{form:"form",inputs:"input, button",submit:".project-shortcuts-submit",cancel:".project-shortcuts-cancel",url:".project-shortcuts-url input",name:".project-shortcuts-name input"},regions:{iconPicker:".project-shortcuts-icon-picker-block"},events:{"click @ui.cancel":function(t){t.preventDefault(),this.model.clear(),this.setNameAutomagically=!0,this.errorModel.clear(),this.trigger("cancel")},"click @ui.submit":"formSubmit","submit @ui.form":"formSubmit","blur @ui.url":function(){this.ensureProtocolPrefix(),this.tryToAutomagicallyDeriveNameFromUrl()},"input @ui.url":function(){this.model.set("url",this.ui.url.val()),this.tryToAutomagicallyDeriveNameFromUrl()},"input @ui.name":function(){this.setNameAutomagically=!1,this.model.set("name",this.ui.name.val())},"keydown @ui.name":function(t){this.iconPickerContent&&t.shiftKey&&t.keyCode===AJS.keyCode.TAB&&(t.preventDefault(),this.iconPickerContent.focus())},"keydown @ui.url":function(t){this.iconPickerContent&&(t.shiftKey||t.keyCode!==AJS.keyCode.TAB||(t.preventDefault(),this.iconPickerContent.focus()))}},modelEvents:{"save:start":function(){this.ui.inputs.prop("disabled",!0),this.ui.submit.addClass("loading"),this.ui.submit.spin({className:"spinner"})},"save:finish":function(){this.ui.inputs.prop("disabled",!1),this.ui.submit.removeClass("loading"),this.ui.submit.spinStop({className:"spinner"})},"save:failure":function(){if(this.render(),this.errorModel.get("generalError")){var t=require("aui/flag");t({type:"error",title:"We couldn\'t save the shortcut for you",close:"auto",body:this.errorModel.get("generalError")})}return this.errorModel.get("nameError")&&this.ui.name.focus(),this.errorModel.get("urlError")&&this.ui.url.focus(),this},"save:success":function(){this.setNameAutomagically=!0}},initialize:function(t){this.errorModel=t.errorModel;var e=this.model.get("name");this.setNameAutomagically=0==e.length,this.iconFactory=JIRA.Projects.Sidebar.ProjectShortcuts.Services.AvailableIcons},serializeData:function(){return _.extend(this.model.toJSON(),{errors:this.errorModel.toJSON(),action:this.action,isWithIcon:this.iconFactory.isWithIcons()})},onRender:function(){this.iconFactory.isWithIcons()?(this.iconPickerContent=new JIRA.Projects.Sidebar.ProjectShortcuts.Views.IconPickerContent({model:this.model,action:this.action,observable:this}),this.getRegion("iconPicker").show(this.iconPickerContent)):delete this.iconPickerContent},hideIconPicker:function(){this.iconPickerContent&&this.iconPickerContent.hideIconPicker()},setName:function(t){this.ui.name.val(t),this.model.set("name",t)},setUrl:function(t){this.ui.url.val(t),this.model.set("url",t)},ensureProtocolPrefix:function(){var t=this.ui.url.val().trim();t.length>0&&!JIRA.Projects.Sidebar.ProjectShortcuts.Views.DialogContent.urlPattern.test(t)&&this.setUrl("http://"+t)},tryToAutomagicallyDeriveNameFromUrl:function(){var t=this.ui.url.val().trim();if(this.setNameAutomagically)if(JIRA.Projects.Sidebar.ProjectShortcuts.Views.DialogContent.urlOptionalProtocolPattern.test(t)){var e=JIRA.Projects.Sidebar.ProjectShortcuts.Views.DialogContent.urlOptionalProtocolPattern.exec(t);this.setName(e[3])}else this.setName(t)},formSubmit:function(t){t.preventDefault(),this.ensureProtocolPrefix(),this.tryToAutomagicallyDeriveNameFromUrl(),this.iconPickerContent&&this.iconPickerContent.onFormSubmit(),this.model.set({url:this.ui.url.val(),name:this.ui.name.val()}),this.model.save()}},{urlPattern:/^[a-zA-Z0-9]+:(\/\/)?([^\/]*).*/,urlOptionalProtocolPattern:/^([a-zA-Z0-9]+:(\/\/)?)?([^\/]*).*/})}(AJS.$);;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = 'jira-projects-module/sidebar/project-shortcuts/views/AddDialogContent.js' */
!function(){"use strict";AJS.namespace("JIRA.Projects.Sidebar.ProjectShortcuts.Views.AddDialogContent"),JIRA.Projects.Sidebar.ProjectShortcuts.Views.AddDialogContent=JIRA.Projects.Sidebar.ProjectShortcuts.Views.DialogContent.extend({template:JIRA.Projects.Sidebar.ProjectShortcuts.Templates.addDialog})}();;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = 'jira-projects-module/sidebar/project-shortcuts/views/EditDialogContent.js' */
define("jira/projects/sidebar/project-shortcuts/views/edit-dialog-content",["underscore"],function(e){"use strict";var t=JIRA.Projects.Sidebar.ProjectShortcuts.Views.DialogContent,r=t.extend({template:JIRA.Projects.Sidebar.ProjectShortcuts.Templates.editDialog});return r.extend({ui:e.extend({},t.prototype.ui,{delete:".project-shortcuts-delete"})})}),AJS.namespace("JIRA.Projects.Sidebar.ProjectShortcuts.Views.EditDialogContent",null,require("jira/projects/sidebar/project-shortcuts/views/edit-dialog-content"));;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = 'jira-projects-module/sidebar/project-shortcuts/dialogs/Edit.js' */
define("jira/projects/sidebar/project-shortcuts/dialogs/edit",["jquery","jira/projects/sidebar/project-shortcuts/views/edit-dialog-content","jira/projects/libs/marionette","aui/flag","jira/api/projects"],function(e,t,o,i,s){"use strict";return o.Controller.extend({initialize:function(o){var r=this;_.bindAll(this,"hide"),this.model=new JIRA.Projects.Sidebar.ProjectShortcuts.Entities.Shortcut(o.model.toJSON(),{projectKey:o.model.projectKey||o.model.collection.projectKey}),this.errorModel=new JIRA.Projects.Sidebar.ProjectShortcuts.Entities.ShortcutErrors((void 0),{model:this.model}),this.view=new t({model:this.model,errorModel:this.errorModel}),this.analyticsSave=!1,this.view.render();var c=e(JIRA.Projects.Sidebar.ProjectShortcuts.Templates.editDialogChrome({}));this.view.$el.appendTo(c),this.dialog=AJS.dialog2(c),this.dialog.show(),this.view.ui.url.focus();var d=s.getCurrentProjectType(),l=s.getCurrentProjectId();this.view.ui.delete.on("click",function(e){r.hide(),e.preventDefault(),AJS.trigger("analyticsEvent",{name:"jira.projects.shortcut.delete.dialog.opened",data:{isSave:!1,shortcutId:r.model.get("id"),projectId:l,projectType:d}});var t=new JIRA.Projects.Sidebar.ProjectShortcuts.Dialogs.Delete({model:r.model});r.listenToOnce(t,"dialog:close",function(e){AJS.trigger("analyticsEvent",{name:"jira.projects.shortcut.delete.dialog.closed",data:{isSave:e,shortcutId:r.model.get("id"),projectId:l,projectType:d}})})}),this.listenTo(this.model,"remove:success",function(){o.model.collection&&o.model.collection.remove(r.model),i({type:"success",body:"Shortcut deleted.",close:"auto"})}),this._onResizeWindow=function(){r.hideIconPicker()},e(window).on("resize",this._onResizeWindow),this.listenTo(this.view,"cancel",this.hide),this.listenTo(this.model,"save:success",function(){i({type:"success",body:"You have updated the shortcut.",close:"auto"}),this.analyticsSave=!0,this.hide(),o.model.set(r.model.toJSON())}),this.dialog.on("hide",function(){r.trigger("dialog:close",r.analyticsSave)})},hideIconPicker:function(){this.view.hideIconPicker()},hide:function(){this.dialog.hide(),e(window).off("resize",this._onResizeWindow)}})}),AJS.namespace("JIRA.Projects.Sidebar.ProjectShortcuts.Dialogs.Edit",null,require("jira/projects/sidebar/project-shortcuts/dialogs/edit"));;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = 'jira-projects-module/sidebar/project-shortcuts/views/Shortcut.js' */
!function(e){"use strict";AJS.namespace("JIRA.Projects.Sidebar.ProjectShortcuts.Views.Shortcut");var o=require("jira/projects/sidebar/project-shortcuts/dialogs/edit");JIRA.Projects.Sidebar.ProjectShortcuts.Views.Shortcut=JIRA.Projects.Libs.Marionette.ItemView.extend({template:JIRA.Projects.Sidebar.ProjectShortcuts.Templates.shortcut,initialize:function(){_.bindAll(this,"toggleDropdown"),this.iconFactory=JIRA.Projects.Sidebar.ProjectShortcuts.Services.AvailableIcons},ui:{del:".project-shortcuts-group__actions__delete",edit:".project-shortcuts-group__actions__edit",trigger:".project-shortcuts-group__actions",dropdown:".project-shortcuts-group__dropdown",link:".project-shortcuts-group__link"},modelEvents:{change:"render"},events:{"click @ui.link":function(){this.trigger("click:link",this.model)}},onRender:function(){var t=this;this.unwrapTemplate();var i=e(window),r=e(".aui-sidebar-body");this.ui.trigger.on("click",function(e){t.trigger("dropdown:click",t.model)}),this.ui.edit.on("click",function(e){e.preventDefault(),t.ui.trigger.blur();var i=new o({model:t.model});t.trigger("edit:open",t.model),t.listenToOnce(i,"dialog:close",function(e){t.trigger("edit:close",t.model,e)})}),this.ui.del.on("click",function(e){e.preventDefault(),t.ui.trigger.blur();var o=new JIRA.Projects.Sidebar.ProjectShortcuts.Dialogs.Delete({model:t.model});t.trigger("delete:open",t.model),t.listenToOnce(o,"dialog:close",function(e){t.trigger("delete:close",t.model,e)})}),this.ui.dropdown.on({"aui-dropdown2-show":function(){t.$el.addClass("aui-nav-selected"),r.one("scroll",t.toggleDropdown),i.one("scroll",t.toggleDropdown),t.ui.trigger.focus()},"aui-dropdown2-hide":function(){t.$el.removeClass("aui-nav-selected"),r.off("scroll",t.toggleDropdown),i.off("scroll",t.toggleDropdown)}})},serializeData:function(){var e=_.extend(this.model.toJSON(),{canManage:!0,isWithIcon:this.iconFactory.isWithIcons()});return this.iconFactory.isWithIcons()&&(e=_.extend(e,{iconsMap:JIRA.Projects.Sidebar.ProjectShortcuts.Services.AvailableIcons.getIconsMap()})),e},toggleDropdown:function(){this.ui.trigger.trigger("aui-button-invoke")}})}(AJS.$);;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = 'jira-projects-module/sidebar/project-shortcuts/views/ShortcutsList.js' */
!function(t){"use strict";AJS.namespace("JIRA.Projects.Sidebar.ProjectShortcuts.Views.List");var e=require("jira/projects/sidebar/projectShortcuts/dialogs/add");JIRA.Projects.Sidebar.ProjectShortcuts.Views.List=JIRA.Projects.Libs.Marionette.CompositeView.extend({template:JIRA.Projects.Sidebar.ProjectShortcuts.Templates.content,childView:JIRA.Projects.Sidebar.ProjectShortcuts.Views.Shortcut,ui:{itemsContainer:".aui-nav",description:".project-shortcuts-group__description",add:".project-shortcuts-group__add"},collectionEvents:{"add remove":function(){(0==this.collection.length&&0!=this.lastCollectionLength||0!=this.collection.length&&0==this.lastCollectionLength)&&(this.lastCollectionLength=this.collection.length,this.ui.description.toggleClass("hidden",this.collection.length>0),this.$el.toggleClass("project-shortcuts-group_empty",0==this.collection.length))}},initialize:function(){var e=this;JIRA.API.getSidebar().done(function(o){o.on("expand-end",function(){t(".aui-sidebar-submenu-dialog .project-shortcuts-group__dropdown").remove()},!0),o.on("collapse-start",function(){e.$(".project-shortcuts-group__actions.aui-dropdown2-active").trigger("aui-button-invoke")},!0)}),this.lastCollectionLength=this.collection.length},attachElContent:function(e){var o=new JIRA.Projects.Sidebar.Component.NavigationGroup({el:e});return JIRA.API.Sidebar.replaceGroup(this.options.targetGroup,o),this.$el=t(o.getElement()),this},onRender:function(){var t=new e({sidebarItem:JIRA.API.Sidebar.getGroup("project-shortcuts-group",!0).getItem("project-shortcut-add",!0),projectKey:this.collection.projectKey,collection:this.collection});this.listenTo(t,"dialog:open",function(){this.trigger("add:open")}),this.listenTo(t,"dialog:close",function(t){this.trigger("add:close",t)})},serializeData:function(){return{canManage:!0,numberOfShortcuts:this.collection.length}},attachBuffer:function(t,e){this.ui.itemsContainer.prepend(e)},onAddChild:function(t){this.ui.add.parent().before(t.$el)}})}(AJS.$);;
;
/* module-key = 'com.atlassian.jira.jira-projects-plugin:sidebar-project-shortcuts', location = 'jira-projects-module/sidebar/project-shortcuts/dialogs/Delete.js' */
!function(e){"use strict";AJS.namespace("JIRA.Projects.Sidebar.ProjectShortcuts.Dialogs.Delete"),JIRA.Projects.Sidebar.ProjectShortcuts.Dialogs.Delete=JIRA.Projects.Libs.Marionette.ItemView.extend({template:JIRA.Projects.Sidebar.ProjectShortcuts.Templates.deleteDialog,ui:{inputs:"input, button",submit:".project-shortcuts-submit",cancel:".project-shortcuts-cancel"},events:{"click @ui.cancel":function(e){e.preventDefault(),this.trigger("dialog:close",!1),this.dialog.hide()},"click @ui.submit":function(e){e.preventDefault(),this.trigger("dialog:close",!0),this.model.destroy({wait:!0})}},modelEvents:{"remove:start":function(){this.ui.inputs.prop("disabled",!0),this.ui.submit.addClass("loading"),this.ui.submit.spin({className:"spinner"})},"remove:finish":function(){this.ui.inputs.prop("disabled",!1),this.ui.submit.removeClass("loading"),this.ui.submit.spinStop({className:"spinner"}),this.dialog.hide(),JIRA.trace("jira.projects.shortcuts.deleted")},"remove:failure":function(e){if(e.message||e.errorMessages&&e.errorMessages.length>0){var t=require("aui/flag");t({type:"error",title:"We couldn\'t delete the shortcut for you",close:"auto",body:e.message||e.errorMessages[0]})}}},initialize:function(){this.render(),this.$el.appendTo("body"),this.dialog=AJS.dialog2(this.$el),this.dialog.show();var e=this;this.dialog.on("hide",function(){_.defer(function(){e.destroy()})})},onRender:function(){this.unwrapTemplate()}})}(AJS.$);;
;
/* module-key = 'com.atlassian.plugin.jslibs:bluebird-2.3.6', location = 'atlassian-jslibs/libs/bluebird/2.3.6/bluebird-2.3.6.js' */
/*
 The MIT License (MIT)

 Copyright (c) 2014 Petka Antonov

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:</p>

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

*/
(function(r){define("atlassian/libs/bluebird-2.3.6",function(){var t={};r(t);return"undefined"!==typeof exports?module.exports.noConflict():t.Promise.noConflict()})})(function(r){var t=function(){return function d(o,b,a){function k(f,j){if(!b[f]){if(!o[f]){var l="function"==typeof require&&require;if(!j&&l)return l(f,!0);if(m)return m(f,!0);throw Error("Cannot find module '"+f+"'");}l=b[f]={exports:{}};o[f][0].call(l.exports,function(a){var h=o[f][1][a];return k(h?h:a)},l,l.exports,d,o,b,a)}return b[f].exports}
for(var m="function"==typeof require&&require,i=0;i<a.length;i++)k(a[i]);return k}({1:[function(d,o){o.exports=function(b){function a(a){var a=new k(a),b=a.promise();if(b.isRejected())return b;a.setHowMany(1);a.setUnwrap();a.init();return b}var k=b._SomePromiseArray;b.any=function(b){return a(b)};b.prototype.any=function(){return a(this)}}},{}],2:[function(d,o){function b(){this._isTickUsed=!1;this._schedule=a;this._length=0;this._lateBuffer=new k(16);this._functionBuffer=new k(65536);var b=this;
this.consumeFunctionBuffer=function(){b._consumeFunctionBuffer()}}var a=d("./schedule.js"),k=d("./queue.js"),m=d("./util.js").errorObj,i=d("./util.js").tryCatch1,f="undefined"!==typeof process?process:void 0;b.prototype.haveItemsQueued=function(){return 0<this._length};b.prototype.invokeLater=function(a,b,n){void 0!==f&&(null!=f.domain&&!a.domain)&&(a=f.domain.bind(a));this._lateBuffer.push(a,b,n);this._queueTick()};b.prototype.invoke=function(a,b,n){void 0!==f&&(null!=f.domain&&!a.domain)&&(a=f.domain.bind(a));
var h=this._functionBuffer;h.push(a,b,n);this._length=h.length();this._queueTick()};b.prototype._consumeFunctionBuffer=function(){for(var a=this._functionBuffer;0<a.length();){var b=a.shift(),n=a.shift(),h=a.shift();b.call(n,h)}this._reset();this._consumeLateBuffer()};b.prototype._consumeLateBuffer=function(){for(var a=this._lateBuffer;0<a.length();){var b=a.shift(),n=a.shift(),h=a.shift(),n=i(b,n,h);if(n===m)if(this._queueTick(),null!=b.domain)b.domain.emit("error",n.e);else throw n.e;}};b.prototype._queueTick=
function(){this._isTickUsed||(this._schedule(this.consumeFunctionBuffer),this._isTickUsed=!0)};b.prototype._reset=function(){this._isTickUsed=!1;this._length=0};o.exports=new b},{"./queue.js":25,"./schedule.js":28,"./util.js":35}],3:[function(d,o){var b=d("./promise.js")();o.exports=b},{"./promise.js":20}],4:[function(d,o){var b=Object.create;if(b){var a=b(null),k=b(null);a[" size"]=k[" size"]=0}o.exports=function(b){function i(a){return new Function("obj","                                             \n        'use strict'                                                         \n        var len = this.length;                                               \n        switch(len) {                                                        \n            case 1: return obj.methodName(this[0]);                          \n            case 2: return obj.methodName(this[0], this[1]);                 \n            case 3: return obj.methodName(this[0], this[1], this[2]);        \n            case 0: return obj.methodName();                                 \n            default: return obj.methodName.apply(obj, this);                 \n        }                                                                    \n        ".replace(/methodName/g,
a))}function f(a){return new Function("obj","                                             \n        'use strict';                                                        \n        return obj.propertyName;                                             \n        ".replace("propertyName",a))}function j(a,g,c){var b=c[a];if("function"!==typeof b){if(!q(a))return null;b=g(a);c[a]=b;c[" size"]++;if(512<c[" size"]){a=Object.keys(c);for(g=0;256>g;++g)delete c[a[g]];c[" size"]=a.length-256}}return b}function l(a){return a[this.pop()].apply(a,
this)}function n(a){return a[this]}function h(a){return a[this]}var c=d("./util.js"),e=c.canEvaluate,q=c.isIdentifier;b.prototype.call=function(p){for(var g=arguments.length,c=Array(g-1),b=1;b<g;++b)c[b-1]=arguments[b];if(e&&(g=j(p,i,a),null!==g))return this._then(g,void 0,void 0,c,void 0);c.push(p);return this._then(l,void 0,void 0,c,void 0)};b.prototype.get=function(a){var g;"number"!==typeof a?e?(g=j(a,f,k),g=null!==g?g:n):g=n:g=h;return this._then(g,void 0,void 0,a,void 0)}}},{"./util.js":35}],
5:[function(d,o){o.exports=function(b,a){var k=d("./errors.js"),m=k.canAttach,i=d("./async.js"),f=k.CancellationError;b.prototype._cancel=function(a){if(!this.isCancellable())return this;for(var b,n=this;void 0!==(b=n._cancellationParent)&&b.isCancellable();)n=b;n._attachExtraTrace(a);n._rejectUnchecked(a)};b.prototype.cancel=function(a){if(!this.isCancellable())return this;a=void 0!==a?m(a)?a:Error(a+""):new f;i.invokeLater(this._cancel,this,a);return this};b.prototype.cancellable=function(){if(this._cancellable())return this;
this._setCancellable();this._cancellationParent=void 0;return this};b.prototype.uncancellable=function(){var m=new b(a);m._propagateFrom(this,6);m._follow(this);m._unsetCancellable();return m};b.prototype.fork=function(a,b,n){a=this._then(a,b,n,void 0,void 0);a._setCancellable();a._cancellationParent=void 0;return a}}},{"./async.js":2,"./errors.js":10}],6:[function(d,o){o.exports=function(){function b(a){var b;if("function"===typeof a)b="[function "+(a.name||"anonymous")+"]";else{b=a.toString();if(/\[object [a-zA-Z0-9$_]+\]/.test(b))try{b=
JSON.stringify(a)}catch(c){}0===b.length&&(b="(empty array)")}a=41>b.length?b:b.substr(0,38)+"...";return"(<"+a+">, no stack trace)"}function a(b,h){this.captureStackTrace(a,h)}var k=d("./util.js").inherits,m=d("./es5.js").defineProperty,i=RegExp("\\b(?:[a-zA-Z0-9.]+\\$_\\w+|tryCatch(?:1|2|3|4|Apply)|new \\w*PromiseArray|\\w*PromiseArray\\.\\w*PromiseArray|setTimeout|CatchFilter\\$_\\w+|makeNodePromisified|processImmediate|process._tickCallback|nextTick|Async\\$\\w+)\\b"),f=null,j=null;k(a,Error);
a.prototype.captureStackTrace=function(a,b){l(this,a,b)};a.possiblyUnhandledRejection=function(a){"object"===typeof console&&(a="object"===typeof a||"function"===typeof a?"Possibly unhandled "+j(a.stack,a):"Possibly unhandled "+String(a),"function"===typeof console.error||"object"===typeof console.error?console.error(a):("function"===typeof console.log||"object"===typeof console.log)&&console.log(a))};a.combine=function(a,b){for(var c=a.length-1,e=b.length-1;0<=e;--e)if(a[c]===b[e])a.pop(),c--;else break;
a.push("From previous event:");for(var c=a.concat(b),q=[],e=0,p=c.length;e<p;++e)i.test(c[e])&&f.test(c[e])||0<e&&!f.test(c[e])&&"From previous event:"!==c[e]||q.push(c[e]);return q};a.protectErrorMessageNewlines=function(a){for(var b=0;b<a.length&&!f.test(a[b]);++b);if(!(1>=b)){for(var c=[],e=0;e<b;++e)c.push(a.shift());a.unshift(c.join("\u0002\x00\u0001"))}};a.isSupported=function(){return"function"===typeof l};var l=function h(){if("number"===typeof Error.stackTraceLimit&&"function"===typeof Error.captureStackTrace){f=
/^\s*at\s*/;j=function(a,g){return"string"===typeof a?a:void 0!==g.name&&void 0!==g.message?g.name+". "+g.message:b(g)};var a=Error.captureStackTrace;return function(b,g){a(b,g)}}var e=Error();if("string"===typeof e.stack&&"function"===typeof"".startsWith&&e.stack.startsWith("stackDetection@")&&"stackDetection"===h.name){m(Error,"stackTraceLimit",{writable:!0,enumerable:!1,configurable:!1,value:25});f=/@/;var q=/[@\n]/;j=function(a,g){return"string"===typeof a?g.name+". "+g.message+"\n"+a:void 0!==
g.name&&void 0!==g.message?g.name+". "+g.message:b(g)};return function(a){for(var b=Error().stack.split(q),c=b.length,e="",h=0;h<c;h+=2)e+=b[h],e+="@",e+=b[h+1],e+="\n";a.stack=e}}j=function(a,g){return"string"===typeof a?a:("object"===typeof g||"function"===typeof g)&&void 0!==g.name&&void 0!==g.message?g.name+". "+g.message:b(g)};return null}();return a}},{"./es5.js":12,"./util.js":35}],7:[function(d,o){o.exports=function(b){function a(a,b,c){this._instances=a;this._callback=b;this._promise=c}var k=
d("./util.js"),m=d("./errors.js"),i=k.tryCatch1,f=k.errorObj,j=d("./es5.js").keys,l=m.TypeError;a.prototype.doFilter=function(a){for(var h=this._callback,c=this._promise._boundTo,e=0,q=this._instances.length;e<q;++e){var p=this._instances[e],g=p===Error||null!=p&&p.prototype instanceof Error;if(g&&a instanceof p)return a=i(h,c,a),a===f?(b.e=a.e,b):a;if("function"===typeof p&&!g)if(g={},p=i(p,g,a),p!==f&&j(g).length&&(f.e=new l("Catch filter must inherit from Error or be a simple predicate function"),
p=f),p===f){a=m.canAttach(f.e)?f.e:Error(f.e+"");this._promise._attachExtraTrace(a);a=f.e;break}else if(p)return a=i(h,c,a),a===f?(b.e=a.e,b):a}b.e=a;return b};return a}},{"./errors.js":10,"./es5.js":12,"./util.js":35}],8:[function(d,o){var b=d("./util.js"),a=b.isPrimitive,k=b.wrapsPrimitiveReceiver;o.exports=function(b){var i=function(){return this},f=function(){throw this;},d=function(a,b){if(1===b)return function(){throw a;};if(2===b)return function(){return a}};b.prototype["return"]=b.prototype.thenReturn=
function(b){return k&&a(b)?this._then(d(b,2),void 0,void 0,void 0,void 0):this._then(i,void 0,void 0,b,void 0)};b.prototype["throw"]=b.prototype.thenThrow=function(b){return k&&a(b)?this._then(d(b,1),void 0,void 0,void 0,void 0):this._then(f,void 0,void 0,b,void 0)}}},{"./util.js":35}],9:[function(d,o){o.exports=function(b,a){var k=b.reduce;b.prototype.each=function(b){return k(this,b,null,a)};b.each=function(b,i){return k(b,i,null,a)}}},{}],10:[function(d,o){function b(a,b){function p(c){if(!(this instanceof
p))return new p(c);this.message="string"===typeof c?c:b;this.name=a;Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}i(p,Error);return p}function a(a){this.name="OperationalError";this.cause=this.message=a;this.isOperational=!0;a instanceof Error?(this.message=a.message,this.stack=a.stack):Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}var k=d("./es5.js").freeze,m=d("./util.js"),i=m.inherits,f=m.notEnumerableProp,j,l,m=b("CancellationError","cancellation error"),
n=b("TimeoutError","timeout error"),h=b("AggregateError","aggregate error");try{j=TypeError,l=RangeError}catch(c){j=b("TypeError","type error"),l=b("RangeError","range error")}for(var e="join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "),q=0;q<e.length;++q)"function"===typeof Array.prototype[e[q]]&&(h.prototype[e[q]]=Array.prototype[e[q]]);h.prototype.length=0;h.prototype.isOperational=!0;var p=0;h.prototype.toString=function(){var a=
Array(4*p+1).join(" "),b="\n"+a+"AggregateError of:\n";p++;for(var a=Array(4*p+1).join(" "),c=0;c<this.length;++c){for(var e=this[c]===this?"[Circular AggregateError]":this[c]+"",e=e.split("\n"),h=0;h<e.length;++h)e[h]=a+e[h];e=e.join("\n");b+=e+"\n"}p--;return b};i(a,Error);e=Error.__BluebirdErrorTypes__;e||(e=k({CancellationError:m,TimeoutError:n,OperationalError:a,RejectionError:a,AggregateError:h}),f(Error,"__BluebirdErrorTypes__",e));o.exports={Error:Error,TypeError:j,RangeError:l,CancellationError:e.CancellationError,
OperationalError:e.OperationalError,TimeoutError:e.TimeoutError,AggregateError:e.AggregateError,originatesFromRejection:function(b){return b==null?false:b instanceof a||b.isOperational===true},markAsOriginatingFromRejection:function(a){try{f(a,"isOperational",true)}catch(b){}},canAttach:function(a){return a instanceof Error}}},{"./es5.js":12,"./util.js":35}],11:[function(d,o){o.exports=function(b){var a=d("./errors.js").TypeError;return function(k){var k=new a(k),m=b.rejected(k),i=m._peekContext();
null!=i&&i._attachExtraTrace(k);return m}}},{"./errors.js":10}],12:[function(d,o){var b=function(){return void 0===this}();if(b)o.exports={freeze:Object.freeze,defineProperty:Object.defineProperty,keys:Object.keys,getPrototypeOf:Object.getPrototypeOf,isArray:Array.isArray,isES5:b};else{var a={}.hasOwnProperty,k={}.toString,m={}.constructor.prototype;o.exports={isArray:function(a){try{return"[object Array]"===k.call(a)}catch(b){return!1}},keys:function(b){var f=[],m;for(m in b)a.call(b,m)&&f.push(m);
return f},defineProperty:function(a,b,m){a[b]=m.value;return a},freeze:function(a){return a},getPrototypeOf:function(a){try{return Object(a).constructor.prototype}catch(b){return m}},isES5:b}}},{}],13:[function(d,o){o.exports=function(b,a){var k=b.map;b.prototype.filter=function(b,d){return k(this,b,d,a)};b.filter=function(b,d,f){return k(b,d,f,a)}}},{}],14:[function(d,o){o.exports=function(b,a,k){function m(){return this}function i(){throw this;}function f(a,b,g){g=h&&c(b)?g?function(){return b}:
function(){throw b;}:g?m:i;return a._then(g,e,void 0,b,void 0)}function j(c){var p=this.promise,g=this.handler,g=p._isBound()?g.call(p._boundTo):g();return void 0!==g&&(g=k(g,void 0),g instanceof b)?f(g,c,p.isFulfilled()):p.isRejected()?(a.e=c,a):c}function l(a){var c=this.promise,g=this.handler,c=c._isBound()?g.call(c._boundTo,a):g(a);return void 0!==c&&(c=k(c,void 0),c instanceof b)?f(c,a,!0):a}var n=d("./util.js"),h=n.wrapsPrimitiveReceiver,c=n.isPrimitive,e=n.thrower;b.prototype._passThroughHandler=
function(a,b){return"function"!==typeof a?this.then():this._then(b?j:l,b?j:void 0,void 0,{promise:this,handler:a},void 0)};b.prototype.lastly=b.prototype["finally"]=function(a){return this._passThroughHandler(a,!0)};b.prototype.tap=function(a){return this._passThroughHandler(a,!1)}}},{"./util.js":35}],15:[function(d,o){o.exports=function(b,a,k,m){function i(a,g){for(var h=c,q=b,n=g.length,l=0;l<n;++l){var f=e(g[l],void 0,a);if(f===h)return q.reject(h.e);f=m(f,i);if(f instanceof q)return f}return null}
function f(a,c,e){(this._promise=new b(k))._setTrace(void 0);this._generatorFunction=a;this._receiver=c;this._generator=void 0;this._yieldHandlers="function"===typeof e?[e].concat(q):q}var j=d("./errors.js"),l=j.TypeError,n=d("./util.js").deprecated,h=d("./util.js"),c=h.errorObj,e=h.tryCatch1,q=[];f.prototype.promise=function(){return this._promise};f.prototype._run=function(){this._generator=this._generatorFunction.call(this._receiver);this._receiver=this._generatorFunction=void 0;this._next(void 0)};
f.prototype._continue=function(a){if(a===c){this._generator=void 0;var e=j.canAttach(a.e)?a.e:Error(a.e+"");this._promise._attachExtraTrace(e);this._promise._reject(a.e,e)}else if(e=a.value,!0===a.done)this._generator=void 0,this._promise._tryFollow(e)||this._promise._fulfill(e);else{a=m(e,void 0);if(!(a instanceof b)&&(a=i(a,this._yieldHandlers),null===a)){this._throw(new l("A value was yielded that could not be treated as a promise"));return}a._then(this._next,this._throw,void 0,this,null)}};f.prototype._throw=
function(a){j.canAttach(a)&&this._promise._attachExtraTrace(a);this._continue(e(this._generator["throw"],this._generator,a))};f.prototype._next=function(a){this._continue(e(this._generator.next,this._generator,a))};b.coroutine=function(a,b){if("function"!==typeof a)throw new l("generatorFunction must be a function");var c=Object(b).yieldHandler;return function(){var b=a.apply(this,arguments),e=new f(void 0,void 0,c);e._generator=b;e._next(void 0);return e.promise()}};b.coroutine.addYieldHandler=function(a){if("function"!==
typeof a)throw new l("fn must be a function");q.push(a)};b.spawn=function(c){n("Promise.spawn is deprecated. Use Promise.coroutine instead.");if("function"!==typeof c)return a("generatorFunction must be a function");var c=new f(c,this),e=c.promise();c._run(b.spawn);return e}}},{"./errors.js":10,"./util.js":35}],16:[function(d,o){o.exports=function(b,a,k,m){var i=d("./util.js"),f=i.canEvaluate,j=i.tryCatch1,l=i.errorObj;if(f){for(var i=function(a){for(var b=[],c=1;c<=a;++c)b.push("holder.p"+c);return new Function("holder",
"                                      \n            'use strict';                                                    \n            var callback = holder.fn;                                        \n            return callback(values);                                         \n            ".replace(/values/g,b.join(", ")))},n=[],h=[void 0],c=1;5>=c;++c)n.push(new Function("value","holder","                             \n            'use strict';                                                    \n            holder.pIndex = value;                                           \n            holder.checkFulfillment(this);                                   \n            ".replace(/Index/g,
c))),h.push(i(c));var e=function(a,b){this.p1=this.p2=this.p3=this.p4=this.p5=null;this.fn=b;this.total=a;this.now=0};e.prototype.callers=h;e.prototype.checkFulfillment=function(a){var b=this.now;b++;var c=this.total;b>=c?(b=j(this.callers[c],void 0,this),b===l?a._rejectUnchecked(b.e):a._tryFollow(b)||a._fulfillUnchecked(b)):this.now=b}}b.join=function(){var c=arguments.length-1,h;if(0<c&&"function"===typeof arguments[c]&&(h=arguments[c],6>c&&f)){var g=new b(m);g._setTrace(void 0);h=new e(c,h);for(var l=
g._reject,d=n,i=0;i<c;++i){var j=k(arguments[i],void 0);j instanceof b?j.isPending()?j._then(d[i],l,void 0,g,h):j.isFulfilled()?d[i].call(g,j._settledValue,h):(g._reject(j._settledValue),j._unsetRejectionIsUnhandled()):d[i].call(g,j,h)}return g}c=arguments.length;g=Array(c);for(l=0;l<c;++l)g[l]=arguments[l];g=(new a(g)).promise();return void 0!==h?g.spread(h):g}}},{"./util.js":35}],17:[function(d,o){o.exports=function(b,a,k,m,i){function f(a,b,c,h){this.constructor$(a);this._callback=b;this._preservedValues=
h===i?Array(this.length()):null;this._limit=c;this._inFlight=0;this._queue=1<=c?[]:e;this._init$(void 0,-2)}function j(a,b,c,e){c="object"===typeof c&&null!==c?c.concurrency:0;c="number"===typeof c&&isFinite(c)&&1<=c?c:0;return new f(a,b,c,e)}var l=d("./util.js"),n=l.tryCatch3,h=l.errorObj,c={},e=[];l.inherits(f,a);f.prototype._init=function(){};f.prototype._promiseFulfilled=function(a,e){var g=this._values;if(null!==g){var l=this.length(),f=this._preservedValues,d=this._limit;if(g[e]===c){if(g[e]=
a,1<=d&&(this._inFlight--,this._drainQueue(),this._isResolved()))return}else{if(1<=d&&this._inFlight>=d){g[e]=a;this._queue.push(e);return}null!==f&&(f[e]=a);var k=n(this._callback,this._promise._boundTo,a,e,l);if(k===h)return this._reject(k.e);var i=m(k,void 0);if(i instanceof b){if(i.isPending())return 1<=d&&this._inFlight++,g[e]=c,i._proxyPromiseArray(this,e);if(i.isFulfilled())k=i.value();else return i._unsetRejectionIsUnhandled(),this._reject(i.reason())}g[e]=k}++this._totalResolved>=l&&(null!==
f?this._filter(g,f):this._resolve(g))}};f.prototype._drainQueue=function(){for(var a=this._queue,b=this._limit,c=this._values;0<a.length&&this._inFlight<b;){var e=a.pop();this._promiseFulfilled(c[e],e)}};f.prototype._filter=function(a,b){for(var c=b.length,e=Array(c),h=0,l=0;l<c;++l)a[l]&&(e[h++]=b[l]);e.length=h;this._resolve(e)};f.prototype.preservedValues=function(){return this._preservedValues};b.prototype.map=function(a,b){return"function"!==typeof a?k("fn must be a function"):j(this,a,b,null).promise()};
b.map=function(a,b,c,e){return"function"!==typeof b?k("fn must be a function"):j(a,b,c,e).promise()}}},{"./util.js":35}],18:[function(d,o){o.exports=function(b){function a(a){throw a;}function k(b,e){if(!f.isArray(b))return m(b,e);var l=f.tryCatchApply(this,[null].concat(b),e);l===h&&j.invokeLater(a,void 0,l.e)}function m(b,e){var f=void 0===b?n(this,e,null):l(this,e,null,b);f===h&&j.invokeLater(a,void 0,f.e)}function i(b,e){var l=n(this,e,b);l===h&&j.invokeLater(a,void 0,l.e)}var f=d("./util.js"),
j=d("./async.js"),l=f.tryCatch2,n=f.tryCatch1,h=f.errorObj;b.prototype.nodeify=function(a,b){if("function"==typeof a){var h=m;void 0!==b&&Object(b).spread&&(h=k);this._then(h,i,void 0,a,this._boundTo)}return this}}},{"./async.js":2,"./util.js":35}],19:[function(d,o){o.exports=function(b,a){var k=d("./util.js"),m=d("./async.js"),i=d("./errors.js"),f=k.tryCatch1,j=k.errorObj;b.prototype.progressed=function(a){return this._then(void 0,void 0,a,void 0,void 0)};b.prototype._progress=function(a){this._isFollowingOrFulfilledOrRejected()||
this._progressUnchecked(a)};b.prototype._clearFirstHandlerData$Base=b.prototype._clearFirstHandlerData;b.prototype._clearFirstHandlerData=function(){this._clearFirstHandlerData$Base();this._progressHandler0=void 0};b.prototype._progressHandlerAt=function(a){return 0===a?this._progressHandler0:this[(a<<2)+a-5+2]};b.prototype._doProgressWith=function(a){var n=a.promise,a=f(a.handler,a.receiver,a.value);if(a===j){if(null!=a.e&&"StopProgressPropagation"!==a.e.name){var h=i.canAttach(a.e)?a.e:Error(a.e+
"");n._attachExtraTrace(h);n._progress(a.e)}}else a instanceof b?a._then(n._progress,null,null,n,void 0):n._progress(a)};b.prototype._progressUnchecked=function(f){if(this.isPending())for(var n=this._length(),h=this._progress,c=0;c<n;c++){var e=this._progressHandlerAt(c),d=this._promiseAt(c);if(d instanceof b)"function"===typeof e?m.invoke(this._doProgressWith,this,{handler:e,promise:d,receiver:this._receiverAt(c),value:f}):m.invoke(h,d,f);else{var p=this._receiverAt(c);"function"===typeof e?e.call(p,
f,d):p instanceof b&&p._isProxied()?p._progressUnchecked(f):p instanceof a&&p._promiseProgressed(f,d)}}}}},{"./async.js":2,"./errors.js":10,"./util.js":35}],20:[function(d,o){var b;"undefined"!==typeof Promise&&(b=Promise);o.exports=function(){function a(b){if("function"!==typeof b)throw new s("the promise constructor requires a resolver function");if(this.constructor!==a)throw new s("the promise constructor cannot be invoked directly");this._bitField=0;this._boundTo=this._settledValue=this._receiver0=
this._promise0=this._rejectionHandler0=this._fulfillmentHandler0=void 0;b!==l&&this._resolveFromResolver(b)}function k(a){return a[0]}function m(){return new a.PromiseInspection(this)}var i=d("./util.js"),f=d("./async.js"),j=d("./errors.js"),l=function(){},n={},h={e:null},c=d("./thenables.js")(a,l),e=d("./promise_array.js")(a,l,c),q=d("./captured_trace.js")(),p=d("./catch_filter.js")(h),g=d("./promise_resolver.js"),o=i.isArray,u=i.errorObj,z=i.tryCatch1,D=i.tryCatch2,B=i.tryCatchApply,G=j.RangeError,
s=j.TypeError,H=j.CancellationError,I=j.TimeoutError,E=j.OperationalError,J=j.originatesFromRejection,F=j.markAsOriginatingFromRejection,x=j.canAttach,r=i.thrower,y=d("./errors_api_rejection")(a),t=function(){return new s("circular promise resolution chain")};a.prototype.bind=function(b){var e=c(b,void 0),h=new a(l);e instanceof a?(b=e.then(function(a){h._setBoundTo(a)}),b=a.all([this,b]).then(k),h._follow(b)):(h._follow(this),h._setBoundTo(b));h._propagateFrom(this,3);return h};a.prototype.toString=
function(){return"[object Promise]"};a.prototype.caught=a.prototype["catch"]=function(b){var c=arguments.length;if(1<c){var e=Array(c-1),h=0,g;for(g=0;g<c-1;++g){var f=arguments[g];if("function"===typeof f)e[h++]=f;else return c=new s("A catch filter must be an error constructor or a filter function"),this._attachExtraTrace(c),a.reject(c)}e.length=h;b=arguments[g];this._resetTrace();c=new p(e,b,this);return this._then(void 0,c.doFilter,void 0,c,void 0)}return this._then(void 0,b,void 0,void 0,void 0)};
a.prototype.reflect=function(){return this._then(m,m,void 0,this,void 0)};a.prototype.then=function(a,b,c){return this._then(a,b,c,void 0,void 0)};a.prototype.done=function(a,b,c){this._then(a,b,c,void 0,void 0)._setIsFinal()};a.prototype.spread=function(a,b){return this._then(a,b,void 0,n,void 0)};a.prototype.isCancellable=function(){return!this.isResolved()&&this._cancellable()};a.prototype.toJSON=function(){var a={isFulfilled:!1,isRejected:!1,fulfillmentValue:void 0,rejectionReason:void 0};this.isFulfilled()?
(a.fulfillmentValue=this._settledValue,a.isFulfilled=!0):this.isRejected()&&(a.rejectionReason=this._settledValue,a.isRejected=!0);return a};a.prototype.all=function(){return(new e(this)).promise()};a.is=function(b){return b instanceof a};a.all=function(a){return(new e(a)).promise()};a.prototype.error=function(a){return this.caught(J,a)};a.prototype._resolveFromSyncValue=function(b){if(b===u)this._cleanValues(),this._setRejected(),this._settledValue=b.e,this._ensurePossibleRejectionHandled();else{var e=
c(b,void 0);e instanceof a?this._follow(e):(this._cleanValues(),this._setFulfilled(),this._settledValue=b)}};a.method=function(b){if("function"!==typeof b)throw new s("fn must be a function");return function(){var c;switch(arguments.length){case 0:c=z(b,this,void 0);break;case 1:c=z(b,this,arguments[0]);break;case 2:c=D(b,this,arguments[0],arguments[1]);break;default:c=arguments.length;for(var e=Array(c),h=0;h<c;++h)e[h]=arguments[h];c=B(b,e,this)}e=new a(l);e._setTrace(void 0);e._resolveFromSyncValue(c);
return e}};a.attempt=a["try"]=function(b,c,e){if("function"!==typeof b)return y("fn must be a function");b=o(c)?B(b,c,e):z(b,e,c);c=new a(l);c._setTrace(void 0);c._resolveFromSyncValue(b);return c};a.defer=a.pending=function(){var b=new a(l);b._setTrace(void 0);return new g(b)};a.bind=function(b){var e=c(b,void 0),h=new a(l);h._setTrace(void 0);e instanceof a?(b=e.then(function(a){h._setBoundTo(a)}),h._follow(b)):(h._setBoundTo(b),h._setFulfilled());return h};a.cast=function(b){b=c(b,void 0);if(!(b instanceof
a)){var e=b,b=new a(l);b._setTrace(void 0);b._setFulfilled();b._cleanValues();b._settledValue=e}return b};a.resolve=a.fulfilled=a.cast;a.reject=a.rejected=function(b){var c=new a(l);c._setTrace(void 0);F(b);c._cleanValues();c._setRejected();c._settledValue=b;x(b)||c._setCarriedStackTrace(Error(b+""));c._ensurePossibleRejectionHandled();return c};a.onPossiblyUnhandledRejection=function(a){q.possiblyUnhandledRejection="function"===typeof a?a:void 0};var C;a.onUnhandledRejectionHandled=function(a){C=
"function"===typeof a?a:void 0};var v=!!("undefined"!==typeof process&&"string"===typeof process.execPath&&"object"===typeof process.env&&(process.env.BLUEBIRD_DEBUG||"development"===process.env.NODE_ENV));a.longStackTraces=function(){if(f.haveItemsQueued()&&!1===v)throw Error("cannot enable long stack traces after promises have been created");v=q.isSupported()};a.hasLongStackTraces=function(){return v&&q.isSupported()};a.prototype._then=function(b,c,e,h,g){var p=void 0!==g,g=p?g:new a(l);p||(v&&
(p=this._peekContext()===this._traceParent,g._traceParent=p?this._traceParent:this),g._propagateFrom(this,7));b=this._addCallbacks(b,c,e,g,h);this.isResolved()&&f.invoke(this._queueSettleAt,this,b);return g};a.prototype._length=function(){return this._bitField&262143};a.prototype._isFollowingOrFulfilledOrRejected=function(){return 0<(this._bitField&939524096)};a.prototype._isFollowing=function(){return 536870912===(this._bitField&536870912)};a.prototype._setLength=function(a){this._bitField=this._bitField&
-262144|a&262143};a.prototype._setFulfilled=function(){this._bitField|=268435456};a.prototype._setRejected=function(){this._bitField|=134217728};a.prototype._setFollowing=function(){this._bitField|=536870912};a.prototype._setIsFinal=function(){this._bitField|=33554432};a.prototype._isFinal=function(){return 0<(this._bitField&33554432)};a.prototype._cancellable=function(){return 0<(this._bitField&67108864)};a.prototype._setCancellable=function(){this._bitField|=67108864};a.prototype._unsetCancellable=
function(){this._bitField&=-67108865};a.prototype._setRejectionIsUnhandled=function(){this._bitField|=2097152};a.prototype._unsetRejectionIsUnhandled=function(){this._bitField&=-2097153;this._isUnhandledRejectionNotified()&&(this._unsetUnhandledRejectionIsNotified(),this._notifyUnhandledRejectionIsHandled())};a.prototype._isRejectionUnhandled=function(){return 0<(this._bitField&2097152)};a.prototype._setUnhandledRejectionIsNotified=function(){this._bitField|=524288};a.prototype._unsetUnhandledRejectionIsNotified=
function(){this._bitField&=-524289};a.prototype._isUnhandledRejectionNotified=function(){return 0<(this._bitField&524288)};a.prototype._setCarriedStackTrace=function(a){this._bitField|=1048576;this._fulfillmentHandler0=a};a.prototype._unsetCarriedStackTrace=function(){this._bitField&=-1048577;this._fulfillmentHandler0=void 0};a.prototype._isCarryingStackTrace=function(){return 0<(this._bitField&1048576)};a.prototype._getCarriedStackTrace=function(){return this._isCarryingStackTrace()?this._fulfillmentHandler0:
void 0};a.prototype._receiverAt=function(a){a=0===a?this._receiver0:this[(a<<2)+a-5+4];return this._isBound()&&void 0===a?this._boundTo:a};a.prototype._promiseAt=function(a){return 0===a?this._promise0:this[(a<<2)+a-5+3]};a.prototype._fulfillmentHandlerAt=function(a){return 0===a?this._fulfillmentHandler0:this[(a<<2)+a-5+0]};a.prototype._rejectionHandlerAt=function(a){return 0===a?this._rejectionHandler0:this[(a<<2)+a-5+1]};a.prototype._addCallbacks=function(a,b,c,e,h){var g=this._length();262138<=
g&&(g=0,this._setLength(0));if(0===g){if(this._promise0=e,void 0!==h&&(this._receiver0=h),"function"===typeof a&&!this._isCarryingStackTrace()&&(this._fulfillmentHandler0=a),"function"===typeof b&&(this._rejectionHandler0=b),"function"===typeof c)this._progressHandler0=c}else{var f=(g<<2)+g-5;this[f+3]=e;this[f+4]=h;this[f+0]="function"===typeof a?a:void 0;this[f+1]="function"===typeof b?b:void 0;this[f+2]="function"===typeof c?c:void 0}this._setLength(g+1);return g};a.prototype._setProxyHandlers=
function(a,b){var c=this._length();262138<=c&&(c=0,this._setLength(0));if(0===c)this._promise0=b,this._receiver0=a;else{var e=(c<<2)+c-5;this[e+3]=b;this[e+4]=a;this[e+0]=this[e+1]=this[e+2]=void 0}this._setLength(c+1)};a.prototype._proxyPromiseArray=function(a,b){this._setProxyHandlers(a,b)};a.prototype._proxyPromise=function(a){a._setProxied();this._setProxyHandlers(a,-15)};a.prototype._setBoundTo=function(a){void 0!==a?(this._bitField|=8388608,this._boundTo=a):this._bitField&=-8388609};a.prototype._isBound=
function(){return 8388608===(this._bitField&8388608)};a.prototype._resolveFromResolver=function(a){var b=this;this._setTrace(void 0);this._pushContext();a=D(a,void 0,function(a){b._tryFollow(a)||b._fulfill(a)},function(a){var c=x(a)?a:Error(a+"");b._attachExtraTrace(c);F(a);b._reject(a,c===a?void 0:c)});this._popContext();if(void 0!==a&&a===u){var a=a.e,c=x(a)?a:Error(a+"");b._reject(a,c)}};a.prototype._spreadSlowCase=function(a,b,c,h){c=(new e(c)).promise()._then(function(){return a.apply(h,arguments)},
void 0,void 0,n,void 0);b._follow(c)};a.prototype._callSpread=function(b,e,h){var g=this._boundTo;if(o(h))for(var f=0,p=h.length;f<p;++f)if(c(h[f],void 0)instanceof a){this._spreadSlowCase(b,e,h,g);return}e._pushContext();return B(b,h,g)};a.prototype._callHandler=function(a,b,c,e){b===n&&!this.isRejected()?a=this._callSpread(a,c,e):(c._pushContext(),a=z(a,b,e));c._popContext();return a};a.prototype._settlePromiseFromHandler=function(b,e,g,f){f instanceof a?(b=this._callHandler(b,e,f,g),f._isFollowing()||
(b===u||b===f||b===h?(g=b===f?t():b.e,e=x(g)?g:Error(g+""),b!==h&&f._attachExtraTrace(e),f._rejectUnchecked(g,e)):(g=c(b,f),g instanceof a?(g.isRejected()&&(!g._isCarryingStackTrace()&&!x(g._settledValue))&&(e=Error(g._settledValue+""),f._attachExtraTrace(e),g._setCarriedStackTrace(e)),f._follow(g),f._propagateFrom(g,1)):f._fulfillUnchecked(b)))):b.call(e,g,f)};a.prototype._follow=function(a){this._setFollowing();a.isPending()?(this._propagateFrom(a,1),a._proxyPromise(this)):a.isFulfilled()?this._fulfillUnchecked(a._settledValue):
this._rejectUnchecked(a._settledValue,a._getCarriedStackTrace());a._isRejectionUnhandled()&&a._unsetRejectionIsUnhandled();v&&null==a._traceParent&&(a._traceParent=this)};a.prototype._tryFollow=function(b){if(this._isFollowingOrFulfilledOrRejected()||b===this)return!1;b=c(b,void 0);if(!(b instanceof a))return!1;this._follow(b);return!0};a.prototype._resetTrace=function(){v&&(this._trace=new q(void 0===this._peekContext()))};a.prototype._setTrace=function(a){if(v){var b=this._peekContext();this._traceParent=
b;this._trace=void 0!==a&&a._traceParent===b?a._trace:new q(void 0===b)}return this};a.prototype._attachExtraTrace=function(a){if(v){var b=this,c=a.stack,c="string"===typeof c?c.split("\n"):[];q.protectErrorMessageNewlines(c);for(var e=1;null!=b&&null!=b._trace;)c=q.combine(c,b._trace.stack.split("\n")),b=b._traceParent,e++;b=((Error.stackTraceLimit||10)+1)*e;e=c.length;e>b&&(c.length=b);0<e&&(c[0]=c[0].split("\u0002\x00\u0001").join("\n"));a.stack=1>=c.length?"(No stack trace)":c.join("\n")}};a.prototype._cleanValues=
function(){this._cancellable()&&(this._cancellationParent=void 0)};a.prototype._propagateFrom=function(a,b){0<(b&1)&&a._cancellable()&&(this._setCancellable(),this._cancellationParent=a);0<(b&4)&&this._setBoundTo(a._boundTo);0<(b&2)&&this._setTrace(a)};a.prototype._fulfill=function(a){this._isFollowingOrFulfilledOrRejected()||this._fulfillUnchecked(a)};a.prototype._reject=function(a,b){this._isFollowingOrFulfilledOrRejected()||this._rejectUnchecked(a,b)};a.prototype._settlePromiseAt=function(b){var c=
this.isFulfilled()?this._fulfillmentHandlerAt(b):this._rejectionHandlerAt(b),h=this._settledValue,g=this._receiverAt(b),f=this._promiseAt(b);if("function"===typeof c)this._settlePromiseFromHandler(c,g,h,f);else{var c=!1,p=this.isFulfilled();void 0!==g&&(g instanceof a&&g._isProxied()?(g._unsetProxied(),p?g._fulfillUnchecked(h):g._rejectUnchecked(h,this._getCarriedStackTrace()),c=!0):g instanceof e&&(p?g._promiseFulfilled(h,f):g._promiseRejected(h,f),c=!0));c||(p?f._fulfill(h):f._reject(h,this._getCarriedStackTrace()))}4<=
b&&this._queueGC()};a.prototype._isProxied=function(){return 4194304===(this._bitField&4194304)};a.prototype._setProxied=function(){this._bitField|=4194304};a.prototype._unsetProxied=function(){this._bitField&=-4194305};a.prototype._isGcQueued=function(){return-1073741824===(this._bitField&-1073741824)};a.prototype._setGcQueued=function(){this._bitField|=-1073741824};a.prototype._unsetGcQueued=function(){this._bitField&=1073741823};a.prototype._queueGC=function(){this._isGcQueued()||(this._setGcQueued(),
f.invokeLater(this._gc,this,void 0))};a.prototype._gc=function(){for(var a=5*this._length()-5,b=0;b<a;b++)delete this[b];this._clearFirstHandlerData();this._setLength(0);this._unsetGcQueued()};a.prototype._clearFirstHandlerData=function(){this._receiver0=this._promise0=this._rejectionHandler0=this._fulfillmentHandler0=void 0};a.prototype._queueSettleAt=function(a){this._isRejectionUnhandled()&&this._unsetRejectionIsUnhandled();f.invoke(this._settlePromiseAt,this,a)};a.prototype._fulfillUnchecked=
function(a){if(this.isPending()){if(a===this)return a=t(),this._attachExtraTrace(a),this._rejectUnchecked(a,void 0);this._cleanValues();this._setFulfilled();this._settledValue=a;a=this._length();0<a&&f.invoke(this._settlePromises,this,a)}};a.prototype._rejectUncheckedCheckError=function(a){var b=x(a)?a:Error(a+"");this._rejectUnchecked(a,b===a?void 0:b)};a.prototype._rejectUnchecked=function(a,b){if(this.isPending()){if(a===this){var c=t();this._attachExtraTrace(c);return this._rejectUnchecked(c)}this._cleanValues();
this._setRejected();this._settledValue=a;this._isFinal()?f.invokeLater(r,void 0,void 0===b?a:b):(c=this._length(),void 0!==b&&this._setCarriedStackTrace(b),0<c?f.invoke(this._rejectPromises,this,null):this._ensurePossibleRejectionHandled())}};a.prototype._rejectPromises=function(){this._settlePromises();this._unsetCarriedStackTrace()};a.prototype._settlePromises=function(){for(var a=this._length(),b=0;b<a;b++)this._settlePromiseAt(b)};a.prototype._ensurePossibleRejectionHandled=function(){this._setRejectionIsUnhandled();
void 0!==q.possiblyUnhandledRejection&&f.invokeLater(this._notifyUnhandledRejection,this,void 0)};a.prototype._notifyUnhandledRejectionIsHandled=function(){"function"===typeof C&&f.invokeLater(C,void 0,this)};a.prototype._notifyUnhandledRejection=function(){if(this._isRejectionUnhandled()){var a=this._settledValue,b=this._getCarriedStackTrace();this._setUnhandledRejectionIsNotified();void 0!==b&&(this._unsetCarriedStackTrace(),a=b);"function"===typeof q.possiblyUnhandledRejection&&q.possiblyUnhandledRejection(a,
this)}};var A=[];a.prototype._peekContext=function(){var a=A.length-1;if(0<=a)return A[a]};a.prototype._pushContext=function(){v&&A.push(this)};a.prototype._popContext=function(){v&&A.pop()};a.noConflict=function(){var c=a;try{Promise===c&&(Promise=b)}catch(e){}return c};a.setScheduler=function(a){if("function"!==typeof a)throw new s("fn must be a function");f._schedule=a};q.isSupported()||(a.longStackTraces=function(){},v=!1);a._makeSelfResolutionError=t;d("./finally.js")(a,h,c);d("./direct_resolve.js")(a);
d("./synchronous_inspection.js")(a);d("./join.js")(a,e,c,l);a.RangeError=G;a.CancellationError=H;a.TimeoutError=I;a.TypeError=s;a.OperationalError=E;a.RejectionError=E;a.AggregateError=j.AggregateError;i.toFastProperties(a);i.toFastProperties(a.prototype);a.Promise=a;d("./timers.js")(a,l,c);d("./race.js")(a,l,c);d("./call_get.js")(a);d("./generators.js")(a,y,l,c);d("./map.js")(a,e,y,c,l);d("./nodeify.js")(a);d("./promisify.js")(a,l);d("./props.js")(a,e,c);d("./reduce.js")(a,e,y,c,l);d("./settle.js")(a,
e);d("./some.js")(a,e,y);d("./progress.js")(a,e);d("./cancel.js")(a,l);d("./filter.js")(a,l);d("./any.js")(a,e);d("./each.js")(a,l);d("./using.js")(a,y,c);a.prototype=a.prototype;return a}},{"./any.js":1,"./async.js":2,"./call_get.js":4,"./cancel.js":5,"./captured_trace.js":6,"./catch_filter.js":7,"./direct_resolve.js":8,"./each.js":9,"./errors.js":10,"./errors_api_rejection":11,"./filter.js":13,"./finally.js":14,"./generators.js":15,"./join.js":16,"./map.js":17,"./nodeify.js":18,"./progress.js":19,
"./promise_array.js":21,"./promise_resolver.js":22,"./promisify.js":23,"./props.js":24,"./race.js":26,"./reduce.js":27,"./settle.js":29,"./some.js":30,"./synchronous_inspection.js":31,"./thenables.js":32,"./timers.js":33,"./using.js":34,"./util.js":35}],21:[function(d,o){o.exports=function(b,a,k){function m(a){switch(a){case -2:return[];case -3:return{}}}function i(f){var n=this._promise=new b(a),h=void 0;f instanceof b&&(h=f,n._propagateFrom(h,5));n._setTrace(h);this._values=f;this._totalResolved=
this._length=0;this._init(void 0,-2)}var f=d("./errors.js").canAttach,j=d("./util.js").isArray;i.prototype.length=function(){return this._length};i.prototype.promise=function(){return this._promise};i.prototype._init=function n(a,c){var e=k(this._values,void 0);if(e instanceof b)if(this._values=e,e._setBoundTo(this._promise._boundTo),e.isFulfilled()){if(e=e._settledValue,!j(e)){e=new b.TypeError("expecting an array, a promise or a thenable");this.__hardReject__(e);return}}else{e.isPending()?e._then(n,
this._reject,void 0,this,c):(e._unsetRejectionIsUnhandled(),this._reject(e._settledValue));return}else if(!j(e)){e=new b.TypeError("expecting an array, a promise or a thenable");this.__hardReject__(e);return}if(0===e.length)-5===c?this._resolveEmptyArray():this._resolve(m(c));else{for(var f=this.getActualLength(e.length),p=this.shouldCopyValues()?Array(f):this._values,g=!1,d=0;d<f;++d){var i=k(e[d],void 0);i instanceof b?i.isPending()?i._proxyPromiseArray(this,d):(i._unsetRejectionIsUnhandled(),g=
!0):g=!0;p[d]=i}this._values=p;this._length=f;g&&this._scanDirectValues(f)}};i.prototype._settlePromiseAt=function(a){var h=this._values[a];h instanceof b?h.isFulfilled()?this._promiseFulfilled(h._settledValue,a):h.isRejected()&&this._promiseRejected(h._settledValue,a):this._promiseFulfilled(h,a)};i.prototype._scanDirectValues=function(a){for(var b=0;b<a&&!this._isResolved();++b)this._settlePromiseAt(b)};i.prototype._isResolved=function(){return null===this._values};i.prototype._resolve=function(a){this._values=
null;this._promise._fulfill(a)};i.prototype.__hardReject__=i.prototype._reject=function(a){this._values=null;var b=f(a)?a:Error(a+"");this._promise._attachExtraTrace(b);this._promise._reject(a,b)};i.prototype._promiseProgressed=function(a,b){this._isResolved()||this._promise._progress({index:b,value:a})};i.prototype._promiseFulfilled=function(a,b){this._isResolved()||(this._values[b]=a,++this._totalResolved>=this._length&&this._resolve(this._values))};i.prototype._promiseRejected=function(a){this._isResolved()||
(this._totalResolved++,this._reject(a))};i.prototype.shouldCopyValues=function(){return!0};i.prototype.getActualLength=function(a){return a};return i}},{"./errors.js":10,"./util.js":35}],22:[function(d,o){function b(a){return function(b,e){if(null!==a){if(b){var d=k(b),d=d instanceof Error&&l.getPrototypeOf(d)===Error.prototype?new f(d):d;m.markAsOriginatingFromRejection(d);a._attachExtraTrace(d);a._reject(d)}else if(2<arguments.length){for(var d=arguments.length,p=Array(d-1),g=1;g<d;++g)p[g-1]=arguments[g];
a._fulfill(p)}else a._fulfill(e);a=null}}}var a=d("./util.js"),k=a.maybeWrapAsError,m=d("./errors.js"),i=m.TimeoutError,f=m.OperationalError,j=d("./async.js"),a=a.haveGetters,l=d("./es5.js"),n;n=a?function(a){this.promise=a}:function(a){this.promise=a;this.callback=this.asCallback=b(a)};a&&(a={get:function(){return b(this.promise)}},l.defineProperty(n.prototype,"asCallback",a),l.defineProperty(n.prototype,"callback",a));n._nodebackForPromise=b;n.prototype.toString=function(){return"[object PromiseResolver]"};
n.prototype.resolve=n.prototype.fulfill=function(a){if(!(this instanceof n))throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.");var b=this.promise;b._tryFollow(a)||j.invoke(b._fulfill,b,a)};n.prototype.reject=function(a){if(!(this instanceof n))throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.");
var b=this.promise;m.markAsOriginatingFromRejection(a);var e=m.canAttach(a)?a:Error(a+"");b._attachExtraTrace(e);j.invoke(b._reject,b,a);e!==a&&j.invoke(this._setCarriedStackTrace,this,e)};n.prototype.progress=function(a){if(!(this instanceof n))throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.");j.invoke(this.promise._progress,this.promise,a)};n.prototype.cancel=function(){j.invoke(this.promise.cancel,
this.promise,void 0)};n.prototype.timeout=function(){this.reject(new i("timeout"))};n.prototype.isResolved=function(){return this.promise.isResolved()};n.prototype.toJSON=function(){return this.promise.toJSON()};n.prototype._setCarriedStackTrace=function(a){this.promise.isRejected()&&this.promise._setCarriedStackTrace(a)};o.exports=n},{"./async.js":2,"./errors.js":10,"./es5.js":12,"./util.js":35}],23:[function(d,o){o.exports=function(b,a){function k(a){try{return!0===a.__isPromisified__}catch(b){return!1}}
function m(a){return n.isIdentifier(a)?"."+a:"['"+a.replace(/(['\\])/g,"\\$1")+"']"}function i(g,f,d,p,i){for(var p=Math.max(0,("number"===typeof p.length?Math.max(Math.min(p.length,1024),0):0)-1),k=[p],j=Math.max(0,p-1-5),q=p-1;q>=j;--q)q!==p&&k.push(q);for(q=p+1;5>=q;++q)k.push(q);d="string"===typeof d&&n.isIdentifier(d)?d+i:"promisified";return(new Function("Promise","callback","receiver","withAppended","maybeWrapAsError","nodebackForPromise","INTERNAL","                                         \n        var ret = function FunctionName(Parameters) {                        \n            'use strict';                                                    \n            var len = arguments.length;                                      \n            var promise = new Promise(INTERNAL);                             \n            promise._setTrace(void 0);                                       \n            var fn = nodebackForPromise(promise);                            \n            try {                                                            \n                switch(len) {                                                \n                    [CodeForSwitchCase]                                      \n                }                                                            \n            } catch (e) {                                                    \n                var wrapped = maybeWrapAsError(e);                           \n                promise._attachExtraTrace(wrapped);                          \n                promise._reject(wrapped);                                    \n            }                                                                \n            return promise;                                                  \n        };                                                                   \n        ret.__isPromisified__ = true;                                        \n        return ret;                                                          \n        ".replace("FunctionName",
d).replace("Parameters",n.filledRange(p,"_arg","")).replace("[CodeForSwitchCase]",function(){for(var a="",b=0;b<k.length;++b){var c="case "+k[b]+":",e,h=k[b];e=n.filledRange(h,"arguments[","]").join(", ");var h=0<h?", ":"",d=void 0,d="string"===typeof g?"                                                          \n                this.method({{args}}, fn);                                   \n                break;                                                       \n            ".replace(".method",
m(g)):f===l?"                                                         \n                callback.call(this, {{args}}, fn);                           \n                break;                                                       \n            ":void 0!==f?"                                                         \n                callback.call(receiver, {{args}}, fn);                       \n                break;                                                       \n            ":"                                                         \n                callback({{args}}, fn);                                      \n                break;                                                       \n            ";
e=d.replace("{{args}}",e).replace(", ",h);a+=c+e}b="string"===typeof g?"                                                  \n                this.property.apply(this, args);                             \n            ".replace(".property",m(g)):f===l?"                                                  \n                callback.apply(this, args);                                  \n            ":"                                                  \n                callback.apply(receiver, args);                              \n            ";
return a+="                                                             \n        default:                                                             \n            var args = new Array(len + 1);                                   \n            var i = 0;                                                       \n            for (var i = 0; i < len; ++i) {                                  \n               args[i] = arguments[i];                                       \n            }                                                                \n            args[i] = fn;                                                    \n            [CodeForCall]                                                    \n            break;                                                           \n        ".replace("[CodeForCall]",
b)}())))(b,g,f,c,e,h,a)}function f(g,f){function d(){var p=f;f===l&&(p=this);"string"===typeof g&&(g=p[g]);var k=new b(a);k._setTrace(void 0);var i=h(k);try{g.apply(p,c(arguments,i))}catch(m){p=e(m),k._attachExtraTrace(p),k._reject(p)}return k}d.__isPromisified__=!0;return d}function j(a,b,c,e){for(var g=RegExp(b.replace(/([$])/,"\\$")+"$"),h=n.inheritedDataKeys(a),f=[],d=0;d<h.length;++d){var i=h[d],m=a[i],j;if(j="function"===typeof m)if(j=!k(m))j=n.getDataPropertyOrDefault(a,i+b,o),j=!(j&&k(j))&&
c(i,m,a);j&&f.push(i,m)}for(c=0;c<f.length;c+=2)if(h=f[c],g.test(h)){h=h.replace(g,"");for(d=0;d<f.length;d+=2)if(f[d]===h)throw new p("Cannot promisify an API that has normal methods with '"+b+"'-suffix");}g=0;for(c=f.length;g<c;g+=2)h=f[g],d=f[g+1],a[h+b]=e===u?u(h,l,h,d,b):e(d);n.toFastProperties(a);return a}var l={},n=d("./util.js"),h=d("./promise_resolver.js")._nodebackForPromise,c=n.withAppended,e=n.maybeWrapAsError,q=n.canEvaluate,p=d("./errors").TypeError,g=function(a,b){return n.isIdentifier(a)&&
"_"!==a.charAt(0)&&!n.isClass(b)},o={__isPromisified__:!0},u=q?i:f;b.promisify=function(a,b){if("function"!==typeof a)throw new p("fn must be a function");return k(a)?a:u(a,2>arguments.length?l:b,void 0,a)};b.promisifyAll=function(a,b){if("function"!==typeof a&&"object"!==typeof a)throw new p("the target of promisifyAll must be an object or a function");var b=Object(b),c=b.suffix;"string"!==typeof c&&(c="Async");var e=b.filter;"function"!==typeof e&&(e=g);var h=b.promisifier;"function"!==typeof h&&
(h=u);if(!n.isIdentifier(c))throw new RangeError("suffix must be a valid identifier");for(var f=n.inheritedDataKeys(a,{includeHidden:!0}),d=0;d<f.length;++d){var k=a[f[d]];"constructor"!==f[d]&&n.isClass(k)&&(j(k.prototype,c,e,h),j(k,c,e,h))}return j(a,c,e,h)}}},{"./errors":10,"./promise_resolver.js":22,"./util.js":35}],24:[function(d,o){o.exports=function(b,a,k){function m(a){for(var b=n.keys(a),e=b.length,f=Array(2*e),d=0;d<e;++d){var g=b[d];f[d]=a[g];f[d+e]=g}this.constructor$(f)}function i(a){var c=
k(a,void 0);if(l(c))a=c instanceof b?c._then(b.props,void 0,void 0,void 0,void 0):(new m(c)).promise();else return j("cannot await properties of a non-object");c instanceof b&&a._propagateFrom(c,4);return a}var f=d("./util.js"),j=d("./errors_api_rejection")(b),l=f.isObject,n=d("./es5.js");f.inherits(m,a);m.prototype._init=function(){this._init$(void 0,-3)};m.prototype._promiseFulfilled=function(a,b){if(!this._isResolved()&&(this._values[b]=a,++this._totalResolved>=this._length)){for(var e={},f=this.length(),
d=0,g=this.length();d<g;++d)e[this._values[d+f]]=this._values[d];this._resolve(e)}};m.prototype._promiseProgressed=function(a,b){this._isResolved()||this._promise._progress({key:this._values[b+this.length()],value:a})};m.prototype.shouldCopyValues=function(){return!1};m.prototype.getActualLength=function(a){return a>>1};b.prototype.props=function(){return i(this)};b.props=function(a){return i(a)}}},{"./errors_api_rejection":11,"./es5.js":12,"./util.js":35}],25:[function(d,o){function b(a,b,d,f,j){for(var l=
0;l<j;++l)d[l+f]=a[l+b]}function a(a){this._capacity=a;this._front=this._length=0;this._makeCapacity()}a.prototype._willBeOverCapacity=function(a){return this._capacity<a};a.prototype._pushOne=function(a){var b=this.length();this._checkCapacity(b+1);this[this._front+b&this._capacity-1]=a;this._length=b+1};a.prototype.push=function(a,b,d){var f=this.length()+3;if(this._willBeOverCapacity(f))this._pushOne(a),this._pushOne(b),this._pushOne(d);else{var j=this._front+f-3;this._checkCapacity(f);var l=this._capacity-
1;this[j+0&l]=a;this[j+1&l]=b;this[j+2&l]=d;this._length=f}};a.prototype.shift=function(){var a=this._front,b=this[a];this[a]=void 0;this._front=a+1&this._capacity-1;this._length--;return b};a.prototype.length=function(){return this._length};a.prototype._makeCapacity=function(){for(var a=this._capacity,b=0;b<a;++b)this[b]=void 0};a.prototype._checkCapacity=function(a){this._capacity<a&&this._resizeTo(this._capacity<<3)};a.prototype._resizeTo=function(a){var d=this._front,i=this._capacity,f=Array(i),
j=this.length();b(this,0,f,0,i);this._capacity=a;this._makeCapacity();this._front=0;d+j<=i?b(f,d,this,0,j):(a=j-(d+j&i-1),b(f,d,this,0,a),b(f,0,this,a,j-a))};o.exports=a},{}],26:[function(d,o){o.exports=function(b,a,k){function m(d,n){var h=k(d,void 0);if(h instanceof b)return h.then(function(a){return m(a,h)});if(!f(d))return i("expecting an array, a promise or a thenable");var c=new b(a);void 0!==n?c._propagateFrom(n,7):c._setTrace(void 0);for(var e=c._fulfill,q=c._reject,p=0,g=d.length;p<g;++p){var o=
d[p];(void 0!==o||j.call(d,p))&&b.cast(o)._then(e,q,void 0,c,null)}return c}var i=d("./errors_api_rejection.js")(b),f=d("./util.js").isArray,j={}.hasOwnProperty;b.race=function(a){return m(a,void 0)};b.prototype.race=function(){return m(this,void 0)}}},{"./errors_api_rejection.js":11,"./util.js":35}],27:[function(d,o){o.exports=function(b,a,k,m,i){function f(a,c,h,g){this.constructor$(a);this._preservedValues=g===i?[]:null;this._zerothIsAccum=void 0===h;this._gotAccum=!1;this._reducingIndex=this._zerothIsAccum?
1:0;this._valuesPhase=void 0;var a=m(h,void 0),g=!1,f=a instanceof b;f&&(a.isPending()?a._proxyPromiseArray(this,-1):a.isFulfilled()?(h=a.value(),this._gotAccum=!0):(a._unsetRejectionIsUnhandled(),this._reject(a.reason()),g=!0));!f&&!this._zerothIsAccum&&(this._gotAccum=!0);this._callback=c;this._accum=h;g||this._init$(void 0,-5)}function j(a,b,c,g){return"function"!==typeof b?k("fn must be a function"):(new f(a,b,c,g)).promise()}var l=d("./util.js"),n=l.tryCatch4,h=l.tryCatch3,c=l.errorObj;l.inherits(f,
a);f.prototype._init=function(){};f.prototype._resolveEmptyArray=function(){if(this._gotAccum||this._zerothIsAccum)this._resolve(null!==this._preservedValues?[]:this._accum)};f.prototype._promiseFulfilled=function(a,f){var d=this._values;if(null!==d){var g=this.length(),i=this._preservedValues,k=null!==i,j=this._gotAccum,l=this._valuesPhase,o;if(!l){l=this._valuesPhase=Array(g);for(o=0;o<g;++o)l[o]=0}o=l[f];0===f&&this._zerothIsAccum?(j||(this._accum=a,this._gotAccum=j=!0),l[f]=0===o?1:2):-1===f?
j||(this._accum=a,this._gotAccum=j=!0):0===o?l[f]=1:(l[f]=2,j&&(this._accum=a));if(j){for(var j=this._callback,t=this._promise._boundTo,s=this._reducingIndex;s<g;++s)if(o=l[s],2===o)this._reducingIndex=s+1;else{if(1!==o)return;a=d[s];if(a instanceof b)if(a.isFulfilled())a=a._settledValue;else{if(a.isPending())return;a._unsetRejectionIsUnhandled();return this._reject(a.reason())}k?(i.push(a),o=h(j,t,a,s,g)):o=n(j,t,this._accum,a,s,g);if(o===c)return this._reject(o.e);var r=m(o,void 0);if(r instanceof
b){if(r.isPending())return l[s]=4,r._proxyPromiseArray(this,s);if(r.isFulfilled())o=r.value();else return r._unsetRejectionIsUnhandled(),this._reject(r.reason())}this._reducingIndex=s+1;this._accum=o}this._reducingIndex<g||this._resolve(k?i:this._accum)}}};b.prototype.reduce=function(a,b){return j(this,a,b,null)};b.reduce=function(a,b,c,g){return j(a,b,c,g)}}},{"./util.js":35}],28:[function(d,o){var b;if("object"===typeof process&&"string"===typeof process.version)b=function(a){process.nextTick(a)};
else if("undefined"!==typeof MutationObserver&&(b=MutationObserver)||"undefined"!==typeof WebKitMutationObserver&&(b=WebKitMutationObserver)){var a=document.createElement("div"),k=void 0;(new b(function(){var a=k;k=void 0;a()})).observe(a,{attributes:!0});b=function(b){k=b;a.classList.toggle("foo")}}else if("undefined"!==typeof setTimeout)b=function(a){setTimeout(a,0)};else throw Error("no async scheduler available");o.exports=b},{}],29:[function(d,o){o.exports=function(b,a){function k(a){this.constructor$(a)}
var m=b.PromiseInspection;d("./util.js").inherits(k,a);k.prototype._promiseResolved=function(a,b){this._values[a]=b;++this._totalResolved>=this._length&&this._resolve(this._values)};k.prototype._promiseFulfilled=function(a,b){if(!this._isResolved()){var d=new m;d._bitField=268435456;d._settledValue=a;this._promiseResolved(b,d)}};k.prototype._promiseRejected=function(a,b){if(!this._isResolved()){var d=new m;d._bitField=134217728;d._settledValue=a;this._promiseResolved(b,d)}};b.settle=function(a){return(new k(a)).promise()};
b.prototype.settle=function(){return(new k(this)).promise()}}},{"./util.js":35}],30:[function(d,o){o.exports=function(b,a,k){function m(a){this.constructor$(a);this._howMany=0;this._initialized=this._unwrap=!1}function i(a,b){if((b|0)!==b||0>b)return k("expecting a positive integer");var e=new m(a),f=e.promise();if(f.isRejected())return f;e.setHowMany(b);e.init();return f}var f=d("./util.js"),j=d("./errors.js").RangeError,l=d("./errors.js").AggregateError,n=f.isArray;f.inherits(m,a);m.prototype._init=
function(){if(this._initialized)if(0===this._howMany)this._resolve([]);else{this._init$(void 0,-5);var a=n(this._values);!this._isResolved()&&(a&&this._howMany>this._canPossiblyFulfill())&&this._reject(this._getRangeError(this.length()))}};m.prototype.init=function(){this._initialized=!0;this._init()};m.prototype.setUnwrap=function(){this._unwrap=!0};m.prototype.howMany=function(){return this._howMany};m.prototype.setHowMany=function(a){this._isResolved()||(this._howMany=a)};m.prototype._promiseFulfilled=
function(a){this._isResolved()||(this._addFulfilled(a),this._fulfilled()===this.howMany()&&(this._values.length=this.howMany(),1===this.howMany()&&this._unwrap?this._resolve(this._values[0]):this._resolve(this._values)))};m.prototype._promiseRejected=function(a){if(!this._isResolved()&&(this._addRejected(a),this.howMany()>this._canPossiblyFulfill())){for(var a=new l,b=this.length();b<this._values.length;++b)a.push(this._values[b]);this._reject(a)}};m.prototype._fulfilled=function(){return this._totalResolved};
m.prototype._rejected=function(){return this._values.length-this.length()};m.prototype._addRejected=function(a){this._values.push(a)};m.prototype._addFulfilled=function(a){this._values[this._totalResolved++]=a};m.prototype._canPossiblyFulfill=function(){return this.length()-this._rejected()};m.prototype._getRangeError=function(a){return new j("Input array must contain at least "+this._howMany+" items but contains only "+a+" items")};m.prototype._resolveEmptyArray=function(){this._reject(this._getRangeError(0))};
b.some=function(a,b){return i(a,b)};b.prototype.some=function(a){return i(this,a)};b._SomePromiseArray=m}},{"./errors.js":10,"./util.js":35}],31:[function(d,o){o.exports=function(b){function a(a){void 0!==a?(this._bitField=a._bitField,this._settledValue=a.isResolved()?a._settledValue:void 0):(this._bitField=0,this._settledValue=void 0)}a.prototype.isFulfilled=b.prototype.isFulfilled=function(){return 0<(this._bitField&268435456)};a.prototype.isRejected=b.prototype.isRejected=function(){return 0<(this._bitField&
134217728)};a.prototype.isPending=b.prototype.isPending=function(){return 0===(this._bitField&402653184)};a.prototype.value=b.prototype.value=function(){if(!this.isFulfilled())throw new TypeError("cannot get fulfillment value of a non-fulfilled promise");return this._settledValue};a.prototype.error=a.prototype.reason=b.prototype.reason=function(){if(!this.isRejected())throw new TypeError("cannot get rejection reason of a non-rejected promise");return this._settledValue};a.prototype.isResolved=b.prototype.isResolved=
function(){return 0<(this._bitField&402653184)};b.PromiseInspection=a}},{}],32:[function(d,o){o.exports=function(b,a){var k=d("./util.js"),m=d("./errors.js").canAttach,i=k.errorObj,f=k.isObject,j={}.hasOwnProperty;return function(d,k){if(f(d)){if(d instanceof b)return d;if(j.call(d,"_promise0")){var h=new b(a);h._setTrace(void 0);d._then(h._fulfillUnchecked,h._rejectUncheckedCheckError,h._progressUnchecked,h,null);h._setFollowing();return h}try{h=d.then}catch(c){i.e=c,h=i}if(h===i)return void 0!==
k&&m(h.e)&&k._attachExtraTrace(h.e),b.reject(h.e);if("function"===typeof h){var e=function(a){w||(w=!0,d===a?(a=b._makeSelfResolutionError(),void 0!==k&&k._attachExtraTrace(a),g.promise._reject(a,void 0)):g.resolve(a))},o=function(a){if(!w){w=!0;var b=m(a)?a:Error(a+"");void 0!==k&&k._attachExtraTrace(b);g.promise._reject(a,b)}},p=function(a){if(!w){var b=g.promise;"function"===typeof b._progress&&b._progress(a)}},g=b.defer(),w=!1;try{h.call(d,e,o,p)}catch(u){w||(w=!0,h=m(u)?u:Error(u+""),void 0!==
k&&k._attachExtraTrace(h),g.promise._reject(u,h))}return g.promise}}return d}}},{"./errors.js":10,"./util.js":35}],33:[function(d,o){var b=function(a,b){var d=arguments[2],i=arguments[3],f=5<=arguments.length?arguments[4]:void 0;setTimeout(function(){a(d,i,f)},b|0)};o.exports=function(a,k,m){d("./util.js");var i=d("./errors.js");d("./errors_api_rejection")(a);var f=a.TimeoutError,j=function(a,b,e){a.isPending()&&("string"!==typeof b&&(b="operation timed out after "+e+" ms"),b=new f(b),i.markAsOriginatingFromRejection(b),
a._attachExtraTrace(b),a._cancel(b))},l=function(a,b){b._fulfill(a)},n=a.delay=function(d,c){void 0===c&&(c=d,d=void 0);var c=+c,e=m(d,void 0),f=new a(k);if(e instanceof a)return f._propagateFrom(e,7),f._follow(e),f.then(function(b){return a.delay(b,c)});f._setTrace(void 0);b(l,c,d,f);return f};a.prototype.delay=function(a){return n(this,a)};a.prototype.timeout=function(d,c){var d=+d,e=new a(k);e._propagateFrom(this,7);e._follow(this);b(j,d,e,c,d);return e.cancellable()}}},{"./errors.js":10,"./errors_api_rejection":11,
"./util.js":35}],34:[function(d,o){o.exports=function(b,a,k){function m(a){for(var c=a.length,e=0;e<c;++e){var d=a[e];if(d.isRejected())return b.reject(d.error());a[e]=d.value()}return a}function i(a){setTimeout(function(){throw a;},0)}function f(a,c){function e(){if(d>=f)return h.resolve();var j;j=a[d++];var l=k(j,void 0);l!==j&&("function"===typeof j._isDisposable&&"function"===typeof j._getDisposer&&j._isDisposable())&&l._setDisposable(j._getDisposer());j=l;if(j instanceof b&&j._isDisposable()){try{j=
k(j._getDisposer().tryDispose(c),void 0)}catch(m){return i(m)}if(j instanceof b)return j._then(e,i,null,null,null)}e()}var d=0,f=a.length,h=b.defer();e();return h.promise}function j(a){var b=new o;b._settledValue=a;b._bitField=268435456;return f(this,b).thenReturn(a)}function l(a){var b=new o;b._settledValue=a;b._bitField=134217728;return f(this,b).thenThrow(a)}function n(a,b){this._data=a;this._promise=b}function h(a,b){this.constructor$(a,b)}var c=d("./errors.js").TypeError,e=d("./util.js").inherits,
o=b.PromiseInspection;n.prototype.data=function(){return this._data};n.prototype.promise=function(){return this._promise};n.prototype.resource=function(){return this.promise().isFulfilled()?this.promise().value():null};n.prototype.tryDispose=function(a){var b=this.resource(),a=null!==b?this.doDispose(b,a):null;this._promise._unsetDisposable();this._data=this._promise=null;return a};n.isDisposer=function(a){return null!=a&&"function"===typeof a.resource&&"function"===typeof a.tryDispose};e(h,n);h.prototype.doDispose=
function(a,b){return this.data().call(a,a,b)};b.using=function(){var c=arguments.length;if(2>c)return a("you must pass at least 2 arguments to Promise.using");var e=arguments[c-1];if("function"!==typeof e)return a("fn must be a function");c--;for(var d=Array(c),f=0;f<c;++f){var h=arguments[f];if(n.isDisposer(h)){var i=h,h=h.promise();h._setDisposable(i)}d[f]=h}return b.settle(d).then(m).spread(e)._then(j,l,void 0,d,void 0)};b.prototype._setDisposable=function(a){this._bitField|=262144;this._disposer=
a};b.prototype._isDisposable=function(){return 0<(this._bitField&262144)};b.prototype._getDisposer=function(){return this._disposer};b.prototype._unsetDisposable=function(){this._bitField&=-262145;this._disposer=void 0};b.prototype.disposer=function(a){if("function"===typeof a)return new h(a,this);throw new c;}}},{"./errors.js":10,"./util.js":35}],35:[function(d,o){function b(a){return"string"===typeof a?a:""+a}function a(a){return null==a||!0===a||!1===a||"string"===typeof a||"number"===typeof a}
var k=d("./es5.js"),m;try{var i={};k.defineProperty(i,"f",{get:function(){return 3}});m=3===i.f}catch(f){m=!1}var i="undefined"==typeof navigator,j={e:{}},l=function(){return"string"!==this}.call("string"),n;n=k.isES5?function(a,b){for(var d=[],f=Object.create(null),g=Object(b).includeHidden?Object.getOwnPropertyNames:Object.keys;null!=a;){var h;try{h=g(a)}catch(j){break}for(var i=0;i<h.length;++i){var l=h[i];if(!f[l]){f[l]=!0;var m=Object.getOwnPropertyDescriptor(a,l);null!=m&&(null==m.get&&null==
m.set)&&d.push(l)}}a=k.getPrototypeOf(a)}return d}:function(a){var b=[],d;for(d in a)b.push(d);return b};var h=/^[a-z$_][a-z$_0-9]*$/i;o.exports={isClass:function(a){try{if("function"===typeof a){var b=k.keys(a.prototype);return 0<b.length&&!(1===b.length&&"constructor"===b[0])}return!1}catch(d){return!1}},isIdentifier:function(a){return h.test(a)},inheritedDataKeys:n,getDataPropertyOrDefault:function(a,b,d){if(k.isES5){if(a=Object.getOwnPropertyDescriptor(a,b),null!=a)return null==a.get&&null==a.set?
a.value:d}else return{}.hasOwnProperty.call(a,b)?a[b]:void 0},thrower:function(a){throw a;},isArray:k.isArray,haveGetters:m,notEnumerableProp:function(b,e,d){if(a(b))return b;k.defineProperty(b,e,{value:d,configurable:!0,enumerable:!1,writable:!0});return b},isPrimitive:a,isObject:function(b){return!a(b)},canEvaluate:i,errorObj:j,tryCatch1:function(a,b,d){try{return a.call(b,d)}catch(f){return j.e=f,j}},tryCatch2:function(a,b,d,f){try{return a.call(b,d,f)}catch(g){return j.e=g,j}},tryCatch3:function(a,
b,d,f,g){try{return a.call(b,d,f,g)}catch(h){return j.e=h,j}},tryCatch4:function(a,b,d,f,g,h){try{return a.call(b,d,f,g,h)}catch(i){return j.e=i,j}},tryCatchApply:function(a,b,d){try{return a.apply(d,b)}catch(f){return j.e=f,j}},inherits:function(a,b){function d(){this.constructor=a;this.constructor$=b;for(var g in b.prototype)f.call(b.prototype,g)&&"$"!==g.charAt(g.length-1)&&(this[g+"$"]=b.prototype[g])}var f={}.hasOwnProperty;d.prototype=b.prototype;a.prototype=new d;return a.prototype},withAppended:function(a,
b){var d=a.length,f=Array(d+1),g;for(g=0;g<d;++g)f[g]=a[g];f[g]=b;return f},asString:b,maybeWrapAsError:function(c){return!a(c)?c:Error(b(c))},wrapsPrimitiveReceiver:l,toFastProperties:function(a){function b(){}b.prototype=a;return b},filledRange:function(a,b,d){for(var f=Array(a),g=0;g<a;++g)f[g]=b+g+d;return f}}},{"./es5.js":12}]},{},[3])(3)};"object"==typeof exports?module.exports=t():"function"==typeof define&&define.amd?define(t):"undefined"!=typeof r?r.Promise=t():"undefined"!=typeof global?
global.Promise=t():"undefined"!=typeof self&&(self.Promise=t());!0;"undefined"!==typeof r&&null!==r?r.P=r.Promise:"undefined"!==typeof self&&null!==self&&(self.P=self.Promise)});;
;
/* module-key = 'com.atlassian.jira.jira-onboarding-assets-plugin:promise', location = 'jira-onboarding-assets-module/lib/bluebird-promise-amd.js' */
define('bluebird/Promise', ["atlassian/libs/bluebird-2.3.6"], function(bluebird) {
    return bluebird;
});;
;
/* module-key = 'com.atlassian.jira.plugins.jira-development-integration-plugin:devstatus-backbone-define', location = 'jira-development-integration-plugin/js/util/DevStatusBackboneDefine.js' */
"use strict";Backbone&&!Backbone.define&&(Backbone.define=function(name,ctor){eval("Backbone['Class: "+name+"'] = function() { Backbone['Class: "+name+"'].__ctor.apply(this, arguments); }");var cls=Backbone["Class: "+name];cls.__ctor=ctor,ctor.prototype.name=name,cls.prototype=ctor.prototype,_.extend(cls,ctor),_.each(ctor.prototype,function(t,e){"function"==typeof t&&(t.displayName=name+"."+e)});var context=window,parts=name.split(".");return _.each(parts,function(t,e){e===parts.length-1?context[t]=cls:context=null==context[t]?context[t]={}:context[t]}),cls});;
;
/* module-key = 'com.atlassian.jira.plugins.jira-development-integration-plugin:event-publisher', location = 'jira-development-integration-plugin/js/util/EventPublisher.js' */
"use strict";define("jira-development-status/util/event-publisher",function(){return{trigger:AJS.trigger}});;
;
/* module-key = 'com.atlassian.jira.plugins.jira-development-integration-plugin:devstatus-wrm', location = 'jira-development-integration-plugin/js/util/DevStatusWRM.js' */
"use strict";define("jira-development-status/util/WRM",["underscore","jira-development-status/util/event-publisher"],function(e,r){var n="wrc!com.atlassian.jira.plugins.jira-development-integration-plugin:devstatus-dialog-resources-ctx",i="jira.devsummary.dialog-resources.wrm.load",t=function(){return window.performance.now()},a=function(e){var r=t();WRM.require([n],function(){o(r),e&&e()})},u=function(e){var n=Math.round(t()-e);r.trigger("analyticsEvent",{name:i,data:{durationInMillis:n}})},o=e.once(u);return{ANALYTIC_EVENT:i,requireDetailDialogResources:a}});;
;
/* module-key = 'com.atlassian.jira.plugins.jira-development-integration-plugin:utils', location = 'jira-development-integration-plugin/js/util/DateUtils.js' */
"use strict";define("jira/dev-status/util/date",["jquery"],function(t){return{addTooltip:function(a){var e=a.find("time.livestamp");e.livestamp(),e.each(function(){var a=t(this),e=a.attr("datetime"),i=isNaN(e)?e:+e,r=moment(i);a.attr("title",r.format(JIRA.DevStatus.Date.format))})},format:"LLL"}}),function(t){AJS.namespace("JIRA.DevStatus.Date",null,t)}(require("jira/dev-status/util/date"));;
;
/* module-key = 'com.atlassian.jira.plugins.jira-development-integration-plugin:utils', location = 'jira-development-integration-plugin/js/util/dev-status-console.js' */
"use strict";define("jira-development-status/util/console",[],function(){if(console)return console;var e=function(){};return{log:e,info:e,warn:e,debug:e,error:e}});;
;
/* module-key = 'com.atlassian.jira.plugins.jira-development-integration-plugin:utils', location = 'jira-development-integration-plugin/js/util/dev-status-constants.js' */
"use strict";define("jira-development-status/util/constants",function(){return{PLUGIN_KEY:"com.atlassian.jira.plugins.jira-development-integration-plugin",RELEASE_REPORT_SELECTED_TAB:"release-report-selected-tab"}});;
;
/* module-key = 'com.atlassian.jira.plugins.jira-development-integration-plugin:utils', location = 'jira-development-integration-plugin/js/util/LocalStorage.js' */
"use strict";define("jira-development-status/util/local-storage",[],function(){return localStorage?localStorage:{setItem:function(){},getItem:function(){},removeItem:function(){},clear:function(){}}});;
;
/* module-key = 'com.atlassian.jira.plugins.jira-development-integration-plugin:utils', location = 'jira-development-integration-plugin/js/util/ApplinksUtils.js' */
"use strict";define("jira-development-status/util/applinks-utils",[],function(){return ApplinksUtils});;
;
/* module-key = 'com.atlassian.jira.plugins.jira-development-integration-plugin:utils', location = 'jira-development-integration-plugin/js/util/DevStatusLocalStorage.js' */
"use strict";define("jira-development-status/util/dev-status-local-storage",["underscore","jira-development-status/util/console","jira-development-status/util/local-storage"],function(e,t,r){var o=e.extend({},r);return o.setItem=function(e,o){try{r.setItem(e,o)}catch(a){var l="";(22===a.code||1014===a.code&&"NS_ERROR_DOM_QUOTA_REACHED"===a.name)&&(l=". Browser local storage is full. For more information please follow https://confluence.atlassian.com/jirakb/functionality-in-jira-fails-due-to-exceeding-chrome-quota-762874705.html"),t.error("Couldn't store '"+e+"' & '"+o+"' key-value pair locally: "+a.name+l)}},o.getItem=function(e){try{return r.getItem(e)}catch(o){t.error("Couldn't retrieve locally stored value for key '"+e+"': "+o.name)}},o.removeItem=function(e){try{r.removeItem(e)}catch(o){t.error("Couldn't remove locally stored value for key '"+e+"': "+o.name)}},o.clear=function(){try{r.clear()}catch(e){t.error("Couldn't clear local storage: "+e.name)}},o});;
;
/* module-key = 'com.atlassian.jira.plugins.jira-development-integration-plugin:utils', location = 'jira-development-integration-plugin/js/util/Listeners.js' */
"use strict";define("jira/devstatus/util/listeners",["underscore"],function(t){return Class.extend({init:function(){this._listening=[]},startListening:function(t,i,n,s){var e={start:function(){return t.on(i,n,s),this},stop:function(){return t.off(i,n,s),this}};this._listening.push(e.start())},stopListening:function(){t.each(this._listening,function(t){t.stop()}),this._listening=[]}})}),Backbone.define("JIRA.DevStatus.Util.Listeners",require("jira/devstatus/util/listeners"));;
;
/* module-key = 'com.atlassian.jira.plugins.jira-development-integration-plugin:utils', location = 'jira-development-integration-plugin/js/util/DevStatusNavigation.js' */
"use strict";define("jira-development-status/util/navigate",["underscore"],function(n){return{getUrl:function(){return window.location.href},reload:function(){n.defer(function(){window.location.reload()})},navigate:function(t){n.defer(function(){window.location=t})},redirectToLogin:function(){this.navigate(AJS.contextPath()+"/login.jsp?permissionViolation=true&os_destination="+encodeURIComponent(window.location.href))}}}),function(n){AJS.namespace("JIRA.DevStatus.Navigate",null,n)}(require("jira-development-status/util/navigate"));;
;
/* module-key = 'com.atlassian.jira.plugins.jira-development-integration-plugin:utils', location = 'jira-development-integration-plugin/js/util/DevStatusURLUtils.js' */
"use strict";define("jira/dev-status/util/url",["jquery","underscore"],function(e,t){return{getDetailDialogParam:function(){var e=this._removeKickAssIHashFromUrl(JIRA.DevStatus.Navigate.getUrl()),t=parseUri(e);return t&&t.queryKey&&t.queryKey.devStatusDetailDialog},getUrlWithDetailDialogParam:function(e){var t=this._removeKickAssIHashFromUrl(JIRA.DevStatus.Navigate.getUrl()),r=parseUri(t);return r.queryKey.devStatusDetailDialog=encodeURIComponent(e),this.createUrlFromParsedUri(r)},getCreateReviewDetailUrl:function(e){return this.getUrlWithDetailDialogParam("create-review-"+e)},isCreateReviewDetailDialogLink:function(e){return e&&e.lastIndexOf&&0===e.lastIndexOf("create-review-",0)},getCreateReviewDetailDialogApplicationType:function(e){return e.substring("create-review-".length)},_removeKickAssIHashFromUrl:function(e){return e.replace("i#","")},createUrlFromParsedUri:function(r){var a=[];e.each(r.queryKey,function(r,i){t.isObject(i)?e.each(i,function(e,t){a.push(r+"="+t)}):a.push(r+"="+i)});var i="";return r.protocol&&(i+=r.protocol+"://"),r.authority&&(i+=r.authority),r.path&&(i+=r.path),a.length>0&&(i+="?"+a.join("&")),r.anchor&&(i+="#"+r.anchor),i}}}),function(e){AJS.namespace("JIRA.DevStatus.URL",null,e)}(require("jira/dev-status/util/url"));;
;
/* module-key = 'com.atlassian.jira.plugins.jira-development-integration-plugin:utils', location = 'jira-development-integration-plugin/js/util/Sanitize.js' */
"use strict";define("jira-development-status/util/sanitize",["underscore"],function(t){function n(t){return c.indexOf(t[0])>-1}function r(t){if(!t)return"about:blank";var r,e,i=t.replace(u,"").trim();return n(i)?i:(e=i.match(o))?(r=e[0],a.test(r)?"about:blank":i):"about:blank"}function e(n,e){for(var i=t.clone(n),a=e||[],u=0;u<a.length;u++){var o=a[u];n.hasOwnProperty(o)&&"string"==typeof i[o]&&(i[o]=r(i[o]))}return i}function i(n,r){return t.map(n,function(t){return e(t,r)})}var a=/^(%20|\s)*(javascript|data)/im,u=/[^\x20-\x7E]/gim,o=/^([^:]+):/gm,c=[".","/"];return{sanitizeUrl:r,sanitizeObject:e,sanitizeCollection:i}});;
;
/* module-key = 'com.atlassian.jira.plugins.jira-development-integration-plugin:utils', location = 'jira-development-integration-plugin/js/util/ES6Utils.js' */
"use strict";define("jira/dev-status/util/es6",["exports"],function(e){e.stringStartsWith=function(e,t){return e.slice(0,0+t.length)===t},e.findIndex=function(e,t){for(var n=0;n<e.length;++n)if(t(e[n]))return n;return-1},e.requestIdleCallback=function(e){"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e)}});;
;
/* module-key = 'com.atlassian.jira.plugins.jira-development-integration-plugin:repository-shortcuts', location = 'jira-development-integration-plugin/templates/repository-shortcuts/repository-shortcuts.soy' */
// This file was automatically generated from repository-shortcuts.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace JIRA.Software.RepositoryShortcuts.Templates.
 */

if (typeof JIRA == 'undefined') { var JIRA = {}; }
if (typeof JIRA.Software == 'undefined') { JIRA.Software = {}; }
if (typeof JIRA.Software.RepositoryShortcuts == 'undefined') { JIRA.Software.RepositoryShortcuts = {}; }
if (typeof JIRA.Software.RepositoryShortcuts.Templates == 'undefined') { JIRA.Software.RepositoryShortcuts.Templates = {}; }


JIRA.Software.RepositoryShortcuts.Templates.content = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.canManageShortcuts || opt_data.numberOfShortcuts > 0) {
    output += '<div class="aui-sidebar-group jira-sidebar-group-with-divider repo-shortcuts-group' + ((opt_data.numberOfShortcuts == 0) ? ' repo-shortcuts-group_empty' : '') + '" data-id="repo-shortcuts-group"><div class="aui-nav-heading">' + soy.$$escapeHtml('Source code') + '</div><ul class="aui-nav repo-shortcuts-list">';
    if (opt_data.shortcuts) {
      var shortcutList14 = opt_data.shortcuts;
      var shortcutListLen14 = shortcutList14.length;
      for (var shortcutIndex14 = 0; shortcutIndex14 < shortcutListLen14; shortcutIndex14++) {
        var shortcutData14 = shortcutList14[shortcutIndex14];
        output += JIRA.Software.RepositoryShortcuts.Templates.shortcut({canManageShortcuts: opt_data.canManageShortcuts, canManageDVCS: opt_data.canManageDVCS, id: shortcutData14.id, name: shortcutData14.name, url: shortcutData14.url, dvcsType: shortcutData14.dvcsType, shouldWarnPotentialConnection: shortcutData14.shouldWarnPotentialConnection, isFirstSyncRunning: shortcutData14.isFirstSyncRunning});
      }
    }
    output += ((opt_data.canManageShortcuts) ? '<li><a class="aui-nav-item repo-shortcuts-group__add" href="#" data-link-id="repo-shortcut-add">' + aui.icons.icon({useIconFont: true, size: 'large', icon: 'add-small'}) + '<span class="aui-nav-item-label">' + soy.$$escapeHtml('Add source code') + '</span></a></li>' : '') + '</ul></div>';
  }
  return output;
};
if (goog.DEBUG) {
  JIRA.Software.RepositoryShortcuts.Templates.content.soyTemplateName = 'JIRA.Software.RepositoryShortcuts.Templates.content';
}


JIRA.Software.RepositoryShortcuts.Templates.shortcut = function(opt_data, opt_ignored) {
  var output = '';
  var imgBaseUrl__soy37 = "" + '/download/resources/com.atlassian.jira.plugins.jira-development-integration-plugin:repository-shortcuts/images';
  output += '<li class="repo-shortcut"><a class="aui-nav-item repo-shortcuts-group__link" href="' + soy.$$escapeHtml(opt_data.url) + '" title="' + soy.$$escapeHtml(opt_data.name) + '" target="_blank" data-shortcut-id="' + soy.$$escapeHtml(opt_data.id) + '" data-link-id="repo-shortcut-' + soy.$$escapeHtml(opt_data.id) + '">' + ((opt_data.dvcsType == 'bitbucket') ? '<span class="aui-icon aui-icon-large aui-iconfont-bitbucket">' + soy.$$escapeHtml('Bitbucket source code link') + '</span>' : (opt_data.dvcsType == 'github') ? '<img class="aui-icon" src="' + soy.$$escapeHtml(imgBaseUrl__soy37) + '/octocat-icon.svg" alt="' + soy.$$escapeHtml('GitHub source code link') + '" />' : '<span class="aui-icon aui-icon-large aui-iconfont-link">' + soy.$$escapeHtml('Unknown source code link') + '</span>') + '<span class="aui-nav-item-label">' + soy.$$escapeHtml(opt_data.name) + '</span></a>' + ((opt_data.canManageShortcuts) ? '<a href="#repo-shortcuts-dropdown_' + soy.$$escapeHtml(opt_data.id) + '" aria-owns="repo-shortcuts-dropdown_' + soy.$$escapeHtml(opt_data.id) + '" aria-haspopup="true" class="aui-dropdown2-trigger repo-shortcuts-group__actions" style="' + ((opt_data.isFirstSyncRunning || opt_data.shouldWarnPotentialConnection) ? 'right: 40px' : '') + '"><span>' + soy.$$escapeHtml('Actions') + '</span></a><div id="repo-shortcuts-dropdown_' + soy.$$escapeHtml(opt_data.id) + '" class="aui-dropdown2 aui-style-default repo-shortcuts-group__dropdown"><ul class="aui-list-truncate">' + ((opt_data.shouldWarnPotentialConnection) ? '' : '') + '<li><a class="repo-shortcuts-group__actions__edit" href="#">' + soy.$$escapeHtml('Edit') + '</a></li><li><a class="repo-shortcuts-group__actions__delete" href="#">' + soy.$$escapeHtml('Delete') + '</a></li></ul></div>' : '') + ((opt_data.isFirstSyncRunning) ? '<a class="repo-shortcuts-group__warning syncing-trigger" href="#syncing-dialog-' + soy.$$escapeHtml(opt_data.id) + '" data-aui-trigger aria-controls="syncing-dialog-' + soy.$$escapeHtml(opt_data.id) + '"><span class="aui-icon aui-icon-small aui-iconfont-warning" original-title="warning">$' + soy.$$escapeHtml('Sync in progress') + '</span></a>' + JIRA.Software.RepositoryShortcuts.Templates.syncInProgressDialog(opt_data) : '') + ((opt_data.shouldWarnPotentialConnection) ? '<a class="repo-shortcuts-group__warning suggest-connection-trigger" href="#suggest-connection-dialog-' + soy.$$escapeHtml(opt_data.id) + '" data-aui-trigger aria-controls="suggest-connection-dialog-' + soy.$$escapeHtml(opt_data.id) + '"><span class="aui-icon aui-icon-small aui-iconfont-warning" original-title="warning">$' + soy.$$escapeHtml('Sync in progress') + '</span></a>' : '') + '</li>';
  return output;
};
if (goog.DEBUG) {
  JIRA.Software.RepositoryShortcuts.Templates.shortcut.soyTemplateName = 'JIRA.Software.RepositoryShortcuts.Templates.shortcut';
}


JIRA.Software.RepositoryShortcuts.Templates.shortcutFormFields = function(opt_data, opt_ignored) {
  return '<div class="repo-shortcuts-field-group">' + aui.form.textField({name: 'repo-shortcuts-url-' + opt_data.action, id: 'repo-shortcuts-url-' + opt_data.action, labelContent: opt_data.urlLabel ? opt_data.urlLabel : 'Repo link', placeholderText: 'e.g. https://bitbucket.org/org/projectrepository', extraClasses: 'repo-shortcuts-url', value: opt_data.url ? opt_data.url : '', errorTexts: opt_data.errors.urlError ? [opt_data.errors.urlError] : []}) + '<div class="field-group repo-shortcuts-name">' + aui.form.label({forField: 'repo-shortcuts-name-' + opt_data.action, content: opt_data.nameLabel ? opt_data.nameLabel : 'Label'}) + '<div class="repo-shortcuts-name-icon-block"><div class="repo-shortcuts-icon-picker-block"></div>' + aui.form.input({name: 'repo-shortcuts-name-' + opt_data.action, id: 'repo-shortcuts-name-' + opt_data.action, placeholderText: 'e.g. Project repository', extraClasses: 'repo-shortcuts-name-input' + (opt_data.isWithIcon ? ' repo-shortcuts-name-input-with-icon' : ''), value: opt_data.name ? opt_data.name : '', type: 'text'}) + '</div>' + ((opt_data.errors.iconError) ? aui.form.fieldError({message: opt_data.errors.iconError}) : '') + ((opt_data.errors.nameError) ? aui.form.fieldError({message: opt_data.errors.nameError}) : '') + '</div></div>';
};
if (goog.DEBUG) {
  JIRA.Software.RepositoryShortcuts.Templates.shortcutFormFields.soyTemplateName = 'JIRA.Software.RepositoryShortcuts.Templates.shortcutFormFields';
}


JIRA.Software.RepositoryShortcuts.Templates.addDialog = function(opt_data, opt_ignored) {
  return '<div class="repo-shortcuts-header-image add-repo"></div><form action="" method="post" class="aui"><h3>' + soy.$$escapeHtml('Create a repo link') + '</h3><p>' + soy.$$escapeHtml('Add a link to this project\x27s repo so your team can easily find their code.') + '</p><fieldset>' + JIRA.Software.RepositoryShortcuts.Templates.shortcutFormFields(soy.$$augmentMap(opt_data, {action: 'add'})) + '<div class="buttons-container"><div class="buttons repo-shortcuts-buttons">' + aui.buttons.button({text: 'Link repo', type: 'primary', extraClasses: 'repo-shortcuts-submit'}) + aui.buttons.button({text: 'Cancel', type: 'link', extraClasses: 'repo-shortcuts-cancel'}) + '</div></div></fieldset></form>';
};
if (goog.DEBUG) {
  JIRA.Software.RepositoryShortcuts.Templates.addDialog.soyTemplateName = 'JIRA.Software.RepositoryShortcuts.Templates.addDialog';
}


JIRA.Software.RepositoryShortcuts.Templates.adg3ManageShortcutDialog = function(opt_data, opt_ignored) {
  return '<section role="dialog" id="' + soy.$$escapeHtml(opt_data.isAddDialog ? 'add-repository-dialog' : 'edit-repository-dialog') + '" class="aui-layer aui-dialog2 aui-dialog2-medium" aria-hidden="false"><header class="aui-dialog2-header" id="manage-shortcut-dialog-header"></header><div class="aui-dialog2-content"><div id="image-behind"><div id="image-behind-top"></div><div id="image-behind-bottom"></div></div><div id="manage-repository-image-container"><div id="manage-repository-dialog-image"></div></div><form action="" method="post" class="aui"><h1 id="manage-repository-dialog-title">' + soy.$$escapeHtml(opt_data.isAddDialog ? 'Connect a repository' : 'Edit repository') + '</h1><p id="manage-repository-dialog-description">' + soy.$$escapeHtml('Linking a repository will show information about your branches, commits and pull requests in Jira issues.') + '</p><fieldset>' + JIRA.Software.RepositoryShortcuts.Templates.shortcutFormFields(soy.$$augmentMap(opt_data, {action: opt_data.isAddDialog ? 'add' : 'edit', urlLabel: 'Repository link', nameLabel: 'Name'})) + '</fieldset><button type="submit" class="repo-shortcuts-hidden-submit" tabindex="-1"></button></form></div><div class="aui-dialog2-footer"><div class="buttons-container"><div class="buttons">' + ((! opt_data.isAddDialog) ? '<button class="aui-button repo-shortcuts-delete">' + soy.$$escapeHtml('Delete') + '</button>' : '') + '<button class="aui-button aui-button-primary repo-shortcuts-submit">' + soy.$$escapeHtml(opt_data.isAddDialog ? 'Connect' : 'Update') + '</button><button class="aui-button aui-button-text aui-button-subtle repo-shortcuts-cancel">' + soy.$$escapeHtml('Cancel') + '</button></div></div></div></section>';
};
if (goog.DEBUG) {
  JIRA.Software.RepositoryShortcuts.Templates.adg3ManageShortcutDialog.soyTemplateName = 'JIRA.Software.RepositoryShortcuts.Templates.adg3ManageShortcutDialog';
}


JIRA.Software.RepositoryShortcuts.Templates.adg3AddDialog = function(opt_data, opt_ignored) {
  return '' + JIRA.Software.RepositoryShortcuts.Templates.adg3ManageShortcutDialog(soy.$$augmentMap(opt_data, {isAddDialog: true}));
};
if (goog.DEBUG) {
  JIRA.Software.RepositoryShortcuts.Templates.adg3AddDialog.soyTemplateName = 'JIRA.Software.RepositoryShortcuts.Templates.adg3AddDialog';
}


JIRA.Software.RepositoryShortcuts.Templates.adg3EditDialog = function(opt_data, opt_ignored) {
  return '' + JIRA.Software.RepositoryShortcuts.Templates.adg3ManageShortcutDialog(soy.$$augmentMap(opt_data, {isAddDialog: false}));
};
if (goog.DEBUG) {
  JIRA.Software.RepositoryShortcuts.Templates.adg3EditDialog.soyTemplateName = 'JIRA.Software.RepositoryShortcuts.Templates.adg3EditDialog';
}


JIRA.Software.RepositoryShortcuts.Templates.suggestConnectionDialog = function(opt_data, opt_ignored) {
  return '<div class="repo-shortcuts-header-image connection-request"></div><h3 class="repo-shortcuts-connectionRequestHeading">' + soy.$$escapeHtml('Linked but not integrated') + '</h3><p class="repo-shortcuts-connectionRequestDescription">' + soy.$$escapeHtml(AJS.format('Your repo is now linked, but your team can get visibility of development progress in their issues when {0} and Jira are integrated.',opt_data.dvcsName)) + '</p>' + ((opt_data.isIntegration) ? aui.buttons.button({text: AJS.format('Integrate Jira with {0}',opt_data.dvcsName), type: 'primary', extraClasses: 'repo-connection-start'}) : aui.buttons.button({text: 'Sync repository with Jira', type: 'primary', extraClasses: 'repo-connection-start'})) + aui.buttons.button({text: 'No thanks', type: 'link', extraClasses: 'repo-connection-cancel'});
};
if (goog.DEBUG) {
  JIRA.Software.RepositoryShortcuts.Templates.suggestConnectionDialog.soyTemplateName = 'JIRA.Software.RepositoryShortcuts.Templates.suggestConnectionDialog';
}


JIRA.Software.RepositoryShortcuts.Templates.syncInProgressDialog = function(opt_data, opt_ignored) {
  return '<aui-inline-dialog id="syncing-dialog-' + soy.$$escapeHtml(opt_data.id) + '" class="repo-shortcuts-syncing-dialog" responds-to="hover"><div class="repo-shortcuts-syncing-dialog-header"></div><h3>' + soy.$$escapeHtml(AJS.format('Syncing Jira with {0}',opt_data.dvcsType)) + '</h3><p>' + soy.$$escapeHtml(AJS.format('We\x27re busy syncing Jira with {0} \xe2\x80\x93 larger repos will take an hour or two. Once done, your team will',opt_data.dvcsType)) + '&nbsp;<a href="https://confluence.atlassian.com/display/JIRASOFTWARECLOUD/Using+JIRA+applications+with+Bitbucket+Cloud">' + soy.$$escapeHtml('enjoy greater confidence') + '</a>&nbsp;' + soy.$$escapeHtml('in their development process, and they can start') + '&nbsp;<a href="https://confluence.atlassian.com/display/BITBUCKET/Processing+JIRA+Software+issues+with+Smart+Commit+messages">' + soy.$$escapeHtml('using issue keys') + '</a>&nbsp;' + soy.$$escapeHtml('in commit messages right now!') + '</p>' + ((opt_data.canManageDVCS) ? aui.buttons.button({text: 'See syncing progress', type: 'link', href: '/secure/admin/ConfigureDvcsOrganizations!default.jspa'}) : '') + '</aui-inline-dialog>';
};
if (goog.DEBUG) {
  JIRA.Software.RepositoryShortcuts.Templates.syncInProgressDialog.soyTemplateName = 'JIRA.Software.RepositoryShortcuts.Templates.syncInProgressDialog';
}


JIRA.Software.RepositoryShortcuts.Templates.editDialogChrome = function(opt_data, opt_ignored) {
  return '<section role="dialog" id="edit-repo-shortcuts-dialog" class="aui-layer aui-dialog2 aui-dialog2-small" aria-hidden="true" data-aui-remove-on-hide="true"><header class="aui-dialog2-header"><h2 class="aui-dialog2-header-main">' + soy.$$escapeHtml('Edit repo link') + '</h2></header></section>';
};
if (goog.DEBUG) {
  JIRA.Software.RepositoryShortcuts.Templates.editDialogChrome.soyTemplateName = 'JIRA.Software.RepositoryShortcuts.Templates.editDialogChrome';
}


JIRA.Software.RepositoryShortcuts.Templates.editDialog = function(opt_data, opt_ignored) {
  return '<div class="aui-dialog2-content"><form class="aui" method="post">' + JIRA.Software.RepositoryShortcuts.Templates.shortcutFormFields(soy.$$augmentMap(opt_data, {action: 'edit'})) + '<button type="submit" class="repo-shortcuts-hidden-submit" tabindex="-1"></button></form></div><footer class="aui-dialog2-footer"><div class="aui-dialog2-footer-actions">' + aui.buttons.button({text: 'Save', type: 'primary', extraClasses: 'repo-shortcuts-submit'}) + aui.buttons.button({text: 'Cancel', type: 'link', extraClasses: 'repo-shortcuts-cancel'}) + '</div></footer>';
};
if (goog.DEBUG) {
  JIRA.Software.RepositoryShortcuts.Templates.editDialog.soyTemplateName = 'JIRA.Software.RepositoryShortcuts.Templates.editDialog';
}


JIRA.Software.RepositoryShortcuts.Templates.deleteDialog = function(opt_data, opt_ignored) {
  return '<section role="dialog" id="delete-repo-shortcuts-dialog" class="aui-layer aui-dialog2 aui-dialog2-small" aria-hidden="true" data-aui-remove-on-hide="true"><header class="aui-dialog2-header"><h2 class="aui-dialog2-header-main">' + soy.$$escapeHtml('Delete repo link') + '</h2></header><div class="aui-dialog2-content"><p>' + soy.$$escapeHtml('Are you sure you want to delete this repo link?') + '</p></div><footer class="aui-dialog2-footer"><div class="aui-dialog2-footer-actions">' + aui.buttons.button({text: 'Delete', type: 'primary', extraClasses: 'repo-shortcuts-submit'}) + aui.buttons.button({text: 'Cancel', type: 'link', extraClasses: 'repo-shortcuts-cancel'}) + '</div></footer></section>';
};
if (goog.DEBUG) {
  JIRA.Software.RepositoryShortcuts.Templates.deleteDialog.soyTemplateName = 'JIRA.Software.RepositoryShortcuts.Templates.deleteDialog';
}


JIRA.Software.RepositoryShortcuts.Templates.modalValuePropContent = function(opt_data, opt_ignored) {
  var output = '';
  var imgBaseUrl__soy267 = "" + '/download/resources/com.atlassian.jira.plugins.jira-development-integration-plugin:repository-shortcuts/images';
  output += '<div class="aui-dialog2-content"><img src="' + soy.$$escapeHtml(imgBaseUrl__soy267) + '/integrate-product-with-jira.svg" style="width: 100%" /><div class="description-container">' + ((opt_data.canUserManageDVCSAccounts && ! opt_data.isIntegration) ? '<p>' + soy.$$escapeHtml(AJS.format('A shortcut to your {0} repository has been created.',opt_data.dvcsName)) + '</p><p>' + soy.$$escapeHtml(AJS.format('Next, sync your Jira Cloud and {0} repository.',opt_data.dvcsName)) + '</p>' : '') + '</div></div>';
  return output;
};
if (goog.DEBUG) {
  JIRA.Software.RepositoryShortcuts.Templates.modalValuePropContent.soyTemplateName = 'JIRA.Software.RepositoryShortcuts.Templates.modalValuePropContent';
}


JIRA.Software.RepositoryShortcuts.Templates.integrationModalContent = function(opt_data, opt_ignored) {
  return '<header class="aui-dialog2-header"><h2 class="aui-dialog2-header-main" style="overflow: visible">' + ((opt_data.isIntegration) ? soy.$$escapeHtml(AJS.format('Integrate Jira with {0}',opt_data.dvcsName)) : soy.$$escapeHtml('Sync repository with Jira')) + '</h2></header>' + JIRA.Software.RepositoryShortcuts.Templates.modalValuePropContent(opt_data) + '<footer class="aui-dialog2-footer"><div class="aui-dialog2-footer-actions">' + ((opt_data.canUserManageDVCSAccounts && opt_data.isIntegration) ? aui.buttons.button({text: AJS.format('Integrate with {0}',opt_data.dvcsName), type: 'primary', extraClasses: 'repo-connect-start'}) : (opt_data.canUserManageDVCSAccounts && ! opt_data.isIntegration) ? aui.buttons.button({text: 'Start syncing', type: 'primary', extraClasses: 'repo-connect-start'}) : '<div></div>') + ((opt_data.canUserManageDVCSAccounts) ? aui.buttons.button({text: 'Edit repository', type: 'link', extraClasses: 'repo-connect-edit aui-button-subtle'}) : aui.buttons.button({text: 'Maybe later', type: 'link', extraClasses: 'repo-connect-cancel'})) + '</div></footer>';
};
if (goog.DEBUG) {
  JIRA.Software.RepositoryShortcuts.Templates.integrationModalContent.soyTemplateName = 'JIRA.Software.RepositoryShortcuts.Templates.integrationModalContent';
}
;
;
/* module-key = 'com.atlassian.jira.plugins.jira-development-integration-plugin:repository-shortcuts', location = 'jira-development-integration-plugin/js/repository-shortcuts/services/URLMatcher.js' */
"use strict";define("repository-shortcuts/services/url-matcher",[],function(){return{parseUrl:function(t){function s(t,s,e){if(t&&t[1]&&s.indexOf(t[1])===-1&&e.indexOf(t[2])===-1)return{dvcsOrg:t[1],dvcsRepo:t[2]}}function e(){var e=/https:\/\/bitbucket\.org(?:\/([^\/\?#]+)(?:\/([^\/\?#]+))?)?/,r=t.match(e),c=["snippets","account","dashboard"],i=["profile"];return s(r,c,i)}function r(){var e=/https:\/\/github\.com(?:\/([^\/\?#]+)(?:\/([^\/\?#]+))?)?/,r=t.match(e),c=["pulls","issues","notifications","explore","integrations","settings","blog","about","site","security"],i=[];return s(r,c,i)}if("string"!=typeof t)throw new Error("parseUrl expects URLs to be strings");return e()?{dvcsType:"bitbucket",dvcsOrg:e().dvcsOrg,dvcsRepo:e().dvcsRepo}:r()?{dvcsType:"github",dvcsOrg:r().dvcsOrg,dvcsRepo:r().dvcsRepo}:{dvcsType:"unsupported"}}}});;
;
/* module-key = 'com.atlassian.jira.plugins.jira-development-integration-plugin:repository-shortcuts', location = 'jira-development-integration-plugin/js/repository-shortcuts/services/DVCSAccountMatcher.js' */
"use strict";define("repository-shortcuts/services/dvcs-account-matcher",["jquery","underscore","wrm/context-path","repository-shortcuts/services/url-matcher"],function(e,r,t,n){var s=require("jira/featureflags/feature-manager"),i=s.isFeatureEnabled("jsw.classic.reuse-redundant-libs")?window.Promise:require("bluebird/Promise");return{matchUrlAgainstNetwork:function(s){function u(n){var s=t()+"/rest/bitbucket/1.0/repository/summary/find?type="+n.dvcsType+"&orgName="+n.dvcsOrg+"&repoSlug="+n.dvcsRepo;return i.resolve(e.get(s)).then(function(e){return r.extend({},n,e)})["catch"](function(e){return e&&404===e.status?c(n):n})}function c(r){var n=t()+"/rest/bitbucket/1.0/organization/find?name="+r.dvcsOrg+"&type="+r.dvcsType;return i.resolve(e.get(n)).then(function(e){var t=e.dvcsType,n=e.name,s=e.approvalState,i=t===r.dvcsType,u=n===r.dvcsOrg,c="APPROVED"===s;return r.isOrganisationLinked=i&&u&&c,r})["catch"](function(e){return r})}function a(r){var n=t()+"/rest/devinfoadmin/1.0/githubAppDetails";return i.resolve(e.get(n)).then(function(e){var t=e.githubAppInstalled;return t&&(r.isOrganisationLinked=!0,r.isRepositoryLinked=!0),r.githubAppInstalled=t,r})["catch"](function(e){return r})}try{var o=n.parseUrl(s);return"unsupported"===o.dvcsType?i.resolve(o):"github"===o.dvcsType?a(o):o.dvcsRepo?u(o):c(o)}catch(d){return i.reject(d)}}}});;
;
/* module-key = 'com.atlassian.jira.plugins.jira-development-integration-plugin:repository-shortcuts', location = 'jira-development-integration-plugin/js/repository-shortcuts/services/DVCSIntegrator.js' */
"use strict";define("repository-shortcuts/services/dvcs-integrator",["jquery","bluebird/Promise","wrm/context-path","aui/flag"],function(t,e,o,n){function r(r){var i=r.dvcsRepoId,a=r.dvcsRepo;return e.resolve(t.ajax({type:"POST",contentType:"application/json",url:o()+"/rest/bitbucket/1.0/repo/"+i+"/autolink",data:JSON.stringify({payload:!0})})).then(function(){t.ajax({type:"POST",url:o()+"/rest/bitbucket/1.0/repository/"+i+"/softsync"}),n({type:"success",title:"You have added the repository",body:"Nicely done! Your team is going to love this.",close:"auto"})})["catch"](function(t){return n({type:"error",body:AJS.format("Failed to link \u003cstrong\u003e{0}\u003c/strong\u003e repo with Jira",a)}),e.reject(t)})}function i(t){if(void 0===t)return"";var e=t.length;if(0===e)return"";if(1===e)return"/"===t?"":t;var o="/"===t.charAt(0),n="/"===t.charAt(e-1);return t.substring(o?1:0,n?e-1:e)}function a(t,e,o,n,r){var a=i(n),c=t+"//"+i(e)+"/"+i(o),s=i(c);return s+"/"+a+"?atl_token="+r}function c(t){var e=""+o(),n=window.location.host,r=window.location.protocol,i=a(r,n,e,s,t);window.location.href=i}var s="/plugins/servlet/upm/marketplace/plugins/com.github.integration.production";return{startBBOrganisationLink:function(t){var e=""+window.location.origin+o(),n=e+"/rest/aci/1.0/installation/jira-bitbucket-connector-plugin/descriptor",r=document.getElementById("atlassian-token").getAttribute("content"),i=e+"/secure/BitbucketPostInstallApprovalAction.jspa?jiraInitiated=true&customReturnUrl="+(window.location.href+"&atl_token="+r),a="https://bitbucket.org/site/addons/authorize";window.location.href=a+"?account="+t+"&descriptor_uri="+encodeURIComponent(n)+"&redirect_uri="+encodeURIComponent(i)},startBBRepositoryLink:function(t){var e=t.dvcsRepoId,o=t.dvcsRepo;return r({dvcsRepoId:e,dvcsRepo:o})},startGithubOrganisationLink:function(){var t=document.getElementById("atlassian-token").getAttribute("content");c(t)},startGithubRepositoryLink:function(t){var e=(t.dvcsRepoId,t.dvcsRepo,document.getElementById("atlassian-token").getAttribute("content"));c(e)},normalize:function(t){return i(t)},buildAbsoluteAddOnMarketplaceUrl:function(t,e,o,n,r){return a(t,e,o,n,r)}}});;
;
/* module-key = 'com.atlassian.jira.plugins.jira-development-integration-plugin:repository-shortcuts', location = 'jira-development-integration-plugin/js/repository-shortcuts/services/RepoShortcutUpdateHandler.js' */
"use strict";define("repository-shortcuts/services/repo-shortcut-update-handler",["repository-shortcuts/views/connection-modal","aui/flag"],function(e,t){return function(t,r){t.attributes;if(!t.hasLinkedAllComponents()){var o={repoShortcutModel:t,canUserManageDVCSAccounts:r},n=new e(o);r&&n.render()}}});;
;
/* module-key = 'com.atlassian.jira.plugins.jira-development-integration-plugin:repository-shortcuts', location = 'jira-development-integration-plugin/js/repository-shortcuts/models/RepositoryShortcut.js' */
"use strict";define("repository-shortcuts/models/repository-shortcut",[],function(){return JIRA.Projects.Sidebar.ProjectShortcuts.Entities.Shortcut.extend({defaults:{url:"",name:"",icon:"",type:"source.code.link",dvcsType:"unsupported",isPendingApproval:!1,dvcsOrg:void 0,dvcsRepo:void 0,dvcsRepoId:void 0,isOrganisationLinked:void 0,isRepositoryLinked:void 0,isFirstSyncRunning:void 0,githubAppInstalled:!1},clear:function(){this.unset("id"),this.set(this.defaults)},hasLinkedOrg:function(){var t=this.attributes;return t.dvcsOrg&&t.isOrganisationLinked},hasNotLinkedOrg:function(){var t=this.attributes;return t.dvcsOrg&&!t.isOrganisationLinked},hasLinkedOrgAndNotRepo:function(){var t=this.attributes;return this.hasLinkedOrg()&&t.dvcsRepo&&!t.isRepositoryLinked},isGithub:function(){var t=this.attributes;return"github"===t.dvcsType},hasLinkedAllComponents:function(){function t(){return s.dvcsRepo&&s.isRepositoryLinked}function i(){return!s.dvcsRepo}var s=this.attributes;return this.isGithub()?s.githubAppInstalled:this.hasLinkedOrg()&&(t()||i())}})});;
;
/* module-key = 'com.atlassian.jira.plugins.jira-development-integration-plugin:repository-shortcuts', location = 'jira-development-integration-plugin/js/repository-shortcuts/models/RepositoryShortcuts.js' */
"use strict";define("repository-shortcuts/models/repository-shortcuts",["repository-shortcuts/models/repository-shortcut"],function(t){return JIRA.Projects.Sidebar.ProjectShortcuts.Entities.Shortcuts.extend({model:t,initialize:function(t,e){var i=this;this.projectKey=e.projectKey,this.canUserManageDVCSAccounts=e.canUserManageDVCSAccounts,this.listenTo(this,"dvcsremote:change",function(t){i._handleRepoLinkChangeOrAdd(t)})},_handleRepoLinkChangeOrAdd:function(t){var e=function(t,e){return t.get("dvcsType")===e.get("dvcsType")&&t.get("dvcsOrg")===e.get("dvcsOrg")},i=function(t,i){return e(t,i)&&t.get("dvcsRepo")===i.get("dvcsRepo")};this.forEach(function(n){t.id!==n.id&&(i(t,n)?n.set({isOrganisationLinked:t.get("isOrganisationLinked"),isRepositoryLinked:t.get("isRepositoryLinked"),dvcsRepoId:t.get("dvcsRepoId"),isFirstSyncRunning:t.get("isFirstSyncRunning")}):e(t,n)&&n.set({isOrganisationLinked:t.get("isOrganisationLinked")}))})}})});;
;
/* module-key = 'com.atlassian.jira.plugins.jira-development-integration-plugin:repository-shortcuts', location = 'jira-development-integration-plugin/js/repository-shortcuts/views/RepositoryShortcutsList.js' */
"use strict";define("repository-shortcuts/views/repository-shortcut-list",["jquery","repository-shortcuts/views/repository-shortcut","repository-shortcuts/dialogs/add"],function(t,e,o){return JIRA.Projects.Sidebar.ProjectShortcuts.Views.List.extend({template:JIRA.Software.RepositoryShortcuts.Templates.content,childView:e,ui:{itemsContainer:".aui-nav",add:".repo-shortcuts-group__add"},collectionEvents:{add:function(){0!==this.collection.length&&this.$el.hasClass("repo-shortcuts-group_empty")&&this.$el.removeClass("repo-shortcuts-group_empty")},remove:function(){0!==this.collection.length||this.$el.hasClass("repo-shortcuts-group_empty")||this.$el.addClass("repo-shortcuts-group_empty")}},initialize:function(){var e=this;JIRA.API.getSidebar().done(function(o){var r=o.getAUISidebar(!0);r.on("expand-end",function(){t(".aui-sidebar-submenu-dialog .repo-shortcuts-group__dropdown").remove(),t(".aui-sidebar-submenu-dialog .repo-shortcuts-syncing-dialog").remove()}),r.on("collapse-start",function(){e.$(".repo-shortcuts-group__actions.aui-dropdown2-active").trigger("aui-button-invoke"),e._addConnectionsAvailableMarkerOnSidebarIcon()})})},onRender:function(){var t=this,e=new o({sidebarItem:JIRA.API.Sidebar.getGroup(this.options.targetGroup,!0).getItem("repo-shortcut-add"),projectKey:this.collection.projectKey,collection:this.collection}),r=JIRA.API.Projects.getCurrentProjectId();this.listenTo(e,"dialog:open",function(){t.trigger("add:open"),AJS.trigger("analyticsEvent",{name:"jira-software.fe.web.sidebar.connect-repo.add-link.click",data:{projectId:r}})}),this.listenTo(e,"dialog:close",function(e){t.trigger("add:close",e),AJS.trigger("analyticsEvent",{name:"jira-software.fe.web.connect-repo.add-link.close",data:{projectId:r,isSave:e}})}),this._addConnectionsAvailableMarkerOnSidebarIcon()},serializeData:function(){return{canManageShortcuts:!0,numberOfShortcuts:this.collection.length}},_addConnectionsAvailableMarkerOnSidebarIcon:function(){var t=this.collection.some(function(t){return t.hasNotLinkedOrg()||t.hasLinkedOrgAndNotRepo()});t&&this.$el.addClass("connections-available")}})});;
;
/* module-key = 'com.atlassian.jira.plugins.jira-development-integration-plugin:repository-shortcuts', location = 'jira-development-integration-plugin/js/repository-shortcuts/views/RepositoryShortcut.js' */
"use strict";define("repository-shortcuts/views/repository-shortcut",["jquery","underscore","repository-shortcuts/dialogs/connection","repository-shortcuts/dialogs/edit","repository-shortcuts/services/dvcs-integrator"],function(e,t,o,r,i){function n(e){return"bitbucket"===e||"github"===e}return JIRA.Projects.Sidebar.ProjectShortcuts.Views.Shortcut.extend({template:JIRA.Software.RepositoryShortcuts.Templates.shortcut,initialize:function(){t.bindAll(this,"toggleDropdown")},ui:{integrate:".repo-shortcuts-group__actions__integrate",del:".repo-shortcuts-group__actions__delete",edit:".repo-shortcuts-group__actions__edit",trigger:".repo-shortcuts-group__actions",dropdown:".repo-shortcuts-group__dropdown",link:".repo-shortcuts-group__link",connectionDialogTrigger:".suggest-connection-trigger"},templateHelpers:function(){var e=this.model.attributes,t=this.model.collection.canUserManageDVCSAccounts,o=n(e.dvcsType);if(t&&this.model.isGithub()){var r=e.githubAppInstalled;return{warnOnGithubConnection:r}}var i=!(!e.isOrganisationLinked||e.dvcsRepo&&!e.isRepositoryLinked),s=t&&o&&!i;return{shouldWarnPotentialConnection:s}},onRender:function(){this.unwrapTemplate();var t=this,n=e(window),s=e(".aui-sidebar-body");new o({$trigger:this.ui.connectionDialogTrigger,repoShortcutModel:this.model}),this.ui.integrate.on("click",function(e){var o=t.model.attributes;if(e.preventDefault(),t.ui.trigger.blur(),"bitbucket"===o.dvcsType&&t.model.hasNotLinkedOrg())i.startBBOrganisationLink(o.dvcsOrg);else if("bitbucket"===o.dvcsType&&t.model.hasLinkedOrgAndNotRepo())i.startBBRepositoryLink(t.model.attributes).then(function(){t.model.set({isRepositoryLinked:!0}),t.model.trigger("dvcsremote:change",t.model)});else{if("github"!==o.dvcsType)throw"Unsupported DVCS Type";o.githubAppInstalled||i.startGithubOrganisationLink()}}),this.ui.edit.on("click",function(e){e.preventDefault(),t.ui.trigger.blur();var o=new r({repoShortcutModel:t.model,canUserManageDVCSAccounts:t.model.collection.canUserManageDVCSAccounts});t.trigger("edit:open",t.model),t.listenToOnce(o,"dialog:close",function(e){t.trigger("edit:close",t.model,e)})}),this.ui.del.on("click",function(e){e.preventDefault(),t.ui.trigger.blur(),new JIRA.Projects.Sidebar.ProjectShortcuts.Dialogs.Delete({model:t.model})}),this.ui.dropdown.on({"aui-dropdown2-show":function(){t.$el.addClass("aui-nav-selected"),s.one("scroll",t.toggleDropdown),n.one("scroll",t.toggleDropdown),t.ui.trigger.focus()},"aui-dropdown2-hide":function(){t.$el.removeClass("aui-nav-selected"),s.off("scroll",t.toggleDropdown),n.off("scroll",t.toggleDropdown)}}),this.ui.connectionDialogTrigger.on("click",function(){AJS.trigger("analyticsEvent",{name:"jira-software.fe.web.sidebar.connect-repo.warning.click",data:{projectId:JIRA.API.Projects.getCurrentProjectId(),shortcutId:t.model.id}})}),this.ui.link.on("click",function(){AJS.trigger("analyticsEvent",{name:"jira-software.fe.web.sidebar.connect-repo.shortcut.click",data:{projectId:JIRA.API.Projects.getCurrentProjectId(),shortcutId:t.model.id,shortcutType:t.model.dvcsType}})})},serializeData:function(){var e=t.extend(this.model.toJSON(),{canManageShortcuts:!0,canManageDVCS:this.model.collection.canUserManageDVCSAccounts});return e}})});;
;
/* module-key = 'com.atlassian.jira.plugins.jira-development-integration-plugin:repository-shortcuts', location = 'jira-development-integration-plugin/js/repository-shortcuts/views/DialogContent.js' */
"use strict";define("repository-shortcuts/views/dialog-content",["repository-shortcuts/services/url-matcher","repository-shortcuts/services/dvcs-account-matcher"],function(t,e){var r=JIRA.Projects.Sidebar.ProjectShortcuts.Views.DialogContent;return r.extend({ui:{form:"form",inputs:"input, button",submit:".repo-shortcuts-submit",cancel:".repo-shortcuts-cancel",url:".repo-shortcuts-url input",name:".repo-shortcuts-name input"},events:{"click @ui.cancel":function(t){t.preventDefault(),this.model.clear(),this.setNameAutomagically=!0,this.errorModel.clear(),this.trigger("cancel")},"click @ui.submit":"_handleFormSubmit","submit @ui.form":"_handleFormSubmit","blur @ui.url":function(){this.ensureProtocolPrefix(),this.tryToAutomagicallyDeriveNameFromUrl()},"input @ui.url":function(){this.model.set("url",this.ui.url.val()),this.tryToAutomagicallyDeriveNameFromUrl()},"input @ui.name":function(){this.setNameAutomagically=!1,this.model.set("name",this.ui.name.val())}},initialize:function(t){var e=t.errorModel,r=t.canUserManageDVCSAccounts;this.canUserManageDVCSAccounts=r,this.errorModel=e;var i=this.model.get("name");this.setNameAutomagically=0===i.length},serializeData:function(){return _.extend(this.model.toJSON(),{errors:this.errorModel.toJSON(),action:this.action})},onRender:function(){},hideIconPicker:function(){},_handleFormSubmit:function(r){var i=this,o=function(t){i.model.set({url:i.ui.url.val(),name:i.ui.name.val()}),i.model.set(t),i.model.save()};r.preventDefault(),this.ensureProtocolPrefix(),this.tryToAutomagicallyDeriveNameFromUrl(),this.model.set(this.model.defaults);var s=this.ui.url.val();if(this.canUserManageDVCSAccounts)e.matchUrlAgainstNetwork(s).then(function(t){return o(t)})["catch"](function(){return o({})});else{var a=t.parseUrl(s);o(a)}},tryToAutomagicallyDeriveNameFromUrl:function(){var e=this.ui.url.val().trim();if(this.setNameAutomagically){var i=t.parseUrl(e);if(i.dvcsRepo)this.setName(i.dvcsRepo);else{if(!i.dvcsOrg)return r.prototype.tryToAutomagicallyDeriveNameFromUrl.call(this);this.setName(i.dvcsOrg)}}}})});;
;
/* module-key = 'com.atlassian.jira.plugins.jira-development-integration-plugin:repository-shortcuts', location = 'jira-development-integration-plugin/js/repository-shortcuts/views/AddDialogContent.js' */
"use strict";define("repository-shortcuts/views/add-dialog-content",["repository-shortcuts/views/dialog-content"],function(t){var e=JIRA.Software.RepositoryShortcuts.Templates.adg3AddDialog;return t.extend({template:e})});;
;
/* module-key = 'com.atlassian.jira.plugins.jira-development-integration-plugin:repository-shortcuts', location = 'jira-development-integration-plugin/js/repository-shortcuts/views/EditDialogContent.js' */
"use strict";define("repository-shortcuts/views/edit-dialog-content",["repository-shortcuts/views/dialog-content"],function(t){return t.extend({template:JIRA.Software.RepositoryShortcuts.Templates.adg3EditDialog,ui:_.extend({},t.prototype.ui,{"delete":".repo-shortcuts-delete"})})});;
;
/* module-key = 'com.atlassian.jira.plugins.jira-development-integration-plugin:repository-shortcuts', location = 'jira-development-integration-plugin/js/repository-shortcuts/views/ConnectionDialogContent.js' */
"use strict";define("repository-shortcuts/views/connection-dialog-content",["repository-shortcuts/services/dvcs-integrator"],function(t){return JIRA.Projects.Libs.Marionette.ItemView.extend({template:JIRA.Software.RepositoryShortcuts.Templates.suggestConnectionDialog,ui:{start:".repo-connection-start",cancel:".repo-connection-cancel"},events:{"click @ui.start":function(t){t.preventDefault(),this.triggerSubmitAnalyticEvent(),this.startConnection(),this.trigger("connection:start")},"click @ui.cancel":function(t){t.preventDefault(),this.triggerCancelAnalyticEvent(),this.trigger("connection:cancel")}},triggerSubmitAnalyticEvent:function(){this.isIntegration?AJS.trigger("analyticsEvent",{name:"jira-software.fe.web.connect-repo.inline-integrate.click",data:{projectId:JIRA.API.Projects.getCurrentProjectId(),shortcutType:this.dvcsName}}):AJS.trigger("analyticsEvent",{name:"jira-software.fe.web.connect-repo.inline-sync.click",data:{projectId:JIRA.API.Projects.getCurrentProjectId(),shortcutType:this.dvcsName}})},triggerCancelAnalyticEvent:function(){this.isIntegration?AJS.trigger("analyticsEvent",{name:"jira-software.fe.web.connect-repo.inline-integrate.cancel",data:{projectId:JIRA.API.Projects.getCurrentProjectId(),shortcutType:this.dvcsName}}):AJS.trigger("analyticsEvent",{name:"jira-software.fe.web.connect-repo.inline-sync.cancel",data:{projectId:JIRA.API.Projects.getCurrentProjectId(),shortcutType:this.dvcsName}})},templateHelpers:function(){return{dvcsName:this.dvcsName,isIntegration:this.isIntegration}},initialize:function(e){var n=e.repoShortcutModel,i=function(t){t.set({isRepositoryLinked:!0}),t.trigger("dvcsremote:change",t)},r=n.attributes;if(this.dvcsName="bitbucket"===r.dvcsType?"Bitbucket":"GitHub",this.isIntegration=n.hasNotLinkedOrg(),"bitbucket"===r.dvcsType&&n.hasNotLinkedOrg())this.startConnection=function(){return t.startBBOrganisationLink(r.dvcsOrg)};else if("bitbucket"===r.dvcsType&&n.hasLinkedOrgAndNotRepo())this.startConnection=function(){t.startBBRepositoryLink(n.attributes).then(function(){return i(n)})};else{if("github"!==r.dvcsType)throw"Unsupported DVCS Type";r.githubAppInstalled||(this.startConnection=function(){t.startGithubOrganisationLink()})}}})});;
;
/* module-key = 'com.atlassian.jira.plugins.jira-development-integration-plugin:repository-shortcuts', location = 'jira-development-integration-plugin/js/repository-shortcuts/views/modal-dialogs/ConnectionModal.js' */
"use strict";define("repository-shortcuts/views/connection-modal",["underscore","aui/flag","repository-shortcuts/services/dvcs-integrator"],function(t,e,i){var n="aui-dialog2-small";return JIRA.Projects.Libs.Marionette.ItemView.extend({template:JIRA.Software.RepositoryShortcuts.Templates.integrationModalContent,tagName:"section",attributes:{role:"dialog","class":"aui-layer aui-dialog2 "+n+" repo-integration-dialog","aria-hidden":"true","data-aui-modal":"false","data-aui-focus-selector":".aui-dialog2-content .repo-connect-start"},ui:{submit:".repo-connect-start",cancel:".repo-connect-cancel",edit:".repo-connect-edit"},events:{"click @ui.submit":function(t){t.preventDefault(),this.triggerSubmitAnalyticEvent(),this.handleSubmit()},"click @ui.cancel":function(t){t.preventDefault(),this.triggerCancelAnalyticEvent(),this._removeAndHide()},"click @ui.edit":function(t){t.preventDefault(),this._removeAndHide(),this.triggerEditAnalyticEvent(),this.repoShortcutModel.trigger("edit:start",this.repoShortcutModel.id)}},templateHelpers:function(){return{dvcsName:this.dvcsName,canUserManageDVCSAccounts:this.canUserManageDVCSAccounts,isIntegration:this.isIntegration}},_removeAndHide:function(){var t=this;AJS.dialog2(this.$el).hide(),setTimeout(function(){return t.destroy()})},triggerSubmitAnalyticEvent:function(){this.canUserManageDVCSAccounts&&(this.isIntegration?AJS.trigger("analyticsEvent",{name:"jira-software.fe.web.connect-repo.integrate.click",data:{projectId:JIRA.API.Projects.getCurrentProjectId(),shortcutType:this.dvcsName}}):AJS.trigger("analyticsEvent",{name:"jira-software.fe.web.connect-repo.sync.click",data:{projectId:JIRA.API.Projects.getCurrentProjectId(),shortcutType:this.dvcsName}}))},triggerEditAnalyticEvent:function(){this.canUserManageDVCSAccounts&&(this.isIntegration?AJS.trigger("analyticsEvent",{name:"jira-software.fe.web.connect-repo.integrate.edit",data:{projectId:JIRA.API.Projects.getCurrentProjectId(),shortcutType:this.dvcsName}}):AJS.trigger("analyticsEvent",{name:"jira-software.fe.web.connect-repo.sync.edit",data:{projectId:JIRA.API.Projects.getCurrentProjectId(),shortcutType:this.dvcsName}}))},triggerCancelAnalyticEvent:function(){this.canUserManageDVCSAccounts&&(this.isIntegration?AJS.trigger("analyticsEvent",{name:"jira-software.fe.web.connect-repo.integrate.cancel",data:{projectId:JIRA.API.Projects.getCurrentProjectId(),shortcutType:this.dvcsName}}):AJS.trigger("analyticsEvent",{name:"jira-software.fe.web.connect-repo.sync.cancel",data:{projectId:JIRA.API.Projects.getCurrentProjectId(),shortcutType:this.dvcsName}}))},initialize:function(t){var e=this,n=t.repoShortcutModel,r=t.canUserManageDVCSAccounts;this.repoShortcutModel=n;var a=function(t){t.set({isRepositoryLinked:!0}),t.trigger("dvcsremote:change",t),e._removeAndHide()},c=n.attributes;if(this.dvcsName="bitbucket"===c.dvcsType?"Bitbucket":"GitHub",this.canUserManageDVCSAccounts=r,this.isIntegration=n.hasNotLinkedOrg(),"bitbucket"===c.dvcsType&&n.hasNotLinkedOrg()&&r)this.handleSubmit=function(){return i.startBBOrganisationLink(c.dvcsOrg)};else if("bitbucket"===c.dvcsType&&n.hasLinkedOrgAndNotRepo()&&r)this.handleSubmit=function(){i.startBBRepositoryLink(n.attributes).then(function(){return a(n)})["catch"](function(){return e._removeAndHide()})};else{if("github"!==c.dvcsType)throw"Unsupported DVCS Type";c.githubAppInstalled||(this.handleSubmit=function(){i.startGithubOrganisationLink()})}},onRender:function(){AJS.dialog2(this.$el).show()}})});;
;
/* module-key = 'com.atlassian.jira.plugins.jira-development-integration-plugin:repository-shortcuts', location = 'jira-development-integration-plugin/js/repository-shortcuts/dialogs/Add.js' */
"use strict";define("repository-shortcuts/dialogs/add",["jquery","repository-shortcuts/models/repository-shortcut","repository-shortcuts/views/add-dialog-content","repository-shortcuts/services/repo-shortcut-update-handler"],function(e,t,s,i){return JIRA.Projects.Sidebar.ProjectShortcuts.Dialogs.Add.extend({initialize:function(r){_.bindAll(this,"hide","refresh","focusForm");var o=this;this.analyticsSave=!1,this.sidebarItem=r.sidebarItem,this.projectKey=r.projectKey,this.collection=r.collection,this.model=new t(null,{projectKey:this.projectKey}),this.errorModel=new JIRA.Projects.Sidebar.ProjectShortcuts.Entities.ShortcutErrors(null,{model:this.model}),this.view=new s({model:this.model,errorModel:this.errorModel,canUserManageDVCSAccounts:this.collection.canUserManageDVCSAccounts}),this.view.render();var c=e(window),n=e(document),a=e(".aui-sidebar-body");this.dialog=AJS.InlineDialog(this.sidebarItem.ui.link,"repo-shortcuts-group__add-dialog",function(e,t,s){return o.sidebarItem.$el.addClass("aui-nav-selected"),o.view.render(),o.view.$el.appendTo(e),o.view.ui.url.focus(),c.on("scroll.repo-shortcuts",function(){o.refresh()}),a.on("scroll.repo-shortcuts",function(){o.hide()}),n.on("showLayer",o.focusForm),c.on("resize",o.refresh),s(),!1},{gravity:"w",autoWidth:!0,initCallback:function(){o.trigger("dialog:open"),o.analyticsSave=!1},hideCallback:function(){o.sidebarItem.$el.removeClass("aui-nav-selected"),o.sidebarItem.ui.link.blur(),c.off("scroll.repo-shortcuts"),a.off("scroll.repo-shortcuts"),n.off("showLayer",o.focusForm),o.trigger("dialog:close",o.analyticsSave)},persistent:!0,closeOnTriggerClick:!0}),this.listenTo(this.view,"render",this.refresh),this.listenTo(this.view,"cancel",this.hideAndRender),this.listenTo(this.model,"save:success",function(){var e=new t(this.model.toJSON(),{projectKey:this.projectKey});this.collection.add(e),this.model.clear(),this.analyticsSave=!0,this.hide(),"bitbucket"!==e.attributes.dvcsType&&"github"!==e.attributes.dvcsType||i(e,this.collection.canUserManageDVCSAccounts),AJS.trigger("analyticsEvent",{name:"jira-software.fe.web.sidebar.connect-repo.link-repo.click",data:{projectId:JIRA.API.Projects.getCurrentProjectId(),dvcsType:e.attributes.dvcsType}})}),this.listenTo(this.sidebarItem,"before:select",function(e){return e.preventDefault()}),AJS.sidebar(".aui-sidebar").on("collapse-start",this.hide),e(".repo-shortcuts-group").on("click","li",this.hide)}})});;
;
/* module-key = 'com.atlassian.jira.plugins.jira-development-integration-plugin:repository-shortcuts', location = 'jira-development-integration-plugin/js/repository-shortcuts/dialogs/AddModal.js' */
"use strict";define("repository-shortcuts/dialogs/add-modal",["jquery","repository-shortcuts/models/repository-shortcut","repository-shortcuts/views/add-dialog-content","repository-shortcuts/services/repo-shortcut-update-handler","aui/flag"],function(e,t,o,s,i){return JIRA.Projects.Libs.Marionette.Controller.extend({initialize:function(e){this.collection=e.collection,this.projectKey=e.projectKey,this.projectId=e.projectId,this.analyticsSave=!1,this.model=new t(null,{projectKey:this.projectKey}),this.errorModel=new JIRA.Projects.Sidebar.ProjectShortcuts.Entities.ShortcutErrors(null,{model:this.model}),this.view=new o({model:this.model,errorModel:this.errorModel,canUserManageDVCSAccounts:this.collection.canUserManageDVCSAccounts}),this.view.render(),this.dialog=AJS.dialog2(this.view.$el),this.listenTo(this.model,"save:success",function(){var e=new t(this.model.toJSON(),{projectKey:this.projectKey});this.collection.add(e),this.model.clear(),AJS.trigger("analyticsEvent",{name:"jira-software.fe.web.sidebar.connect-repo.link-repo.click",data:{projectId:this.projectId,dvcsType:e.attributes.dvcsType}}),this.analyticsSave=!0,this._closeDialog(),"bitbucket"===e.attributes.dvcsType||"github"===e.attributes.dvcsType?(s(e,this.collection.canUserManageDVCSAccounts),e.hasLinkedAllComponents()&&i({type:"success",title:"You have added the repository",body:"Nicely done! Your team is going to love this.",close:"manual"})):i({type:"success",title:"You have added the shortcut",body:"Nicely done! Your team is going to love this.",close:"manual"})}),this.listenTo(this.view,"cancel",this._closeDialog),this.listenTo(this.dialog,"hide",this._cleanUpDialog)},show:function(){this.dialog.show(),this.view.ui.url.focus(),AJS.trigger("analyticsEvent",{name:"jira-software.fe.web.sidebar.connect-repo.add-link.click",data:{projectId:this.projectId}})},_closeDialog:function(){this.dialog.hide()},_cleanUpDialog:function(){AJS.trigger("analyticsEvent",{name:"jira-software.fe.web.connect-repo.add-link.close",data:{projectId:this.projectId,isSave:this.analyticsSave}}),e("#add-repository-dialog").parent().remove()}})});;
;
/* module-key = 'com.atlassian.jira.plugins.jira-development-integration-plugin:repository-shortcuts', location = 'jira-development-integration-plugin/js/repository-shortcuts/dialogs/Edit.js' */
"use strict";define("repository-shortcuts/dialogs/edit",["jquery","repository-shortcuts/models/repository-shortcut","repository-shortcuts/views/edit-dialog-content","repository-shortcuts/services/repo-shortcut-update-handler","aui/flag"],function(e,t,o,r,s){return JIRA.Projects.Sidebar.ProjectShortcuts.Dialogs.Edit.extend({initialize:function(i){var c=this,d=i.repoShortcutModel,n=i.canUserManageDVCSAccounts;_.bindAll(this,"hide"),this.model=new t(d.toJSON(),{projectKey:d.projectKey||d.collection.projectKey}),this.errorModel=new JIRA.Projects.Sidebar.ProjectShortcuts.Entities.ShortcutErrors((void 0),{model:this.model}),this.view=new o({model:this.model,errorModel:this.errorModel,canUserManageDVCSAccounts:n}),this.view.render();var a=e(JIRA.Software.RepositoryShortcuts.Templates.editDialogChrome({}));this.view.$el.appendTo(a),this.dialog=AJS.dialog2(a),this.dialog.show(),this.view.ui.url.focus();var l=JIRA.API.Projects.getCurrentProjectId();this.view.ui["delete"].on("click",function(e){AJS.trigger("analyticsEvent",{name:"jira-software.fe.web.sidebar.connect-repo.delete-link.click",data:{projectId:l,shortcutId:c.model.id}}),e.preventDefault(),c.hide();var t=new JIRA.Projects.Sidebar.ProjectShortcuts.Dialogs.Delete({model:c.model});c.listenToOnce(t,"dialog:close",function(e){e?AJS.trigger("analyticsEvent",{name:"jira-software.fe.web.sidebar.connect-repo.delete-link.confirm",data:{projectId:l,shortcutId:c.model.id}}):AJS.trigger("analyticsEvent",{name:"jira-software.fe.web.sidebar.connect-repo.delete-link.cancel",data:{projectId:l,shortcutId:c.model.id}})})}),this.listenTo(this.model,"remove:success",function(){AJS.trigger("analyticsEvent",{name:"jira-software.fe.web.sidebar.connect-repo.delete-link.success",data:{projectId:l,shortcutId:c.model.id}}),d.collection.remove(d),s({type:"success",body:"Shortcut deleted.",close:"manual"})}),this.listenTo(this.model,"save:start",function(){AJS.trigger("analyticsEvent",{name:"jira-software.fe.web.sidebar.connect-repo.edit.save",data:{projectId:JIRA.API.Projects.getCurrentProjectId(),shortcutId:c.model.id}})}),this.listenTo(this.view,"cancel",function(){AJS.trigger("analyticsEvent",{name:"jira-software.fe.web.sidebar.connect-repo.edit.cancel",data:{projectId:JIRA.API.Projects.getCurrentProjectId(),shortcutId:d.id}}),c.hide()}),this.listenTo(this.model,"save:success",function(){AJS.trigger("analyticsEvent",{name:"jira-software.fe.web.sidebar.connect-repo.edit.success",data:{projectId:JIRA.API.Projects.getCurrentProjectId(),shortcutId:c.model.id}}),c.hide(),d.set(c.model.toJSON()),"bitbucket"===d.get("dvcsType")||"github"===d.get("dvcsType")?(r(d,n),d.hasLinkedAllComponents()&&s({type:"success",body:"You have updated the repository",close:"manual"})):s({type:"success",body:"You have updated the shortcut",close:"manual"})}),this.dialog.on("hide",function(){return c.trigger("dialog:close",c.analyticsSave)})}})});;
;
/* module-key = 'com.atlassian.jira.plugins.jira-development-integration-plugin:repository-shortcuts', location = 'jira-development-integration-plugin/js/repository-shortcuts/dialogs/Connection.js' */
"use strict";define("repository-shortcuts/dialogs/connection",["jquery","underscore","repository-shortcuts/views/connection-dialog-content"],function(i,e,o){return JIRA.Projects.Libs.Marionette.Controller.extend({initialize:function(t){var r=this,s=t.$trigger,n=t.repoShortcutModel;e.bindAll(this,"hide");var c=this,l={gravity:"w",persistent:!0,closeOnTriggerClick:!0,initCallback:function(){c.trigger("dialog:open"),c.analyticsSave=!1},hideCallback:function(){i(window).off("scroll.repo-shortcuts"),i(".aui-sidebar-body").off("scroll.repo-shortcuts"),i(document).off("showLayer",c.focusForm),c.trigger("syncDialog:close")}},a=function(e,o,t){var s=i(window),n=i(".aui-sidebar-body");return e.addClass("connection-dialog"),r.view.render(),r.view.$el.appendTo(e),s.on("resize",r.refresh),s.on("scroll.repo-shortcuts",r.refresh),n.on("scroll.repo-shortcuts",r.hide),t(),!1},d="suggest-connection-dialog-"+n.id;this.view=new o({repoShortcutModel:n}),this.listenTo(this.view,"connection:start",this.hide),this.listenTo(this.view,"connection:cancel",this.hide),this.dialog=AJS.InlineDialog(s,d,a,l),AJS.sidebar(".aui-sidebar").on("collapse-start",this.hide)},hide:function(){this.dialog.hide()},refresh:function(){this.dialog.refresh()}})});;
;
/* module-key = 'com.atlassian.jira.plugins.jira-development-integration-plugin:repository-shortcuts-shortcut-utils', location = 'jira-development-integration-plugin/js/repository-shortcuts/utils/ShortcutUtils.js' */
"use strict";define("repository-shortcuts/utils/repository-shortcut-utils",["exports"],function(t){t.mapDvcsTypeToIcon=function(t){switch(t){case"bitbucket":return"bitbucket";case"github":return"repos";default:return"shortcut"}},t.shouldShowSync=function(t,e){var s=t.attributes,i="bitbucket"===s.dvcsType||"github"===s.dvcsType,o=Boolean(s.isOrganisationLinked&&(!s.dvcsRepo||s.isRepositoryLinked));return e&&i&&!o}});;
;
/* module-key = 'com.atlassian.jira.plugins.jira-development-integration-plugin:repository-shortcuts-navigation-next', location = 'jira-development-integration-plugin/js/repository-shortcuts/integration/navigation-next.js' */
"use strict";define("repository-shortcuts/navigation-next",["jquery","underscore","bluebird/Promise","jira/dev-status/util/es6","repository-shortcuts/models/repository-shortcuts","repository-shortcuts/dialogs/add-modal","repository-shortcuts/dialogs/edit","repository-shortcuts/views/connection-modal","repository-shortcuts/utils/repository-shortcut-utils","repository-shortcuts/services/dvcs-account-matcher","jira/featureflags/feature-manager"],function(t,e,n,r,o,i,c,a,s,u,d){var l="com.atlassian.jira.jira-projects-plugin:source.code.link.",f="com.atlassian.jira.plugins.jira-development-integration-plugin:repository-shortcuts-navigation-next.repository-shortcuts-data",p="com.pyxis.greenhopper.jira:project-sidebar-simple-add-repo",g=WRM.data.claim(f),h=g.canManageDVCS,m="endeavour.performance.shortcuts-optimization",v=d.isFeatureEnabled(m);return function(d){var f=d.shortcuts,g=d.onAdd,m=d.onEdit,y=d.onDelete,j=d.onBulkEdit,E=d.projectKey,A=void 0===E?"":E,I=d.projectId,w=void 0===I?"":I,S=d.isAdmin,C=void 0!==S&&S,b=d.canUserManageDVCSAccounts,D=void 0===b?h:b,M=A||JIRA.API.Projects.getCurrentProjectKey(),P=w||JIRA.API.Projects.getCurrentProjectId(),k=C||D,x=new o([],{canUserManageDVCSAccounts:k,projectKey:M}),J=!1,K=function(t){if(!J){var e=t.get("icon");if(e)return e}return s.mapDvcsTypeToIcon(t.get("dvcsType"))},R=function(t){return s.shouldShowSync(t,k)},U=function(t){return l+t.id},V=function(t,n){return e.extend({},n,{name:t.get("name"),url:t.get("url"),type:t.get("type"),id:U(t),icon:K(t),showSync:R(t),onEditClick:function(){return F(t.id,"sidebar")},onSyncClick:function(){return N(t.id)}})},T=function(t){return{name:t.text,url:t.href,id:t.id,icon:t.icon}},q=function(){return new i({collection:x,projectKey:M,projectId:P}).show()},F=function(t,e){AJS.trigger("analyticsEvent",{name:"jira-software.fe.web.sidebar.connect-repo.edit",data:{projectId:P,shortcutId:t,referrer:e}}),new c({repoShortcutModel:x.get(t),canUserManageDVCSAccounts:k})},N=function(t){return new a({repoShortcutModel:x.get(t),canUserManageDVCSAccounts:k}).render()},W=function(t){return g(V(t,{canEdit:!0}))},z=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.canEdit,r=[].concat(t);v?j(r.map(function(t){return V(t,{canEdit:n})})):r.forEach(function(t){return m(V(t,{canEdit:n}))})},B=function(t){return y(U(t))};x.add(f.map(T),{projectKey:M}),f._collection=x,f.length&&!v&&z(x.models,{canEdit:f[0].canEdit}),x.on("add",function(t){return W(t)}).on("change",function(t,e){var n=e.canEdit,r=void 0===n||n;return z(t,{canEdit:r})}).on("remove",function(t){return B(t)}).on("edit:start",function(t){return F(t,"integrationDialog")});var O=f.map(function(t){return u.matchUrlAgainstNetwork(t.href)});return n.all(O).then(function(t){J=!0,t.forEach(function(t,e){var n=f[e],r=x.get(n.id);r&&r.set(t,{silent:v,canEdit:n.canEdit})}),v&&r.requestIdleCallback(function(){f.length&&z(x.models,{canEdit:f[0].canEdit})})})["catch"](function(t){AJS.trigger("analyticsEvent",{name:"jira-software.fe.web.notifications.connect-repo.shortcut-data-retrieve-fail",errorMessage:t&&t.message})}),(JIRA.API.getNavigationApi||t.Deferred)().then(function(t){t.onItemClick(t.viewIds.SOFTWARE,p,q)}),{add:q}}});;
;
/* module-key = 'com.atlassian.analytics.analytics-client:js-events', location = 'js/node_modules/@atlassian/cloud-analytics-js/store-1.3.1.js' */
/* Copyright (c) 2010-2012 Marcus Westin
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

(function(){
	var store = {},
		win = window,
		doc = win.document,
		localStorageName = 'localStorage',
		globalStorageName = 'globalStorage',
		namespace = '__storejs__',
		storage;

	store.disabled = false;
	store.set = function(key, value) {};
	store.get = function(key) {};
	store.remove = function(key) {};
	store.clear = function() {};
	store.transact = function(key, transactionFn) {
		var val = store.get(key);
		if (typeof val == 'undefined') { val = {} }
		transactionFn(val);
		store.set(key, val);
	};

	store.serialize = function(value) {
		return JSON.stringify(value);
	};
	store.deserialize = function(value) {
		if (typeof value != 'string') { return undefined }
		return JSON.parse(value);
	};

	// Functions to encapsulate questionable FireFox 3.6.13 behavior 
	// when about.config::dom.storage.enabled === false
	// See https://github.com/marcuswestin/store.js/issues#issue/13
	function isLocalStorageNameSupported() {
		try { return (localStorageName in win && win[localStorageName]); }
		catch(err) { return false; }
	}
	
	function isGlobalStorageNameSupported() {
		try { return (globalStorageName in win && win[globalStorageName] && win[globalStorageName][win.location.hostname]); }
		catch(err) { return false; }
	}	

	if (isLocalStorageNameSupported()) {
		storage = win[localStorageName];
		store.set = function(key, val) {
			if (val === undefined) { return store.remove(key); }
			storage.setItem(key, store.serialize(val));
		};
		store.get = function(key) { return store.deserialize(storage.getItem(key)); };
		store.remove = function(key) { storage.removeItem(key); };
		store.clear = function() { storage.clear(); };

	} else if (isGlobalStorageNameSupported()) {
		storage = win[globalStorageName][win.location.hostname];
		store.set = function(key, val) {
			if (val === undefined) { return store.remove(key); }
			storage[key] = store.serialize(val);
		};
		store.get = function(key) { return store.deserialize(storage[key] && storage[key].value); };
		store.remove = function(key) { delete storage[key]; };
		store.clear = function() { for (var key in storage ) { delete storage[key]; } };

	} else if (doc.documentElement.addBehavior) {
		var storageOwner,
			storageContainer;
		// Since #userData storage applies only to specific paths, we need to
		// somehow link our data to a specific path.  We choose /favicon.ico
		// as a pretty safe option, since all browsers already make a request to
		// this URL anyway and being a 404 will not hurt us here.  We wrap an
		// iframe pointing to the favicon in an ActiveXObject(htmlfile) object
		// (see: http://msdn.microsoft.com/en-us/library/aa752574(v=VS.85).aspx)
		// since the iframe access rules appear to allow direct access and
		// manipulation of the document element, even for a 404 page.  This
		// document can be used instead of the current document (which would
		// have been limited to the current path) to perform #userData storage.
		try {
			storageContainer = new ActiveXObject('htmlfile');
			storageContainer.open();
			storageContainer.write('<s' + 'cript>document.w=window</s' + 'cript><iframe src="/favicon.ico"></frame>');
			storageContainer.close();
			storageOwner = storageContainer.w.frames[0].document;
			storage = storageOwner.createElement('div');
		} catch(e) {
			// somehow ActiveXObject instantiation failed (perhaps some special
			// security settings or otherwse), fall back to per-path storage
			storage = doc.createElement('div');
			storageOwner = doc.body;
		}
		function withIEStorage(storeFunction) {
			return function() {
				var args = Array.prototype.slice.call(arguments, 0);
				args.unshift(storage);
				// See http://msdn.microsoft.com/en-us/library/ms531081(v=VS.85).aspx
				// and http://msdn.microsoft.com/en-us/library/ms531424(v=VS.85).aspx
				storageOwner.appendChild(storage);
				storage.addBehavior('#default#userData');
				storage.load(localStorageName);
				var result = storeFunction.apply(store, args);
				storageOwner.removeChild(storage);
				return result;
			}
		}
		store.set = withIEStorage(function(storage, key, val) {
			if (val === undefined) { return store.remove(key) }
			storage.setAttribute(key, store.serialize(val));
			storage.save(localStorageName);
		});
		store.get = withIEStorage(function(storage, key) {
			return store.deserialize(storage.getAttribute(key));
		});
		store.remove = withIEStorage(function(storage, key) {
			storage.removeAttribute(key);
			storage.save(localStorageName);
		});
		store.clear = withIEStorage(function(storage) {
			var attributes = storage.XMLDocument.documentElement.attributes;
			storage.load(localStorageName);
			for (var i=0, attr; attr = attributes[i]; i++) {
				storage.removeAttribute(attr.name);
			}
			storage.save(localStorageName);
		});
	}
	
	try {
		store.set(namespace, namespace);
		if (store.get(namespace) != namespace) { store.disabled = true; }
		store.remove(namespace);
	} catch(e) {
		store.disabled = true;
	}
	
	if (typeof module != 'undefined') { module.exports = store; }
	else if (typeof define === 'function' && define.amd) { define(store); }
	else { this.store = store; }
})();;
;
/* module-key = 'com.atlassian.analytics.analytics-client:js-events', location = 'js/node_modules/@atlassian/cloud-analytics-js/page-visibility.js' */
define('atlassian/analytics/page-visibility', function () {
    var hasBrowserSupport = (document.hidden !== undefined);

    /**
     * A partial wrapper for the Page Visibility API
     * @exports atlassian/analytics/page-visibility
     */
    var wrapper = {

        /** Is the API supported by the browser? */
        supported: hasBrowserSupport,

        /**
         * A proxy for `document.hidden`.
         * Defaults to false if the API is not supported by the browser
         * @returns {boolean}
         */
        isHidden: function () {
            return hasBrowserSupport ? document.hidden : false;
        }
    };

    return wrapper;
});;
;
/* module-key = 'com.atlassian.analytics.analytics-client:js-events', location = 'js/node_modules/@atlassian/cloud-analytics-js/atlassian-analytics.js' */
(function ($) {
    /**
     * There's a scenario where analytics queues can become "stuck".
     * A mutex that's meant to stop multiple tabs from draining a queue,
     * is never reset, causing queues to grow, until they fill localStorage.
     *
     * If we detect that the queue is abnormally large (ie. larger than
     * SUSPICIOUS_SIZE) and the mutex is locked, then we reset both the
     * queue and the mutex.
     * @param productKey
     */
    function resetStuckQueues (productKey) {
        var SUSPICIOUS_SIZE = 250 * 1024;
        var EVENT_QUEUE_KEY = 'atlassian-analytics.' + productKey;
        var EVENT_QUEUE_LOCK_KEY = EVENT_QUEUE_KEY + '.lock';
        var UNLOCKED_VALUE = 'null';
        var queueSize = (window.localStorage[EVENT_QUEUE_KEY] || '').length;
        var isLocked = (window.localStorage[EVENT_QUEUE_LOCK_KEY] || UNLOCKED_VALUE) !== UNLOCKED_VALUE;
        if (isLocked && queueSize > SUSPICIOUS_SIZE) {
            window.localStorage[EVENT_QUEUE_KEY] = JSON.stringify([{
                name: 'grow0.event.queue.cleared',
                time: new Date().valueOf(),
                properties: {queueSize: queueSize}
            }]);
            window.localStorage[EVENT_QUEUE_LOCK_KEY] = UNLOCKED_VALUE;
        }
    }

    ['jira', 'confluence', 'unknown'].forEach(function (productKey) {
        try {
            resetStuckQueues(productKey);
        } catch (e) {
            // silence errors
        }
    });

    // Make sure we are getting the jQuery.ajax method, even if it has been overridden elsewhere.
    // This will only work if this code is executed before any code which overrides the ajax method.
    var $ajax = AJS.$.ajax;
    var baseStorageKey = 'atlassian-analytics';
    var contextPath =
        typeof AJS.contextPath == "function" ? AJS.contextPath() :
        typeof AJS.Confluence != "undefined" ? AJS.Confluence.getContextPath() :
        window.contextPath != null ? window.contextPath : "";

    var publish = null;
    var storageKey = null;
    var lockKey = null;

    // A unique identifier for this browser tab
    // Source: http://stackoverflow.com/a/2117523
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });

    var determineStorageKey = function(){
        // We need to give each product it's own key for events because in ondemand multiple product live
        // at the same url.
        var product = 'unknown';
        if (document.body.id == 'jira'){
            product = 'jira';
        }
        else if (document.body.id == 'com-atlassian-confluence'){
            product = 'confluence';
        }
        storageKey = baseStorageKey + '.' + product;
        lockKey = storageKey + '.lock';
    };

    var getLock = function() {
        if (store.get(lockKey)) {
            return false;
        }

        store.set(lockKey, uuid);

        // Reduce chance of race condition - read back lock to make sure we still have it
        return (store.get(lockKey) === uuid);
    };

    var releaseLock = function() {
        store.set(lockKey, null);
    };

    /**
     * Persists the events that have been generated until such time that they can be sent.
     */
    var saveForLater = function() {
        var events = [],
            event,
            e, i, ii;
        if (AJS.EventQueue.length == 0)
            return;
        // Prime our events array with anything that's already saved.
        events = store.get(storageKey) || events;
        // Suck the events out of the event queue and in to our events array.
        for (i = 0, ii = AJS.EventQueue.length; i < ii; ++i) {
            e = AJS.EventQueue[i];
            if (e.name) {
                // the queue could contain anything - shear unusable properties
                event = { name: e.name, properties: e.properties, time: e.time || 0};
                events.push(event);
            }
        }
        // Empty the event queue
        AJS.EventQueue.length = 0;
        // Save our events for later
        store.set(storageKey, events);
    };

    // Variable to track the number of retries to publish
    var bulkPublishRetryCount = 0;

    /**
     * Gets the amount of time that should be waited until the next publish attempt.
     * @param retryCount How many requests failed since the last successful publish.
     * @returns {number} how many ms that should be waited.
     */
    var getBulkPublishBackoff = function (retryCount) {
        return Math.min(5000 * Math.pow(2, retryCount), 5*60*1000);
    };

    /**
     * Publishes every event that's ready for publishing.
     */
    var bulkPublish = function() {
        var events;

        function reschedule() {
            setTimeout(bulkPublish, getBulkPublishBackoff(bulkPublishRetryCount = 0));
        }

        function rescheduleFailed() {
            setTimeout(bulkPublish, getBulkPublishBackoff(++bulkPublishRetryCount));
        }

        // Avoid multiple browser tabs hitting this all at once
        if (!getLock()) {
            return reschedule();
        }

        // Make sure every event we might have is stored.
        saveForLater();
        // Pull the stored events out and get 'em ready for transmission.
        events = store.get(storageKey);

        if (!events || !events.length) {
            releaseLock();
            return reschedule();
        }

        // Wipe the stored events.
        store.remove(storageKey);

        releaseLock();

        // Validate events and remove any dodgy ones
        if (!validateEvents(events)) {
            return reschedule();
        }

        // try to present a rough timing of events that the server can interpret relative to it's own time.
        var currentTime = new Date().getTime();
        for (var i = 0; i < events.length; i++){
            if (events[i].time > 0){
                events[i].timeDelta = events[i].time - currentTime;
            }
            else{
                // just fake it. This corresponds to a millisecond for each place behind last in the array.
                // This should be rare. Basically, events added to EventQueue before this script was loaded.
                events[i].timeDelta = i - events.length;
            }
            delete events[i].time;
        }

        // AJS.safe.post appears to corrupt a JSON data object, so we send it as a context param instead.
        // Failing to JSON encode the data results in jQuery not attempting to send, and silently swallowing our attempt
        publish = $ajax({
            type: "POST",
            url: contextPath + "/rest/analytics/1.0/publish/bulk",
            data: JSON.stringify(events),
            contentType: "application/json",
            dataType: "json"
        });
        // In case the transmission fails, let's keep the events we just attempted to send.
        publish.fail(function() {
            // This actually drops events, but the alternative is to use something like:
            //   $.merge(AJS.EventQueue, events);
            // Unfortunately using that will cause some fairly nasty issues where duplicate events continually
            // get sent - see https://jira.atlassian.com/browse/AA-179 for more details.
            // TODO: investigate why the above happens and fix this functionality for good
            AJS.EventQueue.concat(events);

            saveForLater();
            rescheduleFailed();
        });
        publish.done(function () {
            reschedule();
        });
    };

    /**
     * Check for any invalid events and remove/sanitise them.
     * @param events - the list of events to be published
     * @returns the number of valid events remaining
     */
    var validateEvents = function(events) {
        for (var i = events.length - 1; i >= 0; i--) {
            var validMsg = "";
            var event = events[i];
            var properties = event.properties;
            if (typeof event.name === "undefined") {
                validMsg = "you must provide a name for the event.";
            } else if (typeof properties !== "undefined" && properties !== null) {
                if (properties.constructor !== Object) {
                    validMsg = "properties must be an object with key value pairs.";
                } else {
                    sanitiseProperties(properties);
                }
            }
            if (validMsg !== "") {
                AJS.log("WARN: Invalid analytics event detected and ignored, " + validMsg + "\nEvent: "+JSON.stringify(event));
                events.splice(i, 1);
            }
        }
        return events.length;
    };

    var sanitiseProperties = function(properties) {
        for (var propertyName in properties) {
            if (properties.hasOwnProperty(propertyName)) {
                var propertyValue = properties[propertyName];

                if (valueExists(propertyValue) && isAllowedType(propertyValue)) {
                    // Do nothing - the property value is safe & allowed already
                } else if (valueExists(propertyValue) && propertyValue.toString) {
                    // Sanitise the property value by invoking its "toString"
                    properties[propertyName] = propertyValue.toString();
                } else {
                    // If it's an undefined, null or invalid value - blank it out
                    properties[propertyName] = "";
                }
            }
        }
    };

    function valueExists(propertyValue) {
        return typeof propertyValue !== "undefined" && propertyValue !== null;
    }

    function isAllowedType(propertyValue) {
        return typeof propertyValue === "number" || typeof propertyValue === "string" || typeof propertyValue === "boolean";
    }

    var cancelPublish = function() {
        if (publish && !(publish.state() === "resolved" || publish.state() === "rejected")) {
            publish.abort(); // This will cancel the request to the server, and cause the events to be saved for later.
        }
    };

    /**
     * Provides a way to publish events asynchronously, without requiring AJS.Events to have loaded.
     * Users of this property must conditionally initialise it to an empty array. Objects pushed
     * must have a name property, and optionally a properties property of other data to send.
     * @example
     * AJS.EventQueue = AJS.EventQueue || [];
     * AJS.EventQueue.push({name: 'eventName', properties: {some: 'data', more: true, hits: 20}});
     */
    AJS.EventQueue = AJS.EventQueue || [];

    var arrayPush = Array.prototype.push;
    AJS.EventQueue.push = function(obj) {
    	obj.time = new Date().getTime();
    	arrayPush.call(AJS.EventQueue, obj);
    };

    AJS.toInit(function() {
    	determineStorageKey();
        setTimeout(bulkPublish, 500);
        removeOldAnalytics();
    });
    $(window).unload(function() {
        cancelPublish();
        saveForLater();
    });

    /**
     * @deprecated since v3.39, please trigger as normal and use whitelisting to denote privacy policy safe events
     */
    AJS.Analytics = {
        triggerPrivacyPolicySafeEvent: function(name, properties) {
            AJS.log("WARN: 'triggerPrivacyPolicySafeEvent' has been deprecated");
            AJS.EventQueue.push({name: name, properties: properties});
        }
    };

    /**
     * Binds to an event that developers can trigger without having to do any feature check.
     * If this code is available then the event will get published and if it's not the event
     * will go unnoticed.
     * @example
     * AJS.trigger('analytics', {name: 'pageSaved', data: {pageName: page.name, space: page.spaceKey}});
     */
    AJS.bind('analytics', function(event, data) {
    	AJS.EventQueue.push({name: data.name, properties: data.data});
    });

    // legacy binding until Confluence page layout JS is updated
    AJS.bind('analyticsEvent', function(event, data) {
    	AJS.EventQueue.push({name: data.name, properties: data.data});
    });

    /**
     * As part of bundling this plugin in BTF now, we need to remove the existing JIRA analytics setting if we see it.
     */
    var removeOldAnalytics = function () {
        if (window.location.pathname.indexOf("/secure/admin/ViewApplicationProperties") > -1) {
            AJS.$("[data-property-id='analytics-enabled']").remove();
        } else if (window.location.pathname.indexOf("/secure/admin/EditApplicationProperties") > -1) {
            var $analytics = AJS.$(":contains(Enable Atlassian analytics)");
            if ($analytics.size() > 0) {
                var parentElement = $analytics[$analytics.size() - 2];
                if (parentElement) {
                    parentElement.remove();
                }
            }
        }
    }

}(AJS.$));
;
;
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:dialog-options-v5', location = 'atlassian-connect/v5/js/iframe/host/dialog-options.js' */
!function(){window._AP=window._AP||{};var a,n=WRM.data.claim("com.atlassian.plugins.atlassian-connect-plugin:dialog-options.data");for(a in n)n.hasOwnProperty(a)&&(window._AP[a]=n[a])}();;
;
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:iframe-host-utils-v5', location = 'atlassian-connect/v5/js/iframe/host/util.js' */
window._AP=window._AP||{};_AP.util={escapeSelector:function(e){if(!e)throw new Error("No selector to escape");return e.replace(/[!"#$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g,"\\$&")},isGlobalDefined:function(e){return void 0!==window[e]},awaitGlobal:function(e,t,r){r=r||100;var a;_AP.util.isGlobalDefined(e)?t(window[e]):a=setInterval(function(){if(_AP.util.isGlobalDefined(e)){clearInterval(a);t(window[e])}},r)},getBooleanFeatureFlag:function(e){if(AJS&&AJS.DarkFeatures&&AJS.DarkFeatures.isEnabled&&AJS.DarkFeatures.isEnabled(e))return!0;var t=document.querySelector('meta[name="ajs-fe-feature-flags"]');if(!t)return!1;var r=t.getAttribute("content");if(!r)return!1;t={};try{t=JSON.parse(r)}catch(e){return!1}return!(!t[e]||"boolean"!=typeof t[e].value)&&t[e].value}};;
;
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-core-v5', location = 'atlassian-connect/v5/js/core/connect-host.js' */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).connectHost=t()}(this,function(){"use strict";var i=function(e,t){e.prototype=Object.create(t.prototype);(e.prototype.constructor=e).__proto__=t};function a(){}a.prototype=Object.create(null);function t(){t.init.call(this)}(t.EventEmitter=t).usingDomains=!1;t.prototype.domain=void 0;t.prototype._events=void 0;t.prototype._maxListeners=void 0;t.defaultMaxListeners=10;t.init=function(){this.domain=null;t.usingDomains&&(void 0).active;if(!this._events||this._events===Object.getPrototypeOf(this)._events){this._events=new a;this._eventsCount=0}this._maxListeners=this._maxListeners||void 0};t.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw new TypeError('"n" argument must be a positive number');this._maxListeners=e;return this};function d(e){return void 0===e._maxListeners?t.defaultMaxListeners:e._maxListeners}t.prototype.getMaxListeners=function(){return d(this)};t.prototype.emit=function(e){var t,n,i,o,r,s="error"===e,a=this._events;if(a)s=s&&null==a.error;else if(!s)return!1;r=this.domain;if(s){t=arguments[1];if(!r){if(t instanceof Error)throw t;s=new Error('Uncaught, unspecified "error" event. ('+t+")");s.context=t;throw s}(t=t||new Error('Uncaught, unspecified "error" event')).domainEmitter=this;t.domain=r;t.domainThrown=!1;r.emit("error",t);return!1}if(!(n=a[e]))return!1;var d,c="function"==typeof n;switch(d=arguments.length){case 1:!function(e,t,n){if(t)e.call(n);else for(var i=e.length,o=l(e,i),r=0;r<i;++r)o[r].call(n)}(n,c,this);break;case 2:!function(e,t,n,i){if(t)e.call(n,i);else for(var o=e.length,r=l(e,o),s=0;s<o;++s)r[s].call(n,i)}(n,c,this,arguments[1]);break;case 3:!function(e,t,n,i,o){if(t)e.call(n,i,o);else for(var r=e.length,s=l(e,r),a=0;a<r;++a)s[a].call(n,i,o)}(n,c,this,arguments[1],arguments[2]);break;case 4:!function(e,t,n,i,o,r){if(t)e.call(n,i,o,r);else for(var s=e.length,a=l(e,s),d=0;d<s;++d)a[d].call(n,i,o,r)}(n,c,this,arguments[1],arguments[2],arguments[3]);break;default:i=new Array(d-1);for(o=1;o<d;o++)i[o-1]=arguments[o];!function(e,t,n,i){if(t)e.apply(n,i);else for(var o=e.length,r=l(e,o),s=0;s<o;++s)r[s].apply(n,i)}(n,c,this,i)}return!0};function n(e,t,n,i){var o,r,s;if("function"!=typeof n)throw new TypeError('"listener" argument must be a function');if(r=e._events){if(r.newListener){e.emit("newListener",t,n.listener||n);r=e._events}s=r[t]}else{r=e._events=new a;e._eventsCount=0}if(s){"function"==typeof s?s=r[t]=i?[n,s]:[s,n]:i?s.unshift(n):s.push(n);if(!s.warned&&(o=d(e))&&0<o&&s.length>o){s.warned=!0;var i=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+t+" listeners added. Use emitter.setMaxListeners() to increase limit");i.name="MaxListenersExceededWarning";i.emitter=e;i.type=t;i.count=s.length;i=i,"function"==typeof console.warn?console.warn(i):console.log(i)}}else{s=r[t]=n;++e._eventsCount}return e}t.prototype.addListener=function(e,t){return n(this,e,t,!1)};t.prototype.on=t.prototype.addListener;t.prototype.prependListener=function(e,t){return n(this,e,t,!0)};function o(e,t,n){var i=!1;function o(){e.removeListener(t,o);if(!i){i=!0;n.apply(e,arguments)}}o.listener=n;return o}t.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');this.on(e,o(this,e,t));return this};t.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');this.prependListener(e,o(this,e,t));return this};t.prototype.removeListener=function(e,t){var n,i,o,r,s;if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');if(!(i=this._events))return this;if(!(n=i[e]))return this;if(n===t||n.listener&&n.listener===t)if(0==--this._eventsCount)this._events=new a;else{delete i[e];i.removeListener&&this.emit("removeListener",e,n.listener||t)}else if("function"!=typeof n){o=-1;for(r=n.length;0<r--;)if(n[r]===t||n[r].listener&&n[r].listener===t){s=n[r].listener;o=r;break}if(o<0)return this;if(1===n.length){n[0]=void 0;if(0==--this._eventsCount){this._events=new a;return this}delete i[e]}else!function(e,t){for(var n=t,i=n+1,o=e.length;i<o;n+=1,i+=1)e[n]=e[i];e.pop()}(n,o);i.removeListener&&this.emit("removeListener",e,s||t)}return this};t.prototype.removeAllListeners=function(e){var t,n=this._events;if(!n)return this;if(!n.removeListener){if(0===arguments.length){this._events=new a;this._eventsCount=0}else n[e]&&(0==--this._eventsCount?this._events=new a:delete n[e]);return this}if(0===arguments.length){for(var i,o=Object.keys(n),r=0;r<o.length;++r)"removeListener"!==(i=o[r])&&this.removeAllListeners(i);this.removeAllListeners("removeListener");this._events=new a;this._eventsCount=0;return this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(t)for(;this.removeListener(e,t[t.length-1]),t[0];);return this};t.prototype.listeners=function(e){var t=this._events,n=t&&(n=t[e])?"function"==typeof n?[n.listener||n]:function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(n):[];return n};t.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):r.call(e,t)};t.prototype.listenerCount=r;function r(e){var t=this._events;if(t){e=t[e];if("function"==typeof e)return 1;if(e)return e.length}return 0}t.prototype.eventNames=function(){return 0<this._eventsCount?Reflect.ownKeys(this._events):[]};function l(e,t){for(var n=new Array(t);t--;)n[t]=e[t];return n}var s,c,u=new(function(t){i(e,t);function e(){var e=t.call(this)||this;e.setMaxListeners(20);return e}var n=e.prototype;n.dispatch=function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];this.emit.apply(this,["before:"+e].concat(n));this.emit.apply(this,arguments);this.emit.apply(this,["after:"+e].concat(n))};n.registerOnce=function(e,t){if("string"!=typeof e)throw"ACJS: event name must be string";this.once(e,t)};n.register=function(e,t){if("string"!=typeof e)throw"ACJS: event name must be string";this.on(e,t)};n.unregister=function(e,t){if("string"!=typeof e)throw"ACJS: event name must be string";this.removeListener(e,t)};return e}(t)),f=window.AJS&&window.AJS.$||function(){},p=[];"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&(s=new IntersectionObserver(function(e){e.forEach(function(e){var n,t=e.intersectionRatio,e=e.target;if(0<t){s.unobserve(e);n=e,p=p.filter(function(e){var t=e.element,e=e.callback;if(t!==n)return!0;e();return!1})}})},{threshold:.25}),c=s.observe.bind(s));function g(e){if(AJS&&AJS.DarkFeatures&&AJS.DarkFeatures.isEnabled&&AJS.DarkFeatures.isEnabled(e))return!0;var t=window.featureFlags||AJS&&AJS.Meta&&AJS.Meta.get&&AJS.Meta.get("fe-feature-flags");if(!t)return!1;var n={};try{n="object"==typeof t?t:JSON.parse(t)}catch(e){return!1}return!(!n[e]||"boolean"!=typeof n[e].value)&&n[e].value}var h=new(function(){function e(){this._addons={}}var t=e.prototype;t._track=function(e,t){var n=window,e="connect.addon."+e;(t=t||{}).version=n._AP&&n._AP.version?n._AP.version:void 0;t.userAgent=n.navigator.userAgent;if(!n.AJS)return!1;if(n.AJS.Analytics)n.AJS.Analytics.triggerPrivacyPolicySafeEvent(e,t);else{if(!n.AJS.trigger)return!1;AJS.trigger("analyticsEvent",{name:e,data:t})}return!0};t._trackGasV3=function(e,t){try{window.require("ac/analytics").emitGasV3(e,t)}catch(e){console.info("Connect GasV3 catch",e)}};t._time=function(){return window.performance&&window.performance.now?window.performance.now():(new Date).getTime()};t.trackLoadingStarted=function(e){if(this._addons&&e&&e.id){e.startLoading=this._time();this._addons[e.id]=e}else console.error("ACJS: cannot track loading analytics",this._addons,e)};t.trackLoadingEnded=function(e){var t=this;if(this._addons&&e&&this._addons[e.id]){var n,i=e.url,o=void 0!==i&&-1===i.indexOf("xdm_e="),r=this._time()-this._addons[e.id].startLoading,i=this.getIframeLoadApdex(r);try{n=Object.keys(JSON.parse(this._addons[e.id].$el[0].name).api).sort().toString()}catch(e){n="error"}var s={addonKey:e.addon_key,moduleKey:e.key,moduleType:e.options?e.options.moduleType:void 0,moduleLocation:e.options?e.options.moduleLocation:void 0,pearApp:e.options&&"true"===e.options.pearApp?"true":"false",iframeLoadMillis:r,iframeLoadApdex:i,iframeIsCacheable:o,value:2e4<r?"x":Math.ceil(r/100),api:n};"function"==typeof window.requestIdleCallback?window.requestIdleCallback(function(){return t._track("iframe.performance.load",s)},{timeout:100}):this._track("iframe.performance.load",s)}else console.error("ACJS: cannot track loading end analytics",this._addons,e)};t.getIframeLoadApdex=function(e){return e<=300?1:e<=1200?.5:0};t.trackLoadingTimeout=function(e){var t=window.navigator.onLine;this._track("iframe.performance.timeout",{addonKey:e.addon_key,moduleKey:e.key,moduleType:e.options?e.options.moduleType:void 0,moduleLocation:e.options?e.options.moduleLocation:void 0,pearApp:e.options&&"true"===e.options.pearApp?"true":"false",connectedStatus:(t="boolean"!=typeof t?"not-supported":t).toString()});this.trackLoadingEnded(e)};t.trackLoadingCancel=function(e){this._track("iframe.performance.cancel",{addonKey:e.addon_key,moduleKey:e.key,moduleType:e.options?e.options.moduleType:void 0,moduleLocation:e.options?e.options.moduleLocation:void 0,pearApp:e.options&&"true"===e.options.pearApp?"true":"false"})};t.trackUseOfDeprecatedMethod=function(e,t){this._track("jsapi.deprecated",{addonKey:t.addon_key,moduleKey:t.key,methodUsed:e})};t.trackMultipleDialogOpening=function(e,t){this._track("jsapi.dialog.multiple",{addonKey:t.addon_key,moduleKey:t.key,dialogType:e})};t.trackVisible=function(e){this._track("iframe.is_visible",{addonKey:e.addon_key,moduleKey:e.key,moduleType:e.options?e.options.moduleType:void 0,pearApp:e.options&&"true"===e.options.pearApp?"true":"false"})};t.trackIframePerformance=function(e,t){this._trackGasV3("operational",{source:t.addon_key,action:"iframeRendered",actionSubject:"connectAddon",actionSubjectId:t.addon_key,attributes:{key:t.key,pearApp:this._getPearApp(t),moduleType:this._getModuleType(t),iframeIsCacheable:this._isCacheable(t),moduleLocation:this._getModuleLocation(t),domainLookupTime:e.domainLookupTime,connectionTime:e.connectionTime,decodedBodySize:e.decodedBodySize,domContentLoadedTime:e.domContentLoadedTime,fetchTime:e.fetchTime}})};t.dispatch=function(e,t){this._track(e,t)};t.trackExternal=function(e,t){this._track(e,t)};t._resetAnalyticsDueToUnreliable=function(e){if(!e)throw new Error("Cannot reset analytics due to no extension id");if(this._addons[e]){clearTimeout(this._addons[e]);delete this._addons[e]}else console.info("Cannot clear analytics, cache does not contain extension id")};t._isCacheable=function(e){e=e.url;return void 0!==e&&-1===e.indexOf("xdm_e=")};t._getModuleType=function(e){return e.options?e.options.moduleType:void 0};t._getModuleLocation=function(e){return e.options?e.options.moduleLocation:void 0};t._getPearApp=function(e){return e.options&&"true"===e.options.pearApp};t.trackGasV3Visible=function(e){this._trackGasV3("operational",{action:"iframeViewed",actionSubject:"connectAddon",actionSubjectId:e.addon_key,attributes:{moduleType:this._getModuleType(e),iframeIsCacheable:this._isCacheable(e),moduleKey:e.key,moduleLocation:this._getModuleLocation(e),pearApp:this._getPearApp(e)},source:e.addon_key})};t.trackGasV3LoadingEnded=function(e){var t=this._time()-this._addons[e.id].startLoading;this._trackGasV3("operational",{action:"iframeLoaded",actionSubject:"connectAddon",actionSubjectId:e.addon_key,attributes:{moduleType:this._getModuleType(e),iframeIsCacheable:this._isCacheable(e),iframeLoadMillis:t,moduleKey:e.key,moduleLocation:this._getModuleLocation(e),pearApp:this._getPearApp(e)},source:e.addon_key})};t.trackGasV3LoadingTimeout=function(e){this._trackGasV3("operational",{action:"iframeTimeout",actionSubject:"connectAddon",actionSubjectId:e.addon_key,attributes:{moduleType:this._getModuleType(e),iframeIsCacheable:this._isCacheable(e),moduleKey:e.key,moduleLocation:this._getModuleLocation(e),pearApp:this._getPearApp(e)},source:e.addon_key})};return e}());f.fn&&u.register("iframe-create",function(e){h.trackLoadingStarted(e.extension)});u.register("iframe-bridge-start",function(e){h.trackLoadingStarted(e.extension)});u.register("iframe-bridge-established",function(e){h.trackLoadingEnded(e.extension);!function(e,t){if("function"==typeof t&&e instanceof Element){p.push({element:e,callback:t});c(e)}}(document.getElementById(e.extension.id),function(){u.dispatch("iframe-visible",e.extension);h.trackVisible(e.extension);h.trackGasV3Visible(e.extension)})});u.register("iframe-bridge-established",function(e){h.trackGasV3LoadingEnded(e.extension)});u.register("iframe-bridge-timeout",function(e){h.trackLoadingTimeout(e.extension)});u.register("iframe-bridge-cancelled",function(e){h.trackLoadingCancel(e.extension)});u.register("analytics-deprecated-method-used",function(e){h.trackUseOfDeprecatedMethod(e.methodUsed,e.extension)});u.register("analytics-iframe-performance",function(e){h.trackIframePerformance(e.metrics,e.extension)});u.register("iframe-destroyed",function(e){h._resetAnalyticsDueToUnreliable(e.extension.extension_id)});u.register("analytics-external-event-track",function(e){h.trackExternal(e.eventName,e.values)});u.register("iframe-bridge-timeout",function(e){h.trackGasV3LoadingTimeout(e.extension)});var m=function(e,t){u.dispatch("iframe-bridge-timeout",{$el:e,extension:t})},y=function(e,t){u.dispatch("iframe-bridge-cancelled",{$el:e,extension:t})},v="ap-status-indicator",_='<div class="ap-loading"><div class="small-spinner"></div>Loading app...</div>',x='<div class="ap-load-timeout"><div class="small-spinner"></div>App is not responding. Wait or <a href="#" class="ap-btn-cancel">cancel</a>?</div>',b="App failed to load.",w=new(function(){function e(){this._stateRegistry={}}var t=e.prototype;t._loadingContainer=function(e){return e.find("."+v)};t.render=function(){var e=document.createElement("div");e.classList.add(v);e.innerHTML=_;e=f(e);this._startSpinner(e);return e};t._startSpinner=function(t){setTimeout(function(){var e=t.find(".small-spinner");e.length&&e.spin&&e.spin({lines:12,length:3,width:2,radius:3,trail:60,speed:1.5,zIndex:1})},10)};t.hide=function(e,t){this._clearTimeout(t);this._loadingContainer(e)[0].style.display="none"};t.cancelled=function(e,t){var n=b;this._loadingContainer(e).empty().text(n)};t._setupTimeout=function(e,t){this._stateRegistry[t.id]=setTimeout(function(){m(e,t)},12e3)};t._clearTimeout=function(e){if(this._stateRegistry[e]){clearTimeout(this._stateRegistry[e]);delete this._stateRegistry[e]}};t.timeout=function(e,t){var n=f(x),i=this._loadingContainer(e);i.empty().append(n);this._startSpinner(i);f("a.ap-btn-cancel",i).click(function(){y(e,t)});this._clearTimeout(t);return i};return e}());u.register("iframe-create",function(e){e.extension.options.noDom||w._setupTimeout(e.$el.parents(".ap-iframe-container"),e.extension)});u.register("iframe-bridge-established",function(e){e.extension.options.noDom||w.hide(e.$el.parents(".ap-iframe-container"),e.extension.id)});u.register("iframe-bridge-timeout",function(e){e.extension.options.noDom||w.timeout(e.$el,e.extension.id)});u.register("iframe-bridge-cancelled",function(e){e.extension.options.noDom||w.cancelled(e.$el,e.extension.id)});u.register("iframe-destroyed",function(e){w._clearTimeout(e.extension.extension_id)});var k=function(e,t){if(null==e)return{};for(var n,i={},o=Object.keys(e),r=0;r<o.length;r++){n=o[r];0<=t.indexOf(n)||(i[n]=e[n])}return i};function E(e,t){A=E=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return E(e,t)}var A=E,C=A;function I(e,t,n){O=I=function(){if("undefined"!=typeof Reflect&&Reflect.construct&&!Reflect.construct.sham){if("function"==typeof Proxy)return 1;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return 1}catch(e){return}}}()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);i=new(Function.bind.apply(e,i));n&&C(i,n.prototype);return i};return I.apply(null,arguments)}var O=I,S=O,P="[Simple-XDM] ",T=Function.prototype.bind,M={locationOrigin:function(){return window.location.origin||window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")},randomString:function(){return Math.floor(1e9*Math.random()).toString(16)},isString:function(e){return"string"==typeof e||e instanceof String},argumentsToArray:function(e){return Array.prototype.slice.call(e)},argumentNames:function(e){return e.toString().replace(/((\/\/.*$)|(\/\*[^]*?\*\/))/gm,"").replace(/[^(]+\(([^)]*)[^]+/,"$1").match(/([^\s,]+)/g)||[]},hasCallback:function(e){var t=e.length;return 0<t&&"function"==typeof e[t-1]},error:function(e){if(window.console&&window.console.error){var t=[];if("string"==typeof e){t.push(P+e);t=t.concat(Array.prototype.slice.call(arguments,1))}else{t.push(P);t=t.concat(Array.prototype.slice.call(arguments))}window.console.error.apply(null,t)}},warn:function(e){window.console&&console.warn(P+e)},log:function(e){window.console&&window.console.log(P+e)},_bind:function(e,t){return T&&t.bind===T?t.bind(e):function(){return t.apply(e,arguments)}},throttle:function(t,n,i){var o=0;return function(){var e=Date.now();if(n<e-o){o=e;t.apply(i,arguments)}}},each:function(e,t){var n,i;if(e)if(null!=(n=e.length)&&"function"!=typeof e){i=0;for(;i<n&&!1!==t.call(e[i],i,e[i]);)i+=1}else for(i in e)if(e.hasOwnProperty(i)&&!1===t.call(e[i],i,e[i]))break},extend:function(n){var e=arguments;[].slice.call(e,1,e.length).forEach(function(t){"object"==typeof t&&Object.getOwnPropertyNames(t).forEach(function(e){n[e]=t[e]})});return n},sanitizeStructuredClone:function(e){var r=[Boolean,String,Date,RegExp,Blob,File,FileList,ArrayBuffer],s=[Error,Node],a=M.warn,d=[];return function e(t){if("function"==typeof t){a("A function was detected and removed from the message.");return null}if(s.some(function(e){if(t instanceof e){a(e.name+" object was detected and removed from the message.");return!0}return!1}))return{};if(t&&"object"==typeof t&&r.every(function(e){return!(t instanceof e)})){var n;if(Array.isArray(t))n=t.map(e);else{if(-1<d.indexOf(t)){a("A circular reference was detected and removed from the message.");return null}d.push(t);n={};for(var i in t)if(t.hasOwnProperty(i)){var o=e(t[i]);null!==o&&(n[i]=o)}d.pop()}return n}return t}(e)},getOrigin:function(e,t){if("function"==typeof URL)try{return new URL(e,t).origin}catch(e){}var n=document.implementation.createHTMLDocument("");if(t){var i=n.createElement("base");i.href=t;n.head.appendChild(i)}i=n.createElement("a");i.href=e;n.body.appendChild(i);n=i.protocol+"//"+i.hostname;e.match(/\/\/[^/]+:[0-9]+\//)&&(n+=i.port?":"+i.port:"");return n}},D=function(n){i(t,n);var e=t.prototype;e._padUndefinedArguments=function(e,t){return e.length>=t?e:e.concat(new Array(t-e.length))};function t(e){var t;(t=n.call(this,e=e||{})||this)._registeredExtensions=e.extensions||{};t._registeredAPIModules={};t._registeredAPIModules._globals={};t._pendingCallbacks={};t._keycodeCallbacks={};t._clickHandler=null;t._pendingEvents={};t._messageHandlers={init:t._handleInit,req:t._handleRequest,resp:t._handleResponse,broadcast:t._handleBroadcast,event_query:t._handleEventQuery,key_triggered:t._handleKeyTriggered,addon_clicked:t._handleAddonClick,get_host_offset:t._getHostOffset,unload:t._handleUnload,sub:t._handleSubInit};return t}e._verifyAPI=function(e,t){var n=e.data.targets;if(n){var i=this.getApiSpec(),o=!1;!function t(n,i){Object.getOwnPropertyNames(i).forEach(function(e){"object"==typeof i[e]&&n[e]?t(n[e],i[e]):"parent"===i[e]&&n[e]&&(o=!0)})}(i,n);e.source.postMessage({type:"api_tamper",tampered:o},t.extension.url)}};e._handleInit=function(e,t){e.source.postMessage({type:"init_received"},t.extension.url);this._registeredExtensions[t.extension_id].source=e.source;if(t.initCallback){t.initCallback(e.data.eid);delete t.initCallback}e.data.targets&&this._verifyAPI(e,t)};e._handleSubInit=function(e,t){var n=t.extension.options.noSub||this._getBooleanFeatureFlag&&this._getBooleanFeatureFlag("com.atlassian.connect.resolve_inner_iframe_url"),e=e.data;n?M.error("Sub-Extension requested by ["+t.extension.addon_key+"] but feature is disabled"):this.registerExtension(e.ext.id,{extension:e.ext});this._registeredRequestNotifier&&this._registeredRequestNotifier.call(null,{sub:e.ext,type:e.type,addon_key:t.extension.addon_key,key:t.extension.key,extension_id:t.extension_id,blocked:n})};e._getHostOffset=function(e,t){var n=e.source,i=null,t=t||window;if("number"!=typeof(i=t===t.top&&"function"==typeof t.getHostOffsetFunctionOverride?t.getHostOffsetFunctionOverride(n):i)){i=0;for(;!this._hasSameOrigin(n);){i++;n=n.parent}}e.source.postMessage({hostFrameOffset:i},e.origin)};e._hasSameOrigin=function(e){if(e===e.top)return!0;try{var t="test_var_"+Math.random().toString(16).substr(2);e[t]=!0;return e[t]}catch(e){}return!1};e._handleResponse=function(e){var t=e.data,e=this._pendingCallbacks[t.mid];if(e){delete this._pendingCallbacks[t.mid];e.apply(window,t.args)}};e.registerRequestNotifier=function(e){this._registeredRequestNotifier=e};e._handleRequest=function(t,n){function i(){var e=M.sanitizeStructuredClone(M.argumentsToArray(arguments));t.source.postMessage({mid:t.data.mid,type:"resp",forPlugin:!0,args:e},n.extension.url)}var e=t.data,o=this._registeredAPIModules[e.mod],r=this.getRegisteredExtensions(n.extension)[0];if(o){var s=e.fn;if(e._cls){var a=o[e._cls],d=e.mod+"-"+e._cls+"-";i._id=e._id;if("constructor"===s){if(!a._construct){a.constructor.prototype._destroy=function(){delete this._context._proxies[d+this._id]};a._construct=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var i=S(a.constructor,t),o=t[t.length-1];i._id=o._id;i._context=o._context;return i._context._proxies[d+i._id]=i}}o=a;s="_construct"}else o=r._proxies[d+e._id]}var c=o[s];if(c){var l=e.args,u=c.length-1;"_construct"===s&&(u=o.constructor.length-1);i._context=r;(l=this._padUndefinedArguments(l,u)).push(i);l=c.apply(o,l);c.returnsPromise&&("object"!=typeof l&&"function"!=typeof l||"function"!=typeof l.then?i("Defined module method did not return a promise."):l.then(function(e){i(void 0,e)}).catch(function(e){i(e=e instanceof Error?e.message:e)}));this._registeredRequestNotifier&&this._registeredRequestNotifier.call(null,{module:e.mod,fn:e.fn,type:e.type,addon_key:n.extension.addon_key,key:n.extension.key,extension_id:n.extension_id})}}};e._handleBroadcast=function(e,t){e=e.data;this.dispatch(e.etyp,function(e){return e.extension.addon_key===t.extension.addon_key&&e.extension_id!==t.extension_id},e.evnt,null,null)};e._handleKeyTriggered=function(e,t){var n=e.data,e=this._keycodeKey(n.keycode,n.modifiers,t.extension_id),e=this._keycodeCallbacks[e];e&&e.forEach(function(e){e.call(null,{addon_key:t.extension.addon_key,key:t.extension.key,extension_id:t.extension_id,keycode:n.keycode,modifiers:n.modifiers})},this)};e.defineAPIModule=function(e,t){this._registeredAPIModules[t=t||"_globals"]=M.extend({},this._registeredAPIModules[t]||{},e);return this._registeredAPIModules};e.isAPIModuleDefined=function(e){return void 0!==this._registeredAPIModules[e]};e._pendingEventKey=function(e,t){var n=e.addon_key||"global";return n=(n=e.key?n+"@@"+e.key:n)+"@@"+t};e.queueEvent=function(e,t,n,i){if(this._findRegistrations(t).some(function(e){return void 0!==e.registered_events},this))this.dispatch(e,t,n,i);else{this._cleanupInvalidEvents();var o=(new Date).getTime();this._pendingEvents[this._pendingEventKey(t,o)]={type:e,targetSpec:t,event:n,callback:i,time:o,uid:M.randomString()}}};e._cleanupInvalidEvents=function(){var n=this,i=(new Date).getTime();Object.keys(this._pendingEvents).forEach(function(e){var t=n._pendingEvents[e];i-t.time<=3e4||delete n._pendingEvents[e]})};e._handleEventQuery=function(o,r){var s=this,a={},d=(new Date).getTime();Object.keys(this._pendingEvents).forEach(function(e){var t=s._pendingEvents[e],n=d-t.time<=3e4,i=!t.targetSpec||0!==s._findRegistrations(t.targetSpec).length;i&&t.targetSpec.key&&(i=t.targetSpec.addon_key===r.extension.addon_key&&t.targetSpec.key===r.extension.key);if(n&&i){(a[e]=t).targetSpec=t.targetSpec||{};s.dispatch(t.type,t.targetSpec,t.event,t.callback,o.source)}else n||delete s._pendingEvents[e]});this._registeredExtensions[r.extension_id].registered_events=o.data.args;return a};e._handleUnload=function(e,t){if(t){t.extension_id&&this._registeredExtensions[t.extension_id]&&delete this._registeredExtensions[t.extension_id].source;t.unloadCallback&&t.unloadCallback(e.data.eid)}};e.dispatch=function(i,e,t,o,n){function r(e,t){if(e.source&&e.source.postMessage){var n;if(o){n=M.randomString();this._pendingCallbacks[n]=o}e.source.postMessage({type:"evt",mid:n,etyp:i,evnt:t},e.extension.url)}}this._findRegistrations(e||{}).forEach(function(e){n&&!e.source&&(e.source=n);e.source&&M._bind(this,r)(e,t)},this)};e._findRegistrations=function(n){var t=this;if(0===this._registeredExtensions.length){M.error("no registered extensions",this._registeredExtensions);return[]}var e=Object.getOwnPropertyNames(n),i=Object.getOwnPropertyNames(this._registeredExtensions).map(function(e){return t._registeredExtensions[e]});return n instanceof Function?i.filter(n):i.filter(function(t){return e.every(function(e){return t.extension[e]===n[e]})})};e.registerExtension=function(e,t){t._proxies={};t.extension_id=e;this._registeredExtensions[e]=t};e._keycodeKey=function(e,t,n){var i=e;if(t){(t="string"==typeof t?[t]:t).sort();t.forEach(function(e){i+="$$"+e},this)}return i+"__"+n};e.registerKeyListener=function(e,t,n,i){var o=this._registeredExtensions[e],e=this._keycodeKey(t,n="string"==typeof n?[n]:n,e);if(!this._keycodeCallbacks[e]){this._keycodeCallbacks[e]=[];o.source.postMessage({type:"key_listen",keycode:t,modifiers:n,action:"add"},o.extension.url)}this._keycodeCallbacks[e].push(i)};e.unregisterKeyListener=function(e,t,n,i){var o=this._keycodeKey(t,n,e),r=this._keycodeCallbacks[o],e=this._registeredExtensions[e];if(r){if(i){i=r.indexOf(i);this._keycodeCallbacks[o].splice(i,1)}else delete this._keycodeCallbacks[o];e.source&&e.source.postMessage&&e.source.postMessage({type:"key_listen",keycode:t,modifiers:n,action:"remove"},e.extension.url)}};e.registerClickHandler=function(e){if("function"!=typeof e)throw new Error("callback must be a function");if(null!==this._clickHandler)throw new Error("ClickHandler already registered");this._clickHandler=e};e._handleAddonClick=function(e,t){"function"==typeof this._clickHandler&&this._clickHandler({addon_key:t.extension.addon_key,key:t.extension.key,extension_id:t.extension_id})};e.unregisterClickHandler=function(){this._clickHandler=null};e.getApiSpec=function(i){var o=this;return Object.getOwnPropertyNames(this._registeredAPIModules).reduce(function(e,t){var n=o._registeredAPIModules[t];void 0!==n.addonKey&&n.addonKey!==i||(e[t]=function i(o){return Object.getOwnPropertyNames(o).reduce(function(e,t){var n=o[t];switch(typeof n){case"function":e[t]={args:M.argumentNames(n),returnsPromise:n.returnsPromise||!1};break;case"object":n.hasOwnProperty("constructor")&&(e[t]=i(n))}return e},{})}(n));return e},{})};e._originEqual=function(e,t){function n(e){return"string"==typeof e&&0<e.length}var i=M.getOrigin(e);return!!(n(e)&&n(t)&&n(i))&&t===i};e._checkOrigin=function(e,t){var n=t&&!t.source&&-1<["init"].indexOf(e.data.type),i=t&&e.source===t.source,n=t&&this._originEqual(t.extension.url,e.origin)&&(n||i);"get_host_offset"===e.data.type&&window===window.top&&(n=!0);return n="unload"===e.data.type&&(i||void 0===e.source)?!0:n};e.getRegisteredExtensions=function(e){return e?this._findRegistrations(e):this._registeredExtensions};e.unregisterExtension=function(e){e=this._findRegistrations(e);0!==e.length&&e.forEach(function(n){var i=this;Object.keys(this._pendingEvents).forEach(function(e){var t=i._pendingEvents[e].targetSpec||{};t.addon_key===n.extension.addon_key&&t.key===n.extension.key&&delete i._pendingEvents[e]});delete this._registeredExtensions[n.extension_id]},this)};e.setFeatureFlagGetter=function(e){this._getBooleanFeatureFlag=e};return t}(function(){function e(e){this._registerListener((e||{}).listenOn)}var t=e.prototype;t._registerListener=function(e){(e=!e||!e.addEventListener?window:e).addEventListener("message",M._bind(this,this._receiveMessage),!1)};t._receiveMessage=function(e){var t,n=this._messageHandlers[e.data.type],i=e.data.eid;i&&this._registeredExtensions&&(t=this._registeredExtensions[i]);if(!n||!this._checkOrigin(e,t))return!1;n.call(this,e,t)};return e}()),L=new(function(){function e(){this._xdm=new D}var t=e.prototype;t.dispatch=function(e,t,n,i){this._xdm.queueEvent(e,t,n,i);return this.getExtensions(t)};t.broadcast=function(e,t,n){this._xdm.dispatch(e,t,n,null,null);return this.getExtensions(t)};t._createId=function(e){if(!e.addon_key||!e.key)throw Error("Extensions require addon_key and key");return e.addon_key+"__"+e.key+"__"+M.randomString()};t.create=function(e,t,n){t=this.registerExtension(e,t,n),n=e.options||{},n={extension_id:t,api:this._xdm.getApiSpec(e.addon_key),origin:M.locationOrigin(),options:n};return{id:t,name:JSON.stringify(n),src:e.url}};t.registerRequestNotifier=function(e){this._xdm.registerRequestNotifier(e)};t.registerExtension=function(e,t,n){var i=this._createId(e);this._xdm.registerExtension(i,{extension:e,initCallback:t,unloadCallback:n});return i};t.registerKeyListener=function(e,t,n,i){this._xdm.registerKeyListener(e,t,n,i)};t.unregisterKeyListener=function(e,t,n,i){this._xdm.unregisterKeyListener(e,t,n,i)};t.registerClickHandler=function(e){this._xdm.registerClickHandler(e)};t.unregisterClickHandler=function(){this._xdm.unregisterClickHandler()};t.defineModule=function(e,t,n){this._xdm.defineAPIModule(t,e,n)};t.isModuleDefined=function(e){return this._xdm.isAPIModuleDefined(e)};t.defineGlobals=function(e){this._xdm.defineAPIModule(e)};t.getExtensions=function(e){return this._xdm.getRegisteredExtensions(e)};t.unregisterExtension=function(e){return this._xdm.unregisterExtension(e)};t.returnsPromise=function(e){e.returnsPromise=!0};t.setFeatureFlagGetter=function(e){this._xdm.setFeatureFlagGetter(e)};t.registerExistingExtension=function(e,t){return this._xdm.registerExtension(e,t)};return e}()),F={broadcast:function(e,t,n){L.dispatch(e,t,n);u.dispatch("event-dispatch",{type:e,targetSpec:t,event:n})},broadcastPublic:function(e,t,n){u.dispatch("event-public-dispatch",{type:e,event:t,sender:n});var i=n.options||{};i.contextJwt;i.url;i=k(i,["contextJwt","url"]);L.dispatch(e,{},{sender:{addonKey:n.addon_key,key:n.key,options:M.sanitizeStructuredClone(i)},event:t})}};function B(e){if(!e)throw new Error("No selector to escape");return e.replace(/[!"#$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g,"\\$&")}function e(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}var N={escapeSelector:B,stringToDimension:function(e){var t,n="px";if("string"==typeof e){t=e.indexOf("%")===e.length-1;e=parseInt(e,10);t&&(n="%")}if(!isNaN(e))return e+n},getIframeByExtensionId:function(e){return f("iframe#"+B(e))},first:function(e,t){return t?e.slice(0,t):e[0]},last:function(e){return e[e.length-1]},pick:function(n,t){return"object"!=typeof n?{}:Object.keys(n).filter(function(e){return 0<=t.indexOf(e)}).reduce(function(e,t){return Object.assign(e,((e={})[t]=n[t],e))},{})},debounce:function(n,i){var o;return function(){var e=this,t=[].slice.call(arguments);o&&clearTimeout(o);o=setTimeout(function(){o=null;n.apply(e,t)},i||50)}},isSupported:function(e,t,n,i){return e&&e[t]&&e[t].supports?e[t].supports(n):i},extend:Object.assign},j={emit:function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];var o=N.last(n),n=N.first(n,-1);F.broadcast(e,{addon_key:o._context.extension.addon_key},n)},emitPublic:function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];var o=N.last(n)._context.extension,n=N.first(n,-1);F.broadcastPublic(e,n,o)},emitToDataProvider:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var i=N.last(t);i._context.extension;t=N.first(t,-1);F.broadcast("dataProviderEvent",{addon_key:i._context.extension.addon_key},t)}},$=function(e,t){u.dispatch("dialog-extension-open",{extension:e,options:t})},J=function(){u.dispatch("dialog-close-active",{})},R=function(e,t){u.dispatch("dialog-button-add",{button:{text:e.text,identifier:e.identifier,data:{userButton:!0}},extension:t})},z={close:function(e){u.dispatch("dialog-close",{dialog:e.dialog,extension:e.extension,customData:e.customData})},closeActive:function(e){u.dispatch("dialog-close-active",e)},clickButton:function(e,t,n){u.dispatch("dialog-button-click",{identifier:e,$el:t,extension:n})},toggleButton:function(e){u.dispatch("dialog-button-toggle",e)},toggleButtonVisibility:function(e){u.dispatch("dialog-button-toggle-visibility",e)}},H=function(e){L.registerKeyListener(e.extension_id,e.key,e.modifiers,e.callback);u.dispatch("dom-event-register",e)},K=function(e){L.unregisterKeyListener(e.extension_id,e.key,e.modifiers,e.callback);u.dispatch("dom-event-unregister",e)},U=function(t){window.addEventListener("keydown",function(e){e.keyCode===t.keyCode&&t.callback()})},q=function(t){L.registerClickHandler(function(e){e=document.getElementById(e.extension_id);e&&t(e)})},V=function(){L.unregisterClickHandler()},W=new(function(){function e(){}e.prototype.randomIdentifier=function(){return Math.random().toString(16).substring(7)};return e}()),G=new(function(){function e(){}var t=e.prototype;t._maxDimension=function(e,t){var n=N.stringToDimension(e),e=parseInt(n,10),t=parseInt(t,10);return-1<n.indexOf("%")&&100<=e||t<e?"100%":n};t._closeOnEscape=function(e){return!1!==e.closeOnEscape};t._size=function(e){var t=e.size;"x-large"===e.size&&(t="xlarge");return t="maximum"!==e.size&&"100%"===e.width&&"100%"===e.height?"fullscreen":t};t._header=function(e){var t="";switch(typeof e){case"string":t=e;break;case"object":t=e.value}return t};t._hint=function(e){return"string"==typeof e?e:""};t._chrome=function(e){var t=!1;"boolean"==typeof e.chrome&&(t=e.chrome);"fullscreen"===e.size&&(t=!0);return t="maximum"===e.size?!1:t};t._width=function(e){if(!e.size)return e.width?this._maxDimension(e.width,f(window).width()):"50%"};t._height=function(e){if(!e.size)return e.height?this._maxDimension(e.height,f(window).height()):"50%"};t._actions=function(e){var t=[];(e=e||{}).actions||(t=[{name:"submit",identifier:"submit",text:e.submitText||"Submit",type:"primary",disabled:!0},{name:"cancel",identifier:"cancel",text:e.cancelText||"Cancel",type:"link",immutable:!0}]);return t=e.buttons?t.concat(this._buttons(e)):t};t._id=function(e){return e="string"!=typeof e?Math.random().toString(36).substring(2,8):e};t._buttons=function(e){var o=[];e.buttons&&Array.isArray(e.buttons)&&e.buttons.forEach(function(e){var t,n,i=!1;e.text&&"string"==typeof e.text&&(t=e.text);n=e.identifier&&"string"==typeof e.identifier?e.identifier:W.randomIdentifier();e.disabled&&!0===e.disabled&&(i=!0);o.push({text:t,identifier:n,type:"secondary",custom:!0,disabled:i})});return o};t._onHide=function(e){return"function"==typeof e.onHide?e.onHide:function(){}};t.sanitizeOptions=function(e){e={chrome:this._chrome(e=e||{}),header:this._header(e.header),hint:this._hint(e.hint),width:this._width(e),height:this._height(e),$content:e.$content,extension:e.extension,actions:this._actions(e),id:this._id(e.id),size:e.size,closeOnEscape:this._closeOnEscape(e),onHide:this._onHide(e)};e.size=this._size(e);return e};t.moduleOptionsFromGlobal=function(e,t){return!!(window._AP&&window._AP.dialogModules&&window._AP.dialogModules[e]&&window._AP.dialogModules[e][t])&&N.extend({},{chrome:!0},window._AP.dialogModules[e][t].options)};t.trackMultipleDialogOpening=function(e,t){var t=this._size(t);if(f(".ap-aui-dialog2:visible").length){t=f("#macro-browser-dialog").length||AJS.Confluence&&AJS.Confluence.Editor&&AJS.Confluence.Editor.currentEditMode?"fullscreen"===t?"connect-macro-multiple-fullscreen":"connect-macro-multiple":"connect-multiple";h.trackMultipleDialogOpening(t,e)}};t.assertActiveDialogOrThrow=function(e,t){if(!e.isActiveDialog(t))throw new Error("Failed to find an active dialog for: "+t)};return e}()),X={notifyIframeCreated:function(e,t){u.dispatch("iframe-create",{$el:e,extension:t})},notifyBridgeEstablished:function(e,t){u.dispatch("iframe-bridge-established",{$el:e,extension:t})},notifyIframeDestroyed:function(e){L.getExtensions(e="string"==typeof e?{id:e}:e).forEach(function(e){u.dispatch("iframe-destroyed",{extension:e});L.unregisterExtension({id:e.extension_id})},this)},notifyUnloaded:function(e,t){u.dispatch("iframe-unload",{$el:e,extension:t})}},Y={},Q="%[a-f0-9]{2}",Z=new RegExp(Q,"gi"),ee=new RegExp("("+Q+")+","gi");function te(t){try{return decodeURIComponent(t)}catch(e){for(var n=t.match(Z),i=1;i<n.length;i++)n=(t=function e(t,n){try{return decodeURIComponent(t.join(""))}catch(e){}if(1===t.length)return t;var i=t.slice(0,n=n||1),n=t.slice(n);return Array.prototype.concat.call([],e(i),e(n))}(n,i).join("")).match(Z);return t}}function ne(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{t=t.replace(/\+/g," ");return decodeURIComponent(t)}catch(e){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},n=ee.exec(e);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch(e){var i=te(n[0]);i!==n[0]&&(t[n[0]]=i)}n=ee.exec(e)}t["%C2"]="�";for(var o=Object.keys(t),r=0;r<o.length;r++){var s=o[r];e=e.replace(new RegExp(s,"g"),t[s])}return e}(t)}}function ie(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var n=e.indexOf(t);return-1===n?[e]:[e.slice(0,n),e.slice(n+t.length)]}function oe(e,t){for(var n={},i=Object.keys(e),o=Array.isArray(t),r=0;r<i.length;r++){var s=i[r],a=e[s];(o?-1!==t.indexOf(s):t(s,a,e))&&(n[s]=a)}return n}!function(s){const n=e,i=ne,d=ie,r=oe,a=Symbol("encodeFragmentIdentifier");function c(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function l(e,t){return t.encode?(t.strict?n:encodeURIComponent)(e):e}function u(e,t){return t.decode?i(e):e}function f(e){var t=e.indexOf("#");return e=-1!==t?e.slice(0,t):e}function o(e){var t=(e=f(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function p(e,t){t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase());return e}function g(e,n){c((n=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},n)).arrayFormatSeparator);const i=function(r){let i;switch(r.arrayFormat){case"index":return(e,t,n)=>{i=/\[(\d*)\]$/.exec(e);e=e.replace(/\[\d*\]$/,"");if(i){void 0===n[e]&&(n[e]={});n[e][i[1]]=t}else n[e]=t};case"bracket":return(e,t,n)=>{i=/(\[\])$/.exec(e);e=e.replace(/\[\]$/,"");i?void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=[t]:n[e]=t};case"comma":case"separator":return(e,t,n)=>{var i="string"==typeof t&&t.includes(r.arrayFormatSeparator),o="string"==typeof t&&!i&&u(t,r).includes(r.arrayFormatSeparator);t=o?u(t,r):t;t=i||o?t.split(r.arrayFormatSeparator).map(e=>u(e,r)):null===t?t:u(t,r);n[e]=t};case"bracket-separator":return(e,t,n)=>{var i=/(\[\])$/.test(e);e=e.replace(/\[\]$/,"");if(i){i=null===t?[]:t.split(r.arrayFormatSeparator).map(e=>u(e,r));void 0!==n[e]?n[e]=[].concat(n[e],i):n[e]=i}else n[e]=t&&u(t,r)};default:return(e,t,n)=>{void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(n),o=Object.create(null);if("string"!=typeof e)return o;if(!(e=e.trim().replace(/^[?#&]/,"")))return o;for(const r of e.split("&"))if(""!==r){let[e,t]=d(n.decode?r.replace(/\+/g," "):r,"=");t=void 0===t?null:["comma","separator","bracket-separator"].includes(n.arrayFormat)?t:u(t,n);i(u(e,n),t,o)}for(const t of Object.keys(o)){const s=o[t];if("object"==typeof s&&null!==s)for(const a of Object.keys(s))s[a]=p(s[a],n);else o[t]=p(s,n)}return!1===n.sort?o:(!0===n.sort?Object.keys(o).sort():Object.keys(o).sort(n.sort)).reduce((e,t)=>{var n=o[t];Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(n):e[t]=n;return e},Object.create(null))}s.extract=o;s.parse=g;s.stringify=(n,i)=>{if(!n)return"";c((i=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},i)).arrayFormatSeparator);var e;const o=function(o){switch(o.arrayFormat){case"index":return i=>(e,t)=>{const n=e.length;return void 0===t||o.skipNull&&null===t||o.skipEmptyString&&""===t?e:null===t?[...e,[l(i,o),"[",n,"]"].join("")]:[...e,[l(i,o),"[",l(n,o),"]=",l(t,o)].join("")]};case"bracket":return n=>(e,t)=>void 0===t||o.skipNull&&null===t||o.skipEmptyString&&""===t?e:null===t?[...e,[l(n,o),"[]"].join("")]:[...e,[l(n,o),"[]=",l(t,o)].join("")];case"comma":case"separator":case"bracket-separator":{const i="bracket-separator"===o.arrayFormat?"[]=":"=";return n=>(e,t)=>{if(void 0===t||o.skipNull&&null===t||o.skipEmptyString&&""===t)return e;t=null===t?"":t;return 0===e.length?[[l(n,o),i,l(t,o)].join("")]:[[e,l(t,o)].join(o.arrayFormatSeparator)]}}default:return n=>(e,t)=>void 0===t||o.skipNull&&null===t||o.skipEmptyString&&""===t?e:null===t?[...e,l(n,o)]:[...e,[l(n,o),"=",l(t,o)].join("")]}}(i),t={};for(const s of Object.keys(n))(e=s,i.skipNull&&(e=>null==e)(n[e])||i.skipEmptyString&&""===n[e])||(t[s]=n[s]);const r=Object.keys(t);!1!==i.sort&&r.sort(i.sort);return r.map(e=>{const t=n[e];return void 0===t?"":null===t?l(e,i):Array.isArray(t)?0===t.length&&"bracket-separator"===i.arrayFormat?l(e,i)+"[]":t.reduce(o(e),[]).join("&"):l(e,i)+"="+l(t,i)}).filter(e=>0<e.length).join("&")};s.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[n,i]=d(e,"#");return Object.assign({url:n.split("?")[0]||"",query:g(o(e),t)},t&&t.parseFragmentIdentifier&&i?{fragmentIdentifier:u(i,t)}:{})};s.stringifyUrl=(e,t)=>{t=Object.assign({encode:!0,strict:!0,[a]:!0},t);var n=f(e.url).split("?")[0]||"",i=s.extract(e.url),i=s.parse(i,{sort:!1}),i=Object.assign(i,e.query);let o=s.stringify(i,t);o=o&&`?${o}`;let r=function(e){let t="";var n=e.indexOf("#");-1!==n&&(t=e.slice(n));return t}(e.url);e.fragmentIdentifier&&(r=`#${t[a]?l(e.fragmentIdentifier,t):e.fragmentIdentifier}`);return`${n}${o}${r}`};s.pick=(e,t,n)=>{n=Object.assign({parseFragmentIdentifier:!0,[a]:!1},n);var{url:i,query:o,fragmentIdentifier:e}=s.parseUrl(e,n);return s.stringifyUrl({url:i,query:r(o,t),fragmentIdentifier:e},n)};s.exclude=(e,n,t)=>{var i=Array.isArray(n)?e=>!n.includes(e):(e,t)=>!n(e,t);return s.pick(e,i,t)}}(Y);for(var re=function(e){for(var t,n=function(e){var t=e.length;if(0<t%4)throw new Error("Invalid string. Length must be a multiple of 4");e=e.indexOf("=");-1===e&&(e=t);return[e,e===t?0:4-e%4]}(e),i=n[0],n=n[1],o=new de(function(e,t){return 3*(e+t)/4-t}(i,n)),r=0,s=0<n?i-4:i,a=0;a<s;a+=4){t=ae[e.charCodeAt(a)]<<18|ae[e.charCodeAt(a+1)]<<12|ae[e.charCodeAt(a+2)]<<6|ae[e.charCodeAt(a+3)];o[r++]=t>>16&255;o[r++]=t>>8&255;o[r++]=255&t}if(2===n){t=ae[e.charCodeAt(a)]<<2|ae[e.charCodeAt(a+1)]>>4;o[r++]=255&t}if(1===n){t=ae[e.charCodeAt(a)]<<10|ae[e.charCodeAt(a+1)]<<4|ae[e.charCodeAt(a+2)]>>2;o[r++]=t>>8&255;o[r++]=255&t}return o},se=[],ae=[],de="undefined"!=typeof Uint8Array?Uint8Array:Array,ce="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",le=0,ue=ce.length;le<ue;++le){se[le]=ce[le];ae[ce.charCodeAt(le)]=le}ae["-".charCodeAt(0)]=62;ae["_".charCodeAt(0)]=63;var fe=60;function pe(e){if(null===e||""===e)throw"Invalid JWT: must be neither null nor empty-string.";var t=e.indexOf("."),n=e.indexOf(".",t+1);if(t<0||n<=t)throw'Invalid JWT: must contain 2 period (".") characters.';n=e.substring(t+1,n);if(null===n||""===n)throw"Invalid JWT: encoded claims must be neither null nor empty-string.";n=function(e){var t=4-e.length%4;1==t?e+="=":2==t&&(e+="==");return(new TextDecoder).decode(re(e))}.call(window,n);return JSON.parse(n)}u.register("jwt-skew-set",function(e){fe=e.skew});var ge={parseJwtIssuer:function(e){return pe(e).iss},parseJwtClaims:pe,isJwtExpired:function(e,t){void 0===t&&(t=fe);var n=pe(e),i=0,e=Math.floor(Date.now()/1e3);return(i=n&&n.exp?n.exp:i)-t<e}};function he(e){return Y.parse(Y.extract(e)).jwt}var me={hasJwt:function(e){return he(e)&&0!==he(e).length},isJwtExpired:function(e){e=he(e);return ge.isJwtExpired(e)}},ye=function(e){u.dispatch("content-resolver-register-by-extension",e)},ve=function(n){if(!n.resolver)throw Error("ACJS: No content resolver supplied");var e=n.resolver.call(null,N.extend({classifier:"json"},n.extension));e.fail(function(e,t){u.dispatch("jwt-url-refreshed-failed",{extension:n.extension,$container:n.$container,errorText:t.text})});e.done(function(e){var t={};if("object"==typeof e)t=e;else if("string"==typeof e)try{t=JSON.parse(e)}catch(e){console.error("ACJS: invalid response from content resolver")}n.extension.url=t.url;N.extend(n.extension.options,t.options);u.dispatch("jwt-url-refreshed",{extension:n.extension,$container:n.$container,url:n.extension.url})});u.dispatch("jwt-url-refresh-request",{data:n})},_e=function(e){"number"==typeof e?u.dispatch("jwt-skew-set",{skew:e}):console.error("ACJS: invalid JWT clock skew set")},xe=function(e){var t={};if(e&&"object"==typeof e){e.width&&(t.width=N.stringToDimension(e.width));e.height&&(t.height=N.stringToDimension(e.height));if("string"==typeof e.sandbox){var n=document.createElement("iframe");t.sandbox=e.sandbox.split(" ").filter(function(e){return N.isSupported(n,"sandbox",e,!0)}).join(" ")}}return t},be=new(function(){function e(){this.store={}}var t=e.prototype;t.set=function(e,t){if(t){var n={};n[e]=t}else n=e;N.extend(this.store,n)};t.get=function(e){return e?this.store[e]:N.extend({},this.store)};return e}()),we=!1,ke="com.codebarrel.addons.automation";var Ee=!1;function Ae(e){return{addon_key:e.addon_key,key:e.key,url:e.url,options:e.options}}var Ce={createSimpleXdmExtension:function(e){var t=Ae(e),n=be.get();e.options=t.options=N.extend({},t.options);e.options.globalOptions=n;!function(e){e===ke&&function(){if(!we){we=!0;var e={getPerformanceTiming:function(n){return new Promise(function(e,t){i(n)||t(new Error("This is a restricted API"));e(JSON.parse(JSON.stringify(window.performance.timing)))})},getPerformanceNavigationTiming:function(n){return new Promise(function(e,t){i(n)||t(new Error("This is a restricted API"));window.PerformanceNavigationTiming||e(void 0);t=window.performance.getEntriesByType("navigation");e(JSON.parse(JSON.stringify(t)))})}};L.returnsPromise(e.getPerformanceTiming);L.returnsPromise(e.getPerformanceNavigationTiming);L.defineModule("_performance",e)}function i(e){return e._context.extension.addon_key===ke}}();!function(){if(!Ee){Ee=!0;var e={getBooleanFeatureFlag:function(n){return new Promise(function(e,t){0===n.indexOf("com.atlassian.connect.acjs.iframe.")?e(g(n)):t(new Error("Only allowlisted flags can be accessed from the iframe."))})}};L.returnsPromise(e.getBooleanFeatureFlag);L.defineModule("_featureFlag",e)}}()}(e.addon_key);n=L.create(t,function(){e.options.noDOM||(e.$el=f(document.getElementById(e.id)));X.notifyBridgeEstablished(e.$el,e)},function(){X.notifyUnloaded(e.$el,e)});t.id=n.id;e.id=n.id;N.extend(n,xe(e.options));return{iframeAttributes:n,extension:e}},extensionConfigSanitizer:Ae},Ie=new(function(){function e(){this._contentResolver=!1}var t=e.prototype;t.setContentResolver=function(e){this._contentResolver=e};t.resize=function(e,t,n){e=N.stringToDimension(e);t=N.stringToDimension(t);n.css({width:e,height:t});n.trigger("resized",{width:e,height:t})};t.simpleXdmExtension=function(e,t){!e.url||me.hasJwt(e.url)&&me.isJwtExpired(e.url)?this._contentResolver?ve({extension:e,resolver:this._contentResolver,$container:t}):console.error("JWT is expired and no content resolver was specified"):this._appendExtension(t,this._simpleXdmCreate(e))};t._simpleXdmCreate=function(e){var t=Ce.createSimpleXdmExtension(e);e.id=t.iframeAttributes.id;e.$el=this.render(t.iframeAttributes);return e};t._appendExtension=function(e,t){var n=e.find("iframe");0<n.length&&n.destroy();t.options.hideIframeUntilLoad&&t.$el.css({visibility:"hidden"}).load(function(){t.$el.css({visibility:""})});e.prepend(t.$el);X.notifyIframeCreated(t.$el,t)};t._appendExtensionError=function(e,t){var n=f('<div class="connect-resolve-error"></div>'),t=f("<p />").text(t);n.append('<p class="error">Error: The content resolver threw the following error:</p>');n.append(t);e.prepend(n)};t.resolverResponse=function(e){var t=this._simpleXdmCreate(e.extension);this._appendExtension(e.$container,t)};t.resolverFailResponse=function(e){this._appendExtensionError(e.$container,e.errorText)};t.render=function(e){(e=e||{}).referrerpolicy="no-referrer";return f("<iframe />").attr(e).addClass("ap-iframe")};return e}());u.register("iframe-resize",function(e){Ie.resize(e.width,e.height,e.$el)});u.register("content-resolver-register-by-extension",function(e){Ie.setContentResolver(e.callback)});u.register("jwt-url-refreshed",function(e){Ie.resolverResponse(e)});u.register("jwt-url-refreshed-failed",function(e){Ie.resolverFailResponse(e)});u.register("after:iframe-bridge-established",function(e){e.extension.options.noDom?e.extension.options.bridgeEstablished=!0:e.$el[0].bridgeEstablished=!0});var Oe=function(e){u.dispatch("button-clicked",{$el:e})},Se=function(e,t){u.dispatch("button-toggle",{$el:e,disabled:t})},Pe=function(e,t){u.dispatch("button-toggle-visibility",{$el:e,hidden:t})},Te=["primary","link","secondary"],Me=0,De=new(function(){function e(){this.AP_BUTTON_CLASS="ap-aui-button"}var t=e.prototype;t.setType=function(e,t){t&&0<=Te.indexOf(t)&&e.addClass("aui-button-"+t);return e};t.setDisabled=function(e,t){void 0===t||e.data("immutable")||e.attr("aria-disabled",t);return e};t.setHidden=function(e,t){void 0===t||e.data("immutable")||e.toggle(!t);return e};t._setId=function(e,t){if(!t){t="ap-button-"+Me;Me++}e.attr("id",t);return e};t._additionalClasses=function(e,t){if(t){"string"!=typeof t&&(t=t.join(" "));e.addClass(t)}return e};t.getName=function(e){return f(e).data("name")};t.getText=function(e){return f(e).text()};t.getIdentifier=function(e){return f(e).data("identifier")};t.isVisible=function(e){return f(e).is(":visible")};t.isEnabled=function(e){return!("true"===f(e).attr("aria-disabled"))};t.render=function(e){var t=f("<button />");e=e||{};t.addClass("aui-button "+this.AP_BUTTON_CLASS);t.text(e.text);t.data(e.data);t.data({name:e.name||e.identifier,identifier:e.identifier||W.randomIdentifier(),immutable:e.immutable||!1});this._additionalClasses(t,e.additionalClasses);this.setType(t,e.type);this.setDisabled(t,e.disabled||!1);this._setId(t,e.id);return t};return e}());f(function(){f("body").on("click","."+De.AP_BUTTON_CLASS,function(e){e=f(e.target).closest("."+De.AP_BUTTON_CLASS);"true"!==e.attr("aria-disabled")&&Oe(e)})});u.register("button-toggle",function(e){De.setDisabled(e.$el,e.disabled)});u.register("button-toggle-visibility",function(e){De.setHidden(e.$el,e.hidden)});var Le=["ap-iframe-container"],Fe=new(function(){function e(){}var t=e.prototype;t.createExtension=function(e,t){var n=this._renderContainer();t&&!1===t.loadingIndicator||n.append(this._renderLoadingIndicator());Ie.simpleXdmExtension(e,n);return n};t._renderContainer=function(e){e=f("<div />").attr(e||{});e.addClass(Le.join(" "));return e};t._renderLoadingIndicator=function(){return w.render()};return e}());u.register("iframe-create",function(e){var t="embedded-"+e.extension.id;e.extension.$el.parents(".ap-iframe-container").attr("id",t)});function Be(e){return Fe.createExtension(e)}var Ne=function(e,t){var n={};if(t){n.methods=t;n.name=e}else n.methods=e;u.dispatch("module-define-custom",n)},je={trackDeprecatedMethodUsed:function(e,t){u.dispatch("analytics-deprecated-method-used",{methodUsed:e,extension:t})},trackIframeBridgeStart:function(e){u.dispatch("iframe-bridge-start",{extension:e})},trackExternalEvent:function(e,t){u.dispatch("analytics-external-event-track",{eventName:e,values:t})},trackIframePerformanceMetrics:function(e,t){e&&0<Object.getOwnPropertyNames(e).length&&u.dispatch("analytics-iframe-performance",{metrics:e,extension:t})}};function $e(e){e=e.attr("class"),e=e?e.match(/ap-plugin-key-([^\s]*)/):null;return!!Array.isArray(e)&&e[1]}function Je(e){e=e.attr("class"),e=e?e.match(/ap-module-key-([^\s]*)/):null;return!!Array.isArray(e)&&e[1]}function Re(e){return $e(e)+"__"+Je(e)}function ze(e,t,n){e+="Modules";if(window._AP&&window._AP[e]&&window._AP[e][t]&&window._AP[e][t][n])return N.extend({},window._AP[e][t][n].options)}function He(e,t){return ze(e,$e(t),function(e){e=(e=e.attr("class"))?e.match(/ap-target-key-([^\s]*)/):null;return!!Array.isArray(e)&&e[1]}(t))}function Ke(e){var t=e.attr("href"),n={};if(t=t||e.find("a").attr("href")){var i=t.indexOf("#");if(0<=i){var o=t.substring(i+1);try{r=JSON.parse(decodeURI(o))}catch(e){console.error("ACJS: cannot decode webitem anchor")}r&&window._AP&&window._AP._convertConnectOptions?n=window._AP._convertConnectOptions(r):console.error("ACJS: cannot convert webitem url to connect iframe options")}else{var i=Re(e),o=e.hasClass("ap-inline-dialog")?"inlineDialog":"dialog",r=He(o,e);if(!(r=!r&&window._AP&&window._AP[o+"Options"]?N.extend({},window._AP[o+"Options"][i])||{}:r)){r={};console.warn("no webitem "+o+"Options for "+i)}r.productContext=r.productContext||{};t=Y.parse(Y.extract(t));N.extend(r.productContext,t);n={addon_key:$e(e),key:Je(e),options:r}}}return n}var Ue={sanitizeTriggers:function(e){var t;Array.isArray(e)?t=e.join(" "):"string"==typeof e&&(t=e.trim());return t},uniqueId:function(){return"webitem-"+Math.floor(1e9*Math.random()).toString(16)},getExtensionKey:$e,getKey:Je,getOptionsForWebItem:function(e){var t=Re(e),n=e.hasClass("ap-inline-dialog")?"inlineDialog":"dialog",i=He(n,e);if(!(i=!i&&window._AP&&window._AP[n+"Options"]?N.extend({},window._AP[n+"Options"][t])||{}:i)){i={};console.warn("no webitem "+n+"Options for "+t)}i.productContext=i.productContext||{};i.structuredContext=i.structuredContext||{};if((e=Ke(e))&&e.options){N.extend(i.productContext,e.options.productContext);N.extend(i.structuredContext,e.options.structuredContext);i.contextJwt=e.options.contextJwt}return i},getModuleOptionsByAddonAndModuleKey:ze,getConfigFromTarget:Ke},qe=new function(){var n=this;this._providers={};this.registerProvider=function(e,t){n._providers[e]=t};this.getProvider=function(e){return n._providers[e]}},Ve=new(function(){function e(){this.moduleNamesToModules=new Map}e.prototype.registerModule=function(e,t){var n=e.getModuleRegistrationName();this.moduleNamesToModules.set(n,e)};e.prototype.getModuleByName=function(e){return this.moduleNamesToModules.get(e)};e.prototype.getProviderByModuleName=function(e){e=this.moduleNamesToModules.get(e);if(e&&e.isEnabled())return e.getProvider()};return e}()),We=new(function(){function e(){var i=this;this.create=function(e){return Be(Ce.extensionConfigSanitizer(e))};this.dialog={create:function(e,t){var n=Ue.getModuleOptionsByAddonAndModuleKey("dialog",e.addon_key,e.key),t=N.extend({},n||{},t);$(e,t)},close:function(e,t){var n=i.getFrameworkAdaptor().getProviderByModuleName("dialog");if(n){G.assertActiveDialogOrThrow(n,e);F.broadcast("dialog.close",{addon_key:e},t);n.close()}else J()}};this.registerContentResolver={resolveByExtension:function(e){i._contentResolver=e;ye({callback:e})}};this.getContentResolver=function(){return i._contentResolver};this.registerProvider=function(e,t){qe.registerProvider(e,t)};this.getProvider=function(e){return qe.getProvider(e)};this.frameworkAdaptor=Ve}var t=e.prototype;t.createExtension=function(e){e.options=e.options||{};e.options.noDom=!0;e=Ce.createSimpleXdmExtension(e);je.trackIframeBridgeStart(e.extension);return e};t.registerExistingExtension=function(e,t){return L.registerExistingExtension(e,t)};t.setFrameworkAdaptor=function(e){this.frameworkAdaptor=e};t.getFrameworkAdaptor=function(){return this.frameworkAdaptor};t._cleanExtension=function(e){return N.pick(e,["id","addon_key","key","options","url"])};t.onIframeEstablished=function(t){t._wrapper=function(e){t.call({},{$el:e.$el,extension:this._cleanExtension(e.extension)})}.bind(this);u.register("after:iframe-bridge-established",t._wrapper)};t.offIframeEstablished=function(e){if(!e._wrapper)throw new Error("cannot unregister event dispatch listener without _wrapper reference");u.unregister("after:iframe-bridge-established",e._wrapper)};t.onIframeUnload=function(t){var n=this;u.register("after:iframe-unload",function(e){t.call({},{$el:e.$el,extension:n._cleanExtension(e.extension)})})};t.onPublicEventDispatched=function(t){t._wrapper=function(e){t.call({},{type:e.type,event:e.event,extension:this._cleanExtension(e.sender)})}.bind(this);u.register("after:event-public-dispatch",t._wrapper)};t.offPublicEventDispatched=function(e){if(!e._wrapper)throw new Error("cannot unregister event dispatch listener without _wrapper reference");u.unregister("after:event-public-dispatch",e._wrapper)};t.onKeyEvent=function(e,t,n,i){H({extension_id:e,key:t,modifiers:n,callback:i})};t.offKeyEvent=function(e,t,n,i){K({extension_id:e,key:t,modifiers:n,callback:i})};t.onFrameClick=function(e){if("function"!=typeof e)throw new Error("handleIframeClick must be a function");q(e)};t.offFrameClick=function(){V()};t.destroy=function(e){X.notifyIframeDestroyed({id:e})};t.defineModule=function(e,t){Ne(e,t)};t.isModuleDefined=function(e){return L.isModuleDefined(e)};t.broadcastEvent=function(e,t,n){F.broadcast(e,t,n)};t.getExtensions=function(e){return L.getExtensions(e)};t.trackDeprecatedMethodUsed=function(e,t){je.trackDeprecatedMethodUsed(e,t)};t.trackAnalyticsEvent=function(e,t){je.trackExternalEvent(e,t)};t.setJwtClockSkew=function(e){_e(e)};t.isJwtExpired=function(e,t){return(t?ge:me).isJwtExpired(e)};t.hasJwt=function(e){return me.hasJwt(e)};t.getBooleanFeatureFlag=g;t.setExtensionConfigurationOptions=function(e,t){be.set(e,t)};t.getExtensionConfigurationOption=function(e){return be.get(e)};t.onIframeTimeout=function(t){t._wrapper=function(e){t.call({},{extension:this._cleanExtension(e.extension)})}.bind(this);u.register("after:iframe-bridge-timeout",t._wrapper)};t.offIframeTimeout=function(e){if(!e._wrapper)throw new Error("cannot unregister event dispatch listener without _wrapper reference");u.unregister("after:iframe-bridge-timeout",e._wrapper)};t.onIframePerformanceTelemetry=function(t){t._wrapper=function(e){t.call({},{metrics:e.metrics,extension:this._cleanExtension(e.extension)})}.bind(this);u.register("after:analytics-iframe-performance",t._wrapper)};t.offIframePerformanceTelemetry=function(e){if(!e._wrapper)throw new Error("cannot unregister event dispatch listener without _wrapper reference");u.unregister("after:analytics-iframe-performance",e._wrapper)};t.onIframeVisible=function(t){t._wrapper=function(e){t.call({},{extension:this._cleanExtension(e)})}.bind(this);u.register("after:iframe-visible",t._wrapper)};t.offIframeVisible=function(e){if(!e._wrapper)throw new Error("cannot unregister event dispatch listener without _wrapper reference");u.unregister("after:iframe-visible",e._wrapper)};return e}()),Ge="ap-dialog-",Xe="ap-aui-dialog2",Ye=new RegExp("^"+Ge+"[0-9A-Za-z]+$"),Qe=["small","medium","large","xlarge","fullscreen","maximum"],Ze="ap-aui-dialog-button",et="aui-dialog2-footer-actions",tt="header-control-panel";function nt(){var e=AJS.LayerManager.global.getTopLayer();if(e&&Ye.test(e.attr("id"))){e=AJS.dialog2(e);e._id=e.$el.attr("id").replace(Ge,"");return e}}function it(e){var t=e.find("."+tt);return t=!t.length?e.find("."+et):t}function ot(e,t){return it(t).find(".aui-button").filter(function(){return De.getIdentifier(this)===e})}var rt=new(function(){function e(){}var t=e.prototype;t._renderHeaderCloseBtn=function(){var e=f("<a />").addClass("aui-dialog2-header-close"),t=f("<span />").addClass("aui-icon aui-icon-small aui-iconfont-close-dialog").text("Close");e.append(t);return e};t._renderFullScreenHeader=function(e,t){var n=f("<div />").addClass("header-title-container aui-item expanded"),i=f("<div />").append(f("<span />").addClass("header-title").text(t.header||""));n.append(i);e.append(n).append(this._renderHeaderActions(t.actions,t.extension));return e};t._renderHeader=function(e){var t=f("<header />").addClass("aui-dialog2-header");if("fullscreen"===e.size)return this._renderFullScreenHeader(t,e);if(e.header){e=f("<h2 />").addClass("aui-dialog2-header-main").text(e.header);t.append(e)}t.append(this._renderHeaderCloseBtn());return t};t._renderHeaderActions=function(e,t){var n=f("<div />").addClass("aui-item "+tt);e[0].additionalClasses=["aui-icon","aui-icon-small","aui-iconfont-success"];e[1].additionalClasses=["aui-icon","aui-icon-small","aui-iconfont-close-dialog"];this._renderActionButtons(e,t).forEach(function(e){n.append(e)});return n};t._renderContent=function(e){var t=f("<div />").addClass("aui-dialog2-content");e&&t.append(e);return t};t._renderFooter=function(e){var t=f("<footer />").addClass("aui-dialog2-footer");if("fullscreen"!==e.size){var n=this._renderFooterActions(e.actions,e.extension);t.append(n)}if(e.hint){e=f("<div />").addClass("aui-dialog2-footer-hint").text(e.hint);t.append(e)}return t};t._renderActionButtons=function(e,t){var n=this,i=[];[].concat(e).forEach(function(e){i.push(n._renderDialogButton({text:e.text,name:e.name,type:e.type,additionalClasses:e.additionalClasses,custom:e.custom||!1,identifier:e.identifier,immutable:e.immutable,disabled:e.disabled||!1},t))});return i};t._renderFooterActions=function(e,t){var n=f("<div />").addClass(et);this._renderActionButtons(e,t).forEach(function(e){n.append(e)});return n};t._renderDialogButton=function(e,t){e.additionalClasses=e.additionalClasses||[];e.additionalClasses.push(Ze);e.custom&&e.additionalClasses.push("ap-dialog-custom-button");e=De.render(e);e.extension=t;return e};t.render=function(e){var t=N.extend({},e),n=G.sanitizeOptions(e),i=f("<section />").attr({role:"dialog",id:Ge+n.id});i.attr("data-aui-modal","true");i.data({"aui-remove-on-hide":!0,extension:n.extension});i.addClass("aui-layer aui-dialog2 "+Xe);0<=Qe.indexOf(n.size)&&i.addClass("aui-dialog2-"+n.size);if("fullscreen"===n.size||"maximum"===n.size){n.chrome&&i.addClass("ap-header-controls");i.addClass("aui-dialog2-maximum")}i.append(this._renderContent(n.$content));if(n.chrome){i.prepend(this._renderHeader({header:n.header,actions:n.actions,size:n.size}));i.append(this._renderFooter({extension:n.extension,actions:n.actions,hint:n.hint,size:n.size}))}else i.addClass("aui-dialog2-chromeless");e=AJS.dialog2(i);e._id=n.id;"fullscreen"===n.size&&(n.height=n.width="100%");n.size&&"fullscreen"!==n.size||AJS.layer(i).changeSize(n.width,n.height);n.onHide&&e.on("hide",n.onHide);e.show();e.$el.data("extension",n.extension);e.$el.data("originalOptions",t);return i};t.setIframeDimensions=function(e){Ie.resize("100%","100%",e)};t.getActive=nt;t.buttonIsEnabled=function(e){var t=nt();if(t){t=ot(e,t.$el);return De.isEnabled(t)}};t.buttonIsVisible=function(e){var t=nt();if(t){t=ot(e,t.$el);return De.isVisible(t)}};t.getByExtension=function(n){var i,e;e="function"==typeof n?n:(i=Object.getOwnPropertyNames(n),function(e){var t=f(e).data("extension");return i.every(function(e){return t[e]===n[e]})});return f("."+Xe).toArray().filter(e).map(function(e){return AJS.dialog2(e)})};t.addButton=function(e,t){t.custom=!0;t=this._renderDialogButton(t,e),e=this.getByExtension({addon_key:e.addon_key,key:e.key})[0].$el;it(e).append(t);return e};return e}());u.register("iframe-bridge-established",function(t){if(t.extension.options.isDialog){var e,n=We.getFrameworkAdaptor().getProviderByModuleName("dialog");if(n){e=n.close;n.setButtonDisabled("submit",!1)}else{z.toggleButton({identifier:"submit",enabled:!0});e=function(){z.close({dialog:nt(),extension:t.extension})}}if(!t.extension.options.preventDialogCloseOnEscape){H({extension_id:t.extension.id,key:27,callback:e});u.registerOnce("dialog-close",function(e){K({extension_id:t.extension.id,key:27})})}}});u.register("dialog-close-active",function(e){var t=nt();t&&z.close({customData:e.customData,dialog:t,extension:e.extension})});u.register("dialog-close",function(e){e.dialog&&e.dialog.hide()});u.register("dialog-button-toggle",function(e){var t=nt();if(t){t=ot(e.identifier,t.$el);Se(t,!e.enabled)}});u.register("dialog-button-toggle-visibility",function(e){var t=nt();if(t){t=ot(e.identifier,t.$el);Pe(t,e.hidden)}});u.register("button-clicked",function(e){var t=e.$el;if(t.hasClass(Ze)){var n=t.parents("."+Xe),e=n.find("iframe");e.length&&e[0].bridgeEstablished?z.clickButton(De.getIdentifier(t),t,n.data("extension")):z.close({dialog:nt(),extension:t.extension})}});if(f.fn){u.register("iframe-create",function(e){e.extension.options&&e.extension.options.isDialog&&rt.setIframeDimensions(e.extension.$el)});u.register("dialog-button-add",function(e){rt.addButton(e.extension,e.button)});u.register("host-window-resize",N.debounce(function(){f("."+Xe).each(function(e,t){var n=f(t),n=G.sanitizeOptions(n.data("originalOptions"));t.style.width=n.width;t.style.height=n.height})},100))}U({keyCode:27,callback:function(){z.closeActive({customData:{},extension:null})}});var st=new(function(){function e(){}var t=e.prototype;t.render=function(e,t){e.options=e.options||{};t=t||{};e.options.isDialog=!0;e.options.dialogId=t.id;e.options.callbackExtensionId=e.callback_extension_id;e.options.preventDialogCloseOnEscape=!1===t.closeOnEscape;e.options.hostFrameOffset=t.hostFrameOffset;e.options.hideIframeUntilLoad=!0;var n=Fe.createExtension(e);return rt.render({extension:e,$content:n,chrome:t.chrome,width:t.width,height:t.height,size:t.size,header:t.header,hint:t.hint,submitText:t.submitText,cancelText:t.cancelText,buttons:t.buttons,onHide:t.onHide})};t.getActiveDialog=function(){return rt.getActive()};t.buttonIsEnabled=function(e){return rt.buttonIsEnabled(e)};t.buttonIsVisible=function(e){return rt.buttonIsVisible(e)};t.getByExtension=function(e){return rt.getByExtension(e="string"==typeof e?{id:e}:e)};return e}());u.register("dialog-extension-open",function(e){var o=e.extension,t=G.sanitizeOptions(e.options),n=We.getFrameworkAdaptor().getProviderByModuleName("dialog");if(n){o.options.preventDialogCloseOnEscape=!1===t.closeOnEscape;t.actions.map(function(e){return e.onClick=function(e){var t=o.key,n=o.addon_key,i={button:{identifier:e.identifier,name:e.identifier,text:e.text}};0<=["submit","cancel"].indexOf(e.identifier)&&F.broadcast("dialog."+e.identifier,{addon_key:n,key:t},i);F.broadcast("dialog.button.click",{addon_key:n,key:t},i)}.bind(null,e)});n.create(t,o)}else st.render(e.extension,e.options)});var at={};u.register("dialog-close",function(e){if(e.dialog&&e.extension){var t={addon_key:e.extension.addon_key,id:e.extension.options.callbackExtensionId};F.broadcast("dialog.close",t,e.customData)}});u.register("dialog-button-click",function(e){var t={button:{name:De.getName(e.$el),identifier:De.getIdentifier(e.$el),text:De.getText(e.$el)}},n={addon_key:e.extension.addon_key,key:e.extension.key};n.id=e.extension.id;e.$el.hasClass("ap-dialog-custom-button")||F.broadcast("dialog."+t.button.name,n,t);F.broadcast("dialog.button.click",n,t)});var dt=function(){function e(e,t){t=N.last(arguments);var n=We.getFrameworkAdaptor().getProviderByModuleName("dialog");if(n){G.assertActiveDialogOrThrow(n,t._context.extension.addon_key);this.name=e;this.identifier=e}else{if(!st.getActiveDialog())throw new Error("Failed to find an active dialog.");this.name=e;this.identifier=e;this.enabled=st.buttonIsEnabled(e);this.hidden=!st.buttonIsVisible(e)}}var t=e.prototype;t.enable=function(){this.setState({enabled:!0})};t.disable=function(){this.setState({enabled:!1})};t.isEnabled=function(e){e=N.last(arguments);var t=We.getFrameworkAdaptor().getProviderByModuleName("dialog");e(t?!t.isButtonDisabled(this.identifier):this.enabled)};t.toggle=function(){var e=We.getFrameworkAdaptor().getProviderByModuleName("dialog");e?e.toggleButton(this.identifier):this.setState({enabled:!this.enabled})};t.setState=function(e){var t=We.getFrameworkAdaptor().getProviderByModuleName("dialog");if(t)t.setButtonDisabled(this.identifier,!e.enabled);else{this.enabled=e.enabled;z.toggleButton({identifier:this.identifier,enabled:this.enabled})}};t.trigger=function(e){e=N.last(arguments);this.enabled&&z.dialogMessage({name:this.name,extension:e._context.extension})};t.isHidden=function(e){e=N.last(arguments);var t=We.getFrameworkAdaptor().getProviderByModuleName("dialog");e(t?t.isButtonHidden(this.identifier):this.hidden)};t.hide=function(){this.setHidden(!0)};t.show=function(){this.setHidden(!1)};t.setHidden=function(e){var t=We.getFrameworkAdaptor().getProviderByModuleName("dialog");if(t)t.setButtonHidden(this.identifier,e);else{this.hidden=e;z.toggleButtonVisibility({identifier:this.identifier,hidden:this.hidden})}};return e}();var ct={create:{constructor:function(e,t){var n=(t=N.last(arguments))._id,i=t._context.extension,t={addon_key:i.addon_key,key:e.key,options:N.pick(i.options,["customData","productContext"]),callback_extension_id:i.id};t.options.customData=e.customData;i=G.moduleOptionsFromGlobal(t.addon_key,t.key);"number"==typeof(i||{}).hostFrameOffset&&(t.options.hostFrameOffset=i.hostFrameOffset);(e=N.extend({},i||{},e)).id=n;G.trackMultipleDialogOpening(t,e);$(t,e);this.customData=e.customData;at[n]=this}},close:function(e,t){t=N.last(arguments);var n=We.getFrameworkAdaptor().getProviderByModuleName("dialog");if(n){G.assertActiveDialogOrThrow(n,t._context.extension.addon_key);F.broadcast("dialog.close",{addon_key:t._context.extension.addon_key},e);n.close()}else{n=t._context.extension.options.isDialog?st.getByExtension(t._context.extension.id)[0]:st.getActiveDialog();z.close({customData:e,dialog:n,extension:t._context.extension})}},getCustomData:function(e){e=N.last(arguments);var t,t=(t=e._context,at[t.extension.options.dialogId]);e(t?t.customData:void 0)},getButton:{constructor:dt,enable:dt.prototype.enable,disable:dt.prototype.disable,toggle:dt.prototype.toggle,isEnabled:dt.prototype.isEnabled,trigger:dt.prototype.trigger,hide:dt.prototype.hide,show:dt.prototype.show,isHidden:dt.prototype.isHidden},createButton:{constructor:function(e,t){t=N.last(arguments);var n=We.getFrameworkAdaptor().getProviderByModuleName("dialog");if(n){G.assertActiveDialogOrThrow(n,t._context.extension.addon_key);n.createButton({identifier:e.identifier,text:e.text,hidden:!1,disabled:e.disabled||!1,onClick:function(){F.broadcast("dialog.button.click",{addon_key:t._context.extension.addon_key,key:t._context.extension.key},{button:{identifier:e.identifier,text:e.text}})}})}else R({identifier:e.identifier,text:e.text},t._context.extension)}}};u.register("iframe-resize",function(e){Ie.resize(e.width,e.height,e.$el)});u.register("iframe-size-to-parent",function(e){var t=N.getIframeByExtensionId(e.extensionId),e=f(window).height()-t.offset().top-1;u.dispatch("iframe-resize",{width:"100%",height:e+"px",$el:t})});u.register("hide-footer",function(e){e&&f("#footer").css({display:"none"})});window.addEventListener("resize",function(e){u.dispatch("host-window-resize",e)},!0);function lt(e){delete ht[e];delete yt[e];-1!==mt.indexOf(e)&&mt.splice(mt.indexOf(e),1)}var ut=function(e,t,n){var i=n.extension_id?N.getIframeByExtensionId(n.extension_id):n;u.dispatch("iframe-resize",{width:e,height:t,$el:i,extension:n.extension})},ft=function(e,t){u.dispatch("iframe-size-to-parent",{hideFooter:t,extensionId:e})},pt=function(e){u.dispatch("hide-footer",e)},gt=N.debounce,ht={},mt=[],yt={},vt={getLocation:function(e){e=N.last(arguments);var t=qe.getProvider("get-location");e("function"==typeof t?t():window.location.href)},resize:function(e,t,n){n=N.last(arguments);var i=qe.getProvider("addon");if(i)i.resize(e,t,n._context);else{var o=n._context.extension.id,i=n._context.extension.options;if(-1!==mt.indexOf(o)||i&&i.isDialog)return!1;ht[o]||(ht[o]=gt(function(e,t,n){ut(e,t,n._context)},50));ht[o](e,t,n)}return!0},sizeToParent:gt(function(e,t){t=N.last(arguments);var n=qe.getProvider("addon");if(n)n.sizeToParent(e,t._context);else if(t._context.extension.options.isFullPage){N.getIframeByExtensionId(t._context.extension_id).addClass("full-size-general-page");ft(t._context.extension_id,e);yt[t._context.extension_id]={hideFooter:e}}else N.getIframeByExtensionId(t._context.extension_id).addClass("full-size-general-page-fail")}),hideFooter:function(e){e&&pt(e)}};u.register("host-window-resize",function(e){Object.getOwnPropertyNames(yt).forEach(function(e){ft(e,yt[e].hideFooter)})});u.register("after:iframe-unload",function(e){lt(e.extension.id)});u.register("after:iframe-destroyed",function(e){lt(e.extension.extension.id)});u.register("before:iframe-size-to-parent",function(e){-1===mt.indexOf(e.extensionId)&&mt.push(e.extensionId)});var _t=function(e){u.dispatch("inline-dialog-refresh",{$el:e})},xt=function(){u.dispatch("inline-dialog-close",{})},bt=function(e){u.dispatch("inline-dialog-opened",{$el:e.$el,trigger:e.trigger,extension:e.extension})},wt={hide:function(e){e=N.last(arguments);var t=We.getFrameworkAdaptor().getProviderByModuleName("inlineDialog");t?t.hide(e._context):xt()}},kt="ac-message-container",Et=["generic","error","warning","success","info","hint"],At="ap-message-",Ct=new RegExp("^"+At+"[0-9A-fa-f]+$"),It={};function Ot(e){return Ct.test(e)}var St=!1;function Pt(e,t,n,i){if(!St){f(document).on("aui-message-close",function(e,t){t=t.attr("id").replace(At,"");if(It[t]){f.isFunction(It[t].onCloseTrigger)&&It[t].onCloseTrigger();It[t]._destroy()}});St=!0}var o,o=o=(o=f("#"+kt)).length<1?f('<div id="'+kt+'" />').appendTo("body"):o;i=function(t){var n={};"object"==typeof t&&["closeable","fadeout","delay","duration","id"].forEach(function(e){e in t&&(n[e]=t[e])});return n}(i);f.extend(i,{title:t,body:AJS.escapeHtml(n)});if(Et.indexOf(e)<0)throw"Invalid message type. Must be: "+Et.join(", ");if(Ot(i.id)){AJS.messages[e](o,i);o.css("margin-left","-"+o.innerWidth()/2+"px")}}function Tt(r){return{constructor:function(e,t,n,i){var o=(i=N.last(arguments))._id;"string"!=typeof e&&(e="");"string"!=typeof t&&(t="");(n="object"!=typeof n?{}:n).id=At+o;!function(e,t,n,i,o){var r="AP.messages."+e;console.warn("DEPRECATED API - AP.messages."+e+" has been deprecated since ACJS 5.0 and will be removed in a future release. Use AP.flag.create instead.");je.trackDeprecatedMethodUsed(r,o._context.extension);if(r=We.getFrameworkAdaptor().getProviderByModuleName("messages")){o=r[e];o||(r[e]=r.generic);o(t,n,i)}else Pt(e,t,n,i)}(r,e,t,n,i);It[o]=this}}}var Mt={clear:function(e){var t=At+e._id;if(Ot(t)){e=We.getFrameworkAdaptor().getProviderByModuleName("messages");e?e.clear(t):f("#"+t).closeMessage()}},onClose:function(e,t){t=N.last(arguments);var n=e._id,i=We.getFrameworkAdaptor().getProviderByModuleName("messages");if(i){e=At+e._id;i.onClose(e,t)}else It[n]&&(It[n].onCloseTrigger=t)},generic:Tt("generic"),error:Tt("error"),warning:Tt("warning"),success:Tt("success"),info:Tt("info"),hint:Tt("hint")},Dt={actionInvoked:function(e,t){u.dispatch("flag-action-invoked",{id:t,actionId:e})},open:function(e){u.dispatch("flag-open",{id:e})},close:function(e){u.dispatch("flag-close",{id:e})},closed:function(e){u.dispatch("flag-closed",{id:e})}},Lt="ap-flag-",Ft="ac-flag-actions",Bt=new(function(){function e(){}var t=e.prototype;t.cleanKey=function(e){var t=new RegExp("^"+Lt+"(.+)$"),t=e.match(t);return t&&t[1]?t[1]:null};t._toHtmlString=function(e){return"string"===f.type(e)?e:"object"===f.type(e)&&e instanceof f?e.html():void 0};t._renderBody=function(e){e=this._toHtmlString(e),e=f("<div />").html(e);f("<p />").addClass(Ft).appendTo(e);return e.html()};t._renderActions=function(e,t,n){var i,o=e.find("."+Ft);n=n||{};Object.getOwnPropertyNames(n).forEach(function(e){i=f("<a />").attr("href","#").data({key:e,flag_id:t}).text(n[e]);o.append(i)},this);return e};t.render=function(e){!function(){if(!Nt){f(document).on("aui-flag-close",function(e){e=e.target.id,e=Bt.cleanKey(e);Dt.closed(e)});f(document).on("click","."+Ft,function(e){var t=f(e.target),e=t.data("key"),t=t.data("flag_id");Dt.actionInvoked(e,t)});Nt=!0}}();var t=Lt+e.id,n=AJS.flag({type:e.type,title:e.title,body:this._renderBody(e.body),close:e.close});n.setAttribute("id",t);t=f(n);this._renderActions(t,e.id,e.actions);t.addClass("ac-aui-flag");t.close=n.close;return t};t.close=function(e){document.getElementById(e).close()};return e}()),Nt=!1;u.register("flag-close",function(e){Bt.close(e.id)});var jt={},$t=function(){function e(t,e){e=N.last(arguments);if("object"==typeof t){var n=e._id,i=We.getFrameworkAdaptor().getProviderByModuleName("flag");if(i){var o=[];"object"==typeof t.actions&&(o=Object.getOwnPropertyNames(t.actions).map(function(e){return{actionKey:e,actionText:t.actions[e],executeAction:Dt.actionInvoked.bind(null,e,n)}}));var r=t.type||"info",r={id:n,title:t.title,body:t.body,actions:o,onClose:Dt.closed,close:t.close,type:r.toLowerCase()};this.flag=i.create(r);r=qe.getProvider("addon");r&&r.registerUnmountCallback&&r.registerUnmountCallback(this.close.bind(this),e._context)}else{this.flag=Bt.render({type:t.type,title:t.title,body:AJS.escapeHtml(t.body),actions:t.actions,close:t.close,id:n});Dt.open(this.flag.attr("id"))}this.onTriggers={};this.extension=e._context.extension;jt[e._id]=this;e.call(null,e._id)}}e.prototype.close=function(){this.flag.close()};return e}();function Jt(e,t,n){if(jt[e]){var i=jt[e].extension;(n=n||{}).flagIdentifier=e;i={id:i.id};F.broadcast(t,i,n)}}u.register("flag-closed",function(e){Jt(e.id,"flag.close");jt[e.id]&&delete jt[e.id]});u.register("flag-action-invoked",function(e){Jt(e.id,"flag.action",{actionIdentifier:e.actionId})});var Rt,zt,Ht={create:{constructor:$t,close:$t.prototype.close}},Kt={trackDeprecatedMethodUsed:function(e,t){t=N.last(arguments);je.trackDeprecatedMethodUsed(e,t._context.extension)},trackIframePerformanceMetrics:function(e,t){t=N.last(arguments);je.trackIframePerformanceMetrics(e,t._context.extension)}},Ut=10;u.register("iframe-bridge-established",function(e){if(e.extension.options.isFullPage){window.addEventListener("scroll",Vt);Rt=e.extension.id}});u.register("iframe-destroyed",function(e){qt()});u.register("iframe-unload",function(e){qt()});function qt(){window.removeEventListener("scroll",Vt);zt=Rt=void 0}function Vt(){var e=document.documentElement.scrollHeight,t=window.innerHeight,n=e*(Ut/100);window.pageYOffset<=n?Wt("nearTop"):t+window.pageYOffset+n>=e?Wt("nearBottom"):zt=void 0}function Wt(e){if(zt!==e){F.broadcast("scroll."+e,{id:Rt},{});zt=e}}var Q={getPosition:function(e){if((e=N.last(arguments))._context.extension.options.isFullPage){var t=N.getIframeByExtensionId(e._context.extension_id).offset(),n=f(window);e({scrollY:n.scrollTop()-t.top,scrollX:n.scrollLeft()-t.left,width:window.innerWidth,height:window.innerHeight})}},setVerticalPosition:function(e,t){if((t=N.last(arguments))._context.extension.options&&t._context.extension.options.isFullPage){t=N.getIframeByExtensionId(t._context.extension_id).offset();"number"==typeof e&&(document.documentElement.scrollTop=t.top+e)}}},Gt=function(e,t,n){u.dispatch("dropdown-item-selected",{id:e,item:t,extension:n})};function Xt(e){return e.map(function(e){if(e.list&&Array.isArray(e.list)){var t={heading:e.heading};t.items=e.list.map(function(e){var t={};if("string"==typeof e)t.content=e;else{if(!e.text||"string"!=typeof e.text)throw new Error("Unknown dropdown list item format.");t.content=e.text;"boolean"==typeof e.disabled&&(t.disabled=e.disabled);void 0!==e.itemId&&(t.itemId=e.itemId)}return t});return t}})}U={create:function(e,t){t=N.last(arguments);if("object"==typeof e){var n=We.getFrameworkAdaptor().getProviderByModuleName("dropdown");if(n){var i=Xt(e.list),i={dropdownId:e.dropdownId,dropdownGroups:i,dropdownItemNotifier:function(e){Gt(e.dropdownId,e.item,t._context.extension)}};n.create(i,t._context);return i}}},showAt:function(e,t,n,i){var o=N.last(arguments),r={left:0,top:0},s=document.getElementById(o._context.extension_id);s?r=s.getBoundingClientRect():console.error("ACJS: no iframe found for dropdown");s=We.getFrameworkAdaptor().getProviderByModuleName("dropdown");s&&s.showAt({dropdownId:e,x:t,y:n,width:i},{iframeDimensions:r,onItemSelection:function(e,t){Gt(e,t,o._context.extension)}})},hide:function(e){var t=We.getFrameworkAdaptor().getProviderByModuleName("dropdown");t&&t.hide(e)},itemDisable:function(e,t){var n=We.getFrameworkAdaptor().getProviderByModuleName("dropdown");n&&n.itemDisable(e,t)},itemEnable:function(e,t){var n=We.getFrameworkAdaptor().getProviderByModuleName("dropdown");n&&n.itemEnable(e,t)}};u.register("dropdown-item-selected",function(e){F.broadcast("dropdown-item-selected",{addon_key:e.extension.addon_key,key:e.extension.key},{dropdownId:e.id,item:e.item})});u.register("iframe-destroyed",function(e){var t=We.getFrameworkAdaptor().getProviderByModuleName("dropdown");t&&t.destroyByExtension(e.extension.extension_id)});u.register("after:iframe-unload",function(e){var t=We.getFrameworkAdaptor().getProviderByModuleName("dropdown");t&&t.destroyByExtension(e.extension.extension_id)});var Yt,Qt,Zt,en,tn,dt={focus:function(){window.document.querySelector("a").focus({preventScroll:!0});window.document.querySelector("a").blur()},getSelectedText:(Yt=function(e){e("")},tn=!(Qt="AP.host.getSelectedText()"),function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(!tn&&"undefined"!=typeof console&&console.warn){tn=!0;console.warn("DEPRECATED API - "+Qt+" has been deprecated "+(en?"since ACJS "+en:"in ACJS")+" and will be removed in a future release. "+(Zt?"Use "+Zt+" instead.":"No alternative will be provided."));var i=N.last(t);i&&i._context&&i._context.extension&&Kt.trackDeprecatedMethodUsed(Qt,i)}return Yt.apply(void 0,t)})},nn=new(function(){function e(){this._webitems={};this._contentResolver=function(){}}var t=e.prototype;t.setContentResolver=function(e){this._contentResolver=e};t.requestContent=function(e){if(e.addon_key&&e.key)return this._contentResolver.call(null,N.extend({classifier:"json"},e))};t.getWebItemsBySelector=function(t){var n,i=this;Object.getOwnPropertyNames(this._webitems).some(function(e){e=i._webitems[e];if(e.selector&&e.selector.trim()===t.trim()){n=e;return!0}return!1});return n};t.setWebItem=function(e){return this._webitems[e.name]={name:e.name,selector:e.selector,triggers:e.triggers}};t._removeTriggers=function(e){var t=this,n=Ue.sanitizeTriggers(e.triggers);f(function(){f("body").off(n,e.selector,t._webitems[e.name]._on)});delete this._webitems[e.name]._on};t._addTriggers=function(i){var e=Ue.sanitizeTriggers(i.triggers);i._on=function(e){e.preventDefault();var t=f(e.target).closest(i.selector),n=Ue.getConfigFromTarget(t),n=n&&n.url?n.url:void 0,n={addon_key:Ue.getExtensionKey(t),key:Ue.getKey(t),options:Ue.getOptionsForWebItem(t),url:n};"com.addonengine.analytics"!==n.addon_key||We.isModuleDefined("analytics")?on.webitemInvoked(i,e,n):console.log("ACJS-1164 Dropping event "+e.type+" for plugin "+n.addon_key+" until AP.analytics loads...")};f(function(){f("body").on(e,i.selector,i._on);f("head").append('<style type="text/css">'+i.selector+".ap-link-webitem {pointer-events: auto;}</style>")})};return e}());u.register("webitem-added",function(e){nn._addTriggers(e.webitem)});u.register("content-resolver-register-by-extension",function(e){nn.setContentResolver(e.callback)});document.addEventListener("aui-responsive-menu-item-created",function(e){var t=e.detail.originalItem.querySelector('a[class*="ap-"]');if(t){var n=e.detail.newItem.querySelector("a");[].slice.call(t.classList).forEach(function(e){/^ap-/.test(e)&&n.classList.add(e)})}});var on={addWebItem:function(e){if(nn.getWebItemsBySelector(e.selector))return!1;e=nn.setWebItem(e);u.dispatch("webitem-added",{webitem:e})},webitemInvoked:function(e,t,n){u.dispatch("webitem-invoked:"+e.name,{webitem:e,event:t,extension:n})}},rn=function(e){u.dispatch("inline-dialog-extension",{$el:e.$el,extension:e.extension})},sn=new(function(){function e(){}var t=e.prototype;t.resize=function(e){var t=N.stringToDimension(e.width),n=N.stringToDimension(e.height),i=e.$el.find(".contents");if(1===i.length){i.css({width:t,height:n});_t(e.$el)}};t.refresh=function(e){e.is(":visible")&&e[0].popup.reset()};t._getInlineDialog=function(e){return AJS.InlineDialog(e)};t._renderContainer=function(){return f("<div />").addClass("aui-inline-dialog-contents")};t._displayInlineDialog=function(e){bt({$el:e.$el,trigger:e.trigger,extension:e.extension})};t.hideInlineDialog=function(e){e.hide()};t.closeInlineDialog=function(){f(".aui-inline-dialog").filter(function(){return 0<f(this).find(".ap-iframe-container").length}).hide()};t.render=function(i){var o=this,e=f(document.getElementById("inline-dialog-"+i.id));0!==e.length&&e.remove();return AJS.InlineDialog(i.bindTo,i.id,function(e,t,n){e.append(i.$content);o._displayInlineDialog({extension:i.extension,$el:e,trigger:t});n()},i.inlineDialogOptions)};return e}());u.register("iframe-resize",function(e){var t=e.$el.parents(".aui-inline-dialog");1===t.length&&sn.resize({width:e.width,height:e.height,$el:t})});u.register("inline-dialog-refresh",function(e){sn.refresh(e.$el)});u.register("inline-dialog-hide",function(e){sn.hideInlineDialog(e.$el)});u.register("inline-dialog-close",function(e){sn.closeInlineDialog()});var an="inline-dialog-target-uid",dn=new(function(){function e(){this._inlineDialogWebItemSpec={name:"inline-dialog",selector:".ap-inline-dialog",triggers:["mouseenter","click"]};this._inlineDialogWebItems={}}var t=e.prototype;t.getWebItem=function(){return this._inlineDialogWebItemSpec};t._createInlineDialog=function(e){return sn.render({extension:e.extension,id:e.id,bindTo:e.$target,$content:f("<div />"),inlineDialogOptions:e.extension.options})};t.triggered=function(e){if("click"===e.event.type||e.extension.options.onHover){var t=f(e.event.currentTarget),n=t.data(an);this._createInlineDialog({id:n,extension:e.extension,$target:t,options:e.extension.options||{}}).show()}};t.opened=function(t){var e=t.$el.find("iframe");if(e&&1===e.length){e=e.attr("src");if(0<e.length){var n=me.hasJwt(e);if(n&&!me.isJwtExpired(e)||!n)return!1}}n=nn.requestContent(t.extension);if(!n){console.warn("no content resolver found");return!1}n.then(function(e){e.options=e.options||{};N.extend(e.options,{autoresize:!0,widthinpx:!0});rn({$el:t.$el,extension:e})});return!0};t.addExtension=function(e){var t=Be(e.extension);e.$el.empty().append(t)};t.createIfNotExists=function(e){var t=f(e.event.currentTarget);if(!(e=t.data(an))){e=Ue.uniqueId();t.data(an,e)}};return e}()),$t=dn.getWebItem();u.register("before:webitem-invoked:"+$t.name,function(e){dn.createIfNotExists(e)});u.register("webitem-invoked:"+$t.name,function(e){dn.triggered(e)});u.register("inline-dialog-opened",function(e){dn.opened(e)});u.register("inline-dialog-extension",function(e){dn.addExtension(e)});on.addWebItem($t);var cn=["click"],ln="dialog-target-uid",un={chrome:!0},fn=new(function(){function e(){this._dialogWebItem={name:"dialog",selector:".ap-dialog",triggers:cn}}var t=e.prototype;t.getWebItem=function(){return this._dialogWebItem};t._dialogOptions=function(e){return N.extend({},un,e||{})};t.triggered=function(e){var t=f(e.event.currentTarget).data(ln),n=this._dialogOptions(e.extension.options);n.id=t;$(e.extension,n)};t.createIfNotExists=function(e){var t=f(e.event.currentTarget);if(!(e=t.data(ln))){e=Ue.uniqueId();t.data(ln,e)}};return e}()),$t=fn.getWebItem();u.register("webitem-invoked:"+$t.name,function(e){fn.triggered(e)});u.register("before:webitem-invoked:"+$t.name,fn.createIfNotExists);on.addWebItem($t);window._AP||(window._AP={});window._AP.version||(window._AP.version="5.3.67");L.defineModule("messages",Mt);L.defineModule("flag",Ht);L.defineModule("dialog",ct);L.defineModule("inlineDialog",wt);L.defineModule("env",vt);L.defineModule("events",j);L.defineModule("_analytics",Kt);L.defineModule("scrollPosition",Q);L.defineModule("dropdown",U);L.defineModule("host",dt);u.register("module-define-custom",function(e){L.defineModule(e.name,e.methods)});L.registerRequestNotifier(function(e){function t(){"req"===e.type?h.dispatch("bridge.invokemethod",{module:e.module,fn:e.fn,addonKey:e.addon_key,moduleKey:e.key}):"sub"===e.type&&h.dispatch("bridge.register-sub",{subAddonKey:e.sub.addon_key,subModuleKey:e.sub.key,addonKey:e.addon_key,moduleKey:e.key,blocked:e.blocked})}"function"==typeof window.requestIdleCallback?window.requestIdleCallback(t,{timeout:1e3}):t()});L.setFeatureFlagGetter(g);return We});;
;
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-spa-context-v5', location = 'atlassian-connect/v5/js/spa-context/main.js' */
define("ac/spa-context",function(){var i=null,t=null;return{provideContainerApi:function(n){i=n},provideNavigationApi:function(n){t=n},isInIframe:function(){return null!==i},canSpaTransition:function(){return null!==t},getContainerApi:function(){return i},getNavigationApi:function(){return t}}});;
;
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-navigator-v5', location = 'atlassian-connect/v5/js/iframe/host/_uritemplate.js' */
!function(){"use strict";var p=function(){function e(e){this.options=e}e.prototype.toString=function(){return JSON&&JSON.stringify?JSON.stringify(this.options):this.options};return e}(),l={isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},isString:function(e){return"[object String]"===Object.prototype.toString.apply(e)},isNumber:function(e){return"[object Number]"===Object.prototype.toString.apply(e)},isBoolean:function(e){return"[object Boolean]"===Object.prototype.toString.apply(e)},join:function(e,t){for(var n="",r=!0,i=0;i<e.length;i+=1){r?r=!1:n+=t;n+=e[i]}return n},map:function(e,t){for(var n=[],r=0;r<e.length;r+=1)n.push(t(e[r]));return n},filter:function(e,t){for(var n=[],r=0;r<e.length;r+=1)t(e[r])&&n.push(e[r]);return n},deepFreeze:r};function r(e){return"function"==typeof Object.freeze?function(e){if("object"!=typeof e||null===e)return e;Object.freeze(e);var t,n;for(n in e)e.hasOwnProperty(n)&&"object"==typeof(t=e[n])&&r(t);return e}(e):e}var c={isAlpha:function(e){return"a"<=e&&e<="z"||"A"<=e&&e<="Z"},isDigit:t,isHexDigit:function(e){return t(e)||"a"<=e&&e<="f"||"A"<=e&&e<="F"}};function t(e){return"0"<=e&&e<="9"}var h=function(){var o=function(e){return unescape(encodeURIComponent(e))},s=function(e){return e<=127?1:194<=e&&e<=223?2:224<=e&&e<=239?3:240<=e&&e<=244?4:0},a=function(e){return 128<=e&&e<=191};function u(e,t){return"%"===e.charAt(t)&&c.isHexDigit(e.charAt(t+1))&&c.isHexDigit(e.charAt(t+2))}function f(e,t){return parseInt(e.substr(t,2),16)}return{encodeCharacter:function(e){for(var t,n="",r=o(e),i=0;i<r.length;i+=1)n+="%"+((t=r.charCodeAt(i))<16?"0":"")+t.toString(16).toUpperCase();return n},isPctEncoded:function(e){if(!u(e,0))return!1;var t=f(e,1),n=s(t);if(0===n)return!1;for(var r=1;r<n;r+=1)if(!u(e,3*r)||!a(f(e,3*r+1)))return!1;return!0},pctCharAt:function(e,t){var n=e.charAt(t);if(!u(e,t))return n;var r=f(e,t+1),i=s(r);if(0===i)return n;for(var o=1;o<i;o+=1)if(!u(e,t+3*o)||!a(f(e,t+3*o+1)))return n;return e.substr(t,3*i)}}}(),d={isVarchar:function(e){return c.isAlpha(e)||c.isDigit(e)||"_"===e||h.isPctEncoded(e)},isUnreserved:function(e){return c.isAlpha(e)||c.isDigit(e)||"-"===e||"."===e||"_"===e||"~"===e},isReserved:function(e){return":"===e||"/"===e||"?"===e||"#"===e||"["===e||"]"===e||"@"===e||"!"===e||"$"===e||"&"===e||"("===e||")"===e||"*"===e||"+"===e||","===e||";"===e||"="===e||"'"===e}},g={encode:n,encodePassReserved:function(e){return n(e,!0)},encodeLiteral:function(e){for(var t,n="",r=0;r<e.length;r+=t.length)1<(t=h.pctCharAt(e,r)).length?n+=t:n+=d.isReserved(t)||d.isUnreserved(t)?t:h.encodeCharacter(t);return n},encodeLiteralCharacter:function(e,t){return 1<(t=h.pctCharAt(e,t)).length||d.isReserved(t)||d.isUnreserved(t)?t:h.encodeCharacter(t)}};function n(e,t){var n,r,i="";"number"!=typeof e&&"boolean"!=typeof e||(e=e.toString());for(n=0;n<e.length;n+=r.length){r=e.charAt(n);i+=d.isUnreserved(r)||t&&d.isReserved(r)?r:h.encodeCharacter(r)}return i}var m=function(){var t={};function e(e){t[e]={symbol:e,separator:"?"===e?"&":""===e||"+"===e||"#"===e?",":e,named:";"===e||"&"===e||"?"===e,ifEmpty:"&"===e||"?"===e?"=":"",first:"+"===e?"":e,encode:"+"===e||"#"===e?g.encodePassReserved:g.encode,toString:function(){return this.symbol}}}e("");e("+");e("#");e(".");e("/");e(";");e("?");e("&");return{valueOf:function(e){return t[e]||(0<="=,!@|".indexOf(e)?null:t[""])}}}();function v(e){if(null==e)return!1;if(l.isArray(e))return 0<e.length;if("string"==typeof e||"number"==typeof e||"boolean"==typeof e)return!0;for(var t in e)if(e.hasOwnProperty(t)&&v(e[t]))return!0;return!1}function i(t){for(var e,n=[],r=null,i=0,o=0;o<t.length;o+=1){e=t.charAt(o);if(null===i){if(null===r)throw new Error("reached unreachable code");if("{"===e)throw new p({templateText:t,message:"brace already opened",position:o});if("}"===e){if(r+1===o)throw new p({templateText:t,message:"empty braces",position:r});try{n.push(function(n){var e,r,t=[],i=null,o=null,s=null,a="";function u(){var e=n.substring(o,r);if(0===e.length)throw new p({expressionText:n,message:"a varname must be specified",position:r});i={varname:e,exploded:!1,maxLength:null};o=null}function f(){if(s===r)throw new p({expressionText:n,message:"after a ':' you have to specify the length",position:r});i.maxLength=parseInt(n.substring(s,r),10);s=null}e=function(e){var t=m.valueOf(e);if(null===t)throw new p({expressionText:n,message:"illegal use of reserved operator",position:r,operator:e});return t}(n.charAt(0));r=e.symbol.length;o=r;for(;r<n.length;r+=a.length){a=h.pctCharAt(n,r);if(null!==o){if("."===a){if(o===r)throw new p({expressionText:n,message:"a varname MUST NOT start with a dot",position:r});continue}if(d.isVarchar(a))continue;u()}if(null!==s){if(r===s&&"0"===a)throw new p({expressionText:n,message:"A :prefix must not start with digit 0",position:r});if(c.isDigit(a)){if(4<=r-s)throw new p({expressionText:n,message:"A :prefix must have max 4 digits",position:r});continue}f()}if(":"!==a)if("*"!==a){if(","!==a)throw new p({expressionText:n,message:"illegal character",character:a,position:r});t.push(i);i=null;o=r+1}else{if(null===i)throw new p({expressionText:n,message:"exploded without varspec",position:r});if(i.exploded)throw new p({expressionText:n,message:"exploded twice",position:r});if(i.maxLength)throw new p({expressionText:n,message:"an explode (*) MUST NOT follow to a prefix",position:r});i.exploded=!0}else{if(null!==i.maxLength)throw new p({expressionText:n,message:"only one :maxLength is allowed per varspec",position:r});if(i.exploded)throw new p({expressionText:n,message:"an exploeded varspec MUST NOT be varspeced",position:r});s=r+1}}null!==o&&u();null!==s&&f();t.push(i);return new x(n,e,t)}(t.substring(r+1,o)))}catch(e){if(e.prototype===p.prototype)throw new p({templateText:t,message:e.options.message,position:r+e.options.position,details:e.options});throw e}r=null;i=o+1}}else{if("}"===e)throw new p({templateText:t,message:"unopened brace closed",position:o});if("{"===e){i<o&&n.push(new s(t.substring(i,o)));i=null;r=o}}}if(null!==r)throw new p({templateText:t,message:"unclosed brace",position:r});i<t.length&&n.push(new s(t.substr(i)));return new a(t,n)}var s=function(){function e(e){this.literal=g.encodeLiteral(e)}e.prototype.toString=e.prototype.expand=function(){return this.literal};return e}(),x=function(){function a(e){if(!v(e))return 1;if(l.isString(e))return""===e;if(!l.isNumber(e)&&!l.isBoolean(e)){if(l.isArray(e))return 0===e.length;for(var t in e)if(e.hasOwnProperty(t))return;return 1}}function u(e){var t,n=[];for(t in e)e.hasOwnProperty(t)&&n.push({name:t,value:e[t]});return n}function e(e,t,n){this.templateText=e;this.operator=t;this.varspecs=n}e.prototype.toString=function(){return this.templateText};function f(e){return v(e.value)}e.prototype.expand=function(e){for(var t,n,r,i=[],o=this.operator,s=0;s<this.varspecs.length;s+=1)if(null!=(n=e[(t=this.varspecs[s]).varname])){t.exploded;l.isArray(n);if("string"==typeof n||"number"==typeof n||"boolean"==typeof n)i.push(function(e,t,n){var r="";n=n.toString();if(t.named){r+=g.encodeLiteral(e.varname);if(""===n)return r+=t.ifEmpty;r+="="}null!==e.maxLength&&(n=n.substr(0,e.maxLength));return r+=t.encode(n)}(t,o,n));else{if(t.maxLength&&v(n))throw new Error("Prefix modifiers are not applicable to variables that have composite values. You tried to expand "+this+" with "+(r=n,JSON&&JSON.stringify?JSON.stringify(r):r));t.exploded?v(n)&&(o.named?i.push(function(n,r,e){var t=[];if(l.isArray(e)){t=l.filter(t=e,v);t=l.map(t,function(e){var t=g.encodeLiteral(n.varname);a(e)?t+=r.ifEmpty:t+="="+r.encode(e);return t})}else{t=u(e);t=l.filter(t,f);t=l.map(t,function(e){var t=g.encodeLiteral(e.name);a(e.value)?t+=r.ifEmpty:t+="="+r.encode(e.value);return t})}return l.join(t,r.separator)}(t,o,n)):i.push(function(t,e){var n=[],r="";if(l.isArray(e)){n=l.filter(n=e,v);n=l.map(n,t.encode);r+=l.join(n,t.separator)}else{n=u(e);n=l.filter(n,function(e){return v(e.value)});n=l.map(n,function(e){return t.encode(e.name)+"="+t.encode(e.value)});r+=l.join(n,t.separator)}return r}(o,n))):!o.named&&a(n)||i.push(function(e,t,n){var r=[],i="";if(t.named){i+=g.encodeLiteral(e.varname);if(a(n))return i+=t.ifEmpty;i+="="}if(l.isArray(n)){r=l.filter(r=n,v);r=l.map(r,t.encode);i+=l.join(r,",")}else{r=u(n);r=l.filter(r,f);r=l.map(r,function(e){return t.encode(e.name)+","+t.encode(e.value)});i+=l.join(r,",")}return i}(t,o,n))}}return 0===i.length?"":o.first+l.join(i,o.separator)};return e}(),a=function(){function e(e,t){this.templateText=e;this.expressions=t;l.deepFreeze(this)}e.prototype.toString=function(){return this.templateText};e.prototype.expand=function(e){for(var t="",n=0;n<this.expressions.length;n+=1)t+=this.expressions[n].expand(e);return t};e.parse=i;e.UriTemplateError=p;return e}();!function(e){"use strict";if(typeof define==="function")define("_uritemplate",[],function(){return e});else if(typeof window!=="undefined")window.UriTemplate=e;else global.UriTemplate=e}(a)}();;
;
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-navigator-v5', location = 'atlassian-connect/v5/js/navigator/context.js' */
define("ac/navigator/context",function(){var t;return{setContextFunction:function(n){t=n},getContextFunction:function(){return t}}});;
;
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-navigator-v5', location = 'atlassian-connect/v5/js/navigator/module.js' */
define("ac/navigator/module",["ac/navigator/utils","ac/navigator/routes","ac/navigator/context","ac/spa-context"],function(n,a,e,t){return{getLocation:function(t){var o=e.getContextFunction();if("function"!=typeof o)console.error("no context function defined");else{context=o();if("object"!=typeof context||Array.isArray(context)||null===context)console.error("navigator context callback did not return an object");else{context.href=n.getTopmostSameOriginWindow(window).location.href;t(context)}}},go:function(t,o,e){t=t.toLowerCase();(o=o||{}).addonKey||(o.addonKey=e._context.extension.addon_key);if(n.isApiEnabled()){e=a.getRoutes();a.hasRoutes()&&t in e?"function"==typeof e[t]?e[t](o,n.goToUrl):n.goToUrl(n.buildUrl(e[t],o)):console.error("The URL target "+t+" is not available. Valid targets are: "+Object.keys(e).toString())}else console.error("connect navigation api not yet implemented for this product")},_shouldThrottle:function(t,o){var e=Number(window.localStorage.getItem("lastReloadTimestamp")),n=Number(window.localStorage.getItem("reloadAttempts")),a=Date.now();if(o<=(n=t<a-e?0:n)){console.error("Reloads must be "+t+"ms apart after "+n+" reload attempts.");return!0}n+=1;window.localStorage.setItem("lastReloadTimestamp",a);window.localStorage.setItem("reloadAttempts",n);return!1},reload:function(){this._shouldThrottle(12e4,5)||(t.isInIframe()?n.getTopmostSameOriginWindow(window):window).location.reload()}}});;
;
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-navigator-v5', location = 'atlassian-connect/v5/js/navigator/routes.js' */
define("ac/navigator/routes",function(){var t={addonmodule:function(e,t){var o=e&&e.addonKey,n=e&&e.moduleKey;if(!o)throw new Error("Missing addonKey parameter in the context.");if(!n)throw new Error("Missing moduleKey parameter in the context.");var r=function(e){e=e.map(encodeURIComponent).join("/");return new URL(e,window.location.origin).pathname.slice(1)}([o,n]),r=AJS.contextPath()+"/plugins/servlet/ac/"+r;if(null!=e.context){console.warn("DEPRECATED API - The context field has been deprecated in favor of customData.");connectHost.trackDeprecatedMethodUsed("AP.navigate-context",{addon_key:o,moduleKey:n})}var a,e=AJS.$.extend({},e.context||{},e.customData||{}),e=(a=e,Object.keys(a).map(function(e){return["ac."+e,a[e]].map(encodeURIComponent).join("=")}).join("&")),r=""!=e?r+"?"+e:r;t.apply(this,[r])},site:function(e,t){function o(e){if(-1!==new URL(e,document.baseURI).pathname.replace(/\/+/g,"/").toLowerCase().indexOf("plugins/servlet/ac-redirect"))throw new Error("Cannot use legacy redirect filter in Navigator API")}if(e.relativeUrl){if("string"!=typeof e.relativeUrl||"/"!==e.relativeUrl[0])throw new Error("Invalid relativeUrl passed in context");o(e.relativeUrl);var n=0===e.relativeUrl.indexOf(AJS.contextPath())?"":AJS.contextPath(),n=window.location.protocol+"//"+window.location.hostname+n+e.relativeUrl;t.apply(this,[n])}else{if(!e.absoluteUrl)throw new Error("No context supplied to Navigator API");n=window.location.protocol+"//"+window.location.hostname+"/";if("string"!=typeof e.absoluteUrl||0!==e.absoluteUrl.indexOf(n))throw new Error("Invalid absoluteUrl passed in context");o(e.absoluteUrl);t.apply(this,[e.absoluteUrl])}}};return{hasRoutes:function(){return t&&0!==Object.getOwnPropertyNames(t).length},addRoutes:function(e){t=AJS.$.extend(t,e)},getRoutes:function(){return t}}});;
;
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-navigator-v5', location = 'atlassian-connect/v5/js/navigator/utils.js' */
define("ac/navigator/utils",["_uritemplate","ac/spa-context"],function(e,i){var n=!1;return{enableApi:function(){n=!0},disableApi:function(){n=!1},isApiEnabled:function(){return n},buildUrl:function(n,t){"/"!==n[0]&&(n="/"+n);return AJS.contextPath()+e.parse(n).expand(t)},goToUrl:function(n){function t(){window.location.href=n}i.isInIframe()?i.getContainerApi().navigate(n,t):i.canSpaTransition()?i.getNavigationApi().navigate(n):t()},hasContext:function(n,t){if(n[t])return!0;AJS.error("Missing "+t+" in navigator context");return!1},appendQueryParam:function(n,t,e){return n+(-1<n.indexOf("?")?"&":"?")+t+"="+encodeURIComponent(e)},getTopmostSameOriginWindow:function(n){for(var t=n;!(t===t.parent)&&function(n){try{if(null==n.location.href)return}catch(n){return}return 1}(t.parent);)t=t.parent;return t}}});;
;
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-extensions-v5', location = 'atlassian-connect/v5/js/core/connect-host-cookie.js' */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this;n.connectHostCookie=e()}}(function(){return function o(r,i,f){function c(t,e){if(!i[t]){if(!r[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(u)return u(t,!0);n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}n=i[t]={exports:{}};r[t][0].call(n.exports,function(e){var n=r[t][1][e];return c(n||e)},n,n.exports,o,r,i,f)}return i[t].exports}for(var u="function"==typeof require&&require,e=0;e<f.length;e++)c(f[e]);return c}({1:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="AJS.conglomerate.cookie",r=/(\\|^"|"$)/g,i=/\|\|+/g,f=/"/g,c=/[.*+?|^$()[\]{\\]/g,u=encodeURIComponent("|"),a=encodeURIComponent("|").toLowerCase(),l="**PIPE**",p="**PIPE_PERCENT_ENCODED_UPPER**",g="**PIPE_PERCENT_ENCODED_LOWER**",d="**PERCENT**",s="**EQUALS**";function E(e){if("string"!=typeof e)return e;if(-1!==e.indexOf(l)||-1!==e.indexOf(p)||-1!==e.indexOf(g))throw new Error("Cannot use cookies that contain "+l+" or "+p+g);if(-1!==e.indexOf(d))throw new Error("Cannot use cookies that contain "+d);if(-1!==e.indexOf(s))throw new Error("Cannot use cookies that contain "+s);return e=(e=(e=(e=(e=e.replace(new RegExp(w("|"),"g"),l)).replace(new RegExp(u,"g"),p)).replace(new RegExp(a,"g"),g)).replace(new RegExp("%","g"),d)).replace(new RegExp("=","g"),s)}function w(e){return e.replace(c,"\\$&")}function x(e){e=new RegExp("\\b"+w(e)+"=((?:[^\\\\;]+|\\\\.)*)(?:;|$)"),e=document.cookie.match(e);return e&&e[1].replace(r,"")}function m(e,n,t){n=function(e,n,t){var o=new RegExp("(\\s|\\|)*\\b"+w(e)+"=[^|]*[|]*");t=(t=t||"").replace(o,"|");if(""!==n){n=e+"="+n;t.length+n.length<4020&&(t+="|"+n)}return t.replace(i,"|")}(e,n,n=x(o));!function(e,n,t){var o="",r='"'+n.replace(f,'\\"')+'"';if(t){(n=new Date).setTime(+n+24*t*60*60*1e3);o="; expires="+n.toGMTString()}document.cookie=e+"="+r+o+";path=/"}(o,n,t||365)}function h(e,n){e=function(e,n){n=n||"";e=new RegExp(w(e)+"=([^|]+)");return(e=n.match(e))&&e[1]}(e,x(o));return null!=e?e:n}function y(e,n){if(!e||0===e.length)throw new Error("addon key must be defined on cookies");if(!n||0===n.length)throw new Error("Name must be defined")}function R(e,n){y(e,n);return e+"$$"+n}function v(e,n){y(e,n);return"connect.cookie:"+e+"$$"+n}function O(e){if(e&&e._context)return e._context.extension.addon_key;throw new Error("addon key not found in callback")}t.default={save:function(e,n,t){var o=arguments[arguments.length-1],r=O(o);o._context&&function(e,n,t,o){var r=new Date;r.setTime(r.getTime()+24*(o||365)*60*60*1e3);localStorage.setItem(v(e,n),JSON.stringify({expiry:r.getTime(),value:t}))}(r,e,n,t)},read:function(e,n){var t=function(e,n){if(null!==(e=localStorage.getItem(v(e,n)))){e=JSON.parse(e);if(!(e.expiry&&(new Date).getTime()>e.expiry)){e=e.value;return"string"==typeof e?e:JSON.stringify(e)}localStorage.removeItem(n)}}(O(n=arguments[arguments.length-1]),e);if(void 0!==t){n(t);return t}e=R(O(n),E(e)),e="string"!=typeof(e=h(e))?e:e=(e=(e=(e=(e=e.replace(new RegExp(w(l),"g"),"|")).replace(new RegExp(w(p),"g"),u)).replace(new RegExp(w(g),"g"),a)).replace(new RegExp(w(d),"g"),"%")).replace(new RegExp(w(s),"g"),"=");n(e);return e},erase:function(e){var n=arguments[arguments.length-1],t=R(O(n),E(e));m(t,"");localStorage.removeItem(v(O(n),e))}};n.exports=t.default},{}]},{},[1])(1)});;
;
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-extensions-v5', location = 'atlassian-connect/v5/js/core/connect-host-history.js' */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this;e.connectHostHistory=t()}}(function(){return function r(o,s,a){function i(n,t){if(!s[n]){if(!o[n]){var e="function"==typeof require&&require;if(!t&&e)return e(n,!0);if(h)return h(n,!0);e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}e=s[n]={exports:{}};o[n][0].call(e.exports,function(t){var e=o[n][1][t];return i(e||t)},e,e.exports,r,o,s,a)}return s[n].exports}for(var h="function"==typeof require&&require,t=0;t<a.length;t++)i(a[t]);return i}({1:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("./constants"),s=t("./models"),a=t("./utils");function o(r,o){(0,a.callConnectHost)(function(n){(0,a.values)(n.getExtensions()).forEach(function(t){var e=t.extension.addon_key,t=new s.Current({url:window.location.href,state:o.state}),t=new s.Route(t);n.broadcastEvent(r,{addon_key:e},t.render(e))})})}var i=!1;function h(t){var e=t.state.render(),t=t.url.render();window.history.pushState((0,a.wrapState)(e),t.title,t.url)}function u(t){var e=t.state.render(),t=t.url.render();window.history.replaceState((0,a.wrapState)(e),t.title,t.url)}n.default={_registerWindowListeners:function(){!function(){if(!i){window.addEventListener("popstate",function(t){var e=(0,a.createEvent)("ap_popstate");e.state=(0,a.unwrapState)(t.state);window.dispatchEvent(e)});window.addEventListener("ap_popstate",function(t){var e=(0,a.createEvent)("ap_changestate");e.state=t.state;window.dispatchEvent(e);o(r.HISTORY_POPSTATE,t)});window.addEventListener("ap_pushstate",function(t){var e=(0,a.createEvent)("ap_changestate");e.state=t.state;window.dispatchEvent(e);o(r.HISTORY_PUSHSTATE,t)});window.addEventListener("ap_replacestate",function(t){var e=(0,a.createEvent)("ap_changestate");e.state=t.state;window.dispatchEvent(e);o(r.HISTORY_REPLACESTATE,t)});window.addEventListener("ap_changestate",function(t){o(r.HISTORY_CHANGESTATE,t)});i=!0}}()},back:function(t){this.go(-1,arguments[arguments.length-1])},forward:function(t){this.go(1,arguments[arguments.length-1])},go:function(t){arguments[arguments.length-1]._context.extension.options.isFullPage?window.history.go(t):(0,a.log)("History is only available to page modules")},getState:function(t,e){var n=(e=arguments[arguments.length-1])._context.extension.addon_key,r=new s.Current({url:window.location.href,state:(0,a.unwrapState)(window.history.state)}),n=new s.Route(r).render(n);if("hash"===(t=t&&"string"==typeof t?t:"hash"))e(n.hash);else{if("all"!==t)throw new Error("invalid type for getState");e(n)}},pushState:function(t,e){var n=(e=arguments[arguments.length-1])._context.extension.addon_key,r=new s.Current({url:window.location.href,state:(0,a.unwrapState)(window.history.state)}),r=new s.Route(r),n=new s.Change(t,n),n=new s.Route(n);if(e._context.extension.options.isFullPage){if(n.url.isURLEqual(r.url)){r.merge(n);u(r)}else if(n.url.isPathnameEqual(r.url)){r.merge(n);h(r)}else h(n);n=(0,a.createEvent)("ap_pushstate");n.state=(0,a.unwrapState)(window.history.state);window.dispatchEvent(n)}else(0,a.log)("History is only available to page modules")},replaceState:function(t,e){var n=(e=arguments[arguments.length-1])._context.extension.addon_key,r=new s.Current({url:window.location.href,state:(0,a.unwrapState)(window.history.state)}),r=new s.Route(r),n=new s.Change(t,n),n=new s.Route(n);if(e._context.extension.options.isFullPage){if(n.url.isURLEqual(r.url)){r.merge(n);u(r)}else if(n.url.isPathnameEqual(r.url)){r.merge(n);u(r)}else u(n);n=(0,a.createEvent)("ap_replacestate");n.state=(0,a.unwrapState)(window.history.state);window.dispatchEvent(n)}else(0,a.log)("History is only available to page modules")}};e.exports=n.default},{"./constants":7,"./models":8,"./utils":9}],2:[function(t,I,T){!function(P){!function(t){var e="object"==typeof T&&T,n="object"==typeof I&&I&&I.exports==e&&I,r="object"==typeof P&&P;r.global!==r&&r.window!==r||(t=r);var o,s,m=2147483647,v=36,w=1,g=26,a=38,i=700,E=72,_=128,b="-",h=/^xn--/,u=/[^ -~]/,l=/\x2E|\u3002|\uFF0E|\uFF61/g,f={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},c=v-w,A=Math.floor,x=String.fromCharCode;function R(t){throw RangeError(f[t])}function p(t,e){for(var n=t.length;n--;)t[n]=e(t[n]);return t}function d(t,e){return p(t.split(l),e).join(".")}function O(t){for(var e,n,r=[],o=0,s=t.length;o<s;)if(55296<=(e=t.charCodeAt(o++))&&e<=56319&&o<s)if(56320==(64512&(n=t.charCodeAt(o++))))r.push(((1023&e)<<10)+(1023&n)+65536);else{r.push(e);o--}else r.push(e);return r}function y(t){return p(t,function(t){var e="";if(65535<t){e+=x((t-=65536)>>>10&1023|55296);t=56320|1023&t}return e+=x(t)}).join("")}function j(t,e){return t+22+75*(t<26)-((0!=e)<<5)}function q(t,e,n){var r=0;t=n?A(t/i):t>>1;t+=A(t/e);for(;c*g>>1<t;r+=v)t=A(t/c);return A(r+(c+1)*t/(t+a))}function S(t){var e,n,r,o,s,a,i,h=[],u=t.length,l=0,f=_,c=E,p=t.lastIndexOf(b);p<0&&(p=0);for(n=0;n<p;++n){128<=t.charCodeAt(n)&&R("not-basic");h.push(t.charCodeAt(n))}for(r=0<p?p+1:0;r<u;){for(o=l,s=1,a=v;;a+=v){u<=r&&R("invalid-input");i=(i=t.charCodeAt(r++))-48<10?i-22:i-65<26?i-65:i-97<26?i-97:v;(v<=i||i>A((m-l)/s))&&R("overflow");l+=i*s;if(i<(i=a<=c?w:c+g<=a?g:a-c))break;s>A(m/(i=v-i))&&R("overflow");s*=i}c=q(l-o,e=h.length+1,0==o);A(l/e)>m-f&&R("overflow");f+=A(l/e);l%=e;h.splice(l++,0,f)}return y(h)}function C(t){for(var e,n,r,o,s,a,i,h,u,l,f=[],c=(t=O(t)).length,p=_,d=E,y=e=0;y<c;++y)(i=t[y])<128&&f.push(x(i));n=r=f.length;r&&f.push(b);for(;n<c;){for(o=m,y=0;y<c;++y)p<=(i=t[y])&&i<o&&(o=i);o-p>A((m-e)/(h=n+1))&&R("overflow");e+=(o-p)*h;p=o;for(y=0;y<c;++y){(i=t[y])<p&&++e>m&&R("overflow");if(i==p){for(s=e,a=v;!(s<(u=a<=d?w:d+g<=a?g:a-d));a+=v){f.push(x(j(u+(l=s-u)%(u=v-u),0)));s=A(l/u)}f.push(x(j(s,0)));d=q(e,h,n==r);e=0;++n}}++e;++p}return f.join("")}o={version:"1.2.4",ucs2:{decode:O,encode:y},decode:S,encode:C,toASCII:function(t){return d(t,function(t){return u.test(t)?"xn--"+C(t):t})},toUnicode:function(t){return d(t,function(t){return h.test(t)?S(t.slice(4).toLowerCase()):t})}};if(e&&!e.nodeType)if(n)n.exports=o;else for(s in o)o.hasOwnProperty(s)&&(e[s]=o[s]);else t.punycode=o}(this)}.call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],3:[function(t,e,n){var O=t("punycode");n.parse=o;n.resolve=function(t,e){return o(t,!1,!0).resolve(e)};n.resolveObject=function(t,e){return t?o(t,!1,!0).resolveObject(e):e};n.format=function(t){Y(t)&&(t=o(t));return t instanceof c?t.format():c.prototype.format.call(t)};n.Url=c;function c(){this.protocol=null;this.slashes=null;this.auth=null;this.host=null;this.port=null;this.hostname=null;this.hash=null;this.search=null;this.query=null;this.pathname=null;this.path=null;this.href=null}var j=/^([a-z0-9.+-]+:)/i,r=/:[0-9]*$/,n=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),q=["'"].concat(n),S=["%","/","?",";","#"].concat(q),C=["/","?","#"],P=/^[a-z0-9A-Z_-]{0,63}$/,I=/^([a-z0-9A-Z_-]{0,63})(.*)$/,T={javascript:!0,"javascript:":!0},k={javascript:!0,"javascript:":!0},H={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},U=t("querystring");function o(t,e,n){if(t&&a(t)&&t instanceof c)return t;var r=new c;r.parse(t,e,n);return r}c.prototype.parse=function(t,e,n){if(!Y(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var r=(r=t).trim();if(t=j.exec(r)){var o=(t=t[0]).toLowerCase();this.protocol=o;r=r.substr(t.length)}if(n||t||r.match(/^\/\/[^@\/]+@[^@\/]+/)){var s="//"===r.substr(0,2);if(s&&(!t||!k[t])){r=r.substr(2);this.slashes=!0}}if(!k[t]&&(s||t&&!H[t])){for(var a=-1,i=0;i<C.length;i++)-1!==(h=r.indexOf(C[i]))&&(-1===a||h<a)&&(a=h);if(-1!==(b=-1===a?r.lastIndexOf("@"):r.lastIndexOf("@",a))){A=r.slice(0,b);r=r.slice(b+1);this.auth=decodeURIComponent(A)}for(var h,a=-1,i=0;i<S.length;i++)-1!==(h=r.indexOf(S[i]))&&(-1===a||h<a)&&(a=h);-1===a&&(a=r.length);this.host=r.slice(0,a);r=r.slice(a);this.parseHost();this.hostname=this.hostname||"";var u="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!u)for(var l=this.hostname.split(/\./),i=0,f=l.length;i<f;i++){var c=l[i];if(c&&!c.match(P)){for(var p="",d=0,y=c.length;d<y;d++)127<c.charCodeAt(d)?p+="x":p+=c[d];if(!p.match(P)){var m=l.slice(0,i),v=l.slice(i+1),w=c.match(I);if(w){m.push(w[1]);v.unshift(w[2])}v.length&&(r="/"+v.join(".")+r);this.hostname=m.join(".");break}}}255<this.hostname.length?this.hostname="":this.hostname=this.hostname.toLowerCase();if(!u){for(var g=this.hostname.split("."),E=[],i=0;i<g.length;++i){var _=g[i];E.push(_.match(/[^A-Za-z0-9_-]/)?"xn--"+O.encode(_):_)}this.hostname=E.join(".")}var b=this.port?":"+this.port:"",A=this.hostname||"";this.host=A+b;this.href+=this.host;if(u){this.hostname=this.hostname.substr(1,this.hostname.length-2);"/"!==r[0]&&(r="/"+r)}}if(!T[o])for(i=0,f=q.length;i<f;i++){var x=q[i],R=encodeURIComponent(x);R===x&&(R=escape(x));r=r.split(x).join(R)}u=r.indexOf("#");if(-1!==u){this.hash=r.substr(u);r=r.slice(0,u)}u=r.indexOf("?");if(-1!==u){this.search=r.substr(u);this.query=r.substr(u+1);e&&(this.query=U.parse(this.query));r=r.slice(0,u)}else if(e){this.search="";this.query={}}r&&(this.pathname=r);H[o]&&this.hostname&&!this.pathname&&(this.pathname="/");if(this.pathname||this.search){b=this.pathname||"",_=this.search||"";this.path=b+_}this.href=this.format();return this};c.prototype.format=function(){var t=this.auth||"";if(t){t=(t=encodeURIComponent(t)).replace(/%3A/i,":");t+="@"}var e=this.protocol||"",n=this.pathname||"",r=this.hash||"",o=!1,s="";if(this.host)o=t+this.host;else if(this.hostname){o=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]");this.port&&(o+=":"+this.port)}this.query&&a(this.query)&&Object.keys(this.query).length&&(s=U.stringify(this.query));s=this.search||s&&"?"+s||"";e&&":"!==e.substr(-1)&&(e+=":");if(this.slashes||(!e||H[e])&&!1!==o){o="//"+(o||"");n&&"/"!==n.charAt(0)&&(n="/"+n)}else o=o||"";r&&"#"!==r.charAt(0)&&(r="#"+r);s&&"?"!==s.charAt(0)&&(s="?"+s);return e+o+(n=n.replace(/[?#]/g,function(t){return encodeURIComponent(t)}))+(s=s.replace("#","%23"))+r};c.prototype.resolve=function(t){return this.resolveObject(o(t,!1,!0)).format()};c.prototype.resolveObject=function(e){if(Y(e)){var t=new c;t.parse(e,!1,!0);e=t}var n=new c;Object.keys(this).forEach(function(t){n[t]=this[t]},this);n.hash=e.hash;if(""===e.href){n.href=n.format();return n}if(e.slashes&&!e.protocol){Object.keys(e).forEach(function(t){"protocol"!==t&&(n[t]=e[t])});H[n.protocol]&&n.hostname&&!n.pathname&&(n.path=n.pathname="/");n.href=n.format();return n}if(e.protocol&&e.protocol!==n.protocol){if(!H[e.protocol]){Object.keys(e).forEach(function(t){n[t]=e[t]});n.href=n.format();return n}n.protocol=e.protocol;if(e.host||k[e.protocol])n.pathname=e.pathname;else{for(var r=(e.pathname||"").split("/");r.length&&!(e.host=r.shift()););e.host||(e.host="");e.hostname||(e.hostname="");""!==r[0]&&r.unshift("");r.length<2&&r.unshift("");n.pathname=r.join("/")}n.search=e.search;n.query=e.query;n.host=e.host||"";n.auth=e.auth;n.hostname=e.hostname||e.host;n.port=e.port;if(n.pathname||n.search){var o=n.pathname||"",s=n.search||"";n.path=o+s}n.slashes=n.slashes||e.slashes;n.href=n.format();return n}var a=n.pathname&&"/"===n.pathname.charAt(0),t=e.host||e.pathname&&"/"===e.pathname.charAt(0),o=t||a||n.host&&e.pathname,s=o,i=n.pathname&&n.pathname.split("/")||[],r=e.pathname&&e.pathname.split("/")||[],a=n.protocol&&!H[n.protocol];if(a){n.hostname="";n.port=null;n.host&&(""===i[0]?i[0]=n.host:i.unshift(n.host));n.host="";if(e.protocol){e.hostname=null;e.port=null;e.host&&(""===r[0]?r[0]=e.host:r.unshift(e.host));e.host=null}o=o&&(""===r[0]||""===i[0])}if(t){n.host=(e.host||""===e.host?e:n).host;n.hostname=(e.hostname||""===e.hostname?e:n).hostname;n.search=e.search;n.query=e.query;i=r}else if(r.length){(i=i||[]).pop();i=i.concat(r);n.search=e.search;n.query=e.query}else if(null!=e.search){if(a){n.hostname=n.host=i.shift();if(f=!!(n.host&&0<n.host.indexOf("@"))&&n.host.split("@")){n.auth=f.shift();n.host=n.hostname=f.shift()}}n.search=e.search;n.query=e.query;p(n.pathname)&&p(n.search)||(n.path=(n.pathname||"")+(n.search||""));n.href=n.format();return n}if(!i.length){n.pathname=null;n.search?n.path="/"+n.search:n.path=null;n.href=n.format();return n}for(var h=i.slice(-1)[0],t=(n.host||e.host)&&("."===h||".."===h)||""===h,u=0,l=i.length;0<=l;l--)if("."==(h=i[l]))i.splice(l,1);else if(".."===h){i.splice(l,1);u++}else if(u){i.splice(l,1);u--}if(!o&&!s)for(;u--;)i.unshift("..");!o||""===i[0]||i[0]&&"/"===i[0].charAt(0)||i.unshift("");t&&"/"!==i.join("/").substr(-1)&&i.push("");var f,t=""===i[0]||i[0]&&"/"===i[0].charAt(0);if(a){n.hostname=n.host=!t&&i.length?i.shift():"";if(f=!!(n.host&&0<n.host.indexOf("@"))&&n.host.split("@")){n.auth=f.shift();n.host=n.hostname=f.shift()}}(o=o||n.host&&i.length)&&!t&&i.unshift("");if(i.length)n.pathname=i.join("/");else{n.pathname=null;n.path=null}p(n.pathname)&&p(n.search)||(n.path=(n.pathname||"")+(n.search||""));n.auth=e.auth||n.auth;n.slashes=n.slashes||e.slashes;n.href=n.format();return n};c.prototype.parseHost=function(){var t=this.host,e=r.exec(t);if(e){":"!==(e=e[0])&&(this.port=e.substr(1));t=t.substr(0,t.length-e.length)}t&&(this.hostname=t)};function Y(t){return"string"==typeof t}function a(t){return"object"==typeof t&&null!==t}function p(t){return null===t}},{punycode:2,querystring:6}],4:[function(t,e,n){"use strict";e.exports=function(t,e,n,r){n=n||"=";var o={};if("string"!=typeof t||0===t.length)return o;var s=/\+/g;t=t.split(e=e||"&");e=1e3;r&&"number"==typeof r.maxKeys&&(e=r.maxKeys);var a=t.length;0<e&&e<a&&(a=e);for(var i=0;i<a;++i){var h,u,l=t[i].replace(s,"%20"),f=l.indexOf(n);if(0<=f){h=l.substr(0,f);u=l.substr(f+1)}else{h=l;u=""}f=decodeURIComponent(h);l=decodeURIComponent(u);Object.prototype.hasOwnProperty.call(o,f)?c(o[f])?o[f].push(l):o[f]=[o[f],l]:o[f]=l}return o};var c=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},{}],5:[function(t,e,n){"use strict";function s(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}}e.exports=function(n,r,o,t){r=r||"&";o=o||"=";return"object"==typeof(n=null===n?void 0:n)?i(h(n),function(t){var e=encodeURIComponent(s(t))+o;return a(n[t])?i(n[t],function(t){return e+encodeURIComponent(s(t))}).join(r):e+encodeURIComponent(s(n[t]))}).join(r):t?encodeURIComponent(s(t))+o+encodeURIComponent(s(n)):""};var a=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function i(t,e){if(t.map)return t.map(e);for(var n=[],r=0;r<t.length;r++)n.push(e(t[r],r));return n}var h=Object.keys||function(t){var e,n=[];for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.push(e);return n}},{}],6:[function(t,e,n){"use strict";n.decode=n.parse=t("./decode");n.encode=n.stringify=t("./encode")},{"./decode":4,"./encode":5}],7:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.STATE_AP_KEY="_AP";n.QUERY_KEY_PREFIX="ac";n.QUERY_KEY_DELIMITER=".";n.ANCHOR_PREFIX="!";n.HISTORY_POPSTATE="history_popstate";n.HISTORY_PUSHSTATE="history_pushstate";n.HISTORY_REPLACESTATE="history_replacestate";n.HISTORY_CHANGESTATE="history_changestate"},{}],8:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.Addon=u;n.Addons=l;n.Current=function(t){if(!(t=t||{}).url)throw new Error("missing url");var e=i.default.parse(t.url),n=new l,r=(0,h.parseQuery)(e.query).map(h.stripAddonQueryPrefix),e=(0,h.normalizeQueryByAddons)(r),r=e.filter(function(t){return t.key}),e=e.filter(function(t){return!t.key});r.forEach(function(t){t=new u(t);n.add(t)});this.url=new c({url:t.url,addons:n,global:e});this.state=new f(t.state);return this};n.Change=function(t,e){var n=typeof t,r=i.default.parse(window.location.href),o={},s={};if("string"==n){o.protocol=r.protocol;o.slashes=r.slashes;o.hostname=r.hostname;o.pathname=r.pathname;o.port=r.port;o.search=r.search;o.query=r.query;o.hash=(0,h.addHash)((0,h.addHashPrefix)(t))}else{if("object"!=n)throw new Error("invalid option type");var a=t.href?i.default.parse(t.href):r;o.protocol=r.protocol;o.slashes=r.slashes;o.hostname=r.hostname;o.port=r.port;o.pathname=a.pathname||r.pathname;o.search=null;o.query=null;o.hash=t.hash?(0,h.addHash)((0,h.addHashPrefix)(t.hash)):null;s.state=t.state;s.query=t.query}a=new l,r=new l;if(s.state){t=new u({key:e,state:s.state});a.add(t)}if(s.query){s=new u({key:e,query:s.query});r.add(s)}a=new f({addons:a}),r=new c({url:i.default.format(o),addons:r});this.state=a;this.url=r;return this};n.State=f;n.URL=c;n.Route=s;var r,o=t("url"),i=(r=o)&&r.__esModule?r:{default:r},h=t("./utils");function u(t){if(!(t=t||{}).key)throw new Error("missing key for addon");this.key=t.key;this.state=t.state;this.query=t.query||{};return this}function l(t){(t=t||{}).models=t.models||[];t.models instanceof Array||(t.models=[t.models]);t.models=t.models.map(function(t){return t instanceof u?t:new u(t)});this.models=t.models;return this}l.prototype.add=function(t){this.models.push(t)};l.prototype.remove=function(t){this.models.splice(this.models.indexOf(t),1)};l.prototype.find=function(e){return(0,h.find)(this.models,function(t){return t.key===e})};l.prototype.merge=function(t){var e=this.find(t.key);e&&this.remove(e);this.add(t)};function f(t){(t=t||{}).addons=t.addons||[];t.addons instanceof l||(t.addons=new l(t.addons));this.addons=t.addons;return this}f.prototype.merge=function(t){var e=this;t.addons.models.forEach(function(t){e.addons.merge(t)})};f.prototype.render=function(){return(0,h.deepCopy)(this)};function c(t){(t=t||{}).addons=t.addons||[];t.global=t.global||[];t.parsed instanceof i.default.Url||(t.parsed=i.default.parse(t.url));t.addons instanceof l||(t.addons=new l(t.addons));this.parsed=t.parsed;this.addons=t.addons;this.global=t.global;this.title=t.title||window.document.title}c.prototype.isURLEqual=function(t){return this.render().url===t.render().url};c.prototype.isPathnameEqual=function(t){var e=this.parsed.protocol===t.parsed.protocol,n=this.parsed.slashes===t.parsed.slashes,r=this.parsed.hostname===t.parsed.hostname,t=this.parsed.pathname===t.parsed.pathname;return e&&n&&r&&t};c.prototype.merge=function(t){var e=this;e.parsed.hash=t.parsed.hash;t.addons.models.forEach(function(t){e.addons.merge(t)})};c.prototype.render=function(){var t=(0,h.deepCopy)(this),e=t.parsed,n=(0,h.denormalizeQueryByAddons)(this.addons.models),r=(0,h.denormalizeQueryByAddons)(this.global),r=n.concat(r).map(h.addAddonQueryPrefix),r=(0,h.formatQuery)(r);e.query=r;e.search=e.query?"?"+e.query:null;t.url=i.default.format(e);return t};function s(t){if(!(t=t||{}).url)throw new Error("missing url option");t.url instanceof c||(t.url=new c(t.url));if(!t.state)throw new Error("missing state option");t.state instanceof f||(t.state=new f(t.state));this.url=t.url;this.state=t.state}s.prototype.merge=function(t){this.url.merge(t.url);this.state.merge(t.state)};s.prototype.render=function(t){return(0,h.deepCopy)({key:t,hash:(0,h.stripHashPrefix)((0,h.stripHash)(this.url.parsed.hash)),query:this.url.addons.find(t)?this.url.addons.find(t).query:null,title:this.url.title,href:this.url.parsed.href,state:this.state.addons.find(t)?this.state.addons.find(t).state:null})}},{"./utils":9,url:3}],9:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.find=function(t,e){for(var n=0,r=t.length;n<r;n+=1)if(e(t[n]))return t[n]};n.values=function(t){var e,n=[];if(!t)return n;for(e in t)n.push(t[e]);return n};n.stripHash=function(t){return t?t.slice(t.search("#")+1):null};n.stripHashPrefix=o;n.addHash=function(t){return"#"+t};n.addHashPrefix=function(t){if(null!=t)return r.ANCHOR_PREFIX+o(t);throw"You must supply text to prefix"};n.splitQueryParam=s;n.joinQueryParam=a;n.parseQuery=function(t){return(t?t.split("&"):[]).map(s).filter(function(t){return t})};n.formatQuery=function(t){t=t.map(a).filter(function(t){return t});return t.length?t.join("&"):null};n.stripAddonQueryPrefix=function(t){var e=t.key?t.key.split(r.QUERY_KEY_DELIMITER):[],n=r.QUERY_KEY_PREFIX;{if(3<=e.length){if(n!==e[0])return t;n=e.slice(1,e.length-1).join(r.QUERY_KEY_DELIMITER),e=e.slice(e.length-1).join(r.QUERY_KEY_DELIMITER);return{addonKey:n,key:e,value:t.value}}return t}};n.addAddonQueryPrefix=function(t){var e=r.QUERY_KEY_PREFIX;{if("addonKey"in t&&t.addonKey)return{key:[e,t.addonKey,t.key].join(r.QUERY_KEY_DELIMITER),value:t.value};return t}};n.normalizeQueryByAddons=function(t){var o=[];t.forEach(function(t){var e=t.key,n=t.value,r=t.addonKey,t=o.filter(function(t){return t.key===r});t&&t.length?t[0].query[e]=n:o.push({key:r,query:function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n;return t}({},e,n)})});return o};n.denormalizeQueryByAddons=function(t){var o=[];t.forEach(function(n){var r=n.key;Object.keys(n.query).forEach(function(t){var e=n.query[t];o.push({addonKey:r,key:t,value:e})})});return o};n.deepCopy=function(t){return JSON.parse(JSON.stringify(t))};n.wrapState=function(t){var e={};e[r.STATE_AP_KEY]=t;return e};n.unwrapState=function(t){return t&&t[r.STATE_AP_KEY]?t[r.STATE_AP_KEY]:null};n.createEvent=function(t){{if("function"==typeof Event)return e=new Event(t);var e;(e=document.createEvent("Event")).initEvent(t,!1,!1);return e}};n.callConnectHost=function(e){t&&t.amd?t(["connect-host"],function(t){e(t)}):e(window.connectHost)};n.log=function(t,e){e=e||"log";console[e].call(null,"Atlassian Connect JS History: ",t)};var r=t("./constants");function o(t){return null==t||""===t?"":t.toString().replace(new RegExp("^"+r.ANCHOR_PREFIX),"")}function s(t){t=t?t.split("="):[],t[0],t[1];return 2!==t.length?null:{key:t[0],value:t[1]}}function a(t){return"key"in t&&"value"in t?[t.key,"=",t.value].join(""):null}},{"./constants":7}]},{},[1])(1)});;
;
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-extensions-v5', location = 'atlassian-connect/v5/js/core/connect-host-request.js' */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this;t.connectHostRequest=e()}}(function(){return function r(o,a,s){function c(n,e){if(!a[n]){if(!o[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(i)return i(n,!0);t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}t=a[n]={exports:{}};o[n][0].call(t.exports,function(e){var t=o[n][1][e];return c(t||e)},t,t.exports,r,o,a,s)}return a[n].exports}for(var i="function"==typeof require&&require,e=0;e<s.length;e++)c(s[e]);return c}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var h,o=["status","statusText","responseText"],a=["status","statusText","response"],s=["Content-Type","ETag"],y=["If-Match","If-None-Match","X-Atlassian-Force-Account-ID"];function c(e){return e.replace(/(http[s]?:\/\/[^"]*?&jwt=[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*.*?)\\"/gi,'\\"')}function w(n,e){var r={headers:{}};e?a.forEach(function(e,t){r[e]=n[e];if("response"===e)try{JSON.parse(n[e]);r[e]=c(n[e])}catch(e){}},this):o.forEach(function(e,t){r[e]=n[e];if("responseText"===e)try{JSON.parse(n[e]);r[e]=c(n[e])}catch(e){}},this);s.forEach(function(e,t){r.headers[e]=n.getResponseHeader(e)},this);return r}function m(e,t,n){n._isBlob&&n.blob&&n.name?e.append(t,n.blob,n.name):e.append(t,n);return e}n.stripJWTUrls=c;n.addRequestMarshal=function(e){if("function"!=typeof e)throw new Error("ACJS request marshal must be a function");h=e};n.removeRequestMarshal=function(){h=void 0};n.default={request:function(t,r){var e=function(){if(window.AJS&&window.AJS.contextPath)return window.AJS.contextPath();var e=document.querySelector("meta[name=ajs-context-path]");return e?e.getAttribute("content"):""}(),n={},o=(r=arguments[arguments.length-1])._context.extension,a=o.addon_key,s=o.key,c=o.options.allowPathTraversal,o=e+(t="string"==typeof t?{url:t}:t).url;if(!c)if(!new URL(o,document.baseURI).pathname.startsWith(e)){window.connectHost&&window.connectHost.trackAnalyticsEvent&&window.connectHost.trackAnalyticsEvent("jsapi.request.prevent-path-traversal",{addonKey:a,moduleKey:s,url:o});return r("Request url must include context path '"+e+"'",{})}t.headers=t.headers||{};Object.getOwnPropertyNames(t.headers).forEach(function(e){n[e.toLowerCase()]=t.headers[e]},this);function i(e,t,n){r(!1,w(n,p),e)}function u(e,t,n){r(n,w(e,p),n)}var f,d={url:o,type:t.type||"GET",data:t.data,dataType:"text",contentType:t.contentType,cache:void 0!==t.cache?!!t.cache:void 0,headers:{Accept:n.accept||"*/*","AP-Client-Key":a}};(d="multipart/form-data"===d.contentType?function(t){t.contentType=!1;t.processData=!1;if(!t.data||"object"!=typeof t.data)throw new Error("For a Multipart request, data must to be an Object");var r=new FormData;Object.keys(t.data).forEach(function(n){var e=t.data[n];Array.isArray(e)?e.forEach(function(e,t){r=m(r,n+"["+t+"]",e)}):r=m(r,n,e)});t.data=r;t.headers["X-Atlassian-Token"]="no-check";return t}(d):d).data&&"object"==typeof d.data&&"GET"===d.type.toUpperCase()&&Object.keys(d.data).forEach(function(e){d.url+=(0<=d.url.indexOf("?")?"&":"?")+encodeURIComponent(e)+"="+encodeURIComponent(d.data[e])});!0===t.experimental&&(d.headers["X-ExperimentalApi"]="opt-in");y.forEach(function(e,t){n[e.toLowerCase()]&&(d.headers[e]=n[e.toLowerCase()])},this);d.cache||(d.url+=(0<=d.url.indexOf("?")?"&":"?")+"_r="+(new Date).getTime());(f=new XMLHttpRequest).open(d.type,d.url,!0);var p=!1;if(t.binaryAttachment){p=!0;f.responseType="arraybuffer"}d.contentType&&(d.headers["Content-type"]=d.contentType);Object.getOwnPropertyNames(d.headers).forEach(function(e){f.setRequestHeader(e,d.headers[e])});f.onload=function(){200<=this.status&&this.status<300?i(p?f.response:f.responseText,f.statusText,f):u(f,f.statusText,p?f.response:f.responseText)};f.onerror=function(){u(f,f.statusText,p?f.response:f.responseText)};try{var l=!0;if(!0===(l=h?h.call(null,d):l))f.send(d.data||null);else{f.abort();u(f,0,l)}}catch(e){f.abort();u(f,0,e);console.error("ACJS Request: ",e.message,e)}}}},{}]},{},[1])(1)});;
;
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-user-v5', location = 'atlassian-connect/v5/js/iframe/host/user.js' */
define("ac/user",function(){return{getUser:function(e){var t=e._context.extension.options.user;e({fullName:(void 0!==t.uid||void 0!==t.ukey)&&(AJS.Meta.get("remote-user-fullname")||AJS.Meta.get("current-user-fullname"))||null,id:t.uid,key:t.ukey})},getCurrentUser:function(e){e({atlassianAccountId:AJS.Meta.get("atlassian-account-id")||null,accountType:AJS.Meta.get("account-type")||null})},getTimeZone:function(e){e(e._context.extension.options.user.timeZone)},getLocale:function(e){e(AJS.Meta.get("user-locale"))}}});;
;
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:content-resolver-v5', location = 'atlassian-connect/v5/js/iframe/host/content-resolver.js' */
!function(){function r(e,n){n=new URL(n,window.location.origin).pathname.slice(1);return AJS.contextPath()+"/plugins/servlet/ac/"+encodeURIComponent(e)+"/"+encodeURIComponent(n)}function s(e){var n=e.getResponseHeader("Date"),e=Math.round(Date.parse(n)/1e3),n=Math.round(Date.now()/1e3);if(!isNaN(e)){e=Math.abs(n-e);window.connectHost.setJwtClockSkew(e+60)}}function o(i,a){return AJS.$.Deferred(function(o){var e=function(e){e=e.addon_key+"__"+e.key;if(window._AP&&window._AP.cacheableIframeUrls&&window._AP.cacheableIframeUrls[e])return window._AP.cacheableIframeUrls[e]}(i);if(!e||a){var n={"plugin-key":i.addon_key,"product-context":JSON.stringify(i.options.productContext||{}),key:i.key,width:i.width||"100%",height:i.height||"100%",classifier:i.classifier||"raw"};i.options.contentClassifier&&(n.classifier=[i.options.contentClassifier,n.classifier]);var t=function(n,t){var o={};_.keys(n).forEach(function(e){t(e,n[e])&&(o[e]=n[e])});return o}(i.options.customData||{},function(e,n){return!_.isObject(n)&&(!("string"==typeof n||n instanceof String)||n.length<255)});AJS.$.ajax(r(i.addon_key,i.key),{dataType:"json"===i.classifier?"json":"html",data:AJS.$.extend({},n,function(n){var t={};_.keys(n).forEach(function(e){t["ac."+e]=n[e]});return t}(t)),type:"POST"}).then(function(n,e,t){s(t);a?o.resolve(window._AP._convertConnectOptions(n)):require(["ac/create"],function(e){o.resolve(window._AP._convertConnectOptions(n))})}).fail(function(e,n,t){s(e);o.reject({addon_key:i.addon_key,key:i.key,options:i.options},{text:"Unable to retrieve addon module URL. Please check your specified module key."})})}else o.resolve(window._AP._convertConnectOptions({addon_key:i.addon_key,key:i.key,url:e,productCtx:JSON.stringify(i.options.productContext||{})}))}).promise()}function n(t){return function(n){if("set_inner_iframe_url"===n.data.type){if(t&&t.getBooleanFeatureFlag&&t.getBooleanFeatureFlag("com.atlassian.connect.resolve_inner_iframe_url")){n.data.iframeData.classifier="json";return o(n.data.iframeData,!0).then(function(e){e.id=n.data.extension_id;t.registerExistingExtension(e.id,{extension:e});n.source.location=e.url})}n.data.iframeData.url&&0===n.data.iframeData.url.indexOf("http")&&(n.source.location=n.data.iframeData.url)}}}define("ac/content-resolver",function(){return{resolveByExtension:o,getIframeUrlSetter:n}});_AP.util.awaitGlobal("connectHost",function(e){e.registerContentResolver.resolveByExtension(o);window.addEventListener("message",n(e))})}();;
;
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-context-v5', location = 'atlassian-connect/v5/js/context/util.js' */
define("ac/context/util",function(){return{isValidExtensionOptionsForCache:function(t){var e=(!t.contextJwt||!connectHost.isJwtExpired(t.contextJwt,!0))&&!!t.structuredContext;if(e){var n=t.productContext&&0<Object.getOwnPropertyNames(t.productContext).length,t=0<Object.getOwnPropertyNames(t.structuredContext).length;!n||t||(e=!1)}return e}}});;
;
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-context-v5', location = 'atlassian-connect/v5/js/context/main.js' */
define("ac/context",["ac/content-resolver","ac/context/util"],function(o,e){var i=3e4,c={};function r(t){if(t.id&&1<t.id.length)return t.id;throw new Error("ACJS: cannot generate cache key for extension")}function s(t){return c[t].context.contextObj}function x(t,n){return{cachedAt:Date.now(),contextJwt:n,contextObj:t}}function a(t){var n,e=r(t);if(!c[e]||!c[e].promise&&c[e].context&&(n=c[e].context.cachedAt,i+n<Date.now())){t.classifier="json";c[e]=c[e]||{};c[e].promise=o.resolveByExtension(t,!0).done(function(t){t&&(c[e].context=x(t.options.structuredContext,t.options.contextJwt))})}}function u(t){if(!t||t.length<2)throw new Error("ACJS: Cannot get token. Add-on does not support JWT authentication")}function n(t){if(e.isValidExtensionOptionsForCache(t.extension.options)){var n=r(t.extension);c[n]={context:x(t.extension.options.structuredContext,t.extension.options.contextJwt)}}else a(t.extension)}_AP.util.awaitGlobal("connectHost",function(t){t.onIframeEstablished(n);t.onIframeUnload(function(t){delete c[r(t.extension)]})});var t={getToken:function(o){return new Promise(function(n,t){var e=r(o._context.extension);a(o._context.extension);if(c[e].promise)c[e].promise.done(function(t){u(t.options.contextJwt);try{n(t.options.contextJwt)}catch(t){}}.bind(this)).fail(function(){t("ACJS: content resolver failed to get context jwt token")}).always(function(){delete c[e].promise}.bind(this));else{u(c[e].context.contextJwt);n(c[e].context.contextJwt)}})},getContext:function(o){return new Promise(function(n,t){var e=r(o._context.extension);o._context.extension.addon_key;a(o._context.extension);c[e].promise?c[e].promise.done(function(t){try{n(s(e))}catch(t){}}.bind(this)).fail(function(){t("ACJS: content resolver failed to get context")}).always(function(){delete c[e].promise}.bind(this)):n(s(e))})}};t.getContext.returnsPromise=!0;t.getToken.returnsPromise=!0;return t});;
;
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:module-loader-v5', location = 'atlassian-connect/v5/js/iframe/host/module-loader.js' */
_AP.util.awaitGlobal("connectHost",function(e){e.defineModule("cookie",connectHostCookie);e.defineModule("history",connectHostHistory);e.defineModule(connectHostRequest.default);e.defineModule("navigator",require("ac/navigator/module"));e.defineModule("user",require("ac/user"));e.defineModule("context",require("ac/context"))});;
;
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:iframe-insertion-v5', location = 'atlassian-connect/v5/js/iframe/combined/iframe-insertion.js' */
!function(){var i=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,50)},a=function(t,n,o){try{var e=require(t);n(e)}catch(e){if(o<=0){console.error("Unable to load module: "+t);n(null)}else setTimeout(function(){a(t,n,o-1)},500)}},d=function(e,t,n,o,i){void 0===o&&(o=20);i=i||500;!e.isModuleDefined||o<=0?n():e.isModuleDefined(t)?n(!0):setTimeout(function(){d(e,t,n,o-1,i)},i)};function n(t){var e;if("string"==typeof t&&1<t.length)try{e=JSON.parse(t)}catch(e){console.error("ACJS: failed to decode context",t)}return e="object"!=typeof e?{}:e}window._AP=window._AP||{};window._AP.addonAttemptCounter=window._AP.addonAttemptCounter||{};window._AP._convertConnectOptions=function(e){var t={url:e.url,ns:e.uniqueKey,addon_key:e.addon_key,key:e.key,containerId:"embedded-"+e.uniqueKey,options:{history:{state:""},uniqueKey:e.uniqueKey,origin:e.origin,hostOrigin:e.hostOrigin,moduleType:e.moduleType,moduleLocation:e.moduleLocation,isFullPage:"1"===e.general,autoresize:!0,user:{timeZone:e.timeZone,fullName:e.fullName,uid:e.uid,ukey:e.ukey},productContext:n(e.productCtx),structuredContext:n(e.structuredContext),contextJwt:e.contextJwt,contextPath:e.cp,width:e.w||e.width,height:e.h||e.height,sandbox:e.sandbox,pearApp:e.pearApp,noSub:e.noSub,allowPathTraversal:e.allowPathTraversal,targets:{env:{resize:"both"}}}};"string"==typeof e.contentClassifier&&(t.options.contentClassifier=e.contentClassifier);"number"==typeof e.hostFrameOffset&&(t.options.hostFrameOffset=e.hostFrameOffset+1);window._AP.isSubHost||(t.options.history.state=window.location.hash?window.location.hash.substr(2):"");return t};window._AP._createSub=function(e){var t=document.createElement("iframe"),n=(window.connectHost||window.AP).subCreate(e);n.width=e.options.width||"";n.height=e.options.height||"";n.style="border:0;";n.class="ap-iframe";n["data-addon-key"]=e.addon_key;n["data-key"]=e.key;delete n.src;Object.getOwnPropertyNames(n).forEach(function(e){t.setAttribute(e,n[e])});return t};function r(e){return void 0!==window[e]}function s(e,t,n){n=n||100;var o;r(e)?t(window[e]):o=setInterval(function(){if(r(e)){clearInterval(o);t(window[e])}},n)}function o(e){window._AP.isSubHost=function(e,t){if("number"!=typeof e)return window.top;for(var n=t||window,o=0;o<e;o++)n=n.parent;return n}(e.hostFrameOffset)!==window;var o=window._AP._convertConnectOptions(e);window._AP.addonAttemptCounter[o.containerId]=0;if(window._AP.isSubHost){window.AP&&window.AP._data&&window.AP._data.options&&window.AP._data.options.globalOptions&&(o.options.globalOptions=window.AP._data.options.globalOptions);c(window._AP._createSub(o),o)}else s("connectHost",function(n){var e;(e={addon_key:o.addon_key,key:o.key},n.getExtensions(e).filter(function(e){return Boolean(document.getElementById(e.extension_id))})).forEach(function(e){if(e.extension.options.uniqueKey===o.options.uniqueKey){var t=document.getElementById(e.extension_id);n.destroy(e.extension_id);t&&AJS.$(t).closest(".ap-iframe-container").remove()}},this);c(n.create(o),o)})}function c(e,t){var n=document.getElementById(t.containerId);window._AP.addonAttemptCounter[t.containerId]++;if(n){delete window._AP.addonAttemptCounter[t.containerId];if(window._AP.isSubHost){n.appendChild(e);!function(e,t){var n=e.contentDocument,e={type:"set_inner_iframe_url",iframeData:t,extension_id:JSON.parse(e.name).extension_id},e="(function(){ var w = window; for (var i=0; i<"+t.options.hostFrameOffset+"; i++){w = w.parent; } w.postMessage("+JSON.stringify(e)+', "*");}());';n.open();n.write("<script>"+e+"<\/script>");n.close()}(e,t)}else{var o=n.querySelector(".ap-iframe-container");if(o){o.parentNode.removeChild(o);AJS.log&&AJS.log("AJS: duplicate iframe removed",t,n)}e.appendTo(n);e.data("addon-key",t.addon_key);e.data("key",t.key)}}else window._AP.addonAttemptCounter[t.containerId]<=10&&i(function(){c(e,t)})}window._AP.appendConnectAddon=function(n){var e=!1;try{window.top.karma&&(e=!0)}catch(e){}if(window===window.top||e)/^com\.atlassian\.(jira|confluence)\.emcee($|\.local|\.staging|\.development\..*)/g.test(n.addon_key)?a("ac/marketplace",function(t){t&&s("connectHost",function(e){e.defineModule("marketplace",t)});o(n)},20):"com.addonengine.analytics"===n.addon_key?s("connectHost",function(e){d(e,"analytics",function(){o(n)})}):o(n);else{var t=function(e){if(e.source===window.top&&e.data&&void 0!==e.data.hostFrameOffset){window.removeEventListener("message",t);n.hostFrameOffset=e.data.hostFrameOffset;o(n)}};window.addEventListener("message",t);window.top.postMessage({type:"get_host_offset"},"*")}}}();;
;
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:iframe-host-js-v5', location = 'atlassian-connect/v5/js/iframe/host/main.js' */
_AP.addonAttemptCounter={};_AP.util.awaitGlobal("connectHost",function(n){n.setExtensionConfigurationOptions("crev",window._AP.allJsVersion);n.setExtensionConfigurationOptions("resolve_inner_iframe_url",n.getBooleanFeatureFlag&&n.getBooleanFeatureFlag("com.atlassian.connect.resolve_inner_iframe_url"));n.onIframeEstablished(function(n){n.$el.closest(".ap-iframe-container").addClass("iframe-init")});n.onFrameClick(function(n){n.click()})});define("ac/create",function(){return{appendConnectAddon:function(n){return window._AP.appendConnectAddon(n)}}});define("ac/analytics",function(){return{emitGasV3:function(n,e){const t=window.require("jira/analytics/web-client");switch(n){case"operational":t.sendOperationalEvent(e);break;case"page":t.sendPageEvent(e);break;case"screen":t.sendScreenEvent(e);break;default:throw new Error("ACJS: Unknown GasV3 event type")}}}});;
;
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:jira-workflow-post-function-v5', location = 'atlassian-connect/v5/js/jira/workflow-post-function/workflow-post-function.js' */
define("ac/jira/workflow-post-function",["ac/jira/workflow-post-function-utils"],function(e){"use strict";var i=function(){};connectHost.onIframeEstablished(function(n){var o=n.extension.options.moduleType;if(o&&e.isOnWorkflowElementPage(o)&&e.isWorkflowElementExtension(n.extension)){var t=e.getWorkflowElementId(o);"string"==typeof t&&e.registerSubmissionButton(o,t,function(o){i=o;connectHost.broadcastEvent("jira_workflow_post_function_submit",{id:n.extension.id})})}});return{getWorkflowConfiguration:function(o){if("function"!=typeof o)return!1;var n=o._context.extension.options.moduleType;if(!n||!e.isOnWorkflowElementPage(n))return!1;n=e.workflowElementConfigInput(n,o._context.extension.options.productContext[e.getWorkflowElementName(n)+".id"]);o&&o(n)},_submitWorkflowConfigurationResponse:function(o,n){i(o)}}});;
;
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:jira-workflow-post-function-v5', location = 'atlassian-connect/v5/js/jira/workflow-post-function/workflow-post-function-utils.js' */
!function(l){"use strict";define("ac/jira/workflow-post-function-utils",function(){function u(t,n,o){n=l("#"+window._AP.util.escapeSelector(i(t))+"-config-"+window._AP.util.escapeSelector(n));o&&n.val(o);return n.val()}function n(t){return Boolean(i(t))}function i(t){return"jiraWorkflowPostFunctions"===t&&0<l("input[name='postFunction.id']").length?"postFunction":"jiraWorkflowConditions"===t&&0<l("input[name='condition.id']").length?"condition":"jiraWorkflowValidators"===t&&0<l("input[name='validator.id']").length?"validator":null}return{workflowElementConfigInput:u,isOnWorkflowElementPage:n,registerSubmissionButton:function(o,i,t,e){if(!o)throw"Missing module type";if(!n(o))throw"Not on a workflow configuration page";var r=!1;l(document).delegate("#add_submit, #update_submit","click",function(n){if(!r||e){n.preventDefault();t(function(t){if(t.valid){u(o,i,t.value);r=!0;l(n.target).click()}})}})},getWorkflowElementId:function(t){if(!t)throw"Missing module type";return l("input[name='"+window._AP.util.escapeSelector(i(t))+".id']").val()},isWorkflowElementExtension:function(t){if(t&&t.options&&t.options.productContext&&t.options.moduleType){var n=t.options.productContext,t=t.options.moduleType;if(t&&n[i(t)+".id"]&&5<n[i(t)+".id"].length)return!0}return!1},getWorkflowElementName:i}})}(AJS.$);;
;
/* module-key = 'com.atlassian.jira.jira-quick-edit-plugin:quick-create-calendar-init', location = 'jira-quick-edit-plugin/js/init/calendar.js' */
define("quick-edit/init/calendar",["wrm/require"],function(a){function e(e){var c,n=r();switch(n){case"cs_CZ":c="calendar-cs";break;case"da_DK":c="calendar-da";break;case"de_DE":c="calendar-de";break;case"en_UK":c="calendar-en";break;case"en_US":c="calendar-en";break;case"es_ES":c="calendar-es";break;case"et_EE":c="calendar-en";break;case"fi_FI":c="calendar-fi";break;case"fr_FR":c="calendar-fr";break;case"hu_HU":c="calendar-hu";break;case"is_IS":c="calendar-en";break;case"it_IT":c="calendar-it";break;case"ja_JP":c="calendar-jp";break;case"ko_KR":c="calendar-ko";break;case"nb_NO":c="calendar-no";break;case"nl_NL":c="calendar-nl";break;case"pl_PL":c="calendar-pl";break;case"pt_BR":c="calendar-pt";break;case"pt_PT":c="calendar-pt";break;case"ro_RO":c="calendar-ro";break;case"ru_RU":c="calendar-ru";break;case"sk_SK":c="calendar-sk";break;case"sv_SE":c="calendar-sv";break;case"zh_CN":c="calendar-zh";break;default:c="calendar-en"}a("wrc!jira.webresources:"+c,e)}var r=function(){return AJS.Meta.get("user-locale")};return function(a){e(a)}});;
;
/* module-key = 'jira.webresources:calendar', location = '/includes/lib/calendar/Calendar.js' */
Calendar=function(e,t,a,n,r){if(this.activeDiv=null,this.currentDateEl=null,this.getDateStatus=null,this.getDateToolTip=null,this.getDateText=null,this.timeout=null,this.onSelected=n||null,this.onClose=r||null,this.dragging=!1,this.hidden=!1,this.minYear=1970,this.maxYear=2050,this.dateFormat=Calendar._TT.DEF_DATE_FORMAT,this.ttDateFormat=Calendar._TT.TT_DATE_FORMAT,this.isPopup=!0,this.weekNumbers=!0,this.firstDayOfWeek="number"==typeof e?e:Calendar._FD,this.showsOtherMonths=!1,this.dateStr=t,this.todayDateStr=a,this.ar_days=null,this.showsTime=!1,this.time24=!0,this.yearStep=2,this.hiliteToday=!0,this.multiple=null,this.table=null,this.element=null,this.tbody=null,this.firstdayname=null,this.monthsCombo=null,this.yearsCombo=null,this.hilitedMonth=null,this.activeMonth=null,this.hilitedYear=null,this.activeYear=null,this.dateClicked=!1,"undefined"==typeof Calendar._SDN){"undefined"==typeof Calendar._SDN_len&&(Calendar._SDN_len=3);for(var l=new Array,i=8;i>0;)l[--i]=Calendar._DN[i].substr(0,Calendar._SDN_len);Calendar._SDN=l,"undefined"==typeof Calendar._SMN_len&&(Calendar._SMN_len=3),l=new Array;for(var i=12;i>0;)l[--i]=Calendar._MN[i].substr(0,Calendar._SMN_len);Calendar._SMN=l}},Calendar._C=null,Calendar.is_ie=/msie/i.test(navigator.userAgent)&&!/opera/i.test(navigator.userAgent),Calendar.is_ie5=Calendar.is_ie&&/msie 5\.0/i.test(navigator.userAgent),Calendar.is_ie6=Calendar.is_ie&&/msie 6\.0/i.test(navigator.userAgent),Calendar.is_opera=/opera/i.test(navigator.userAgent),Calendar.is_khtml=/Konqueror|Safari|KHTML/i.test(navigator.userAgent),Calendar.setFullYearAndFixFebruary=function(e,t){var a=require("jira/util/safe-logger"),n=new Date(e),r={from:n.getFullYear(),to:t,fixedFeb:!1};n.setFullYear(t),n.getMonth()!==e.getMonth()&&(r.fixedFeb=!0,e.setDate(28)),e.setFullYear(t),a.safeInfo("jscalendar","Setting full year",r)},Calendar.getAbsolutePos=function(e){var t=jQuery(e).offset();return t.x=t.left,t.y=t.top,t},Calendar.isRelated=function(e,t){var a=t.relatedTarget;if(!a){var n=t.type;"mouseover"==n?a=t.fromElement:"mouseout"==n&&(a=t.toElement)}for(;a;){if(a==e)return!0;a=a.parentNode}return!1},Calendar.removeClass=function(e,t){if(e&&e.className){for(var a=e.className.split(" "),n=new Array,r=a.length;r>0;)a[--r]!=t&&(n[n.length]=a[r]);e.className=n.join(" ")}},Calendar.addClass=function(e,t){Calendar.removeClass(e,t),e.className+=" "+t},Calendar.getElement=function(e){for(var t=Calendar.is_ie?window.event.srcElement:e.currentTarget;1!=t.nodeType||/^div$/i.test(t.tagName);)t=t.parentNode;return t},Calendar.getTargetElement=function(e){for(var t=Calendar.is_ie?window.event.srcElement:e.target;1!=t.nodeType;)t=t.parentNode;return t},Calendar.stopEvent=function(e){return e||(e=window.event),e.stopPropagation?(e.preventDefault(),e.stopPropagation()):(e.cancelBubble=!0,e.returnValue=!1),!1},Calendar.addEvent=function(e,t,a){e.attachEvent?e.attachEvent("on"+t,a):e.addEventListener?e.addEventListener(t,a,!0):e["on"+t]=a},Calendar.removeEvent=function(e,t,a){e.detachEvent?e.detachEvent("on"+t,a):e.removeEventListener?e.removeEventListener(t,a,!0):e["on"+t]=null},Calendar.createElement=function(e,t){var a=null;return a=document.createElementNS?document.createElementNS("http://www.w3.org/1999/xhtml",e):document.createElement(e),"undefined"!=typeof t&&t.appendChild(a),a},Calendar._add_evs=function(e){Calendar.addEvent(e,"mouseover",Calendar.dayMouseOver),Calendar.addEvent(e,"mousedown",Calendar.dayMouseDown),Calendar.addEvent(e,"mouseout",Calendar.dayMouseOut),Calendar.is_ie&&(Calendar.addEvent(e,"dblclick",Calendar.dayMouseDblClick),e.setAttribute("unselectable",!0))},Calendar.findMonth=function(e){return"undefined"!=typeof e.month?e:"undefined"!=typeof e.parentNode.month?e.parentNode:null},Calendar.findYear=function(e){return"undefined"!=typeof e.year?e:"undefined"!=typeof e.parentNode.year?e.parentNode:null},Calendar.showMonthsCombo=function(){var e=Calendar._C;if(!e)return!1;var e=e,t=e.activeDiv,a=e.monthsCombo;e.hilitedMonth&&Calendar.removeClass(e.hilitedMonth,"hilite"),e.activeMonth&&Calendar.removeClass(e.activeMonth,"active");var n=e.monthsCombo.getElementsByTagName("div")[e.date.getMonth()];Calendar.addClass(n,"active"),e.activeMonth=n;var r=a.style;if(r.display="block",t.navtype<0)r.left=t.offsetLeft+"px";else{var l=a.offsetWidth;"undefined"==typeof l&&(l=50),r.left=t.offsetLeft+t.offsetWidth-l+"px"}r.top=t.offsetTop+t.offsetHeight+"px"},Calendar.showYearsCombo=function(e){var t=Calendar._C;if(!t)return!1;var t=t,a=t.activeDiv,n=t.yearsCombo;t.hilitedYear&&Calendar.removeClass(t.hilitedYear,"hilite"),t.activeYear&&Calendar.removeClass(t.activeYear,"active"),t.activeYear=null;for(var r=t.date.getFullYear()+(e?1:-1),l=n.firstChild,i=!1,s=12;s>0;--s)r>=t.minYear&&r<=t.maxYear?(l.innerHTML=r,l.year=r,l.style.display="block",i=!0):l.style.display="none",l=l.nextSibling,r+=e?t.yearStep:-t.yearStep;if(i){var d=n.style;if(d.display="block",a.navtype<0)d.left=a.offsetLeft+"px";else{var o=n.offsetWidth;"undefined"==typeof o&&(o=50),d.left=a.offsetLeft+a.offsetWidth-o+"px"}d.top=a.offsetTop+a.offsetHeight+"px"}},Calendar.tableMouseUp=function(e){var t=Calendar._C;if(!t)return!1;t.timeout&&clearTimeout(t.timeout);var a=t.activeDiv;if(!a)return!1;var n=Calendar.getTargetElement(e);e||(e=window.event),Calendar.removeClass(a,"active"),n!=a&&n.parentNode!=a||Calendar.cellClick(a,e);var r=Calendar.findMonth(n),l=null;if(r)l=new Date(t.date),r.month!=l.getMonth()&&(l.setMonth(r.month),t.setDate(l),t.dateClicked=!1,t.callHandler());else{var i=Calendar.findYear(n);i&&(l=new Date(t.date),i.year!=l.getFullYear()&&(Calendar.setFullYearAndFixFebruary(l,i.year),t.setDate(l),t.dateClicked=!1,t.callHandler()))}return Calendar.removeEvent(document,"mouseup",Calendar.tableMouseUp),Calendar.removeEvent(document,"mouseover",Calendar.tableMouseOver),Calendar.removeEvent(document,"mousemove",Calendar.tableMouseOver),t._hideCombos(),Calendar._C=null,Calendar.stopEvent(e)},Calendar.tableMouseOver=function(e){var t=Calendar._C;if(t){var a=t.activeDiv,n=Calendar.getTargetElement(e);if(n==a||n.parentNode==a?(Calendar.addClass(a,"hilite active"),Calendar.addClass(a.parentNode,"rowhilite")):(("undefined"==typeof a.navtype||50!=a.navtype&&(0==a.navtype||Math.abs(a.navtype)>2))&&Calendar.removeClass(a,"active"),Calendar.removeClass(a,"hilite"),Calendar.removeClass(a.parentNode,"rowhilite")),e||(e=window.event),50==a.navtype&&n!=a){var r,l=Calendar.getAbsolutePos(a),i=a.offsetWidth,s=e.clientX,d=!0;s>l.x+i?(r=s-l.x-i,d=!1):r=l.x-s,r<0&&(r=0);for(var o=a._range,u=a._current,h=Math.floor(r/10)%o.length,C=o.length;--C>=0&&o[C]!=u;);for(;h-- >0;)d?--C<0&&(C=o.length-1):++C>=o.length&&(C=0);var c=o[C];a.innerHTML=c,t.onUpdateTime()}var m=Calendar.findMonth(n);if(m)m.month!=t.date.getMonth()?(t.hilitedMonth&&Calendar.removeClass(t.hilitedMonth,"hilite"),Calendar.addClass(m,"hilite"),t.hilitedMonth=m):t.hilitedMonth&&Calendar.removeClass(t.hilitedMonth,"hilite");else{t.hilitedMonth&&Calendar.removeClass(t.hilitedMonth,"hilite");var p=Calendar.findYear(n);p&&p.year!=t.date.getFullYear()?(t.hilitedYear&&Calendar.removeClass(t.hilitedYear,"hilite"),Calendar.addClass(p,"hilite"),t.hilitedYear=p):t.hilitedYear&&Calendar.removeClass(t.hilitedYear,"hilite")}return Calendar.stopEvent(e)}},Calendar.tableMouseDown=function(e){if(Calendar.getTargetElement(e)==Calendar.getElement(e))return Calendar.stopEvent(e)},Calendar.calDragIt=function(e){var t=Calendar._C;if(!t||!t.dragging)return!1;var a,n;Calendar.is_ie?(n=window.event.clientY+document.body.scrollTop,a=window.event.clientX+document.body.scrollLeft):(a=e.pageX,n=e.pageY);var r=t.element.style;return r.left=a-t.xOffs+"px",r.top=n-t.yOffs+"px",Calendar.stopEvent(e)},Calendar.calDragEnd=function(e){var t=Calendar._C;return!!t&&(t.dragging=!1,Calendar.removeEvent(document,"mousemove",Calendar.calDragIt),Calendar.removeEvent(document,"mouseup",Calendar.calDragEnd),void Calendar.tableMouseUp(e))},Calendar.dayMouseDown=function(e){var t=Calendar.getElement(e);if(t.disabled)return!1;var a=t.calendar;return a.activeDiv=t,Calendar._C=a,300!=t.navtype?(50==t.navtype?(t._current=t.innerHTML,Calendar.addEvent(document,"mousemove",Calendar.tableMouseOver)):Calendar.addEvent(document,Calendar.is_ie5?"mousemove":"mouseover",Calendar.tableMouseOver),Calendar.addClass(t,"hilite active"),Calendar.addEvent(document,"mouseup",Calendar.tableMouseUp)):a.isPopup&&a._dragStart(e),t.navtype==-1||1==t.navtype?(a.timeout&&clearTimeout(a.timeout),a.timeout=setTimeout("Calendar.showMonthsCombo()",250)):t.navtype==-2||2==t.navtype?(a.timeout&&clearTimeout(a.timeout),a.timeout=setTimeout(t.navtype>0?"Calendar.showYearsCombo(true)":"Calendar.showYearsCombo(false)",250)):a.timeout=null,Calendar.stopEvent(e)},Calendar.dayMouseDblClick=function(e){Calendar.cellClick(Calendar.getElement(e),e||window.event),Calendar.is_ie&&document.selection.empty()},Calendar.dayMouseOver=function(e){var t=Calendar.getElement(e);return!(Calendar.isRelated(t,e)||Calendar._C||t.disabled)&&(t.ttip&&("_"==t.ttip.substr(0,1)&&(t.ttip=t.caldate.print(t.calendar.ttDateFormat)+t.ttip.substr(1)),t.calendar.tooltips.innerHTML=t.ttip),300!=t.navtype&&(Calendar.addClass(t,"hilite"),t.caldate&&Calendar.addClass(t.parentNode,"rowhilite")),Calendar.stopEvent(e))},Calendar.dayMouseOut=function(e){var t=Calendar.getElement(e);return!(Calendar.isRelated(t,e)||Calendar._C||t.disabled)&&(Calendar.removeClass(t,"hilite"),t.caldate&&Calendar.removeClass(t.parentNode,"rowhilite"),t.calendar&&(t.calendar.tooltips.innerHTML=Calendar._TT.SEL_DATE),Calendar.stopEvent(e))},Calendar.cellClick=function(e,t){function a(e){var t=i.getDate(),a=i.getMonthDays(e);t>a&&i.setDate(a),i.setMonth(e)}var n=e.calendar,r=!1,l=!1,i=null;if("undefined"==typeof e.navtype){n.currentDateEl&&(Calendar.removeClass(n.currentDateEl,"selected"),Calendar.addClass(e,"selected"),r=n.currentDateEl==e,r||(n.currentDateEl=e)),n.date.setDateOnly(e.caldate),i=n.date;var s=!(n.dateClicked=!e.otherMonth);s||n.currentDateEl?l=!e.disabled:n._toggleMultipleDate(new Date(i)),s&&n._init(n.firstDayOfWeek,i)}else{if(200==e.navtype)return Calendar.removeClass(e,"hilite"),void n.callCloseHandler();i=new Date(n.date),0==e.navtype&&(n.todayDateStr?i=new Date(n.todayDateStr):i.setDateOnly(new Date)),n.dateClicked=!1;var d=i.getFullYear(),o=i.getMonth();switch(e.navtype){case 400:Calendar.removeClass(e,"hilite");var u=Calendar._TT.ABOUT;return"undefined"!=typeof u?u+=n.showsTime?Calendar._TT.ABOUT_TIME:"":u='Help and about box text is not translated into this language.\nIf you know this language and you feel generous please update\nthe corresponding file in "lang" subdir to match calendar-en.js\nand send it back to <mihai_bazon@yahoo.com> to get it into the distribution  ;-)\n\nThank you!\nhttp://dynarch.com/mishoo/calendar.epl\n',void alert(u);case-2:d>n.minYear&&Calendar.setFullYearAndFixFebruary(i,d-1);break;case-1:o>0?a(o-1):d-- >n.minYear&&(i.setFullYear(d),a(11));break;case 1:o<11?a(o+1):d<n.maxYear&&(i.setFullYear(d+1),a(0));break;case 2:d<n.maxYear&&Calendar.setFullYearAndFixFebruary(i,d+1);break;case 100:return void n.setFirstDayOfWeek(e.fdow);case 50:for(var h=e._range,C=e.innerHTML,c=h.length;--c>=0&&h[c]!=C;);t&&t.shiftKey?--c<0&&(c=h.length-1):++c>=h.length&&(c=0);var m=h[c];return e.innerHTML=m,void n.onUpdateTime();case 0:if("function"==typeof n.getDateStatus&&n.getDateStatus(i,i.getFullYear(),i.getMonth(),i.getDate()))return!1}i.equalsTo(n.date)?0==e.navtype&&(l=r=!0):(n.setDate(i),l=!0)}l&&t&&n.callHandler(),r&&(Calendar.removeClass(e,"hilite"),t&&n.callCloseHandler())},Calendar.prototype.create=function(e){var t=null;e?(t=e,this.isPopup=!1):(t=document.getElementsByTagName("body")[0],this.isPopup=!0),this.dateStr&&(this.date=new Date(this.dateStr)),this.date&&!isNaN(this.date)||(this.date=new Date);var a=Calendar.createElement("table");this.table=a,a.cellSpacing=0,a.cellPadding=0,a.calendar=this,Calendar.addEvent(a,"mousedown",Calendar.tableMouseDown);var n=Calendar.createElement("div");this.element=n,n.className="calendar",this.isPopup&&(n.style.position="absolute",n.style.display="none"),n.appendChild(a);var r=Calendar.createElement("thead",a),l=null,i=null,s=this,d=function(e,t,a){return l=Calendar.createElement("td",i),l.colSpan=t,l.className="button",0!=a&&Math.abs(a)<=2&&(l.className+=" nav"),Calendar._add_evs(l),l.calendar=s,l.navtype=a,l.innerHTML="<div unselectable='on'>"+e+"</div>",l};i=Calendar.createElement("tr",r);var o=6;this.isPopup&&--o,this.weekNumbers&&++o,d("?",1,400).ttip=Calendar._TT.INFO,this.title=d("",o,300),this.title.className="title",this.isPopup&&(this.title.ttip=Calendar._TT.DRAG_TO_MOVE,this.title.style.cursor="move",d("&#x00d7;",1,200).ttip=Calendar._TT.CLOSE),i=Calendar.createElement("tr",r),i.className="headrow",this._nav_py=d("&#x00ab;",1,-2),this._nav_py.ttip=Calendar._TT.PREV_YEAR,this._nav_pm=d("&#x2039;",1,-1),this._nav_pm.ttip=Calendar._TT.PREV_MONTH,this._nav_now=d(Calendar._TT.TODAY,this.weekNumbers?4:3,0),this._nav_now.ttip=Calendar._TT.GO_TODAY,this._nav_nm=d("&#x203a;",1,1),this._nav_nm.ttip=Calendar._TT.NEXT_MONTH,this._nav_ny=d("&#x00bb;",1,2),this._nav_ny.ttip=Calendar._TT.NEXT_YEAR,i=Calendar.createElement("tr",r),i.className="daynames",this.weekNumbers&&(l=Calendar.createElement("td",i),l.className="name wn",l.innerHTML=Calendar._TT.WK);for(var u=7;u>0;--u)l=Calendar.createElement("td",i),u||(l.navtype=100,l.calendar=this,Calendar._add_evs(l));this.firstdayname=this.weekNumbers?i.firstChild.nextSibling:i.firstChild,this._displayWeekdays();var h=Calendar.createElement("tbody",a);for(this.tbody=h,u=6;u>0;--u){i=Calendar.createElement("tr",h),this.weekNumbers&&(l=Calendar.createElement("td",i));for(var C=7;C>0;--C)l=Calendar.createElement("td",i),l.calendar=this,Calendar._add_evs(l)}this.showsTime?(i=Calendar.createElement("tr",h),i.className="time",l=Calendar.createElement("td",i),l.className="time",l.colSpan=2,l.innerHTML=Calendar._TT.TIME||"&nbsp;",l=Calendar.createElement("td",i),l.className="time",l.colSpan=this.weekNumbers?4:3,function(){function e(e,t,a,n){var r=Calendar.createElement("span",l);if(r.className=e,r.innerHTML=t,r.calendar=s,r.ttip=Calendar._TT.TIME_PART,r.navtype=50,r._range=[],"number"!=typeof a)r._range=a;else for(var i=a;i<=n;++i){var d;d=i<10&&n>=10?"0"+i:""+i,r._range[r._range.length]=d}return Calendar._add_evs(r),r}var t=s.date.getHours(),a=s.date.getMinutes(),n=!s.time24,r=t>12;n&&r&&(t-=12);var d=e("hour",t,n?1:0,n?12:23),o=Calendar.createElement("span",l);o.innerHTML=":",o.className="colon";var u=e("minute",a,0,59),h=null;l=Calendar.createElement("td",i),l.className="time",l.colSpan=2,n?h=e("ampm",r?Calendar._TT.PM:Calendar._TT.AM,[Calendar._TT.am,Calendar._TT.pm]):l.innerHTML="&nbsp;",s.onSetTime=function(){var e,t=this.date.getHours(),a=this.date.getMinutes();n&&(e=t>=12,e&&(t-=12),0==t&&(t=12),h.innerHTML=e?Calendar._TT.pm:Calendar._TT.am),d.innerHTML=t<10?"0"+t:t,u.innerHTML=a<10?"0"+a:a},s.onUpdateTime=function(){var e=this.date,t=parseInt(d.innerHTML,10);n&&(new RegExp(Calendar._TT.pm,"i").test(h.innerHTML)&&t<12?t+=12:new RegExp(Calendar._TT.am,"i").test(h.innerHTML)&&12==t&&(t=0));var a=e.getDate(),r=e.getMonth(),l=e.getFullYear();e.setHours(t),e.setMinutes(parseInt(u.innerHTML,10)),e.setFullYear(l),e.setMonth(r),e.setDate(a),this.dateClicked=!1,this.callHandler()}}()):this.onSetTime=this.onUpdateTime=function(){};var c=Calendar.createElement("tfoot",a);for(i=Calendar.createElement("tr",c),i.className="footrow",l=d(Calendar._TT.SEL_DATE,this.weekNumbers?8:7,300),l.className="ttip",this.isPopup&&(l.ttip=Calendar._TT.DRAG_TO_MOVE,l.style.cursor="move"),this.tooltips=l,n=Calendar.createElement("div",this.element),this.monthsCombo=n,n.className="combo",u=0;u<Calendar._MN.length;++u){var m=Calendar.createElement("div");m.className=Calendar.is_ie?"label-IEfix":"label",m.month=u,m.innerHTML=Calendar._SMN[u],n.appendChild(m)}for(n=Calendar.createElement("div",this.element),this.yearsCombo=n,n.className="combo",u=12;u>0;--u){var p=Calendar.createElement("div");p.className=Calendar.is_ie?"label-IEfix":"label",n.appendChild(p)}this._init(this.firstDayOfWeek,this.date),t.appendChild(this.element),Calendar.addEvent(this.element,"mousedown",function(e){e.preventDefault?e.preventDefault():e.returnValue=!1})},Calendar._upkeyEvent=function(e){27===e.keyCode&&window.setTimeout(function(){var e=window._dynarch_popupCalendar;return!(!e||e.multiple)&&void e.callCloseHandler()},0)},Calendar._keyEvent=function(e){function t(){h=r.currentDateEl;var e=h.pos;d=15&e,o=e>>4,u=r.ar_days[o][d]}function a(){var e=new Date(r.date);e.setDate(e.getDate()-C),r.setDate(e)}function n(){var e=new Date(r.date);e.setDate(e.getDate()+C),r.setDate(e)}var r=window._dynarch_popupCalendar;if(!r||r.multiple)return!1;var l=Calendar.is_ie||"keydown"==e.type,i=e.keyCode;if(e.ctrlKey)switch(i){case 37:l&&Calendar.cellClick(r._nav_pm);break;case 38:l&&Calendar.cellClick(r._nav_py);break;case 39:l&&Calendar.cellClick(r._nav_nm);break;case 40:l&&Calendar.cellClick(r._nav_ny)}else switch(i){case 32:Calendar.cellClick(r._nav_now);break;case 37:case 38:case 39:case 40:if(l){var s,d,o,u,h,C;for(s=37==i||38==i,C=37==i||39==i?1:7,t();;){switch(i){case 37:if(!(--d>=0)){d=6,i=38;continue}u=r.ar_days[o][d];break;case 38:--o>=0?u=r.ar_days[o][d]:(a(),t());break;case 39:if(!(++d<7)){d=0,i=40;continue}u=r.ar_days[o][d];break;case 40:++o<r.ar_days.length?u=r.ar_days[o][d]:(n(),t())}break}u&&(u.disabled?s?a():n():Calendar.cellClick(u))}break;case 13:l&&Calendar.cellClick(r.currentDateEl,e)}return Calendar.stopEvent(e)},Calendar.prototype._init=function(e,t){var a=new Date(t);a.setHours(13);var n=new Date,r=n.getFullYear(),l=n.getMonth(),i=n.getDate();this.table.style.visibility="hidden";var s=a.getFullYear();s<this.minYear?(s=this.minYear,a.setFullYear(s)):s>this.maxYear&&(s=this.maxYear,a.setFullYear(s)),this.firstDayOfWeek=e;var d=a.getMonth(),o=a.getDate();a.getMonthDays();a.setDate(1);var u=(a.getDay()-this.firstDayOfWeek)%7;u<0&&(u+=7),a.setDate(-u),a.setDate(a.getDate()+1);for(var h=this.tbody.firstChild,C=(Calendar._SMN[d],this.ar_days=new Array),c=Calendar._TT.WEEKEND,m=this.multiple?this.datesCells={}:null,p=0;p<6;++p,h=h.nextSibling){var v=h.firstChild;if(this.weekNumbers){v.className="day wn";var f=a;0==d&&0==p&&0==Date.useISO8601WeekNumbers&&(f=new Date(s,d,1)),v.innerHTML=f.getWeekNumber(this.firstDayOfWeek),v=v.nextSibling}h.className="daysrow";for(var y,g=!1,_=C[p]=[],D=0;D<7;++D,v=v.nextSibling,a.setDate(y+1)){y=a.getDate();var b=a.getDay();v.className="day day-"+y,v.pos=p<<4|D,_[D]=v;var T=a.getMonth()==d;if(T)v.otherMonth=!1,g=!0;else{if(!this.showsOtherMonths){v.className="emptycell",v.innerHTML="&nbsp;",v.disabled=!0;continue}v.className+=" othermonth",v.otherMonth=!0}if(v.disabled=!1,v.innerHTML=this.getDateText?this.getDateText(a,y):y,m&&(m[a.print("%Y%m%d")]=v),this.getDateStatus){var w=this.getDateStatus(a,s,d,y);if(this.getDateToolTip){var M=this.getDateToolTip(a,s,d,y);M&&(v.title=M)}w===!0?(v.className+=" disabled",v.disabled=!0):(/disabled/i.test(w)&&(v.disabled=!0),v.className+=" "+w)}v.disabled||(v.caldate=new Date(a),v.ttip="_",!this.multiple&&T&&y==o&&this.hiliteToday&&(v.className+=" selected",this.currentDateEl=v),a.getFullYear()==r&&a.getMonth()==l&&y==i&&(v.className+=" today",v.ttip+=Calendar._TT.PART_TODAY),c.indexOf(b.toString())!=-1&&(v.className+=v.otherMonth?" oweekend":" weekend"))}g||this.showsOtherMonths||(h.className="emptyrow")}this.date=new Date(t),this.onSetTime(),this.title.innerHTML=Calendar._MN[d]+", "+s,this.table.style.visibility="visible",this._initMultipleDates()},Calendar.prototype._initMultipleDates=function(){if(this.multiple)for(var e in this.multiple){var t=this.datesCells[e],a=this.multiple[e];a&&t&&(t.className+=" selected")}},Calendar.prototype._toggleMultipleDate=function(e){if(this.multiple){var t=e.print("%Y%m%d"),a=this.datesCells[t];if(a){var n=this.multiple[t];n?(Calendar.removeClass(a,"selected"),delete this.multiple[t]):(Calendar.addClass(a,"selected"),this.multiple[t]=e)}}},Calendar.prototype.setDateToolTipHandler=function(e){this.getDateToolTip=e},Calendar.prototype.setDate=function(e){e.equalsTo(this.date)||this._init(this.firstDayOfWeek,e)},Calendar.prototype.refresh=function(){this._init(this.firstDayOfWeek,this.date)},Calendar.prototype.setFirstDayOfWeek=function(e){this._init(e,this.date),this._displayWeekdays()},Calendar.prototype.setDateStatusHandler=Calendar.prototype.setDisabledHandler=function(e){this.getDateStatus=e},Calendar.prototype.setRange=function(e,t){this.minYear=e,this.maxYear=t},Calendar.prototype.callHandler=function(){this.onSelected&&this.onSelected(this,this.date.print(this.dateFormat))},Calendar.prototype.callCloseHandler=function(){this.onClose&&this.onClose(this)},Calendar.prototype.destroy=function(){var e=this.element.parentNode;e.removeChild(this.element),Calendar._C=null,window._dynarch_popupCalendar=null},Calendar.prototype.reparent=function(e){var t=this.element;t.parentNode.removeChild(t),e.appendChild(t)},Calendar._checkCalendar=function(e){var t=window._dynarch_popupCalendar;if(!t)return!1;for(var a=Calendar.is_ie?Calendar.getElement(e):Calendar.getTargetElement(e);null!=a&&a!=t.element;a=a.parentNode);return null==a?(window._dynarch_popupCalendar.callCloseHandler(),Calendar.stopEvent(e)):void 0},Calendar.prototype.show=function(){if(!this.params.inputField.disabled){for(var e=this.table.getElementsByTagName("tr"),t=e.length;t>0;){var a=e[--t];Calendar.removeClass(a,"rowhilite");for(var n=a.getElementsByTagName("td"),r=n.length;r>0;){var l=n[--r];Calendar.removeClass(l,"hilite"),Calendar.removeClass(l,"active")}}Calendar.current=this,this.element.style.display="block",this.element.className+=" active",this.hidden=!1,this.isPopup&&(window._dynarch_popupCalendar=this,Calendar.addEvent(document,"keyup",Calendar._upkeyEvent),Calendar.addEvent(document,"keydown",Calendar._keyEvent),Calendar.addEvent(document,"mousedown",Calendar._checkCalendar))}},Calendar.prototype.hide=function(){this.isPopup&&(Calendar.removeEvent(document,"keyup",Calendar._upkeyEvent),Calendar.removeEvent(document,"keydown",Calendar._keyEvent),Calendar.removeEvent(document,"mousedown",Calendar._checkCalendar)),Calendar.current=null,this.element.style.display="none",this.element.className=this.element.className.replace(/active/gi,""),this.hidden=!0},Calendar.prototype.showAt=function(e,t){var a=this.element.style;a.left=e+"px",a.top=t+"px",this.show()},Calendar.prototype.showAtElement=function(e,t){function a(e){e.x<0&&(e.x=0),e.y<0&&(e.y=0);var t=document.createElement("div"),a=t.style;a.position="absolute",a.right=a.bottom=a.width=a.height="0px",document.body.appendChild(t);var n=Calendar.getAbsolutePos(t);document.body.removeChild(t),n.y+=jQuery(window).scrollTop(),n.x+=jQuery(window).scrollLeft();var r=e.x+e.width-n.x;r>0&&(e.x-=r),r=e.y+e.height-n.y,r>0&&(e.y-=r)}var n=this,r=Calendar.getAbsolutePos(e);return t&&"string"==typeof t?(this.element.style.display="block",Calendar.continuation_for_the_khtml_browser=function(){var l=jQuery(n.element).outerWidth(),i=jQuery(n.element).outerHeight();n.element.style.display="none";var s=t.substr(0,1),d="l";switch(t.length>1&&(d=t.substr(1,1)),s){case"T":r.y-=i;break;case"B":r.y+=jQuery(e).outerHeight();break;case"C":r.y+=(jQuery(e).outerHeight()-i)/2;break;case"t":r.y+=jQuery(e).outerHeight()-i;break;case"b":}switch(d){case"L":r.x-=l;break;case"R":r.x+=jQuery(e).outerWidth();break;case"C":r.x+=(jQuery(e).outerWidth()-l)/2;break;case"l":r.x+=jQuery(e).outerWidth()-l;break;case"r":}r.width=l,r.height=i+40,n.monthsCombo.style.display="none",a(r),n.showAt(r.x,r.y)},void Calendar.continuation_for_the_khtml_browser()):(this.showAt(r.x,r.y+e.offsetHeight),!0)},Calendar.prototype.setDateFormat=function(e){this.dateFormat=e},Calendar.prototype.setTtDateFormat=function(e){this.ttDateFormat=e},Calendar.prototype.parseDate=function(e,t){t||(t=this.dateFormat),this.setDate(Date.parseDate(e,t))},Calendar.prototype._displayWeekdays=function(){for(var e=this.firstDayOfWeek,t=this.firstdayname,a=Calendar._TT.WEEKEND,n=0;n<7;++n){t.className="day name";var r=(n+e)%7;n&&(t.ttip=Calendar._TT.DAY_FIRST.replace("%s",Calendar._DN[r]),t.navtype=100,t.calendar=this,t.fdow=r,Calendar._add_evs(t)),a.indexOf(r.toString())!=-1&&Calendar.addClass(t,"weekend"),t.innerHTML=Calendar._SDN[(n+e)%7],t=t.nextSibling}},Calendar.prototype._hideCombos=function(){this.monthsCombo.style.display="none",this.yearsCombo.style.display="none"},Calendar.prototype._dragStart=function(e){if(!this.dragging){this.dragging=!0;var t,a;Calendar.is_ie?(a=window.event.clientY+document.body.scrollTop,t=window.event.clientX+document.body.scrollLeft):(a=e.clientY+window.scrollY,t=e.clientX+window.scrollX);var n=this.element.style;this.xOffs=t-parseInt(n.left),this.yOffs=a-parseInt(n.top),Calendar.addEvent(document,"mousemove",Calendar.calDragIt),Calendar.addEvent(document,"mouseup",Calendar.calDragEnd)}},Date._MD=new Array(31,28,31,30,31,30,31,31,30,31,30,31),Date.SECOND=1e3,Date.MINUTE=60*Date.SECOND,Date.HOUR=60*Date.MINUTE,Date.DAY=24*Date.HOUR,Date.WEEK=7*Date.DAY,Date._multisplit=function(e,t){if(null==e)return null;null==t&&(t="");var a=[],n=e.length,r="",l=!1;for(i=0;i<n;i++){var s=e.charAt(i);t.indexOf(s)==-1?(l=!0,r+=s):l&&(a[a.length]=r,r="",l=!1)}return r.length>0&&(a[a.length]=r),0==a.length&&(a[a.length]=""),a},Date._parseNonDateFormatChars=function(e){var t="aAbBCdeHIJklmMnpPRSstUWVuwyY%",a="",n=e.length;for(i=0;i<n;i++){var r=e.charAt(i);if("%"==r){var l="";if(i+1<n&&(l=e.charAt(i+1)),i+=1,l.length>0&&t.indexOf(l)!=-1)continue;a.indexOf(r)==-1&&(a+=r),l.length>0&&a.indexOf(l)==-1&&(a+=l)}else a.indexOf(r)==-1&&(a+=r)}return a},Date.splitDate=function(e,t){var a=0,n=-1,r=0,l=Date._parseNonDateFormatChars(t),i=Date._multisplit(e,l),s=t.match(/%./g),d=0,o=0,u=0,h=0;for(d=0;d<i.length;++d)if(i[d])switch(s[d]){case"%d":case"%e":r=Number(i[d]);break;case"%m":n=Number(i[d])-1;break;case"%Y":case"%y":a=Number(i[d]),a<100&&(a+=a>29?1900:2e3);break;case"%b":case"%B":var C=i[d].toLowerCase(),c=!1;if("%b"==s[d])for(o=0;o<12;++o)if(Calendar._SMN[o].substr(0,C.length).toLowerCase()==C){n=o,c=!0;break}if(!c)for(o=0;o<12;++o)if(Calendar._MN[o].substr(0,C.length).toLowerCase()==C){n=o;break}break;case"%H":case"%I":case"%k":case"%l":u=Number(i[d]);break;case"%P":case"%p":/pm/i.test(i[d])&&u<12?u+=12:/am/i.test(i[d])&&u>=12&&(u-=12);break;case"%M":h=Number(i[d]);break;case"%R":var m=i[d],p=m.indexOf(":"),v=m.substring(0,p),f=p==-1?0:m.substring(p+1);u=Number(v),h=Number(f)}return{parts:i,year:a,month:n,day:r,hour:u,minute:h}},Date.parseDate=function(e,t){var a=new Date,n=Date.splitDate(e,t),r=n.parts,l=n.year,i=n.month,s=n.day,d=n.hour,o=n.minute,u=0,h=0;if(isNaN(l)&&(l=a.getFullYear()),isNaN(i)&&(i=a.getMonth()),isNaN(s)&&(s=a.getDate()),isNaN(d)&&(d=a.getHours()),isNaN(o)&&(o=a.getMinutes()),0!=l&&i!=-1&&0!=s)return new Date(l,i,s,d,o,0);for(l=0,i=-1,s=0,u=0;u<r.length;++u)if(r[u].search(/[a-zA-Z]+/)!=-1){var C=-1;for(h=0;h<12;++h)if(Calendar._MN[h].substr(0,r[u].length).toLowerCase()==r[u].toLowerCase()){C=h;break}C!=-1&&(i!=-1&&(s=i+1),i=C)}else Number(r[u])<=12&&i==-1?i=r[u]-1:Number(r[u])>31&&0==l?(l=Number(r[u]),l<100&&(l+=l>29?1900:2e3)):0==s&&(s=r[u]);return 0==l&&(l=a.getFullYear()),i!=-1&&0!=s?new Date(l,i,s,d,o,0):a},Date.prototype.getMonthDays=function(e){var t=this.getFullYear();return"undefined"==typeof e&&(e=this.getMonth()),0!=t%4||0==t%100&&0!=t%400||1!=e?Date._MD[e]:29},Date.prototype.getDayOfYear=function(){var e=new Date(this.getFullYear(),this.getMonth(),this.getDate(),13,0,0),t=new Date(this.getFullYear(),0,0,13,0,0),a=e-t;return Math.floor(a/Date.DAY)},Date.prototype.getWeekNumber=function(e){return Date.useISO8601WeekNumbers?this.getISO8601WeekNumber():this.getSimpleWeekNumber(e)},Date.prototype.getISO8601WeekNumber=function(){function e(e,t,a){return y=e,m=t,t<3&&(y-=1),t<3&&(m+=12),Math.floor(365.25*y)-Math.floor(y/100)+Math.floor(y/400)+Math.floor(30.6*(m+1))+a-62}function t(t){return year=t.getFullYear(),month=t.getMonth(),day=t.getDate(),wday=t.getDay(),weekday=(wday+6)%7+1,isoyear=year,d0=e(year,1,0),weekday0=(d0+4)%7+1,d=e(year,month+1,day),isoweeknr=Math.floor((d-d0+weekday0+6)/7)-Math.floor((weekday0+3)/7),11==month&&day-weekday>27&&(isoweeknr=1,isoyear+=1),0==month&&weekday-day>3&&(d0=e(year-1,1,0),weekday0=(d0+4)%7+1,isoweeknr=Math.floor((d-d0+weekday0+6)/7)-Math.floor((weekday0+3)/7),isoyear-=1),isoweeknr}return t(this)},Date.prototype.getSimpleWeekNumber=function(e){function t(e,t,a){var n,r=e.getFullYear(),l=new Date(r,0,1);return n=Math.round((e-l)/864e5),null!=t&&(n-=(7+t-l.getDay())%7),null!=a&&(n+=a),[r,1+n/7|0,1+(7+n)%7]}return t(this,e?e:6,6)[1]},Date.prototype.equalsTo=function(e){return this.getFullYear()==e.getFullYear()&&this.getMonth()==e.getMonth()&&this.getDate()==e.getDate()&&this.getHours()==e.getHours()&&this.getMinutes()==e.getMinutes()},Date.prototype.setDateOnly=function(e){var t=new Date(e);this.setDate(1),this.setFullYear(t.getFullYear()),this.setMonth(t.getMonth()),this.setDate(t.getDate())},Date.prototype.print=function(e){var t=this.getMonth(),a=this.getDate(),n=this.getFullYear(),r=this.getWeekNumber(),l=this.getDay(),i={},s=this.getHours(),d=s>=12,o=d?s-12:s,u=this.getDayOfYear();0==o&&(o=12);var h=this.getMinutes(),C=this.getSeconds();i["%a"]=Calendar._SDN[l],i["%A"]=Calendar._DN[l],i["%b"]=Calendar._SMN[t],i["%B"]=Calendar._MN[t],i["%C"]=1+Math.floor(n/100),i["%d"]=a<10?"0"+a:a,i["%e"]=a,i["%H"]=s<10?"0"+s:s,i["%I"]=o<10?"0"+o:o,i["%j"]=u<100?u<10?"00"+u:"0"+u:u,i["%k"]=s,i["%l"]=o,i["%m"]=t<9?"0"+(1+t):1+t,i["%M"]=h<10?"0"+h:h,i["%n"]="\n",i["%p"]=d?Calendar._TT.PM:Calendar._TT.AM,i["%P"]=d?Calendar._TT.PM:Calendar._TT.AM,i["%R"]=i["%k"]+":"+i["%M"],i["%s"]=Math.floor(this.getTime()/1e3),i["%S"]=C<10?"0"+C:C,i["%t"]="\t",i["%U"]=i["%W"]=i["%V"]=r<10?"0"+r:r,i["%u"]=l+1,i["%w"]=l,i["%y"]=(""+n).slice(-2),i["%Y"]=n,i["%%"]="%";var c=/%./g;if(!Calendar.is_ie5&&!Calendar.is_khtml)return e.replace(c,function(e){return i[e]||e});for(var m=e.match(c),p=0;p<m.length;p++){var v=i[m[p]];v&&(c=new RegExp(m[p],"g"),e=e.replace(c,v))}return e},window._dynarch_popupCalendar=null;;
;
/* module-key = 'jira.webresources:calendar', location = '/includes/lib/calendar/Calendar.setup.js' */
Calendar.setup=function(e){function t(t,a){"undefined"==typeof e[t]&&(e[t]=a)}function a(e){var t=e.params,a=e.dateClicked||t.electric;a&&t.inputField&&(t.inputField.value=e.date.print(t.ifFormat),jQuery(t.inputField).change()),a&&t.displayArea&&(t.displayArea.innerHTML=e.date.print(t.daFormat)),a&&"function"==typeof t.onUpdate&&t.onUpdate(e),a&&t.flat&&"function"==typeof t.flatCallback&&t.flatCallback(e),"true"===t.singleClick?t.singleClick=!0:"false"===t.singleClick&&(t.singleClick=!1),a&&t.singleClick&&e.dateClicked&&e.callCloseHandler()}function n(){if(Calendar._UNSUPPORTED===!0)return void alert("The JIRA Calendar does not currently support your language.");var t=e.inputField||e.displayArea,n=e.inputField?e.ifFormat:e.daFormat,l=!1,i=window.calendar;if(i&&i.hide(),t&&(t.value||t.innerHTML)&&(e.date=Date.parseDate(t.value||t.innerHTML,n)),i&&e.cache?(e.date&&i.setDate(e.date),i.hide()):(window.calendar=i=new Calendar(e.firstDay,e.date,e.todayDate,e.onSelect||a,e.onClose||function(e){e.hide()}),i.showsTime=e.showsTime,i.time24="24"==e.timeFormat,i.weekNumbers=e.weekNumbers,Date.useISO8601WeekNumbers=e.useISO8601WeekNumbers,e.useISO8601WeekNumbers&&(i.firstDayOfWeek=1),l=!0),e.multiple){i.multiple={};for(var r=e.multiple.length;--r>=0;){var u=e.multiple[r],s=u.print("%Y%m%d");i.multiple[s]=u}}return i.showsOtherMonths=e.showOthers,i.yearStep=e.step,i.setRange(e.range[0],e.range[1]),i.params=e,i.setDateStatusHandler(e.dateStatusFunc),i.getDateText=e.dateText,i.setDateFormat(n),l&&i.create(),i.refresh(),e.position?i.showAt(e.position[0],e.position[1]):i.showAtElement(e.button||e.displayArea||e.inputField,e.align),!1}function l(){var t=jQuery(e.inputField);e.button&&jQuery(e.button).mousedown(function(e){e.preventDefault(),!t.is(":focus")&&t.is(":enabled")&&t.focus()}),t.keydown(function(e){var t=window.calendar;40===e.keyCode&&(t&&!t.hidden||setTimeout(function(){n()},1))})}e=e||{},t("inputField",null),t("context",null),t("displayArea",null),t("button",null),t("eventName","click"),t("ifFormat","%Y/%m/%d"),t("daFormat","%Y/%m/%d"),t("singleClick",!0),t("disableFunc",null),t("dateStatusFunc",e.disableFunc),t("dateText",null),t("firstDay",null),t("align","Br"),t("range",[1900,2999]),t("weekNumbers",!0),t("useISO8601WeekNumbers",!1),t("flat",null),t("flatCallback",null),t("onSelect",null),t("onClose",null),t("onUpdate",null),t("date",null),t("todayDate",null),t("showsTime",!1),t("timeFormat","24"),t("electric",!0),t("step",1),t("position",null),t("cache",!1),t("showOthers",!1),t("multiple",null);var i,r,u=["context","inputField","button","displayArea"];for(i in u)r=u[i],e[r]instanceof jQuery&&(e[r]=e[r][0]);var s=["inputField","displayArea","button"];for(i in s)if(r=s[i],"string"==typeof e[r]){var o="#"+e[r].escapejQuerySelector(),d=jQuery(e.context||document.body).find(o);e[r]=d[0]}if(!(e.flat||e.multiple||e.inputField||e.displayArea||e.button))return AJS.log("Calendar.setup:\n  Nothing to setup (no fields found).  Please check your code"),!1;if(e.firstDay&&null!==e.firstDay&&(e.firstDay=+e.firstDay),null!=e.flat){if("string"==typeof e.flat&&(e.flat=document.getElementById(e.flat)),!e.flat)return AJS.log("Calendar.setup:\n  Flat specified but can't find parent."),!1;var p=new Calendar(e.firstDay,e.date,e.todayDate,e.onSelect||a);return p.showsOtherMonths=e.showOthers,p.showsTime=e.showsTime,p.time24="24"==e.timeFormat,p.params=e,p.weekNumbers=e.weekNumbers,p.setRange(e.range[0],e.range[1]),p.setDateStatusHandler(e.dateStatusFunc),p.getDateText=e.dateText,e.ifFormat&&p.setDateFormat(e.ifFormat),e.inputField&&"string"==typeof e.inputField.value&&p.parseDate(e.inputField.value),p.create(e.flat),p.show(),!1}var f=e.button||e.displayArea||e.inputField;return jQuery(f).bind(e.eventName,function(e){e.preventDefault(),n()}),e.inputField&&l(),p};;
;
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:jira-date-picker-widget-v5', location = 'atlassian-connect/v5/js/jira/date-picker/date-picker.js' */
!function(){"use strict";define("ac/jira/date-picker",["ac/jira/date-picker-utils"],function(n){var i={_options:function(t,n){t.onSelect=function(t,e){connectHost.broadcastEvent("jira_date_selected",{id:n._context.extension_id},{isoDate:t.date.toISOString(),date:e});t.dateClicked&&t.callCloseHandler()}.bind(this);var e=document.getElementById(n._context.extension_id).getBoundingClientRect();t.position=t.position||{top:0,left:0};t.position.top+=e.top;t.position.left+=e.left;return t},openDatePicker:function(t,e){t=i._options(t,e);n.show(t);return t}};return i})}(AJS.$);;
;
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:jira-date-picker-widget-v5', location = 'atlassian-connect/v5/js/jira/date-picker/date-picker-utils.js' */
define("ac/jira/date-picker-utils",["quick-edit/init/calendar","underscore"],function(t,n){var a=WRM.data.claim("com.atlassian.plugins.atlassian-connect-plugin:jira-date-picker-widget.config");return{show:function(e){new Promise(function(e){t(e)}).then(function(e){var t=window.calendar,i=Calendar._FD?void 0:1;t&&t.hide();e=e||{};e=n.extend(e,a,{singleClick:"true",inputField:{}});window.calendar=t=new Calendar(e.useISO8601WeekNumbers?1:i,e.date,(new Date).toISOString(),e.onSelect||function(){},function(e){e.hide();e.destroy()});t.weekNumbers=!0;t.showsOtherMonths=!1;t.params=e;t.showsTime=e.showTime;t.time24="24"==e.timeFormat;i=e.showTime?e.dateTimeFormat:e.dateFormat;t.setDateFormat(i);t.create();t.refresh();t.showAt(e.position.left||0,e.position.top||0);return t}.bind(this,e)).catch(console.error)}}});;
;
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:jira-events-v5', location = 'atlassian-connect/v5/js/jira/events/events.js' */
!function(){"use strict";define("ac/jira/events",function(){return{refreshIssuePage:function(){try{JIRA.trigger(JIRA.Events.REFRESH_ISSUE_PAGE,[JIRA.Issue.getIssueId(),{mergeIntoCurrent:!1}])}catch(e){throw new Error("Failed to refresh the issue page")}},updateIssueGlance:function(e,t){try{JIRA.trigger(JIRA.Events.UPDATE_ISSUE_GLANCE,[JIRA.Issue.getIssueId(),{addonKey:t._context.extension.addon_key,moduleKey:t._context.extension.key,data:e}])}catch(e){throw new Error("Failed to update issue glance")}}}})}(AJS.$);;
;
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:jira-create-issue-dialog-v5', location = 'atlassian-connect/v5/js/jira/issue/issue.js' */
define("ac/jira/issue",["jira/featureflags/feature-manager"],function(e){return{openCreateIssueDialog:function(n,o){WRM.require(["wr!com.atlassian.jira.jira-quick-edit-plugin:quick-create-issue"]).then(function(){if(!JIRA||!JIRA.Forms||!JIRA.Forms.createCreateIssueForm){console&&console.warn&&console.warn("Connect: Create issue form is not available");return!1}var e=JIRA.Forms.createCreateIssueForm(n).asDialog({trigger:document.createElement("a"),id:"create-issue-dialog",windowTitle:AJS.I18n.getText("admin.issue.operations.create"),shouldLoadHeritageFormDialogContext:!0,triggerPointKey:"ecosystemApiCreateIssue"});e.show();var a=[];JIRA.one("QuickCreateIssue.sessionComplete",function(e,n){a=[];for(var o in n)a.push(n[o].createdIssueDetails)});e.bind("Dialog.hide",function(){"function"==typeof o&&o.call({},a)})}.bind(this))},openIssueDialog:function(n,o){WRM.require(["wr!com.atlassian.jira.jira-atlaskit-plugin:async-modals"]).then(function(){const e=window.require("jira/async-modals");e.then(function(e){if(e.showConnectIssueModal)e.showConnectIssueModal({issueKey:n,onCancel:o,onError:o});else{console&&console.warn&&console.warn("Connect: open issue dialog is not available");o("OPEN_ISSUE_DIALOG_IS_NOT_AVAILABLE")}})})}}});;
;
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:jira-dashboard-item-v5', location = 'atlassian-connect/v5/js/jira/dashboard-item/dashboard-item.js' */
define("ac/jira/dashboard-item",[],function(){"use strict";function n(e,t){if(window.__SPA__&&window.dashboardSpaBridge){if((d=AJS.$(e).closest("[data-gadget-id]"))&&t){var n=d.attr("data-gadget-id");window.dashboardSpaBridge.setGadgetHeight(n,t.replace(/[^0-9.]/g,""))}}else{var a=AJS.$(e).parents(".gadget-inline");if(0<a.length){var e=a.first(),n=e.attr("id"),d=new AG.InlineGadgetAPI(e),a=AG.DashboardManager.getLayout(),d=a.getGadgets().filter(function(e){return"gadget-".concat(e.getId())==n});t&&e.find("iframe").css("height",t);d[0].resize();a.refresh()}}}connectHost.onIframeEstablished(function(e){n(e.$el)});AJS.$(document).ready(function(){AJS.$("body").on("resized",".ap-container",function(e,t){n(e.target,t.height)})});return{setDashboardItemTitle:function(e,t){if(window.__SPA__&&window.dashboardSpaBridge){var n=document.getElementById(t._context.extension_id),a=AJS.$(n).closest("[data-gadget-id]");if(a){a=a.attr("data-gadget-id");window.dashboardSpaBridge.setGadgetTitle(a,e)}}else{n=document.getElementById(t._context.extension_id);AJS.$(n).parents(".gadget-container").find("h3.dashboard-item-title").text(e)}},isDashboardItemEditable:function(e){if(window.__SPA__&&window.dashboardSpaBridge){var t=document.getElementById(e._context.extension_id),n=AJS.$(t).closest("[data-gadget-id]");if(n){n=n.attr("data-gadget-id");e(window.dashboardSpaBridge.isGadgetConfigurable(n))}}else{t=document.getElementById(e._context.extension_id);e(0!==AJS.$(t).parents(".gadget-container").find("li.configure").length)}}}});define("atlassian-connect/connect-dashboard-item",function(){return function(){return{render:function(){},renderEdit:function(e){e=e.find("iframe");1===e.parent().length&&connectHost.broadcastEvent("jira_dashboard_item_edit",{id:e.attr("id")})}}}});;
;
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:jira-navigator-routes-v5', location = 'atlassian-connect/v5/js/jira/navigator/routes.js' */
!function(){"use strict";require(["ac/navigator/routes","ac/navigator/utils","jira/featureflags/feature-manager"],function(e,a,r){var s=a.hasContext,t=a.appendQueryParam,r=r.isFeatureEnabled("kitkat.spa-navigate-in-atlassian-connect")?{filters:"/secure/ManageFilters.jspa",projects:"/secure/BrowseProjects.jspa",boards:"/secure/ManageRapidViews.jspa",dashboards:"/secure/ConfigurePortalPages!default.jspa",dashboard:"/secure/Dashboard.jspa?selectPageId={dashboardId}",issue:"/browse/{issueKey}",userprofile:function(e,a){var r="/secure/admin/user/ViewProfile.jspa",r=s(e,"userAccountId")?t(r,"accountId",e.userAccountId):s(e,"username")?t(r,"username",e.username):r+"?name=";a(r)},projectadminsummary:"/plugins/servlet/project-config/{projectKey}/summary",projectadmintabpanel:"/plugins/servlet/ac/{addonKey}/{adminPageKey}?project.key={projectKey}&project.id={projectId}"}:{dashboard:"/secure/Dashboard.jspa?selectPageId={dashboardId}",issue:"/browse/{issueKey}",userprofile:function(e,a){var r="/secure/admin/user/ViewProfile.jspa",r=s(e,"userAccountId")?t(r,"accountId",e.userAccountId):s(e,"username")?t(r,"username",e.username):r+"?name=";a(r)},projectadminsummary:"/plugins/servlet/project-config/{projectKey}/summary",projectadmintabpanel:"/plugins/servlet/ac/{addonKey}/{adminPageKey}?project.key={projectKey}&project.id={projectId}"};e.addRoutes(r);a.enableApi()})}(AJS.$);;
;
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:jira-request-marshal-v5', location = 'atlassian-connect/v5/js/jira/request-marshal/request-marshal.js' */
define("ac/jira/request-marshal",function(){var t=["/rest/","/secure/"];return{getWhitelist:function(){return t},marshal:function(r){var e=!1;t.forEach(function(t){0===r.url.indexOf(AJS.contextPath()+t)&&(e=!0)},this);window.connectHost.trackAnalyticsEvent("jsapi.request.filter",{value:e,url:r.url});return!0}}});;
;
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:jira-request-marshal-v5', location = 'atlassian-connect/v5/js/jira/request-marshal/request-marshal-loader.js' */
require(["ac/jira/request-marshal"],function(a){connectHostRequest.addRequestMarshal(a.marshal)});;
;
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:jira-jql-editor-v5', location = 'atlassian-connect/v5/js/jira/jql-editor/jql-editor.soy.js' */
if("undefined"==typeof JIRA)var JIRA={};"undefined"==typeof JIRA.Connect&&(JIRA.Connect={}),"undefined"==typeof JIRA.Connect.JQLEditor&&(JIRA.Connect.JQLEditor={}),JIRA.Connect.JQLEditor.dialog=function(e,t){return'<section id="'+soy.$$escapeHtml(e.sectionId)+'" class="aui-dialog2 aui-dialog2-xlarge aui-layer" data-aui-remove-on-hide="true" role="dialog" aria-hidden="true"><header class="aui-dialog2-header"><h2>'+soy.$$escapeHtml(e.header)+'</h2></header><div class="aui-dialog2-content"><p>'+soy.$$escapeHtml(e.descriptionText)+'</p><iframe src="'+soy.$$escapeHtml(e.src)+'" id="'+soy.$$escapeHtml(e.frameId)+'"></iframe></div><footer class="aui-dialog2-footer"><div class="aui-dialog2-footer-actions"><button id="'+soy.$$escapeHtml(e.submitButtonId)+'" class="aui-button aui-button-primary">'+soy.$$escapeHtml(e.submitText)+'</button><button id="'+soy.$$escapeHtml(e.cancelButtonId)+'" class="aui-button aui-button-link">'+soy.$$escapeHtml(e.cancelText)+"</button></div></footer></section>"};;
;
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:jira-jql-editor-v5', location = 'atlassian-connect/v5/js/jira/jql-editor/jql-editor.js' */
define("ac/jira/jql-editor",[],function(){var i="connect-app-jql-editor-frame-id",o="connect-app-jql-editor-section-id",d="connect-app-jql-editor-submit-id",r="connect-app-jql-editor-cancel-id";return{init:function(){},show:function(e,t){var n=function(){if(AJS&&AJS.contextPath)return AJS.contextPath();var e=document.querySelector("meta[name=ajs-context-path]");return e?e.getAttribute("content"):""}()+"/issues/?app=true&jql="+(e.jql||""),c=document.createElement("div");c.innerHTML=JIRA.Connect.JQLEditor.dialog({src:n,frameId:i,sectionId:o,submitButtonId:d,cancelButtonId:r,header:e.header||"JQL Editor",submitText:e.submitText||"Submit",cancelText:e.cancelText||"Cancel",descriptionText:(e.descriptionText||"").substring(0,512)});document.body.appendChild(c.firstChild);AJS.dialog2("#"+o).show();document.getElementById(r).addEventListener("click",function(e){e.preventDefault();AJS.dialog2("#"+o).hide()});document.getElementById(d).addEventListener("click",function(e){e.preventDefault();(e=document.getElementById(i).contentWindow.document).querySelector(".search-button").click();e=new URLSearchParams(e.location.search).get("jql");AJS.dialog2("#"+o).hide();t({jql:e})})}}});;
;
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:jira-platform-v5', location = 'atlassian-connect/v5/js/jira/platform/platform.js' */
define("ac/jira/platform",[],function(){"use strict";return{isNativeApp:function(i){var t=window.navigator.userAgent,e=!1,n=/iPhone|iPod|iPad/i.test(t),a=/Safari/i.test(t),r=/Android/i.test(t),t=/wv/i.test(t);i(e=n&&!a||r&&t?!0:e)}}});;
;
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:jira-product-extensions-v5', location = 'atlassian-connect/v5/js/jira/main.js' */
define("ac/jira",["ac/jira/events","ac/jira/workflow-post-function","ac/jira/dashboard-item","ac/jira/date-picker","ac/jira/issue","ac/jira/jql-editor","ac/jira/platform"],function(e,a,i,o,s,t,r){return{refreshIssuePage:e.refreshIssuePage,updateIssueGlance:e.updateIssueGlance,getWorkflowConfiguration:a.getWorkflowConfiguration,_submitWorkflowConfigurationResponse:a._submitWorkflowConfigurationResponse,isDashboardItemEditable:i.isDashboardItemEditable,openCreateIssueDialog:s.openCreateIssueDialog,openIssueDialog:s.openIssueDialog,setDashboardItemTitle:i.setDashboardItemTitle,openDatePicker:o.openDatePicker,initJQLEditor:t.init,showJQLEditor:t.show,isNativeApp:r.isNativeApp}});;
;
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:jira-dropdown-list-v5', location = 'atlassian-connect/v5/js/jira/dropdown-list/dropdown-list-component.js' */
define("ac/jira/dropdown-list/component",["jira/ajs/layer/inline-layer-factory","jira/ajs/list/list","jira/ajs/layer/layer-constants","jira/ajs/list/item-descriptor","jquery"],function(e,i,n,s,o){function t(t){(t=t||{}).maxInlineResultsDisplayed=t.maxInlineResultsDisplayed||5;t.expandAllResults=t.expandAllResults||!1;this.$container=o(l.container({id:t.id}));this.$target=o(l.target()).appendTo(o("body"));this.listController=new i({containerSelector:this.$container,maxInlineResultsDisplayed:t.maxInlineResultsDisplayed,expandAllResults:t.expandAllResults,selectionHandler:function(){var t=this.getCurrent();this.onSelected(t);this.hide()}.bind(this)});this.inlineLayer=e.createInlineLayers({alignment:n.LEFT,offsetTarget:this.$target,maxInlineResultsDisplayed:t.maxInlineResultsDisplayed,content:this.$container});this.inlineLayer.onhide(function(){this.hide()}.bind(this));this.visible=!1}var l=JIRA.Connect.Suggestions;t.prototype.showAt=function(t,e,i){var n=arguments[arguments.length-1];if(!this.visible){n=document.getElementById(n._context.extension_id).getBoundingClientRect();t+=n.left;e+=n.top;this.$target.css({left:t+"px",top:e+"px"});this.listController.enable();this.inlineLayer.show();this.inlineLayer.setPosition();this.inlineLayer.setWidth(i);this.visible=!0}};t.prototype.setItems=function(t,e){e="string"==typeof e||"";this.suggestions=t.map(function(t){return new s({value:t.value,label:t.label,icon:t.iconUrl})});this.listController.generateListFromJSON(this.suggestions,e)};t.prototype.hide=function(){if(this.visible){this.visible=!1;this.listController.disable();this.inlineLayer.hide();this.onHidden()}};t.prototype.moveUp=function(){this.listController.moveToPrevious()};t.prototype.moveDown=function(){this.listController.moveToNext()};t.prototype.query=function(t){this.listController.generateListFromJSON(this.suggestions,t)};t.prototype.select=function(){var t=this.listController.getFocused();0!==t.length&&t.is(":visible")&&this.listController._acceptSuggestion(t)};t.prototype.isVisible=function(t){t(this.visible)};t.prototype.getSelected=function(t){t(this.getCurrent())};t.prototype.getCurrent=function(){var t=this.listController.getFocused();if(0!==t.length&&t.is(":visible")){t=t.data("descriptor");return{value:t.value(),label:t.label(),iconUrl:t.icon()}}return null};t.prototype.onSelected=function(t){connectHost.broadcastEvent("dropdown_list_select",{addon_key:this._context.extension.addon_key,key:this._context.extension.key},{id:this._id,data:t})};t.prototype.onHidden=function(){connectHost.broadcastEvent("dropdown_list_hide",{addon_key:this._context.extension.addon_key,key:this._context.extension.key},{id:this._id})};return t});;
;
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:jira-dropdown-list-v5', location = 'atlassian-connect/v5/js/jira/dropdown-list/dropdown-list.soy.js' */
if("undefined"==typeof JIRA)var JIRA={};"undefined"==typeof JIRA.Connect&&(JIRA.Connect={}),"undefined"==typeof JIRA.Connect.Suggestions&&(JIRA.Connect.Suggestions={}),JIRA.Connect.Suggestions.container=function(n,e){return'<div class="aui-list ac-suggestions-container" '+(n.id?'id="'+soy.$$escapeHtml(n.id)+'"':"")+"></div>"},JIRA.Connect.Suggestions.target=function(n,e){return'<div class="ac-suggestions-target"></div>'};;
;
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:jira-dropdown-list-v5', location = 'atlassian-connect/v5/js/jira/dropdown-list/dropdown-list.js' */
define("ac/dropdown-list",["ac/jira/dropdown-list/component"],function(e){return{create:{constructor:e,showAt:e.prototype.showAt,setItems:e.prototype.setItems,hide:e.prototype.hide,moveUp:e.prototype.moveUp,moveDown:e.prototype.moveDown,query:e.prototype.query,select:e.prototype.select,isVisible:e.prototype.isVisible,getSelected:e.prototype.getSelected,onHide:function(){},onSelect:function(){}}}});;
;
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:jira-module-loader-v5', location = 'atlassian-connect/v5/js/jira/module-loader.js' */
connectHost.defineModule("jira",require("ac/jira"));connectHost.defineModule("dropdownList",require("ac/dropdown-list"));;
;
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:jira-spa-inlinedialog-cleanup', location = 'atlassian-connect/v5/js/iframe/host/spa-inline-dialog-cleanup.js' */
require(["skate"],function(e){e("ap-inline-dialog",{type:e&&e.types&&e.types.CLASS||e&&e.type&&e.type.CLASSNAME,detached:function(e){e=document.querySelectorAll('iframe[id^="'+window._AP.util.escapeSelector(e.id)+'"]');[].forEach.call(e,function(e){AJS.$(e).parents(".aui-inline-dialog").remove()})}})});;
;
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:jira-spa-iframe-api-v5', location = 'atlassian-connect/v5/js/jira/spa-iframe/offset-overrides.js' */
define("ac/jira/spa-iframe/offset-overrides",[],function(){return function(){!function(){if(window._AP){[window._AP.dialogOptions,window._AP.inlineDialogOptions].filter(function(o){return"object"==typeof o}).forEach(function(o){for(var i in o)o.hasOwnProperty(i)&&(o[i].hostFrameOffset=1)});Object.keys(window._AP.dialogModules||{}).forEach(function(i){Object.keys(window._AP.dialogModules[i]).forEach(function(o){o=window._AP.dialogModules[i][o];o&&o.options&&(o.options.hostFrameOffset=1)})})}}()}});;
;
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:jira-spa-iframe-api-v5', location = 'atlassian-connect/v5/js/jira/spa-iframe/providers/get-location.js' */
define("ac/jira/spa-iframe/providers/get-location",["ac/navigator/utils"],function(i){return function(){return i.getTopmostSameOriginWindow(window).location.href}});;
;
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:jira-spa-iframe-api-v5', location = 'atlassian-connect/v5/js/jira/spa-iframe/main.js' */
require(["ac/spa-context","ac/jira/spa-iframe/providers/get-location","ac/jira/spa-iframe/offset-overrides","jira/container-api"],function(e,i,r,a){if(a.getIsIframe()){e.provideContainerApi(a);r();connectHost.registerProvider("get-location",i)}});;
;
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:jira-spa-api-v5', location = 'atlassian-connect/v5/js/jira/navigator/spa.js' */
require(["ac/spa-context","jira/container-api","jira/featureflags/feature-manager"],function(i,a,t){t.isFeatureEnabled("kitkat.spa-navigate-in-atlassian-connect")&&a&&a.APIs&&a.APIs.getNavigationAPI()&&a.APIs.getNavigationAPI().then(function(a){i.provideNavigationApi(a)})});;
;
/* module-key = 'com.atlassian.plugin.jslibs:uri-1.14.1', location = 'atlassian-jslibs/libs/uri/1.14.1/uri-1.14.1.js' */
(function(n){define("atlassian/libs/uri-1.14.1",function(){var q={};n.call(q);return q.URI.noConflict()})})(function(){var n=this.punycode,q=this.IPv6,p=this.SecondLevelDomains,k=this,e=function(a,b){if(!(this instanceof e))return new e(a,b);void 0===a&&(a="undefined"!==typeof location?location.href+"":"");this.href(a);return void 0!==b?this.absoluteTo(b):this},o=function(a){return a.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")},t=function(a){return void 0===a?"Undefined":String(Object.prototype.toString.call(a)).slice(8,
-1)},j=function(a){return"Array"===t(a)},s=function(a,b){var c,e;if(j(b)){c=0;for(e=b.length;c<e;c++)if(!s(a,b[c]))return!1;return!0}var h=t(b);c=0;for(e=a.length;c<e;c++)if("RegExp"===h){if("string"===typeof a[c]&&a[c].match(b))return!0}else if(a[c]===b)return!0;return!1},w=function(a,b){if(!j(a)||!j(b)||a.length!==b.length)return!1;a.sort();b.sort();for(var c=0,e=a.length;c<e;c++)if(a[c]!==b[c])return!1;return!0},A=function(a){return escape(a)},u=function(a){return encodeURIComponent(a).replace(/[!'()*]/g,
A).replace(/\*/g,"%2A")},r=function(a){return function(b,c){if(void 0===b)return this._parts[a]||"";this._parts[a]=b||null;this.build(!c);return this}},x=function(a,b){return function(c,e){if(void 0===c)return this._parts[a]||"";null!==c&&(c+="",c.charAt(0)===b&&(c=c.substring(1)));this._parts[a]=c;this.build(!e);return this}},B=k&&k.URI;e.version="1.14.1";var d=e.prototype,m=Object.prototype.hasOwnProperty;e._parts=function(){return{protocol:null,username:null,password:null,hostname:null,urn:null,
port:null,path:null,query:null,fragment:null,duplicateQueryParameters:e.duplicateQueryParameters,escapeQuerySpace:e.escapeQuerySpace}};e.duplicateQueryParameters=!1;e.escapeQuerySpace=!0;e.protocol_expression=/^[a-z][a-z0-9.+-]*$/i;e.idn_expression=/[^a-z0-9\.-]/i;e.punycode_expression=/(xn--)/i;e.ip4_expression=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;e.ip6_expression=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
e.find_uri_expression=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/ig;e.findUri={start:/\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,end:/[\s\r\n]|$/,trim:/[`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u201e\u2018\u2019]+$/};e.defaultPorts={http:"80",https:"443",ftp:"21",gopher:"70",ws:"80",wss:"443"};e.invalid_hostname_characters=
/[^a-zA-Z0-9\.-]/;e.domAttributes={a:"href",blockquote:"cite",link:"href",base:"href",script:"src",form:"action",img:"src",area:"href",iframe:"src",embed:"src",source:"src",track:"src",input:"src",audio:"src",video:"src"};e.getDomAttribute=function(a){if(a&&a.nodeName){var b=a.nodeName.toLowerCase();return"input"===b&&"image"!==a.type?void 0:e.domAttributes[b]}};e.encode=u;e.decode=decodeURIComponent;e.iso8859=function(){e.encode=escape;e.decode=unescape};e.unicode=function(){e.encode=u;e.decode=
decodeURIComponent};e.characters={pathname:{encode:{expression:/%(24|26|2B|2C|3B|3D|3A|40)/ig,map:{"%24":"$","%26":"&","%2B":"+","%2C":",","%3B":";","%3D":"=","%3A":":","%40":"@"}},decode:{expression:/[\/\?#]/g,map:{"/":"%2F","?":"%3F","#":"%23"}}},reserved:{encode:{expression:/%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig,map:{"%3A":":","%2F":"/","%3F":"?","%23":"#","%5B":"[","%5D":"]","%40":"@","%21":"!","%24":"$","%26":"&","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",",
"%3B":";","%3D":"="}}}};e.encodeQuery=function(a,b){var c=e.encode(a+"");void 0===b&&(b=e.escapeQuerySpace);return b?c.replace(/%20/g,"+"):c};e.decodeQuery=function(a,b){a+="";void 0===b&&(b=e.escapeQuerySpace);try{return e.decode(b?a.replace(/\+/g,"%20"):a)}catch(c){return a}};e.recodePath=function(a){for(var a=(a+"").split("/"),b=0,c=a.length;b<c;b++)a[b]=e.encodePathSegment(e.decode(a[b]));return a.join("/")};e.decodePath=function(a){for(var a=(a+"").split("/"),b=0,c=a.length;b<c;b++)a[b]=e.decodePathSegment(a[b]);
return a.join("/")};var y={encode:"encode",decode:"decode"},v,z=function(a,b){return function(c){try{return e[b](c+"").replace(e.characters[a][b].expression,function(c){return e.characters[a][b].map[c]})}catch(f){return c}}};for(v in y)e[v+"PathSegment"]=z("pathname",y[v]);e.encodeReserved=z("reserved","encode");e.parse=function(a,b){var c;b||(b={});c=a.indexOf("#");-1<c&&(b.fragment=a.substring(c+1)||null,a=a.substring(0,c));c=a.indexOf("?");-1<c&&(b.query=a.substring(c+1)||null,a=a.substring(0,
c));"//"===a.substring(0,2)?(b.protocol=null,a=a.substring(2),a=e.parseAuthority(a,b)):(c=a.indexOf(":"),-1<c&&(b.protocol=a.substring(0,c)||null,b.protocol&&!b.protocol.match(e.protocol_expression)?b.protocol=void 0:"//"===a.substring(c+1,c+3)?(a=a.substring(c+3),a=e.parseAuthority(a,b)):(a=a.substring(c+1),b.urn=!0)));b.path=a;return b};e.parseHost=function(a,b){var c=a.indexOf("/"),e;-1===c&&(c=a.length);"["===a.charAt(0)?(e=a.indexOf("]"),b.hostname=a.substring(1,e)||null,b.port=a.substring(e+
2,c)||null,"/"===b.port&&(b.port=null)):a.indexOf(":")!==a.lastIndexOf(":")?(b.hostname=a.substring(0,c)||null,b.port=null):(e=a.substring(0,c).split(":"),b.hostname=e[0]||null,b.port=e[1]||null);b.hostname&&"/"!==a.substring(c).charAt(0)&&(c++,a="/"+a);return a.substring(c)||"/"};e.parseAuthority=function(a,b){a=e.parseUserinfo(a,b);return e.parseHost(a,b)};e.parseUserinfo=function(a,b){var c=a.indexOf("/"),f=a.lastIndexOf("@",-1<c?c:a.length-1);-1<f&&(-1===c||f<c)?(c=a.substring(0,f).split(":"),
b.username=c[0]?e.decode(c[0]):null,c.shift(),b.password=c[0]?e.decode(c.join(":")):null,a=a.substring(f+1)):(b.username=null,b.password=null);return a};e.parseQuery=function(a,b){if(!a)return{};a=a.replace(/&+/g,"&").replace(/^\?*&*|&+$/g,"");if(!a)return{};for(var c={},f=a.split("&"),h=f.length,d,i,l=0;l<h;l++)d=f[l].split("="),i=e.decodeQuery(d.shift(),b),d=d.length?e.decodeQuery(d.join("="),b):null,m.call(c,i)?("string"===typeof c[i]&&(c[i]=[c[i]]),c[i].push(d)):c[i]=d;return c};e.build=function(a){var b=
"";a.protocol&&(b+=a.protocol+":");if(!a.urn&&(b||a.hostname))b+="//";b+=e.buildAuthority(a)||"";"string"===typeof a.path&&("/"!==a.path.charAt(0)&&"string"===typeof a.hostname&&(b+="/"),b+=a.path);"string"===typeof a.query&&a.query&&(b+="?"+a.query);"string"===typeof a.fragment&&a.fragment&&(b+="#"+a.fragment);return b};e.buildHost=function(a){var b="";if(a.hostname)b=e.ip6_expression.test(a.hostname)?b+("["+a.hostname+"]"):b+a.hostname;else return"";a.port&&(b+=":"+a.port);return b};e.buildAuthority=
function(a){return e.buildUserinfo(a)+e.buildHost(a)};e.buildUserinfo=function(a){var b="";a.username&&(b+=e.encode(a.username),a.password&&(b+=":"+e.encode(a.password)),b+="@");return b};e.buildQuery=function(a,b,c){var f="",h,d,i,l;for(d in a)if(m.call(a,d)&&d)if(j(a[d])){h={};i=0;for(l=a[d].length;i<l;i++)void 0!==a[d][i]&&void 0===h[a[d][i]+""]&&(f+="&"+e.buildQueryParameter(d,a[d][i],c),!0!==b&&(h[a[d][i]+""]=!0))}else void 0!==a[d]&&(f+="&"+e.buildQueryParameter(d,a[d],c));return f.substring(1)};
e.buildQueryParameter=function(a,b,c){return e.encodeQuery(a,c)+(null!==b?"="+e.encodeQuery(b,c):"")};e.addQuery=function(a,b,c){if("object"===typeof b)for(var f in b)m.call(b,f)&&e.addQuery(a,f,b[f]);else if("string"===typeof b)void 0===a[b]?a[b]=c:("string"===typeof a[b]&&(a[b]=[a[b]]),j(c)||(c=[c]),a[b]=(a[b]||[]).concat(c));else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");};e.removeQuery=function(a,b,c){var f;if(j(b)){c=0;for(f=b.length;c<f;c++)a[b[c]]=
void 0}else if("object"===typeof b)for(f in b)m.call(b,f)&&e.removeQuery(a,f,b[f]);else if("string"===typeof b)if(void 0!==c)if(a[b]===c)a[b]=void 0;else{if(j(a[b])){f=a[b];var d={},g,i;if(j(c)){g=0;for(i=c.length;g<i;g++)d[c[g]]=!0}else d[c]=!0;g=0;for(i=f.length;g<i;g++)void 0!==d[f[g]]&&(f.splice(g,1),i--,g--);a[b]=f}}else a[b]=void 0;else throw new TypeError("URI.addQuery() accepts an object, string as the first parameter");};e.hasQuery=function(a,b,c,f){if("object"===typeof b){for(var d in b)if(m.call(b,
d)&&!e.hasQuery(a,d,b[d]))return!1;return!0}if("string"!==typeof b)throw new TypeError("URI.hasQuery() accepts an object, string as the name parameter");switch(t(c)){case "Undefined":return b in a;case "Boolean":return a=Boolean(j(a[b])?a[b].length:a[b]),c===a;case "Function":return!!c(a[b],b,a);case "Array":return!j(a[b])?!1:(f?s:w)(a[b],c);case "RegExp":return!j(a[b])?Boolean(a[b]&&a[b].match(c)):!f?!1:s(a[b],c);case "Number":c=String(c);case "String":return!j(a[b])?a[b]===c:!f?!1:s(a[b],c);default:throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter");
}};e.commonPath=function(a,b){var c=Math.min(a.length,b.length),e;for(e=0;e<c;e++)if(a.charAt(e)!==b.charAt(e)){e--;break}if(1>e)return a.charAt(0)===b.charAt(0)&&"/"===a.charAt(0)?"/":"";if("/"!==a.charAt(e)||"/"!==b.charAt(e))e=a.substring(0,e).lastIndexOf("/");return a.substring(0,e+1)};e.withinString=function(a,b,c){c||(c={});var f=c.start||e.findUri.start,d=c.end||e.findUri.end,g=c.trim||e.findUri.trim,i=/[a-z0-9-]=["']?$/i;for(f.lastIndex=0;;){var l=f.exec(a);if(!l)break;l=l.index;if(c.ignoreHtml){var j=
a.slice(Math.max(l-3,0),l);if(j&&i.test(j))continue}var j=l+a.slice(l).search(d),k=a.slice(l,j).replace(g,"");if(!c.ignore||!c.ignore.test(k))j=l+k.length,k=b(k,l,j,a),a=a.slice(0,l)+k+a.slice(j),f.lastIndex=l+k.length}f.lastIndex=0;return a};e.ensureValidHostname=function(a){if(a.match(e.invalid_hostname_characters)){if(!n)throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-] and Punycode.js is not available');if(n.toASCII(a).match(e.invalid_hostname_characters))throw new TypeError('Hostname "'+
a+'" contains characters other than [A-Z0-9.-]');}};e.noConflict=function(a){if(a)return a={URI:this.noConflict()},k.URITemplate&&"function"===typeof k.URITemplate.noConflict&&(a.URITemplate=k.URITemplate.noConflict()),k.IPv6&&"function"===typeof k.IPv6.noConflict&&(a.IPv6=k.IPv6.noConflict()),k.SecondLevelDomains&&"function"===typeof k.SecondLevelDomains.noConflict&&(a.SecondLevelDomains=k.SecondLevelDomains.noConflict()),a;k.URI===this&&(k.URI=B);return this};d.build=function(a){if(!0===a)this._deferred_build=
!0;else if(void 0===a||this._deferred_build)this._string=e.build(this._parts),this._deferred_build=!1;return this};d.clone=function(){return new e(this)};d.valueOf=d.toString=function(){return this.build(!1)._string};d.protocol=r("protocol");d.username=r("username");d.password=r("password");d.hostname=r("hostname");d.port=r("port");d.query=x("query","?");d.fragment=x("fragment","#");d.search=function(a,b){var c=this.query(a,b);return"string"===typeof c&&c.length?"?"+c:c};d.hash=function(a,b){var c=
this.fragment(a,b);return"string"===typeof c&&c.length?"#"+c:c};d.pathname=function(a,b){if(void 0===a||!0===a){var c=this._parts.path||(this._parts.hostname?"/":"");return a?e.decodePath(c):c}this._parts.path=a?e.recodePath(a):"/";this.build(!b);return this};d.path=d.pathname;d.href=function(a,b){var c;if(void 0===a)return this.toString();this._string="";this._parts=e._parts();var f=a instanceof e,d="object"===typeof a&&(a.hostname||a.path||a.pathname);a.nodeName&&(d=e.getDomAttribute(a),a=a[d]||
"",d=!1);!f&&(d&&void 0!==a.pathname)&&(a=a.toString());if("string"===typeof a||a instanceof String)this._parts=e.parse(String(a),this._parts);else if(f||d)for(c in f=f?a._parts:a,f)m.call(this._parts,c)&&(this._parts[c]=f[c]);else throw new TypeError("invalid input");this.build(!b);return this};d.is=function(a){var b=!1,c=!1,f=!1,d=!1,g=!1,i=!1,j=!1,k=!this._parts.urn;this._parts.hostname&&(k=!1,c=e.ip4_expression.test(this._parts.hostname),f=e.ip6_expression.test(this._parts.hostname),b=c||f,g=
(d=!b)&&p&&p.has(this._parts.hostname),i=d&&e.idn_expression.test(this._parts.hostname),j=d&&e.punycode_expression.test(this._parts.hostname));switch(a.toLowerCase()){case "relative":return k;case "absolute":return!k;case "domain":case "name":return d;case "sld":return g;case "ip":return b;case "ip4":case "ipv4":case "inet4":return c;case "ip6":case "ipv6":case "inet6":return f;case "idn":return i;case "url":return!this._parts.urn;case "urn":return!!this._parts.urn;case "punycode":return j}return null};
var C=d.protocol,D=d.port,E=d.hostname;d.protocol=function(a,b){if(void 0!==a&&a&&(a=a.replace(/:(\/\/)?$/,""),!a.match(e.protocol_expression)))throw new TypeError('Protocol "'+a+"\" contains characters other than [A-Z0-9.+-] or doesn't start with [A-Z]");return C.call(this,a,b)};d.scheme=d.protocol;d.port=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0!==a&&(0===a&&(a=null),a&&(a+="",":"===a.charAt(0)&&(a=a.substring(1)),a.match(/[^0-9]/))))throw new TypeError('Port "'+a+'" contains characters other than [0-9]');
return D.call(this,a,b)};d.hostname=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0!==a){var c={};e.parseHost(a,c);a=c.hostname}return E.call(this,a,b)};d.host=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a)return this._parts.hostname?e.buildHost(this._parts):"";e.parseHost(a,this._parts);this.build(!b);return this};d.authority=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a)return this._parts.hostname?e.buildAuthority(this._parts):
"";e.parseAuthority(a,this._parts);this.build(!b);return this};d.userinfo=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){if(!this._parts.username)return"";var c=e.buildUserinfo(this._parts);return c.substring(0,c.length-1)}"@"!==a[a.length-1]&&(a+="@");e.parseUserinfo(a,this._parts);this.build(!b);return this};d.resource=function(a,b){var c;if(void 0===a)return this.path()+this.search()+this.hash();c=e.parse(a);this._parts.path=c.path;this._parts.query=c.query;this._parts.fragment=
c.fragment;this.build(!b);return this};d.subdomain=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var c=this._parts.hostname.length-this.domain().length-1;return this._parts.hostname.substring(0,c)||""}c=this._parts.hostname.length-this.domain().length;c=this._parts.hostname.substring(0,c);c=RegExp("^"+o(c));a&&"."!==a.charAt(a.length-1)&&(a+=".");a&&e.ensureValidHostname(a);this._parts.hostname=this._parts.hostname.replace(c,
a);this.build(!b);return this};d.domain=function(a,b){if(this._parts.urn)return void 0===a?"":this;"boolean"===typeof a&&(b=a,a=void 0);if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var c=this._parts.hostname.match(/\./g);if(c&&2>c.length)return this._parts.hostname;c=this._parts.hostname.length-this.tld(b).length-1;c=this._parts.hostname.lastIndexOf(".",c-1)+1;return this._parts.hostname.substring(c)||""}if(!a)throw new TypeError("cannot set domain empty");e.ensureValidHostname(a);
!this._parts.hostname||this.is("IP")?this._parts.hostname=a:(c=RegExp(o(this.domain())+"$"),this._parts.hostname=this._parts.hostname.replace(c,a));this.build(!b);return this};d.tld=function(a,b){if(this._parts.urn)return void 0===a?"":this;"boolean"===typeof a&&(b=a,a=void 0);if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var c=this._parts.hostname.lastIndexOf("."),c=this._parts.hostname.substring(c+1);return!0!==b&&p&&p.list[c.toLowerCase()]?p.get(this._parts.hostname)||c:c}if(a)if(a.match(/[^a-zA-Z0-9-]/))if(p&&
p.is(a))c=RegExp(o(this.tld())+"$"),this._parts.hostname=this._parts.hostname.replace(c,a);else throw new TypeError('TLD "'+a+'" contains characters other than [A-Z0-9]');else{if(!this._parts.hostname||this.is("IP"))throw new ReferenceError("cannot set TLD on non-domain host");c=RegExp(o(this.tld())+"$");this._parts.hostname=this._parts.hostname.replace(c,a)}else throw new TypeError("cannot set TLD empty");this.build(!b);return this};d.directory=function(a,b){if(this._parts.urn)return void 0===a?
"":this;if(void 0===a||!0===a){if(!this._parts.path&&!this._parts.hostname)return"";if("/"===this._parts.path)return"/";var c=this._parts.path.length-this.filename().length-1,c=this._parts.path.substring(0,c)||(this._parts.hostname?"/":"");return a?e.decodePath(c):c}c=this._parts.path.length-this.filename().length;c=this._parts.path.substring(0,c);c=RegExp("^"+o(c));this.is("relative")||(a||(a="/"),"/"!==a.charAt(0)&&(a="/"+a));a&&"/"!==a.charAt(a.length-1)&&(a+="/");a=e.recodePath(a);this._parts.path=
this._parts.path.replace(c,a);this.build(!b);return this};d.filename=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path||"/"===this._parts.path)return"";var c=this._parts.path.lastIndexOf("/"),c=this._parts.path.substring(c+1);return a?e.decodePathSegment(c):c}c=!1;"/"===a.charAt(0)&&(a=a.substring(1));a.match(/\.?\//)&&(c=!0);var f=RegExp(o(this.filename())+"$"),a=e.recodePath(a);this._parts.path=this._parts.path.replace(f,a);c?this.normalizePath(b):
this.build(!b);return this};d.suffix=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path||"/"===this._parts.path)return"";var c=this.filename(),f=c.lastIndexOf(".");if(-1===f)return"";c=c.substring(f+1);c=/^[a-z0-9%]+$/i.test(c)?c:"";return a?e.decodePathSegment(c):c}"."===a.charAt(0)&&(a=a.substring(1));if(c=this.suffix())f=a?RegExp(o(c)+"$"):RegExp(o("."+c)+"$");else{if(!a)return this;this._parts.path+="."+e.recodePath(a)}f&&(a=e.recodePath(a),
this._parts.path=this._parts.path.replace(f,a));this.build(!b);return this};d.segment=function(a,b,c){var e=this._parts.urn?":":"/",d=this.path(),g="/"===d.substring(0,1),d=d.split(e);void 0!==a&&"number"!==typeof a&&(c=b,b=a,a=void 0);if(void 0!==a&&"number"!==typeof a)throw Error('Bad segment "'+a+'", must be 0-based integer');g&&d.shift();0>a&&(a=Math.max(d.length+a,0));if(void 0===b)return void 0===a?d:d[a];if(null===a||void 0===d[a])if(j(b))for(var d=[],a=0,i=b.length;a<i;a++){if(b[a].length||
d.length&&d[d.length-1].length)d.length&&!d[d.length-1].length&&d.pop(),d.push(b[a])}else{if(b||"string"===typeof b)""===d[d.length-1]?d[d.length-1]=b:d.push(b)}else b?d[a]=b:d.splice(a,1);g&&d.unshift("");return this.path(d.join(e),c)};d.segmentCoded=function(a,b,c){var d,h;"number"!==typeof a&&(c=b,b=a,a=void 0);if(void 0===b){a=this.segment(a,b,c);if(j(a)){d=0;for(h=a.length;d<h;d++)a[d]=e.decode(a[d])}else a=void 0!==a?e.decode(a):void 0;return a}if(j(b)){d=0;for(h=b.length;d<h;d++)b[d]=e.decode(b[d])}else b=
"string"===typeof b||b instanceof String?e.encode(b):b;return this.segment(a,b,c)};var F=d.query;d.query=function(a,b){if(!0===a)return e.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("function"===typeof a){var c=e.parseQuery(this._parts.query,this._parts.escapeQuerySpace),d=a.call(this,c);this._parts.query=e.buildQuery(d||c,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);this.build(!b);return this}return void 0!==a&&"string"!==typeof a?(this._parts.query=e.buildQuery(a,
this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),this.build(!b),this):F.call(this,a,b)};d.setQuery=function(a,b,c){var d=e.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("string"===typeof a||a instanceof String)d[a]=void 0!==b?b:null;else if("object"===typeof a)for(var h in a)m.call(a,h)&&(d[h]=a[h]);else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");this._parts.query=e.buildQuery(d,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);
"string"!==typeof a&&(c=b);this.build(!c);return this};d.addQuery=function(a,b,c){var d=e.parseQuery(this._parts.query,this._parts.escapeQuerySpace);e.addQuery(d,a,void 0===b?null:b);this._parts.query=e.buildQuery(d,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&(c=b);this.build(!c);return this};d.removeQuery=function(a,b,c){var d=e.parseQuery(this._parts.query,this._parts.escapeQuerySpace);e.removeQuery(d,a,b);this._parts.query=e.buildQuery(d,this._parts.duplicateQueryParameters,
this._parts.escapeQuerySpace);"string"!==typeof a&&(c=b);this.build(!c);return this};d.hasQuery=function(a,b,c){var d=e.parseQuery(this._parts.query,this._parts.escapeQuerySpace);return e.hasQuery(d,a,b,c)};d.setSearch=d.setQuery;d.addSearch=d.addQuery;d.removeSearch=d.removeQuery;d.hasSearch=d.hasQuery;d.normalize=function(){return this._parts.urn?this.normalizeProtocol(!1).normalizeQuery(!1).normalizeFragment(!1).build():this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()};
d.normalizeProtocol=function(a){"string"===typeof this._parts.protocol&&(this._parts.protocol=this._parts.protocol.toLowerCase(),this.build(!a));return this};d.normalizeHostname=function(a){this._parts.hostname&&(this.is("IDN")&&n?this._parts.hostname=n.toASCII(this._parts.hostname):this.is("IPv6")&&q&&(this._parts.hostname=q.best(this._parts.hostname)),this._parts.hostname=this._parts.hostname.toLowerCase(),this.build(!a));return this};d.normalizePort=function(a){"string"===typeof this._parts.protocol&&
this._parts.port===e.defaultPorts[this._parts.protocol]&&(this._parts.port=null,this.build(!a));return this};d.normalizePath=function(a){if(this._parts.urn||!this._parts.path||"/"===this._parts.path)return this;var b,c=this._parts.path,d="",h,g;"/"!==c.charAt(0)&&(b=!0,c="/"+c);c=c.replace(/(\/(\.\/)+)|(\/\.$)/g,"/").replace(/\/{2,}/g,"/");b&&(d=c.substring(1).match(/^(\.\.\/)+/)||"")&&(d=d[0]);for(;;){h=c.indexOf("/..");if(-1===h)break;else if(0===h){c=c.substring(3);continue}g=c.substring(0,h).lastIndexOf("/");
-1===g&&(g=h);c=c.substring(0,g)+c.substring(h+3)}b&&this.is("relative")&&(c=d+c.substring(1));c=e.recodePath(c);this._parts.path=c;this.build(!a);return this};d.normalizePathname=d.normalizePath;d.normalizeQuery=function(a){"string"===typeof this._parts.query&&(this._parts.query.length?this.query(e.parseQuery(this._parts.query,this._parts.escapeQuerySpace)):this._parts.query=null,this.build(!a));return this};d.normalizeFragment=function(a){this._parts.fragment||(this._parts.fragment=null,this.build(!a));
return this};d.normalizeSearch=d.normalizeQuery;d.normalizeHash=d.normalizeFragment;d.iso8859=function(){var a=e.encode,b=e.decode;e.encode=escape;e.decode=decodeURIComponent;this.normalize();e.encode=a;e.decode=b;return this};d.unicode=function(){var a=e.encode,b=e.decode;e.encode=u;e.decode=unescape;this.normalize();e.encode=a;e.decode=b;return this};d.readable=function(){var a=this.clone();a.username("").password("").normalize();var b="";a._parts.protocol&&(b+=a._parts.protocol+"://");a._parts.hostname&&
(a.is("punycode")&&n?(b+=n.toUnicode(a._parts.hostname),a._parts.port&&(b+=":"+a._parts.port)):b+=a.host());a._parts.hostname&&(a._parts.path&&"/"!==a._parts.path.charAt(0))&&(b+="/");b+=a.path(!0);if(a._parts.query){for(var c="",d=0,h=a._parts.query.split("&"),g=h.length;d<g;d++){var i=(h[d]||"").split("="),c=c+("&"+e.decodeQuery(i[0],this._parts.escapeQuerySpace).replace(/&/g,"%26"));void 0!==i[1]&&(c+="="+e.decodeQuery(i[1],this._parts.escapeQuerySpace).replace(/&/g,"%26"))}b+="?"+c.substring(1)}return b+=
e.decodeQuery(a.hash(),!0)};d.absoluteTo=function(a){var b=this.clone(),c=["protocol","username","password","hostname","port"],d,h;if(this._parts.urn)throw Error("URNs do not have any generally defined hierarchical components");a instanceof e||(a=new e(a));b._parts.protocol||(b._parts.protocol=a._parts.protocol);if(this._parts.hostname)return b;for(d=0;h=c[d];d++)b._parts[h]=a._parts[h];b._parts.path?".."===b._parts.path.substring(-2)&&(b._parts.path+="/"):(b._parts.path=a._parts.path,b._parts.query||
(b._parts.query=a._parts.query));"/"!==b.path().charAt(0)&&(a=a.directory(),b._parts.path=(a?a+"/":"")+b._parts.path,b.normalizePath());b.build();return b};d.relativeTo=function(a){var b=this.clone().normalize(),c,d,h,g;if(b._parts.urn)throw Error("URNs do not have any generally defined hierarchical components");a=(new e(a)).normalize();c=b._parts;d=a._parts;h=b.path();g=a.path();if("/"!==h.charAt(0))throw Error("URI is already relative");if("/"!==g.charAt(0))throw Error("Cannot calculate a URI relative to another relative URI");
c.protocol===d.protocol&&(c.protocol=null);if(!(c.username!==d.username||c.password!==d.password)&&!(null!==c.protocol||null!==c.username||null!==c.password)&&c.hostname===d.hostname&&c.port===d.port)c.hostname=null,c.port=null;else return b.build();if(h===g)return c.path="",b.build();a=e.commonPath(b.path(),a.path());if(!a)return b.build();d=d.path.substring(a.length).replace(/[^\/]*$/,"").replace(/.*?\//g,"../");c.path=d+c.path.substring(a.length);return b.build()};d.equals=function(a){var b=this.clone(),
a=new e(a),c={},d={},h={},g;b.normalize();a.normalize();if(b.toString()===a.toString())return!0;c=b.query();d=a.query();b.query("");a.query("");if(b.toString()!==a.toString()||c.length!==d.length)return!1;c=e.parseQuery(c,this._parts.escapeQuerySpace);d=e.parseQuery(d,this._parts.escapeQuerySpace);for(g in c)if(m.call(c,g)){if(j(c[g])){if(!w(c[g],d[g]))return!1}else if(c[g]!==d[g])return!1;h[g]=!0}for(g in d)if(m.call(d,g)&&!h[g])return!1;return!0};d.duplicateQueryParameters=function(a){this._parts.duplicateQueryParameters=
!!a;return this};d.escapeQuerySpace=function(a){this._parts.escapeQuerySpace=!!a;return this};this.URI=e});;
;
/* module-key = 'com.atlassian.jira.jira-fileviewer-plugin:fileviewer', location = 'jira-fileviewer-module/file-service.js' */
define("jira/fileviewer/file-service",["jira/featureflags/feature-manager","jquery"],function(e,n){"use strict";function i(){return Object.keys(r).map(function(e){return r[e].join(", ")}).join(", ")}function t(e,n){Array.isArray(n)?e.push.apply(e,n):e.push(n)}var r={image:["a[file-preview-type=image]"],video:["a[file-preview-type=video]"],document:["a[file-preview-type=document]"]};return{findFiles:function(e){return n(e||document.body).find(i())},getFileSelector:i,getImageSelector:function(){return r.image.join(", ")},addImageSelector:function(e){t(r.image,e)},getVideoSelector:function(){return r.video.join(", ")},getDocumentSelector:function(){return r.document.join(", ")},addDocumentSelector:function(e){t(r.document,e)}}});;
;
/* module-key = 'com.atlassian.jira.jira-fileviewer-plugin:fileviewer', location = 'jira-fileviewer-module/fileviewer.js' */
define("jira/fileviewer",["wrm/require","jira/fileviewer/file-service","jira/loading/loading","jira/ajs/keyboardshortcut/keyboard-shortcut-toggle","jira/components/analytics-tracker/tracker","jira/util/navigator","atlassian/libs/uri-1.14.1","jquery","underscore"],function(e,i,t,r,n,a,o,l,c){"use strict";function d(){var e=l.Deferred();return s().done(function(){e.resolve(FileViewer)}),e.promise()}function u(e){var i=o(e.data("download-url")||e.attr("href"));return a.isIE()&&a.majorVersion()<12&&i.addSearch("stream","true"),i.toString()}function f(e){return e.data("download-url")||e.attr("href")}function s(){return m||(m=e(["wr!com.atlassian.jira.jira-fileviewer-plugin:atlassian-fileviewer"]),m.done(function(){g=new FileViewer({enableMiniMode:!0,viewers:["image","document","video"],moduleBackend:require("jira/fileviewer/module-backend/asynchronous"),analyticsBackend:require("jira/fileviewer/module-backend/analytics")}),g.on("fv.open",function(){r.disable,n.trackEvent("viewissue.attachment.view","click")}),g.on("fv.close",r.enable)})),m}function v(){g&&g.close()}function p(){var e=[],t=i.getImageSelector(),r=i.getDocumentSelector(),n=i.getVideoSelector(),a=l(t+", "+r+", "+n);a.each(function(){var i=l(this).closest("a");i.is(t)&&e.push({type:"image/png",id:i.attr("file-preview-id"),src:f(i),title:i.attr("file-preview-title"),thumbnail:i.attr("file-preview-url")||i.attr("data-download-url")||i.find("img").attr("src")}),i.is(r)&&e.push({type:"application/pdf",id:i.attr("file-preview-id"),src:u(i),title:i.attr("file-preview-title")}),i.is(n)&&e.push({type:i.attr("file-preview-mime-type"),id:i.attr("file-preview-id"),src:f(i),title:i.attr("file-preview-title"),thumbnail:i.attr("file-preview-url")||i.attr("data-download-url")||i.find("img").attr("src")})});var o=c.uniq(e,!1,function(e){return e.id});g.setFiles(o),a.off("simpleClick.fvOpen").on("simpleClick.fvOpen",function(e){e.preventDefault(),g.open({id:l(this).attr("file-preview-id")})})}function w(e){if(g)p();else{var r=i.findFiles(e);r.off("simpleClick.fvInit").on("simpleClick.fvInit",function(e){e.preventDefault();var i=l(this);t.showLoadingIndicator(),AJS.dim(),s().done(function(){p(),g.open({id:i.attr("file-preview-id")})}).fail(function(){window.location=f(i)}).always(function(){r.off("simpleClick.fvInit"),AJS.undim(),l(".aui-blanket").remove(),t.hideLoadingIndicator()})})}}var m,g;return{attachToElements:w,closeViewer:v,addImageSelector:function(e){i.addImageSelector(e)},addDocumentSelector:function(e){i.addDocumentSelector(e)},getFileViewerConstructor:d}});;
;
/* module-key = 'com.atlassian.jira.jira-fileviewer-plugin:atlassian-fileviewer', location = 'jira-fileviewer-module/node_modules/@atlassian/fileviewer/dist/fileviewer-templates.js' */
// This file was automatically generated from main_view.i18n.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace FileViewer.Templates.
 */

if (typeof FileViewer == 'undefined') { var FileViewer = {}; }
if (typeof FileViewer.Templates == 'undefined') { FileViewer.Templates = {}; }


FileViewer.Templates.fileView = function(opt_data, opt_ignored) {
  return '<div id="cp-header" class="aui-group"></div><div id="cp-body" class="aui-group"></div><div id="cp-footer"></div>';
};
if (goog.DEBUG) {
  FileViewer.Templates.fileView.soyTemplateName = 'FileViewer.Templates.fileView';
}


FileViewer.Templates.titleContainer = function(opt_data, opt_ignored) {
  return '<span class="' + soy.$$escapeHtml(opt_data.iconClass) + ' size-24 cp-file-icon"></span>' + soy.$$escapeHtml(opt_data.title);
};
if (goog.DEBUG) {
  FileViewer.Templates.titleContainer.soyTemplateName = 'FileViewer.Templates.titleContainer';
}


FileViewer.Templates.controlDownloadButton = function(opt_data, opt_ignored) {
  return '<a role="button" tabindex="55" id="cp-control-panel-download" href="' + soy.$$escapeHtml(opt_data.src) + '" title="' + soy.$$escapeHtml("Download") + '" class="cp-icon" target="_blank" download>' + soy.$$escapeHtml("Download") + '</a>';
};
if (goog.DEBUG) {
  FileViewer.Templates.controlDownloadButton.soyTemplateName = 'FileViewer.Templates.controlDownloadButton';
}


FileViewer.Templates.controlCloseButton = function(opt_data, opt_ignored) {
  return '<button role="button" tabindex="60" id="cp-control-panel-close" href="#" title="' + soy.$$escapeHtml("Close") + '" class="cp-icon">' + soy.$$escapeHtml("Close") + '</button>';
};
if (goog.DEBUG) {
  FileViewer.Templates.controlCloseButton.soyTemplateName = 'FileViewer.Templates.controlCloseButton';
}


FileViewer.Templates.moreButton = function(opt_data, opt_ignored) {
  return '<button role="button" tabindex="50" id="cp-control-panel-more" aria-owns="cp-more-menu" aria-haspopup="true" class="cp-icon aui-dropdown2-trigger aui-dropdown2-trigger-arrowless" title="' + soy.$$escapeHtml("More") + '">' + soy.$$escapeHtml("More") + '</button><div id="cp-more-menu" class="aui-dropdown2 aui-style-default" data-fv-allow-focus><ul class="aui-list-truncate"></ul></div>';
};
if (goog.DEBUG) {
  FileViewer.Templates.moreButton.soyTemplateName = 'FileViewer.Templates.moreButton';
}


FileViewer.Templates.moreMenuItem = function(opt_data, opt_ignored) {
  return '<li><a href="#">' + soy.$$escapeHtml(opt_data.text) + '</a></li>';
};
if (goog.DEBUG) {
  FileViewer.Templates.moreMenuItem.soyTemplateName = 'FileViewer.Templates.moreMenuItem';
}


FileViewer.Templates.fileComments = function(opt_data, opt_ignored) {
  return '<div id="cp-comments"></div>';
};
if (goog.DEBUG) {
  FileViewer.Templates.fileComments.soyTemplateName = 'FileViewer.Templates.fileComments';
}


FileViewer.Templates.fileBodySpinner = function(opt_data, opt_ignored) {
  return '<div class="cp-spinner"></div>';
};
if (goog.DEBUG) {
  FileViewer.Templates.fileBodySpinner.soyTemplateName = 'FileViewer.Templates.fileBodySpinner';
}


FileViewer.Templates.fileBodyArrows = function(opt_data, opt_ignored) {
  return '<button class="cp-nav" id="cp-nav-left" tabindex=20 disabled-title="' + soy.$$escapeHtml("You\'re viewing the least recent file") + '">' + soy.$$escapeHtml("Go to the previous file") + '</button><button class="cp-nav" id="cp-nav-right" tabindex=20  disabled-title="' + soy.$$escapeHtml("You\'re viewing the most recent file") + '">' + soy.$$escapeHtml("Go to the next file") + '</button>';
};
if (goog.DEBUG) {
  FileViewer.Templates.fileBodyArrows.soyTemplateName = 'FileViewer.Templates.fileBodyArrows';
}
// This file was automatically generated from unknown-file-type-view.i18n.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace FileViewer.Templates.
 */

if (typeof FileViewer == 'undefined') { var FileViewer = {}; }
if (typeof FileViewer.Templates == 'undefined') { FileViewer.Templates = {}; }


FileViewer.Templates.unknownFileTypeViewer = function(opt_data, opt_ignored) {
  return '<div id="cp-unknown-file-type-view"><span class="file-icon size-96 ' + soy.$$escapeHtml(opt_data.iconClass) + '"></span><p class="title">' + soy.$$escapeHtml("Ouch! We can\'t preview this file type.") + '<br>' + soy.$$escapeHtml("Try downloading the file to view it.") + '</p><a class="aui-button download-button" href="' + soy.$$escapeHtml(opt_data.src) + '" target="_blank" download><span class="aui-icon aui-icon-small icon-download"></span>' + soy.$$escapeHtml("Download") + '</a></div><span class="cp-baseline-extension"></span>';
};
if (goog.DEBUG) {
  FileViewer.Templates.unknownFileTypeViewer.soyTemplateName = 'FileViewer.Templates.unknownFileTypeViewer';
}
// This file was automatically generated from layers.i18n.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace FileViewer.Templates.
 */

if (typeof FileViewer == 'undefined') { var FileViewer = {}; }
if (typeof FileViewer.Templates == 'undefined') { FileViewer.Templates = {}; }


FileViewer.Templates.displayError = function(opt_data, opt_ignored) {
  return '<div id="cp-error-message">' + ((opt_data.icon) ? '<span class="file-icon size-96 ' + soy.$$escapeHtml(opt_data.icon) + '"></span>' : '<span class="file-icon size-96 cp-unknown-file-type-icon"></span>') + '<p class="title">' + soy.$$escapeHtml(opt_data.title) + '</p><p class="message">' + soy.$$escapeHtml(opt_data.message) + '</p>' + ((opt_data.srcBrowser) ? '<a class="aui-button download-button" href="' + soy.$$escapeHtml(opt_data.srcBrowser) + '" target="_blank"><span class="aui-icon aui-icon-small icon-download"></span>' + soy.$$escapeHtml("Open in browser") + '</a>' : '') + ((opt_data.srcDownload) ? '<a class="aui-button download-button" href="' + soy.$$escapeHtml(opt_data.srcDownload) + '" target="_blank" download><span class="aui-icon aui-icon-small icon-download"></span>' + soy.$$escapeHtml("Download") + '</a>' : '') + '</div><span class="cp-baseline-extension"></span>';
};
if (goog.DEBUG) {
  FileViewer.Templates.displayError.soyTemplateName = 'FileViewer.Templates.displayError';
}


FileViewer.Templates.passwordLayer = function(opt_data, opt_ignored) {
  return '<div id="cp-preview-password"><span class="cp-password-lock-icon"></span><div class="cp-password-base"><p class="title">' + soy.$$escapeHtml(opt_data.prompt) + '</p><input tabindex="5" type="password" name="password" class="cp-password-input" placeholder="' + soy.$$escapeHtml("Password") + '" autocomplete="off"><button tabindex="10" class="aui-button cp-password-button">' + soy.$$escapeHtml("OK") + '</button></div><div class="cp-password-fullscreen"><p class="title">' + soy.$$escapeHtml("This file is password protected.") + '</p><p class="message">' + soy.$$escapeHtml("Due to technical reasons you have to leave presentation mode to enter the password.") + '</p></div></div><span class="cp-baseline-extension"></span>';
};
if (goog.DEBUG) {
  FileViewer.Templates.passwordLayer.soyTemplateName = 'FileViewer.Templates.passwordLayer';
}


FileViewer.Templates.waitingMessage = function(opt_data, opt_ignored) {
  return '<div id="cp-waiting-message"><span class="file-icon size-96 cp-waiting-message-spinner"></span><p class="title">' + soy.$$escapeHtml(opt_data.header) + '</p><p class="message">' + soy.$$escapeHtml(opt_data.message) + '</p><a class="aui-button download-button" href="' + soy.$$escapeHtml(opt_data.src) + '" target="_blank" download><span class="aui-icon aui-icon-small icon-download"></span>' + soy.$$escapeHtml("Download") + '</a></div><span class="cp-baseline-extension"></span>';
};
if (goog.DEBUG) {
  FileViewer.Templates.waitingMessage.soyTemplateName = 'FileViewer.Templates.waitingMessage';
}


FileViewer.Templates.toolbar = function(opt_data, opt_ignored) {
  var output = '<div class="cp-toolbar">';
  var actionList55 = opt_data.actions;
  var actionListLen55 = actionList55.length;
  for (var actionIndex55 = 0; actionIndex55 < actionListLen55; actionIndex55++) {
    var actionData55 = actionList55[actionIndex55];
    output += '<button tabindex="' + soy.$$escapeHtml(actionIndex55 + 10) + '" class="' + soy.$$escapeHtml(actionData55.className) + ' cp-icon" title="' + soy.$$escapeHtml(actionData55.title) + '">' + soy.$$escapeHtml(actionData55.title) + '</button>';
  }
  output += '</div>';
  return output;
};
if (goog.DEBUG) {
  FileViewer.Templates.toolbar.soyTemplateName = 'FileViewer.Templates.toolbar';
}
;
;
/* module-key = 'com.atlassian.jira.jira-fileviewer-plugin:atlassian-fileviewer', location = 'jira-fileviewer-module/node_modules/@atlassian/fileviewer/dist/fileviewer.js' */
(function () {
    'use strict';

// holds module definitions used for setup and dependency tracking
var _modules = {};

// defines a new module with the given dependencies and factory function
var define = function (name, dependencies, factoryFn) {
    _modules[name] = {
      deps: dependencies,
      factory: factoryFn,
      value: null
    };
};

// recursively require module and its dependencies
// caches the results so that every module is instantiated only once
var require = function (name, mocks) {
    var module = require._normalizeMocks(mocks)[name] || _modules[name];
    if (!module) { throw new Error('module not found ' + name); }
    if (!module.value) {
      module.value = module.factory.apply(null, module.deps.map(function (name) {
        return require(name, mocks);
      }));
    }
    return module.value;
};

require._normalizeMocks = function (mocks) {
  if (!mocks) { return {}; }
  var normalizedMocks = {};
  Object.keys(mocks).forEach(function (key) {
    normalizedMocks[key] = {
      deps: [],
      factory: function () { return mocks[key]; },
      value: null
    };
  });
  return normalizedMocks;
};

// define FileViewer dependencies
define('jquery',     [], function () { return jQuery;   });
define('underscore', [], function () { return _;        });
define('backbone',   [], function () { return Backbone; });
define('ajs',        [], function () { return AJS;      });

define('3d-view-provider', [
  'jquery'
], function (
  $
) {
  'use strict';

  /**
   * Returns a video viewer.
   * @returns {Promise}
   */
  var threeDViewProvider = function () {
    return $.Deferred().resolve(require('3d-view'));
  };

  return threeDViewProvider;
});
define('Analytics', ['underscore'], function (_) {
  'use strict';

  /**
   * Augments data and forwards them to a configured analytics backend.
   *
   * An analytics backend is just a function that accepts a key and a data
   * object. It is also responsible for filtering incoming data.
   *
   * For all data send, this module fetches current file and view state
   * and adds them to the data. The added keys are
   * - fileType
   * - fileId (hashed version of the file src)
   * - fileState (value of view state)
   *
   * @param analyticsBackend
   * @param fileViewer
   * @param hasher
   * @returns {Analytics}
   * @constructor
   */
  var Analytics = function (backend, fileViewer, hasher) {
    this._backend = backend;
    this._fileViewer = fileViewer;
    this._hasher = hasher;
  };

  /**
   * Forwards an analytics event to the configured backend.
   * @param {string} key
   * @param {Object} data
   */
  Analytics.prototype.send = function (key, data) {
    if (!this._backend) { return; }
    var file = this._fileViewer.getCurrentFile();
    var attributes = (file && file.attributes) || {};
    var augmentedData = _.extend({
      fileType: attributes.type,
      fileId: this._hasher(attributes.src || ''),
      fileState: this._fileViewer.getView().getViewState()
    }, data);
    this._backend(key, augmentedData);
  };

  /**
   * Returns a partially applied analytics function for use inside of
   * promise handlers.
   * @param {string} key
   * @param {object} data
   * @returns {function}
   */
  Analytics.prototype.fn = function (key, data) {
    return this.send.bind(this, key, data);
  };

  return Analytics;
});

define('ArrowLayer', [
  'backbone', 'template-store-singleton'
], function (
  Backbone, templateStore
) {
  'use strict';

  var AJS = window.AJS;

  /**
   * Controls to switch between multiple files in a collection.
   * @constructor
   */
  var ArrowLayer = Backbone.View.extend({

    className: 'cp-arrow-layer',

    events: {
      'click #cp-nav-left:not(.disabled)': 'gotoPrevious',
      'click #cp-nav-right:not(.disabled)': 'gotoNext'
    },

    initialize: function (options) {
      this._fileViewer = options.fileViewer;
      this.listenTo(this._fileViewer._fileState.collection, 'add reset', this.checkAndHideNavigation);
      this._visibleArrows = false;
      this._updateElements();
    },

    render: function () {
      this.$el.html(templateStore.get('fileBodyArrows')()).hide();
      this._updateElements();
      this.checkAndHideNavigation();

      return this;
    },

    /**
     * Show next file in collection.
     */
    gotoNext: function () {
      this._fileViewer.showFileNext().always(
        this._fileViewer.analytics.fn('files.fileviewer-web.next', {
          actionType: 'button',
          mode: this._fileViewer.getMode()
        })
      );
    },

    /**
     * Show previous file in collection.
     */
    gotoPrevious: function () {
      this._fileViewer.showFilePrev().always(
        this._fileViewer.analytics.fn('files.fileviewer-web.prev', {
          actionType: 'button',
          mode: this._fileViewer.getMode()
        })
      );
    },

    /**
     * Enable disabled navigation arrow again and remove tooltip
     */
    enableArrow: function ($arrow) {
      $arrow.removeClass('disabled');
      $arrow.removeAttr('original-title');
    },

    /**
     * Disable navigation arrow and add tooltip
     * @param  {Object} options
     * @param  {Object} options.arrow
     * @param  {String} options.tooltipText
     * @param  {String} options.tooltipGravity
     */
    disableArrow: function (options) {
      options.arrow.addClass('disabled');
      options.arrow.attr('original-title', options.tooltipText);
      options.arrow.tooltip({ gravity: options.tooltipGravity });
    },

    /**
     * Returns true if either the left or right navigation arrow is shown
     * @return {Boolean}
     */
    showsArrow: function () {
      return this._visibleArrows;
    },

    /**
     * Check if controls should appear.
     * If there's only a single file in the collection, we don't show them.
     */
    checkAndHideNavigation: function () {
      if (this._fileViewer._fileState.collection.length <= 1) {
        this._visibleArrows = false;
        return this.$arrows.hide();
      }
      this.$arrows.show();
      this._visibleArrows = true;
      if (this._fileViewer.getConfig().enableListLoop) {
        return;
      }
      if (this._fileViewer.isShowingLastFile()) {
        this.disableArrow({
          arrow: this.$arrowRight,
          tooltipText: "You\'re viewing the most recent file",
          tooltipGravity: 'e'
        });
      } else if (this._fileViewer.isShowingFirstFile()) {
        this.disableArrow({
          arrow: this.$arrowLeft,
          tooltipText: "You\'re viewing the least recent file",
          tooltipGravity: 'w'
        });
      }
    },

    _updateElements: function () {
      this.$arrows = this.$el.find('.cp-nav');
      this.$arrowLeft = this.$el.find('#cp-nav-left');
      this.$arrowRight = this.$el.find('#cp-nav-right');
    }

  });

  return ArrowLayer;
});

define('assert',
  [],
  function () {

    /**
     * Throws an error if given predicate is falsy.
     *
     * @param {*} predicate
     * @param {string} description Used for the error message.
     */
    var assert = function (predicate, description) {
      description = description || 'untruthy value';

      if (!predicate) {
        throw new Error('Assertion failed: ' + description);
      }
    };

    return assert;
  }
);

define('asset-module-backend', [], function () {
  'use strict';

  return function (fileViewer) {

    /**
     * Assumes that all modules are included as static assets and therefore
     * already loaded. Uses FileViewer.getConfig().assets for the
     * module configuration.
     *
     * @param {String} moduleName
     * @return {Promise}
     */

    return function (moduleName) {
      if (moduleName === 'pdf-config') {
        return fileViewer.getConfig().assets['pdf-config'] || {};
      }
    };
  };

});
define('baseMode', ['jquery', 'keyboard'], function ($, keyboard) {
  'use strict';

  var AJS = window.AJS;

  var baseMode = {

    activateHook: function (mainView) {
      mainView.$el.on('click #cp-file-body', mainView._onClickToBackground.bind(mainView));
      var $arrowLayer = mainView.fileContentView.getLayerForName('arrows').$el;
      $arrowLayer.toggle(this.showsArrowLayer);
    },

    deactivateHook: function (mainView) {
      mainView.$el.off('click #cp-file-body');
    },

    setup: function (mainView, viewer) {
      viewer && viewer.$el.on('click.contentView', viewer._clickedBackgroundToClose.bind(viewer));
      $(document).on('keydown.modeKeys', this._handleKeys.bind(mainView));
    },

    teardown: function (mainView, viewer) {
      viewer && viewer.$el.off('click.contentView');
      $(document).off('keydown.modeKeys');
    },

    showsArrowLayer: true,

    _handleKeys: function (e) {
      var contentView, viewer;

      if (this.fileContentView.isLayerInitialized('content')) {
        contentView = this.fileContentView.getLayerForName('content');
        viewer = contentView.getAttachedViewer();
      }

      if (!viewer || !(e.ctrlKey || e.metaKey)) { return; }

      if (
        e.which === keyboard.keys.PLUS ||
        e.which === keyboard.keys.PLUS_NUMPAD ||
        e.which === keyboard.keys.PLUS_FF
      ) {
        if (viewer.zoomIn) {
          this._fileViewer.analytics.send('files.fileviewer-web.file.zoomin', {
            actionType: 'hotkey'
          });
          viewer.zoomIn();
        }
        e.preventDefault();
      }

      if (
        e.which === keyboard.keys.MINUS ||
        e.which === keyboard.keys.MINUS_NUMPAD ||
        e.which === keyboard.keys.MINUS_FF
      ) {
        if (viewer.zoomOut) {
          this._fileViewer.analytics.send('files.fileviewer-web.file.zoomout', {
            actionType: 'hotkey'
          });
          viewer.zoomOut();
        }
        e.preventDefault();
      }

    },

    toolbarActions: [
      {
        title: "Zoom out",
        className: 'cp-toolbar-minus',
        predicate: function () {
          return this._viewer && this._viewer.zoomOut;
        },
        handler: function () {
          if (this._viewer && this._viewer.zoomOut) {
            this._fileViewer.analytics.send('files.fileviewer-web.file.zoomout', {
              actionType: 'button'
            });
            this._viewer.zoomOut();
          }
        }
      },
      {
        title: "Zoom in",
        className: 'cp-toolbar-plus',
        predicate: function () {
          return this._viewer && this._viewer.zoomIn;
        },
        handler: function () {
          if (this._viewer && this._viewer.zoomIn) {
            this._fileViewer.analytics.send('files.fileviewer-web.file.zoomin', {
              actionType: 'button'
            });
            this._viewer.zoomIn();
          }
        }
      },
      {
        title: "Fit to page",
        className: 'cp-toolbar-fit',
        predicate: function () {
          return this._viewer && this._viewer.zoomFit;
        },
        handler: function () {
          if (this._viewer && this._viewer.zoomFit) {
            this._fileViewer.analytics.send('files.fileviewer-web.file.zoomfit', {
              actionType: 'button'
            });
            this._viewer.zoomFit();
          }
        }
      },
      {
        title: "Start Presentation",
        className: 'cp-toolbar-presentation',
        predicate: function () {
          return this._viewer && this._fileViewer.getConfig().enablePresentationMode;
        },
        handler: function () {
          this._fileViewer.analytics.send('files.fileviewer-web.presentation.enter');
          this._fileViewer.changeMode('PRESENTATION');
        }
      }
    ]
  };

  return baseMode;
});

define('BaseViewer', [
  'jquery', 'underscore', 'backbone'
], function ($, _, Backbone) {
  'use strict';

  /**
   * Base class for viewers.
   * @constructor
   */
  var BaseViewer = Backbone.View.extend({

    // Event listeners specific to this view namespaced to prevent collisions with its children.

    contentViewEvents: {
      'click.contentView': '_clickedBackgroundToClose',
      'mousedown.contentView': '_mousedownContentView'
    },

    // Merge events with children's event object to bind all event handlers

    initialize: function (options) {
      this.events = _.extend(this.events || {}, this.contentViewEvents);

      this._fileViewer = options.fileViewer;
      this._previewSrc = options.previewSrc;
      this._mousedownBackground = null;
    },

    teardown: function () {},

    // Listen to clicks to the background and eventually close the fileViewer.
    //
    // A viewer can specify getBackground if their background element isn't their contents

    _mousedownContentView: function (e) {
      var $background = this.getBackground ? this.getBackground() : this.$el;
      this._mousedownBackground = $(e.target).is($background);
    },

    _clickedBackgroundToClose: function (e) {
      // @TODO: Remove after cleaning modes setup, hooks etc.
      var mode = this._fileViewer._view._modes[this._fileViewer._view._mode];
      if (mode.disableClickBackgroundCloses) {
        return;
      }
      var $background = this.getBackground ? this.getBackground() : this.$el;
      if (this._mousedownBackground && $(e.target).is($background)) {
        this._fileViewer.analytics.send('files.fileviewer-web.closed', {
          actionType: 'element'
        });
        this._fileViewer.close();
      }
    },

    // This function is called whenever the viewport of the viewer changes size,
    // e.g. when a panel is opened or closed. Overwrite this function if you want
    // custom behaviour.
    handleResize: function () {}

  });

  return BaseViewer;
});

define('CloseButton', [
  'backbone', 'template-store-singleton'
], function (Backbone, templateStore) {
  'use strict';

  var CloseButton = Backbone.View.extend({

    className: 'fv-close-button',

    events: {
      'click': '_close'
    },

    tagName: 'span',

    initialize: function (options) {
      this._fileViewer = options.fileViewer;
    },

    render: function () {
      this.$el.html(templateStore.get('controlCloseButton')());

      this.$('button').tooltip({ gravity: 'n' });

      return this;
    },

    _close: function (e) {
      e.preventDefault();
      this._fileViewer.analytics.send('files.fileviewer-web.closed', {
        actionType: 'button'
      });
      this._fileViewer.close();
    }
  });

  return CloseButton;
});

define('Commands', ['jquery', 'ajs', 'file'], function ($, AJS, File) {
  'use strict';

  // helper for $.reject()
  var rejectWithError = function (msg) {
    return new $.Deferred().reject(
      new Error(msg)
    ).promise();
  };

  /**
   * A couple of commands used by the MainView.showFile() method. It's intend is to break
   * up the long method into smaller, more testable pieces.
   * @module
   */
  var Commands = {};

  /**
   * A command that looks-up a viewer for a file.
   * @constructor
   * @param {File} originalFile
   * @param {ViewerRegistry} viewerRegistry
   */
  Commands.LookupViewer = function (originalFile, viewerRegistry) {
    this._originalFile = originalFile;
    this._viewerRegistry = viewerRegistry;
  };

  /**
   * Execute this command.
   * @param {string} previewSrc
   * @param {string} previewType
   * @param {object} overwrites
   * @returns {Promise<Viewer, string, File>} promises the viewer to use, the previewSrc and the converted file.
   */
  Commands.LookupViewer.prototype.execute = function (previewSrc, previewType, overwrites) {
    var convertedFile = new File(this._originalFile.toJSON());

    convertedFile.set(overwrites);

    convertedFile.set('type', previewType);
    convertedFile.set('src', previewSrc);

    var loadViewer = this._viewerRegistry.get(previewType);

    if (!loadViewer) {
      return rejectWithError("There is not viewer for this file type.");
    }
    var dfd = $.Deferred();
    loadViewer().then(function (Viewer) {
      dfd.resolve(Viewer, previewSrc, convertedFile);
    }).fail( function () {
      dfd.fail(arguments);
    });

    return dfd.promise();
  };

  return Commands;
});

define('defaultConfig', [], function () {
  /**
   * FileViwers configuration options:
   *
   * - appendTo {DOMNode} [$('body')] - DOM Element to append to
   * - files {Array} - An array of file objects
   * - commentService {Object} - Comments service
   * - templateBackend {Function} - Provides templates for a given name
   * - moduleBackend {Function} - Provides modules for a given name
   * - pdfTransportFactory {Function} - cb(currentFile):Promise<PDFTransport>
   * - enableListLoop {Boolean} [true] - Allow to navigate from end to start of file list and v.v.
   * - enablePresentationMode {Boolean} [true] - Allow switching to presentation mode
   * - preloadImagesAfterCurrent {Number} [2] - Files after current to preload if they are images.
   * - preloadImagesBeforeCurrent {Number} [0] - Files before current to preload if they are images.
   * - videoDefaultQualityHd {Boolean} [true] - By default play HD content if available
   * - customStorage {Object} [null] - Custom storage object with setItem, getItem, removeItem methods
   *
   * @exports defaultConfig
   */
  return {
    enableListLoop: true,
    enablePresentationMode: true,
    preloadImagesAfterCurrent: 2,
    preloadImagesBeforeCurrent: 0,
    videoDefaultQualityHd: true,
    customStorage: null,
    viewers: ['image', 'document', 'video', '3d'],
    embedded: false
  };
});

define('constants-dictionary', [
  'assert'
], function (
  assert
) {
  'use strict';

  /**
   * A constants dictionary is a dictionary where you can only define a
   * given name once.
   */
  var ConstantsDictionary = function () {
    this._valuesByName = {};
    this._names = [];
  };

  /**
   * Define a name with the given value.
   * @param {string} name The name that is being defined.
   * @param {*} value Any value, even undefined.
   * @throws Error if name is already defined.
   */
  ConstantsDictionary.prototype.define = function (name, value) {
    assert(!this.isDefined(name), 'name is unique');
    this._valuesByName[name] = value;
    this._names.push(name);
  };

  /**
   * Lookup a name with the given value.
   * @param {string} name The name to lookup.
   * @throws Error if name is not yet defined.
   */
  ConstantsDictionary.prototype.lookup = function (name) {
    assert(this.isDefined(name), 'name is defined');
    return this._valuesByName[name];
  };

  /**
   * Check if a name is defined.
   * @param {string} name The name to check.
   * @return {boolean}
   */
  ConstantsDictionary.prototype.isDefined = function (name) {
    return name in this._valuesByName;
  };

  /**
   * Lists all definitions in the order they were defined. Returns an array of objects
   * with name and value properties.
   * @return {Array}
   */
  ConstantsDictionary.prototype.list = function () {
    return this._names.map(function (name) {
      return {
        name: name,
        value: this._valuesByName[name]
      };
    }, this);
  };

  return ConstantsDictionary;
});
define('djb2', [], function () {

  var toCharCode = function (str) { return str.charCodeAt(0); };
  var updateHash = function (prev, curr) { return ((prev << 5) + prev) + curr; };

  /**
   * Create a djb2 hash from the given string.
   * Based on this module https://github.com/wearefractal/djb2.
   * @param {String} str
   * @returns {Number}
   */
  var djb2 = function (str) {
    return str.split('').map(toCharCode).reduce(updateHash, 5381);
  };

  return djb2;
});
define('DownloadButton', [
  'backbone', 'template-store-singleton'
], function (Backbone, templateStore) {
  'use strict';

  var DownloadButton = Backbone.View.extend({

    tagName: 'span',

    events: {
      'click': '_triggerAnalytics'
    },

    initialize: function (options) {
      this._fileViewer = options.fileViewer;
      this._model = this._fileViewer.getCurrentFile();
    },

    render: function () {
      this.$el.html(templateStore.get('controlDownloadButton')({
        src: this._model.get('srcDownload') || this._model.get('src')
      }));

      this.$('a').tooltip({ gravity: 'n' });

      return this;
    },

    _triggerAnalytics: function () {
      this._fileViewer.trigger('fv.download');
      this._fileViewer.analytics.send('files.fileviewer-web.file.download', {
        actionType: 'button'
      });
    }

  }, {
    isDownloadable: function (fileViewer) {
      var file = fileViewer.getCurrentFile();
      return file && file.get('downloadable');
    }
  });

  return DownloadButton;
});

define('ErrorLayer', [
  'ajs', 'backbone', 'template-store-singleton'
], function (AJS, Backbone, templateStore) {
  'use strict';

  var ErrorLayer = Backbone.View.extend({

    className: 'cp-error-layer',

    initialize: function () {
      this.$el.hide();
    },

    showErrorMessage: function (err, file) {
      var title, description, icon, srcDownload, srcBrowser;
      title = err.title || "Ouch! We can\'t preview this file.";
      description = err.description || err.toString();
      icon = err.icon || false;
      srcBrowser = err.browser ? file.get('src') : false;
      srcDownload = err.download ? file.get('srcDownload') || file.get('src') : false;
      this.$el.show().html(templateStore.get('displayError')({
        title: title,
        message: description,
        icon: icon,
        srcBrowser: srcBrowser,
        srcDownload: srcDownload
      }));
    }

  });

  return ErrorLayer;
});

define('file-state',
  [
    'backbone'
  ],
  function (
    Backbone
    ) {
    'use strict';

    var FileState = Backbone.Model.extend({

      defaults: {
        currentFileIndex: -1,
        isNewFileUploaded: false
      },

      setCollection: function (collection) {
        this.collection = collection;
      },

      setNext: function () {
        var currentFileIndex = this.get('currentFileIndex');
        if (currentFileIndex < (this.collection.length - 1)) {
          this.set({currentFileIndex: this.get('currentFileIndex') + 1});
        } else {
          this.set({currentFileIndex: 0});
        }
      },

      setPrev: function () {
        var currentFileIndex = this.get('currentFileIndex');
        if (currentFileIndex > 0) {
          this.set({currentFileIndex: this.get('currentFileIndex') - 1});
        } else {
          this.set({currentFileIndex: this.collection.length - 1});
        }
      },

      setNoCurrent: function () {
        this.set({ currentFileIndex: -1 });
      },

      setCurrentFileIndex: function (index) {
        if ((index > -1) && (index < this.collection.length)) {
          return this.set({currentFileIndex: index});
        }
      },

      setCurrentWithCID: function (cid) {
        return this.setCurrentFileIndex(this.collection.getIndexWithCID(cid));
      },

      getCurrent: function () {
        var current = this.collection.at(this.get('currentFileIndex'));
        return current || null;
      },

      selectWhere: function (selector) {
        if (selector) {
          var selected = this.collection.findWhere(selector);
          if (selected) {
            this.setCurrentWithCID(selected.cid);
          }
        } else if (this.collection.length >= 1) {
          this.setCurrentFileIndex(0);
        }
      },

      replaceCurrent: function (file) {
        var idx = this.get('currentFileIndex');
        this.collection.remove(this.collection.at(idx));
        this.collection.add(file, {at: idx});
      },

      setCurrentWithQuery: function (query) {
        var file = this.collection.findWhere(query);

        if (file) {
          this.setCurrentWithCID(file.cid);
        } else {
          this.setNoCurrent();
        }
      }

    });

    return FileState;
  });

define('file-types', [
],
  function (
    ) {
    'use strict';

    var browserSupportedImageTypes = [
      'image/gif',
      'image/jpeg',
      'image/png',
      'image/svg+xml',
      'image/web',
      'image/bmp'
    ];

    var browserSupportedMultimediaTypes = [
      'video/mp4',
      'video/m4v',
      'video/youtube',
      'audio/mp3',
      'audio/mpeg'
    ];

    var toLowerType = function (type) {
      return type && type.toLowerCase() || '';
    };

    var fileTypes = {
      isPDF: function (type) {
        var lowerType = toLowerType(type);
        return lowerType === 'application/pdf';
      },

      isText: function (type) {
        var lowerType = toLowerType(type);
        return lowerType === 'text/plain';
      },

      isCode: function (type) {
        var lowerType = toLowerType(type);
        return lowerType === 'text/java'
          || lowerType === 'text/css'
          || lowerType === 'text/html'
          || lowerType === 'text/javascript'
          || lowerType === 'text/xml';
      },

      isMultimedia: function (type) {
        var lowerType = toLowerType(type);
        return /^video\/.*/i.test(type)
          || /^audio\/.*/i.test(type)
          || lowerType === 'application/x-shockwave-flash'
          || lowerType === 'application/vnd.rn-realmedia'
          || lowerType === 'application/x-oleobject';
      },

      isArchive: function (type) {
        var lowerType = toLowerType(type);
        return lowerType === 'application/zip'
          || lowerType === 'application/java-archive';
      },

      isImage: function (type) {
        return /^image\/.*/i.test(type);
      },

      isVideo: function (type) {
        var lowerType = toLowerType(type);
        return /^video\/.*/i.test(type) || lowerType === 'video';
      },

      isAudio: function (type) {
        var lowerType = toLowerType(type);
        return /^audio\/.*/i.test(type) || lowerType === 'audio';
      },

      isYoutube: function (type) {
        var lowerType = toLowerType(type);
        return 'video/youtube' === lowerType;
      },

      isImageBrowserSupported: function (type) {
        return browserSupportedImageTypes.indexOf(type.toLowerCase()) !== -1;
      },

      isMultimediaBrowserSupported: function (type) {
        return browserSupportedMultimediaTypes.indexOf(type.toLowerCase()) !== -1;
      },

      isWordProcessing: function (type) {
        var lowerType = toLowerType(type);
        return lowerType === 'application/msword'
          || /^application\/vnd.ms-word.*/i.test(type)
          || /^application\/vnd.openxmlformats-officedocument.wordprocessingml.*/i.test(type);
      },

      isSpreadsheet: function (type) {
        var lowerType = toLowerType(type);
        return lowerType === 'application/msexcel'
          || /^application\/vnd.ms-excel.*/i.test(type)
          || /^application\/vnd.openxmlformats-officedocument.spreadsheet.*/i.test(type);
      },

      isPresentation: function (type) {
        var lowerType = toLowerType(type);
        return lowerType === 'application/mspowerpoint'
          || /^application\/vnd.ms-powerpoint.*/i.test(type)
          || /^application\/vnd.openxmlformats-officedocument.presentationml.*/i.test(type);
      },

      is3D: function (type) {
        var lowerType = toLowerType(type);
        return lowerType === 'application/x-sea';
      },

      matchAll: function () { return true; }
    };

    return fileTypes;
  });

define('file-viewer', [
  'jquery',
  'underscore',
  'backbone',
  'assert',
  'constants-dictionary',
  'MainView',
  'file-state',
  'files',
  'file',
  'soy-template-backend',
  'asset-module-backend',
  'template-store-singleton',
  'module-store-singleton',
  'viewer-registry',
  'file-types',
  'defaultConfig',
  'storage',
  'image-view-provider',
  'pdf-view-provider',
  'video-view-provider',
  '3d-view-provider',
  'unknown-file-type-view-provider',
  'Analytics',
  'djb2'
],
function (
  $,
  _,
  Backbone,
  assert,
  ConstantsDictionary,
  MainView,
  FileState,
  Files,
  File,
  soyTemplateBackend,
  assetModuleBackend,
  templateStore,
  moduleStore,
  ViewerRegistry,
  fileTypes,
  defaultConfig,
  Storage,
  imageViewProvider,
  pdfViewProvider,
  videoViewProvider,
  threeDViewProvider,
  unknownFileTypeViewProvider,
  Analytics,
  djb2
) {
  'use strict';

  /**
   * Core API to integrate FileViewer into a project.
   *
   * @class
   * @alias FileViewer
   * @param {Object} config
   * @throws {Error} if config is invalid
   */
  var FileViewer = function (config) {
    config = _.defaults(config || {}, defaultConfig);
    config.appendTo = config.appendTo || $('body');
    FileViewer._instanceCount += 1;
    config.instanceId = FileViewer._instanceCount;

    templateStore.useBackend(config.templateBackend || soyTemplateBackend(this));
    moduleStore.useBackend(config.moduleBackend || assetModuleBackend(this));
    
    this._config = config;
    this._properties = new Backbone.Model();

    this._fileState = new FileState();
    this._viewerRegistry = new ViewerRegistry();
    this._analytics = new Analytics(config.analyticsBackend, this, djb2);

    if (config.viewers.indexOf('image') !== -1) {
      this._viewerRegistry.register(fileTypes.isImageBrowserSupported, imageViewProvider, 0);
    }
    if (config.viewers.indexOf('document') !== -1) {
      this._viewerRegistry.register(fileTypes.isPDF, pdfViewProvider, 0);
    }
    if (config.viewers.indexOf('video') !== -1) {
      this._viewerRegistry.register(fileTypes.isMultimediaBrowserSupported, videoViewProvider, 0);
    }
    if (config.viewers.indexOf('3d') !== -1) {
      this._viewerRegistry.register(fileTypes.is3D, threeDViewProvider, 0);
    }

    // set fallback viewer
    this._viewerRegistry.register(fileTypes.matchAll, unknownFileTypeViewProvider, 100);

    this._files = new Files(config.files || [], {
      service: config.commentService
    });
    this._fileState.setCollection(this._files);

    this._view = new MainView({
      model: new Backbone.Model({
        fileViewer: this,
        instanceId: config.instanceId,
        embedded: config.embedded
      })
    });

    this._isOpen = false;

    this._storage = new Storage(this.getConfig().customStorage, 'fileViewer.');

    FileViewer._plugins.list()
      .map(function (definition) { return definition.value; })
      .forEach(function (plugin) { plugin(this); }, this);
  };

  // internal nondecreasing counter
  FileViewer._instanceCount = 0;

  // privately expose available modules for debugging purposes
  // _modules is defined support/require.js
  /* eslint-disable no-undef */
  FileViewer._modules = _modules;
  /* eslint-enable no-undef*/

  // keeps track of registered plugins
  FileViewer._plugins = new ConstantsDictionary();

  /**
   * Current version of this build.
   *
   * @type {String}
   */
  FileViewer.VERSION = '-dirty'; // replaced during build

  /**
   * Define a new module for the use with FileViewer.require().
   *
   * Be careful with the naming, because module names can be overwritten.
   *
   * @method
   * @param {String} moduleName
   * @param {Array} dependencies
   * @param {Function} factory
   */
  FileViewer.define = define;

  /**
   * Require a previously defined module by name.
   *
   * @method
   * @param {String} moduleName
   * @returns {*}
   */
  FileViewer.require = require;

  /**
   * Register a new plugin for use with FileViewer.
   *
   * @param {String} name
   * @param {Function} plugin
   * @throws {Error} if plugin is invalid or name already exists.
   */
  FileViewer.registerPlugin = function (name, plugin) {
    assert(this.isPlugin(plugin), 'is a plugin');
    this._plugins.define(name, plugin);
  };

  /**
   * Returns if a plugin is enabled for use with FileViewer.
   *
   * @param {String} name
   */
  FileViewer.isPluginEnabled = function (name) {
    return this._plugins.isDefined(name);
  };

  /**
   * Gets a plugin registered for use with FileViewer.
   *
   * @param {String} name
   * @throws {Error} if plugin is invalid or name does not already exists.
   */
  FileViewer.getPlugin = function (name) {
    return this._plugins.lookup(name);
  };

  /**
   * Checks if the given object is a valid plugin.
   *
   * @param {*} potentialPlugin
   * @returns {Boolean}
   */
  FileViewer.isPlugin = function (potentialPlugin) {
    return _.isFunction(potentialPlugin);
  };

  /**
   * Support .on(), .off() and .trigger().
   */
  _.extend(FileViewer.prototype, Backbone.Events);

  /**
   * Instance of the analytics module, use this to send analytics from your plugins.
   */
  Object.defineProperty(FileViewer.prototype, 'analytics', {
    get: function () { return this._analytics; }
  });

  /**
   * The instance of FileViewer was opened.
   *
   * @event FileViewer~'fv.open'
   */

  /**
   * Open this instance of FileViewer by appending it to the configured element. This needs to be called
   * before showing a file.
   *
   * When a fileQuery object is passed in, this file is shown and a special analytics event is triggered.
   * When you want to record, where this interaction is comming from, pass in
   * an additional analyticsSource
   *
   * @param {Object} [fileQuery]
   * @param {String} [analyticsSource]
   * @fires {FileViewer~'fv.open'}
   */
  FileViewer.prototype.open = function (fileQuery, analyticsSource) {
    this._view.render().show().$el.appendTo(this._config.appendTo);
    this._view.delegateEvents();

    this._isOpen = true;
    this.trigger('fv.open');

    if (fileQuery) {
      this.showFileWithQuery(fileQuery).always(
        this.analytics.fn('files.fileviewer-web.opened', {source: analyticsSource})
      );
    }
  };

  /**
   * The instance of FileViewer was closed.
   *
   * @event FileViewer~'fv.close'
   */

  /**
   * Shut down this instance of FileViewer by removing it from the configured element. Reset current file.
   *
   * @fires {FileViewer~'fv.close'}
   */
  FileViewer.prototype.close = function () {
    this._view._currentFile = null;
    this._view.undelegateEvents();
    this._view
      .hide()
      .$el.remove();

    this._isOpen = false;
    this.trigger('fv.close');
  };

  /**
   * Check if FileViewer is currently open.
   *
   * @returns {Boolean}
   */
  FileViewer.prototype.isOpen = function () {
    return this._isOpen;
  };

  /**
   * The current file was changed and is about to be shown.
   *
   * @event FileViewer~'fv.changeFile'
   */

  /**
   * The current file has been rendered successfully.
   *
   * @event FileViewer~'fv.showFile'
   */

  /**
   * The current file has **not** been rendered successfully.
   *
   * @event FileViewer~'fv.showFileError'
   */

  /**
   * Show file that matches the given attribute query.
   *
   * A query is basically a set of values for certain keys that you want to match on. To match the file with id='a'
   * and src='test'.
   *
   *     {
   *     id: 'a',
   *     src: 'test'
   *     }
   *
   * @param {Object} query
   * @returns {Promise.<File>}
   * @fires {FileViewer~'fv.changeFile'}
   * @fires {FileViewer~'fv.showFile'}
   * @fires {FileViewer~'fv.showFileError'}
   */
  FileViewer.prototype.showFileWithQuery = function (query) {
    this._fileState.setCurrentWithQuery(query);
    var file = this._fileState.getCurrent();
    return this.showFile(file);
  };

  /**
   * Show the next file in the collection.
   *
   * @returns {Promise.<File>}
   * @fires {FileViewer~'fv.changeFile'}
   * @fires {FileViewer~'fv.showFile'}
   * @fires {FileViewer~'fv.showFileError'}
   */
  FileViewer.prototype.showFileNext = function () {
    if (this.isShowingLastFile() && !this.getConfig().enableListLoop) {
      return $.when();
    }
    this._fileState.setNext();
    return this.showFile(this._fileState.getCurrent());
  };

  /**
   * Show the previous file in the collection.
   *
   * @returns {Promise.<File>}
   * @fires {FileViewer~'fv.changeFile'}
   * @fires {FileViewer~'fv.showFile'}
   * @fires {FileViewer~'fv.showFileError'}
   */
  FileViewer.prototype.showFilePrev = function () {
    if (this.isShowingFirstFile() && !this.getConfig().enableListLoop) {
      return $.when();
    }
    this._fileState.setPrev();
    return this.showFile(this._fileState.getCurrent());
  };

  /**
   * FileViewer#setFiles() was called.
   * @event FileViewer~'fv.setFiles'
   */

  /**
   * Set both the list of files as well as the current file.
   *
   * Ensures that the updated current file is shown if the viewer is open. Viewer caching might prevent a full
   * re-render.
   *
   * If no query is given or the query doesn't match a file in the collection, the current file is set to `null`,
   * causing an error message to be shown if the viewer is open.
   *
   * @param {Array.<Object>} newFiles
   * @param {Object} [nextFileQuery=null]
   * @fires {FileViewer~'fv.setFiles'}
   */
  FileViewer.prototype.setFiles = function (newFiles, nextFileQuery) {
    this._files.reset(newFiles);
    this._fileState.setCurrentWithQuery(nextFileQuery);

    this.trigger('fv.setFiles');

    if (this.isOpen()) {
      this.showFile(this._fileState.getCurrent());
    }
  };

  /**
   * Returns the file being shown in this viewer.
   *
   * @returns {Object} the file being shown
   */
  FileViewer.prototype.getCurrent = function () {
    var currentFile = this._view.getCurrentFile();
    return currentFile && currentFile.toJSON();
  };

  /**
   * Returns the file being shown in this viewer as a backbone model.
   *
   * **Note**: This method is deprecated, because it exposes a backbone model. See #getCurrent() instead.
   *
   * @returns {File} the file being shown
   * @deprecated
   */
  FileViewer.prototype.getCurrentFile = function () {
    return this._view.getCurrentFile();
  };

  /**
   * Returns the current files collection.
   *
   * @returns {Array.<Object>}
   */
  FileViewer.prototype.getFiles = function () {
    return this._files.toJSON();
  };

  /**
   * Check if current file is the first one in the files collection.
   *
   * @returns {Boolean}
   */
  FileViewer.prototype.isShowingFirstFile = function () {
    return this._fileState.attributes.currentFileIndex === 0;
  };

  /**
   * Check if current file is the last one in the files collection.
   *
   * @returns {Boolean}
   */
  FileViewer.prototype.isShowingLastFile = function () {
    return this._fileState.collection.length ===
      this._fileState.attributes.currentFileIndex + 1;
  };

  /**
   * The view mode was changed.
   *
   * @event FileViewer~'fv.changeMode'
   */

  /**
   * Change current view mode to the given mode.
   *
   * @param {String} mode - either 'BASE' or 'PRESENTATION'
   * @fires {FileViewer~'fv.changeMode'}
   */
  FileViewer.prototype.changeMode = function (mode) {
    this._view.setupMode(mode);
    this.trigger('fv.changeMode', mode);
  };

  /**
   * Return the current mode.
   *
   * @returns {String}
   */
  FileViewer.prototype.getMode = function () {
    return this._view.getMode();
  };

  /**
   * Check if FileViewer is in the given mode.
   *
   * @param {String} mode - either 'BASE' or 'PRESENTATION'
   * @returns {Boolean}
   */
  FileViewer.prototype.isInMode = function (mode) {
    return this._view.isInMode(mode);
  };

  /**
   * A file action was called.
   *
   * @callback FileViewer~fileActionCallback
   * @param {File} file
   */

  /**
   * Add a file action to the viewer.
   *
   * Actions can be registered asynchronously, and are reset when the user navigates to a new file.
   *
   * Commonly, a plugin will listen to the change file event and register a file action
   * conditionally for the displayed file. If a file action shares a key with a file
   * action that currently exists, addFileAction will replace the old action with the
   * new action.
   *
   * @param {Object} opts
   * @param {String} opts.key - a unique identifier for the file action
   * @param {String} opts.text - the text display in the menu item
   * @param {FileViewer~fileActionCallback} opts.callback - a callback to be called when the menu item is selected
   * @throws Error if config is invalid or if no file is currently being viewed
   */
  FileViewer.prototype.addFileAction = function (opts) {
    assert(opts.key, 'has key');
    assert(opts.text, 'has text');
    assert(opts.callback, 'has a callback');
    this._view.fileControlsView.getLayerForName('moreButton').addFileAction(opts);
  };

  /**
   * Remove a file action from the viewer based on the key sent in the parameter.
   *
   * @param {Object} opts
   * @param {String} opts.key - a unique identifier for the file action you want to remove
   * @throws {Error} if no key is provided or if no file is currently being viewed
   */
  FileViewer.prototype.removeFileAction = function (opts) {
    assert(opts.key, 'has key');
    this._view.fileControlsView.getLayerForName('moreButton').removeFileAction(opts);
  };

  /**
   * Check if the FileViewer supports native rendering of a given content type.
   *
   * @param {String} contentType the content type to check if supported
   * @returns {Boolean}
   */
  FileViewer.prototype.supports = function (contentType) {
    var previewer = this._viewerRegistry.get(contentType);
    return previewer && previewer !== unknownFileTypeViewProvider;
  };

  /**
   * Allows non-core code to get and set their own values on an instance of FileViewer.
   *
   * @param {String} key
   * @param {*} value
   */
  FileViewer.prototype.set = function (key, value) {
    this._properties.set(key, value);
  };

  /**
   * Access plugin level properties.
   *
   * @param {String} key
   * @returns {*}
   */
  FileViewer.prototype.get = function (key) {
    return this._properties.get(key);
  };

  /**
   * Returns the specified config.
   *
   * @returns {Object}
   */
  FileViewer.prototype.getConfig = function () {
    return this._config;
  };

  /**
   * Returns the central view of FileViewer.
   *
   * @returns {MainView}
   */
  FileViewer.prototype.getView = function () {
    return this._view;
  };

  /**
   * Returns key-value storage of FileViewer.
   *
   * @returns {Object}
   */
  FileViewer.prototype.getStorage = function () {
    return this._storage;
  };

  /**
   * **DEPRECATED** Show the given file.
   *
   * **Carefull**: This method doesn't set the current file from the collection and thus allows to set a file that
   * is not in the files array, thus causing buggy behaviour with next/prev file.
   *
   * Use #showFileWithQuery() instead.
   *
   * @param {File} file
   * @returns {Promise.<File>}
   * @fires {FileViewer~'fv.changeFile'}
   * @fires {FileViewer~'fv.showFile'}
   * @fires {FileViewer~'fv.showFileError'}
   * @deprecated
   */
  FileViewer.prototype.showFile = function (file) {
    return this._showFile(file);
  };

  /**
   * **DEPRECATED** Show the file matching the given backbone object id.
   *
   * Use #showFileWithQuery() instead.
   *
   * @param {String} cid
   * @returns {Promise.<File>}
   * @fires {FileViewer~'fv.changeFile'}
   * @fires {FileViewer~'fv.showFile'}
   * @fires {FileViewer~'fv.showFileError'}
   * @deprecated
   */
  FileViewer.prototype.showFileWithCID = function (cid) {
    this._fileState.setCurrentWithCID(cid);
    return this.showFile(this._fileState.getCurrent());
  };

  /**
   * **DEPRECATED** Show the file matching the given id.
   *
   * Use #showFileWithQuery() instead.
   *
   * @param {String} id
   * @param {String} [ownerId]
   * @returns {Promise.<File>}
   * @fires {FileViewer~'fv.changeFile'}
   * @fires {FileViewer~'fv.showFile'}
   * @fires {FileViewer~'fv.showFileError'}
   * @deprecated
   */
  FileViewer.prototype.showFileWithId = function (id, ownerId) {
    var fileQuery = { id: id };

    if (ownerId) { fileQuery.ownerId = ownerId; }

    return this.showFileWithQuery(fileQuery);
  };

  /**
   * **DEPRECATED** Show file with matching src.
   *
   * Use #showFileWithQuery() instead.
   *
   * @param {String} src
   * @returns {Promise.<File>}
   * @fires {FileViewer~'fv.changeFile'}
   * @fires {FileViewer~'fv.showFile'}
   * @fires {FileViewer~'fv.showFileError'}
   * @deprecated
   */
  FileViewer.prototype.showFileWithSrc = function (src) {
    var fileQuery = { src: src };

    return this.showFileWithQuery(fileQuery);
  };

  /**
   * **DEPRECATED** Show the first file matching the given selector. If selector is falsy, the first file in the
   * collection is shown.
   *
   * Use #showFileWithQuery() instead.
   *
   * @param {Object} selector
   * @returns {Promise.<File>}
   * @fires {FileViewer~'fv.changeFile'}
   * @fires {FileViewer~'fv.showFile'}
   * @fires {FileViewer~'fv.showFileError'}
   * @deprecated
   */
  FileViewer.prototype.showFileWhere = function (selector) {
    this._fileState.selectWhere(selector);
    return this.showFile(this._fileState.getCurrent());
  };

  /**
   * **DEPRECATED** Maps a file to some value which is used for strict equality checks (`===`).
   *
   * @callback FileViewer~updateFilesMapFn
   * @param {Object} file
   * @returns {*}
   * @deprecated
   */

  /**
   * **DEPRECATED** FileViewer#updateFiles() was called.
   *
   * @event FileViewer~'fv.updateFiles'
   * @deprecated
   */

  /**
   * **DEPRECATED** Update the files collection without updating the view state.
   *
   * **Carefull**: A call to `updateFiles()` neither changes the file currently shown nor causes a re-rendering. This
   * can cause state and view to get out of sync and is likely to introduce bugs. Therefore, this method should no
   * longer be used. See FileViewer#setFiles() instead.
   *
   * This method operates in two modes based on it's input.
   *
   * When invoked with nothing but `files`, the existing file collection is simply replaced with the new one.
   *
   * When an optional `mapFn` function is given, the behaviour changes drastically. Each file in the given `files`
   * array is compared with the already existing ones using `mapFn`.
   *
   * - If a file existed before, but isn't matched by a new file, it won't be updated, but stays in the collection.
   * - If a file existed before and is matched by a new file, it is updated and stays in the collection.
   * - If a file didn't exist before, it is appended to the collection
   *
   * @param {Array.<Object>} files
   * @param {FileViewer~updateFilesMapFn} [mapFn]
   * @returns {Array.<Object>}
   * @fires {FileViewer~'fv.updateFiles'}
   * @deprecated
   */
  FileViewer.prototype.updateFiles = function (files, mapFn) {
    if (!(mapFn && _.isFunction(mapFn))) {
      this._files.reset(files);
    } else {
      var newModels = _.chain(files)
        .map(function (file) {
          var matchedModel = this._files.find(function (collectionModel) {
            return mapFn(collectionModel.toJSON()) === mapFn(file);
          });
          if (matchedModel) {
            matchedModel.set(file);
          } else {
            return new File(file);
          }
        }.bind(this))
        .compact()
        .value();

      this._files.add(newModels, {silent: true});
      this._files.trigger('reset', this._files);
    }

    this.trigger('fv.updateFiles');

    return this._files.toJSON();
  };

  // shows the given backbone file model, triggers an event and returns a promise
  // @todo should resolve with a json description of the passed-in file
  FileViewer.prototype._showFile = function (file) {
    assert(this._isOpen, 'FileViewer is open');
    var triggerEvent = function (event) {
      return function () {
        this.trigger(event, file);
      }.bind(this);
    }.bind(this);
    this.trigger('fv.changeFile', file);
    return this._view.showFile(file)
      .done(triggerEvent('fv.showFile'))
      .fail(triggerEvent('fv.showFileError'));
  };

  return FileViewer;
});

define('file',
  [
    'backbone'
  ],
  function (
    Backbone
    ) {
    'use strict';

    var File = Backbone.Model.extend({
      defaults: {
        src: '',
        type: '',
        thumbnail: '',
        poster: '',
        title: '',
        downloadable: true
      }
    });

    return File;
  });

define('files',
  [
    'backbone',
    'underscore',
    'file'
  ],
  function (
    Backbone,
    _,
    File) {

    'use strict';

    var Files = Backbone.Collection.extend({
      model: File,

      getIndexWithCID: function (cid) {
        return this.indexOf(this.get({cid: cid}));
      }
    });

    return Files;

  });

define('focus-manager-factory', ['assert', 'focus-manager-noop', 'focus-manager-impl'], function (assert, NoopFocusManager, FocusManager) {
  'use strict';

  /**
   * Transparent wrapper around FocusManager API that conditionally switches implementations.
   * @constructor
   * @param {jQuery} $el - The outmost element within focus will be trapped
   */
  var FocusManagerFactory = function ($el) {
    this.__element = $el;
  };

  FocusManagerFactory.prototype.create = function (embedded) {
    var ctor = embedded ? NoopFocusManager : FocusManager;
    return new ctor(this.__element);
  };

  return FocusManagerFactory;
});

define('focus-manager-impl', ['assert'], function (assert) {
  'use strict';

  var hasFocusOverride = function (element) {
    if (!element || !element.hasAttribute) { return false; }
    return element.hasAttribute('data-fv-allow-focus') || hasFocusOverride(element.parentElement);
  };

  /**
   * Trap focus for overlays and dialogs to enable proper keyboard navigation.
   * @constructor
   * @param {jQuery} $el - The outmost element within focus will be trapped
   */
  var FocusManager = function ($el) {
    assert($el, 'the first parameter to new FocusManager is a jQuery element');
    this.$container = $el;
    this._handler = this._focusHandler.bind(this);
  };

  /**
   * Trap element focus inside container element.
   */
  FocusManager.prototype.trapFocus = function () {
    this._unfocusParentPage();
    document.addEventListener('focus', this._handler, true);
  };

  /**
   * Stop trapping element focus inside container element.
   */
  FocusManager.prototype.releaseFocus = function () {
    document.removeEventListener('focus', this._handler, true);
    this._restoreFocus();
  };

  // Focus event handler.
  // On focus instantly blur the element if it is not a child of container
  // and set focus back to the container element.
  FocusManager.prototype._focusHandler = function (event) {
    if (
      !hasFocusOverride(event.target) &&
      this.$container &&
      !this.$container[0].contains(event.target)
    ) {
      event.stopPropagation();
      document.activeElement.blur();
      this.$container.attr('tabindex', 1);
      this.$container.focus();
    }
  };

  // Store active DOM element, unfocus it and then focus the container.
  FocusManager.prototype._unfocusParentPage = function () {
    this._originalActiveElement = document.activeElement;
    this._originalActiveElement.blur();
    this.$container.attr('tabindex', 1);
    this.$container.focus();
  };

  // Restore focus to the stored original active element.
  FocusManager.prototype._restoreFocus = function () {
    if (this._originalActiveElement) {
      this._originalActiveElement.focus();
    }
  };

  return FocusManager;
});

define('focus-manager-noop', [], function () {
  'use strict';
  
  var noop = function () {};

  var NoopFocusManager = function ($el) {};

  NoopFocusManager.prototype.trapFocus = noop;

  NoopFocusManager.prototype.releaseFocus = noop;

  return NoopFocusManager;
});
define('icon-utils', [
  'file-types'
],
function (fileTypes) {
  'use strict';

  var iconUtils = {
    getCssClass: function (type) {
      var iconClass = 'cp-unknown-file-type-icon';
      if (fileTypes.isImage(type)) {
        iconClass = 'cp-image-icon';
      } else if (fileTypes.isPDF(type)) {
        iconClass = 'cp-pdf-icon';
      } else if (fileTypes.isWordProcessing(type)) {
        iconClass = 'cp-document-icon';
      } else if (fileTypes.isSpreadsheet(type)) {
        iconClass = 'cp-spreadsheet-icon';
      } else if (fileTypes.isPresentation(type)) {
        iconClass = 'cp-presentation-icon';
      } else if (fileTypes.isText(type)) {
        iconClass = 'cp-text-icon';
      } else if (fileTypes.isCode(type)) {
        iconClass = 'cp-code-icon';
      } else if (fileTypes.isMultimedia(type)) {
        iconClass = 'cp-multimedia-icon';
      } else if (fileTypes.isArchive(type)) {
        iconClass = 'cp-archive-icon';
      }
      return iconClass;
    }
  };
  return iconUtils;
});

define('image-view-provider', [
  'jquery',
  'file'
], function (
  $,
  File
) {
  'use strict';

  /**
   * Returns an image viewer.
   * @returns {Promise}
   */
  var imageViewProvider = function () {
    return $.Deferred().resolve(require('image-view'));
  };

  return imageViewProvider;
});
define('instance-manager',
  ['jquery'],
  function ($) {
    'use strict';

    /**
     * Ensures that there's only a single instance at the same time.
     * Accepts a createFn that is invoked and whose return value is
     * used as the instance.
     * @constructor
     * @param {Function} createFn
     * @param {Function} destroyFn
     */
    var InstanceManager = function (createFn, destroyFn) {
      this._createFn = createFn;
      this._destroyFn = destroyFn;
      this._instance = null;
      this._destroyDeferred = null;
    };

    /**
     * Promise a new instance. Resolves as soon as the previous one
     * is destroyed.
     * @return {Promise<Object>}
     */
    InstanceManager.prototype.create = function () {
      var args = arguments;
      var d = new $.Deferred();
      var destroyPromise = (this._destroyDeferred && this._destroyDeferred.promise()) || $.when();

      destroyPromise.then(function () {
        this._destroyDeferred = new $.Deferred();
        this._instance = this._createFn.apply(this._createFn, args);
        d.resolve(this._instance);
      }.bind(this));

      return d.promise();
    };

    /**
     * Destroy the current instance and unlock instance creation.
     */
    InstanceManager.prototype.destroy = function () {
      if (!this._destroyDeferred) {
        return;
      }
      this._destroyFn(this._instance);
      this._destroyDeferred.resolve();
    };

    return InstanceManager;

  }
);

define('keyboard', [], function () {
  var keys = {
    F: 70,
    G: 71,
    P: 80,
    RETURN: 13,
    ESCAPE: 27,
    ARROW_LEFT: 37,
    ARROW_UP: 38,
    ARROW_RIGHT: 39,
    ARROW_DOWN: 40,
    PLUS: 187,
    MINUS: 189,
    PLUS_NUMPAD: 107,
    MINUS_NUMPAD: 109,
    PLUS_FF: 61,
    MINUS_FF: 173,
    SPACE: 32,
    ENTER: 13,
    TAB: 9
  };

  var createConditionalKeyHandler = function (fn) {
    return function (event) {
      var targetTagName = event.target.tagName && event.target.tagName.toUpperCase();

      // To not interfere with input elements we only invoke the
      // event handling method if the event target is not INPUT or TEXTAREA
      if (targetTagName !== 'INPUT' && targetTagName !== 'TEXTAREA') {
        return fn.call(this, event);
      }

      // Pressing ESCAPE while in input fields blurs input fields
      if (event.which === keys.ESCAPE) {
        event.target.blur();
      }
    };
  };

  return {
    keys: keys,
    createConditionalKeyHandler: createConditionalKeyHandler
  };
});

define('layer-container-view', [
  'underscore',
  'backbone',
  'assert',
  'constants-dictionary'
], function (
  _,
  Backbone,
  assert,
  ConstantsDictionary
) {
  'use strict';

  // utility functions for working with layers

  var invoke = function (fn) {
    return fn();
  };

  var pick = function (property, obj) {
    return obj[property];
  };

  var pickBoundFn = function (property, obj) {
    return _.isFunction(obj[property]) && obj[property].bind(obj);
  };

  /**
   * This view manages a collection of views which can be registered with a
   * given name. This view manages the lifecycle of its subviews.
   *
   * Subviews are always the View objects themselves, not instances of them.
   *
   * Subviews have two different states: ADDED and INITIALIZED. Whenever a
   * view is registered, it starts in state ADDED and stays there until
   * #initializeLayers() is called. Then it moves to INITIALIZED and stays
   * there until #teardownLayers() is called.
   *
   * When #render() is called on the collection, only INITIALIZED subviews are
   * rendered. Subviews can provide a teardown method that will be called
   * once the view is removed.
   *
   * Optionally, you can register subviews with a predicate to tell which
   * filetypes they support. It is invoked whenever the subviews are
   * initialized.
   */
  var FileContentLayerView = Backbone.View.extend({

    /**
     * @constructor
     * @param {object} options
     */
    initialize: function (options) {
      this._layerViewsByName = new ConstantsDictionary();
      this._layerViewRegistrations = [];
      this._layers = null;
      this._fileViewer = options.fileViewer;
    },

    /**
     * Checks if a layer with the given name exists.
     * @param {string} name
     * @return {bool}
     */
    hasLayerView: function (name) {
      return this._layerViewsByName.isDefined(name);
    },

    /**
     * Adds a view as a layer with a certain, unique name. Accepts an
     * options object as third parameter.
     *
     * Keys in options:
     *  - {function} [predicate] invoked at construction
     *  - {int} [weight=0] sorts layers at construction
     *
     * @param {string} name
     * @param {Backbone.View} LayerView
     * @param {object} [options]
     * @throws Error if name is already used.
     */
    addLayerView: function (name, LayerView, options) {
      assert(!this.hasLayerView(name), 'name is unique');

      options = _.extend({
        predicate: function () { return true; },
        weight: 0
      }, options);

      this._layerViewsByName.define(name, LayerView);
      this._layerViewRegistrations.push({
        LayerView: LayerView,
        name: name,
        predicate: options.predicate,
        weight: options.weight
      });
    },

    /**
     * Checks wether layers are currently initialized.
     * @return {bool}
     */
    areLayersInitialized: function () {
      return this._layers !== null;
    },

    /**
     * Return the number of initialized layers (after applying the predicate)/
     * @return {Integer}
     */
    countInitializedLayers: function () {
      return (this._layers || []).length;
    },

    /**
     * Initializes all currently registered layers.
     * @fires initializeLayers
     * @throws Error if layers are already initialized
     */
    initializeLayers: function () {
      this.initializeLayerSubset(_.map(this._layerViewRegistrations, function (item) { return item.name; }));
    },

    /**
     * Initializes the given registered layers.
     * @param {Array} names
     * @fires initializeLayers
     * @throws Error if layers are already initialized
     */
    initializeLayerSubset: function (names) {
      assert(!this.areLayersInitialized(), 'layers are uninitialized');

      this._layers = this._layerViewRegistrations
                .filter(function (registration) {
                  var isInSubset = (names.indexOf(registration.name) !== -1);
                  return isInSubset && registration.predicate(this._fileViewer);
                }, this)
                .map(function (registration) {
                  var view = new registration.LayerView({
                    contentLayerView: this,
                    fileViewer: this._fileViewer
                  });
                  return {
                    view: view,
                    name: registration.name,
                    weight: registration.weight
                  };
                }, this);

      // sort by weight using the stable _.sortBy function to keep
      // registration order for same weights
      this._layers = _.sortBy(this._layers, function (layer) {
        return layer.weight * -1;
      });

      this.trigger('initializeLayers');

      this.render();
    },

    /**
     * Tears initialized layers down and removes them.
     * Won't throw if layers are not initialized.
     * @fires teardownLayers
     */
    teardownLayers: function () {
      if (this.areLayersInitialized()) {
        this._layers.map(_.partial(pick, 'view'))
              .map(_.partial(pickBoundFn, 'teardown'))
              .filter(_.isFunction)
              .forEach(invoke);

        this._layers.map(_.partial(pick, 'view'))
              .map(_.partial(pickBoundFn, 'remove'))
              .filter(_.isFunction)
              .forEach(invoke);

        this._layers = null;
      }

      this.trigger('teardownLayers');

      this.render();
    },

    /**
     * Utitily method. Calls teardownLayers() followed by initializeLayers().
     */
    reinitializeLayers: function () {
      this.teardownLayers();
      this.initializeLayers();
    },

    /**
     * Checks wether a layer with the given name is currently initialized.
     * @param {string} name
     * @return {bool}
     */
    isLayerInitialized: function (name) {
      if (!this.areLayersInitialized()) { return false; }

      return _.find(this._layers, function (layer) {
        return layer.name === name;
      }) ? true : false;
    },

    /**
     * Returns the instanciated LayerView object for the given name.
     * @param {string} name Name of the registered LayerView.
     * @return {layerView}
     * @throws {Error} if layer is not initialized
     */
    getLayerForName: function (name) {
      assert(this.areLayersInitialized(), 'layers are initialized');
      assert(this.hasLayerView(name), 'layer is defined');

      var layer = _.find(this._layers, function (layer) {
        return layer.name === name;
      });

      assert(layer, 'layer is initialized');

      return layer.view;
    },

    /**
     * Renders initialized layers.
     * Won't throw if layers are not initialized.
     * @fires renderLayers
     */
    render: function () {
      this.$el.empty();

      if (this.areLayersInitialized()) {
        this._layers.map(_.partial(pick, 'view'))
              .map(_.partial(pickBoundFn, 'render'))
              .forEach(invoke);

        this._layers.map(_.partial(pick, 'view'))
              .map(_.partial(pick, '$el'))
              .forEach(function ($layer) {
                this.$el.append($layer);
              }, this);
      }

      this.trigger('renderLayers');

      return this;
    }

  });

  return FileContentLayerView;
});
define('MainView',
  [
    'ajs',
    'backbone',
    'underscore',
    'jquery',
    'focus-manager-factory',
    'files',
    'file',
    'TitleView',
    'DownloadButton',
    'CloseButton',
    'MoreButton',
    'ViewerLayer',
    'panel-container-view',
    'layer-container-view',
    'ErrorLayer',
    'WaitingLayer',
    'PasswordLayer',
    'ArrowLayer',
    'ToolbarLayer',
    'SpinnerLayer',
    'template-store-singleton',
    'keyboard',
    'baseMode',
    'presentationMode',
    'Commands'
  ],
  function (
    AJS,
    Backbone,
    _,
    $,
    FocusManagerFactory,
    Files,
    File,
    TitleView,
    DownloadButton,
    CloseButton,
    MoreButton,
    ViewerLayer,
    PanelContainerView,
    LayerContainerView,
    ErrorLayer,
    WaitingLayer,
    PasswordLayer,
    ArrowLayer,
    ToolbarLayer,
    SpinnerLayer,
    templateStore,
    keyboard,
    baseMode,
    presentationMode,
    Commands
  ) {
    'use strict';

    var rejectWithError = function (msg) {
      return new $.Deferred().reject(
        new Error(msg)
      ).promise();
    };

    /**
     * Core view of FileViewer.
     * @constructor
     * @param {Object} params
     */
    var MainView = Backbone.View.extend({

      attributes: function () {
        return {
          'id': 'cp-container-' + this.model.get('instanceId'),
          'data-embedded': this.model.get('embedded'),
          'role': 'dialog',
          'aria-labelledby': 'cp-title-container'
        };
      },

      initialize: function (params) {
        var options = _.extend({}, params);

        this._fileViewer = options.model.get('fileViewer');
        this._currentFile = null;
        this._viewState = null;
        this._focusManager = new FocusManagerFactory(this.$el).create(this.model.get('embedded'));

        this.fileTitleView = new PanelContainerView({
          fileViewer: this._fileViewer,
          id: 'cp-title-container',
          className: 'aui-item'
        });

        this.fileControlsView = new LayerContainerView({
          fileViewer: this._fileViewer,
          id: 'cp-file-controls',
          className: 'aui-item'
        });

        this.fileMetaView = new LayerContainerView({
          fileViewer: this._fileViewer,
          id: 'cp-meta'
        });

        this.fileSinkView = new PanelContainerView({
          id: 'cp-sink',
          collection: this._fileViewer._fileState.collection,
          fileViewer: this._fileViewer
        });

        this.fileSidebarView = new PanelContainerView({
          id: 'cp-sidebar',
          fileViewer: this._fileViewer,
          collection: this._fileViewer._fileState.collection
        });

        this.fileContentView = new LayerContainerView({
          id: 'cp-file-body',
          fileViewer: this._fileViewer
        });

        this.fileTitleView.addPanelView('title', TitleView);
        this.fileControlsView.addLayerView('downloadButton', DownloadButton, {
          weight: 10,
          predicate: DownloadButton.isDownloadable
        });
        this.fileControlsView.addLayerView('moreButton', MoreButton);
        this.fileControlsView.addLayerView('closeButton', CloseButton);
        this.fileContentView.addLayerView('content', ViewerLayer);
        this.fileContentView.addLayerView('error', ErrorLayer);
        this.fileContentView.addLayerView('password', PasswordLayer);
        this.fileContentView.addLayerView('toolbar', ToolbarLayer);
        this.fileContentView.addLayerView('waiting', WaitingLayer);
        this.fileContentView.addLayerView('spinner', SpinnerLayer);
        this.fileContentView.addLayerView('arrows', ArrowLayer);

        this.listenTo(this.fileSidebarView, 'togglePanel', this._updateContentWidth);
        this.listenTo(this.fileSinkView, 'togglePanel', this._updateContentHeight);

        this._navigationKeyLockCount = 0;
        this._showFileChain = $.when();

        this._mode = 'BASE';
        this._modes = {
          'BASE': baseMode,
          'PRESENTATION': presentationMode
        };

        this._fixTooltipCleanup();
      },

      /**
       * Show.
       * @return {MainView} this
       */
      show: function () {
        this.$el.show();
        $(this._fileViewer._config.appendTo).addClass('no-scroll');

        // Blur focussed state for mouse users
        this.$el.on('mouseup mousedown', 'a', function (e) {
          this.blur();
        });
        this.$el.on('mouseup mousedown', 'button', function (e) {
          this.blur();
        });

        $(document).on('keydown.disableDefaultKeys', this._disableKeyboardShortcuts.bind(this));
        $(document).on('keydown.navKeys', keyboard.createConditionalKeyHandler(
          this._handleNavigationKeys.bind(this)
        ));

        return this;
      },

      /**
       * Hide.
       * @return {MainView} this
       */
      hide: function () {
        this.$el.hide();
        $(this._fileViewer._config.appendTo).removeClass('no-scroll');

        $(document).off('keydown.disableDefaultKeys');
        $(document).off('keydown.navKeys');
        $(document).off('keydown.modeKeys');

        this._deactivateModeHook();
        this._modes[this._mode].teardown(this);
        this._teardownAll();

        return this;
      },

      /**
       * Render.
       * @return {MainView} this
       */
      render: function () {
        this.$el.empty().append(templateStore.get('fileView')());

        this.$header = this.$('#cp-header');
        this.$body = this.$('#cp-body');
        this.$footer = this.$('#cp-footer');

        this.$title = this.fileTitleView.render().$el.appendTo(this.$header);
        this.$controls = this.fileControlsView.render().$el.appendTo(this.$header);

        this.$content = this.fileContentView.render().$el.appendTo(this.$body);
        this.$sidebar = this.fileSidebarView.render().$el.appendTo(this.$body);

        this.$meta = this.fileMetaView.render().$el.appendTo(this.$footer);
        this.$sink = this.fileSinkView.render().$el.appendTo(this.$footer);

        this.$el.on('click', 'a[href="#"]', function (e) {
          e.preventDefault();
        });

        this._focusManager.trapFocus();

        return this;
      },

      /**
       * MainView is starting to show the content of a new file.
       *
       * If the file src and type didn't change, this event won't be triggered.
       * If the file doesn't exist, this evemt won't be triggered as well.
       *
       * @event MainView~'fv.fileChange'
       */

      /**
       * Internal event to allow people to stop what they are doing when
       * the user already switched to the next file.
       *
       * @event MainView~'cancelShow'
       */

      /**
       * Show the given file. If one of the following conditions is true
       *
       *   1. file is invalid
       *   2. no viewer for that fileType is registered
       *   3. the viewer code can't be loaded
       *   4. the viewer couldn't be created
       *
       * then the returned promise is rejected. In that case, fileView changes
       * state and displays the error internally.
       *
       * When the new file and the current file have the same src and type attributes,
       * this method will not perform a re-rendering.
       *
       * @param {File} file
       * @return {Promise.<File>} the given file
       * @fires {MainView~'fv.fileChange'}
       * @fires {MainView~'cancelShow'}
       */
      showFile: function (file) {
        var needsToRerenderContent = !this.fileContentView.isLayerInitialized('content') || MainView._needsToRerenderContent(this._currentFile, file);

        if (MainView._filesWillRenderTheSame(this._currentFile, file)) {
          return MainView._skipRenderingOf(file);
        }

        var contentView, toolbarView, spinnerView, waitingView, errorView;

        var lookupViewerCommand = new Commands.LookupViewer(file, this._fileViewer._viewerRegistry);

        // allow people to shut down themselves
        this.trigger('cancelShow');

        var fileViewed = new $.Deferred();

        this._showFileChain.pipe(function () {
          var fileHandled = new $.Deferred();

          var p = $.when().pipe(function validateFile () {

            this._currentFile = file;
            this._viewState = null;
            var validationResult;

            if (file) {
              if (needsToRerenderContent) {
                this.trigger('fv.fileChange', file);
                this._reinitializeAllSubviews();
              } else {
                this._reinitializeNonContentSubviews();
              }

              contentView = this.fileContentView.getLayerForName('content');
              toolbarView = this.fileContentView.getLayerForName('toolbar');
              spinnerView = this.fileContentView.getLayerForName('spinner');
              waitingView = this.fileContentView.getLayerForName('waiting');
            } else {
              this._viewState = 'fileNotFound';
              this._reinitializeCoreSubviews();
              validationResult = rejectWithError("The file does not exist.");
            }
            errorView = this.fileContentView.getLayerForName('error');
            this._deactivateModeHook();
            this._activateModeHook();

            if (this && this._fileViewer && this._fileViewer.lastFocusId) {
              $('#' + this._fileViewer.lastFocusId).focus();
            }

            return validationResult;
          }.bind(this));

          if (needsToRerenderContent) {
            p = p.pipe(function getConverted () {
              var isPreviewGenerated = this._fileViewer.getConfig().isPreviewGenerated;
              var generatePreview = this._fileViewer.getConfig().generatePreview;

              spinnerView.startSpin();

              if (this._fileViewer.supports(file.get('type'))) {
                return $.when(file.get('src'), file.get('type'));
              }

              if (!(isPreviewGenerated && generatePreview)) {
                return $.when(file.get('src'), file.get('type'));
              }

              return isPreviewGenerated(file).pipe(function (isGenerated, source, type, overwrites) {
                if (isGenerated) {
                  return $.when(source, type, overwrites);
                }

                spinnerView.stopSpin();
                waitingView.showMessage(
                  file,
                  "Your preview is on its way!",
                  "In a hurry? You can download the original right now."
                );

                return generatePreview(file).always(function () {
                  waitingView.clearMessage();
                  spinnerView.startSpin();
                });
              });

            }.bind(this))
            .pipe(lookupViewerCommand.execute.bind(lookupViewerCommand))
            .pipe(function createViewer (Viewer, previewSrc, convertedFile) {

              var readyDeferred = new $.Deferred();
              var view = new Viewer({
                previewSrc: previewSrc,
                model: new File(convertedFile.toJSON()),
                fileViewer: this._fileViewer
              });

              view.once('viewerReady', function () {
                this._viewState = 'success';
                toolbarView.setViewer(view);
                this.setupMode(this._mode);
                readyDeferred.resolve(file);
              }.bind(this));
              view.once('viewerFail', function (err) {
                this._viewState = 'viewerError';
                readyDeferred.reject(err);
                this.setupMode(this._mode);
              }.bind(this));

              contentView.attachViewer(view);

              view.render();

              return readyDeferred.promise();

            }.bind(this))
            .always(function () {
              spinnerView && spinnerView.stopSpin();
              waitingView && waitingView.clearMessage();
            }.bind(this))
            .fail(function (err) {
              fileViewed.reject(err);
              if (err !== 'cancelled') {
                errorView.showErrorMessage(err, file);
              }
            }.bind(this));
          }

          p.done(function () {
            fileViewed.resolve(file);
          })
          .always(function () {
            fileHandled.resolve();
          }.bind(this));

          return fileHandled.promise();
        }.bind(this));

        return fileViewed.promise();
      },

      /**
       * Return the currently shown file.
       * @returns {null|File} the file being shown
       */
      getCurrentFile: function () {
        return this._currentFile;
      },

      /**
       * Return the current view state.
       * Can be any of the following
       * loading, fileNotFound, viewerError, success
       * @returns {String}
       */
      getViewState: function () {
        return this._viewState || 'loading';
      },

      _reinitializeAllSubviews: function () {
        if (!this.fileTitleView.isAnyPanelInitialized()) {
          this.fileTitleView.initializePanel();
        }
        this.fileTitleView.reinitializePanel();

        this.fileControlsView.reinitializeLayers();
        this.fileContentView.reinitializeLayers();
        this.fileSidebarView.reinitializePanel();
        this.fileMetaView.reinitializeLayers();
        this.fileSinkView.reinitializePanel();

        this._updateMetaBannerHeight();
      },

      _reinitializeNonContentSubviews: function () {
        if (!this.fileTitleView.isAnyPanelInitialized()) {
          this.fileTitleView.initializePanel();
        }
        this.fileTitleView.reinitializePanel();

        this.fileControlsView.reinitializeLayers();
        this.fileSidebarView.reinitializePanel();
        this.fileMetaView.reinitializeLayers();
        this.fileSinkView.reinitializePanel();

        this._updateMetaBannerHeight();
      },

      _reinitializeCoreSubviews: function () {
        this._teardownAll();

        this.fileControlsView.initializeLayerSubset(['closeButton']);
        this.fileContentView.initializeLayerSubset(['arrows', 'error']);
      },

      _teardownAll: function () {
        this.fileTitleView.teardownPanel();
        this.fileSidebarView.teardownPanel();
        this.fileSinkView.teardownPanel();
        this.fileMetaView.teardownLayers();
        this.fileControlsView.teardownLayers();
        this.fileContentView.teardownLayers();
        this._focusManager.releaseFocus();
      },

      _handleNavigationKeys: function (e) {
        var numFiles = this._fileViewer._files.length;
        var usedModifierKey = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;

        if (e.which === keyboard.keys.ESCAPE && !this.isNavigationLocked()) {
          e.preventDefault();
          this._fileViewer.analytics.send('files.fileviewer-web.closed', {
            actionType: 'hotkey'
          });
          this._fileViewer.close();
        } else if (
          !usedModifierKey &&
          !this.isNavigationLocked() &&
          numFiles > 1 &&
          e.which === keyboard.keys.ARROW_RIGHT
        ) {
          e.preventDefault();
          this._fileViewer.showFileNext().always(
            this._fileViewer.analytics.fn('files.fileviewer-web.next', {
              actionType: 'hotkey',
              mode: this._fileViewer.getMode()
            })
          );
        } else if (
          !usedModifierKey &&
          !this.isNavigationLocked() &&
          numFiles > 1 &&
          e.which === keyboard.keys.ARROW_LEFT
        ) {
          e.preventDefault();
          this._fileViewer.showFilePrev().always(
            this._fileViewer.analytics.fn('files.fileviewer-web.prev', {
              actionType: 'hotkey',
              mode: this._fileViewer.getMode()
            })
          );
        }
      },

      /**
       * Lock navigation keys. Navigation keys will be disabled until all
       * locks are removed again with unlockNavigationKeys.
       */
      lockNavigationKeys: function () {
        this._navigationKeyLockCount += 1;
      },

      /**
       * Unlock navigation keys.
       */
      unlockNavigationKeys: function () {
        if (this._navigationKeyLockCount >= 1) {
          this._navigationKeyLockCount -= 1;
        }
      },

      /**
       * Checks if the navigation is locked.
       */
      isNavigationLocked: function () {
        return this._navigationKeyLockCount !== 0;
      },

      _disableKeyboardShortcuts: function (e) {
        if (e.ctrlKey || e.metaKey) {
          switch (e.which) {
            case keyboard.keys.F:
            case keyboard.keys.G:
              // disable search keyboard shortcut
              e.preventDefault();
              break;
            case keyboard.keys.P:
              // disable print keyboard shortcut
              e.preventDefault();
              break;
          }
        }
      },

      _onClickToBackground: function (e) {
        // @TODO: Remove after cleaning modes setup, hooks etc.
        var mode = this._fileViewer._view._modes[this._fileViewer._view._mode];
        if (mode.disableClickBackgroundCloses) {
          return;
        }
        var backgroundLayers = [
          'cp-error-layer',
          'cp-waiting-layer',
          'cp-password-layer'
        ];
        if (backgroundLayers.indexOf(e.target.className) >= 0) {
          this._fileViewer.analytics.send('files.fileviewer-web.closed', {
            actionType: 'element'
          });
          this._fileViewer.close();
        }
      },

      _updateContentWidth: function (panelId, isExpanded) {
        this.$content && this.$content.toggleClass('narrow', isExpanded);
        this._resizeActiveViewer();
      },

      _updateContentHeight: function (panelId, isExpanded) {
        this.$content && this.$content.toggleClass('short', isExpanded);
        this.$sidebar && this.$sidebar.toggleClass('short', isExpanded);
        this._resizeActiveViewer();
      },

      _updateMetaBannerHeight: function () {
        var showsMetaView = this.fileMetaView.countInitializedLayers() > 0;
        this.fileContentView.$el.toggleClass('meta-banner', showsMetaView);
        this.fileSidebarView.$el.toggleClass('meta-banner', showsMetaView);
      },

      _resizeActiveViewer: function () {
        if (this.fileContentView.isLayerInitialized('content')) {
          var contentView = this.fileContentView.getLayerForName('content');
          var viewer = contentView.getAttachedViewer();
          if (viewer) { viewer.handleResize(); }
        }
      },

      // aui tooltips (tipsy) are appended to body. A tooltip will thus stay alive
      // if the trigger element is removed. In here, we clean them up manually
      // whenever a file changes or the whole viewer is closed.
      _fixTooltipCleanup: function () {
        var removeAllTooltips = function () { $('.tipsy').remove(); };
        this._fileViewer.on('fv.changeFile', removeAllTooltips);
        this._fileViewer.on('fv.close', removeAllTooltips);
      },

      /**
       * Return the current mode.
       * @returns {string}
       */
      getMode: function () {
        return this._mode || '';
      },

      /**
       * Check if FileView is in the given mode.
       * @param {string} mode either 'BASE' or 'PRESENTATION'
       * @returns {boolean}
       */
      isInMode: function (mode) {
        return this._mode === mode;
      },

      /**
       * Change current view mode to the given mode.
       * @param {string} mode either 'BASE' or 'PRESENTATION'
       */
      setupMode: function (mode) {
        var toolbar = this.fileContentView.getLayerForName('toolbar');
        var viewer = toolbar._viewer;
        var $arrowLayer = this.fileContentView.getLayerForName('arrows').$el;

        var lastMode = this._mode;
        var isModeChanged = (lastMode !== mode);

        var modeObj = this._modes[mode];
        var lastModeObj = this._modes[lastMode];

        if (isModeChanged) {
          this._deactivateModeHook();
          this._mode = mode;
          this._activateModeHook();
        } else {
          this._mode = mode;
        }

        $(document).off('keydown.modeKeys');
        lastModeObj.teardown(this, viewer, isModeChanged);
        modeObj.setup(this, viewer);

        // update arrow layer
        $arrowLayer.toggle(modeObj.showsArrowLayer);

        // update toolbar actions
        toolbar.setActions(modeObj.toolbarActions);
        toolbar.render();

        // notify viewer
        if (viewer && viewer.setupMode) {
          viewer.setupMode(mode, isModeChanged);
        }
      },

      _activateModeHook: function () {
        var mode = this._modes[this._mode];
        if (mode.activateHook) {
          mode.activateHook(this);
        }
      },

      _deactivateModeHook: function () {
        var mode = this._modes[this._mode];
        if (mode.deactivateHook) {
          mode.deactivateHook(this);
        }
      },

      updatePaginationButtons: function () {
        if (this.isInMode('PRESENTATION')) {
          var toolbar = this.fileContentView.getLayerForName('toolbar');
          if (!toolbar._viewer) {
            return;
          }

          var $toolbarPrevPage = toolbar.$el.find('.cp-toolbar-prev-page');
          var $toolbarNextPage = toolbar.$el.find('.cp-toolbar-next-page');

          $toolbarPrevPage.toggleClass('inactive', false);
          $toolbarNextPage.toggleClass('inactive', false);

          if (!(toolbar._viewer.hasPreviousPage() || toolbar._viewer.hasNextPage())) {
            $toolbarPrevPage.hide();
            $toolbarNextPage.hide();
          } else if (!toolbar._viewer.hasPreviousPage()) {
            $toolbarPrevPage.toggleClass('inactive', true);
          } else if (!toolbar._viewer.hasNextPage()) {
            $toolbarNextPage.toggleClass('inactive', true);
          }
        }
      }
    });

    MainView._filesWillRenderTheSame = function (fileA, fileB) {
      if (!fileA || !fileB) { return false; }
      return _.isEqual(fileA.attributes, fileB.attributes);
    };

    MainView._needsToRerenderContent = function (fileA, fileB) {
      if (!fileA || !fileB) { return true; }
      var didTypeChange = fileA.get('type') !== fileB.get('type');
      var didSrcChange = fileA.get('src') !== fileB.get('src');
      var didThumbChange = fileA.get('thumbnail') !== fileB.get('thumbnail');
      return didTypeChange || didSrcChange || didThumbChange;
    };

    MainView._skipRenderingOf = function (file) {
      return $.when(file);
    };

    return MainView;
  });

define('module-store-singleton', [
  'module-store'
], function (
  ModuleStore
) {
  'use strict';

  /**
   * Global module store. This simplifies development until FileViewer core
   * stabilizes, the plugin interface is ready and the view hierarchy is
   * clear.
   *
   * @todo remove singleton
   */
  return new ModuleStore();
});
define('module-store', [
  'assert',
  'jquery',
  'underscore'
], function (
  assert,
  $,
  _
) {
  'use strict';

  /**
   * Provides modules by asking a previously configured backend.
   *
   * As modules can be loaded async, a promise is always returned.
   *
   * A backend is a function that accepts a module path and returns the
   * matched module. If no module is found, it returns undefined.
   *
   * @constructor
   */
  var ModuleStore = function () {
    this._backend = null;
  };

  /**
   * Checks if backend is a valid backend.
   * @param {*} backend
   * @return {bool}
   */
  ModuleStore.validBackend = function (backend) {
    return _.isFunction(backend);
  };

  /**
   * Asks its backend for the given modulePath and returns a promise.
   * @param {string} modulePath
   * @return {Promise}
   * @throws {Error} if backend is invalid
   */
  ModuleStore.prototype.get = function (modulePath) {
    assert(ModuleStore.validBackend(this._backend), 'backend is valid');
    return $.when(this._backend(modulePath));
  };

  /**
   * Sets a backend for this module store.
   * @param {function} backend
   * @throws {Error} if backend is invalid
   */
  ModuleStore.prototype.useBackend = function (backend) {
    assert(ModuleStore.validBackend(backend), 'backend is valid');
    this._backend = backend;
  };

  return ModuleStore;
});
define('MoreButton', [
  'jquery', 'underscore', 'backbone', 'template-store-singleton'
], function ($, _, Backbone, templateStore) {
  'use strict';

  var MoreButton = Backbone.View.extend({

    tagName: 'span',

    initialize: function (options) {
      this._fileViewer = options.fileViewer;
      this._fileActions = [];
    },

    render: function () {
      this.$el.html(templateStore.get('moreButton')());
      var $dropdown = this.$el.find('#cp-more-menu'),
        $menu = $dropdown.find('ul');

      // prevent the tooltip from showing when the menu is open
      $dropdown.on({
        'aui-dropdown2-show': function () {
          this.$('button').tipsy('disable');
        }.bind(this),
        'aui-dropdown2-hide': function () {
          this.$('button').tipsy('enable');
        }.bind(this)
      });

      var currentFile = this._fileViewer._fileState.getCurrent();

      this.$('button').tooltip({ gravity: 'n' });
      if (this._fileActions.length) {
        this._fileActions.forEach(function (item) {
          var $item = $(templateStore.get('moreMenuItem')({text: item.text}));
          $item.click(function (e) {
            e.preventDefault();
            item.callback(currentFile);
          });
          $menu.append($item);
        });
        this._show();
      } else {
        this._hide();
      }

      return this;
    },

    addFileAction: function (opts) {
      var match = _.findWhere(this._fileActions, {key: opts.key});

      if (match) {
        // overwrite the properties of the old action with the new ones
        _.extend(match, {
          key: opts.key,
          text: opts.text,
          callback: opts.callback
        });
      } else {
        this._fileActions.push({
          key: opts.key,
          text: opts.text,
          callback: opts.callback
        });
      }

      this.render();
    },

    removeFileAction: function (action) {
      var index = _.indexOf(this._fileActions, action);
      this._fileActions.splice(index, 1);

      this.render();
    },

    _show: function () {
      this.$el.css('display', 'inline');
    },

    _hide: function () {
      this.$el.css('display', 'none');
    }
  });

  return MoreButton;
});

define('panel-container-view', [
  'backbone',
  'assert',
  'constants-dictionary'
], function (
  Backbone,
  assert,
  ConstantsDictionary
) {
  'use strict';

  var PanelContainerView = Backbone.View.extend({

    className: 'panel-view',

    /**
     * @constructor
     * @param {object} options
     */
    initialize: function (options) {
      this._panelViewsByName = new ConstantsDictionary();
      this._currentPanel = null;
      this._currentPanelName = null;
      this._lastAddedPanelName = null;
      this._fileViewer = options.fileViewer;
    },

    /**
     * Checks if a panel with the given name exists.
     * @param {string} name
     * @return {bool}
     */
    hasPanelView: function (name) {
      return this._panelViewsByName.isDefined(name);
    },

    /**
     * Adds a View as a panel with a certain, unique name.
     * @param {string} name
     * @param {Backbone.View} PanelView
     * @throws Error if name is already used.
     */
    addPanelView: function (name, PanelView) {
      this._panelViewsByName.define(name, PanelView);
      this._lastAddedPanelName = name;
    },

    /**
     * Checks wether any panel is currently initialized.
     * @return {bool}
     */
    isAnyPanelInitialized: function () {
      return this.$el.is('.expanded');
    },

    /**
     * Checks wether a panel with the given name is currently initialized.
     * @param {string} name
     * @return {bool}
     */
    isPanelInitialized: function (name) {
      return this._currentPanelName === name;
    },

    /**
     * Initializes the panel with the given name. Then re-renders itself.
     * @param name {String} name of the panel to be initialized. If empty, then use the last added (using addPanelView) panel.
     * @fires initializePanel(panelName)
     * @fires togglePanel(panelName, isInitialized)
     * @throws Error if a panel is already initialized or the panel doesn't exist
     */
    initializePanel: function (name) {
      name = name || this._lastAddedPanelName;
      assert(this.isAnyPanelInitialized() === false, 'no panel is initialized');
      assert(this.hasPanelView(name) === true, 'panel exists');

      var PanelView = this._panelViewsByName.lookup(name);

      this._currentPanelName = name;
      this._currentPanel = new PanelView({
        collection: this.collection,
        fileViewer: this._fileViewer,
        panelView: this
      });

      this.$el.toggleClass('expanded', true);

      this.trigger('initializePanel', this._currentPanelName);
      this.trigger('togglePanel', this._currentPanelName, true);

      this.render();
    },

    /**
     * Tears the initialized panel down and removes it. Then re-renders itself.
     * Won't throw if there's no initialized panel.
     * @fires togglePanel(panelName, isInitialized)
     * @fires teardownPanel(panelName)
     */
    teardownPanel: function () {
      if (this._currentPanel) {
        if (this._currentPanel.teardown) {
          this._currentPanel.teardown();
        }
        this._currentPanel.remove();
      }

      this.$el.toggleClass('expanded', false);

      this.trigger('togglePanel', this._currentPanelName, false);
      this.trigger('teardownPanel', this._currentPanelName);

      this._currentPanelName = null;
      this._currentPanel = null;

      this.render();
    },

    /**
     * Utility method. Recreates the current PanelView (if there is one).
     */
    reinitializePanel: function () {
      if (!this.isAnyPanelInitialized()) { return; }

      var previousPanel = this.getInitializedPanelName();
      this.teardownPanel();
      this.initializePanel(previousPanel);
    },

    /**
     * Returns the name of the instanciated PanelView.
     * @return {string} panelName
     * @throws {Error} if no panel is initialized
     */
    getInitializedPanelName: function () {
      assert(this.isAnyPanelInitialized(), 'a panel is initialized');
      return this._currentPanelName;
    },

    /**
     * Returns the instanciated PanelView.
     * @return {PanelView}
     * @throws {Error} if no panel is initialized
     */
    getInitializedPanel: function () {
      return this._currentPanel;
    },

    /**
     * Renders the initialized panel.
     * Won't throw if no panel is initialized.
     * @fires renderPanel(panelName)
     */
    render: function () {
      this.$el.empty();

      if (this.isAnyPanelInitialized()) {
        this._currentPanel.render();
        this._currentPanel.$el.appendTo(this.$el);
      }
      this.trigger('renderPanel', this._currentPanelName);

      return this;
    }

  });

  return PanelContainerView;
});
define('PasswordLayer', [
  'ajs',
  'backbone',
  'jquery',
  'keyboard',
  'template-store-singleton'
], function (
  AJS,
  Backbone,
  $,
  keyboard,
  templateStore
) {
  'use strict';

  var pdfjsPasswordResponses = {
    NEED_PASSWORD: 1,
    INCORRECT_PASSWORD: 2
  };

  var fullscreenEvents = [
    'fullscreenchange',
    'webkitfullscreenchange',
    'mozfullscreenchange',
    'MSFullscreenChange'
  ].join(' ');

  var isFullscreen = function () {
    return (document.fullscreenElement ||
      document.mozFullScreen ||
      document.webkitIsFullScreen ||
      document.msFullscreenElement);
  };

  var PasswordLayer = Backbone.View.extend({

    className: 'cp-password-layer',

    events: {
      'keydown .cp-password-input': '_handleKeyDown',
      'click .cp-password-button': '_handleClick',
      'focus .cp-password-input': '_lockNavigation',
      'blur .cp-password-input': '_unlockNavigation'
    },

    initialize: function (options) {
      this._fileViewer = options.fileViewer;
      this.$el.hide();
    },

    teardown: function () {
      $(document).off(fullscreenEvents, this.updatePasswordLayer.bind(this));
    },

    /**
     * Show the password input layer
     * @param  {Number}   reason     Reason PDFJS why needs the password
     * @param  {Callback} updatePassword
     */
    showPasswordInput: function (reason, updatePassword) {
      $(document).on(fullscreenEvents, this.updatePasswordLayer.bind(this));
      this.updatePassword = updatePassword;
      this._fileViewer._view.fileContentView.getLayerForName('spinner').stopSpin();
      this.$el.show().html(templateStore.get('passwordLayer')({
        prompt: this._getPromptTitle(reason)
      }));
      this.updatePasswordLayer();
      this._showToolbar();
    },

    hidePasswordInput: function () {
      $(document).off(fullscreenEvents, this.updatePasswordLayer.bind(this));
      this.$el.empty();
      this.$el.hide();
    },

    /**
     * Update the passwordLayer depending on fullsccren/no fullscreen
     * Safari/Firefox can't handle keyboard inputs in fullscreen
     */
    updatePasswordLayer: function () {
      if (isFullscreen()) {
        this.$el.find('.cp-password-base').hide();
        this.$el.find('.cp-password-fullscreen').show();
      } else {
        this.$el.find('.cp-password-fullscreen').hide();
        this.$el.find('.cp-password-base').show();
      }
    },

    /**
     * Get i18n string for password prompt based on reason
     * @param  {Number} reason Reason PDFJS why needs the password
     * @return {String}
     */
    _getPromptTitle: function (reason) {
      var title = "Please enter the password to view this file.";
      if (reason === pdfjsPasswordResponses.INCORRECT_PASSWORD) {
        title = "Invalid password. Please try again.";
      }
      return title;
    },

    /**
     * Show passwordLayer and toolbar
     */
    _showToolbar: function () {
      var view  = this._fileViewer._view;
      var toolbar = view.fileContentView.getLayerForName('toolbar');
      var mode  = view._modes[view._mode];
      toolbar.setActions(mode.toolbarActions);
      toolbar.render();
    },

    /**
     * Check if password was given and call `updatePassword()`
     */
    _updatePassword: function () {
      var password = this.$el.find('.cp-password-input').val();
      if (password && password.length > 0) {
        this.hidePasswordInput();
        this.updatePassword(password);
      }
    },

    /**
     * Lock navigation keys
     */
    _lockNavigation: function () {
      this._fileViewer._view._navigationKeyLockCount++;
    },

    /**
     * Unlock navigation keys
     */
    _unlockNavigation: function () {
      this._fileViewer._view._navigationKeyLockCount--;
    },

    _handleClick: function (ev) {
      ev.preventDefault();
      this._updatePassword();
    },

    _handleKeyDown: function (ev) {
      if (ev.which === keyboard.keys.RETURN) {
        ev.preventDefault();
        return this._updatePassword();
      }
      if (ev.which === keyboard.keys.ESCAPE) {
        ev.preventDefault();
        return this._fileViewer.close();
      }
    }

  });

  return PasswordLayer;
});

define('pdf-view-provider', [
  'jquery',
  'file',
  'module-store-singleton'
], function (
  $,
  File,
  moduleStore
) {
  'use strict';

  var asyncViewerResource = null,
    asyncConfigResource = null;

  /**
   * Returns a pdf viewer.
   * @returns {Promise}
   */
  var pdfViewProvider = function () {
    if (!asyncViewerResource) {
      asyncViewerResource = moduleStore.get('pdf-viewer');
    }
    if (!asyncConfigResource) {
      asyncConfigResource = moduleStore.get('pdf-config');
    }

    var viewerInstance = $.Deferred();

    $.when(asyncViewerResource, asyncConfigResource).done(function (viewer, config) {
      var PDFViewer = require('pdf-view');

      // FIL-1811: Use UMD for loading PDFJS
      var PDFJS = window.PDFJS;
      PDFJS.workerSrc = config.workerSrc;
      PDFJS.cMapUrl = config.cMapUrl;

      viewerInstance.resolve(PDFViewer);
    });

    return viewerInstance.promise();
  };

  return pdfViewProvider;
});

define('presentationMode', ['jquery', 'keyboard'], function ($, keyboard) {
  'use strict';

  var AJS = window.AJS;

  var requestFullscreen = function () {
    var fullscreenContainer = $('#cp-file-body')[0];

    if (fullscreenContainer.requestFullscreen) {
      fullscreenContainer.requestFullscreen();
    } else if (fullscreenContainer.mozRequestFullScreen) {
      fullscreenContainer.mozRequestFullScreen();
    } else if (fullscreenContainer.webkitRequestFullScreen) {
      fullscreenContainer.webkitRequestFullScreen();
    } else if (fullscreenContainer.msRequestFullscreen) {
      fullscreenContainer.msRequestFullscreen();
    }
  };

  var cancelFullscreen = function () {
    if (document.cancelFullscreen) {
      document.cancelFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  var isFullscreen = function () {
    return (document.fullscreenElement ||
      document.mozFullScreen ||
      document.webkitIsFullScreen ||
      document.msFullscreenElement);
  };

  var onFullscreenChange = function (e) {
    // if user click Esc to exit fullscreen instead of clicking 'exit presentation' button
    // then change view mode to 'BASE'
    if (!isFullscreen() && !this.isInMode('BASE')) {
      this._fileViewer.analytics.send('files.fileviewer-web.presentation.exit', {
        actionType: 'hotkey'
      });
      this._fileViewer.changeMode('BASE');
    }
  };

  var presentationMode = {

    activateHook: function (mainView) {
      $(document).on('fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange',
        onFullscreenChange.bind(mainView));
      var $arrowLayer = mainView.fileContentView.getLayerForName('arrows').$el;
      $arrowLayer.toggle(this.showsArrowLayer);
    },

    deactivateHook: function (mainView) {
      $(document).off('fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange',
        onFullscreenChange.bind(mainView));
    },

    setup: function (mainView, viewer) {
      this._originalScrollTop = $('body').scrollTop();
      $('#cp-file-body').addClass('presentation');
      $(document).on('keydown.modeKeys', this._handleKeys.bind(mainView));

      if (!isFullscreen()) { requestFullscreen(); }
    },

    teardown: function (mainView, viewer, isModeChanged) {
      $('#cp-file-body').removeClass('presentation');
      $(document).off('keydown.modeKeys');

      if (isModeChanged && isFullscreen()) { cancelFullscreen(); }
      // this is to fix an issue on Chrome that
      // when entering and exiting fullscreen mode, the document body got scrolled up
      $('body').scrollTop(this._originalScrollTop);
    },

    disableClickBackgroundCloses: true,

    showsArrowLayer: false,

    _handleKeys: function (e) {
      e.preventDefault();
      var contentView, viewer;

      if (this.fileContentView.isLayerInitialized('content')) {
        contentView = this.fileContentView.getLayerForName('content');
        viewer = contentView.getAttachedViewer();
      }
      if (!viewer) { return; }
      if (e.ctrlKey || e.metaKey) {
        return;
      }

      switch (e.which) {
        case keyboard.keys.ARROW_UP:
          if (viewer.goToPreviousPage) {
            this._fileViewer.analytics.send('files.fileviewer-web.presentation.pageprev', {
              actionType: 'hotkey'
            });
            viewer.goToPreviousPage();
            this.updatePaginationButtons();
          }
          return;
        case keyboard.keys.ARROW_DOWN:
          if (viewer.goToNextPage) {
            this._fileViewer.analytics.send('files.fileviewer-web.presentation.pagenext', {
              actionType: 'hotkey'
            });
            viewer.goToNextPage();
            this.updatePaginationButtons();
          }
          return;
      }

    },

    toolbarActions: [
      {
        title: "Previous page",
        className: 'cp-toolbar-prev-page',
        predicate: function () { return this._viewer && this._viewer.goToPreviousPage; },
        handler: function () {
          if (this._viewer && this._viewer.goToPreviousPage) {
            this._fileViewer.analytics.send('files.fileviewer-web.presentation.pageprev', {
              actionType: 'button'
            });
            this._viewer.goToPreviousPage();
            this._fileViewer.getView().updatePaginationButtons();
          }
        }
      },
      {
        title: "Exit Presentation",
        className: 'cp-toolbar-presentation-exit',
        handler: function () {
          this._fileViewer.analytics.send('files.fileviewer-web.presentation.exit', {
            actionType: 'button'
          });
          this._fileViewer.changeMode('BASE');
        }
      },
      {
        title: "Next page",
        className: 'cp-toolbar-next-page',
        predicate: function () { return this._viewer && this._viewer.goToNextPage; },
        handler: function () {
          if (this._viewer && this._viewer.goToNextPage) {
            this._fileViewer.analytics.send('files.fileviewer-web.presentation.pagenext', {
              actionType: 'button'
            });
            this._viewer.goToNextPage();
            this._fileViewer.getView().updatePaginationButtons();
          }
        }
      }
    ]
  };

  return presentationMode;
});

define('soy-template-backend', [], function () {
  'use strict';

  /* global FileViewer */
  // FileViewer is defined in support/wrapper-plugin-footer.js

  // Returns a value from a nested object, example:
  // obj = { a: { b: { c: 'x' } } }
  // getNestedProperty(obj, 'a.b.c') -> 'x'
  var getNestedProperty = function (obj, prop) {
    var levels = prop.split('.');
    var i;
    for (i = 0; i < levels.length; i++) {
      obj = obj[levels[i]];
    }
    return obj;
  };

  return function (fileViewer) {
    /**
     * Picks the specified template url from the auto-generated template object.
     * @param {string} templateUrl
     * @return {function}
     */
    return function (templateUrl) {
      return getNestedProperty(FileViewer.Templates, templateUrl);
    };
  };
});

define('SpinnerLayer', [
  'backbone', 'template-store-singleton'
], function (Backbone, templateStore) {
  'use strict';

  // Spinner rendering
  var SPINNER_SIZE = 'large';
  var SPINNER_STYLE = {
    color: '#fff',
    zIndex: 'auto'
  };

  /**
   * Loading spinner in the middle of the file content.
   * @constructor
   */
  var SpinnerLayer = Backbone.View.extend({

    className: 'cp-spinner-layer',

    initialize: function () {
      this._updateElements();
    },

    render: function () {
      this.$el.html(templateStore.get('fileBodySpinner')());
      this._updateElements();
      return this;
    },

    /**
     * Instruct the spinner to start.
     */
    startSpin: function () {
      this.$spinner.spin(SPINNER_SIZE, SPINNER_STYLE);
    },

    /**
     * Instruct the spinner to stop.
     */
    stopSpin: function () {
      this.$spinner.spin(false);
    },

    _updateElements: function () {
      this.$spinner = this.$el.find('.cp-spinner');
    }

  });

  return SpinnerLayer;
});
define('storage', ['assert'], function (assert) {
  'use strict';

  /**
   * Universal key-value store using localStorage or
   * optionally a `customStorage` object can be passed in.
   * @constructor
   * @param {Object} customStorage - Object with setItem, getItem, removeItem methods.
   * @param {Function} customStorage.setItem - Custom set method
   * @param {Function} customStorage.getItem - Custom get method
   * @param {Function} customStorage.removeItem - Custom remove method
   * @param {String} namespace - Namespace to prefix storage keys with
   */
  var Storage = function (customStorage, namespace) {
    this._namespace = namespace || '';
    this._storage = this._getStorage(customStorage);
  };

  /**
   * Return corresponding value to given key.
   * - can store arbitrary json structs for certain values
   *   (not any value, functions won't work for example)
   * - for better performance, try to have more keys and less structs
   *   (cause big structs are slow)
   * @param  {String} key
   * @return {*}
   */
  Storage.prototype.getItem = function (key) {
    var storageValue;
    key = this._namespace + key.toString();
    storageValue = new StorageValue();
    storageValue.fromJSON(this._storage.getItem(key));
    if (storageValue.isExpired()) {
      this._storage.removeItem(key);
      return;
    }
    return storageValue.value;
  };

  /**
   * Store given value for with given key.
   * @param {String} key
   * @param {*}    value
   * @param {Number} expiry - Expire n milliseconds from now
   */
  Storage.prototype.setItem = function (key, value, expiry) {
    key = this._namespace + key.toString();
    this._storage.setItem(
      key,
      new StorageValue(value, expiry).toJSON()
    );
  };

  /**
   * Remove storage entry for key.
   * @param {String} key
   */
  Storage.prototype.removeItem = function (key) {
    key = this._namespace + key.toString();
    this._storage.removeItem(key);
  };

  // Check if window.localStorage is available.
  Storage.prototype._hasLocalStorage = function () {
    var test = this._namespace + 'hasLocalStorage';

    try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  };

  // Return the proper storage object.
  Storage.prototype._getStorage = function (customStorage) {
    if (customStorage) {
      assert(
      typeof customStorage.setItem === 'function',
      'Storage custom.setItem is a function'
      );
      assert(
      typeof customStorage.getItem === 'function',
      'Storage custom.getItem is a function'
      );
      assert(
      typeof customStorage.removeItem === 'function',
      'Storage custom.removeItem is a function'
      );
      return customStorage;
    } else if (this._hasLocalStorage()) {
      return Storage.localStorage;
    }
    return Storage.noStorage;
  };

  Storage.noStorage = {
    setItem: function () {},
    getItem: function () {},
    removeItem: function () {}
  };

  Storage.localStorage = {
    setItem: function (key, value) {
      window.localStorage.setItem(key, value);
    },

    getItem: function (key) {
      return window.localStorage.getItem(key);
    },

    removeItem: function (key) {
      window.localStorage.removeItem(key);
    }
  };

  /**
   * StorageValue
   * @param {*}    value
   * @param {Number} expiry - Expire n milliseconds from now
   */
  var StorageValue = Storage.StorageValue = function (value, expiry) {
    this.value  = value;
    this._setExpiry(expiry);
  };

  StorageValue.prototype._setExpiry = function (expiry) {
    if (parseInt(expiry)) {
      this.expiry = Date.now() + expiry;
    } else {
      this.expiry = null;
    }
  };

  /**
   * Checks if the expiry time is in the past
   * @return {Boolean}
   */
  StorageValue.prototype.isExpired = function () {
    return this.expiry && Date.now() > this.expiry;
  };

  /**
   * Sets StorageValue properties from a JSON string.
   * @param  {String} stringifiedJson
   */
  StorageValue.prototype.fromJSON = function (stringifiedJson) {
    var json;
    stringifiedJson = stringifiedJson || '{}';
    json = JSON.parse(stringifiedJson);
    this.value = json.value;
    this.expiry = json.expiry;
  };

  /**
   * Return JSON string
   * @return {String}
   */
  StorageValue.prototype.toJSON = function () {
    return JSON.stringify({
      value: this.value,
      expiry: this.expiry || undefined
    });
  };

  return Storage;
});

define('template-store-singleton', [
  'template-store'
], function (
  TemplateStore
) {
  'use strict';

  /**
   * Global template store. This simplifies development until FileViewer core
   * stabilizes, the plugin interface is ready and the view hierarchy is
   * clear.
   *
   * @todo remove singleton
   */
  return new TemplateStore();
});
define('template-store', [
  'assert',
  'underscore'
], function (
  assert,
  _
) {
  'use strict';

  /**
   * Provides templates by asking a previously configured backend.
   *
   * A backend is a function that accepts a template path and returns the
   * matched template. If no template is found, it returns undefined.
   *
   * @constructor
   */
  var TemplateStore = function () {
    this._backend = null;
  };

  /**
   * Checks if backend is a valid backend.
   * @param {*} backend
   * @return {bool}
   */
  TemplateStore.validBackend = function (backend) {
    return _.isFunction(backend);
  };

  /**
   * Asks its backend for the given templateUrl.
   * @param {string} templateUrl
   * @return {*}
   * @throws {Error} if backend is invalid
   */
  TemplateStore.prototype.get = function (templateUrl) {
    assert(TemplateStore.validBackend(this._backend), 'backend is valid');
    return this._backend(templateUrl);
  };

  /**
   * Sets a backend for this template store.
   * @param {function} backend
   * @throws {Error} if backend is invalid
   */
  TemplateStore.prototype.useBackend = function (backend) {
    assert(TemplateStore.validBackend(backend), 'backend is valid');
    this._backend = backend;
  };

  return TemplateStore;
});
define('TitleView', [
  'backbone', 'icon-utils', 'template-store-singleton'
], function (Backbone, iconUtils, templateStore) {
  'use strict';

  var TitleView = Backbone.View.extend({

    initialize: function (options) {
      this._fileViewer = options.fileViewer;
    },

    render: function () {
      var model = this._fileViewer.getCurrentFile();
      if (!model) { return; }

      this.$el.html(templateStore.get('titleContainer')({
        title: model.get('title'),
        iconClass: iconUtils.getCssClass(model.get('type'))
      }));

      return this;
    }

  });

  return TitleView;
});
define('ToolbarLayer', [
  'jquery',
  'underscore',
  'backbone',
  'template-store-singleton',
  'keyboard'
], function (
  $,
  _,
  Backbone,
  templateStore,
  keyboard
) {
  'use strict';

  // Amount of time to wait before hiding the controls when the mouse stops moving (in ms).
  var HIDE_CONTROLS_TIMEOUT = 500;

  // Amount of time between checking if the mouse is still moving (in ms).
  // Should be smaller than HIDE_CONTROLS_TIMEOUT to prevent flickering (in ms).
  var THROTTLE_MOUSEMOVE = HIDE_CONTROLS_TIMEOUT - 100;

  // Toolbar animation durations (in ms).
  var HIDE_ANIMATION_DURATION = 400;
  var SHOW_ANIMATION_DURATION = 100;

  /**
   * Showing a toolbar in the lower part of the viewer.
   * @constructor
   */
  var ToolbarLayer = Backbone.View.extend({

    className: 'cp-toolbar-layer',

    initialize: function (options) {
      this._fileViewer = options.fileViewer;
      this._viewer = null;
      this._toggleControlsTimeout = null;
      this._actions = [];

      $('#cp-file-body').on('mousemove.toolbarLayer', this._showControlsOnMove.bind(this));
      $(document).on('keydown.tabToNavigate', this._tabToNavigate.bind(this));
    },

    teardown: function () {
      $(document).off('keydown.tabToNavigate');
      $('#cp-file-body').off('mousemove.toolbarLayer');
    },

    render: function () {
      this.$el.html(templateStore.get('toolbar')({
        actions: this._actions
      }));
      this.$el.find('button').tooltip({gravity: 's', aria: true});
      this.$toolbar = this.$('.cp-toolbar');

      var listeners = {};
      this._actions.forEach(function (action) {
        listeners['click .' + action.className] = action.handler;

        if (action.predicate && !action.predicate.call(this)) {
          this.$toolbar.find('.' + action.className).hide();
        }
      }, this);
      this.delegateEvents(listeners);

      this.$toolbar.css('margin-left', -this.$toolbar.width() / 2);

      this.$toolbar.on('click', 'a[href=\'#\']', function (e) {
        e.preventDefault();
      });

      return this;
    },

    setActions: function (actions) {
      this._actions = actions;
      this.render();
    },

    getActions: function () {
      return this._actions;
    },

    setViewer: function (viewer) {
      this._viewer = viewer;
      this.render();
    },

    _tabToNavigate: function (event) {
      if (event.which === keyboard.keys.TAB) {
        this._showControlsOnMove.call(this);
      }
    },

    // Show / hide controls based on mouse movements:
    // - Show the controls when the mouse is moving over the content view.
    // - Hide the controls after a short delay when the mouse stops moving.
    // - Keep the controls open if the mouse is hovering over them.

    _showControlsOnMove : _.throttle(function () {
      if (!this.$toolbar) { return; }

      this.$toolbar.fadeTo(SHOW_ANIMATION_DURATION, 1);
      clearTimeout(this._toggleControlsTimeout);
      this._toggleControlsTimeout = this._setHideTimer();

    }, THROTTLE_MOUSEMOVE),

    _setHideTimer: function () {
      return setTimeout(function () {
        if (this.$toolbar.is(':hover')) { return; }
        if (this.$toolbar.has(':focus').length) { return; }

        this.$toolbar.find('button').each(this._removeTooltipForElement);

        this.$toolbar.fadeTo(HIDE_ANIMATION_DURATION, 0);
      }.bind(this), HIDE_CONTROLS_TIMEOUT);
    },

    _removeTooltipForElement: function (pos, el) {
      var tipsyId = $(el).attr('aria-describedby');
      if (tipsyId) { $('#' + tipsyId).fadeOut(); }
    }

  });

  return ToolbarLayer;
});

define('unknown-file-type-view-provider', [
  'jquery',
  'unknown-file-type-view'
],
function (
  $,
  UnknownFileTypeView
) {
  'use strict';

  var unknownFileTypeViewProvider = function () {
    return $.Deferred().resolve(UnknownFileTypeView);
  };

  return unknownFileTypeViewProvider;
});
define('unknown-file-type-view', [
  'ajs',
  'BaseViewer',
  'template-store-singleton',
  'icon-utils',
  'jquery'
],
function (
  AJS,
  BaseViewer,
  templateStore,
  iconUtils,
  $
) {
  'use strict';

  var UnknownFileTypeView = BaseViewer.extend({

    id: 'cp-unknown-file-type-view-wrapper',

    events: {
      'click .download-button': '_handleDownloadButton'
    },

    initialize: function () {
      BaseViewer.prototype.initialize.apply(this, arguments);
    },

    teardown: function () {
      this.off();
      this.remove();
    },

    render: function () {
      this.$el.html(templateStore.get('unknownFileTypeViewer')({
        iconClass: iconUtils.getCssClass(this.model.get('type')),
        src: this.model.get('srcDownload') || this.model.get('src')
      }));

      var fileView = this._fileViewer.getView();

      // kill sidebar view.
      if (fileView.fileSidebarView.isAnyPanelInitialized()) {
        fileView.fileSidebarView.teardownPanel();
      }

      this.trigger('viewerReady');

      return this;
    },

    setupMode: function (mode) {
      if (mode === 'BASE') {
        $('.cp-toolbar-layer').hide();
      }
    },

    _handleDownloadButton: function () {
      this._fileViewer.trigger('fv.download');
      this._triggerAnalytics();
    },

    _triggerAnalytics: function () {
      this._fileViewer.analytics.send('files.fileviewer-web.file.download', {
        actionType: 'cta'
      });
    }

  });

  return UnknownFileTypeView;
});

define('url', [], function () {
  'use strict';
  return {
    /**
     * Adds an objects keys and values as query parameters to an given URL.
     * @param {string} [url]
     * @param {object} [param]
     * @return {string}
     */
    addQueryParamToUrl: function (url, param) {
      param = param || {};
      url = url.split('?');
      var queryArray = url[1] && url[1].split('&');
      queryArray = queryArray || [];
      Object.keys(param).forEach(function (key, val) {
        queryArray.push(key + '=' + param[key]);
      });
      if (queryArray.length === 0) {
        return url[0];
      }
      return url[0] + '?' + queryArray.join('&');
    },
    parseQueryString: function (query) {
      var parts = query.split('&');
      var params = {};
      for (var i = 0, ii = parts.length; i < ii; ++i) {
        var param = parts[i].split('=');
        var key = param[0].toLowerCase();
        var value = param.length > 1 ? param[1] : null;
        params[decodeURIComponent(key)] = decodeURIComponent(value);
      }
      return params;
    }
  };
});

define('video-view-provider', [
  'jquery',
  'file'
], function (
  $,
  File
) {
  'use strict';

  /**
   * Returns a video viewer.
   * @returns {Promise}
   */
  var videoViewProvider = function () {
    return $.Deferred().resolve(require('video-view'));
  };

  return videoViewProvider;
});
define('viewer-registry',
  [
    'underscore',
    'assert'
  ],
  function (
    _,
    assert
  ) {
    'use strict';

    var createMatchFn = function (expected) {
      return function (current) {
        return current === expected;
      };
    };

    /**
     * ViewerRegistry is responsible for mapping file types to content viewers.
     *
     * When FileViewer is asked to view a file, it uses the file's type and asks
     * its ViewerRegistry for the proper viewer. In addition, ViewerRegistry is
     * exposed to the outside world. Therefore viewers and plugins can register
     * themself without touching FileViwer core.
     *
     * A viewer is a backbone view and is registered via a function that wraps this
     * view into a promise.
     *
     * Multiple viewers for the same filetype are weighted and can thus be overriden.
     * The default weight is 10 with a lower weight meaning higher priority.
     */
    var ViewerRegistry = function () {
      this._handlers = [];
    };

    /**
     * Checks for a valid viewer (is a function).
     *
     * @param {*} previewer
     * @return {boolean}
     */
    ViewerRegistry.isValidPreviewer = function (previewer) {
      return _.isFunction(previewer);
    };

    /**
     * Checks for a valid weight (a number).
     *
     * @param {*} weight
     * @return {boolean}
     */
    ViewerRegistry.isValidWeight = function (weight) {
      return typeof weight === 'number' && !isNaN(weight);
    };

    /**
     * Register a new viewer for a given filetype with an optional weight.
     *
     * fileType can either be a string which is then directly matched or a
     * predicate function that get's handed the current file type and then
     * can return true / false.
     *
     * @param {string|function} fileType
     * @param {function} previewer
     * @param {integer} [weight=10]
     * @thors {Error}
     */
    ViewerRegistry.prototype.register = function (fileType, previewer, weight) {
      var matchesFileType = typeof fileType === 'function' ? fileType : createMatchFn(fileType);

      weight = weight || 10;

      assert(ViewerRegistry.isValidPreviewer(previewer), 'previewer is valid');
      assert(ViewerRegistry.isValidWeight(weight), 'weight is valid');

      this._handlers.push({
        matchesFileType: matchesFileType,
        previewer: previewer,
        weight: weight
      });

      this._updateWeighting();
    };

    /**
     * Get the viewer with the lowest weight for the given fileType.
     *
     * Returns undefined if no viewer is found.
     *
     * @param {string} fileType
     * @return {object} previewer
     */
    ViewerRegistry.prototype.get = function (fileType) {
      var handler = _.find(this._handlers, function (handler) {
        return handler.matchesFileType(fileType);
      });

      return handler && handler.previewer;
    };

    ViewerRegistry.prototype._updateWeighting = function () {
      // Sorts handlers by weight - needs to be called after a new handler is inserted.
      this._handlers = _.sortBy(this._handlers, function (handler) {
        return handler.weight;
      });
    };

    return ViewerRegistry;
  }
);

define('ViewerLayer', [
  'backbone'
], function (Backbone) {
  'use strict';

  var ViewerLayer = Backbone.View.extend({

    className: 'cp-viewer-layer',

    initialize: function (options) {
      this._viewer = null;
    },

    attachViewer: function (viewer) {
      this._viewer = viewer;
      this.$el.prepend(viewer.$el);
    },

    getAttachedViewer: function () {
      return this._viewer;
    },

    teardown: function () {
      if (this._viewer) {
        if (this._viewer.teardown) {
          this._viewer.teardown();
        }
        this._viewer.$el.remove();
      }
    }
  });

  return ViewerLayer;
});

define('WaitingLayer', [
  'backbone', 'template-store-singleton'
], function (Backbone, templateStore) {
  'use strict';

  var WaitingLayer = Backbone.View.extend({

    className: 'cp-waiting-layer',

    initialize: function () {
      this.$el.hide();
    },

    showMessage: function (file, header, message) {
      this.$el.show().html(templateStore.get('waitingMessage')({
        src: file.get('srcDownload') || file.get('src'),
        header: header,
        message: message
      }));
      this.$el.find('.cp-waiting-message-spinner').spin('large', {
        color: '#fff',
        zIndex: 'auto'
      });
    },

    clearMessage: function () {
      this.$el.find('.cp-waiting-message-spinner').spin(false);
      this.$el.hide();
    }

  });

  return WaitingLayer;
});

    // assemble core module by injecting all dependencies
    var FileViewer = require('file-viewer');

    FileViewer.Templates = window.FileViewer.Templates;

    // export FileViewer using CommonJS, AMD and the window object
    if (typeof module !== "undefined" && module.exports) {
        module.exports = FileViewer;
    }

    if (window.define) {
        window.define(
            'FileViewer',
            ['jquery', 'underscore', 'backbone', 'ajs'],
            function () { return FileViewer; }
        );
    }

    window.FileViewer = FileViewer;

}());;
;
/* module-key = 'com.atlassian.jira.jira-fileviewer-plugin:atlassian-fileviewer', location = 'jira-fileviewer-module/node_modules/@atlassian/fileviewer/dist/fileviewer-image-templates.js' */
// This file was automatically generated from image-view.i18n.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace FileViewer.Templates.
 */

if (typeof FileViewer == 'undefined') { var FileViewer = {}; }
if (typeof FileViewer.Templates == 'undefined') { FileViewer.Templates = {}; }


FileViewer.Templates.previewBody = function(opt_data, opt_ignored) {
  return '<div class="cp-scale-info"></div><div class="cp-image-container"></div><span class="cp-baseline-extension"></span>';
};
if (goog.DEBUG) {
  FileViewer.Templates.previewBody.soyTemplateName = 'FileViewer.Templates.previewBody';
}
;
;
/* module-key = 'com.atlassian.jira.jira-fileviewer-plugin:atlassian-fileviewer', location = 'jira-fileviewer-module/node_modules/@atlassian/fileviewer/dist/fileviewer-image.js' */
(function (FileViewer) {
    'use strict';

    // use FileViewer's internal module system
    var define  = FileViewer.define;
    var require = FileViewer.require;

define('image-view',
  [
    'ajs',
    'backbone',
    'underscore',
    'jquery',
    'file',
    'BaseViewer',
    'template-store-singleton'
  ], function (
    AJS,
    Backbone,
    _,
    $,
    File,
    BaseViewer,
    templateStore
  ) {
    'use strict';

    var ImageView = BaseViewer.extend({

      id: 'cp-image-preview',

      tagName: 'div',

      initialize: function () {
        BaseViewer.prototype.initialize.apply(this, arguments);
        this.bindPanEvents();
        this.PIXELATE_THRESHOLD = 2;
        this.MIN_HEIGHT = 100;
        this.ZOOM_IN_FACTOR = 1.25;
        this.ZOOM_OUT_FACTOR = 0.80;
        this._isFitWidth = false;
        this._isFitHeight = false;
      },

      renderAnnotations: function (PinsView) {
        var current = this._fileViewer.getCurrentFile();
        var annotations = current.get('annotations');
        if (current && PinsView) {
          this.pinsView = new PinsView({
            fileViewer: this._fileViewer,
            container: this.$el.find('.cp-image-container'),
            collection: annotations
          });
          this.pinsView.render();
        }

        annotations.on('selected', function (item) {
          var $pin, positionTop, positionLeft;
          if (!item) { return; }

          $pin = this.$el.find('span.cp-active-annotation.selected');
          if (!$pin.length) { return; }

          positionTop = $pin.position().top - (this.$el.height() / 2);
          positionLeft = $pin.position().left - (this.$el.width() / 2);

          this.$el.animate({
            'scrollTop': positionTop,
            'scrollLeft': positionLeft
          });

        }.bind(this));
      },

      bindPanEvents: function () {
        var previous = {x: 0, y: 0},
          view = this;

        var scroll = function (e) {
          var $el = view.$el;
          $el.scrollLeft($el.scrollLeft() + previous.x - e.clientX);
          $el.scrollTop($el.scrollTop() + previous.y - e.clientY);
          previous = { x: e.clientX, y: e.clientY };
          e.preventDefault();
        };

        var unpan = function (e) {
          view.$el.off('mousemove', '#cp-img', scroll);
          view.$image.removeClass('panning');
          e.preventDefault();
        };

        var pan = function (e) {
          $(window).one('mouseup', unpan);
          view.$el.on('mousemove', '#cp-img', scroll);
          view.$image.addClass('panning');
          previous = { x: e.clientX, y: e.clientY };
          e.preventDefault();
        };

        this.$el.on('mousedown', '#cp-img', pan);
      },

      handleResize: function () {
        this._forceRescale();
      },

      _forceRescale: function () {
        if (this._isFitHeight) {
          this.zoomHeight();
        } else if (this._isFitWidth) {
          this.zoomWidth();
        }
      },

      // Set size of the images container to the image size.
      // This is a workaround for `HC-11712 as` it's
      // original fix `e31eac8ac51` caused a new issue: `FIL-555`.
      _fixContainerSize: function () {
        var $container = this.$el.find('.cp-image-container');
        var $image = this.$el.find('#cp-img');
        $container.width($image.width());
        $container.height($image.height());
      },

      // Returns `true` if the original image is either wider
      // or higher than current viewport.
      _isImageBiggerThanViewport: function () {
        return this._isImageWiderThanViewport() ||
             this._isImageHigherThanViewport();
      },

      // Returns `true` if original image is wider than current viewport.
      _isImageWiderThanViewport: function () {
        var viewportWidth = this.$el.width();
        return this.imageWidth > viewportWidth;
      },

      // Returns `true` if original image is higher than current viewport.
      _isImageHigherThanViewport: function () {
        var viewportHeight = this.$el.height();
        return this.imageHeight > viewportHeight;
      },

      _isZoomedToPageFit: function () {
        return this.$el.width() === this.$image.width() ||
             this.$el.height() === this.$image.height();
      },

      _stopFit: function () {
        this._isFitWidth  = false;
        this._isFitHeight = false;
      },

      _showScaleInfo: function (scale) {
        if (this._rescaleForFullScreen) { return; }
        var scalePercentage = Math.round(parseInt(scale * 100, 10));
        var $scaleInfo = this.$el.find('.cp-scale-info');
        $scaleInfo.text(scalePercentage + '%');
        $scaleInfo
          .stop(true, true)
          .fadeIn(50)
          .delay(400)
          .fadeOut(100);
      },

      /**
       * Scale the image up by factor set in `this.ZOOM_IN_FACTOR`
       */
      zoomIn: function () {
        var scaleFactor = (this.$image.width() / this.imageWidth) * this.ZOOM_IN_FACTOR;
        this._stopFit();
        this.changeScale(scaleFactor);
      },

      /**
       * Scale the image down by factor set in `this.ZOOM_OUT_FACTOR`
       */
      zoomOut: function () {
        var scaleFactor = (this.$image.width() / this.imageWidth) * this.ZOOM_OUT_FACTOR;
        this._stopFit();
        this.changeScale(scaleFactor);
      },

      /**
       * If the image is already fit to viewports width then rescale to
       * best fit or else scale to width.
       */
      zoomFit: function () {
        if (this._isZoomedToPageFit()) {
          this.zoomActual();
        } else {
          this.zoomAuto(true);
        }
      },

      /**
       * Scale image to fit into the viewport but don't resize the image
       * over its original dimensions.
       * @param  {Boolean} force - Force best fit even if image is smaller than viewport
       */
      zoomAuto: function (force) {
        if (this._isImageBiggerThanViewport() || force) {
          this._zoomPageFit();
        } else {
          this.zoomActual();
        }
      },

      _zoomPageFit: function () {
        var viewportWidth  = this.$el.width();
        var viewportHeight = this.$el.height();

        if ((viewportWidth / this.imageWidth) > (viewportHeight / this.imageHeight)) {
          this.zoomHeight();
        } else {
          this.zoomWidth();
        }
      },

      /**
       * Scale the image so it fits to the viewports width.
       */
      zoomWidth: function () {
        var viewportWidth = this.$el.width();
        var scaleFactor   = viewportWidth / this.imageWidth;
        this.changeScale(scaleFactor);
        this._stopFit();
        this._isFitWidth = true;
      },

      /**
       * Scale the image so it fits to the viewports height.
       */
      zoomHeight: function () {
        var viewportHeight = this.$el.height();
        var scaleFactor = viewportHeight / this.imageHeight;
        this.changeScale(scaleFactor);
        this._stopFit();
        this._isFitHeight = true;
      },

      /**
       * Scale the image to its original size.
       */
      zoomActual: function () {
        this._stopFit();
        this.changeScale(1);
      },

      /**
       * Change the images scale and re-center it in viewport.
       * @param  {Number} scale - Factor by which to scale the image
       */
      changeScale: function (scale) {
        var viewportWidth = this.$el.width();
        var viewportHeight = this.$el.height();

        var oldWidth = this.$image.width();
        var oldHeight = this.$image.height();
        var containerPosition = this.$el.find('.cp-image-container').position();

        //find the position of the pixel in the centre of the viewport
        var oldPixelCentreWidth = (viewportWidth/2) + Math.abs(containerPosition.left);
        var oldPixelCentreHeight = (viewportHeight/2) + Math.abs(containerPosition.top);

        this.$image.css('width', this.imageWidth * scale);
        this.$image.css('height', this.imageHeight * scale);

        //calculate the new pixel centre after the image has been scaled
        var newPixelCentreWidth = (oldPixelCentreWidth/oldWidth) * this.$image.width();
        var newPixelCentreHeight = (oldPixelCentreHeight/oldHeight) * this.$image.height();

        //move the scrollbar to the new pixel and then center the viewport on it
        this.$el.scrollLeft(newPixelCentreWidth - (viewportWidth/2));
        this.$el.scrollTop(newPixelCentreHeight - (viewportHeight/2));

        this.makePannable();
        this.pixelateIfScaleOverThreshold(scale);
        this._fixContainerSize();
        this._showScaleInfo(scale);
      },

      pixelateIfScaleOverThreshold: function (scale) {
        this.$image.toggleClass(
          'pixelate',
          scale >= this.PIXELATE_THRESHOLD
        );
      },

      makePannable: function () {
        if ((this.$el.width() < this.$image.width()) || (this.$el.height() < this.$image.height())) {
          this.$image.addClass('pannable');
        } else {
          this.$image.removeClass('pannable');
        }
      },

      teardown: function () {
        BaseViewer.prototype.teardown.apply(this);
        $(window).off('resize.cp-repaint');
        this.pinsView && this.pinsView.remove().off();
      },

      getBackground: function () {
        return this.$el.add('.cp-image-container');
      },

      render: function () {
        this.$el.html(templateStore.get('previewBody')());

        this.addImage();

        $(window).on('resize.cp-repaint', _.throttle(this._forceRescale.bind(this), 250));

        return this;
      },

      addImage: function () {
        // This extra work makes the image size the same as the viewport size.
        var $img = $('<img/>')
          .attr('id', 'cp-img')
          .attr('src', this._previewSrc)
          .attr('alt', this.model.get('title'));
        $img.off('load');

        $img.on('load', _.partial(this.scaleAndAppendImage, this));
        $img.on('load', function () {
          this.trigger('viewerReady');
        }.bind(this));
        $img.on('error', function () {
          var err = new Error('Image failed loading');
          err.title = "Ouch! We can\'t load the image.";
          err.description = this.model.get('src');
          err.icon = 'cp-image-icon';
          this.trigger('viewerFail', err);
        }.bind(this));

        $img.on('click', function () {
          document.activeElement.blur();
        });
      },

      scaleAndAppendImage: function (view) {
        var $image = $(this);

        view.imageHeight = this.height;
        view.imageWidth = this.width;
        view.$image = $image;

        $image.css('display', 'none'); // For the fade in.

        var $imageContainer = view.$el.find('.cp-image-container');
        $imageContainer.append(view.$image);
        $imageContainer.addClass('cp-annotatable');

        // Ensure the whole image is displayed by fitting to the larger side.
        view.zoomAuto();
        view.$image.fadeIn(200);

        view.trigger('cp.imageAppended');
      },

      setupMode: function (mode, isModeChanged) {
        if (isModeChanged) {
          clearInterval(this._fullScreenInProgress);
          this.scaleGraduallyToFit();
        }
      },

      scaleGraduallyToFit: function () {
        // When browser change to fullscreen mode, the screen size is changed many times.
        // Here we scale 10 times every 100ms to make the page scaling to full screen smoothly
        var times = 0;
        this._rescaleForFullScreen = true;
        this._fullScreenInProgress = setInterval(function () {
          times++;
          if (times === 11) {
            clearInterval(this._fullScreenInProgress);
            this._rescaleForFullScreen = false;
            this.zoomAuto();
          }
          this.zoomAuto();
        }.bind(this), 100);
      }

    });

    return ImageView;
  });

}(function () {
  var FileViewer;

    if (typeof module !== "undefined" && ('exports' in module)) {
      FileViewer = require('./fileviewer.js');
    } else if (window.require) {
      FileViewer = window.FileViewer;
    } else {
      FileViewer = window.FileViewer;
    }

    return FileViewer;
}()));
;
;
/* module-key = 'com.atlassian.jira.jira-fileviewer-plugin:atlassian-fileviewer', location = 'jira-fileviewer-module/node_modules/video.js/dist/cdn/video.js' */
/*! Video.js v4.12.15 Copyright 2014 Brightcove, Inc. https://github.com/videojs/video.js/blob/master/LICENSE */ 
(function() {var b=void 0,f=!0,j=null,l=!1;function m(){return function(){}}function n(a){return function(){return this[a]}}function p(a){return function(){return a}}var s;document.createElement("video");document.createElement("audio");document.createElement("track");
function t(a,c,d){if("string"===typeof a){0===a.indexOf("#")&&(a=a.slice(1));if(t.Ca[a])return c&&t.log.warn('Player "'+a+'" is already initialised. Options will not be applied.'),d&&t.Ca[a].I(d),t.Ca[a];a=t.m(a)}if(!a||!a.nodeName)throw new TypeError("The element or ID supplied is not valid. (videojs)");return a.player||new t.Player(a,c,d)}var videojs=window.videojs=t;t.fc="4.12";t.sd="https:"==document.location.protocol?"https://":"http://";t.VERSION="4.12.15";
t.options={techOrder:["html5","flash"],html5:{},flash:{},width:300,height:150,defaultVolume:0,playbackRates:[],inactivityTimeout:2E3,children:{mediaLoader:{},posterImage:{},loadingSpinner:{},textTrackDisplay:{},bigPlayButton:{},controlBar:{},errorDisplay:{},textTrackSettings:{}},language:document.getElementsByTagName("html")[0].getAttribute("lang")||navigator.languages&&navigator.languages[0]||navigator.Ef||navigator.language||"en",languages:{},notSupportedMessage:"No compatible source was found for this video."};
"GENERATED_CDN_VSN"!==t.fc&&(videojs.options.flash.swf=t.sd+"vjs.zencdn.net/"+t.fc+"/video-js.swf");t.Gd=function(a,c){t.options.languages[a]=t.options.languages[a]!==b?t.Z.Aa(t.options.languages[a],c):c;return t.options.languages};t.Ca={};"function"===typeof define&&define.amd?define("videojs",[],function(){return videojs}):"object"===typeof exports&&"object"===typeof module&&(module.exports=videojs);t.Ga=t.CoreObject=m();
t.Ga.extend=function(a){var c,d;a=a||{};c=a.init||a.l||this.prototype.init||this.prototype.l||m();d=function(){c.apply(this,arguments)};d.prototype=t.i.create(this.prototype);d.prototype.constructor=d;d.extend=t.Ga.extend;d.create=t.Ga.create;for(var e in a)a.hasOwnProperty(e)&&(d.prototype[e]=a[e]);return d};t.Ga.create=function(){var a=t.i.create(this.prototype);this.apply(a,arguments);return a};
t.b=function(a,c,d){if(t.i.isArray(c))return v(t.b,a,c,d);var e=t.getData(a);e.G||(e.G={});e.G[c]||(e.G[c]=[]);d.s||(d.s=t.s++);e.G[c].push(d);e.ba||(e.disabled=l,e.ba=function(c){if(!e.disabled){c=t.Nb(c);var d=e.G[c.type];if(d)for(var d=d.slice(0),k=0,q=d.length;k<q&&!c.Nc();k++)d[k].call(a,c)}});1==e.G[c].length&&(a.addEventListener?a.addEventListener(c,e.ba,l):a.attachEvent&&a.attachEvent("on"+c,e.ba))};
t.n=function(a,c,d){if(t.Ic(a)){var e=t.getData(a);if(e.G){if(t.i.isArray(c))return v(t.n,a,c,d);if(c){var g=e.G[c];if(g){if(d){if(d.s)for(e=0;e<g.length;e++)g[e].s===d.s&&g.splice(e--,1)}else e.G[c]=[];t.xc(a,c)}}else for(g in e.G)c=g,e.G[c]=[],t.xc(a,c)}}};t.xc=function(a,c){var d=t.getData(a);0===d.G[c].length&&(delete d.G[c],a.removeEventListener?a.removeEventListener(c,d.ba,l):a.detachEvent&&a.detachEvent("on"+c,d.ba));t.hb(d.G)&&(delete d.G,delete d.ba,delete d.disabled);t.hb(d)&&t.Zc(a)};
t.Nb=function(a){function c(){return f}function d(){return l}if(!a||!a.Sb){var e=a||window.event;a={};for(var g in e)"layerX"!==g&&("layerY"!==g&&"keyLocation"!==g)&&("returnValue"==g&&e.preventDefault||(a[g]=e[g]));a.target||(a.target=a.srcElement||document);a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;a.preventDefault=function(){e.preventDefault&&e.preventDefault();a.returnValue=l;a.ee=c;a.defaultPrevented=f};a.ee=d;a.defaultPrevented=l;a.stopPropagation=function(){e.stopPropagation&&
e.stopPropagation();a.cancelBubble=f;a.Sb=c};a.Sb=d;a.stopImmediatePropagation=function(){e.stopImmediatePropagation&&e.stopImmediatePropagation();a.Nc=c;a.stopPropagation()};a.Nc=d;if(a.clientX!=j){g=document.documentElement;var h=document.body;a.pageX=a.clientX+(g&&g.scrollLeft||h&&h.scrollLeft||0)-(g&&g.clientLeft||h&&h.clientLeft||0);a.pageY=a.clientY+(g&&g.scrollTop||h&&h.scrollTop||0)-(g&&g.clientTop||h&&h.clientTop||0)}a.which=a.charCode||a.keyCode;a.button!=j&&(a.button=a.button&1?0:a.button&
4?1:a.button&2?2:0)}return a};t.o=function(a,c){var d=t.Ic(a)?t.getData(a):{},e=a.parentNode||a.ownerDocument;"string"===typeof c&&(c={type:c,target:a});c=t.Nb(c);d.ba&&d.ba.call(a,c);if(e&&!c.Sb()&&c.bubbles!==l)t.o(e,c);else if(!e&&!c.defaultPrevented&&(d=t.getData(c.target),c.target[c.type])){d.disabled=f;if("function"===typeof c.target[c.type])c.target[c.type]();d.disabled=l}return!c.defaultPrevented};
t.N=function(a,c,d){function e(){t.n(a,c,e);d.apply(this,arguments)}if(t.i.isArray(c))return v(t.N,a,c,d);e.s=d.s=d.s||t.s++;t.b(a,c,e)};function v(a,c,d,e){t.tc.forEach(d,function(d){a(c,d,e)})}var w=Object.prototype.hasOwnProperty;t.e=function(a,c){var d;c=c||{};d=document.createElement(a||"div");t.i.ca(c,function(a,c){-1!==a.indexOf("aria-")||"role"==a?d.setAttribute(a,c):d[a]=c});return d};t.va=function(a){return a.charAt(0).toUpperCase()+a.slice(1)};t.i={};
t.i.create=Object.create||function(a){function c(){}c.prototype=a;return new c};t.i.ca=function(a,c,d){for(var e in a)w.call(a,e)&&c.call(d||this,e,a[e])};t.i.D=function(a,c){if(!c)return a;for(var d in c)w.call(c,d)&&(a[d]=c[d]);return a};t.i.Od=function(a,c){var d,e,g;a=t.i.copy(a);for(d in c)w.call(c,d)&&(e=a[d],g=c[d],a[d]=t.i.ib(e)&&t.i.ib(g)?t.i.Od(e,g):c[d]);return a};t.i.copy=function(a){return t.i.D({},a)};
t.i.ib=function(a){return!!a&&"object"===typeof a&&"[object Object]"===a.toString()&&a.constructor===Object};t.i.isArray=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)};t.ge=function(a){return a!==a};t.bind=function(a,c,d){function e(){return c.apply(a,arguments)}c.s||(c.s=t.s++);e.s=d?d+"_"+c.s:c.s;return e};t.ua={};t.s=1;t.expando="vdata"+(new Date).getTime();t.getData=function(a){var c=a[t.expando];c||(c=a[t.expando]=t.s++);t.ua[c]||(t.ua[c]={});return t.ua[c]};
t.Ic=function(a){a=a[t.expando];return!(!a||t.hb(t.ua[a]))};t.Zc=function(a){var c=a[t.expando];if(c){delete t.ua[c];try{delete a[t.expando]}catch(d){a.removeAttribute?a.removeAttribute(t.expando):a[t.expando]=j}}};t.hb=function(a){for(var c in a)if(a[c]!==j)return l;return f};t.Pa=function(a,c){return-1!==(" "+a.className+" ").indexOf(" "+c+" ")};t.p=function(a,c){t.Pa(a,c)||(a.className=""===a.className?c:a.className+" "+c)};
t.r=function(a,c){var d,e;if(t.Pa(a,c)){d=a.className.split(" ");for(e=d.length-1;0<=e;e--)d[e]===c&&d.splice(e,1);a.className=d.join(" ")}};t.A=t.e("video");var x=document.createElement("track");x.Tb="captions";x.ed="en";x.label="English";t.A.appendChild(x);t.P=navigator.userAgent;t.zd=/iPhone/i.test(t.P);t.yd=/iPad/i.test(t.P);t.Ad=/iPod/i.test(t.P);t.xd=t.zd||t.yd||t.Ad;var aa=t,y;var z=t.P.match(/OS (\d+)_/i);y=z&&z[1]?z[1]:b;aa.ff=y;t.wd=/Android/i.test(t.P);var ba=t,B;
var C=t.P.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),D,E;C?(D=C[1]&&parseFloat(C[1]),E=C[2]&&parseFloat(C[2]),B=D&&E?parseFloat(C[1]+"."+C[2]):D?D:j):B=j;ba.ec=B;t.Bd=t.wd&&/webkit/i.test(t.P)&&2.3>t.ec;t.gc=/Firefox/i.test(t.P);t.gf=/Chrome/i.test(t.P);t.pa=/MSIE\s8\.0/.test(t.P);t.Db=!!("ontouchstart"in window||window.ud&&document instanceof window.ud);t.td="backgroundSize"in t.A.style;
t.ad=function(a,c){t.i.ca(c,function(c,e){e===j||"undefined"===typeof e||e===l?a.removeAttribute(c):a.setAttribute(c,e===f?"":e)})};t.Oa=function(a){var c,d,e,g;c={};if(a&&a.attributes&&0<a.attributes.length){d=a.attributes;for(var h=d.length-1;0<=h;h--){e=d[h].name;g=d[h].value;if("boolean"===typeof a[e]||-1!==",autoplay,controls,loop,muted,default,".indexOf(","+e+","))g=g!==j?f:l;c[e]=g}}return c};
t.rf=function(a,c){var d="";document.defaultView&&document.defaultView.getComputedStyle?d=document.defaultView.getComputedStyle(a,"").getPropertyValue(c):a.currentStyle&&(d=a["client"+c.substr(0,1).toUpperCase()+c.substr(1)]+"px");return d};t.Rb=function(a,c){c.firstChild?c.insertBefore(a,c.firstChild):c.appendChild(a)};t.bb={};t.m=function(a){0===a.indexOf("#")&&(a=a.slice(1));return document.getElementById(a)};
t.Na=function(a,c){c=c||a;var d=Math.floor(a%60),e=Math.floor(a/60%60),g=Math.floor(a/3600),h=Math.floor(c/60%60),k=Math.floor(c/3600);if(isNaN(a)||Infinity===a)g=e=d="-";g=0<g||0<k?g+":":"";return g+(((g||10<=h)&&10>e?"0"+e:e)+":")+(10>d?"0"+d:d)};t.Id=function(){document.body.focus();document.onselectstart=p(l)};t.Xe=function(){document.onselectstart=p(f)};t.trim=function(a){return(a+"").replace(/^\s+|\s+$/g,"")};t.round=function(a,c){c||(c=0);return Math.round(a*Math.pow(10,c))/Math.pow(10,c)};
t.xa=function(a,c){return a===b&&c===b?{length:0,start:function(){throw Error("This TimeRanges object is empty");},end:function(){throw Error("This TimeRanges object is empty");}}:{length:1,start:function(){return a},end:function(){return c}}};t.Ie=function(a){try{var c=window.localStorage||l;c&&(c.volume=a)}catch(d){22==d.code||1014==d.code?t.log("LocalStorage Full (VideoJS)",d):18==d.code?t.log("LocalStorage not allowed (VideoJS)",d):t.log("LocalStorage Error (VideoJS)",d)}};
t.Xd=function(a){a.match(/^https?:\/\//)||(a=t.e("div",{innerHTML:'<a href="'+a+'">x</a>'}).firstChild.href);return a};
t.Ae=function(a){var c,d,e,g;g="protocol hostname port pathname search hash host".split(" ");d=t.e("a",{href:a});if(e=""===d.host&&"file:"!==d.protocol)c=t.e("div"),c.innerHTML='<a href="'+a+'"></a>',d=c.firstChild,c.setAttribute("style","display:none; position:absolute;"),document.body.appendChild(c);a={};for(var h=0;h<g.length;h++)a[g[h]]=d[g[h]];"http:"===a.protocol&&(a.host=a.host.replace(/:80$/,""));"https:"===a.protocol&&(a.host=a.host.replace(/:443$/,""));e&&document.body.removeChild(c);return a};
function F(a,c){var d,e;d=Array.prototype.slice.call(c);e=m();e=window.console||{log:e,warn:e,error:e};a?d.unshift(a.toUpperCase()+":"):a="log";t.log.history.push(d);d.unshift("VIDEOJS:");if(e[a].apply)e[a].apply(e,d);else e[a](d.join(" "))}t.log=function(){F(j,arguments)};t.log.history=[];t.log.error=function(){F("error",arguments)};t.log.warn=function(){F("warn",arguments)};
t.Vd=function(a){var c,d;a.getBoundingClientRect&&a.parentNode&&(c=a.getBoundingClientRect());if(!c)return{left:0,top:0};a=document.documentElement;d=document.body;return{left:t.round(c.left+(window.pageXOffset||d.scrollLeft)-(a.clientLeft||d.clientLeft||0)),top:t.round(c.top+(window.pageYOffset||d.scrollTop)-(a.clientTop||d.clientTop||0))}};t.tc={};t.tc.forEach=function(a,c,d){if(t.i.isArray(a)&&c instanceof Function)for(var e=0,g=a.length;e<g;++e)c.call(d||t,a[e],e,a);return a};
t.bf=function(a,c){var d,e,g,h,k,q,r;"string"===typeof a&&(a={uri:a});videojs.Z.Aa({method:"GET",timeout:45E3},a);c=c||m();q=function(){window.clearTimeout(k);c(j,e,e.response||e.responseText)};r=function(a){window.clearTimeout(k);if(!a||"string"===typeof a)a=Error(a);c(a,e)};d=window.XMLHttpRequest;"undefined"===typeof d&&(d=function(){try{return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(c){}try{return new window.ActiveXObject("Msxml2.XMLHTTP")}catch(d){}throw Error("This browser does not support XMLHttpRequest.");
});e=new d;e.uri=a.uri;d=t.Ae(a.uri);g=window.location;d.protocol+d.host!==g.protocol+g.host&&window.XDomainRequest&&!("withCredentials"in e)?(e=new window.XDomainRequest,e.onload=q,e.onerror=r,e.onprogress=m(),e.ontimeout=m()):(h="file:"==d.protocol||"file:"==g.protocol,e.onreadystatechange=function(){if(4===e.readyState){if(e.Ue)return r("timeout");200===e.status||h&&0===e.status?q():r()}},a.timeout&&(k=window.setTimeout(function(){4!==e.readyState&&(e.Ue=f,e.abort())},a.timeout)));try{e.open(a.method||
"GET",a.uri,f)}catch(u){r(u);return}a.withCredentials&&(e.withCredentials=f);a.responseType&&(e.responseType=a.responseType);try{e.send()}catch(A){r(A)}};t.Z={};t.Z.Aa=function(a,c){var d,e,g;a=t.i.copy(a);for(d in c)c.hasOwnProperty(d)&&(e=a[d],g=c[d],a[d]=t.i.ib(e)&&t.i.ib(g)?t.Z.Aa(e,g):c[d]);return a};t.z=m();s=t.z.prototype;s.ab={};s.b=function(a,c){var d=this.addEventListener;this.addEventListener=Function.prototype;t.b(this,a,c);this.addEventListener=d};s.addEventListener=t.z.prototype.b;
s.n=function(a,c){t.n(this,a,c)};s.removeEventListener=t.z.prototype.n;s.N=function(a,c){t.N(this,a,c)};s.o=function(a){var c=a.type||a;"string"===typeof a&&(a={type:c});a=t.Nb(a);if(this.ab[c]&&this["on"+c])this["on"+c](a);t.o(this,a)};s.dispatchEvent=t.z.prototype.o;
t.a=t.Ga.extend({l:function(a,c,d){this.d=a;this.q=t.i.copy(this.q);c=this.options(c);this.Qa=c.id||c.el&&c.el.id;this.Qa||(this.Qa=(a.id&&a.id()||"no_player")+"_component_"+t.s++);this.pe=c.name||j;this.c=c.el||this.e();this.R=[];this.cb={};this.eb={};this.Kc();this.I(d);if(c.$c!==l){var e,g;this.k().reportUserActivity&&(e=t.bind(this.k(),this.k().reportUserActivity),this.b("touchstart",function(){e();this.clearInterval(g);g=this.setInterval(e,250)}),a=function(){e();this.clearInterval(g)},this.b("touchmove",
e),this.b("touchend",a),this.b("touchcancel",a))}}});s=t.a.prototype;s.dispose=function(){this.o({type:"dispose",bubbles:l});if(this.R)for(var a=this.R.length-1;0<=a;a--)this.R[a].dispose&&this.R[a].dispose();this.eb=this.cb=this.R=j;this.n();this.c.parentNode&&this.c.parentNode.removeChild(this.c);t.Zc(this.c);this.c=j};s.d=f;s.k=n("d");s.options=function(a){return a===b?this.q:this.q=t.Z.Aa(this.q,a)};s.e=function(a,c){return t.e(a,c)};
s.v=function(a){var c=this.d.language(),d=this.d.languages();return d&&d[c]&&d[c][a]?d[c][a]:a};s.m=n("c");s.wa=function(){return this.B||this.c};s.id=n("Qa");s.name=n("pe");s.children=n("R");s.Yd=function(a){return this.cb[a]};s.da=function(a){return this.eb[a]};
s.aa=function(a,c){var d,e;"string"===typeof a?(e=a,c=c||{},d=c.componentClass||t.va(e),c.name=e,d=new window.videojs[d](this.d||this,c)):d=a;this.R.push(d);"function"===typeof d.id&&(this.cb[d.id()]=d);(e=e||d.name&&d.name())&&(this.eb[e]=d);"function"===typeof d.el&&d.el()&&this.wa().appendChild(d.el());return d};
s.removeChild=function(a){"string"===typeof a&&(a=this.da(a));if(a&&this.R){for(var c=l,d=this.R.length-1;0<=d;d--)if(this.R[d]===a){c=f;this.R.splice(d,1);break}c&&(this.cb[a.id()]=j,this.eb[a.name()]=j,(c=a.m())&&c.parentNode===this.wa()&&this.wa().removeChild(a.m()))}};
s.Kc=function(){var a,c,d,e,g,h;a=this;c=a.options();if(d=c.children)if(h=function(d,e){c[d]!==b&&(e=c[d]);e!==l&&(a[d]=a.aa(d,e))},t.i.isArray(d))for(var k=0;k<d.length;k++)e=d[k],"string"==typeof e?(g=e,e={}):g=e.name,h(g,e);else t.i.ca(d,h)};s.T=p("");
s.b=function(a,c,d){var e,g,h;"string"===typeof a||t.i.isArray(a)?t.b(this.c,a,t.bind(this,c)):(e=t.bind(this,d),h=this,g=function(){h.n(a,c,e)},g.s=e.s,this.b("dispose",g),d=function(){h.n("dispose",g)},d.s=e.s,a.nodeName?(t.b(a,c,e),t.b(a,"dispose",d)):"function"===typeof a.b&&(a.b(c,e),a.b("dispose",d)));return this};
s.n=function(a,c,d){!a||"string"===typeof a||t.i.isArray(a)?t.n(this.c,a,c):(d=t.bind(this,d),this.n("dispose",d),a.nodeName?(t.n(a,c,d),t.n(a,"dispose",d)):(a.n(c,d),a.n("dispose",d)));return this};s.N=function(a,c,d){var e,g,h;"string"===typeof a||t.i.isArray(a)?t.N(this.c,a,t.bind(this,c)):(e=t.bind(this,d),g=this,h=function(){g.n(a,c,h);e.apply(this,arguments)},h.s=e.s,this.b(a,c,h));return this};s.o=function(a){t.o(this.c,a);return this};
s.I=function(a){a&&(this.ya?a.call(this):(this.mb===b&&(this.mb=[]),this.mb.push(a)));return this};s.Va=function(){this.ya=f;var a=this.mb;this.mb=[];if(a&&0<a.length){for(var c=0,d=a.length;c<d;c++)a[c].call(this);this.o("ready")}};s.Pa=function(a){return t.Pa(this.c,a)};s.p=function(a){t.p(this.c,a);return this};s.r=function(a){t.r(this.c,a);return this};s.show=function(){this.r("vjs-hidden");return this};s.W=function(){this.p("vjs-hidden");return this};function G(a){a.r("vjs-lock-showing")}
s.width=function(a,c){return ca(this,"width",a,c)};s.height=function(a,c){return ca(this,"height",a,c)};s.Qd=function(a,c){return this.width(a,f).height(c)};function ca(a,c,d,e){if(d!==b){if(d===j||t.ge(d))d=0;a.c.style[c]=-1!==(""+d).indexOf("%")||-1!==(""+d).indexOf("px")?d:"auto"===d?"":d+"px";e||a.o("resize");return a}if(!a.c)return 0;d=a.c.style[c];e=d.indexOf("px");return-1!==e?parseInt(d.slice(0,e),10):parseInt(a.c["offset"+t.va(c)],10)}
function da(a){var c,d,e,g,h,k,q,r;c=0;d=j;a.b("touchstart",function(a){1===a.touches.length&&(d=t.i.copy(a.touches[0]),c=(new Date).getTime(),g=f)});a.b("touchmove",function(a){1<a.touches.length?g=l:d&&(k=a.touches[0].pageX-d.pageX,q=a.touches[0].pageY-d.pageY,r=Math.sqrt(k*k+q*q),10<r&&(g=l))});h=function(){g=l};a.b("touchleave",h);a.b("touchcancel",h);a.b("touchend",function(a){d=j;g===f&&(e=(new Date).getTime()-c,200>e&&(a.preventDefault(),this.o("tap")))})}
s.setTimeout=function(a,c){function d(){this.clearTimeout(e)}a=t.bind(this,a);var e=setTimeout(a,c);d.s="vjs-timeout-"+e;this.b("dispose",d);return e};s.clearTimeout=function(a){function c(){}clearTimeout(a);c.s="vjs-timeout-"+a;this.n("dispose",c);return a};s.setInterval=function(a,c){function d(){this.clearInterval(e)}a=t.bind(this,a);var e=setInterval(a,c);d.s="vjs-interval-"+e;this.b("dispose",d);return e};
s.clearInterval=function(a){function c(){}clearInterval(a);c.s="vjs-interval-"+a;this.n("dispose",c);return a};t.w=t.a.extend({l:function(a,c){t.a.call(this,a,c);da(this);this.b("tap",this.u);this.b("click",this.u);this.b("focus",this.kb);this.b("blur",this.jb)}});s=t.w.prototype;
s.e=function(a,c){var d;c=t.i.D({className:this.T(),role:"button","aria-live":"polite",tabIndex:0},c);d=t.a.prototype.e.call(this,a,c);c.innerHTML||(this.B=t.e("div",{className:"vjs-control-content"}),this.Ib=t.e("span",{className:"vjs-control-text",innerHTML:this.v(this.ta)||"Need Text"}),this.B.appendChild(this.Ib),d.appendChild(this.B));return d};s.T=function(){return"vjs-control "+t.a.prototype.T.call(this)};s.u=m();s.kb=function(){t.b(document,"keydown",t.bind(this,this.ka))};
s.ka=function(a){if(32==a.which||13==a.which)a.preventDefault(),this.u()};s.jb=function(){t.n(document,"keydown",t.bind(this,this.ka))};t.S=t.a.extend({l:function(a,c){t.a.call(this,a,c);this.Hd=this.da(this.q.barName);this.handle=this.da(this.q.handleName);this.b("mousedown",this.lb);this.b("touchstart",this.lb);this.b("focus",this.kb);this.b("blur",this.jb);this.b("click",this.u);this.b(a,"controlsvisible",this.update);this.b(a,this.Uc,this.update)}});s=t.S.prototype;
s.e=function(a,c){c=c||{};c.className+=" vjs-slider";c=t.i.D({role:"slider","aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":100,tabIndex:0},c);return t.a.prototype.e.call(this,a,c)};s.lb=function(a){a.preventDefault();t.Id();this.p("vjs-sliding");this.b(document,"mousemove",this.la);this.b(document,"mouseup",this.Ba);this.b(document,"touchmove",this.la);this.b(document,"touchend",this.Ba);this.la(a)};s.la=m();
s.Ba=function(){t.Xe();this.r("vjs-sliding");this.n(document,"mousemove",this.la);this.n(document,"mouseup",this.Ba);this.n(document,"touchmove",this.la);this.n(document,"touchend",this.Ba);this.update()};s.update=function(){if(this.c){var a,c=this.Qb(),d=this.handle,e=this.Hd;if("number"!==typeof c||c!==c||0>c||Infinity===c)c=0;a=c;if(d){a=this.c.offsetWidth;var g=d.m().offsetWidth;a=g?g/a:0;c*=1-a;a=c+a/2;d.m().style.left=t.round(100*c,2)+"%"}e&&(e.m().style.width=t.round(100*a,2)+"%")}};
function ea(a,c){var d,e,g,h;d=a.c;e=t.Vd(d);h=g=d.offsetWidth;d=a.handle;if(a.options().vertical)return h=e.top,e=c.changedTouches?c.changedTouches[0].pageY:c.pageY,d&&(d=d.m().offsetHeight,h+=d/2,g-=d),Math.max(0,Math.min(1,(h-e+g)/g));g=e.left;e=c.changedTouches?c.changedTouches[0].pageX:c.pageX;d&&(d=d.m().offsetWidth,g+=d/2,h-=d);return Math.max(0,Math.min(1,(e-g)/h))}s.kb=function(){this.b(document,"keydown",this.ka)};
s.ka=function(a){if(37==a.which||40==a.which)a.preventDefault(),this.fd();else if(38==a.which||39==a.which)a.preventDefault(),this.gd()};s.jb=function(){this.n(document,"keydown",this.ka)};s.u=function(a){a.stopImmediatePropagation();a.preventDefault()};t.ga=t.a.extend();t.ga.prototype.defaultValue=0;t.ga.prototype.e=function(a,c){c=c||{};c.className+=" vjs-slider-handle";c=t.i.D({innerHTML:'<span class="vjs-control-text">'+this.defaultValue+"</span>"},c);return t.a.prototype.e.call(this,"div",c)};
t.qa=t.a.extend();function fa(a,c){a.aa(c);c.b("click",t.bind(a,function(){G(this)}))}t.qa.prototype.e=function(){var a=this.options().zc||"ul";this.B=t.e(a,{className:"vjs-menu-content"});a=t.a.prototype.e.call(this,"div",{append:this.B,className:"vjs-menu"});a.appendChild(this.B);t.b(a,"click",function(a){a.preventDefault();a.stopImmediatePropagation()});return a};t.M=t.w.extend({l:function(a,c){t.w.call(this,a,c);this.selected(c.selected)}});
t.M.prototype.e=function(a,c){return t.w.prototype.e.call(this,"li",t.i.D({className:"vjs-menu-item",innerHTML:this.v(this.q.label)},c))};t.M.prototype.u=function(){this.selected(f)};t.M.prototype.selected=function(a){a?(this.p("vjs-selected"),this.c.setAttribute("aria-selected",f)):(this.r("vjs-selected"),this.c.setAttribute("aria-selected",l))};
t.O=t.w.extend({l:function(a,c){t.w.call(this,a,c);this.update();this.b("keydown",this.ka);this.c.setAttribute("aria-haspopup",f);this.c.setAttribute("role","button")}});s=t.O.prototype;s.update=function(){var a=this.La();this.za&&this.removeChild(this.za);this.za=a;this.aa(a);this.H&&0===this.H.length?this.W():this.H&&1<this.H.length&&this.show()};s.Ja=l;
s.La=function(){var a=new t.qa(this.d);this.options().title&&a.wa().appendChild(t.e("li",{className:"vjs-menu-title",innerHTML:t.va(this.options().title),Se:-1}));if(this.H=this.createItems())for(var c=0;c<this.H.length;c++)fa(a,this.H[c]);return a};s.Ka=m();s.T=function(){return this.className+" vjs-menu-button "+t.w.prototype.T.call(this)};s.kb=m();s.jb=m();s.u=function(){this.N("mouseout",t.bind(this,function(){G(this.za);this.c.blur()}));this.Ja?H(this):ga(this)};
s.ka=function(a){32==a.which||13==a.which?(this.Ja?H(this):ga(this),a.preventDefault()):27==a.which&&(this.Ja&&H(this),a.preventDefault())};function ga(a){a.Ja=f;a.za.p("vjs-lock-showing");a.c.setAttribute("aria-pressed",f);a.H&&0<a.H.length&&a.H[0].m().focus()}function H(a){a.Ja=l;G(a.za);a.c.setAttribute("aria-pressed",l)}t.J=function(a){"number"===typeof a?this.code=a:"string"===typeof a?this.message=a:"object"===typeof a&&t.i.D(this,a);this.message||(this.message=t.J.Pd[this.code]||"")};
t.J.prototype.code=0;t.J.prototype.message="";t.J.prototype.status=j;t.J.gb="MEDIA_ERR_CUSTOM MEDIA_ERR_ABORTED MEDIA_ERR_NETWORK MEDIA_ERR_DECODE MEDIA_ERR_SRC_NOT_SUPPORTED MEDIA_ERR_ENCRYPTED".split(" ");
t.J.Pd={1:"You aborted the video playback",2:"A network error caused the video download to fail part-way.",3:"The video playback was aborted due to a corruption problem or because the video used features your browser did not support.",4:"The video could not be loaded, either because the server or network failed or because the format is not supported.",5:"The video is encrypted and we do not have the keys to decrypt it."};for(var I=0;I<t.J.gb.length;I++)t.J[t.J.gb[I]]=I,t.J.prototype[t.J.gb[I]]=I;
var J,ha,K,L;
J=["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "),"webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "),"webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "),"mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "),"msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")];
ha=J[0];for(L=0;L<J.length;L++)if(J[L][1]in document){K=J[L];break}if(K){t.bb.Pb={};for(L=0;L<K.length;L++)t.bb.Pb[ha[L]]=K[L]}
t.Player=t.a.extend({l:function(a,c,d){this.L=a;a.id=a.id||"vjs_video_"+t.s++;this.Te=a&&t.Oa(a);c=t.i.D(ia(a),c);this.Pc=c.language||t.options.language;this.je=c.languages||t.options.languages;this.K={};this.Vc=c.poster||"";this.Jb=!!c.controls;a.controls=l;c.$c=l;ja(this,"audio"===this.L.nodeName.toLowerCase());t.a.call(this,this,c,d);this.controls()?this.p("vjs-controls-enabled"):this.p("vjs-controls-disabled");ja(this)&&this.p("vjs-audio");t.Ca[this.Qa]=this;c.plugins&&t.i.ca(c.plugins,function(a,
c){this[a](c)},this);var e,g,h,k,q;e=t.bind(this,this.reportUserActivity);this.b("mousedown",function(){e();this.clearInterval(g);g=this.setInterval(e,250)});this.b("mousemove",function(a){if(a.screenX!=k||a.screenY!=q)k=a.screenX,q=a.screenY,e()});this.b("mouseup",function(){e();this.clearInterval(g)});this.b("keydown",e);this.b("keyup",e);this.setInterval(function(){if(this.Fa){this.Fa=l;this.userActive(f);this.clearTimeout(h);var a=this.options().inactivityTimeout;0<a&&(h=this.setTimeout(function(){this.Fa||
this.userActive(l)},a))}},250)}});s=t.Player.prototype;s.language=function(a){if(a===b)return this.Pc;this.Pc=a;return this};s.languages=n("je");s.q=t.options;s.dispose=function(){this.o("dispose");this.n("dispose");t.Ca[this.Qa]=j;this.L&&this.L.player&&(this.L.player=j);this.c&&this.c.player&&(this.c.player=j);this.h&&this.h.dispose();t.a.prototype.dispose.call(this)};
function ia(a){var c,d,e={sources:[],tracks:[]};c=t.Oa(a);d=c["data-setup"];d!==j&&t.i.D(c,t.JSON.parse(d||"{}"));t.i.D(e,c);if(a.hasChildNodes()){var g,h;a=a.childNodes;g=0;for(h=a.length;g<h;g++)c=a[g],d=c.nodeName.toLowerCase(),"source"===d?e.sources.push(t.Oa(c)):"track"===d&&e.tracks.push(t.Oa(c))}return e}
s.e=function(){var a=this.c=t.a.prototype.e.call(this,"div"),c=this.L,d;c.removeAttribute("width");c.removeAttribute("height");d=t.Oa(c);t.i.ca(d,function(c){"class"==c?a.className=d[c]:a.setAttribute(c,d[c])});c.id+="_html5_api";c.className="vjs-tech";c.player=a.player=this;this.p("vjs-paused");this.width(this.q.width,f);this.height(this.q.height,f);c.ce=c.networkState;c.parentNode&&c.parentNode.insertBefore(a,c);t.Rb(c,a);this.c=a;this.b("loadstart",this.te);this.b("waiting",this.ze);this.b(["canplay",
"canplaythrough","playing","ended"],this.ye);this.b("seeking",this.we);this.b("seeked",this.ve);this.b("ended",this.qe);this.b("play",this.Xb);this.b("firstplay",this.re);this.b("pause",this.Wb);this.b("progress",this.ue);this.b("durationchange",this.Sc);this.b("fullscreenchange",this.se);return a};
function ka(a,c,d){a.h&&(a.ya=l,a.h.dispose(),a.h=l);"Html5"!==c&&a.L&&(t.f.Kb(a.L),a.L=j);a.Ta=c;a.ya=l;var e=t.i.D({source:d,parentEl:a.c},a.q[c.toLowerCase()]);d&&(a.Cc=d.type,d.src==a.K.src&&0<a.K.currentTime&&(e.startTime=a.K.currentTime),a.K.src=d.src);a.h=new window.videojs[c](a,e);a.h.I(function(){this.d.Va()})}s.te=function(){this.r("vjs-ended");this.error(j);this.paused()?la(this,l):this.o("firstplay")};s.Jc=l;
function la(a,c){c!==b&&a.Jc!==c&&((a.Jc=c)?(a.p("vjs-has-started"),a.o("firstplay")):a.r("vjs-has-started"))}s.Xb=function(){this.r("vjs-ended");this.r("vjs-paused");this.p("vjs-playing");la(this,f)};s.ze=function(){this.p("vjs-waiting")};s.ye=function(){this.r("vjs-waiting")};s.we=function(){this.p("vjs-seeking")};s.ve=function(){this.r("vjs-seeking")};s.re=function(){this.q.starttime&&this.currentTime(this.q.starttime);this.p("vjs-has-started")};s.Wb=function(){this.r("vjs-playing");this.p("vjs-paused")};
s.ue=function(){1==this.bufferedPercent()&&this.o("loadedalldata")};s.qe=function(){this.p("vjs-ended");this.q.loop?(this.currentTime(0),this.play()):this.paused()||this.pause()};s.Sc=function(){var a=M(this,"duration");a&&(0>a&&(a=Infinity),this.duration(a),Infinity===a?this.p("vjs-live"):this.r("vjs-live"))};s.se=function(){this.isFullscreen()?this.p("vjs-fullscreen"):this.r("vjs-fullscreen")};
function N(a,c,d){if(a.h&&!a.h.ya)a.h.I(function(){this[c](d)});else try{a.h[c](d)}catch(e){throw t.log(e),e;}}function M(a,c){if(a.h&&a.h.ya)try{return a.h[c]()}catch(d){throw a.h[c]===b?t.log("Video.js: "+c+" method not defined for "+a.Ta+" playback technology.",d):"TypeError"==d.name?(t.log("Video.js: "+c+" unavailable on "+a.Ta+" playback technology element.",d),a.h.ya=l):t.log(d),d;}}s.play=function(){N(this,"play");return this};s.pause=function(){N(this,"pause");return this};
s.paused=function(){return M(this,"paused")===l?l:f};s.currentTime=function(a){return a!==b?(N(this,"setCurrentTime",a),this):this.K.currentTime=M(this,"currentTime")||0};s.duration=function(a){if(a!==b)return this.K.duration=parseFloat(a),this;this.K.duration===b&&this.Sc();return this.K.duration||0};s.remainingTime=function(){return this.duration()-this.currentTime()};s.buffered=function(){var a=M(this,"buffered");if(!a||!a.length)a=t.xa(0,0);return a};
s.bufferedPercent=function(){var a=this.duration(),c=this.buffered(),d=0,e,g;if(!a)return 0;for(var h=0;h<c.length;h++)e=c.start(h),g=c.end(h),g>a&&(g=a),d+=g-e;return d/a};s.volume=function(a){if(a!==b)return a=Math.max(0,Math.min(1,parseFloat(a))),this.K.volume=a,N(this,"setVolume",a),t.Ie(a),this;a=parseFloat(M(this,"volume"));return isNaN(a)?1:a};s.muted=function(a){return a!==b?(N(this,"setMuted",a),this):M(this,"muted")||l};s.Sa=function(){return M(this,"supportsFullScreen")||l};s.Mc=l;
s.isFullscreen=function(a){return a!==b?(this.Mc=!!a,this):this.Mc};s.isFullScreen=function(a){t.log.warn('player.isFullScreen() has been deprecated, use player.isFullscreen() with a lowercase "s")');return this.isFullscreen(a)};
s.requestFullscreen=function(){var a=t.bb.Pb;this.isFullscreen(f);a?(t.b(document,a.fullscreenchange,t.bind(this,function(c){this.isFullscreen(document[a.fullscreenElement]);this.isFullscreen()===l&&t.n(document,a.fullscreenchange,arguments.callee);this.o("fullscreenchange")})),this.c[a.requestFullscreen]()):this.h.Sa()?N(this,"enterFullScreen"):(this.Fc(),this.o("fullscreenchange"));return this};
s.requestFullScreen=function(){t.log.warn('player.requestFullScreen() has been deprecated, use player.requestFullscreen() with a lowercase "s")');return this.requestFullscreen()};s.exitFullscreen=function(){var a=t.bb.Pb;this.isFullscreen(l);if(a)document[a.exitFullscreen]();else this.h.Sa()?N(this,"exitFullScreen"):(this.Lb(),this.o("fullscreenchange"));return this};s.cancelFullScreen=function(){t.log.warn("player.cancelFullScreen() has been deprecated, use player.exitFullscreen()");return this.exitFullscreen()};
s.Fc=function(){this.fe=f;this.Rd=document.documentElement.style.overflow;t.b(document,"keydown",t.bind(this,this.Gc));document.documentElement.style.overflow="hidden";t.p(document.body,"vjs-full-window");this.o("enterFullWindow")};s.Gc=function(a){27===a.keyCode&&(this.isFullscreen()===f?this.exitFullscreen():this.Lb())};s.Lb=function(){this.fe=l;t.n(document,"keydown",this.Gc);document.documentElement.style.overflow=this.Rd;t.r(document.body,"vjs-full-window");this.o("exitFullWindow")};
s.selectSource=function(a){for(var c=0,d=this.q.techOrder;c<d.length;c++){var e=t.va(d[c]),g=window.videojs[e];if(g){if(g.isSupported())for(var h=0,k=a;h<k.length;h++){var q=k[h];if(g.canPlaySource(q))return{source:q,h:e}}}else t.log.error('The "'+e+'" tech is undefined. Skipped browser support check for that tech.')}return l};
s.src=function(a){if(a===b)return M(this,"src");t.i.isArray(a)?ma(this,a):"string"===typeof a?this.src({src:a}):a instanceof Object&&(a.type&&!window.videojs[this.Ta].canPlaySource(a)?ma(this,[a]):(this.K.src=a.src,this.Cc=a.type||"",this.I(function(){window.videojs[this.Ta].prototype.hasOwnProperty("setSource")?N(this,"setSource",a):N(this,"src",a.src);"auto"==this.q.preload&&this.load();this.q.autoplay&&this.play()})));return this};
function ma(a,c){var d=a.selectSource(c);d?d.h===a.Ta?a.src(d.source):ka(a,d.h,d.source):(a.setTimeout(function(){this.error({code:4,message:this.v(this.options().notSupportedMessage)})},0),a.Va())}s.load=function(){N(this,"load");return this};s.currentSrc=function(){return M(this,"currentSrc")||this.K.src||""};s.Nd=function(){return this.Cc||""};s.Ra=function(a){return a!==b?(N(this,"setPreload",a),this.q.preload=a,this):M(this,"preload")};
s.autoplay=function(a){return a!==b?(N(this,"setAutoplay",a),this.q.autoplay=a,this):M(this,"autoplay")};s.loop=function(a){return a!==b?(N(this,"setLoop",a),this.q.loop=a,this):M(this,"loop")};s.poster=function(a){if(a===b)return this.Vc;a||(a="");this.Vc=a;N(this,"setPoster",a);this.o("posterchange");return this};
s.controls=function(a){return a!==b?(a=!!a,this.Jb!==a&&((this.Jb=a)?(this.r("vjs-controls-disabled"),this.p("vjs-controls-enabled"),this.o("controlsenabled")):(this.r("vjs-controls-enabled"),this.p("vjs-controls-disabled"),this.o("controlsdisabled"))),this):this.Jb};t.Player.prototype.bc;s=t.Player.prototype;
s.usingNativeControls=function(a){return a!==b?(a=!!a,this.bc!==a&&((this.bc=a)?(this.p("vjs-using-native-controls"),this.o("usingnativecontrols")):(this.r("vjs-using-native-controls"),this.o("usingcustomcontrols"))),this):this.bc};s.ja=j;s.error=function(a){if(a===b)return this.ja;if(a===j)return this.ja=a,this.r("vjs-error"),this;this.ja=a instanceof t.J?a:new t.J(a);this.o("error");this.p("vjs-error");t.log.error("(CODE:"+this.ja.code+" "+t.J.gb[this.ja.code]+")",this.ja.message,this.ja);return this};
s.ended=function(){return M(this,"ended")};s.seeking=function(){return M(this,"seeking")};s.seekable=function(){return M(this,"seekable")};s.Fa=f;s.reportUserActivity=function(){this.Fa=f};s.ac=f;
s.userActive=function(a){return a!==b?(a=!!a,a!==this.ac&&((this.ac=a)?(this.Fa=f,this.r("vjs-user-inactive"),this.p("vjs-user-active"),this.o("useractive")):(this.Fa=l,this.h&&this.h.N("mousemove",function(a){a.stopPropagation();a.preventDefault()}),this.r("vjs-user-active"),this.p("vjs-user-inactive"),this.o("userinactive"))),this):this.ac};s.playbackRate=function(a){return a!==b?(N(this,"setPlaybackRate",a),this):this.h&&this.h.featuresPlaybackRate?M(this,"playbackRate"):1};s.Lc=l;
function ja(a,c){return c!==b?(a.Lc=!!c,a):a.Lc}s.networkState=function(){return M(this,"networkState")};s.readyState=function(){return M(this,"readyState")};s.textTracks=function(){return this.h&&this.h.textTracks()};s.X=function(){return this.h&&this.h.remoteTextTracks()};s.addTextTrack=function(a,c,d){return this.h&&this.h.addTextTrack(a,c,d)};s.ha=function(a){return this.h&&this.h.addRemoteTextTrack(a)};s.Da=function(a){this.h&&this.h.removeRemoteTextTrack(a)};t.tb=t.a.extend();
t.tb.prototype.q={sf:"play",children:{playToggle:{},currentTimeDisplay:{},timeDivider:{},durationDisplay:{},remainingTimeDisplay:{},liveDisplay:{},progressControl:{},fullscreenToggle:{},volumeControl:{},muteToggle:{},playbackRateMenuButton:{},subtitlesButton:{},captionsButton:{},chaptersButton:{}}};t.tb.prototype.e=function(){return t.e("div",{className:"vjs-control-bar"})};t.hc=t.a.extend({l:function(a,c){t.a.call(this,a,c)}});
t.hc.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-live-controls vjs-control"});this.B=t.e("div",{className:"vjs-live-display",innerHTML:'<span class="vjs-control-text">'+this.v("Stream Type")+"</span>"+this.v("LIVE"),"aria-live":"off"});a.appendChild(this.B);return a};t.kc=t.w.extend({l:function(a,c){t.w.call(this,a,c);this.b(a,"play",this.Xb);this.b(a,"pause",this.Wb)}});s=t.kc.prototype;s.ta="Play";s.T=function(){return"vjs-play-control "+t.w.prototype.T.call(this)};
s.u=function(){this.d.paused()?this.d.play():this.d.pause()};s.Xb=function(){this.r("vjs-paused");this.p("vjs-playing");this.c.children[0].children[0].innerHTML=this.v("Pause")};s.Wb=function(){this.r("vjs-playing");this.p("vjs-paused");this.c.children[0].children[0].innerHTML=this.v("Play")};t.ub=t.a.extend({l:function(a,c){t.a.call(this,a,c);this.b(a,"timeupdate",this.fa)}});
t.ub.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-current-time vjs-time-controls vjs-control"});this.B=t.e("div",{className:"vjs-current-time-display",innerHTML:'<span class="vjs-control-text">Current Time </span>0:00',"aria-live":"off"});a.appendChild(this.B);return a};t.ub.prototype.fa=function(){var a=this.d.nb?this.d.K.currentTime:this.d.currentTime();this.B.innerHTML='<span class="vjs-control-text">'+this.v("Current Time")+"</span> "+t.Na(a,this.d.duration())};
t.vb=t.a.extend({l:function(a,c){t.a.call(this,a,c);this.b(a,"timeupdate",this.fa);this.b(a,"loadedmetadata",this.fa)}});t.vb.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-duration vjs-time-controls vjs-control"});this.B=t.e("div",{className:"vjs-duration-display",innerHTML:'<span class="vjs-control-text">'+this.v("Duration Time")+"</span> 0:00","aria-live":"off"});a.appendChild(this.B);return a};
t.vb.prototype.fa=function(){var a=this.d.duration();a&&(this.B.innerHTML='<span class="vjs-control-text">'+this.v("Duration Time")+"</span> "+t.Na(a))};t.qc=t.a.extend({l:function(a,c){t.a.call(this,a,c)}});t.qc.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-time-divider",innerHTML:"<div><span>/</span></div>"})};t.Cb=t.a.extend({l:function(a,c){t.a.call(this,a,c);this.b(a,"timeupdate",this.fa)}});
t.Cb.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-remaining-time vjs-time-controls vjs-control"});this.B=t.e("div",{className:"vjs-remaining-time-display",innerHTML:'<span class="vjs-control-text">'+this.v("Remaining Time")+"</span> -0:00","aria-live":"off"});a.appendChild(this.B);return a};t.Cb.prototype.fa=function(){this.d.duration()&&(this.B.innerHTML='<span class="vjs-control-text">'+this.v("Remaining Time")+"</span> -"+t.Na(this.d.remainingTime()))};
t.Ya=t.w.extend({l:function(a,c){t.w.call(this,a,c)}});t.Ya.prototype.ta="Fullscreen";t.Ya.prototype.T=function(){return"vjs-fullscreen-control "+t.w.prototype.T.call(this)};t.Ya.prototype.u=function(){this.d.isFullscreen()?(this.d.exitFullscreen(),this.Ib.innerHTML=this.v("Fullscreen")):(this.d.requestFullscreen(),this.Ib.innerHTML=this.v("Non-Fullscreen"))};t.Bb=t.a.extend({l:function(a,c){t.a.call(this,a,c)}});t.Bb.prototype.q={children:{seekBar:{}}};
t.Bb.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-progress-control vjs-control"})};t.nc=t.S.extend({l:function(a,c){t.S.call(this,a,c);this.b(a,"timeupdate",this.Ea);a.I(t.bind(this,this.Ea))}});s=t.nc.prototype;s.q={children:{loadProgressBar:{},playProgressBar:{},seekHandle:{}},barName:"playProgressBar",handleName:"seekHandle"};s.Uc="timeupdate";s.e=function(){return t.S.prototype.e.call(this,"div",{className:"vjs-progress-holder","aria-label":"video progress bar"})};
s.Ea=function(){var a=this.d.nb?this.d.K.currentTime:this.d.currentTime();this.c.setAttribute("aria-valuenow",t.round(100*this.Qb(),2));this.c.setAttribute("aria-valuetext",t.Na(a,this.d.duration()))};s.Qb=function(){return this.d.currentTime()/this.d.duration()};s.lb=function(a){t.S.prototype.lb.call(this,a);this.d.nb=f;this.d.p("vjs-scrubbing");this.$e=!this.d.paused();this.d.pause()};s.la=function(a){a=ea(this,a)*this.d.duration();a==this.d.duration()&&(a-=0.1);this.d.currentTime(a)};
s.Ba=function(a){t.S.prototype.Ba.call(this,a);this.d.nb=l;this.d.r("vjs-scrubbing");this.$e&&this.d.play()};s.gd=function(){this.d.currentTime(this.d.currentTime()+5)};s.fd=function(){this.d.currentTime(this.d.currentTime()-5)};t.yb=t.a.extend({l:function(a,c){t.a.call(this,a,c);this.b(a,"progress",this.update)}});t.yb.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-load-progress",innerHTML:'<span class="vjs-control-text"><span>'+this.v("Loaded")+"</span>: 0%</span>"})};
t.yb.prototype.update=function(){var a,c,d,e,g=this.d.buffered();a=this.d.duration();var h,k=this.d;h=k.buffered();k=k.duration();h=h.end(h.length-1);h>k&&(h=k);k=this.c.children;this.c.style.width=100*(h/a||0)+"%";for(a=0;a<g.length;a++)c=g.start(a),d=g.end(a),(e=k[a])||(e=this.c.appendChild(t.e())),e.style.left=100*(c/h||0)+"%",e.style.width=100*((d-c)/h||0)+"%";for(a=k.length;a>g.length;a--)this.c.removeChild(k[a-1])};t.jc=t.a.extend({l:function(a,c){t.a.call(this,a,c)}});
t.jc.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-play-progress",innerHTML:'<span class="vjs-control-text"><span>'+this.v("Progress")+"</span>: 0%</span>"})};t.Za=t.ga.extend({l:function(a,c){t.ga.call(this,a,c);this.b(a,"timeupdate",this.fa)}});t.Za.prototype.defaultValue="00:00";t.Za.prototype.e=function(){return t.ga.prototype.e.call(this,"div",{className:"vjs-seek-handle","aria-live":"off"})};
t.Za.prototype.fa=function(){var a=this.d.nb?this.d.K.currentTime:this.d.currentTime();this.c.innerHTML='<span class="vjs-control-text">'+t.Na(a,this.d.duration())+"</span>"};t.Fb=t.a.extend({l:function(a,c){t.a.call(this,a,c);a.h&&a.h.featuresVolumeControl===l&&this.p("vjs-hidden");this.b(a,"loadstart",function(){a.h.featuresVolumeControl===l?this.p("vjs-hidden"):this.r("vjs-hidden")})}});t.Fb.prototype.q={children:{volumeBar:{}}};
t.Fb.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-volume-control vjs-control"})};t.Eb=t.S.extend({l:function(a,c){t.S.call(this,a,c);this.b(a,"volumechange",this.Ea);a.I(t.bind(this,this.Ea))}});s=t.Eb.prototype;s.Ea=function(){this.c.setAttribute("aria-valuenow",t.round(100*this.d.volume(),2));this.c.setAttribute("aria-valuetext",t.round(100*this.d.volume(),2)+"%")};s.q={children:{volumeLevel:{},volumeHandle:{}},barName:"volumeLevel",handleName:"volumeHandle"};
s.Uc="volumechange";s.e=function(){return t.S.prototype.e.call(this,"div",{className:"vjs-volume-bar","aria-label":"volume level"})};s.la=function(a){this.d.muted()&&this.d.muted(l);this.d.volume(ea(this,a))};s.Qb=function(){return this.d.muted()?0:this.d.volume()};s.gd=function(){this.d.volume(this.d.volume()+0.1)};s.fd=function(){this.d.volume(this.d.volume()-0.1)};t.rc=t.a.extend({l:function(a,c){t.a.call(this,a,c)}});
t.rc.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-volume-level",innerHTML:'<span class="vjs-control-text"></span>'})};t.Gb=t.ga.extend();t.Gb.prototype.defaultValue="00:00";t.Gb.prototype.e=function(){return t.ga.prototype.e.call(this,"div",{className:"vjs-volume-handle"})};
t.ra=t.w.extend({l:function(a,c){t.w.call(this,a,c);this.b(a,"volumechange",this.update);a.h&&a.h.featuresVolumeControl===l&&this.p("vjs-hidden");this.b(a,"loadstart",function(){a.h.featuresVolumeControl===l?this.p("vjs-hidden"):this.r("vjs-hidden")})}});t.ra.prototype.e=function(){return t.w.prototype.e.call(this,"div",{className:"vjs-mute-control vjs-control",innerHTML:'<div><span class="vjs-control-text">'+this.v("Mute")+"</span></div>"})};
t.ra.prototype.u=function(){this.d.muted(this.d.muted()?l:f)};t.ra.prototype.update=function(){var a=this.d.volume(),c=3;0===a||this.d.muted()?c=0:0.33>a?c=1:0.67>a&&(c=2);this.d.muted()?this.c.children[0].children[0].innerHTML!=this.v("Unmute")&&(this.c.children[0].children[0].innerHTML=this.v("Unmute")):this.c.children[0].children[0].innerHTML!=this.v("Mute")&&(this.c.children[0].children[0].innerHTML=this.v("Mute"));for(a=0;4>a;a++)t.r(this.c,"vjs-vol-"+a);t.p(this.c,"vjs-vol-"+c)};
t.Ha=t.O.extend({l:function(a,c){t.O.call(this,a,c);this.b(a,"volumechange",this.af);a.h&&a.h.featuresVolumeControl===l&&this.p("vjs-hidden");this.b(a,"loadstart",function(){a.h.featuresVolumeControl===l?this.p("vjs-hidden"):this.r("vjs-hidden")});this.p("vjs-menu-button")}});t.Ha.prototype.La=function(){var a=new t.qa(this.d,{zc:"div"}),c=new t.Eb(this.d,this.q.volumeBar);c.b("focus",function(){a.p("vjs-lock-showing")});c.b("blur",function(){G(a)});a.aa(c);return a};
t.Ha.prototype.u=function(){t.ra.prototype.u.call(this);t.O.prototype.u.call(this)};t.Ha.prototype.e=function(){return t.w.prototype.e.call(this,"div",{className:"vjs-volume-menu-button vjs-menu-button vjs-control",innerHTML:'<div><span class="vjs-control-text">'+this.v("Mute")+"</span></div>"})};t.Ha.prototype.af=t.ra.prototype.update;t.lc=t.O.extend({l:function(a,c){t.O.call(this,a,c);this.pd();this.od();this.b(a,"loadstart",this.pd);this.b(a,"ratechange",this.od)}});s=t.lc.prototype;s.ta="Playback Rate";
s.className="vjs-playback-rate";s.e=function(){var a=t.O.prototype.e.call(this);this.Oc=t.e("div",{className:"vjs-playback-rate-value",innerHTML:1});a.appendChild(this.Oc);return a};s.La=function(){var a=new t.qa(this.k()),c=this.k().options().playbackRates;if(c)for(var d=c.length-1;0<=d;d--)a.aa(new t.Ab(this.k(),{rate:c[d]+"x"}));return a};s.Ea=function(){this.m().setAttribute("aria-valuenow",this.k().playbackRate())};
s.u=function(){for(var a=this.k().playbackRate(),c=this.k().options().playbackRates,d=c[0],e=0;e<c.length;e++)if(c[e]>a){d=c[e];break}this.k().playbackRate(d)};function na(a){return a.k().h&&a.k().h.featuresPlaybackRate&&a.k().options().playbackRates&&0<a.k().options().playbackRates.length}s.pd=function(){na(this)?this.r("vjs-hidden"):this.p("vjs-hidden")};s.od=function(){na(this)&&(this.Oc.innerHTML=this.k().playbackRate()+"x")};
t.Ab=t.M.extend({zc:"button",l:function(a,c){var d=this.label=c.rate,e=this.Wc=parseFloat(d,10);c.label=d;c.selected=1===e;t.M.call(this,a,c);this.b(a,"ratechange",this.update)}});t.Ab.prototype.u=function(){t.M.prototype.u.call(this);this.k().playbackRate(this.Wc)};t.Ab.prototype.update=function(){this.selected(this.k().playbackRate()==this.Wc)};t.mc=t.w.extend({l:function(a,c){t.w.call(this,a,c);this.update();a.b("posterchange",t.bind(this,this.update))}});s=t.mc.prototype;
s.dispose=function(){this.k().n("posterchange",this.update);t.w.prototype.dispose.call(this)};s.e=function(){var a=t.e("div",{className:"vjs-poster",tabIndex:-1});t.td||(this.Mb=t.e("img"),a.appendChild(this.Mb));return a};s.update=function(){var a=this.k().poster();this.na(a);a?this.show():this.W()};s.na=function(a){var c;this.Mb?this.Mb.src=a:(c="",a&&(c='url("'+a+'")'),this.c.style.backgroundImage=c)};s.u=function(){this.d.play()};t.ic=t.a.extend({l:function(a,c){t.a.call(this,a,c)}});
t.ic.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-loading-spinner"})};t.rb=t.w.extend();t.rb.prototype.e=function(){return t.w.prototype.e.call(this,"div",{className:"vjs-big-play-button",innerHTML:'<span aria-hidden="true"></span>',"aria-label":"play video"})};t.rb.prototype.u=function(){this.d.play()};t.wb=t.a.extend({l:function(a,c){t.a.call(this,a,c);this.update();this.b(a,"error",this.update)}});
t.wb.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-error-display"});this.B=t.e("div");a.appendChild(this.B);return a};t.wb.prototype.update=function(){this.k().error()&&(this.B.innerHTML=this.v(this.k().error().message))};var O;t.j=t.a.extend({l:function(a,c,d){c=c||{};c.$c=l;t.a.call(this,a,c,d);this.featuresProgressEvents||this.ne();this.featuresTimeupdateEvents||this.oe();this.be();this.featuresNativeTextTracks||this.Sd();this.de()}});s=t.j.prototype;
s.be=function(){var a,c;a=this.k();c=function(){a.controls()&&!a.usingNativeControls()&&this.Fd()};this.I(c);this.b(a,"controlsenabled",c);this.b(a,"controlsdisabled",this.De);this.I(function(){this.networkState&&0<this.networkState()&&this.k().o("loadstart")})};
s.Fd=function(){var a;this.b("mousedown",this.u);this.b("touchstart",function(){a=this.d.userActive()});this.b("touchmove",function(){a&&this.k().reportUserActivity()});this.b("touchend",function(a){a.preventDefault()});da(this);this.b("tap",this.xe)};s.De=function(){this.n("tap");this.n("touchstart");this.n("touchmove");this.n("touchleave");this.n("touchcancel");this.n("touchend");this.n("click");this.n("mousedown")};
s.u=function(a){0===a.button&&this.k().controls()&&(this.k().paused()?this.k().play():this.k().pause())};s.xe=function(){this.k().userActive(!this.k().userActive())};s.ne=function(){this.Qc=f;this.We()};s.me=function(){this.Qc=l;this.hd()};s.We=function(){this.Ce=this.setInterval(function(){var a=this.k().bufferedPercent();this.Jd!=a&&this.k().o("progress");this.Jd=a;1===a&&this.hd()},500)};s.hd=function(){this.clearInterval(this.Ce)};
s.oe=function(){var a=this.d;this.Vb=f;this.b(a,"play",this.md);this.b(a,"pause",this.qb);this.N("timeupdate",function(){this.featuresTimeupdateEvents=f;this.Rc()})};s.Rc=function(){var a=this.d;this.Vb=l;this.qb();this.n(a,"play",this.md);this.n(a,"pause",this.qb)};s.md=function(){this.Bc&&this.qb();this.Bc=this.setInterval(function(){this.k().o("timeupdate")},250)};s.qb=function(){this.clearInterval(this.Bc);this.k().o("timeupdate")};s.dispose=function(){this.Qc&&this.me();this.Vb&&this.Rc();t.a.prototype.dispose.call(this)};
s.Zb=function(){this.Vb&&this.k().o("timeupdate")};s.de=function(){function a(){var a=c.da("textTrackDisplay");a&&a.C()}var c=this.d,d;if(d=this.textTracks())d.addEventListener("removetrack",a),d.addEventListener("addtrack",a),this.b("dispose",t.bind(this,function(){d.removeEventListener("removetrack",a);d.removeEventListener("addtrack",a)}))};
s.Sd=function(){var a=this.d,c,d,e;window.WebVTT||(e=document.createElement("script"),e.src=a.options()["vtt.js"]||"../node_modules/vtt.js/dist/vtt.js",a.m().appendChild(e),window.WebVTT=f);if(d=this.textTracks())c=function(){var c,d,e;e=a.da("textTrackDisplay");e.C();for(c=0;c<this.length;c++)d=this[c],d.removeEventListener("cuechange",t.bind(e,e.C)),"showing"===d.mode&&d.addEventListener("cuechange",t.bind(e,e.C))},d.addEventListener("change",c),this.b("dispose",t.bind(this,function(){d.removeEventListener("change",
c)}))};s.textTracks=function(){this.d.ld=this.d.ld||new t.F;return this.d.ld};s.X=function(){this.d.Xc=this.d.Xc||new t.F;return this.d.Xc};O=function(a,c,d,e,g){var h=a.textTracks();g=g||{};g.kind=c;d&&(g.label=d);e&&(g.language=e);g.player=a.d;a=new t.t(g);P(h,a);return a};t.j.prototype.addTextTrack=function(a,c,d){if(!a)throw Error("TextTrack kind is required but was not provided");return O(this,a,c,d)};t.j.prototype.ha=function(a){a=O(this,a.kind,a.label,a.language,a);P(this.X(),a);return{Y:a}};
t.j.prototype.Da=function(a){Q(this.textTracks(),a);Q(this.X(),a)};t.j.prototype.bd=m();t.j.prototype.featuresVolumeControl=f;t.j.prototype.featuresFullscreenResize=l;t.j.prototype.featuresPlaybackRate=l;t.j.prototype.featuresProgressEvents=l;t.j.prototype.featuresTimeupdateEvents=l;t.j.prototype.featuresNativeTextTracks=l;
t.j.dc=function(a){a.registerSourceHandler=function(c,d){var e=a.cd;e||(e=a.cd=[]);d===b&&(d=e.length);e.splice(d,0,c)};a.ob=function(c){for(var d=a.cd||[],e,g=0;g<d.length;g++)if(e=d[g].canHandleSource(c))return d[g];return j};a.wc=function(c){var d=a.ob(c);return d?d.canHandleSource(c):""};a.prototype.ma=function(c){var d=a.ob(c);d||(a.nativeSourceHandler?d=a.nativeSourceHandler:t.log.error("No source hander found for the current source."));this.ia();this.n("dispose",this.ia);this.fb=c;this.$b=
d.handleSource(c,this);this.b("dispose",this.ia);return this};a.prototype.ia=function(){this.$b&&this.$b.dispose&&this.$b.dispose()}};t.media={};
t.f=t.j.extend({l:function(a,c,d){var e,g,h;if(c.nativeCaptions===l||c.nativeTextTracks===l)this.featuresNativeTextTracks=l;t.j.call(this,a,c,d);for(d=t.f.xb.length-1;0<=d;d--)this.b(t.f.xb[d],this.Td);(c=c.source)&&(this.c.currentSrc!==c.src||a.L&&3===a.L.ce)&&this.ma(c);if(this.c.hasChildNodes()){d=this.c.childNodes;e=d.length;for(c=[];e--;)g=d[e],h=g.nodeName.toLowerCase(),"track"===h&&(this.featuresNativeTextTracks?P(this.X(),g.track):c.push(g));for(d=0;d<c.length;d++)this.c.removeChild(c[d])}if(t.Db&&
a.options().nativeControlsForTouch===f){var k,q,r,u;k=this;q=this.k();c=q.controls();k.c.controls=!!c;r=function(){k.c.controls=f};u=function(){k.c.controls=l};q.b("controlsenabled",r);q.b("controlsdisabled",u);c=function(){q.n("controlsenabled",r);q.n("controlsdisabled",u)};k.b("dispose",c);q.b("usingcustomcontrols",c);q.usingNativeControls(f)}a.I(function(){this.src()&&(this.L&&this.q.autoplay&&this.paused())&&(delete this.L.poster,this.play())});this.Va()}});s=t.f.prototype;
s.dispose=function(){t.f.Kb(this.c);t.j.prototype.dispose.call(this)};
s.e=function(){var a=this.d,c,d,e,g=a.L;if(!g||this.movingMediaElementInDOM===l){g?(e=g.cloneNode(l),t.f.Kb(g),g=e,a.L=j):(g=t.e("video"),e=videojs.Z.Aa({},a.Te),(!t.Db||a.options().nativeControlsForTouch!==f)&&delete e.controls,t.ad(g,t.i.D(e,{id:a.id()+"_html5_api","class":"vjs-tech"})));g.player=a;if(a.q.nd)for(e=0;e<a.q.nd.length;e++)c=a.q.nd[e],d=document.createElement("track"),d.Tb=c.Tb,d.label=c.label,d.ed=c.ed,d.src=c.src,"default"in c&&d.setAttribute("default","default"),g.appendChild(d);
t.Rb(g,a.m())}c=["autoplay","preload","loop","muted"];for(e=c.length-1;0<=e;e--){d=c[e];var h={};"undefined"!==typeof a.q[d]&&(h[d]=a.q[d]);t.ad(g,h)}return g};s.Td=function(a){"error"==a.type&&this.error()?this.k().error(this.error().code):(a.bubbles=l,this.k().o(a))};s.play=function(){this.c.play()};s.pause=function(){this.c.pause()};s.paused=function(){return this.c.paused};s.currentTime=function(){return this.c.currentTime};s.Zb=function(a){try{this.c.currentTime=a}catch(c){t.log(c,"Video is not ready. (Video.js)")}};
s.duration=function(){return this.c.duration||0};s.buffered=function(){return this.c.buffered};s.volume=function(){return this.c.volume};s.Oe=function(a){this.c.volume=a};s.muted=function(){return this.c.muted};s.Ke=function(a){this.c.muted=a};s.width=function(){return this.c.offsetWidth};s.height=function(){return this.c.offsetHeight};s.Sa=function(){return"function"==typeof this.c.webkitEnterFullScreen&&(/Android/.test(t.P)||!/Chrome|Mac OS X 10.5/.test(t.P))?f:l};
s.Ec=function(){var a=this.c;"webkitDisplayingFullscreen"in a&&this.N("webkitbeginfullscreen",function(){this.d.isFullscreen(f);this.N("webkitendfullscreen",function(){this.d.isFullscreen(l);this.d.o("fullscreenchange")});this.d.o("fullscreenchange")});a.paused&&a.networkState<=a.ef?(this.c.play(),this.setTimeout(function(){a.pause();a.webkitEnterFullScreen()},0)):a.webkitEnterFullScreen()};s.Ud=function(){this.c.webkitExitFullScreen()};
function oa(a,c){var d=/^blob\:/i;return c&&a&&d.test(a)?c:a}s.src=function(a){var c=this.c.src;if(a===b)return oa(c,this.dd);this.na(a)};s.na=function(a){this.c.src=a};s.load=function(){this.c.load()};s.currentSrc=function(){var a=this.c.currentSrc;return!this.fb?a:oa(a,this.fb.src)};s.poster=function(){return this.c.poster};s.bd=function(a){this.c.poster=a};s.Ra=function(){return this.c.Ra};s.Me=function(a){this.c.Ra=a};s.autoplay=function(){return this.c.autoplay};
s.He=function(a){this.c.autoplay=a};s.controls=function(){return this.c.controls};s.loop=function(){return this.c.loop};s.Je=function(a){this.c.loop=a};s.error=function(){return this.c.error};s.seeking=function(){return this.c.seeking};s.seekable=function(){return this.c.seekable};s.ended=function(){return this.c.ended};s.playbackRate=function(){return this.c.playbackRate};s.Le=function(a){this.c.playbackRate=a};s.networkState=function(){return this.c.networkState};s.readyState=function(){return this.c.readyState};
s.textTracks=function(){return!this.featuresNativeTextTracks?t.j.prototype.textTracks.call(this):this.c.textTracks};s.addTextTrack=function(a,c,d){return!this.featuresNativeTextTracks?t.j.prototype.addTextTrack.call(this,a,c,d):this.c.addTextTrack(a,c,d)};
s.ha=function(a){if(!this.featuresNativeTextTracks)return t.j.prototype.ha.call(this,a);var c=document.createElement("track");a=a||{};a.kind&&(c.kind=a.kind);a.label&&(c.label=a.label);if(a.language||a.srclang)c.srclang=a.language||a.srclang;a["default"]&&(c["default"]=a["default"]);a.id&&(c.id=a.id);a.src&&(c.src=a.src);this.m().appendChild(c);P(this.X(),c.Y);return c};
s.Da=function(a){if(!this.featuresNativeTextTracks)return t.j.prototype.Da.call(this,a);var c,d;Q(this.X(),a);c=this.m().querySelectorAll("track");for(d=0;d<c.length;d++)if(c[d]===a||c[d].track===a){c[d].parentNode.removeChild(c[d]);break}};t.f.isSupported=function(){try{t.A.volume=0.5}catch(a){return l}return!!t.A.canPlayType};t.j.dc(t.f);var pa=t.f.prototype.ma,qa=t.f.prototype.ia;t.f.prototype.ma=function(a){var c=pa.call(this,a);this.dd=a.src;return c};t.f.prototype.ia=function(){this.dd=b;return qa.call(this)};
t.f.nativeSourceHandler={};t.f.nativeSourceHandler.canHandleSource=function(a){function c(a){try{return t.A.canPlayType(a)}catch(c){return""}}return a.type?c(a.type):a.src?(a=(a=a.src.match(/\.([^.\/\?]+)(\?[^\/]+)?$/i))&&a[1],c("video/"+a)):""};t.f.nativeSourceHandler.handleSource=function(a,c){c.na(a.src)};t.f.nativeSourceHandler.dispose=m();t.f.registerSourceHandler(t.f.nativeSourceHandler);t.f.Ld=function(){var a=t.A.volume;t.A.volume=a/2+0.1;return a!==t.A.volume};
t.f.Kd=function(){var a=t.A.playbackRate;t.A.playbackRate=a/2+0.1;return a!==t.A.playbackRate};t.f.Re=function(){var a;(a=!!t.A.textTracks)&&0<t.A.textTracks.length&&(a="number"!==typeof t.A.textTracks[0].mode);a&&t.gc&&(a=l);return a};t.f.prototype.featuresVolumeControl=t.f.Ld();t.f.prototype.featuresPlaybackRate=t.f.Kd();t.f.prototype.movingMediaElementInDOM=!t.xd;t.f.prototype.featuresFullscreenResize=f;t.f.prototype.featuresProgressEvents=f;t.f.prototype.featuresNativeTextTracks=t.f.Re();
var S,ra=/^application\/(?:x-|vnd\.apple\.)mpegurl/i,sa=/^video\/mp4/i;t.f.Tc=function(){4<=t.ec&&(S||(S=t.A.constructor.prototype.canPlayType),t.A.constructor.prototype.canPlayType=function(a){return a&&ra.test(a)?"maybe":S.call(this,a)});t.Bd&&(S||(S=t.A.constructor.prototype.canPlayType),t.A.constructor.prototype.canPlayType=function(a){return a&&sa.test(a)?"maybe":S.call(this,a)})};t.f.Ye=function(){var a=t.A.constructor.prototype.canPlayType;t.A.constructor.prototype.canPlayType=S;S=j;return a};
t.f.Tc();t.f.xb="loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" ");t.f.Kb=function(a){if(a){a.player=j;for(a.parentNode&&a.parentNode.removeChild(a);a.hasChildNodes();)a.removeChild(a.firstChild);a.removeAttribute("src");if("function"===typeof a.load)try{a.load()}catch(c){}}};
t.g=t.j.extend({l:function(a,c,d){t.j.call(this,a,c,d);var e=c.source;d=a.id()+"_flash_api";var g=a.q,g=t.i.D({readyFunction:"videojs.Flash.onReady",eventProxyFunction:"videojs.Flash.onEvent",errorEventProxyFunction:"videojs.Flash.onError",autoplay:g.autoplay,preload:g.Ra,loop:g.loop,muted:g.muted},c.flashVars),h=t.i.D({wmode:"opaque",bgcolor:"#000000"},c.params);d=t.i.D({id:d,name:d,"class":"vjs-tech"},c.attributes);e&&this.I(function(){this.ma(e)});t.Rb(this.c,c.parentEl);c.startTime&&this.I(function(){this.load();
this.play();this.currentTime(c.startTime)});t.gc&&this.I(function(){this.b("mousemove",function(){this.k().o({type:"mousemove",bubbles:l})})});a.b("stageclick",a.reportUserActivity);this.c=t.g.Dc(c.swf,this.c,g,h,d)}});s=t.g.prototype;s.dispose=function(){t.j.prototype.dispose.call(this)};s.play=function(){this.ended()&&this.setCurrentTime(0);this.c.vjs_play()};s.pause=function(){this.c.vjs_pause()};s.src=function(a){return a===b?this.currentSrc():this.na(a)};
s.na=function(a){a=t.Xd(a);this.c.vjs_src(a);if(this.d.autoplay()){var c=this;this.setTimeout(function(){c.play()},0)}};t.g.prototype.setCurrentTime=function(a){this.ke=a;this.c.vjs_setProperty("currentTime",a);t.j.prototype.Zb.call(this)};t.g.prototype.currentTime=function(){return this.seeking()?this.ke||0:this.c.vjs_getProperty("currentTime")};t.g.prototype.currentSrc=function(){return this.fb?this.fb.src:this.c.vjs_getProperty("currentSrc")};t.g.prototype.load=function(){this.c.vjs_load()};
t.g.prototype.poster=function(){this.c.vjs_getProperty("poster")};t.g.prototype.setPoster=m();s=t.g.prototype;s.seekable=function(){return 0===this.duration()?t.xa():t.xa(0,this.duration())};s.buffered=function(){return!this.c.vjs_getProperty?t.xa():t.xa(0,this.c.vjs_getProperty("buffered"))};s.duration=function(){return!this.c.vjs_getProperty?0:this.c.vjs_getProperty("duration")};s.Sa=p(l);s.Ec=p(l);
function ta(){var a=T[U],c=a.charAt(0).toUpperCase()+a.slice(1);ua["set"+c]=function(c){return this.c.vjs_setProperty(a,c)}}function va(a){ua[a]=function(){return this.c.vjs_getProperty(a)}}
var ua=t.g.prototype,T="rtmpConnection rtmpStream preload defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" "),wa="error networkState readyState seeking initialTime startOffsetTime paused played ended videoTracks audioTracks videoWidth videoHeight".split(" "),U;for(U=0;U<T.length;U++)va(T[U]),ta();for(U=0;U<wa.length;U++)va(wa[U]);t.g.isSupported=function(){return 10<=t.g.version()[0]};t.j.dc(t.g);t.g.nativeSourceHandler={};
t.g.nativeSourceHandler.canHandleSource=function(a){return!a.type?"":a.type.replace(/;.*/,"").toLowerCase()in t.g.Wd?"maybe":""};t.g.nativeSourceHandler.handleSource=function(a,c){c.na(a.src)};t.g.nativeSourceHandler.dispose=m();t.g.registerSourceHandler(t.g.nativeSourceHandler);t.g.Wd={"video/flv":"FLV","video/x-flv":"FLV","video/mp4":"MP4","video/m4v":"MP4"};t.g.onReady=function(a){var c;if(c=(a=t.m(a))&&a.parentNode&&a.parentNode.player)a.player=c,t.g.checkReady(c.h)};
t.g.checkReady=function(a){a.m()&&(a.m().vjs_getProperty?a.Va():this.setTimeout(function(){t.g.checkReady(a)},50))};t.g.onEvent=function(a,c){t.m(a).player.o(c)};t.g.onError=function(a,c){var d=t.m(a).player,e="FLASH: "+c;"srcnotfound"==c?d.error({code:4,message:e}):d.error(e)};
t.g.version=function(){var a="0,0,0";try{a=(new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").replace(/\D+/g,",").match(/^,?(.+),?$/)[1]}catch(c){try{navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin&&(a=(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g,",").match(/^,?(.+),?$/)[1])}catch(d){}}return a.split(",")};
t.g.Dc=function(a,c,d,e,g){a=t.g.$d(a,d,e,g);a=t.e("div",{innerHTML:a}).childNodes[0];d=c.parentNode;c.parentNode.replaceChild(a,c);a[t.expando]=c[t.expando];var h=d.childNodes[0];setTimeout(function(){h.style.display="block"},1E3);return a};
t.g.$d=function(a,c,d,e){var g="",h="",k="";c&&t.i.ca(c,function(a,c){g+=a+"="+c+"&amp;"});d=t.i.D({movie:a,flashvars:g,allowScriptAccess:"always",allowNetworking:"all"},d);t.i.ca(d,function(a,c){h+='<param name="'+a+'" value="'+c+'" />'});e=t.i.D({data:a,width:"100%",height:"100%"},e);t.i.ca(e,function(a,c){k+=a+'="'+c+'" '});return'<object type="application/x-shockwave-flash" '+k+">"+h+"</object>"};t.g.Qe={"rtmp/mp4":"MP4","rtmp/flv":"FLV"};t.g.Df=function(a,c){return a+"&"+c};
t.g.Pe=function(a){var c={yc:"",jd:""};if(!a)return c;var d=a.indexOf("&"),e;-1!==d?e=d+1:(d=e=a.lastIndexOf("/")+1,0===d&&(d=e=a.length));c.yc=a.substring(0,d);c.jd=a.substring(e,a.length);return c};t.g.ie=function(a){return a in t.g.Qe};t.g.Dd=/^rtmp[set]?:\/\//i;t.g.he=function(a){return t.g.Dd.test(a)};t.g.Yb={};t.g.Yb.canHandleSource=function(a){return t.g.ie(a.type)||t.g.he(a.src)?"maybe":""};t.g.Yb.handleSource=function(a,c){var d=t.g.Pe(a.src);c.setRtmpConnection(d.yc);c.setRtmpStream(d.jd)};
t.g.registerSourceHandler(t.g.Yb);t.Cd=t.a.extend({l:function(a,c,d){t.a.call(this,a,c,d);if(!a.q.sources||0===a.q.sources.length){c=0;for(d=a.q.techOrder;c<d.length;c++){var e=t.va(d[c]),g=window.videojs[e];if(g&&g.isSupported()){ka(a,e);break}}}else a.src(a.q.sources)}});t.oc={disabled:"disabled",hidden:"hidden",showing:"showing"};t.Ed={subtitles:"subtitles",captions:"captions",descriptions:"descriptions",chapters:"chapters",metadata:"metadata"};
t.t=function(a){var c,d,e,g,h,k,q,r,u,A,R;a=a||{};if(!a.player)throw Error("A player was not provided.");c=this;if(t.pa)for(R in c=document.createElement("custom"),t.t.prototype)c[R]=t.t.prototype[R];c.d=a.player;e=t.oc[a.mode]||"disabled";g=t.Ed[a.kind]||"subtitles";h=a.label||"";k=a.language||a.srclang||"";d=a.id||"vjs_text_track_"+t.s++;if("metadata"===g||"chapters"===g)e="hidden";c.V=[];c.Ia=[];q=new t.U(c.V);r=new t.U(c.Ia);A=l;u=t.bind(c,function(){this.activeCues;A&&(this.trigger("cuechange"),
A=l)});"disabled"!==e&&c.d.b("timeupdate",u);Object.defineProperty(c,"kind",{get:function(){return g},set:Function.prototype});Object.defineProperty(c,"label",{get:function(){return h},set:Function.prototype});Object.defineProperty(c,"language",{get:function(){return k},set:Function.prototype});Object.defineProperty(c,"id",{get:function(){return d},set:Function.prototype});Object.defineProperty(c,"mode",{get:function(){return e},set:function(a){t.oc[a]&&(e=a,"showing"===e&&this.d.b("timeupdate",u),
this.o("modechange"))}});Object.defineProperty(c,"cues",{get:function(){return!this.Ub?j:q},set:Function.prototype});Object.defineProperty(c,"activeCues",{get:function(){var a,c,d,e,g;if(!this.Ub)return j;if(0===this.cues.length)return r;e=this.d.currentTime();a=0;c=this.cues.length;for(d=[];a<c;a++)g=this.cues[a],g.startTime<=e&&g.endTime>=e?d.push(g):g.startTime===g.endTime&&(g.startTime<=e&&g.startTime+0.5>=e)&&d.push(g);A=l;if(d.length!==this.Ia.length)A=f;else for(a=0;a<d.length;a++)-1===xa.call(this.Ia,
d[a])&&(A=f);this.Ia=d;r.pb(this.Ia);return r},set:Function.prototype});a.src?ya(a.src,c):c.Ub=f;if(t.pa)return c};t.t.prototype=t.i.create(t.z.prototype);t.t.prototype.constructor=t.t;t.t.prototype.ab={cuechange:"cuechange"};t.t.prototype.sc=function(a){var c=this.d.textTracks(),d=0;if(c)for(;d<c.length;d++)c[d]!==this&&c[d].Yc(a);this.V.push(a);this.cues.pb(this.V)};t.t.prototype.Yc=function(a){for(var c=0,d=this.V.length,e,g=l;c<d;c++)e=this.V[c],e===a&&(this.V.splice(c,1),g=f);g&&this.Ac.pb(this.V)};
var ya,V,xa;ya=function(a,c){t.bf(a,t.bind(this,function(a,e,g){if(a)return t.log.error(a);c.Ub=f;V(g,c)}))};V=function(a,c){if("function"!==typeof window.WebVTT)window.setTimeout(function(){V(a,c)},25);else{var d=new window.WebVTT.Parser(window,window.vttjs,window.WebVTT.StringDecoder());d.oncue=function(a){c.sc(a)};d.onparsingerror=function(a){t.log.error(a)};d.parse(a);d.flush()}};
xa=function(a,c){var d;if(this==j)throw new TypeError('"this" is null or not defined');var e=Object(this),g=e.length>>>0;if(0===g)return-1;d=+c||0;Infinity===Math.abs(d)&&(d=0);if(d>=g)return-1;for(d=Math.max(0<=d?d:g-Math.abs(d),0);d<g;){if(d in e&&e[d]===a)return d;d++}return-1};
t.F=function(a){var c=this,d,e=0;if(t.pa)for(d in c=document.createElement("custom"),t.F.prototype)c[d]=t.F.prototype[d];a=a||[];c.Ua=[];for(Object.defineProperty(c,"length",{get:function(){return this.Ua.length}});e<a.length;e++)P(c,a[e]);if(t.pa)return c};t.F.prototype=t.i.create(t.z.prototype);t.F.prototype.constructor=t.F;t.F.prototype.ab={change:"change",addtrack:"addtrack",removetrack:"removetrack"};for(var za in t.F.prototype.ab)t.F.prototype["on"+za]=j;
function P(a,c){var d=a.Ua.length;""+d in a||Object.defineProperty(a,d,{get:function(){return this.Ua[d]}});c.addEventListener("modechange",t.bind(a,function(){this.o("change")}));a.Ua.push(c);a.o({type:"addtrack",Y:c})}function Q(a,c){for(var d=0,e=a.length,g;d<e;d++)if(g=a[d],g===c){a.Ua.splice(d,1);break}a.o({type:"removetrack",Y:c})}t.F.prototype.ae=function(a){for(var c=0,d=this.length,e=j,g;c<d;c++)if(g=this[c],g.id===a){e=g;break}return e};
t.U=function(a){var c=this,d;if(t.pa)for(d in c=document.createElement("custom"),t.U.prototype)c[d]=t.U.prototype[d];t.U.prototype.pb.call(c,a);Object.defineProperty(c,"length",{get:n("le")});if(t.pa)return c};t.U.prototype.pb=function(a){var c=this.length||0,d=0,e=a.length;this.V=a;this.le=a.length;a=function(a){""+a in this||Object.defineProperty(this,""+a,{get:function(){return this.V[a]}})};if(c<e)for(d=c;d<e;d++)a.call(this,d)};
t.U.prototype.Zd=function(a){for(var c=0,d=this.length,e=j,g;c<d;c++)if(g=this[c],g.id===a){e=g;break}return e};t.sa=t.a.extend({l:function(a,c,d){t.a.call(this,a,c,d);a.b("loadstart",t.bind(this,this.Ve));a.I(t.bind(this,function(){if(a.h&&a.h.featuresNativeTextTracks)this.W();else{var c,d,h;a.b("fullscreenchange",t.bind(this,this.C));d=a.q.tracks||[];for(c=0;c<d.length;c++)h=d[c],this.d.ha(h)}}))}});t.sa.prototype.Ve=function(){this.d.h&&this.d.h.featuresNativeTextTracks?this.W():this.show()};
t.sa.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-text-track-display"})};t.sa.prototype.Md=function(){"function"===typeof window.WebVTT&&window.WebVTT.processCues(window,[],this.c)};function W(a,c){return"rgba("+parseInt(a[1]+a[1],16)+","+parseInt(a[2]+a[2],16)+","+parseInt(a[3]+a[3],16)+","+c+")"}
var Aa={tf:"monospace",zf:"sans-serif",Bf:"serif",uf:'"Andale Mono", "Lucida Console", monospace',vf:'"Courier New", monospace',xf:"sans-serif",yf:"serif",kf:'"Comic Sans MS", Impact, fantasy',Af:'"Monotype Corsiva", cursive',Cf:'"Andale Mono", "Lucida Console", monospace, sans-serif'};t.sa.prototype.C=function(){var a=this.d.textTracks(),c=0,d;this.Md();if(a)for(;c<a.length;c++)d=a[c],"showing"===d.mode&&this.Ze(d)};
t.sa.prototype.Ze=function(a){if("function"===typeof window.WebVTT&&a.activeCues){for(var c=0,d=this.d.textTrackSettings.Hc(),e,g=[];c<a.activeCues.length;c++)g.push(a.activeCues[c]);window.WebVTT.processCues(window,a.activeCues,this.c);for(c=g.length;c--;){a=g[c].lf;d.color&&(a.firstChild.style.color=d.color);if(d.kd)try{a.firstChild.style.color=W(d.color||"#fff",d.kd)}catch(h){}d.backgroundColor&&(a.firstChild.style.backgroundColor=d.backgroundColor);if(d.vc)try{a.firstChild.style.backgroundColor=
W(d.backgroundColor||"#000",d.vc)}catch(k){}if(d.cc)if(d.rd)try{a.style.backgroundColor=W(d.cc,d.rd)}catch(q){}else a.style.backgroundColor=d.cc;d.Ma&&("dropshadow"===d.Ma?a.firstChild.style.textShadow="2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px #222":"raised"===d.Ma?a.firstChild.style.textShadow="1px 1px #222, 2px 2px #222, 3px 3px #222":"depressed"===d.Ma?a.firstChild.style.textShadow="1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px #222":"uniform"===d.Ma&&(a.firstChild.style.textShadow="0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px #222"));
d.Ob&&1!==d.Ob&&(e=window.wf(a.style.fontSize),a.style.fontSize=e*d.Ob+"px",a.style.height="auto",a.style.top="auto",a.style.bottom="2px");d.fontFamily&&"default"!==d.fontFamily&&("small-caps"===d.fontFamily?a.firstChild.style.fontVariant="small-caps":a.firstChild.style.fontFamily=Aa[d.fontFamily])}}};
t.$=t.M.extend({l:function(a,c){var d=this.Y=c.track,e=a.textTracks(),g,h;e&&(g=t.bind(this,function(){var a="showing"===this.Y.mode,c,d,g;if(this instanceof t.zb){a=f;d=0;for(g=e.length;d<g;d++)if(c=e[d],c.kind===this.Y.kind&&"showing"===c.mode){a=l;break}}this.selected(a)}),e.addEventListener("change",g),a.b("dispose",function(){e.removeEventListener("change",g)}));c.label=d.label||d.language||"Unknown";c.selected=d["default"]||"showing"===d.mode;t.M.call(this,a,c);e&&e.onchange===b&&this.b(["tap",
"click"],function(){if("object"!==typeof window.vd)try{h=new window.vd("change")}catch(a){}h||(h=document.createEvent("Event"),h.initEvent("change",f,f));e.dispatchEvent(h)})}});t.$.prototype.u=function(){var a=this.Y.kind,c=this.d.textTracks(),d,e=0;t.M.prototype.u.call(this);if(c)for(;e<c.length;e++)d=c[e],d.kind===a&&(d.mode=d===this.Y?"showing":"disabled")};t.zb=t.$.extend({l:function(a,c){c.track={kind:c.kind,player:a,label:c.kind+" off","default":l,mode:"disabled"};t.$.call(this,a,c);this.selected(f)}});
t.sb=t.$.extend({l:function(a,c){c.track={kind:c.kind,player:a,label:c.kind+" settings","default":l,mode:"disabled"};t.$.call(this,a,c);this.p("vjs-texttrack-settings")}});t.sb.prototype.u=function(){this.k().da("textTrackSettings").show()};
t.Q=t.O.extend({l:function(a,c){var d,e;t.O.call(this,a,c);d=this.d.textTracks();1>=this.H.length&&this.W();d&&(e=t.bind(this,this.update),d.addEventListener("removetrack",e),d.addEventListener("addtrack",e),this.d.b("dispose",function(){d.removeEventListener("removetrack",e);d.removeEventListener("addtrack",e)}))}});
t.Q.prototype.Ka=function(){var a=[],c,d;this instanceof t.oa&&(!this.k().h||!this.k().h.featuresNativeTextTracks)&&a.push(new t.sb(this.d,{kind:this.ea}));a.push(new t.zb(this.d,{kind:this.ea}));d=this.d.textTracks();if(!d)return a;for(var e=0;e<d.length;e++)c=d[e],c.kind===this.ea&&a.push(new t.$(this.d,{track:c}));return a};t.oa=t.Q.extend({l:function(a,c,d){t.Q.call(this,a,c,d);this.c.setAttribute("aria-label","Captions Menu")}});t.oa.prototype.ea="captions";t.oa.prototype.ta="Captions";
t.oa.prototype.className="vjs-captions-button";t.oa.prototype.update=function(){var a=2;t.Q.prototype.update.call(this);this.k().h&&this.k().h.featuresNativeTextTracks&&(a=1);this.H&&this.H.length>a?this.show():this.W()};t.$a=t.Q.extend({l:function(a,c,d){t.Q.call(this,a,c,d);this.c.setAttribute("aria-label","Subtitles Menu")}});t.$a.prototype.ea="subtitles";t.$a.prototype.ta="Subtitles";t.$a.prototype.className="vjs-subtitles-button";
t.Wa=t.Q.extend({l:function(a,c,d){t.Q.call(this,a,c,d);this.c.setAttribute("aria-label","Chapters Menu")}});s=t.Wa.prototype;s.ea="chapters";s.ta="Chapters";s.className="vjs-chapters-button";s.Ka=function(){var a=[],c,d;d=this.d.textTracks();if(!d)return a;for(var e=0;e<d.length;e++)c=d[e],c.kind===this.ea&&a.push(new t.$(this.d,{track:c}));return a};
s.La=function(){for(var a=this.d.textTracks()||[],c=0,d=a.length,e,g,h=this.H=[];c<d;c++)if(e=a[c],e.kind==this.ea)if(e.Ac){g=e;break}else e.mode="hidden",window.setTimeout(t.bind(this,function(){this.La()}),100);a=this.za;a===b&&(a=new t.qa(this.d),a.wa().appendChild(t.e("li",{className:"vjs-menu-title",innerHTML:t.va(this.ea),Se:-1})));if(g){e=g.cues;for(var k,c=0,d=e.length;c<d;c++)k=e[c],k=new t.Xa(this.d,{track:g,cue:k}),h.push(k),a.aa(k);this.aa(a)}0<this.H.length&&this.show();return a};
t.Xa=t.M.extend({l:function(a,c){var d=this.Y=c.track,e=this.cue=c.cue,g=a.currentTime();c.label=e.text;c.selected=e.startTime<=g&&g<e.endTime;t.M.call(this,a,c);d.addEventListener("cuechange",t.bind(this,this.update))}});t.Xa.prototype.u=function(){t.M.prototype.u.call(this);this.d.currentTime(this.cue.startTime);this.update(this.cue.startTime)};t.Xa.prototype.update=function(){var a=this.cue,c=this.d.currentTime();this.selected(a.startTime<=c&&c<a.endTime)};
function X(a){var c;a.Ge?c=a.Ge[0]:a.options&&(c=a.options[a.options.selectedIndex]);return c.value}function Y(a,c){var d,e;if(c){for(d=0;d<a.options.length&&!(e=a.options[d],e.value===c);d++);a.selectedIndex=d}}
t.pc=t.a.extend({l:function(a,c){t.a.call(this,a,c);this.W();t.b(this.m().querySelector(".vjs-done-button"),"click",t.bind(this,function(){this.Fe();this.W()}));t.b(this.m().querySelector(".vjs-default-button"),"click",t.bind(this,function(){this.m().querySelector(".vjs-fg-color > select").selectedIndex=0;this.m().querySelector(".vjs-bg-color > select").selectedIndex=0;this.m().querySelector(".window-color > select").selectedIndex=0;this.m().querySelector(".vjs-text-opacity > select").selectedIndex=
0;this.m().querySelector(".vjs-bg-opacity > select").selectedIndex=0;this.m().querySelector(".vjs-window-opacity > select").selectedIndex=0;this.m().querySelector(".vjs-edge-style select").selectedIndex=0;this.m().querySelector(".vjs-font-family select").selectedIndex=0;this.m().querySelector(".vjs-font-percent select").selectedIndex=2;this.C()}));t.b(this.m().querySelector(".vjs-fg-color > select"),"change",t.bind(this,this.C));t.b(this.m().querySelector(".vjs-bg-color > select"),"change",t.bind(this,
this.C));t.b(this.m().querySelector(".window-color > select"),"change",t.bind(this,this.C));t.b(this.m().querySelector(".vjs-text-opacity > select"),"change",t.bind(this,this.C));t.b(this.m().querySelector(".vjs-bg-opacity > select"),"change",t.bind(this,this.C));t.b(this.m().querySelector(".vjs-window-opacity > select"),"change",t.bind(this,this.C));t.b(this.m().querySelector(".vjs-font-percent select"),"change",t.bind(this,this.C));t.b(this.m().querySelector(".vjs-edge-style select"),"change",t.bind(this,
this.C));t.b(this.m().querySelector(".vjs-font-family select"),"change",t.bind(this,this.C));a.options().persistTextTrackSettings&&this.Ee()}});s=t.pc.prototype;s.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-caption-settings vjs-modal-overlay",innerHTML:'<div class="vjs-tracksettings"><div class="vjs-tracksettings-colors"><div class="vjs-fg-color vjs-tracksetting"><label class="vjs-label">Foreground</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-text-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Opaque</option></select></span></div><div class="vjs-bg-color vjs-tracksetting"><label class="vjs-label">Background</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-bg-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Transparent</option><option value="0">Transparent</option></select></span></div><div class="window-color vjs-tracksetting"><label class="vjs-label">Window</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-window-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Transparent</option><option value="0">Transparent</option></select></span></div></div><div class="vjs-tracksettings-font"><div class="vjs-font-percent vjs-tracksetting"><label class="vjs-label">Font Size</label><select><option value="0.50">50%</option><option value="0.75">75%</option><option value="1.00" selected>100%</option><option value="1.25">125%</option><option value="1.50">150%</option><option value="1.75">175%</option><option value="2.00">200%</option><option value="3.00">300%</option><option value="4.00">400%</option></select></div><div class="vjs-edge-style vjs-tracksetting"><label class="vjs-label">Text Edge Style</label><select><option value="none">None</option><option value="raised">Raised</option><option value="depressed">Depressed</option><option value="uniform">Uniform</option><option value="dropshadow">Dropshadow</option></select></div><div class="vjs-font-family vjs-tracksetting"><label class="vjs-label">Font Family</label><select><option value="">Default</option><option value="monospaceSerif">Monospace Serif</option><option value="proportionalSerif">Proportional Serif</option><option value="monospaceSansSerif">Monospace Sans-Serif</option><option value="proportionalSansSerif">Proportional Sans-Serif</option><option value="casual">Casual</option><option value="script">Script</option><option value="small-caps">Small Caps</option></select></div></div></div><div class="vjs-tracksettings-controls"><button class="vjs-default-button">Defaults</button><button class="vjs-done-button">Done</button></div>'})};
s.Hc=function(){var a,c,d,e,g,h,k,q,r,u;a=this.m();g=X(a.querySelector(".vjs-edge-style select"));h=X(a.querySelector(".vjs-font-family select"));k=X(a.querySelector(".vjs-fg-color > select"));d=X(a.querySelector(".vjs-text-opacity > select"));q=X(a.querySelector(".vjs-bg-color > select"));c=X(a.querySelector(".vjs-bg-opacity > select"));r=X(a.querySelector(".window-color > select"));e=X(a.querySelector(".vjs-window-opacity > select"));a=window.parseFloat(X(a.querySelector(".vjs-font-percent > select")));
c={backgroundOpacity:c,textOpacity:d,windowOpacity:e,edgeStyle:g,fontFamily:h,color:k,backgroundColor:q,windowColor:r,fontPercent:a};for(u in c)(""===c[u]||"none"===c[u]||"fontPercent"===u&&1===c[u])&&delete c[u];return c};
s.Ne=function(a){var c=this.m();Y(c.querySelector(".vjs-edge-style select"),a.Ma);Y(c.querySelector(".vjs-font-family select"),a.fontFamily);Y(c.querySelector(".vjs-fg-color > select"),a.color);Y(c.querySelector(".vjs-text-opacity > select"),a.kd);Y(c.querySelector(".vjs-bg-color > select"),a.backgroundColor);Y(c.querySelector(".vjs-bg-opacity > select"),a.vc);Y(c.querySelector(".window-color > select"),a.cc);Y(c.querySelector(".vjs-window-opacity > select"),a.rd);(a=a.Ob)&&(a=a.toFixed(2));Y(c.querySelector(".vjs-font-percent > select"),
a)};s.Ee=function(){var a;try{a=JSON.parse(window.localStorage.getItem("vjs-text-track-settings"))}catch(c){}a&&this.Ne(a)};s.Fe=function(){var a;if(this.d.options().persistTextTrackSettings){a=this.Hc();try{t.hb(a)?window.localStorage.removeItem("vjs-text-track-settings"):window.localStorage.setItem("vjs-text-track-settings",JSON.stringify(a))}catch(c){}}};s.C=function(){var a=this.d.da("textTrackDisplay");a&&a.C()};
if("undefined"!==typeof window.JSON&&"function"===typeof window.JSON.parse)t.JSON=window.JSON;else{t.JSON={};var Z=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;t.JSON.parse=function(a,c){function d(a,e){var k,q,r=a[e];if(r&&"object"===typeof r)for(k in r)Object.prototype.hasOwnProperty.call(r,k)&&(q=d(r,k),q!==b?r[k]=q:delete r[k]);return c.call(a,e,r)}var e;a=String(a);Z.lastIndex=0;Z.test(a)&&(a=a.replace(Z,function(a){return"\\u"+("0000"+
a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return e=eval("("+a+")"),"function"===typeof c?d({"":e},""):e;throw new SyntaxError("JSON.parse(): invalid or malformed JSON data");}}
t.uc=function(){var a,c,d,e;a=document.getElementsByTagName("video");c=document.getElementsByTagName("audio");var g=[];if(a&&0<a.length){d=0;for(e=a.length;d<e;d++)g.push(a[d])}if(c&&0<c.length){d=0;for(e=c.length;d<e;d++)g.push(c[d])}if(g&&0<g.length){d=0;for(e=g.length;d<e;d++)if((c=g[d])&&c.getAttribute)c.player===b&&(a=c.getAttribute("data-setup"),a!==j&&videojs(c));else{t.Hb();break}}else t.qd||t.Hb()};t.Hb=function(){setTimeout(t.uc,1)};
"complete"===document.readyState?t.qd=f:t.N(window,"load",function(){t.qd=f});t.Hb();t.Be=function(a,c){t.Player.prototype[a]=c};var Ba=this;function $(a,c){var d=a.split("."),e=Ba;!(d[0]in e)&&e.execScript&&e.execScript("var "+d[0]);for(var g;d.length&&(g=d.shift());)!d.length&&c!==b?e[g]=c:e=e[g]?e[g]:e[g]={}};$("videojs",t);$("_V_",t);$("videojs.options",t.options);$("videojs.players",t.Ca);$("videojs.TOUCH_ENABLED",t.Db);$("videojs.cache",t.ua);$("videojs.Component",t.a);t.a.prototype.player=t.a.prototype.k;t.a.prototype.options=t.a.prototype.options;t.a.prototype.init=t.a.prototype.l;t.a.prototype.dispose=t.a.prototype.dispose;t.a.prototype.createEl=t.a.prototype.e;t.a.prototype.contentEl=t.a.prototype.wa;t.a.prototype.el=t.a.prototype.m;t.a.prototype.addChild=t.a.prototype.aa;
t.a.prototype.getChild=t.a.prototype.da;t.a.prototype.getChildById=t.a.prototype.Yd;t.a.prototype.children=t.a.prototype.children;t.a.prototype.initChildren=t.a.prototype.Kc;t.a.prototype.removeChild=t.a.prototype.removeChild;t.a.prototype.on=t.a.prototype.b;t.a.prototype.off=t.a.prototype.n;t.a.prototype.one=t.a.prototype.N;t.a.prototype.trigger=t.a.prototype.o;t.a.prototype.triggerReady=t.a.prototype.Va;t.a.prototype.show=t.a.prototype.show;t.a.prototype.hide=t.a.prototype.W;
t.a.prototype.width=t.a.prototype.width;t.a.prototype.height=t.a.prototype.height;t.a.prototype.dimensions=t.a.prototype.Qd;t.a.prototype.ready=t.a.prototype.I;t.a.prototype.addClass=t.a.prototype.p;t.a.prototype.removeClass=t.a.prototype.r;t.a.prototype.hasClass=t.a.prototype.Pa;t.a.prototype.buildCSSClass=t.a.prototype.T;t.a.prototype.localize=t.a.prototype.v;t.a.prototype.setInterval=t.a.prototype.setInterval;t.a.prototype.setTimeout=t.a.prototype.setTimeout;$("videojs.EventEmitter",t.z);
t.z.prototype.on=t.z.prototype.b;t.z.prototype.addEventListener=t.z.prototype.addEventListener;t.z.prototype.off=t.z.prototype.n;t.z.prototype.removeEventListener=t.z.prototype.removeEventListener;t.z.prototype.one=t.z.prototype.N;t.z.prototype.trigger=t.z.prototype.o;t.z.prototype.dispatchEvent=t.z.prototype.dispatchEvent;t.Player.prototype.ended=t.Player.prototype.ended;t.Player.prototype.enterFullWindow=t.Player.prototype.Fc;t.Player.prototype.exitFullWindow=t.Player.prototype.Lb;
t.Player.prototype.preload=t.Player.prototype.Ra;t.Player.prototype.remainingTime=t.Player.prototype.remainingTime;t.Player.prototype.supportsFullScreen=t.Player.prototype.Sa;t.Player.prototype.currentType=t.Player.prototype.Nd;t.Player.prototype.requestFullScreen=t.Player.prototype.requestFullScreen;t.Player.prototype.requestFullscreen=t.Player.prototype.requestFullscreen;t.Player.prototype.cancelFullScreen=t.Player.prototype.cancelFullScreen;t.Player.prototype.exitFullscreen=t.Player.prototype.exitFullscreen;
t.Player.prototype.isFullScreen=t.Player.prototype.isFullScreen;t.Player.prototype.isFullscreen=t.Player.prototype.isFullscreen;t.Player.prototype.textTracks=t.Player.prototype.textTracks;t.Player.prototype.remoteTextTracks=t.Player.prototype.X;t.Player.prototype.addTextTrack=t.Player.prototype.addTextTrack;t.Player.prototype.addRemoteTextTrack=t.Player.prototype.ha;t.Player.prototype.removeRemoteTextTrack=t.Player.prototype.Da;t.Player.prototype.seekable=t.Player.prototype.seekable;
$("videojs.MediaLoader",t.Cd);$("videojs.TextTrackDisplay",t.sa);$("videojs.ControlBar",t.tb);$("videojs.Button",t.w);$("videojs.PlayToggle",t.kc);$("videojs.FullscreenToggle",t.Ya);$("videojs.BigPlayButton",t.rb);$("videojs.LoadingSpinner",t.ic);$("videojs.CurrentTimeDisplay",t.ub);$("videojs.DurationDisplay",t.vb);$("videojs.TimeDivider",t.qc);$("videojs.RemainingTimeDisplay",t.Cb);$("videojs.LiveDisplay",t.hc);$("videojs.ErrorDisplay",t.wb);$("videojs.Slider",t.S);$("videojs.ProgressControl",t.Bb);
$("videojs.SeekBar",t.nc);$("videojs.LoadProgressBar",t.yb);$("videojs.PlayProgressBar",t.jc);$("videojs.SeekHandle",t.Za);$("videojs.VolumeControl",t.Fb);$("videojs.VolumeBar",t.Eb);$("videojs.VolumeLevel",t.rc);$("videojs.VolumeMenuButton",t.Ha);$("videojs.VolumeHandle",t.Gb);$("videojs.MuteToggle",t.ra);$("videojs.PosterImage",t.mc);$("videojs.Menu",t.qa);$("videojs.MenuItem",t.M);$("videojs.MenuButton",t.O);$("videojs.PlaybackRateMenuButton",t.lc);$("videojs.ChaptersTrackMenuItem",t.Xa);
$("videojs.TextTrackButton",t.Q);$("videojs.TextTrackMenuItem",t.$);$("videojs.OffTextTrackMenuItem",t.zb);$("videojs.CaptionSettingsMenuItem",t.sb);t.O.prototype.createItems=t.O.prototype.Ka;t.Q.prototype.createItems=t.Q.prototype.Ka;t.Wa.prototype.createItems=t.Wa.prototype.Ka;$("videojs.SubtitlesButton",t.$a);$("videojs.CaptionsButton",t.oa);$("videojs.ChaptersButton",t.Wa);$("videojs.MediaTechController",t.j);t.j.withSourceHandlers=t.j.dc;t.j.prototype.featuresVolumeControl=t.j.prototype.qf;
t.j.prototype.featuresFullscreenResize=t.j.prototype.mf;t.j.prototype.featuresPlaybackRate=t.j.prototype.nf;t.j.prototype.featuresProgressEvents=t.j.prototype.of;t.j.prototype.featuresTimeupdateEvents=t.j.prototype.pf;t.j.prototype.setPoster=t.j.prototype.bd;t.j.prototype.textTracks=t.j.prototype.textTracks;t.j.prototype.remoteTextTracks=t.j.prototype.X;t.j.prototype.addTextTrack=t.j.prototype.addTextTrack;t.j.prototype.addRemoteTextTrack=t.j.prototype.ha;t.j.prototype.removeRemoteTextTrack=t.j.prototype.Da;
$("videojs.Html5",t.f);t.f.Events=t.f.xb;t.f.isSupported=t.f.isSupported;t.f.canPlaySource=t.f.wc;t.f.patchCanPlayType=t.f.Tc;t.f.unpatchCanPlayType=t.f.Ye;t.f.prototype.setCurrentTime=t.f.prototype.Zb;t.f.prototype.setVolume=t.f.prototype.Oe;t.f.prototype.setMuted=t.f.prototype.Ke;t.f.prototype.setPreload=t.f.prototype.Me;t.f.prototype.setAutoplay=t.f.prototype.He;t.f.prototype.setLoop=t.f.prototype.Je;t.f.prototype.enterFullScreen=t.f.prototype.Ec;t.f.prototype.exitFullScreen=t.f.prototype.Ud;
t.f.prototype.playbackRate=t.f.prototype.playbackRate;t.f.prototype.setPlaybackRate=t.f.prototype.Le;t.f.selectSourceHandler=t.f.ob;t.f.prototype.setSource=t.f.prototype.ma;t.f.prototype.disposeSourceHandler=t.f.prototype.ia;t.f.prototype.textTracks=t.f.prototype.textTracks;t.f.prototype.remoteTextTracks=t.f.prototype.X;t.f.prototype.addTextTrack=t.f.prototype.addTextTrack;t.f.prototype.addRemoteTextTrack=t.f.prototype.ha;t.f.prototype.removeRemoteTextTrack=t.f.prototype.Da;$("videojs.Flash",t.g);
t.g.isSupported=t.g.isSupported;t.g.canPlaySource=t.g.wc;t.g.onReady=t.g.onReady;t.g.embed=t.g.Dc;t.g.version=t.g.version;t.g.prototype.setSource=t.g.prototype.ma;t.g.selectSourceHandler=t.g.ob;t.g.prototype.setSource=t.g.prototype.ma;t.g.prototype.disposeSourceHandler=t.g.prototype.ia;$("videojs.TextTrack",t.t);$("videojs.TextTrackList",t.F);$("videojs.TextTrackCueList",t.U);$("videojs.TextTrackSettings",t.pc);t.t.prototype.id=t.t.prototype.id;t.t.prototype.label=t.t.prototype.label;
t.t.prototype.kind=t.t.prototype.Tb;t.t.prototype.mode=t.t.prototype.mode;t.t.prototype.cues=t.t.prototype.Ac;t.t.prototype.activeCues=t.t.prototype.jf;t.t.prototype.addCue=t.t.prototype.sc;t.t.prototype.removeCue=t.t.prototype.Yc;t.F.prototype.getTrackById=t.F.prototype.ae;t.U.prototype.getCueById=t.F.prototype.Zd;$("videojs.CaptionsTrack",t.cf);$("videojs.SubtitlesTrack",t.hf);$("videojs.ChaptersTrack",t.df);$("videojs.autoSetup",t.uc);$("videojs.plugin",t.Be);$("videojs.createTimeRange",t.xa);
$("videojs.util",t.Z);t.Z.mergeOptions=t.Z.Aa;t.addLanguage=t.Gd;})();

/* vtt.js - v0.12.1 (https://github.com/mozilla/vtt.js) built on 08-07-2015 */
!function(a){var b=a.vttjs={},c=b.VTTCue,d=b.VTTRegion,e=a.VTTCue,f=a.VTTRegion;b.shim=function(){b.VTTCue=c,b.VTTRegion=d},b.restore=function(){b.VTTCue=e,b.VTTRegion=f}}(this),function(a,b){function c(a){if("string"!=typeof a)return!1;var b=h[a.toLowerCase()];return b?a.toLowerCase():!1}function d(a){if("string"!=typeof a)return!1;var b=i[a.toLowerCase()];return b?a.toLowerCase():!1}function e(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)a[d]=c[d]}return a}function f(a,b,f){var h=this,i=/MSIE\s8\.0/.test(navigator.userAgent),j={};i?h=document.createElement("custom"):j.enumerable=!0,h.hasBeenReset=!1;var k="",l=!1,m=a,n=b,o=f,p=null,q="",r=!0,s="auto",t="start",u=50,v="middle",w=50,x="middle";return Object.defineProperty(h,"id",e({},j,{get:function(){return k},set:function(a){k=""+a}})),Object.defineProperty(h,"pauseOnExit",e({},j,{get:function(){return l},set:function(a){l=!!a}})),Object.defineProperty(h,"startTime",e({},j,{get:function(){return m},set:function(a){if("number"!=typeof a)throw new TypeError("Start time must be set to a number.");m=a,this.hasBeenReset=!0}})),Object.defineProperty(h,"endTime",e({},j,{get:function(){return n},set:function(a){if("number"!=typeof a)throw new TypeError("End time must be set to a number.");n=a,this.hasBeenReset=!0}})),Object.defineProperty(h,"text",e({},j,{get:function(){return o},set:function(a){o=""+a,this.hasBeenReset=!0}})),Object.defineProperty(h,"region",e({},j,{get:function(){return p},set:function(a){p=a,this.hasBeenReset=!0}})),Object.defineProperty(h,"vertical",e({},j,{get:function(){return q},set:function(a){var b=c(a);if(b===!1)throw new SyntaxError("An invalid or illegal string was specified.");q=b,this.hasBeenReset=!0}})),Object.defineProperty(h,"snapToLines",e({},j,{get:function(){return r},set:function(a){r=!!a,this.hasBeenReset=!0}})),Object.defineProperty(h,"line",e({},j,{get:function(){return s},set:function(a){if("number"!=typeof a&&a!==g)throw new SyntaxError("An invalid number or illegal string was specified.");s=a,this.hasBeenReset=!0}})),Object.defineProperty(h,"lineAlign",e({},j,{get:function(){return t},set:function(a){var b=d(a);if(!b)throw new SyntaxError("An invalid or illegal string was specified.");t=b,this.hasBeenReset=!0}})),Object.defineProperty(h,"position",e({},j,{get:function(){return u},set:function(a){if(0>a||a>100)throw new Error("Position must be between 0 and 100.");u=a,this.hasBeenReset=!0}})),Object.defineProperty(h,"positionAlign",e({},j,{get:function(){return v},set:function(a){var b=d(a);if(!b)throw new SyntaxError("An invalid or illegal string was specified.");v=b,this.hasBeenReset=!0}})),Object.defineProperty(h,"size",e({},j,{get:function(){return w},set:function(a){if(0>a||a>100)throw new Error("Size must be between 0 and 100.");w=a,this.hasBeenReset=!0}})),Object.defineProperty(h,"align",e({},j,{get:function(){return x},set:function(a){var b=d(a);if(!b)throw new SyntaxError("An invalid or illegal string was specified.");x=b,this.hasBeenReset=!0}})),h.displayState=void 0,i?h:void 0}var g="auto",h={"":!0,lr:!0,rl:!0},i={start:!0,middle:!0,end:!0,left:!0,right:!0};f.prototype.getCueAsHTML=function(){return WebVTT.convertCueToDOMTree(window,this.text)},a.VTTCue=a.VTTCue||f,b.VTTCue=f}(this,this.vttjs||{}),function(a,b){function c(a){if("string"!=typeof a)return!1;var b=f[a.toLowerCase()];return b?a.toLowerCase():!1}function d(a){return"number"==typeof a&&a>=0&&100>=a}function e(){var a=100,b=3,e=0,f=100,g=0,h=100,i="";Object.defineProperties(this,{width:{enumerable:!0,get:function(){return a},set:function(b){if(!d(b))throw new Error("Width must be between 0 and 100.");a=b}},lines:{enumerable:!0,get:function(){return b},set:function(a){if("number"!=typeof a)throw new TypeError("Lines must be set to a number.");b=a}},regionAnchorY:{enumerable:!0,get:function(){return f},set:function(a){if(!d(a))throw new Error("RegionAnchorX must be between 0 and 100.");f=a}},regionAnchorX:{enumerable:!0,get:function(){return e},set:function(a){if(!d(a))throw new Error("RegionAnchorY must be between 0 and 100.");e=a}},viewportAnchorY:{enumerable:!0,get:function(){return h},set:function(a){if(!d(a))throw new Error("ViewportAnchorY must be between 0 and 100.");h=a}},viewportAnchorX:{enumerable:!0,get:function(){return g},set:function(a){if(!d(a))throw new Error("ViewportAnchorX must be between 0 and 100.");g=a}},scroll:{enumerable:!0,get:function(){return i},set:function(a){var b=c(a);if(b===!1)throw new SyntaxError("An invalid or illegal string was specified.");i=b}}})}var f={"":!0,up:!0};a.VTTRegion=a.VTTRegion||e,b.VTTRegion=e}(this,this.vttjs||{}),function(a){function b(a,b){this.name="ParsingError",this.code=a.code,this.message=b||a.message}function c(a){function b(a,b,c,d){return 3600*(0|a)+60*(0|b)+(0|c)+(0|d)/1e3}var c=a.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);return c?c[3]?b(c[1],c[2],c[3].replace(":",""),c[4]):c[1]>59?b(c[1],c[2],0,c[4]):b(0,c[1],c[2],c[4]):null}function d(){this.values=o(null)}function e(a,b,c,d){var e=d?a.split(d):[a];for(var f in e)if("string"==typeof e[f]){var g=e[f].split(c);if(2===g.length){var h=g[0],i=g[1];b(h,i)}}}function f(a,f,g){function h(){var d=c(a);if(null===d)throw new b(b.Errors.BadTimeStamp,"Malformed timestamp: "+k);return a=a.replace(/^[^\sa-zA-Z-]+/,""),d}function i(a,b){var c=new d;e(a,function(a,b){switch(a){case"region":for(var d=g.length-1;d>=0;d--)if(g[d].id===b){c.set(a,g[d].region);break}break;case"vertical":c.alt(a,b,["rl","lr"]);break;case"line":var e=b.split(","),f=e[0];c.integer(a,f),c.percent(a,f)?c.set("snapToLines",!1):null,c.alt(a,f,["auto"]),2===e.length&&c.alt("lineAlign",e[1],["start","middle","end"]);break;case"position":e=b.split(","),c.percent(a,e[0]),2===e.length&&c.alt("positionAlign",e[1],["start","middle","end"]);break;case"size":c.percent(a,b);break;case"align":c.alt(a,b,["start","middle","end","left","right"])}},/:/,/\s/),b.region=c.get("region",null),b.vertical=c.get("vertical",""),b.line=c.get("line","auto"),b.lineAlign=c.get("lineAlign","start"),b.snapToLines=c.get("snapToLines",!0),b.size=c.get("size",100),b.align=c.get("align","middle"),b.position=c.get("position",{start:0,left:0,middle:50,end:100,right:100},b.align),b.positionAlign=c.get("positionAlign",{start:"start",left:"start",middle:"middle",end:"end",right:"end"},b.align)}function j(){a=a.replace(/^\s+/,"")}var k=a;if(j(),f.startTime=h(),j(),"-->"!==a.substr(0,3))throw new b(b.Errors.BadTimeStamp,"Malformed time stamp (time stamps must be separated by '-->'): "+k);a=a.substr(3),j(),f.endTime=h(),j(),i(a,f)}function g(a,b){function d(){function a(a){return b=b.substr(a.length),a}if(!b)return null;var c=b.match(/^([^<]*)(<[^>]+>?)?/);return a(c[1]?c[1]:c[2])}function e(a){return p[a]}function f(a){for(;o=a.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);)a=a.replace(o[0],e);return a}function g(a,b){return!s[b.localName]||s[b.localName]===a.localName}function h(b,c){var d=q[b];if(!d)return null;var e=a.document.createElement(d);e.localName=d;var f=r[b];return f&&c&&(e[f]=c.trim()),e}for(var i,j=a.document.createElement("div"),k=j,l=[];null!==(i=d());)if("<"!==i[0])k.appendChild(a.document.createTextNode(f(i)));else{if("/"===i[1]){l.length&&l[l.length-1]===i.substr(2).replace(">","")&&(l.pop(),k=k.parentNode);continue}var m,n=c(i.substr(1,i.length-2));if(n){m=a.document.createProcessingInstruction("timestamp",n),k.appendChild(m);continue}var o=i.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);if(!o)continue;if(m=h(o[1],o[3]),!m)continue;if(!g(k,m))continue;o[2]&&(m.className=o[2].substr(1).replace("."," ")),l.push(o[1]),k.appendChild(m),k=m}return j}function h(a){function b(a,b){for(var c=b.childNodes.length-1;c>=0;c--)a.push(b.childNodes[c])}function c(a){if(!a||!a.length)return null;var d=a.pop(),e=d.textContent||d.innerText;if(e){var f=e.match(/^.*(\n|\r)/);return f?(a.length=0,f[0]):e}return"ruby"===d.tagName?c(a):d.childNodes?(b(a,d),c(a)):void 0}var d,e=[],f="";if(!a||!a.childNodes)return"ltr";for(b(e,a);f=c(e);)for(var g=0;g<f.length;g++){d=f.charCodeAt(g);for(var h=0;h<t.length;h++)if(t[h]===d)return"rtl"}return"ltr"}function i(a){if("number"==typeof a.line&&(a.snapToLines||a.line>=0&&a.line<=100))return a.line;if(!a.track||!a.track.textTrackList||!a.track.textTrackList.mediaElement)return-1;for(var b=a.track,c=b.textTrackList,d=0,e=0;e<c.length&&c[e]!==b;e++)"showing"===c[e].mode&&d++;return-1*++d}function j(){}function k(a,b,c){var d=/MSIE\s8\.0/.test(navigator.userAgent),e="rgba(255, 255, 255, 1)",f="rgba(0, 0, 0, 0.8)";d&&(e="rgb(255, 255, 255)",f="rgb(0, 0, 0)"),j.call(this),this.cue=b,this.cueDiv=g(a,b.text);var i={color:e,backgroundColor:f,position:"relative",left:0,right:0,top:0,bottom:0,display:"inline"};d||(i.writingMode=""===b.vertical?"horizontal-tb":"lr"===b.vertical?"vertical-lr":"vertical-rl",i.unicodeBidi="plaintext"),this.applyStyles(i,this.cueDiv),this.div=a.document.createElement("div"),i={textAlign:"middle"===b.align?"center":b.align,font:c.font,whiteSpace:"pre-line",position:"absolute"},d||(i.direction=h(this.cueDiv),i.writingMode=""===b.vertical?"horizontal-tb":"lr"===b.vertical?"vertical-lr":"vertical-rl".stylesunicodeBidi="plaintext"),this.applyStyles(i),this.div.appendChild(this.cueDiv);var k=0;switch(b.positionAlign){case"start":k=b.position;break;case"middle":k=b.position-b.size/2;break;case"end":k=b.position-b.size}this.applyStyles(""===b.vertical?{left:this.formatStyle(k,"%"),width:this.formatStyle(b.size,"%")}:{top:this.formatStyle(k,"%"),height:this.formatStyle(b.size,"%")}),this.move=function(a){this.applyStyles({top:this.formatStyle(a.top,"px"),bottom:this.formatStyle(a.bottom,"px"),left:this.formatStyle(a.left,"px"),right:this.formatStyle(a.right,"px"),height:this.formatStyle(a.height,"px"),width:this.formatStyle(a.width,"px")})}}function l(a){var b,c,d,e,f=/MSIE\s8\.0/.test(navigator.userAgent);if(a.div){c=a.div.offsetHeight,d=a.div.offsetWidth,e=a.div.offsetTop;var g=(g=a.div.childNodes)&&(g=g[0])&&g.getClientRects&&g.getClientRects();a=a.div.getBoundingClientRect(),b=g?Math.max(g[0]&&g[0].height||0,a.height/g.length):0}this.left=a.left,this.right=a.right,this.top=a.top||e,this.height=a.height||c,this.bottom=a.bottom||e+(a.height||c),this.width=a.width||d,this.lineHeight=void 0!==b?b:a.lineHeight,f&&!this.lineHeight&&(this.lineHeight=13)}function m(a,b,c,d){function e(a,b){for(var e,f=new l(a),g=1,h=0;h<b.length;h++){for(;a.overlapsOppositeAxis(c,b[h])||a.within(c)&&a.overlapsAny(d);)a.move(b[h]);if(a.within(c))return a;var i=a.intersectPercentage(c);g>i&&(e=new l(a),g=i),a=new l(f)}return e||f}var f=new l(b),g=b.cue,h=i(g),j=[];if(g.snapToLines){var k;switch(g.vertical){case"":j=["+y","-y"],k="height";break;case"rl":j=["+x","-x"],k="width";break;case"lr":j=["-x","+x"],k="width"}var m=f.lineHeight,n=m*Math.round(h),o=c[k]+m,p=j[0];Math.abs(n)>o&&(n=0>n?-1:1,n*=Math.ceil(o/m)*m),0>h&&(n+=""===g.vertical?c.height:c.width,j=j.reverse()),f.move(p,n)}else{var q=f.lineHeight/c.height*100;switch(g.lineAlign){case"middle":h-=q/2;break;case"end":h-=q}switch(g.vertical){case"":b.applyStyles({top:b.formatStyle(h,"%")});break;case"rl":b.applyStyles({left:b.formatStyle(h,"%")});break;case"lr":b.applyStyles({right:b.formatStyle(h,"%")})}j=["+y","-x","+x","-y"],f=new l(b)}var r=e(f,j);b.move(r.toCSSCompatValues(c))}function n(){}var o=Object.create||function(){function a(){}return function(b){if(1!==arguments.length)throw new Error("Object.create shim only accepts one parameter.");return a.prototype=b,new a}}();b.prototype=o(Error.prototype),b.prototype.constructor=b,b.Errors={BadSignature:{code:0,message:"Malformed WebVTT signature."},BadTimeStamp:{code:1,message:"Malformed time stamp."}},d.prototype={set:function(a,b){this.get(a)||""===b||(this.values[a]=b)},get:function(a,b,c){return c?this.has(a)?this.values[a]:b[c]:this.has(a)?this.values[a]:b},has:function(a){return a in this.values},alt:function(a,b,c){for(var d=0;d<c.length;++d)if(b===c[d]){this.set(a,b);break}},integer:function(a,b){/^-?\d+$/.test(b)&&this.set(a,parseInt(b,10))},percent:function(a,b){var c;return(c=b.match(/^([\d]{1,3})(\.[\d]*)?%$/))&&(b=parseFloat(b),b>=0&&100>=b)?(this.set(a,b),!0):!1}};var p={"&amp;":"&","&lt;":"<","&gt;":">","&lrm;":"‎","&rlm;":"‏","&nbsp;":" "},q={c:"span",i:"i",b:"b",u:"u",ruby:"ruby",rt:"rt",v:"span",lang:"span"},r={v:"title",lang:"lang"},s={rt:"ruby"},t=[1470,1472,1475,1478,1488,1489,1490,1491,1492,1493,1494,1495,1496,1497,1498,1499,1500,1501,1502,1503,1504,1505,1506,1507,1508,1509,1510,1511,1512,1513,1514,1520,1521,1522,1523,1524,1544,1547,1549,1563,1566,1567,1568,1569,1570,1571,1572,1573,1574,1575,1576,1577,1578,1579,1580,1581,1582,1583,1584,1585,1586,1587,1588,1589,1590,1591,1592,1593,1594,1595,1596,1597,1598,1599,1600,1601,1602,1603,1604,1605,1606,1607,1608,1609,1610,1645,1646,1647,1649,1650,1651,1652,1653,1654,1655,1656,1657,1658,1659,1660,1661,1662,1663,1664,1665,1666,1667,1668,1669,1670,1671,1672,1673,1674,1675,1676,1677,1678,1679,1680,1681,1682,1683,1684,1685,1686,1687,1688,1689,1690,1691,1692,1693,1694,1695,1696,1697,1698,1699,1700,1701,1702,1703,1704,1705,1706,1707,1708,1709,1710,1711,1712,1713,1714,1715,1716,1717,1718,1719,1720,1721,1722,1723,1724,1725,1726,1727,1728,1729,1730,1731,1732,1733,1734,1735,1736,1737,1738,1739,1740,1741,1742,1743,1744,1745,1746,1747,1748,1749,1765,1766,1774,1775,1786,1787,1788,1789,1790,1791,1792,1793,1794,1795,1796,1797,1798,1799,1800,1801,1802,1803,1804,1805,1807,1808,1810,1811,1812,1813,1814,1815,1816,1817,1818,1819,1820,1821,1822,1823,1824,1825,1826,1827,1828,1829,1830,1831,1832,1833,1834,1835,1836,1837,1838,1839,1869,1870,1871,1872,1873,1874,1875,1876,1877,1878,1879,1880,1881,1882,1883,1884,1885,1886,1887,1888,1889,1890,1891,1892,1893,1894,1895,1896,1897,1898,1899,1900,1901,1902,1903,1904,1905,1906,1907,1908,1909,1910,1911,1912,1913,1914,1915,1916,1917,1918,1919,1920,1921,1922,1923,1924,1925,1926,1927,1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1969,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2e3,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2036,2037,2042,2048,2049,2050,2051,2052,2053,2054,2055,2056,2057,2058,2059,2060,2061,2062,2063,2064,2065,2066,2067,2068,2069,2074,2084,2088,2096,2097,2098,2099,2100,2101,2102,2103,2104,2105,2106,2107,2108,2109,2110,2112,2113,2114,2115,2116,2117,2118,2119,2120,2121,2122,2123,2124,2125,2126,2127,2128,2129,2130,2131,2132,2133,2134,2135,2136,2142,2208,2210,2211,2212,2213,2214,2215,2216,2217,2218,2219,2220,8207,64285,64287,64288,64289,64290,64291,64292,64293,64294,64295,64296,64298,64299,64300,64301,64302,64303,64304,64305,64306,64307,64308,64309,64310,64312,64313,64314,64315,64316,64318,64320,64321,64323,64324,64326,64327,64328,64329,64330,64331,64332,64333,64334,64335,64336,64337,64338,64339,64340,64341,64342,64343,64344,64345,64346,64347,64348,64349,64350,64351,64352,64353,64354,64355,64356,64357,64358,64359,64360,64361,64362,64363,64364,64365,64366,64367,64368,64369,64370,64371,64372,64373,64374,64375,64376,64377,64378,64379,64380,64381,64382,64383,64384,64385,64386,64387,64388,64389,64390,64391,64392,64393,64394,64395,64396,64397,64398,64399,64400,64401,64402,64403,64404,64405,64406,64407,64408,64409,64410,64411,64412,64413,64414,64415,64416,64417,64418,64419,64420,64421,64422,64423,64424,64425,64426,64427,64428,64429,64430,64431,64432,64433,64434,64435,64436,64437,64438,64439,64440,64441,64442,64443,64444,64445,64446,64447,64448,64449,64467,64468,64469,64470,64471,64472,64473,64474,64475,64476,64477,64478,64479,64480,64481,64482,64483,64484,64485,64486,64487,64488,64489,64490,64491,64492,64493,64494,64495,64496,64497,64498,64499,64500,64501,64502,64503,64504,64505,64506,64507,64508,64509,64510,64511,64512,64513,64514,64515,64516,64517,64518,64519,64520,64521,64522,64523,64524,64525,64526,64527,64528,64529,64530,64531,64532,64533,64534,64535,64536,64537,64538,64539,64540,64541,64542,64543,64544,64545,64546,64547,64548,64549,64550,64551,64552,64553,64554,64555,64556,64557,64558,64559,64560,64561,64562,64563,64564,64565,64566,64567,64568,64569,64570,64571,64572,64573,64574,64575,64576,64577,64578,64579,64580,64581,64582,64583,64584,64585,64586,64587,64588,64589,64590,64591,64592,64593,64594,64595,64596,64597,64598,64599,64600,64601,64602,64603,64604,64605,64606,64607,64608,64609,64610,64611,64612,64613,64614,64615,64616,64617,64618,64619,64620,64621,64622,64623,64624,64625,64626,64627,64628,64629,64630,64631,64632,64633,64634,64635,64636,64637,64638,64639,64640,64641,64642,64643,64644,64645,64646,64647,64648,64649,64650,64651,64652,64653,64654,64655,64656,64657,64658,64659,64660,64661,64662,64663,64664,64665,64666,64667,64668,64669,64670,64671,64672,64673,64674,64675,64676,64677,64678,64679,64680,64681,64682,64683,64684,64685,64686,64687,64688,64689,64690,64691,64692,64693,64694,64695,64696,64697,64698,64699,64700,64701,64702,64703,64704,64705,64706,64707,64708,64709,64710,64711,64712,64713,64714,64715,64716,64717,64718,64719,64720,64721,64722,64723,64724,64725,64726,64727,64728,64729,64730,64731,64732,64733,64734,64735,64736,64737,64738,64739,64740,64741,64742,64743,64744,64745,64746,64747,64748,64749,64750,64751,64752,64753,64754,64755,64756,64757,64758,64759,64760,64761,64762,64763,64764,64765,64766,64767,64768,64769,64770,64771,64772,64773,64774,64775,64776,64777,64778,64779,64780,64781,64782,64783,64784,64785,64786,64787,64788,64789,64790,64791,64792,64793,64794,64795,64796,64797,64798,64799,64800,64801,64802,64803,64804,64805,64806,64807,64808,64809,64810,64811,64812,64813,64814,64815,64816,64817,64818,64819,64820,64821,64822,64823,64824,64825,64826,64827,64828,64829,64848,64849,64850,64851,64852,64853,64854,64855,64856,64857,64858,64859,64860,64861,64862,64863,64864,64865,64866,64867,64868,64869,64870,64871,64872,64873,64874,64875,64876,64877,64878,64879,64880,64881,64882,64883,64884,64885,64886,64887,64888,64889,64890,64891,64892,64893,64894,64895,64896,64897,64898,64899,64900,64901,64902,64903,64904,64905,64906,64907,64908,64909,64910,64911,64914,64915,64916,64917,64918,64919,64920,64921,64922,64923,64924,64925,64926,64927,64928,64929,64930,64931,64932,64933,64934,64935,64936,64937,64938,64939,64940,64941,64942,64943,64944,64945,64946,64947,64948,64949,64950,64951,64952,64953,64954,64955,64956,64957,64958,64959,64960,64961,64962,64963,64964,64965,64966,64967,65008,65009,65010,65011,65012,65013,65014,65015,65016,65017,65018,65019,65020,65136,65137,65138,65139,65140,65142,65143,65144,65145,65146,65147,65148,65149,65150,65151,65152,65153,65154,65155,65156,65157,65158,65159,65160,65161,65162,65163,65164,65165,65166,65167,65168,65169,65170,65171,65172,65173,65174,65175,65176,65177,65178,65179,65180,65181,65182,65183,65184,65185,65186,65187,65188,65189,65190,65191,65192,65193,65194,65195,65196,65197,65198,65199,65200,65201,65202,65203,65204,65205,65206,65207,65208,65209,65210,65211,65212,65213,65214,65215,65216,65217,65218,65219,65220,65221,65222,65223,65224,65225,65226,65227,65228,65229,65230,65231,65232,65233,65234,65235,65236,65237,65238,65239,65240,65241,65242,65243,65244,65245,65246,65247,65248,65249,65250,65251,65252,65253,65254,65255,65256,65257,65258,65259,65260,65261,65262,65263,65264,65265,65266,65267,65268,65269,65270,65271,65272,65273,65274,65275,65276,67584,67585,67586,67587,67588,67589,67592,67594,67595,67596,67597,67598,67599,67600,67601,67602,67603,67604,67605,67606,67607,67608,67609,67610,67611,67612,67613,67614,67615,67616,67617,67618,67619,67620,67621,67622,67623,67624,67625,67626,67627,67628,67629,67630,67631,67632,67633,67634,67635,67636,67637,67639,67640,67644,67647,67648,67649,67650,67651,67652,67653,67654,67655,67656,67657,67658,67659,67660,67661,67662,67663,67664,67665,67666,67667,67668,67669,67671,67672,67673,67674,67675,67676,67677,67678,67679,67840,67841,67842,67843,67844,67845,67846,67847,67848,67849,67850,67851,67852,67853,67854,67855,67856,67857,67858,67859,67860,67861,67862,67863,67864,67865,67866,67867,67872,67873,67874,67875,67876,67877,67878,67879,67880,67881,67882,67883,67884,67885,67886,67887,67888,67889,67890,67891,67892,67893,67894,67895,67896,67897,67903,67968,67969,67970,67971,67972,67973,67974,67975,67976,67977,67978,67979,67980,67981,67982,67983,67984,67985,67986,67987,67988,67989,67990,67991,67992,67993,67994,67995,67996,67997,67998,67999,68e3,68001,68002,68003,68004,68005,68006,68007,68008,68009,68010,68011,68012,68013,68014,68015,68016,68017,68018,68019,68020,68021,68022,68023,68030,68031,68096,68112,68113,68114,68115,68117,68118,68119,68121,68122,68123,68124,68125,68126,68127,68128,68129,68130,68131,68132,68133,68134,68135,68136,68137,68138,68139,68140,68141,68142,68143,68144,68145,68146,68147,68160,68161,68162,68163,68164,68165,68166,68167,68176,68177,68178,68179,68180,68181,68182,68183,68184,68192,68193,68194,68195,68196,68197,68198,68199,68200,68201,68202,68203,68204,68205,68206,68207,68208,68209,68210,68211,68212,68213,68214,68215,68216,68217,68218,68219,68220,68221,68222,68223,68352,68353,68354,68355,68356,68357,68358,68359,68360,68361,68362,68363,68364,68365,68366,68367,68368,68369,68370,68371,68372,68373,68374,68375,68376,68377,68378,68379,68380,68381,68382,68383,68384,68385,68386,68387,68388,68389,68390,68391,68392,68393,68394,68395,68396,68397,68398,68399,68400,68401,68402,68403,68404,68405,68416,68417,68418,68419,68420,68421,68422,68423,68424,68425,68426,68427,68428,68429,68430,68431,68432,68433,68434,68435,68436,68437,68440,68441,68442,68443,68444,68445,68446,68447,68448,68449,68450,68451,68452,68453,68454,68455,68456,68457,68458,68459,68460,68461,68462,68463,68464,68465,68466,68472,68473,68474,68475,68476,68477,68478,68479,68608,68609,68610,68611,68612,68613,68614,68615,68616,68617,68618,68619,68620,68621,68622,68623,68624,68625,68626,68627,68628,68629,68630,68631,68632,68633,68634,68635,68636,68637,68638,68639,68640,68641,68642,68643,68644,68645,68646,68647,68648,68649,68650,68651,68652,68653,68654,68655,68656,68657,68658,68659,68660,68661,68662,68663,68664,68665,68666,68667,68668,68669,68670,68671,68672,68673,68674,68675,68676,68677,68678,68679,68680,126464,126465,126466,126467,126469,126470,126471,126472,126473,126474,126475,126476,126477,126478,126479,126480,126481,126482,126483,126484,126485,126486,126487,126488,126489,126490,126491,126492,126493,126494,126495,126497,126498,126500,126503,126505,126506,126507,126508,126509,126510,126511,126512,126513,126514,126516,126517,126518,126519,126521,126523,126530,126535,126537,126539,126541,126542,126543,126545,126546,126548,126551,126553,126555,126557,126559,126561,126562,126564,126567,126568,126569,126570,126572,126573,126574,126575,126576,126577,126578,126580,126581,126582,126583,126585,126586,126587,126588,126590,126592,126593,126594,126595,126596,126597,126598,126599,126600,126601,126603,126604,126605,126606,126607,126608,126609,126610,126611,126612,126613,126614,126615,126616,126617,126618,126619,126625,126626,126627,126629,126630,126631,126632,126633,126635,126636,126637,126638,126639,126640,126641,126642,126643,126644,126645,126646,126647,126648,126649,126650,126651,1114109];j.prototype.applyStyles=function(a,b){b=b||this.div;for(var c in a)a.hasOwnProperty(c)&&(b.style[c]=a[c])},j.prototype.formatStyle=function(a,b){return 0===a?0:a+b},k.prototype=o(j.prototype),k.prototype.constructor=k,l.prototype.move=function(a,b){switch(b=void 0!==b?b:this.lineHeight,a){case"+x":this.left+=b,this.right+=b;break;case"-x":this.left-=b,this.right-=b;break;case"+y":this.top+=b,this.bottom+=b;break;case"-y":this.top-=b,this.bottom-=b}},l.prototype.overlaps=function(a){return this.left<a.right&&this.right>a.left&&this.top<a.bottom&&this.bottom>a.top},l.prototype.overlapsAny=function(a){for(var b=0;b<a.length;b++)if(this.overlaps(a[b]))return!0;return!1},l.prototype.within=function(a){return this.top>=a.top&&this.bottom<=a.bottom&&this.left>=a.left&&this.right<=a.right},l.prototype.overlapsOppositeAxis=function(a,b){switch(b){case"+x":return this.left<a.left;case"-x":return this.right>a.right;case"+y":return this.top<a.top;case"-y":return this.bottom>a.bottom}},l.prototype.intersectPercentage=function(a){var b=Math.max(0,Math.min(this.right,a.right)-Math.max(this.left,a.left)),c=Math.max(0,Math.min(this.bottom,a.bottom)-Math.max(this.top,a.top)),d=b*c;return d/(this.height*this.width)},l.prototype.toCSSCompatValues=function(a){return{top:this.top-a.top,bottom:a.bottom-this.bottom,left:this.left-a.left,right:a.right-this.right,height:this.height,width:this.width}},l.getSimpleBoxPosition=function(a){var b=a.div?a.div.offsetHeight:a.tagName?a.offsetHeight:0,c=a.div?a.div.offsetWidth:a.tagName?a.offsetWidth:0,d=a.div?a.div.offsetTop:a.tagName?a.offsetTop:0;a=a.div?a.div.getBoundingClientRect():a.tagName?a.getBoundingClientRect():a;var e={left:a.left,right:a.right,top:a.top||d,height:a.height||b,bottom:a.bottom||d+(a.height||b),width:a.width||c};return e},n.StringDecoder=function(){return{decode:function(a){if(!a)return"";if("string"!=typeof a)throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(a))}}},n.convertCueToDOMTree=function(a,b){return a&&b?g(a,b):null};var u=.05,v="sans-serif",w="1.5%";n.processCues=function(a,b,c){function d(a){for(var b=0;b<a.length;b++)if(a[b].hasBeenReset||!a[b].displayState)return!0;return!1}if(!a||!b||!c)return null;for(;c.firstChild;)c.removeChild(c.firstChild);var e=a.document.createElement("div");if(e.style.position="absolute",e.style.left="0",e.style.right="0",e.style.top="0",e.style.bottom="0",e.style.margin=w,c.appendChild(e),d(b)){var f=[],g=l.getSimpleBoxPosition(e),h=Math.round(g.height*u*100)/100,i={font:h+"px "+v};!function(){for(var c,d,h=0;h<b.length;h++)d=b[h],c=new k(a,d,i),e.appendChild(c.div),m(a,c,g,f),d.displayState=c.div,f.push(l.getSimpleBoxPosition(c))}()}else for(var j=0;j<b.length;j++)e.appendChild(b[j].displayState)},n.Parser=function(a,b,c){c||(c=b,b={}),b||(b={}),this.window=a,this.vttjs=b,this.state="INITIAL",this.buffer="",this.decoder=c||new TextDecoder("utf8"),this.regionList=[]},n.Parser.prototype={reportOrThrowError:function(a){if(!(a instanceof b))throw a;this.onparsingerror&&this.onparsingerror(a)},parse:function(a){function c(){for(var a=i.buffer,b=0;b<a.length&&"\r"!==a[b]&&"\n"!==a[b];)++b;var c=a.substr(0,b);return"\r"===a[b]&&++b,"\n"===a[b]&&++b,i.buffer=a.substr(b),c}function g(a){var b=new d;if(e(a,function(a,c){switch(a){case"id":b.set(a,c);break;case"width":b.percent(a,c);break;case"lines":b.integer(a,c);break;case"regionanchor":case"viewportanchor":var e=c.split(",");if(2!==e.length)break;var f=new d;if(f.percent("x",e[0]),f.percent("y",e[1]),!f.has("x")||!f.has("y"))break;b.set(a+"X",f.get("x")),b.set(a+"Y",f.get("y"));break;case"scroll":b.alt(a,c,["up"])}},/=/,/\s/),b.has("id")){var c=new(i.vttjs.VTTRegion||i.window.VTTRegion);c.width=b.get("width",100),c.lines=b.get("lines",3),c.regionAnchorX=b.get("regionanchorX",0),c.regionAnchorY=b.get("regionanchorY",100),c.viewportAnchorX=b.get("viewportanchorX",0),c.viewportAnchorY=b.get("viewportanchorY",100),c.scroll=b.get("scroll",""),i.onregion&&i.onregion(c),i.regionList.push({id:b.get("id"),region:c})}}function h(a){e(a,function(a,b){switch(a){case"Region":g(b)}},/:/)}var i=this;a&&(i.buffer+=i.decoder.decode(a,{stream:!0}));try{var j;if("INITIAL"===i.state){if(!/\r\n|\n/.test(i.buffer))return this;j=c();var k=j.match(/^WEBVTT([ \t].*)?$/);if(!k||!k[0])throw new b(b.Errors.BadSignature);i.state="HEADER"}for(var l=!1;i.buffer;){if(!/\r\n|\n/.test(i.buffer))return this;switch(l?l=!1:j=c(),i.state){case"HEADER":/:/.test(j)?h(j):j||(i.state="ID");continue;case"NOTE":j||(i.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(j)){i.state="NOTE";break}if(!j)continue;if(i.cue=new(i.vttjs.VTTCue||i.window.VTTCue)(0,0,""),i.state="CUE",-1===j.indexOf("-->")){i.cue.id=j;continue}case"CUE":try{f(j,i.cue,i.regionList)}catch(m){i.reportOrThrowError(m),i.cue=null,i.state="BADCUE";continue}i.state="CUETEXT";continue;case"CUETEXT":var n=-1!==j.indexOf("-->");if(!j||n&&(l=!0)){i.oncue&&i.oncue(i.cue),i.cue=null,i.state="ID";continue}i.cue.text&&(i.cue.text+="\n"),i.cue.text+=j;continue;case"BADCUE":j||(i.state="ID");continue}}}catch(m){i.reportOrThrowError(m),"CUETEXT"===i.state&&i.cue&&i.oncue&&i.oncue(i.cue),i.cue=null,i.state="INITIAL"===i.state?"BADWEBVTT":"BADCUE"}return this},flush:function(){var a=this;try{if(a.buffer+=a.decoder.decode(),(a.cue||"HEADER"===a.state)&&(a.buffer+="\n\n",a.parse()),"INITIAL"===a.state)throw new b(b.Errors.BadSignature)}catch(c){a.reportOrThrowError(c)}return a.onflush&&a.onflush(),this}},a.WebVTT=n}(this,this.vttjs||{});!function(a,t,e,n,m){m=t.location,Math.random()>.01||(a.src="//www.google-analytics.com/__utm.gif?utmwv=5.4.2&utmac=UA-16505296-2&utmn=1&utmhn="+n(m.hostname)+"&utmsr="+t.screen.availWidth+"x"+t.screen.availHeight+"&utmul="+(e.language||e.userLanguage||"").toLowerCase()+"&utmr="+n(m.href)+"&utmp="+n(m.hostname+m.pathname)+"&utmcc=__utma%3D1."+Math.floor(1e10*Math.random())+".1.1.1.1%3B"+"&utme=8(vjsv)9(v4.12.15)")}(new Image,window,navigator,encodeURIComponent);;
;
/* module-key = 'com.atlassian.jira.jira-fileviewer-plugin:atlassian-fileviewer', location = 'jira-fileviewer-module/node_modules/@atlassian/fileviewer/dist/fileviewer-video-templates.js' */
// This file was automatically generated from video-view.i18n.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace FileViewer.Templates.avPlayer.
 */

if (typeof FileViewer == 'undefined') { var FileViewer = {}; }
if (typeof FileViewer.Templates == 'undefined') { FileViewer.Templates = {}; }
if (typeof FileViewer.Templates.avPlayer == 'undefined') { FileViewer.Templates.avPlayer = {}; }


FileViewer.Templates.avPlayer.playerBody = function(opt_data, opt_ignored) {
  return '<div class="cp-video-container">' + ((opt_data.kind == 'audio') ? '<audio id="cp-video-player" class="video-js vjs-atlassian-skin" poster="' + soy.$$escapeHtml(opt_data.poster) + '"><source src="' + soy.$$escapeHtml(opt_data.src) + '" type="' + soy.$$escapeHtml(opt_data.type) + '" /></audio>' : '<video id="cp-video-player" class="video-js vjs-atlassian-skin" poster="' + soy.$$escapeHtml(opt_data.poster) + '"><source src="' + soy.$$escapeHtml(opt_data.src) + '" type="' + soy.$$escapeHtml(opt_data.type) + '" /></video>') + '</div><span class="cp-baseline-extension"></span>';
};
if (goog.DEBUG) {
  FileViewer.Templates.avPlayer.playerBody.soyTemplateName = 'FileViewer.Templates.avPlayer.playerBody';
}


FileViewer.Templates.avPlayer.progressTooltip = function(opt_data, opt_ignored) {
  return '<div id=\'vjs-tip\'><div id=\'vjs-tip-arrow\'></div><div id=\'vjs-tip-inner\'></div></div>';
};
if (goog.DEBUG) {
  FileViewer.Templates.avPlayer.progressTooltip.soyTemplateName = 'FileViewer.Templates.avPlayer.progressTooltip';
}


FileViewer.Templates.avPlayer.customControlBarItem = function(opt_data, opt_ignored) {
  return '<div class="vjs-control-content"><span class="vjs-control-text">' + soy.$$escapeHtml(opt_data.descr) + '</span></div>';
};
if (goog.DEBUG) {
  FileViewer.Templates.avPlayer.customControlBarItem.soyTemplateName = 'FileViewer.Templates.avPlayer.customControlBarItem';
}
;
;
/* module-key = 'com.atlassian.jira.jira-fileviewer-plugin:atlassian-fileviewer', location = 'jira-fileviewer-module/node_modules/@atlassian/fileviewer/dist/fileviewer-video.js' */
(function (FileViewer) {
    'use strict';

    // use FileViewer's internal module system
    var define  = FileViewer.define;
    var require = FileViewer.require;

define('video-view/button-presentation-mode', [], function () {
  'use strict';

  var videojs = window.videojs;

  var ButtonPresentationMode = videojs.Button.extend({
    init: function (opts) {
      this._fileViewer = opts.fileViewer;
      this._player = opts.player;

      videojs.Button.call(this, this._player, {
        el: videojs.Component.prototype.createEl(null, {
          className: 'vjs-presentation-control vjs-control',
          innerHTML: [
            '<div class="vjs-control-content">',
            '<span class="vjs-control-text">',
            'Presentation Mode',
            '</span>',
            '</div>'
          ].join(''),
          role: 'button',
          tabindex: 0,
          'aria-live': 'polite'
        })
      });

      this.on('click', this.changeMode);
    }
  });

  ButtonPresentationMode.asPlugin = function (fileViewer) {
    return function (options) {
      var player = this;
      var button = new ButtonPresentationMode({
        player: player,
        fileViewer: fileViewer
      });

      button.options = options;

      player.ready(function () {
        player.controlBar.addChild(button);
      });
    };
  };

  ButtonPresentationMode.prototype.changeMode = function () {
    if (this._fileViewer.isInMode('PRESENTATION')) {
      this._fileViewer.changeMode('BASE');
    } else {
      this._fileViewer.changeMode('PRESENTATION');
    }
  };

  return ButtonPresentationMode;
});

define('video-view/button-toggle-hd', [
  'template-store-singleton',
  'jquery'
], function (
  templateStore,
  $
) {
  'use strict';

  var videojs = window.videojs;

  var ButtonToggleHd = videojs.Button.extend({
    init: function (opts) {
      this._fileViewer = opts.fileViewer;
      this._player = opts.player;
      this._isPlayingHd = opts.isPlayingHd;

      videojs.Button.call(this, this._player, {
        el: videojs.Component.prototype.createEl(null, {
          className: 'vjs-hd-control vjs-control',
          innerHTML: templateStore.get('avPlayer.customControlBarItem')({
            descr: 'Toggle HD/SD Quality'
          }),
          role: 'button',
          tabindex: 0,
          'aria-live': 'polite'
        })
      });

      this.on('click', this.toggleSource);
    }
  });

  ButtonToggleHd.asPlugin = function (fileViewer) {
    return function (options) {
      if (!options.src_hd) {
        return;
      }

      var player = this;
      var button = new ButtonToggleHd({
        player: player,
        fileViewer: fileViewer,
        isPlayingHd: options.hd_active
      });

      button.options = options;

      player.ready(function () {
        $(this.el()).addClass('vjs-hd-source');
        if (options.hd_active) {
          $(this.el()).addClass('vjs-hd-playing');
        }
        player.controlBar.addChild(button);
      });
    };
  };

  /**
   * Set preload attribute to make sure `loadedmetadata` is triggered
   */
  ButtonToggleHd.prototype.fixPreload = function () {
    var player = this._player;
    if (player.el().firstChild.preload === 'none') {
      player.el().firstChild.preload = 'metadata';
    }
  };

  /**
   * Update the players video and poster src and seek to position if given
   * @param {Object} options
   * @param {Number} options.position Time in seconds to start playing
   * @param {String} options.src Url of video source
   * @param {String} options.poster Url of video poster source
   */
  ButtonToggleHd.prototype.switchSource = function (options) {
    var player = this._player;
    var playerEl = $(player.el());
    var wasPaused = player.paused();
    var hasStarted = playerEl.hasClass('vjs-has-started');

    this.fixPreload();
    // Remove <source> to prevent playing both streams
    playerEl.find('source').remove();
    // Remove poster attribute so it doesn't show up when switching streams
    player.poster('');
    if (options.position) {
      // Hide <video> tag to prevent showing the new stream starting
      // at the beginning
      $(player.tag).css('display', 'none');
    }
    player.src(options.src);
    player.ready(function () {
      player.one('loadedmetadata', function () {
        player.poster(options.poster);
        if (hasStarted) {
          playerEl.addClass('vjs-has-started');
        }
      }.bind(player));
      if (options.position) {
        player.one('loadeddata', function () {
          player.currentTime(options.position);
          if (wasPaused) {
            player.pause();
          } else {
            player.play();
          }
        });
      }
      // Show <video> again when seeking is done
      player.one('seeked', function () {
        $(player.tag).css('display', 'block');
      });
    });
  };

  ButtonToggleHd.prototype.toggleSource = function () {
    var player = this._player;
    var playerEl = $(player.el());
    var options = {
      position: player.tech.currentTime(),
      src: '',
      poster: ''
    };

    if (this._isPlayingHd) {
      this._isPlayingHd = false;
      this._fileViewer.getStorage().setItem('videoQualityHd', false);
      options.src = this.options.src;
      options.poster = this.options.poster;
      playerEl.removeClass('vjs-hd-playing');
    } else {
      this._isPlayingHd = true;
      this._fileViewer.getStorage().setItem('videoQualityHd', true);
      options.src = this.options.src_hd;
      options.poster = this.options.poster_hd;
      playerEl.addClass('vjs-hd-playing');
    }
    this.switchSource(options);
  };

  return ButtonToggleHd;
});

define('video-view/button-youtube', [
  'template-store-singleton',
  'url'
], function (
  templateStore,
  urlHelper
) {
  'use strict';

  var videojs = window.videojs;

  var ButtonYoutube = videojs.Button.extend({
    init: function (opts) {
      this._fileViewer = opts.fileViewer;
      this._player = opts.player;
      videojs.Button.call(this, this._player, {
        el: videojs.Component.prototype.createEl(null, {
          className: 'vjs-youtube-control vjs-control',
          innerHTML: templateStore.get('avPlayer.customControlBarItem')({descr: 'Youtube'}),
          role: 'button',
          tabindex: 0,
          'aria-live': 'polite'
        })
      });

      this.on('click', this.openYoutubePage);
    }
  });

  ButtonYoutube.asPlugin = function (fileViewer) {
    return function (options) {
      var player = this;
      var button = new ButtonYoutube({
        player: player,
        fileViewer: fileViewer
      });
      player.ready(function () { player.controlBar.addChild(button); });
    };
  };

  ButtonYoutube.prototype.openYoutubePage = function () {
    var srcYoutube;
    this._fileViewer.analytics.send('files.fileviewer-web.file.gotoyoutube');
    this._player.pause();
    srcYoutube = urlHelper.addQueryParamToUrl(this._player.src(), {
      start: Math.round(this._player.currentTime()),
      autoplay: 1
    });
    window.open(srcYoutube, '_blank');
  };

  return ButtonYoutube;
});

define('video-view/plugin-progress-tooltips', [
  'template-store-singleton',
  'jquery'
], function (
  templateStore,
  $
) {
  'use strict';

  var PluginProgressTooltips = function (options) {
    var player = this;
    var init = function () {
      $('#vjs-tip').remove();
      var tipHtml = templateStore.get('avPlayer.progressTooltip')();
      $('.vjs-progress-control').after(tipHtml);

      $('.vjs-progress-holder').on('mousemove', function (event) {
        var minutes,
          seconds,
          seekBar,
          timeInSeconds,
          mousePosition;

        seekBar = player.controlBar.progressControl.seekBar;
        mousePosition = (event.pageX - $(seekBar.el()).offset().left) / seekBar.width();
        timeInSeconds = mousePosition * player.duration();

        if (timeInSeconds === player.duration()) {
          timeInSeconds = timeInSeconds - 0.1;
        }

        minutes = Math.floor(timeInSeconds / 60);
        seconds = Math.floor(timeInSeconds - minutes * 60);

        if (seconds < 10) {
          seconds = '0' + seconds;
        }

        $('#vjs-tip-inner').text([minutes, ':', seconds].join(''));

        var $el = $('.vjs-control-bar');
        var tooltipWidth = $('#vjs-tip').outerWidth();
        var left = event.pageX - $el.offset().left - Math.round(tooltipWidth / 2);
        $('#vjs-tip').css('left', left + 'px').css('display', 'block');
      });

      $('.vjs-progress-holder, .vjs-play-control').on('mouseout', function () {
        $('#vjs-tip').css('display', 'none');
      });
    };
    this.on('loadedmetadata', init);
  };

  return PluginProgressTooltips;
});

define('video-view', [
  'ajs',
  'backbone',
  'underscore',
  'jquery',
  'file',
  'BaseViewer',
  'instance-manager',
  'file-types',
  'template-store-singleton',
  'keyboard',
  'video-view/button-youtube',
  'video-view/button-toggle-hd',
  'video-view/button-presentation-mode',
  'video-view/plugin-progress-tooltips'
], function (
  AJS,
  Backbone,
  _,
  $,
  File,
  BaseViewer,
  InstanceManager,
  fileTypes,
  templateStore,
  keyboard,
  buttonYoutube,
  buttonToggleHd,
  buttonPresentationMode,
  pluginProgressTooltips
) {
  /*global videojs*/
  'use strict';

  var playerManager = new InstanceManager(videojs, function (player) {
    /*
    videojs players created for files with unsupported codecs
    throw an uncaught error when calling pause()
    see HC-19832 https://jira.atlassian.com/browse/HC-19832

    As soon as PR on video.js is merged we can update and removed the
    `player.tech` check here
    see https://github.com/videojs/video.js/pull/2676
    */
    player.tech && player.pause();
    player.dispose();
  });

  var VideoView = BaseViewer.extend({

    id: 'cp-video-preview',

    playerId: 'cp-video-player',

    events: {
      'click .vjs-poster' : 'togglePlay'
    },

    initialize: function () {
      BaseViewer.prototype.initialize.apply(this, arguments);
      var type     = this.model.get('type');

      this._paddingVertical  = 20;
      this._paddingScrollbar = 40;
      this._paddingNavArrows = 160;

      this._isPaused    = true;
      this._isVideo   = fileTypes.isVideo(type);
      this._isAudio   = fileTypes.isAudio(type);
      this._isYoutube   = fileTypes.isYoutube(type);
      this._isAutoPlay  = this._fileViewer.get('videoViewerAutoplay');
      this._maxWidth    = this._isVideo ? 1280 : 640;
      this._maxHeight   = this._isVideo ? 720 : 640;
      this._minWidth    = this._isVideo ? 160 : 120;
      this._minHeight   = this._isVideo ? 90  : 120;
      this._hasHdSource = this.model.get('src_hd') ? true : false;

      $(window).on(
        'resize.videojs',
        _.throttle(this._handleResize.bind(this), 50)
      );
      $(document).on(
        'keydown.videoView',
        keyboard.createConditionalKeyHandler(this._handleKeyboardControl.bind(this))
      );
    },

    teardown: function () {
      $(window).off('resize.videojs', this._handleResize);
      $(document).off('keydown.videoView');
      playerManager.destroy();
    },

    clickHitBackground: function (e) {
      var hitBackground = e.target.getAttribute('id') === this.id;
      return hitBackground;
    },

    setupMode: function (mode) {
      $('.cp-toolbar-layer').hide();
    },

    _handleKeyboardControl: function (e) {
      if (e.which === keyboard.keys.SPACE || e.which === keyboard.keys.ENTER) {
        this.togglePlay();
        e.preventDefault();
      }
    },

    render: function () {
      var type = this.model.get('type');

      this.$el.html(templateStore.get('avPlayer.playerBody')({
        src: this._getVideoSrc(),
        poster: this._getPosterSrc(),
        type: type,
        kind: this._isVideo ? 'video' : 'audio'
      }));

      playerManager.create(this.playerId, {
        plugins: this._registerPlugins(),
        controls: true,
        ytFullScreenControls: false,
        textTrackDisplay: false,
        errorDisplay: false,
        controlBar: {
          timeDivider: false,
          remainingTimeDisplay: false,
          liveDisplay: false,
          fullscreenToggle: false,
          muteToggle: false,
          volumeMenuButton: false,
          playbackRateMenuButton: true,
          subtitlesButton: false,
          captionsButton: false,
          chaptersButton: false
        },
        autoplay: this._isAutoPlay,
        preload: true,
        width: this._maxWidth,
        height: this._maxHeight
      }).then(this._setupPlayer.bind(this));

      return this;
    },

    play: function () {
      this._videoPlayer.play();
    },

    togglePlay: function () {
      if (this._videoPlayer && this._isPaused) {
        this._videoPlayer.play();
      } else if (this._videoPlayer) {
        this._videoPlayer.pause();
      }
    },

    // Set focus back to our main element if the active element
    // is the iFrame. This is to prevent losing focus to the youtube
    // embedded player.
    _refocusFileViewer: function () {
      if (document.activeElement.tagName === 'IFRAME') {
        var $container = $('#cp-container');
        $container.attr('tabindex', -1);
        $container.focus();
      }
    },

    handleResize: function () {
      this._handleResize();
    },

    _handleResize: function () {
      var containerWidth  = Math.max(
        (this.$el.width() - this._paddingNavArrows),
        this._minWidth
      );
      var containerHeight = Math.max(
        (this.$el.height() - this._paddingVertical),
        this._minHeight
      );

      var $videoEl  = $(this._videoPlayer.el());
      var videoWidth  = $videoEl.width();
      var videoHeight = $videoEl.height();

      var ratio  = Math.min(
        (containerWidth / videoWidth),
        (containerHeight / videoHeight)
      );
      var newWidth  = Math.min(this._maxWidth, (videoWidth * ratio));
      var newHeight = Math.min(this._maxHeight, (videoHeight * ratio));

      $videoEl.css('width', newWidth).css('height', newHeight);
    },

    _videoError: function () {
      var err = new Error('Media failed loading');

      err.title = "Ouch! We can\'t load the media file.";
      err.description = this.model.get('src');
      err.icon = 'cp-multimedia-icon';

      if (!this.viewerReady) {
        $('#' + this.playerId).remove();
        this.trigger('viewerFail', err);
      }
    },

    _videoLoadedMetaData: function () {
      $('#' + this.playerId).addClass('vjs-ready');
      this.trigger('viewerReady');
      this.viewerReady = true;
    },

    _videoVolumeChange: function () {
      var storage = this._fileViewer.getStorage();
      storage.setItem('videoVolume', this._videoPlayer.volume());
    },

    _videoPlay: function () {
      this._refocusFileViewer();
      this._isPaused = false;
      $(this._videoPlayer.el()).removeClass('vjs-has-ended');
    },

    _videoPause: function () {
      this._refocusFileViewer();
      this._isPaused = true;
    },

    _videoEnded: function () {
      $(this._videoPlayer.el()).addClass('vjs-has-ended');
    },

    _restoreVolumeSetting: function () {
      var storage   = this._fileViewer.getStorage();
      var volumeLevel = parseFloat(storage.getItem('videoVolume'));
      if (!isNaN(volumeLevel)) {
        this._videoPlayer.volume(volumeLevel);
      }
    },

    _restoreVideoPosterIfNotSet: function () {
      var currentPoster = this._videoPlayer.poster();
      var posterSrc   = this._getPosterForCurrentQuality();
      if (this._isVideo && !currentPoster) {
        this._videoPlayer.poster(posterSrc);
      }
    },

    _handlePlayerReady: function () {
      this.viewerReady = false;
      this._restoreVolumeSetting();

      // VideoJS 4.12.15 adds tabindex=0 to control bar play button
      // Tabindex needs to be removed to prevent focus staying on the play button
      // and breaking keyboard control (SPACE) to play/pause.
      $(this._videoPlayer.el()).find('.vjs-control').each(function (idx, el) {
        $(el).removeAttr('tabindex');
      });

      // In case the poster was removed for autoplaying videos
      // it now is added again to be displayed after the video ended.
      this._videoPlayer.one('timeupdate',
        this._restoreVideoPosterIfNotSet.bind(this)
      );
      this._videoPlayer.on('loadedmetadata',
        this._videoLoadedMetaData.bind(this)
      );
      this._videoPlayer.on('volumechange',
        this._videoVolumeChange.bind(this)
      );
      this._videoPlayer.on('error',
        this._videoError.bind(this)
      );
      this._videoPlayer.on('play',
        this._videoPlay.bind(this)
      );
      this._videoPlayer.on('pause',
        this._videoPause.bind(this)
      );
      this._videoPlayer.on('ended',
        this._videoEnded.bind(this)
      );
    },

    _registerPlugins: function () {
      var pluginsObject = {};

      videojs.plugin('pluginProgressTooltips', pluginProgressTooltips);
      pluginsObject.pluginProgressTooltips = {};

      videojs.plugin('presentation', buttonPresentationMode.asPlugin(this._fileViewer));
      pluginsObject.presentation = {viewer: this};

      videojs.plugin('buttonToggleHd', buttonToggleHd.asPlugin(this._fileViewer));
      pluginsObject.buttonToggleHd = {
        src: this.model.get('src'),
        src_hd: this.model.get('src_hd') || '',
        poster: this.model.get('poster') || '',
        poster_hd: this.model.get('poster_hd') || this.model.get('poster') || '',
        hd_active: this._shouldUseHdSource()
      };

      if (this._isYoutube) {
        videojs.plugin('buttonYoutube', buttonYoutube.asPlugin(this._fileViewer));
        pluginsObject.buttonYoutube = {};
      }

      return pluginsObject;
    },

    _setUpAudio: function ($player) {
      $player.addClass('vjs-audio');
      if (!this.model.get('poster')) {
        // Set default poster for audio if none is provided
        $player.find('.vjs-poster').addClass('vjs-default-coverart');
      }
    },

    _setUpYoutube: function ($player) {
      // Disable the youtube-videojs' iframe blocker
      // to re-enable clicks to elements inside the youtube player.
      // Removing it completely is no option because the youtube plugin
      // fails on trying to remove the layer on player destruction.
      $('.iframeblocker').css('display', 'none');
    },

    _setupPlayer: function (player) {
      var $player = $('#' + this.playerId);
      this._videoPlayer = player;
      this._handleResize();

      if (this._isAudio) { this._setUpAudio($player); }
      if (this._isYoutube) { this._setUpYoutube($player); }

      player.ready(this._handlePlayerReady.bind(this));
    },

    _shouldUseHdSource: function () {
      if (!this._hasHdSource) { return false; }

      var playHdDefault = this._fileViewer.getConfig().videoDefaultQualityHd;
      var playHdUser    = this._fileViewer.getStorage().getItem('videoQualityHd');
      var playHdEnabled = typeof playHdUser === 'undefined' || playHdUser;

      var playHdSettings = (playHdDefault && playHdEnabled) !== false;

      return this._hasHdSource && playHdSettings;
    },

    _getPosterForCurrentQuality: function () {
      if (this._shouldUseHdSource()) {
        return this.model.get('poster_hd') || this.model.get('poster') || '';
      }
      return this.model.get('poster') || '';
    },

    _getPosterSrc: function () {
      // No poster for autoplaying videos to prevent flickering
      if (this._isAutoPlay && this._isVideo) {
        return '';
      }
      return this._getPosterForCurrentQuality();
    },

    _getVideoSrc: function () {
      if (this._shouldUseHdSource()) {
        return this.model.get('src_hd');
      }
      return this.model.get('src');
    }

  });

  return VideoView;
});

(function () {
  'use strict';
  var FileViewer = require('file-viewer');
  FileViewer.registerPlugin('autoplay-videos', function (fileViewer) {
    var totalFilesShown;
    fileViewer.on('fv.open', function () { totalFilesShown = 0; });
    fileViewer.on('fv.changeFile', function () {
      totalFilesShown++;
      fileViewer.set('videoViewerAutoplay', totalFilesShown === 1);
    });
  });
}());

}(function () {
  var FileViewer;

    if (typeof module !== "undefined" && ('exports' in module)) {
      FileViewer = require('./fileviewer.js');
    } else if (window.require) {
      FileViewer = window.FileViewer;
    } else {
      FileViewer = window.FileViewer;
    }

    return FileViewer;
}()));
;
;
/* module-key = 'com.atlassian.jira.jira-fileviewer-plugin:atlassian-fileviewer', location = 'jira-fileviewer-module/node_modules/@atlassian/fileviewer/dist/fileviewer-minimode-templates.js' */
// This file was automatically generated from minimode.i18n.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace FileViewer.Templates.
 */

if (typeof FileViewer == 'undefined') { var FileViewer = {}; }
if (typeof FileViewer.Templates == 'undefined') { FileViewer.Templates = {}; }


FileViewer.Templates.minimodeBanner = function(opt_data, opt_ignored) {
  return '<div id="cp-info"><a tabindex="100" href="#" id="cp-files-label" aria-label="' + soy.$$escapeHtml("Show all files") + '"><span class="cp-files-collapser up">' + soy.$$escapeHtml("Show all files") + '</span><span class="cp-files-collapser down hidden">' + soy.$$escapeHtml("Hide all files") + '</span>' + aui.icons.icon({useIconFont: true, size: 'small', icon: 'arrows-up', accessibilityText: "Show all files", extraClasses: 'cp-files-collapser up'}) + aui.icons.icon({useIconFont: true, size: 'small', icon: 'arrows-down', accessibilityText: "Hide all files", extraClasses: 'cp-files-collapser down hidden'}) + '</a></div>';
};
if (goog.DEBUG) {
  FileViewer.Templates.minimodeBanner.soyTemplateName = 'FileViewer.Templates.minimodeBanner';
}


FileViewer.Templates.minimode = function(opt_data, opt_ignored) {
  return '<ol id="cp-thumbnails"></ol>';
};
if (goog.DEBUG) {
  FileViewer.Templates.minimode.soyTemplateName = 'FileViewer.Templates.minimode';
}


FileViewer.Templates.thumbnail = function(opt_data, opt_ignored) {
  return '<figure role="group" class="cp-thumbnail-group"><div class="cp-thumbnail-img"><a href="#" class="cp-thumbnail-img-container size-48 ' + soy.$$escapeHtml(opt_data.iconClass) + ' has-thumbnail"><img src="' + soy.$$escapeHtml(opt_data.thumbnailSrc) + '" alt="' + soy.$$escapeHtml(AJS.format("View a larger version of {0}",opt_data.title)) + '" /></a></div><figcaption class="cp-thumbnail-title" aria-label="' + soy.$$escapeHtml(opt_data.title) + '">' + soy.$$escapeHtml(opt_data.title) + '</figcaption></figure>';
};
if (goog.DEBUG) {
  FileViewer.Templates.thumbnail.soyTemplateName = 'FileViewer.Templates.thumbnail';
}


FileViewer.Templates.placeholderThumbnail = function(opt_data, opt_ignored) {
  return '<figure role="group" class="cp-thumbnail-group"><div class="cp-thumbnail-img"><a href="#" class="cp-thumbnail-img-container size-48 ' + soy.$$escapeHtml(opt_data.iconClass) + '"></a></div><figcaption class="cp-thumbnail-title" aria-label="' + soy.$$escapeHtml(opt_data.title) + '">' + soy.$$escapeHtml(opt_data.title) + '</figcaption></figure>';
};
if (goog.DEBUG) {
  FileViewer.Templates.placeholderThumbnail.soyTemplateName = 'FileViewer.Templates.placeholderThumbnail';
}
;
;
/* module-key = 'com.atlassian.jira.jira-fileviewer-plugin:atlassian-fileviewer', location = 'jira-fileviewer-module/node_modules/@atlassian/fileviewer/dist/fileviewer-minimode.js' */
(function (FileViewer) {
    'use strict';

    // use FileViewer's internal module system
    var define  = FileViewer.define;
    var require = FileViewer.require;

define('minimode/MinimodePanel',
  [
    'jquery',
    'ajs',
    'backbone',
    'minimode/ThumbnailView',
    'template-store-singleton'
  ],
  function (
    $,
    AJS,
    Backbone,
    FileThumbnailView,
    templateStore
  ) {
    'use strict';

    var FileMinimodeView = Backbone.View.extend({

      id: 'cp-footer-minimode',

      initialize: function (options) {
        this.subviews = [];
        this._fileViewer = options.fileViewer;
        this._panelView = options.panelView;
        this.listenTo(this.collection, 'add reset', this.render);
        this.listenTo(this._panelView, 'renderPanel', this._forceChromeRepaint);
        this.listenTo(this._panelView, 'renderPanel', this.scrollToSelected);
        this.$minimode = $(templateStore.get('minimode')());
        this.$minimode.appendTo(this.$el);
      },

      closeOldSubviews: function () {
        while (this.subviews.length > 0) {
          var view = this.subviews.pop();
          view.remove();
          view.unbind();
        }
      },

      render: function () {
        this.closeOldSubviews();

        this.collection.each(function (model) {
          var view = new FileThumbnailView({
            model: model,
            fileViewer: this._fileViewer,
            panelView: this._panelView
          });
          this.subviews.push(view);
          $(view.render().el).appendTo(this.$minimode);
        }, this);

        return this;
      },

      scrollToSelected: function () {
        var file = this._fileViewer.getCurrentFile();
        this.subviews.forEach(function (view) {
          if (view.model === file) {
            var topPos = view.$el.get(0).offsetTop - 59;
            if ((topPos) && this.$el.scrollTop !== topPos) {
              this.$el.find('#cp-thumbnails').scrollTop(topPos);
            }
          }
        }.bind(this));
      },

      _forceChromeRepaint: function () {
        // Chrome doesn't respect the 100% height on images once the container is resized.
        var $img = $('#cp-img');
        if ($img.length) {
          var $preview = $img.closest('#cp-image-preview'),
            left = $preview.scrollLeft(),
            top = $preview.scrollTop();
          $img.css('display', 'none').height();
          $img.css('display', 'inline-block');
          $preview.scrollLeft(left);
          $preview.scrollTop(top);
        }
      }

    });

    return FileMinimodeView;
  }
);

define('minimode/minimodePlugin', [
  'minimode/MinimodeToggle',
  'minimode/MinimodePanel'
], function (
  MinimodeToggle,
  MinimodePanel
) {
  'use strict';

  var minimodePlugin = function (fileViewer) {
    var fileView = fileViewer.getView();
    var sinkView = fileView.fileSinkView;
    var metaView = fileView.fileMetaView;

    if (!fileViewer.getConfig().enableMiniMode) {
      return;
    }

    metaView.addLayerView('minimodeToggle', MinimodeToggle, {
      predicate: MinimodeToggle.predicate
    });
    sinkView.addPanelView('minimode', MinimodePanel);
  };

  return minimodePlugin;
});
define('minimode/MinimodeToggle', [
  'backbone', 'template-store-singleton'
], function (Backbone, templateStore) {
  'use strict';

  var MinimodeToggle = Backbone.View.extend({

    events: {
      'click #cp-files-label': '_toggleMinimode'
    },

    initialize: function (options) {
      this._fileViewer = options.fileViewer;
      this._sinkView = this._fileViewer.getView().fileSinkView;
    },

    render: function () {
      this.$el.html(templateStore.get('minimodeBanner')());
      this._setShowAllFilesVisible();
      return this;
    },

    _toggleMinimode: function (event) {
      event.preventDefault();

      var analytics = this._fileViewer.analytics;

      if (this._sinkView.isPanelInitialized('minimode')) {
        this._sinkView.teardownPanel('minimode');
        analytics.send('files.fileviewer-web.minimode.closed');
      } else {
        this._sinkView.initializePanel('minimode');
        analytics.send('files.fileviewer-web.minimode.opened');
      }

      this._setShowAllFilesVisible();
    },

    _setShowAllFilesVisible: function () {
      var visible = this._sinkView.isPanelInitialized('minimode');
      this.$('.cp-files-collapser.up').toggleClass('hidden', visible);
      this.$('.cp-files-collapser.down').toggleClass('hidden', !visible);
    }

  }, {

    predicate: function (fileViewer) {
      return fileViewer._fileState.collection.length > 1;
    }

  });

  return MinimodeToggle;
});

define('minimode/ThumbnailView',
  [
    'ajs',
    'backbone',
    'jquery',
    'underscore',
    'file-types',
    'icon-utils',
    'template-store-singleton'
  ],
  function (
    AJS,
    Backbone,
    $,
    _,
    fileTypes,
    iconUtils,
    templateStore
  ) {
    'use strict';

    var ThumbnailView = Backbone.View.extend({

      className: 'cp-thumbnail',

      tagName: 'li',

      events: {
        'click' : 'jumpToFile'
      },

      initialize: function (options) {
        this._fileViewer = options.fileViewer;
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(options.panelView, 'renderPanel', this.setSelected);
      },

      jumpToFile: function (event) {
        event.preventDefault();

        this._fileViewer.showFileWithCID(this.model.cid)
        .then(function () {
          var contentView = this._fileViewer.getView().fileContentView;
          var currentViewer;
          if (contentView.isLayerInitialized('content')) {
            currentViewer = contentView.getLayerForName('content')._viewer;
            currentViewer && currentViewer.play && currentViewer.play();
          }
        }.bind(this))
        .always(
          this._fileViewer.analytics.fn('files.fileviewer-web.minimode.thumbnail.clicked')
        );
      },

      setSelected: function () {
        // this may not be the same as file being shown, e.g., a different version of file is shown
        var file = this._fileViewer._fileState.getCurrent();
        if (file === this.model) {
          this.$el.addClass('selected');
        } else if (this.$el.hasClass('selected')) {
          this.$el.removeClass('selected');
        }
      },

      onThumbLoadError: function (ev) {
        var el = $(ev.target);
        el.parent().removeClass('has-thumbnail');
        el.remove();
      },

      render: function () {
        var type = this.model.get('type'),
          thumbnailSrc = this.model.get('thumbnail'),
          isImage = fileTypes.isImage(type);

        var generateThumbnail = this._fileViewer.getConfig().generateThumbnail;

        var $thumbnail = $(templateStore.get('placeholderThumbnail')({
          iconClass: iconUtils.getCssClass(type),
          title: this.model.get('title')
        }));

        this.$el.empty().append($thumbnail);

        if (thumbnailSrc && generateThumbnail) {
          generateThumbnail(this.model).done(function (thumbSrc) {
            $thumbnail.replaceWith(templateStore.get('thumbnail')({
              iconClass: iconUtils.getCssClass(type),
              thumbnailSrc: thumbSrc,
              title: this.model.get('title')
            }));
            this.$el.find('img').error(this.onThumbLoadError);
          }.bind(this));
        } else if (isImage || thumbnailSrc) {
          $thumbnail.replaceWith(templateStore.get('thumbnail')({
            iconClass: iconUtils.getCssClass(type),
            thumbnailSrc: thumbnailSrc || this.model.get('src'),
            title: this.model.get('title')
          }));
          this.$el.find('img').error(this.onThumbLoadError);
        }

        return this;
      }

    });

    return ThumbnailView;
  });

(function () {
  'use strict';
  var FileViewer = require('file-viewer');
  var minimodePlugin = require('minimode/minimodePlugin');
  FileViewer.registerPlugin('minimode', minimodePlugin);
}());

}(function () {
  var FileViewer;

    if (typeof module !== "undefined" && ('exports' in module)) {
      FileViewer = require('./fileviewer.js');
    } else if (window.require) {
      FileViewer = window.FileViewer;
    } else {
      FileViewer = window.FileViewer;
    }

    return FileViewer;
}()));
;
;
/* module-key = 'com.atlassian.jira.jira-fileviewer-plugin:atlassian-fileviewer', location = 'jira-fileviewer-module/module-backend/asynchronous.js' */
define("jira/fileviewer/module-backend/asynchronous",["wrm/require","jira/jquery/deferred","jquery","wrm/context-path"],function(e,r,i,a){"use strict";var n=/(.+[\/])[^\/]+/;return function(o){function t(){var e=new r;return i.ajax({url:a()+"/rest/webResources/1.0/resources",type:"POST",contentType:"application/json",dataType:"json",data:JSON.stringify({r:[s],c:[],xc:[],xr:[]})}).done(function(r){var i=r.resources[0].url,a=i.match(n)[1]+"bcmaps/";e.resolve({workerSrc:i,cMapUrl:a})}).fail(e.reject.bind(e)),e.promise()}var c={"pdf-viewer":"wr!com.atlassian.jira.jira-fileviewer-plugin:fileviewer-pdf"},s="com.atlassian.jira.jira-fileviewer-plugin:fileviewer-pdf-worker";return c[o]?e(c[o]):"pdf-config"===o?t():void 0}});;
;
/* module-key = 'com.atlassian.jira.jira-fileviewer-plugin:atlassian-fileviewer', location = 'jira-fileviewer-module/module-backend/analytics.js' */
define("jira/fileviewer/module-backend/analytics",["jira/analytics"],function(e){"use strict";return function(i,n){e.send({name:i,properties:n})}});;
;
/* module-key = 'com.atlassian.crowd.user-provisioning-vertigo-plugin:common-flag-resources', location = 'user-provisioning-vertigo-module/js/atlassian/aui-polyfill/flag.js' */
/*
 * Polyfill for aui/flag for use in products that don't provide a version (due to using an ancient AUI version).
 */
(function() {
    try {
        require('aui/flag')
    } catch (e) {
        define('aui/flag', [], displayFlagAsMessage);
    }

    function displayFlagAsMessage(args) {
        var type = (args.type || "").toLowerCase();
        var message = typeof AJS.messages[type] == 'function' ? AJS.messages[type] : AJS.messages.generic;

        // for some reason we display info messages as warnings... keeping that for backward compatibility
        message(".notifications", { body: args.message });
    }
})();
;
;
/* module-key = 'com.atlassian.crowd.user-provisioning-vertigo-plugin:common-flag-resources', location = 'user-provisioning-vertigo-module/js/atlassian/flag.js' */
/**
 * This is a wrapper around AUI Flag which will escape the body text of the Flag unless explicitly told not to.
 *
 * The body will NOT be escaped iff the passed in object has an attribute 'isHtml' and it is set to true.
 */
define('user-management-common/flag', [
    'aui/flag',
    'underscore',
    'jquery'
], function(
    flag,
    _,
    $
) {
    return function(options){
        var createdFlag;
        // If not explicitly HTML, escape the body
        if(!options.isHtml) {
            options.body = _.escape(options.body);
        }

        createdFlag = flag(options);
        $(createdFlag).on('aui-flag-close', function(){
            createdFlag.dispatchEvent(new CustomEvent('um-flag-close', { bubbles: true }));
        });
        return createdFlag;
    };
});
;
;
/* module-key = 'com.atlassian.crowd.user-provisioning-vertigo-plugin:impersonation-resources', location = 'user-provisioning-vertigo-module/js/atlassian/helpers/cookies.js' */
define('user-management-common/helpers/cookies', [], function() {
    return {
        readCookie: function (name) {
            //document.cookie lists cookies in the format "name1=value1; name2=value2" etc
            //see https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
            var nameEQ = name + "=";
            var cookieList = document.cookie.split(';');
            for (var i = 0; i < cookieList.length; i++) {
                var cookie = cookieList[i];

                //Remove any leading spaces (normally 1, but I don't want to make assumptions)
                while (cookie.charAt(0) == ' ') {
                    cookie = cookie.substring(1, cookie.length);
                }

                //Remove the name1= part and return what is left
                if (cookie.indexOf(nameEQ) === 0) {
                    return decodeURIComponent(cookie.substring(nameEQ.length, cookie.length));
                }
            }
            return null;
        }
    };
});
;
;
/* module-key = 'com.atlassian.crowd.user-provisioning-vertigo-plugin:impersonation-resources', location = 'user-provisioning-vertigo-module/js/atlassian/impersonation/impersonation.js' */
/**
 * This module displays an informational message with a link to drop the impersonation, if the current user is
 * being impersonated. This script is used in both user management and user provisioning plugins.
 */
define('user-management-common/impersonation/impersonation', [
    'jquery',
    'underscore',
    'user-management-common/flag',
    'user-management-common/helpers/cookies'
], function(
    $,
    _,
    flag,
    cookies
) {
    var showImpersonationMessaging = function(username){
        var message = AJS.format("You\'\'re temporarily logged in as {0}. When you\'\'re done, {1}switch back{2} to your account.",
            _.escape(impersonation.getDisplayName()),
            '<a id="impersonation-dismiss-trigger" href="#">', '</a>');

        var messageFlag = flag({ type: 'info', isHtml: true, body: message });

        $(messageFlag).find("#impersonation-dismiss-trigger").click(function (e) {
            e.preventDefault();
            impersonation.dropImpersonation().then(function () {
                if (username) {
                    window.open("/admin/users/view?username=" + encodeURIComponent(username), "_top");
                } else {
                    window.open("/admin/users", "_top");
                }
            });
        });
    };

    function showImpersonationFlag() {
        var message = AJS.format("You\'\'re temporarily logged in as another user. When you\'\'re done, {0}switch back{1} to your account.",
            '<a id="impersonation-dismiss-trigger" href="#">', '</a>');

        var messageFlag = flag({ type: 'info', isHtml: true, body: message });

        $(messageFlag).find('#impersonation-dismiss-trigger').click(function (e) {
            e.preventDefault();
            impersonation.getReleaseImpersonationLink().then(function (data) {
                window.open(data.link, '_top');
            });
        });
    }

    var impersonation = {
        init: function () {
            if (impersonation.isImpersonated()) {
                showImpersonationMessaging(impersonation.getUsername());
            } else if (impersonation.getUserId()) {
                showImpersonationFlag();
            }
        },

        getUserId: function () {
            return cookies.readCookie('um.user.impersonated.userid');
        },

        getUsername: function () {
            return cookies.readCookie("um.user.impersonated.username");
        },

        getDisplayName: function () {
            return cookies.readCookie("um.user.impersonated.displayname");
        },

        getReleaseImpersonationLink: function () {
            var userId = impersonation.getUserId();
            var cloudId = AJS.Meta.get('cloud-id');
            return $.ajax({
                type: 'POST',
                url: '/gateway/api/adminhub/um/site/' + cloudId + '/users/' + userId + '/impersonate/release',
                dataType: 'json'
            });
        },

        dropImpersonation: function () {
            return $.ajax({
                type: "POST",
                contentType: 'application/json',
                url: "/admin/rest/um/1/impersonate/release"
            });
        },

        isImpersonated: function () {
            return !!impersonation.getUsername();
        }
    };
    return impersonation;
});
;
;
/* module-key = 'com.atlassian.crowd.user-provisioning-vertigo-plugin:impersonation-resources', location = 'user-provisioning-vertigo-module/js/atlassian/impersonation-init.js' */
require(['jquery', 'user-management-common/impersonation/impersonation'],
function($, impersonation) {
    $(impersonation.init);
});;
;
/* module-key = 'com.atlassian.pas:pas-everypage-static', location = 'public-announcement-module/js/ajs-amd.js' */
define('pas/ajs', [], function () {
    'use strict';

    return AJS;
});;
;
/* module-key = 'com.atlassian.pas:pas-everypage-static', location = 'public-announcement-module/js/store_js/store.js' */
//
// store.js by Frank Kohlhepp
// Copyright (c) 2011 - 2012 Frank Kohlhepp
// https://github.com/frankkohlhepp/store-js
// License: MIT-license
//
(function () {
    var has = function (object, key) {
        return Object.prototype.hasOwnProperty.call(object, key);
    };

    var objectGetLength = function (object) {
        var count = 0;
        for (var key in object) {
            if (has(object, key)) {
                count++;
            }
        }

        return count;
    };

    var arrayIndexOf = function (array, item, from) {
        var length = array.length >>> 0;
        for (var i = (from < 0) ? Math.max(0, length + from) : from || 0; i < length; i++) {
            if (array[i] === item) {
                return i;
            }
        }

        return -1;
    };

    var arrayContains = function (array, item, from) {
        return arrayIndexOf(array, item, from) !== -1;
    };

    var arrayInclude = function (array, item) {
        if (!arrayContains(array, item)) {
            array.push(item);
        }
        return array;
    };

    var Store = this.Store = function (name, defaults, watcherSpeed) {
        this.name = name;
        this.defaults = defaults || {};
        this.watcherSpeed = watcherSpeed || 500;
        this.listeners = {};

        // Apply defaults
        this.applyDefaults();
    };

    Store.clear = function () {
        localStorage.clear();
    };

    Store.prototype.applyDefaults = function () {
        for (var key in this.defaults) {
            if (has(this.defaults, key) && this.get(key) === undefined) {
                this.set(key, this.defaults[key]);
            }
        }

        return this;
    };

    Store.prototype.watcher = function (force) {
        if (this.watcherTimer) {
            clearTimeout(this.watcherTimer);
        }

        if (objectGetLength(this.listeners) || force) {
            this.newObject = this.toObject();

            if (this.oldObject) {
                for (var key in this.newObject) {
                    if (has(this.newObject, key) && this.newObject[key] !== this.oldObject[key]) {
                        this.fireEvent(key, this.newObject[key]);
                    }
                }

                for (var key in this.oldObject) {
                    if (has(this.oldObject, key) && !has(this.newObject, key)) {
                        this.fireEvent(key, this.newObject[key]);
                    }
                }
            }

            this.oldObject = this.newObject;
            var that = this;
            this.watcherTimer = setTimeout(function () {
                that.watcher();
            }, this.watcherSpeed);
        }

        return this;
    };

    Store.prototype.get = function (name) {
        var value = localStorage.getItem("store." + this.name + "." + name);
        if (value === null) {
            return undefined;
        }
        try {
            return JSON.parse(value);
        } catch (e) {
            return null;
        }
    };

    Store.prototype.set = function (name, value) {
        if (value === undefined) {
            this.remove(name);
        } else {
            if (typeof value === "function") {
                value = null;
            }
            try {
                value = JSON.stringify(value);
            } catch (e) {
                value = null;
            }
            localStorage.setItem("store." + this.name + "." + name, value);
        }

        return this;
    };

    Store.prototype.remove = function (name) {
        localStorage.removeItem("store." + this.name + "." + name);
        return this.applyDefaults();
    };

    Store.prototype.reset = function () {
        var name = "store." + this.name + ".";
        for (var i = (localStorage.length - 1); i >= 0; i--) {
            if (localStorage.key(i).substring(0, name.length) === name) {
                localStorage.removeItem(localStorage.key(i));
            }
        }

        return this.applyDefaults();
    };

    Store.prototype.toObject = function () {
        var values = {};
        var name = "store." + this.name + ".";
        for (var i = (localStorage.length - 1); i >= 0; i--) {
            if (localStorage.key(i).substring(0, name.length) === name) {
                var key = localStorage.key(i).substring(name.length);
                var value = this.get(key);
                if (value !== undefined) {
                    values[key] = value;
                }
            }
        }

        return values;
    };

    Store.prototype.fromObject = function (values, merge) {
        if (!merge) {
            this.reset();
        }
        for (var key in values) {
            if (has(values, key)) {
                this.set(key, values[key]);
            }
        }

        return this;
    };

    Store.prototype.addEvent = function (selector, callback) {
        this.watcher(true);
        if (!this.listeners[selector]) {
            this.listeners[selector] = [];
        }
        arrayInclude(this.listeners[selector], callback);
        return this;
    };

    Store.prototype.removeEvent = function (selector, callback) {
        for (var i = (this.listeners[selector].length - 1); i >= 0; i--) {
            if (this.listeners[selector][i] === callback) {
                this.listeners[selector].splice(i, 1);
            }
        }

        if (!this.listeners[selector].length) {
            delete this.listeners[selector];
        }
        return this;
    };

    Store.prototype.fireEvent = function (name, value) {
        var selectors = [name, "*"];
        for (var i = 0; i < selectors.length; i++) {
            var selector = selectors[i];
            if (this.listeners[selector]) {
                for (var j = 0; j < this.listeners[selector].length; j++) {
                    this.listeners[selector][j](value, name, this.name);
                }
            }
        }

        return this;
    };
}());;
;
/* module-key = 'com.atlassian.pas:pas-everypage-static', location = 'public-announcement-module/js/store_js/store-amd.js' */
define("pas/js/store_js/store", function () {
    return Store;
});;
;
/* module-key = 'com.atlassian.pas:pas-everypage-static', location = 'public-announcement-module/js/pasConfig.js' */
define("pas/js/pas-config", [
    "jquery",
    "pas/ajs",
    "pas/js/store_js/store"
], function ($,
             AJS,
             Store) {
    "use strict";

    var MINUTE = 60 * 1000;

    return {
        timeUpdateInterval: MINUTE,
        pollingInterval: 15 * MINUTE,
        url: AJS.contextPath() + "/rest/pas/latest/announcement",
        store: new Store("Atlassian.PAS.Announcements." + document.location.hostname + AJS.contextPath() + "." + $("meta[name='ajs-remote-user']").attr('content')),
        nextAnnouncementKey: "nextAnnouncement",
        timeStampKey: "timeStamp",
        config: {
            url: AJS.contextPath() + "/rest/pas/latest/settings",
            timeStampKey: "configTimeStampKey",
            pollingInterval: 30 * 60 * 1000,
            currentConfigKey: "currentConfigKey"
        },
        cookieKey: AJS.contextPath().replace('/', '') + "_pas.dismiss"
    };
});;
;
/* module-key = 'com.atlassian.pas:pas-everypage-static', location = 'public-announcement-module/js/pas.js' */
require([
    "jquery",
    "aui/flag",
    "pas/ajs",
    "pas/js/pas-config"
], function ($,
             flag,
             AJS,
             PAS) {
    "use strict";

    AJS.toInit(function () {
        var showTimeout = null;
        var hideTimeout = null;
        var updateTimeout = null;
        var timeLeft = 0;

        var announcementSource;
        var projectKey;
        var issueNumber;

        var friendlyFormatDate = function (delay) {
            var padString = function (s, c, len) {
                s = "" + s; // ensure it's a string
                while (s.length < len) {
                    s = c + s;
                }
                return s;
            };
            var pluralize = function (val, unit) {
                var result = val + " " + unit;
                if (val != 1) {
                    result += "s";
                }
                return result;
            };

            var oneMinute = 60000;
            var oneHour = 3600000;
            var oneDay = 86400000;

            if (delay < oneMinute) {
                return "in less than a minute";
            }
            else if (delay < oneHour) {
                return "in " + pluralize(Math.round(delay / oneMinute), "min");
            }
            else if (delay < oneDay) {
                return "in " + pluralize(Math.round(delay / oneHour), "hour") + " " + pluralize(Math.round((delay % oneHour) / oneMinute), "minute");
            }
            else {
                var d = new Date();
                d.setSeconds(d.getSeconds() + Math.round(delay / 1000));
                return (
                    padString(d.getFullYear(), '0', 4) +
                    "/" +
                    padString(d.getMonth() + 1, '0', 2) +
                    "/" +
                    padString(d.getDate(), '0', 2) +
                    " " +
                    padString(d.getHours(), '0', 2) +
                    ":" +
                    padString(d.getMinutes(), '0', 2)
                );
            }
        };

        var clearState = function () {
            if (showTimeout != null) {
                clearTimeout(showTimeout);
            }
            if (hideTimeout != null) {
                clearTimeout(hideTimeout);
            }
            if (updateTimeout != null) {
                clearInterval(updateTimeout);
            }
            document.getElementById("pas-announcement").close();
        };

        var showAnnouncement = function () {
            var announcementContent = PAS.announcementText;
            var announcementUrl = PAS.announcementUrl || "";
            var announcementTime = PAS.announcementTime;
            var announcementId = PAS.announcementId;

            var announcementTicket = PAS.announcementTicket;
            announcementSource = PAS.announcementSource;

            var projectKeyPattern = /([A-Z])\w+/g;
            var issueNumberPattern = /\d+/g;

            projectKey = projectKeyPattern.exec(announcementTicket);
            issueNumber = issueNumberPattern.exec(announcementTicket);

            function escapeRegExp(str) {
                return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            }

            var announcementTargetPath = escapeRegExp(PAS.announcementTargetPath) || "";
            var announcementTargetPathRegex = new RegExp(announcementTargetPath);

            var announcementFlag;

            if (location.href.match(announcementTargetPathRegex) !== null) {
                announcementFlag = flag({
                    type: "info",
                    title: "Public service announcement",
                    body: announcementContent + announcementUrl + announcementTime,
                    close: "manual"
                });

                if (announcementSource == "alertr") {
                    triggerPasAlertrAnalytics({
                        name: "pas.alertr.announcement.display"
                    });
                }
            }

            if (announcementFlag !== undefined) {
                announcementFlag.setAttribute("id", "pas-announcement");
                announcementFlag.setAttribute("announcementId", announcementId);

                announcementFlag.addEventListener("aui-flag-close", function () {
                    dismissAnnouncement();
                });
            }

            addUrlClickedEventHandler();
        };

        var addUrlClickedEventHandler = function () {
            AJS.$("#more-info").on('click', function () {
                if (announcementSource == "alertr") {
                    triggerPasAlertrAnalytics({
                        name: "pas.alertr.announcement.url.clicked"
                    });
                }
            });
        };

        var dismissAnnouncement = function () {
            var announcementId = PAS.announcementId;
            var expiry = new Date();
            var cookieValue;

            expiry.setMonth(expiry.getMonth() + 1);
            cookieValue = announcementId + "; expires=" + expiry.toUTCString();
            document.cookie = PAS.cookieKey + "=" + cookieValue + "; path=/";
            AJS.trigger('analyticsEvent', {
                name: 'com.atlassian.plugins.pas.dismiss-announcement.click',
                data: {message: $("#pas-announcement span:first").text()}
            });

            if (announcementSource == "alertr") {
                triggerPasAlertrAnalytics({
                    name: "pas.alertr.announcement.dismissed"
                });
            }
        };

        var checkDismissed = function (announcementId, cookieKey) {
            var cookies = document.cookie.split(";");
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i];
                var pos = cookie.indexOf("=");
                var key = cookie.substr(0, pos).trim();
                var value = cookie.substr(pos + 1).trim();
                if (key == cookieKey) {
                    return value == announcementId;
                }
            }
            return false;
        };

        var updateTimeLeft = function () {
            if (timeLeft > 0) {
                var newTimeLeft = timeLeft - PAS.timeUpdateInterval;
                timeLeft = newTimeLeft;
                PAS.announcementTime = Atlassian.PAS.Templates.pasTime({
                    time: friendlyFormatDate(newTimeLeft)
                });
            }
            else {
                clearInterval(updateTimeout);
                updateTimeout = null;
            }
        };

        var triggerPasAlertrAnalytics = function (event) {
            var key = projectKey[0];
            AJS.trigger('analyticsEvent', {
                name: event.name,
                data: {issueNumber: issueNumber, project: key}
            });
        };

        var scheduleAnnouncementToAppear = function () {
            function adjustTimeToStart() {
                return data.timeToStart - getTimeSinceLastPoll();
            }

            var data = getFromLocalStorage(PAS.nextAnnouncementKey);

            // Do nothing if no announcement or if the user dismissed it
            if (data == null || data.message == null || checkDismissed(data.id, PAS.cookieKey)) {
                return;
            }

            timeLeft = data.timeLeft;

            PAS.announcementText = data.message;
            PAS.announcementTime = Atlassian.PAS.Templates.pasTime({
                time: friendlyFormatDate(timeLeft)
            });
            updateTimeout = setInterval(updateTimeLeft, PAS.timeUpdateInterval);
            if (data.url) {
                PAS.announcementUrl = Atlassian.PAS.Templates.pasUrl({
                    url: data.url
                });
            }

            PAS.announcementTargetPath = data.targetPath;
            PAS.announcementId = data.id;

            var timeToHide = data.duration;
            data.timeToStart = adjustTimeToStart();

            if (data.source) {
                PAS.announcementSource = data.source;
            }
            if (data.incidentTicket) {
                PAS.announcementTicket = data.incidentTicket;
            }

            if (data.timeToStart > 0) {
                timeToHide += data.timeToStart;
                showTimeout = setTimeout(function () {
                    showAnnouncement();
                }, data.timeToStart);
            } else {
                showAnnouncement();
            }

            if (timeToHide > 0) {
                hideTimeout = setTimeout(function () {
                    clearState();
                }, timeToHide);
            }
        };

        function pollForMessage(callback) {
            $.ajax({
                type: "GET",
                contentType: "application/json",
                url: PAS.url,
                cache: false,
                global: false,
                timeout: 5000,
                success: function (json, resultStatus) {
                    setInLocalStorage(PAS.timeStampKey, nowInMs());
                    setInLocalStorage(PAS.nextAnnouncementKey, json);
                    callback();
                }, error: function (xhr, resultStatus, e) {
                    AJS.log("Could not get announcement from server: " + e);
                }

            });
        }

        var nowInMs = function () {
            return new Date().getTime();
        };

        var getTimeSinceLastPoll = function () {
            return (nowInMs() - getFromLocalStorage(PAS.timeStampKey));
        };

        function getFromLocalStorage(key) {
            return PAS.store.get(key);
        }

        function setInLocalStorage(key, value) {
            return PAS.store.set(key, value);
        }

        function isStale(timeStampKey, pollingInterval) {
            var previousPollTimeStamp = getFromLocalStorage(timeStampKey);
            var timeSinceLastPoll = nowInMs() - previousPollTimeStamp;
            return previousPollTimeStamp == undefined || timeSinceLastPoll > pollingInterval
        }

        function announcementCacheIsStale() {
            return isStale(PAS.timeStampKey, PAS.pollingInterval);
        }

        function configurationCacheIsStale() {
            return isStale(PAS.config.timeStampKey, PAS.config.pollingInterval);
        }

        function setupAnalyticsEvents() {
            $("#more-info").live("click", function (event) {
                AJS.trigger('analyticsEvent', {
                    name: 'com.atlassian.plugins.pas.more-info.click',
                    data: {message: $("#pas-announcement span:first").text()}
                });
            });
        }

        function pollForMessageIfNecessary() {
            if (announcementCacheIsStale()) {
                pollForMessage(scheduleAnnouncementToAppear);
            } else {
                scheduleAnnouncementToAppear();
            }
        }

        setupAnalyticsEvents();

        pollForMessageIfNecessary();
    });
});

;
;
/* module-key = 'com.atlassian.pas:pas-everypage-static', location = 'public-announcement-module/templates/soy/pas.soy' */
// This file was automatically generated from pas.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Atlassian.PAS.Templates.
 */

if (typeof Atlassian == 'undefined') { var Atlassian = {}; }
if (typeof Atlassian.PAS == 'undefined') { Atlassian.PAS = {}; }
if (typeof Atlassian.PAS.Templates == 'undefined') { Atlassian.PAS.Templates = {}; }


Atlassian.PAS.Templates.pasTime = function(opt_data, opt_ignored) {
  return '<span class="pas-announcement-time">' + soy.$$escapeHtml(opt_data.time) + '</span>';
};
if (goog.DEBUG) {
  Atlassian.PAS.Templates.pasTime.soyTemplateName = 'Atlassian.PAS.Templates.pasTime';
}


Atlassian.PAS.Templates.pasUrl = function(opt_data, opt_ignored) {
  return '<p><a id="more-info" target="_blank" href=\'' + soy.$$escapeHtml(opt_data.url) + '\'>' + soy.$$escapeHtml('More information') + '</a></p>';
};
if (goog.DEBUG) {
  Atlassian.PAS.Templates.pasUrl.soyTemplateName = 'Atlassian.PAS.Templates.pasUrl';
}
;
;
/* module-key = 'com.atlassian.jira.plugins.jira-development-integration-plugin:devsummarycf-resources-init', location = 'jira-development-integration-plugin/js/customfields/devsummary/dev-summary-custom-field-init.js' */
"use strict";require(["jira/skate","jquery"],function(e,t){var i="wrc!com.atlassian.jira.plugins.jira-development-integration-plugin:devsummarycf-resources";e("fusion-devsummary-cf",{type:e.type.CLASS,created:function(e){WRM.require([i],function(){var i=require("jira-development-status/customfields/dev-summary-custom-field-column-view"),r=require("jira-development-status/component/tooltip"),o=t(e);new i({el:o}),r.tipsify({selector:".fusion-widget-tooltip",context:o,html:!0})})}})});;
;
/* module-key = 'com.atlassian.jira.plugins.jira-browser-metrics:contrib', location = 'jira-browser-metrics-frontend/contrib.js' */
window["browser-metrics-plugin"].install(function(r){require(["internal/browser-metrics","internal/browser-metrics-aa-beacon","jquery","jira/featureflags/feature-manager"],function(e,n,t,i,a){var o,s={},u={},d={},l={},f={},c={},p={},m={},b={},v={},R={},S={},h={},w={},y={},_={},I={},N={},M={},E={},g={},D={},T={},V={};s=function(r){r.window=(0,eval)("window");return r}(s),u=function(r,e){function n(){t||(t=e.window.WRM.data.claim(i));var r=t?{applicationHash:t}:{};return r}r.applicationHashReporter=n;var t=null,i="com.atlassian.jira.plugins.jira-browser-metrics:contrib.scm-commit-id";return r}(u,s),d=function(r){function e(r){return"string"==typeof r.applicationHash}function n(r){if(e(r))return{applicationHash:r.applicationHash}}return r.applicationHashReportMarshaller=n,r}(d),l=function(r,e){function n(r){return r.isInitial?t.promise():{}}r.applicationVersionReporter=n;var t=e.Deferred();return e(function(){var r={},n=e("meta[name=application-name]").data("version");n&&(r.applicationHash=n),t.resolve(r)}),r}(l,t),f=function(r){function e(r){return"string"==typeof r.applicationVersion}function n(r){if(e(r))return{applicationVersion:r.applicationVersion}}return r.applicationVersionReportMarshaller=n,r}(f),c=function(r,e){function n(r){return""+Number(r)===r}function t(r){return r.isInitial?i.promise():{}}r.serverDurationReporter=t;var i=e.Deferred();return e(function(){var r={},t=e("#jira_request_timing_info").find("[title=jira\\.request\\.server\\.time]").val();t&&n(t)&&(r.serverDuration=Number(t));var a=e("#jira_request_timing_info").find("[title=jira\\.request\\.server\\.head\\.time]").val();a&&n(a)&&(r.serverHeadDuration=Number(a));var o=e("#jira_request_timing_info").find("[title=jira\\.request\\.id]").val();o&&(r.serverOriginRequestId=o);var s=e("#jira_request_timing_info").find("[title=jira\\.request\\.trace\\.id]").val();s&&(r.serverRequestTraceId=s),i.resolve(r)}),r}(c,t),p=function(r){function e(r){return"number"==typeof r.serverDuration}function n(r){if(e(r))return{serverDuration:""+r.serverDuration,serverHeadDuration:""+r.serverHeadDuration,serverOriginRequestId:""+r.serverOriginRequestId,serverRequestTraceId:""+r.serverRequestTraceId}}return r.serverDurationReportMarshaller=n,r}(p),m=function(r,e){function n(r){return""+Number(r)===r}function t(r){return r.isInitial?i.promise():{}}r.databaseDurationReporter=t;var i=e.Deferred();return e(function(){var r={},t="#jira_request_timing_info",a=e(t).find("[title=db\\.reads\\.time\\.in\\.ms]").val(),o=e(t).find("[title=db\\.conns\\.time\\.in\\.ms]").val(),s=e(t).find("[title=db\\.reads\\.count]").val(),u=e(t).find("[title=head\\.db\\.reads\\.count]").val();a&&n(a)&&(r.dbReadsTimeInMs=Number(a)),o&&n(o)&&(r.dbConnsTimeInMs=Number(o)),s&&n(s)&&(r.dbReadsCount=Number(s)),u&&n(u)&&(r.dbReadsHeadCount=Number(u)),i.resolve(r)}),r}(m,t),b=function(r){function e(r){return"number"==typeof r.dbReadsTimeInMs||"number"==typeof r.dbConnsTimeInMs||"number"==typeof r.dbReadsCount||"number"==typeof r.dbReadsHeadCount}function n(r){if(e(r)){var n={dbReadsTimeInMs:""+(r.dbReadsTimeInMs||""),dbConnsTimeInMs:""+(r.dbConnsTimeInMs||"")};return r.dbReadsCount&&(n.dbReadsCount=r.dbReadsCount),r.dbReadsHeadCount&&(n.dbReadsHeadCount=r.dbReadsHeadCount),n}}return r.databaseDurationReportMarshaller=n,r}(b),v=function(r,e){function n(r){if(r.isInitial){i||(i=e.window.WRM.data.claim(t));var n=i?{correlationId:i}:{};return n}return{}}r.correlationIdReporter=n;var t="jira.request.correlation-id",i=null;return r}(v,s),R=function(r){function e(r){return"string"==typeof r.correlationId}function n(r){if(e(r))return{correlationId:r.correlationId}}return r.correlationIdReportMarshaller=n,r}(R),S=function(r,e){function n(r){var n={};if(e.window.performance&&e.window.performance.getEntriesByName&&r.isInitial){var t=e.window.performance.getEntriesByName("mark_fully_visible"),i=e.window.performance.getEntriesByName("mark_fully_loaded");if(t&&t.length>0&&i&&i.length>0){var a=t[0].startTime;n.deferScriptsStart=a;var o=i[0].startTime;n.deferScriptsEnd=o;var s=0,u=e.window.performance.getEntriesByName("defer_scripts_clicks");u&&u.forEach(function(r){var e=r.startTime;e>=a&&e<=o&&s++}),n.deferScriptsClicks=s;var d=0,l=e.window.performance.getEntriesByName("defer_scripts_keydowns");l&&l.forEach(function(r){var e=r.startTime;e>=a&&e<=o&&d++}),n.deferScriptsKeydowns=d}}return n}return r.deferScriptsReporter=n,r}(S,s),h=function(r){function e(r){var e={};return"number"==typeof r.deferScriptsStart&&(e.deferScriptsStart=Math.floor(r.deferScriptsStart)),"number"==typeof r.deferScriptsEnd&&(e.deferScriptsEnd=Math.floor(r.deferScriptsEnd)),"number"==typeof r.deferScriptsClicks&&(e.deferScriptsClicks=Math.floor(r.deferScriptsClicks)),"number"==typeof r.deferScriptsKeydowns&&(e.deferScriptsKeydowns=Math.floor(r.deferScriptsKeydowns)),e}return r.deferScriptsMarshaller=e,r}(h),w=function(r,e){function n(){var r=e.isFeatureEnabled("fe.platform.ssr.navigation.master");return{isSsrNavCohort:r}}return r.ssrNavReporter=n,r}(w,i),y=function(r,e){function n(){return e.window.SKELETON_NAVIGATION&&e.window.SKELETON_NAVIGATION["ssr/detail_request_trace"]&&e.window.SKELETON_NAVIGATION["ssr/detail_request_trace"].data||{}}function t(){return e.window.SKELETON_NAVIGATION&&e.window.SKELETON_NAVIGATION["ssr/detail_render_trace"]&&e.window.SKELETON_NAVIGATION["ssr/detail_render_trace"].data||{}}function i(r){var e={},i=n(),a=t();return e.ssrRouteName=a.routeName,e.ssrRenderTiming=JSON.stringify(a.traces),e.ssrResourceTiming=JSON.stringify(i),e}return r.ssrTimingReporter=i,r}(y,s),_=function(r){function e(r){return"boolean"==typeof r.isSsrNavCohort}function n(r){if(e(r))return r}return r.ssrNavReportMarshaller=n,r}(_),I=function(r,e){function n(){var r=e.window.__NAV_VERSION__||"UNKNOWN";return{navVersion:r}}return r.navigationVersionReporter=n,r}(I,s),N=function(r){function e(r){return"object"===t(r.navigationVersion)}function n(r){if(e(r))return{navVersion:JSON.stringify(r.navVersion)}}r.navigationVersionReportMarshaller=n;var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r};return r}(N),M=function(r){function e(r){if(r.isInitial){var e=window.JFE_PRELOAD_MODE;if(void 0!==e)return{jiraFrontendPreloadMode:e}}return{}}return r.preloadModeReporter=e,r}(M),E=function(r){function e(r){return"string"==typeof r.jiraFrontendPreloadMode}function n(r){if(e(r))return{jiraFrontendPreloadMode:r.jiraFrontendPreloadMode}}return r.preloadModeReportMarshaller=n,r}(E),g=function(r){function e(r){return"boolean"==typeof r.isInDashboardSpaRollout}function n(r){if(e(r))return{isInDashboardSpaRollout:r.isInDashboardSpaRollout}}return r.dashboardSpaRolloutMarshaller=n,r}(g),D=function(r){function e(){return{isDashboardSpaEnabled:!0}}return r.dashboardSpaEnabledReporter=e,r}(D),T=function(r){function e(r){return"boolean"==typeof r.isDashboardSpaEnabled}function n(r){if(e(r))return{isDashboardSpaEnabled:r.isDashboardSpaEnabled}}return r.dashboardSpaEnabledMarshaller=n,r}(T),V=function(r){function e(){var r={};return window.BUILD_KEY&&(r.jiraFrontendVersion=window.BUILD_KEY),window.SSR_BUILD_KEY&&(r.jiraFrontendSSRVersion=window.SSR_BUILD_KEY),r}return r.jiraFrontendVersionReporter=e,r}(V),o=function(r,e,n,t,i,a,o,s,u,d,l,f,c,p,m,b,v,R,S,h,w,y,_,I,N){var M=I.addReporter,E=N.addReportMarshaller;M(r.applicationHashReporter),M(n.applicationVersionReporter),M(o.databaseDurationReporter),M(i.serverDurationReporter),M(u.correlationIdReporter),M(l.deferScriptsReporter),M(c.ssrNavReporter),M(p.ssrTimingReporter),M(b.navigationVersionReporter),M(R.preloadModeReporter),M(w.dashboardSpaEnabledReporter),M(_.jiraFrontendVersionReporter),E(e.applicationHashReportMarshaller),E(t.applicationVersionReportMarshaller),E(s.databaseDurationReportMarshaller),E(a.serverDurationReportMarshaller),E(d.correlationIdReportMarshaller),E(f.deferScriptsMarshaller),E(m.ssrNavReportMarshaller),E(v.navigationVersionReportMarshaller),E(S.preloadModeReportMarshaller),E(h.dashboardSpaRolloutMarshaller),E(y.dashboardSpaEnabledMarshaller),I.subscribe(function(r){var e=document.getElementById("browser-metrics-report");null==e&&(e=document.createElement("div"),e.id="browser-metrics-report",e.style.display="none",document.body.appendChild(e)),e.textContent=JSON.stringify(r)})}(u,d,l,f,c,p,m,b,v,R,S,h,w,y,_,I,N,M,E,g,D,T,V,e,n),r()})});;
;
/* module-key = 'com.pyxis.greenhopper.jira:gh-create-board-adg3-no-condition', location = 'jira-agile-module/includes/js/sidebar/create-board-adg3.js' */
define("jira-agile/sidebar/create-board-adg3",["wrm/require","jira/analytics"],function(r,i){"use strict";var t="gh.rapid.board.create";function d(){var e=0<arguments.length&&void 0!==arguments[0]&&arguments[0];function a(){e?GH.StartWizardView.startWizardWithoutProjectCreate():GH.StartWizardView.startWizardWithUserConfigCheck(),i.send({name:"jira.frontend.fe.navigation.scope-switcher.action.click",properties:{actionId:t,pageMode:GH&&GH.RapidBoard&&GH.RapidBoard.State&&GH.RapidBoard.State.getMode&&GH.RapidBoard.State.getMode()||"other"}}),AJS.$(GH).unbind("WizardViewLoaded",a)}return AJS.dim(),r(["wr!com.pyxis.greenhopper.jira:gh-create-board"],function(){if(GH.StartWizardView)return a;AJS.$(GH).bind("WizardViewLoaded",a)}())}return{handleCreateBoardAction:function(e,a){if(a.actionId===t)return e.preventDefault(),d(!0)},openCreateBoardModal:d}}),function(){var a=require("jira-agile/sidebar/create-board-adg3");AJS.$(function(){JIRA&&JIRA.API&&JIRA.API.getSidebar().done(function(e){e.on(e.events.SCOPE_SWITCHER_SELECT_ACTION,a.handleCreateBoardAction,!0)})})}();;
;
/* module-key = 'com.atlassian.plugins.browser.metrics.browser-metrics-plugin:impl', location = 'browser-metrics-plugin/internal/browser-metrics-aa-beacon/impl.js' */
!function(n,r){var t={},e={},o={},u={},i={};i=function(n,r,t,e,o,u,i,c,a,s,f,d,h,l,m,p,v,y){Object.defineProperty(n,"__esModule",{value:!0});var E=t.addReportMarshaller;return E(o),E(e),E(u),E(i),E(c),E(a),E(s),E(f),E(d),E(h),E(l),E(m),E(p),E(v),E(y),r.subscribe(function(n){t.beacon(n.report)}),n}(i,window["browser-metrics"],r,function(n,r){function t(n){return r(n.apdex)}return function(n){if(t(n))return{apdex:""+n.apdex}}}(0,t=function(n){return"number"==typeof n}),function(n,r,t,e){return function(n){var o={};return Object.keys(n).forEach(function(u){var i=n[u];(t(i)||r(i)||e(i)||null===i)&&(o[u]=i)}),o}}(0,function(n){return"boolean"==typeof n},t,e=function(n){return"string"==typeof n}),function(n,r,t){function e(n){return t(n.firstPaint)}return function(n){if(e(n))return{firstPaint:r(n.firstPaint)}}}(0,o=function(n){return""+Math.floor(n)},t),function(n){function r(n){return"boolean"==typeof n.isInitial}return function(n){if(r(n))return{isInitial:""+n.isInitial}}}(),function(n,r){function t(n){return r(n.journeyId)}return function(n){if(t(n))return{journeyId:n.journeyId}}}(0,e),function(n,r){function t(n){return r(n.key)}return function(n){if(t(n))return{key:n.key}}}(0,e),function(n,r){function t(n){return r(n.navigationType)}return function(n){if(t(n))return{navigationType:""+n.navigationType}}}(0,t),function(n,r,t){function e(n){return t(n.readyForUser)}return function(n){if(e(n))return{readyForUser:r(n.readyForUser)}}}(0,o,t),function(n,r){function t(n){return r(n.redirectCount)}return function(n){if(t(n))return{redirectCount:""+n.redirectCount}}}(0,t),function(n,r,t){function e(n){return t(n.resourceLoadedEnd)}return function(n){if(e(n))return{resourceLoadedEnd:r(n.resourceLoadedEnd)}}}(0,o,t),function(n,r,t){function e(n){return Array.isArray(n.resourceTiming)}function o(n){return(n=Math.floor(n||0))>0?u(n):""}function u(n){return n.toString(36)}function i(n){return[c[n.initiatorType]||a,o(n.startTime),o(n.responseEnd),o(n.responseStart),o(n.requestStart),o(n.connectEnd),o(n.secureConnectionStart),o(n.connectStart),o(n.domainLookupEnd),o(n.domainLookupStart),o(n.redirectEnd),o(n.redirectStart)].join(",").replace(/,+$/,"")}var c={other:0,img:1,link:2,script:3,css:4,xmlhttprequest:5},a=-1;return function(n){if(e(n)){var o=new t;return n.resourceTiming.forEach(function(n){var t=r.cleanUrl(n.name);o.add(t||"☠",i(n))}),{resourceTiming:JSON.stringify(o.condensed().toTrieObject())}}}}(0,r,function(n,r){function t(n){return Object.keys(n).length}return function(){function n(){this.children={},this.values=[]}return n.prototype.add=function(r,t){0==r.length?this.values.push(t):(this.children.hasOwnProperty(r[0])||(this.children[r[0]]=new n),this.children[r[0]].add(r.substr(1),t))},n.prototype.toTrieObject=function(){var n={};return r(this.children,function(r,t){n[r]=t.toTrieObject()}),0===this.values.length?n:0===t(this.children)?this.values:[n,this.values]},n.prototype.condensed=function(){var e=new n;return e.values=this.values.concat(),r(this.children,function(n,o){var u=o.condensed();0===u.values.length&&1===t(u.children)?r(u.children,function(r,t){e.children[n+r]=t}):e.children[n]=u}),e},n}()}(0,u=function(n,r){Object.keys(n).forEach(function(t){r(t,n[t])})})),function(n,r,t){function e(n){return t(n.threshold)}return function(n){if(e(n))return{threshold:r(n.threshold)}}}(0,o,t),function(n,r,t){var e="unloadEventStart,unloadEventEnd,redirectStart,redirectEnd,fetchStart,domainLookupStart,domainLookupEnd,connectStart,connectEnd,secureConnectionStart,requestStart,responseStart,responseEnd,domLoading,domInteractive,domContentLoadedEventStart,domContentLoadedEventEnd,domComplete,loadEventStart,loadEventEnd".split(",");return function(n){var o={};return e.forEach(function(e){t(n[e])&&(o[e]=r(n[e]))}),o}}(0,o,t),function(n,r){function t(n){return r(n.userAgent)}return function(n){if(t(n))return{userAgent:n.userAgent}}}(0,e),function(n,r){function t(n){return"object"==typeof n.marks}return function(n){if(t(n)){var e={},o={marks:{},measures:{}};return n.marks.forEach(function(n){o.marks[n.name]=o.marks[n.name]||[],o.marks[n.name].push(Math.floor(n.time))}),r(o.marks,function(n,r){var t=r.sort(function(n,r){return n-r})[0];e["mark__"+n]=t}),n.measures.forEach(function(n){o.measures[n.name]=o.measures[n.name]||[],o.measures[n.name].push([Math.floor(n.startTime),Math.floor(n.duration)])}),r(o.measures,function(n,r){var t=r.sort(function(n,r){return n[0]-r[0]})[0],o=t[0],u=t[1];e["measure__"+n+"__start"]=o,e["measure__"+n+"__duration"]=u}),e.userTimingRaw=JSON.stringify({marks:o.marks,measures:o.measures}),e}}}(0,u))}(0,window["browser-metrics-aa-beacon"]);;
;
/* module-key = 'com.atlassian.plugins.browser.metrics.browser-metrics-plugin:impl', location = 'browser-metrics-plugin/impl.js' */
define("internal/browser-metrics-plugin/collector",function(){return{install:function(){!function(){var t,n,e,r,o,i,u,a,s,c,f,l,p,d,h,m,v,y,g,w,T,b,x,_,E,k,S,A,C,P;t=function(){return function(t){return{isInitial:"isInitial"in t&&t.isInitial,start:t.timestamp,end:null,key:t.key,threshold:t.threshold,reporters:t.reporters}}}(),e=function(t){return function(n){var e,r=t(n),o=n.threshold,i=4*n.threshold;return e=r.readyForUser<=o?1:r.readyForUser<=i?.5:0,{apdex:e}}}(n=function(){return function(t){return{readyForUser:t.end-t.start}}}()),function(){"use strict";function t(t){return"function"==typeof t}function n(){}function e(){for(var t=0;t<y;t+=2){(0,x[t])(x[t+1]),x[t]=void 0,x[t+1]=void 0}y=0}function o(){}function i(n,e){n===e?a(n,new TypeError("You cannot resolve a promise with itself")):function(t){return"function"==typeof t||"object"==typeof t&&null!==t}(e)?function(n,e){if(e.constructor===n.constructor)!function(t,n){n._state===E?u(t,n._result):t._state===k?a(t,n._result):s(n,void 0,function(n){i(t,n)},function(n){a(t,n)})}(n,e);else{var r=function(t){try{return t.then}catch(t){return S.error=t,S}}(e);r===S?a(n,S.error):void 0===r?u(n,e):t(r)?function(t,n,e){g(function(t){var r=!1,o=function(t,n,e,r){try{t.call(n,e,r)}catch(t){return t}}(e,n,function(e){r||(r=!0,n!==e?i(t,e):u(t,e))},function(n){r||(r=!0,a(t,n))},t._label);!r&&o&&(r=!0,a(t,o))},t)}(n,e,r):u(n,e)}}(n,e):u(n,e)}function u(t,n){t._state===_&&(t._result=n,t._state=E,0===t._subscribers.length||g(c,t))}function a(t,n){t._state===_&&(t._state=k,t._result=n,g(function(t){t._onerror&&t._onerror(t._result),c(t)},t))}function s(t,n,e,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=n,o[i+E]=e,o[i+k]=r,0===i&&t._state&&g(c,t)}function c(t){var n=t._subscribers,e=t._state;if(0!==n.length){for(var r,o,i=t._result,u=0;u<n.length;u+=3)r=n[u],o=n[u+e],r?l(e,r,o,i):o(i);t._subscribers.length=0}}function f(){this.error=null}function l(n,e,r,o){var s,c,f,l,p=t(r);if(p){if((s=function(t,n){try{return t(n)}catch(t){return A.error=t,A}}(r,o))===A?(l=!0,c=s.error,s=null):f=!0,e===s)return void a(e,new TypeError("A promises callback cannot return that same promise."))}else s=o,f=!0;e._state!==_||(p&&f?i(e,s):l?a(e,c):n===E?u(e,s):n===k&&a(e,s))}function p(t,n,e,r){this._instanceConstructor=t,this.promise=new t(o,r),this._abortOnReject=e,this._validateInput(n)?(this._input=n,this.length=n.length,this._remaining=n.length,this._init(),0===this.length?u(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&u(this.promise,this._result))):a(this.promise,this._validationError())}function d(n,e){this._id=P++,this._label=e,this._state=void 0,this._result=void 0,this._subscribers=[],o!==n&&(t(n)||function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof d||function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}(),function(t,n){try{n(function(n){i(t,n)},function(n){a(t,n)})}catch(n){a(t,n)}}(this,n))}var h,m,v=h=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},y=(Date.now,Object.create,0),g=function(t,n){x[y]=t,x[y+1]=n,2===(y+=2)&&m()},w="undefined"!=typeof window?window:{},T=w.MutationObserver||w.WebKitMutationObserver,b="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,x=new Array(1e3);m="undefined"!=typeof process&&"[object process]"==={}.toString.call(process)?function(){process.nextTick(e)}:T?function(){var t=0,n=new T(e),r=document.createTextNode("");return n.observe(r,{characterData:!0}),function(){r.data=t=++t%2}}():b?function(){var t=new MessageChannel;return t.port1.onmessage=e,function(){t.port2.postMessage(0)}}():function(){setTimeout(e,1)};var _=void 0,E=1,k=2,S=new f,A=new f;p.prototype._validateInput=function(t){return v(t)},p.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")},p.prototype._init=function(){this._result=new Array(this.length)};var C=p;p.prototype._enumerate=function(){for(var t=this.length,n=this.promise,e=this._input,r=0;n._state===_&&r<t;r++)this._eachEntry(e[r],r)},p.prototype._eachEntry=function(t,n){var e=this._instanceConstructor;!function(t){return"object"==typeof t&&null!==t}(t)?(this._remaining--,this._result[n]=this._makeResult(E,n,t)):t.constructor===e&&t._state!==_?(t._onerror=null,this._settledAt(t._state,n,t._result)):this._willSettleAt(e.resolve(t),n)},p.prototype._settledAt=function(t,n,e){var r=this.promise;r._state===_&&(this._remaining--,this._abortOnReject&&t===k?a(r,e):this._result[n]=this._makeResult(t,n,e)),0===this._remaining&&u(r,this._result)},p.prototype._makeResult=function(t,n,e){return e},p.prototype._willSettleAt=function(t,n){var e=this;s(t,void 0,function(t){e._settledAt(E,n,t)},function(t){e._settledAt(k,n,t)})};var P=0,j=d;d.all=function(t,n){return new C(this,t,!0,n).promise},d.race=function(t,n){var e=new this(o,n);if(!v(t))return a(e,new TypeError("You must pass an array to race.")),e;for(var r=t.length,u=0;e._state===_&&u<r;u++)s(this.resolve(t[u]),void 0,function(t){i(e,t)},function(t){a(e,t)});return e},d.resolve=function(t,n){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(o,n);return i(e,t),e},d.reject=function(t,n){var e=new this(o,n);return a(e,t),e},d.prototype={constructor:d,then:function(t,n,e){var r=this._state;if(r===E&&!t||r===k&&!n)return this;this._onerror=null;var i=new this.constructor(o,e),u=this._result;if(r){var a=arguments[r-1];g(function(){l(r,i,a,u)})}else s(this,i,t,n);return i},catch:function(t,n){return this.then(null,t,n)}};var M={Promise:j,polyfill:function(){var n;"Promise"in(n="undefined"!=typeof global?global:"undefined"!=typeof window&&window.document?window:self)&&"resolve"in n.Promise&&"reject"in n.Promise&&"all"in n.Promise&&"race"in n.Promise&&function(){var e;return new n.Promise(function(t){e=t}),t(e)}()||(n.Promise=j)}};r=M}.call(this),s=function(t,n,e,r){function o(){return u&&u.loadTimes}function i(){return void 0!==a.msFirstPaint}if(n){var u=r.chrome,a=n.timing;return function(n){return n.isInitial?(r.top===r.self&&(o()||i())?t(function(){return o()&&u.loadTimes().firstPaintTime>0?1e3*u.loadTimes().firstPaintTime-a.navigationStart:i()&&a.msFirstPaint>0?a.msFirstPaint-a.navigationStart:void 0},250):e.reject("The browser does not have a first paint metric")).then(function(t){return{firstPaint:t}},function(){return{}}):{}}}}(i=function(t){return function(n,e){return new t(function(t){function r(){var e=n();void 0!==e&&(clearInterval(o),t(e))}var o;o=setInterval(r,e),r()})}}(o=r.Promise),a=(u=window).performance,o,u),c=function(t){return{isInitial:t.isInitial}},f=function(t,n){var e="browser-metrics-journey";return function(){return void 0===n.sessionStorage?t.reject("sessionStorage is required to produce a report for this transition."):(null===n.sessionStorage.getItem(e)&&n.sessionStorage.setItem(e,"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*n.Math.random()|0;return("x"===t?e:3&e|8).toString(16)})),t.resolve({journeyId:n.sessionStorage.getItem(e)}))}}(o,u),l=function(){return function(t){return{key:t.key}}}(),d=function(t,n){return function(e){var r={};return e.isInitial&&n()&&(r.navigationType=t.performance.navigation.type),r}}(u,p=function(t){return function(){return t.performance&&t.performance.navigation&&t.performance.timing&&void 0!==t.performance.timing.navigationStart}}(u)),h=function(t,n,e){return function(r){var o={};if(r.isInitial){if(!n())return t.reject("The navigation timing API is required to produce a report for this transition.");void 0!==e.performance.navigation.redirectCount&&(o.redirectCount=e.performance.navigation.redirectCount)}return t.resolve(o)}}(o,p,u),m=function(t){return function(n){var e=t.document.createElement("a");return e.href=n,e.href}}(u),y=function(t,n){return function(e){var r=n.onresourcetimingbufferfull||function(){};t(n.addEventListener)?n.addEventListener("resourcetimingbufferfull",e):n.onresourcetimingbufferfull=function(){e(),r()}}}(v=function(t){return"function"==typeof t},a),g=function(t,n){return function(){return n&&t(n.getEntriesByType)}}(v,a),x=function(t){return function(n){return n.isInitial?t().then(function(t){return 0===t.length?{resourceLoadedEnd:null}:{resourceLoadedEnd:t.map(function(t){return t.responseEnd}).reduce(function(t,n){return Math.max(t,n)})}}):{}}}(b=function(t,n,e,r){return function(){var o=function(){var n=r.document.querySelectorAll("script[src][async]");return Array.prototype.map.call(n,function(n){return t(n.src)})}();return e().then(function(t){return n().filter(function(t){return"link"===t.initiatorType||"script"===t.initiatorType}).filter(function(n){return n.responseEnd<t.domContentLoadedEventStart}).filter(function(t){return"script"!==t.initiatorType||-1===o.indexOf(t.name)})})}}(m,w=function(t,n,e,r){function o(){return e.getEntriesByType("resource").filter(function(t){return"img"!==t.initiatorType})}function i(){t(e.clearResourceTimings)&&(u=o(),e.clearResourceTimings())}var u=[];return g()?(i(),n(i),function(){return u.concat(o())}):function(){return[]}}(v,y,a),T=function(t,n,e,r){if(r){var o,i=r.timing,u="unloadEventStart,unloadEventEnd,redirectStart,redirectEnd,fetchStart,domainLookupStart,domainLookupEnd,connectStart,connectEnd,secureConnectionStart,requestStart,responseStart,responseEnd,domLoading,domInteractive,domContentLoadedEventStart,domContentLoadedEventEnd,domComplete,loadEventStart,loadEventEnd".split(",");return function(){return e()?(void 0===o&&(o=t(function(){var t={};if(i.loadEventEnd>0)return u.forEach(function(n){var e=i[n];e>0&&(t[n]=e-i.navigationStart)}),t},250)),o):n.reject("The navigation timing API is required to produce a report for this transition.")}}}(i,o,p,a),u)),_=function(t){return function(n){return n.isInitial?t().then(function(t){if(0===t.length)return{resourceLoadedStart:null};var n=t.map(function(t){return t.startTime});return{resourceLoadedStart:Math.min.apply(Math,n)}}):{}}}(b),E=function(t,n){var e="duration,initiatorType,name".split(","),r="startTime,connectEnd,connectStart,domainLookupEnd,domainLookupStart,fetchStart,redirectEnd,redirectStart,requestStart,responseEnd,responseStart,secureConnectionStart".split(",");return function(o){return t()?{resourceTiming:n().filter(function(t){var n=t.responseEnd;return n>=o.start&&n<=o.end&&t.startTime>=o.start}).map(function(t){var n={};return e.forEach(function(e){n[e]=t[e]}),r.forEach(function(e){n[e]=t[e]>0?t[e]-o.start:0}),n})}:{}}}(g,w),k=function(){return function(t){return{threshold:t.threshold}}}(),S=function(t){return function(n){return n.isInitial?t():{}}}(T),A=function(t){return function(){return{userAgent:t.navigator.userAgent}}}(u),C=function(t,n){return function(e){if(!n||!t(n.getEntriesByType))return{};var r=n.getEntriesByType("mark").filter(function(t){return t.startTime>=e.start&&t.startTime<=e.end}),o=n.getEntriesByType("measure").filter(function(t){return t.startTime>=e.start&&t.startTime+t.duration<=e.end});return{marks:r.map(function(t){return{name:t.name,time:t.startTime-e.start}}),measures:o.map(function(t){return{name:t.name,startTime:t.startTime-e.start,duration:t.duration}})}}}(v,a),function(t,n,e){if(a){var r=new t;n.delegateTo(r)}}(function(t,n,e){return function(){var r,o=[],i=[];return function(u){u.start?function(n){r=new t(n)}(u.start):u.end?function(t){r&&r.key===t.key&&(r.end=t.timestamp,e(r).then(function(t){i.push(t),o.forEach(function(n){n({report:t})})}),r=null)}(u.end):u.addReporter?function(t){n.add(t)}(u.addReporter):u.subscribe&&function(t){i.forEach(function(n){t({report:n})}),o.push(t)}(u.subscribe)}}}(t,P=function(t,r,o,i,u,a,p,m,v,y,g,w,T,b,P){var j=[e,s,c,f,l,d,n,h,x,_,E,k,S,A,C];return{get:function(){return j.concat()},add:function(t){j.push(t)}}}(),function(t,n,e,r,o,i){return function(t){var r=t.reporters,u=i.get().concat(r).map(function(n){var r;try{r=n(t)}catch(t){o(t),r={}}return function(t){return function(t){return e.all([t]).then(function(t){return t[0]})}(t).then(null,function(){return{}})}(r)});return e.all(u).then(function(t){return n.apply(void 0,t)})}}(0,function(){var t=Object.prototype.hasOwnProperty;return function(){for(var n,e,r={},o=0,i=arguments.length;o<i;o++){n=arguments[o];for(e in n)t.call(n,e)&&(r[e]=n[e])}return r}}(),o,0,function(t){return function(n){(t.console.error||t.console.log).call(t.console,n.stack||n)}}(u),P)),u["browser-metrics"])}()}}}),window["browser-metrics-plugin"].install(function(t){require(["internal/browser-metrics","internal/browser-metrics-aa-beacon"],function(n,e){var r,o={},i={};!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define("uxm",["exports"],n):n(t.uxm={})}(this,function(t){function n(){var t="undefined"!=typeof navigator?navigator.connection||navigator.mozConnection||navigator.webkitConnection:null;return t?t.effectiveType:null}function e(){if(!h||void 0===window.PerformancePaintTiming)return null;var t=h.getEntriesByType("paint").find(function(t){return"first-paint"===t.name});return t?Math.round(t.startTime):null}function r(){if(!h||void 0===window.PerformancePaintTiming)return null;var t=h.getEntriesByType("paint").find(function(t){return"first-contentful-paint"===t.name});return t?Math.round(t.startTime):null}function o(){if(!h)return null;var t=h.getEntriesByType("navigation");return t&&t[0]?Math.round(t[0].responseStart):null}function i(){if(!h)return null;var t=h.getEntriesByType("navigation");return t&&t[0]?Math.round(t[0].domContentLoadedEventEnd):null}function u(){if(!h)return null;var t=h.getEntriesByType("navigation");return t&&t[0]?Math.round(t[0].loadEventEnd):null}function a(t){void 0===t&&(t=c()),t=t.toLowerCase();var n=function(n){return-1!==t.indexOf(n)},e=n("windows"),r=e&&n("phone"),o=e&&n("touch")&&!r,i=!e&&n("iphone"),u=n("ipod"),a=n("ipad"),s=!e&&n("android"),f=s&&n("mobile"),l=s&&!n("mobile");return f||i||u||r?"phone":a||l||o?"tablet":"desktop"}function s(){return window.location.href}function c(){return window.navigator.userAgent}function f(){var t="undefined"!=typeof navigator?navigator.deviceMemory:void 0;return void 0===t?null:t>1?"full":"lite"}function l(){if(!h||"undefined"==typeof PerformanceMark)return null;var t=h.getEntriesByType("mark").map(function(t){return{type:"mark",name:t.name,startTime:Math.round(t.startTime)}}),n=h.getEntriesByType("measure").map(function(t){return{type:"measure",name:t.name,startTime:Math.round(t.startTime),duration:Math.round(t.duration)}});return t.concat(n)}function p(){return h&&"undefined"!=typeof PerformanceResourceTiming?h.getEntriesByType("navigation").concat(h.getEntriesByType("resource")).map(function(t){return{url:t.name,type:t.initiatorType,size:t.transferSize,startTime:Math.round(t.startTime),duration:Math.round(t.duration)}}):null}function d(){return void 0===window.__lt?null:window.__lt.e.map(function(t){return{startTime:Math.round(t.startTime),duration:Math.round(t.duration)}})}var h="undefined"!=typeof window?window.performance:null;t.uxm=function t(h){void 0===h&&(h={});var m={deviceType:a(),effectiveConnectionType:n(),timeToFirstByte:o(),firstPaint:e(),firstContentfulPaint:r(),domContentLoaded:i(),onLoad:u()};return m.onLoad?((h.url||h.all)&&(m.url=s()),(h.userAgent||h.all)&&(m.userAgent=c()),(h.deviceMemory||h.all)&&(m.deviceMemory=f()),(h.userTiming||h.all)&&(m.userTiming=l()),(h.longTasks||h.all)&&(m.longTasks=d()),(h.resources||h.all)&&(m.resources=p()),Promise.resolve(m)):new Promise(function(t){return setTimeout(t,250)}).then(function(){return t(h)})},t.mark=function(t){h&&h.mark&&h.mark(t)},t.measure=function(t,n){if(h&&h.measure)try{h.measure(t,n)}catch(t){console.error(t)}},t.getEffectiveConnectionType=n,t.getFirstPaint=e,t.getFirstContentfulPaint=r,t.getTimeToFirstByte=o,t.getDomContentLoaded=i,t.getOnLoad=u,t.getDeviceType=a,t.getUrl=s,t.getUserAgent=c,t.getDeviceMemory=f,t.getUserTiming=l,t.getResources=p,t.getLongTasks=d}),function(t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():r="function"==typeof t?t():t}(function(){return function t(n,e,r){function o(u,a){if(!e[u]){if(!n[u]){var s="function"==typeof require&&require;if(!a&&s)return s(u,!0);if(i)return i(u,!0);var c=new Error("Cannot find module '"+u+"'");throw c.code="MODULE_NOT_FOUND",c}var f=e[u]={exports:{}};n[u][0].call(f.exports,function(t){return o(n[u][1][t]||t)},f,f.exports,t,n,e,r)}return e[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u]);return o}({1:[function(t,n,e){(function(e){"use strict";function r(t){return(t||"").toString().replace(l,"")}function o(t){var n,r=("undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{}).location||{},o={},i=typeof(t=t||r);if("blob:"===t.protocol)o=new u(unescape(t.pathname),{});else if("string"===i)for(n in o=new u(t,{}),d)delete o[n];else if("object"===i){for(n in t)n in d||(o[n]=t[n]);void 0===o.slashes&&(o.slashes=c.test(t.href))}return o}function i(t){t=r(t);var n=f.exec(t);return{protocol:n[1]?n[1].toLowerCase():"",slashes:!!n[2],rest:n[3]}}function u(t,n,e){if(t=r(t),!(this instanceof u))return new u(t,n,e);var c,f,l,d,h,m,v=p.slice(),y=typeof n,g=this,w=0;for("object"!==y&&"string"!==y&&(e=n,n=null),e&&"function"!=typeof e&&(e=s.parse),n=o(n),c=!(f=i(t||"")).protocol&&!f.slashes,g.slashes=f.slashes||c&&n.slashes,g.protocol=f.protocol||n.protocol||"",t=f.rest,f.slashes||(v[3]=[/(.*)/,"pathname"]);w<v.length;w++)"function"!=typeof(d=v[w])?(l=d[0],m=d[1],l!=l?g[m]=t:"string"==typeof l?~(h=t.indexOf(l))&&("number"==typeof d[2]?(g[m]=t.slice(0,h),t=t.slice(h+d[2])):(g[m]=t.slice(h),t=t.slice(0,h))):(h=l.exec(t))&&(g[m]=h[1],t=t.slice(0,h.index)),g[m]=g[m]||c&&d[3]&&n[m]||"",d[4]&&(g[m]=g[m].toLowerCase())):t=d(t);e&&(g.query=e(g.query)),c&&n.slashes&&"/"!==g.pathname.charAt(0)&&(""!==g.pathname||""!==n.pathname)&&(g.pathname=function(t,n){if(""===t)return n;for(var e=(n||"/").split("/").slice(0,-1).concat(t.split("/")),r=e.length,o=e[r-1],i=!1,u=0;r--;)"."===e[r]?e.splice(r,1):".."===e[r]?(e.splice(r,1),u++):u&&(0===r&&(i=!0),e.splice(r,1),u--);return i&&e.unshift(""),"."!==o&&".."!==o||e.push(""),e.join("/")}(g.pathname,n.pathname)),a(g.port,g.protocol)||(g.host=g.hostname,g.port=""),g.username=g.password="",g.auth&&(d=g.auth.split(":"),g.username=d[0]||"",g.password=d[1]||""),g.origin=g.protocol&&g.host&&"file:"!==g.protocol?g.protocol+"//"+g.host:"null",g.href=g.toString()}var a=t("requires-port"),s=t("querystringify"),c=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,f=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,l=new RegExp("^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+"),p=[["#","hash"],["?","query"],function(t){return t.replace("\\","/")},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],d={hash:1,query:1};u.prototype={set:function(t,n,e){var r=this;switch(t){case"query":"string"==typeof n&&n.length&&(n=(e||s.parse)(n)),r[t]=n;break;case"port":r[t]=n,a(n,r.protocol)?n&&(r.host=r.hostname+":"+n):(r.host=r.hostname,r[t]="");break;case"hostname":r[t]=n,r.port&&(n+=":"+r.port),r.host=n;break;case"host":r[t]=n,/:\d+$/.test(n)?(n=n.split(":"),r.port=n.pop(),r.hostname=n.join(":")):(r.hostname=n,r.port="");break;case"protocol":r.protocol=n.toLowerCase(),r.slashes=!e;break;case"pathname":case"hash":if(n){var o="pathname"===t?"/":"#";r[t]=n.charAt(0)!==o?o+n:n}else r[t]=n;break;default:r[t]=n}for(var i=0;i<p.length;i++){var u=p[i];u[4]&&(r[u[1]]=r[u[1]].toLowerCase())}return r.origin=r.protocol&&r.host&&"file:"!==r.protocol?r.protocol+"//"+r.host:"null",r.href=r.toString(),r},toString:function(t){t&&"function"==typeof t||(t=s.stringify);var n,e=this,r=e.protocol;r&&":"!==r.charAt(r.length-1)&&(r+=":");var o=r+(e.slashes?"//":"");return e.username&&(o+=e.username,e.password&&(o+=":"+e.password),o+="@"),o+=e.host+e.pathname,(n="object"==typeof e.query?t(e.query):e.query)&&(o+="?"!==n.charAt(0)?"?"+n:n),e.hash&&(o+=e.hash),o}},u.extractProtocol=i,u.location=o,u.trimLeft=r,u.qs=s,n.exports=u}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{querystringify:2,"requires-port":3}],2:[function(t,n,e){"use strict";function r(t){return decodeURIComponent(t.replace(/\+/g," "))}var o=Object.prototype.hasOwnProperty;e.stringify=function(t,n){n=n||"";var e=[];for(var r in"string"!=typeof n&&(n="?"),t)o.call(t,r)&&e.push(encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return e.length?n+e.join("&"):""},e.parse=function(t){for(var n,e=/([^=?&]+)=?([^&]*)/g,o={};n=e.exec(t);){var i=r(n[1]),u=r(n[2]);i in o||(o[i]=u)}return o}},{}],3:[function(t,n,e){"use strict";n.exports=function(t,n){if(n=n.split(":")[0],!(t=+t))return!1;switch(n){case"http":case"ws":return 80!==t;case"https":case"wss":return 443!==t;case"ftp":return 21!==t;case"gopher":return 70!==t;case"file":return!1}return 0!==t}},{}]},{},[1])(1)}),i=function(t,n,e,r,o,i,u,a,s,c){Object.defineProperty(t,"__esModule",{value:!0});var f=n.addReporter,l=e.addReportMarshaller,p=e.addUrlCleaner;return f(function(){return{pageVisible:!(window&&window.document&&window.document.hidden)}}),window.performance.clearResourceTimings&&(window.performance.clearResourceTimings=function(){}),f(r),f(o),l(i),l(u),p(a),p(s),p(c),t}(i,n,e,function(t,n,e){return function(t){var r=n.getResources();if(!r)return{};var o={};if(r.filter(function(t){return["script","link","fetch"].indexOf(t.type)>-1}).map(function(t){if(!t.url)return null;var n={startTime:t.startTime,duration:t.duration,size:t.size,type:t.type};n.transferType=function(t){var n=t.duration,e=t.size;return 0===e&&0===n?"memory":0===e&&n>0?"disk":"network"}(n);var r;r="fetch"===t.type?e(t.url,!0).pathname.replace(/\/(\w+)-(\d+)\//i,"/<issue-key>/").split("#")[0].split("?")[0]:e(t.url,!0).pathname.replace(/^.*[\\/]/,"").replace(/\..*\./,"."),o[r]=n}),!o||o==={})return t;return{resourceTiming:JSON.stringify(o)}}}(0,uxm,r),function(t,n,e){var r=/^(?:https?:)?\/\/[^\.]+\.cloudfront\.net\/p\/([^\/]+)\/main\.js$/,o=/^(?:https?:)?\/\/aes-artifacts--cdn\.[^\.]+\.atlassian\.io\/hashed\/([^\/]+)\/.+\.js$/,i=function(){var t=e.Deferred();return e(function(){var e=[];Array.prototype.slice.call(n.document.getElementsByTagName("script")||[]).forEach(function(t){var n=t.getAttribute("src"),i=n&&(n.match(o)||n.match(r));if(i&&i.length>1){var u=i[1];e.push({name:u,async:t.async})}}),t.resolve(e)}),t.promise()}().pipe(function(t){return{experiments:t}});return function(){return i}}(0,o=window,function(t,n){var e;try{e=n.require("jquery")}catch(t){e=n.jQuery}return e}(0,o)),function(t){return function(t){if(function(t){return Array.isArray(t.experiments)}(t))return{experiments:JSON.stringify(t.experiments.map(function(t){return[t.name,t.async?1:0]}))}}}(),function(t){function n(t){var n=t.toLowerCase().replace(/[;,()+]/g,"");return function(t){return!!t.match(/^[0-9.,_%\-]+$/)}(n)||-1!==e.indexOf(n)?t:""}var e=["android","applewebkit","baiduspider","bingbot","build","chrome","compatible","edge","electron","explorer","firefox","gecko","googlebot","iemobile","intel","ipad","iphone","khtml","konqueror","like","linux","mac","macintosh","maxthon","microsoft","mini","mobi","mobile","mozilla","msie","mwendo","nt","opera","opr","os","phone","playstation","presto","rv","safari","samsung","thunderbird","trident","ubuntu","ucbrowser","unix","version","vivo","win","win64","windows","wow64","x","x11","x64","x86","x86_64","xbox"];return function(t){if(t.userAgent)return{userAgent:function(t){var e=/[\s\/:]/g,r=t.match(e);return null===r?n(t):t.split(e).map(n).reduce(function(t,n){return t+r.shift()+n})}(t.userAgent)}}}(),function(t,n,e){var r=/^https:\/\/[^.]+\.cloudfront.net\/[^/]+(\/wiki)?\/s\//g;return function(t){return t.match(r)?(t=n(t),t=e(t)):""}}(0,function(t,n){var e=/([&?][^&=]+)(=?)([^&#]*)/g;return function(t){return t.replace(e,function(t,e,r,o){return e+r+(n(o)?o:"☠")})}}(0,function(t){var n=/^(true|false|\d+)$/gi;return function(t){return!!t.match(n)}}()),function(t){var n=/(\/s\/).+(\/_\/)/;return function(t){return t.replace(n,function(t,n,e){return n+"☠"+e})}}()),function(t){var n=/^https:\/\/d2kryfvs3op226\.cloudfront\.net\/[a-f0-9]+\.[a-z]+$/g;return function(t){return t.match(n)?t:""}}(),function(t){var n=/^https:\/\/[^\/]+\.atl-paas.net\//g;return function(t){return t.match(n)?t:""}}()),t()})});;;try{window.performance.mark('jira.webresources,jira.webresources,com.atlassian.administration.atlassian-admin-quicksearch-jira,jira.webresources,com.atlassian.jira.plugins.jira-development-integration-plugin,com.atlassian.analytics.analytics-client,com.atlassian.plugins.atlassian-connect-plugin,com.atlassian.jira.jira-fileviewer-plugin,com.atlassian.jira.jira-fileviewer-plugin,com.atlassian.jira.jira-issue-nav-plugin,com.atlassian.crowd.user-provisioning-vertigo-plugin,com.atlassian.jira.jira-atlaskit-plugin,com.atlassian.pas,com.atlassian.auiplugin,com.atlassian.jira.plugins.jira-development-integration-plugin,com.atlassian.jira.plugins.jira-browser-metrics,com.pyxis.greenhopper.jira,com.atlassian.plugins.browser.metrics.browser-metrics-plugin_batch_file_eval:end');} catch(e){};