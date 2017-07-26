'use strict';
import { NativeModules } from 'react-native';
const { MscSpeech } = NativeModules;
const speech = {
    /**
     * 默认为ios平台，true为ios，false为android
     * @param {bool} ios 
     * @param {string} content 
     * @param {function} callback 
     */
    speak(ios, content, callback) {
        if (ios) {
            let options = {},
            if (content.constructor == String) {
                options.text = content;
                options.language = 'zh-CH';
            } else {
                options = content;
            }
            if (!callback) {
                callback = function callback(argument) { }
            }
            MscSpeech.speak(options, callback);
        } else {
            MscSpeech.speak(content, callback);
        }
    }
}

