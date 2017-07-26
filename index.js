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
    speak(ios, context, callback) {
        if (ios) {
            let options = {};
            if (context.constructor === String) {
                options.text = context;
                options.language = 'zh-CH';
            } else {
                options = context;
            }
            if (!callback) {
                callback = function callback(argument) { }
            }
            MscSpeech.speak(options, callback);
        } else {
            MscSpeech.speak(context, callback);
        }
    }
}

export default speech;


