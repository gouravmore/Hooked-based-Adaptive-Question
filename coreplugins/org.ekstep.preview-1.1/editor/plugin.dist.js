org.ekstep.pluginframework.pluginManager.registerPlugin({"id":"org.ekstep.preview","ver":"1.1","author":"Sunil A S","title":"preview","description":"","publishedDate":"","editor":{"main":"editor/plugin.js","menu":[],"views":[{"template":"./popup.html","controller":""}]}},org.ekstep.contenteditor.basePlugin.extend({type:"preview",previewURL:(ecEditor.getConfig("previewURL")||"/content/preview/preview.html")+"?webview=true",contentBody:void 0,initialize:function(){ecEditor.addEventListener("atpreview:show",this.initPreview,this);var e=ecEditor.resolvePluginResource(this.manifest.id,this.manifest.ver,"editor/popup.html");ecEditor.getService("popup").loadNgModules(e)},initPreview:function(e,t){this.contentBody=t.contentBody,t.currentStage&&(this.contentBody.theme.startStage=ecEditor.getCurrentStage().id),ecEditor.getAngularScope().developerMode&&(this.contentBody.theme["plugin-manifest"]||(this.contentBody.theme["plugin-manifest"]={plugin:[]}),_.isArray(this.contentBody.theme["plugin-manifest"].plugin)||(this.contentBody.theme["plugin-manifest"].plugin=[this.contentBody.theme["plugin-manifest"].plugin]),this.contentBody.theme["plugin-manifest"].plugin.splice(0,0,{id:"org.ekstep.developer",ver:"1.0",type:"plugin",hostPath:org.ekstep.pluginframework.hostRepo.basePath,preload:!0})),this.showPreview(t)},showPreview:function(e){var n=this,i=null,o=(ecEditor.getService("content"),{repos:ecEditor.getConfig("pluginRepo"),showEndpage:!0}),r=ecEditor.getService("content").getContentMeta(ecEditor.getContext("contentId"));if(e.parentElement){var d=_.extend(o,{showStartPage:!1,showEndPage:!1});""==(i=ecEditor.jQuery(e.element)[0]).src&&(i.src=n.previewURL),i.onload=function(){var e={},t={};e.etags=ecEditor.getContext("etags")||[],t.context={mode:"edit",contentId:ecEditor.getContext("contentId"),sid:ecEditor.getContext("sid"),uid:ecEditor.getContext("uid"),channel:ecEditor.getContext("channel")||"in.ekstep",pdata:ecEditor.getContext("pdata")||{id:"in.ekstep",pid:"",ver:"1.0"},app:e.etags.app||[],dims:e.etags.dims||[],partner:e.etags.partner||[]},ecEditor.getConfig("previewConfig")?t.config=ecEditor.getConfig("previewConfig"):t.config=d,t.metadata=r,t.data="application/vnd.ekstep.ecml-archive"==r.mimeType?n.contentBody:{},i.contentWindow.initializePreview(t)}}else ecEditor.getService("popup").open({template:"partials_org.ekstep.preview.html",controller:["$scope",function(e){e.$on("ngDialog.opened",function(){var e=ecEditor.resolvePluginResource(n.manifest.id,n.manifest.ver,"editor/images/editor-frame.png");ecEditor.jQuery(".preview-bgimage").css("background","url("+e+")");var t=ecEditor.jQuery("#previewContentIframe")[0];t.src=n.previewURL;var i={};t.onload=function(){var e={};i.etags=ecEditor.getContext("etags")||[],e.context={mode:"edit",contentId:ecEditor.getContext("contentId"),sid:ecEditor.getContext("sid"),uid:ecEditor.getContext("uid"),channel:ecEditor.getContext("channel")||"in.ekstep",pdata:ecEditor.getContext("pdata")||{id:"in.ekstep",pid:"",ver:"1.0"},app:i.etags.app||[],dims:i.etags.dims||[],partner:i.etags.partner||[]},ecEditor.getConfig("previewConfig")?e.config=ecEditor.getConfig("previewConfig"):e.config=o,e.metadata=r,e.data="application/vnd.ekstep.ecml-archive"==r.mimeType?n.contentBody:{},t.contentWindow.initializePreview(e)}})}],showClose:!1,width:710,className:"ngdialog-theme-plain preview-window"})}}))