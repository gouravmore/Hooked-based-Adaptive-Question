/**
 *
 * plugin to add interactive video to stage
 * @class teachablemachine
 * @extends org.ekstep.contenteditor.basePlugin
 * @author Gourav <gourav_m@tekditechnologies.com>
 * @fires org.ekstep.teachablemachine:show
 * @listens org.ekstep.teachablemachine:showPopup
 */
org.ekstep.contenteditor.basePlugin.extend({
    /**
     *
     * Registers events.
     * @memberof teachablemachine
     */
    currentInstance: undefined,
    initialize: function() {
        var templatePath = org.ekstep.contenteditor.api.resolvePluginResource(this.manifest.id, this.manifest.ver, "editor/popup.html");
        org.ekstep.contenteditor.api.getService('popup').loadNgModules(templatePath);
        org.ekstep.contenteditor.api.addEventListener(this.manifest.id + ":showPopup", this.openTeachablemachineBrowser, this);
    },
    /**
     *
     * Registers events.
     * @memberof teachablemachine
     */
    newInstance: function() {
        var props = this.convertToFabric(this.attributes);
        this.editorObj = new fabric.Rect({ top: 5, left: 20, width: 600, height: 380, fill: '#999' });
        if (this.editorObj) this.editorObj.setStroke(props.stroke);
    },
    openTeachablemachineBrowser: function(event, callback) {
        var instance = this;
        instance.isUploadVideo = true;
        instance.isVideoSrc = true;
        var modalController = function($scope) {
            $scope.isUploadVideo = instance.isUploadVideo;
            $scope.play = instance.play;
            $scope.pause = instance.pause;
            $scope.add = instance.add;
            $scope.next = instance.next;
            $scope.done = instance.done;
            $scope.isVideoSrc = instance.isVideoSrc;
            $scope.redirectToUploadVideo = instance.redirectToUploadVideo;
            $scope.currentVideoTime = instance.currentVideoTime;
        };
        org.ekstep.contenteditor.api.getService('popup').open({
            template: 'partials_org.ekstep.teachablemachine.html',
            controller: ['$scope', modalController],
            showClose: false,
            width: 900,
            className: 'ngdialog-theme-default'
        });
    },
    /**
     *
     * Get triggerd on config change
     * @param key {Object} key of config
     * @param value {Object} data of config
     * @memberof teachablemachine
     *
     */
    onConfigChange: function(key, value) {
        var instance = org.ekstep.contenteditor.api.getCurrentObject();
        var editorObj = instance.editorObj;
        // switch (key) {
        //     case 'questions':
        //         var data = [];
        //         jQuery.each(JSON.parse(value), function(key, val) {
        //             var queObj = {};
        //             queObj.sec = val.sec;
        //             queObj.identifier = val.identifier;

        //             org.ekstep.contenteditor.api.getService('assessment').getItem(val.identifier, function(err, resp) {
        //                 queObj.data = resp.data.result.assessment_item;
        //                 data.push(queObj);
        //                 instance.attributes.questions = data;
        //             });
        //         });
        //         break;

        //     case 'video':
        //         instance.attributes.video = value;
        //         break;
        // }

        org.ekstep.contenteditor.api.render();
        org.ekstep.contenteditor.api.dispatchEvent('object:modified', { target: org.ekstep.contenteditor.api.getEditorObject() });
    },
    /**
     * This method overridden from org.ekstep.contenteditor.api.basePlugin and it will provide the config of this plugin
     * @memberof poptext
     */
    getConfig: function() {
        var config = {};
        config.video = this.attributes.video;
        config.questions = JSON.stringify(this.attributes.questions);
        return config;
    },
    /**
     *
     * Track telemetry events.
     * @memberof teachablemachine
     *
     */
    generateTelemetry: function(data) {
        if (data) org.ekstep.contenteditor.api.getService('telemetry').interact({ "type": data.type, "subtype": data.subtype, "target": data.target, "pluginid": instance.manifest.id, "pluginver": instance.manifest.ver, "objectid": "", "stage": org.ekstep.contenteditor.api.getCurrentStage().id })
    }
});
//# sourceURL=teachablemachine.js
