package com.voicechangerdemo;

import android.media.MediaPlayer;
import android.media.PlaybackParams;
import android.os.Build;

import androidx.annotation.RequiresApi;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class VoiceChangingModule extends ReactContextBaseJavaModule {

    VoiceChangingModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "VoiceChangingModule";
    }

    @RequiresApi(api = Build.VERSION_CODES.M)
    @ReactMethod
    public void changeVoiceToAlien(String file) {
        MediaPlayer mp = new MediaPlayer();
        PlaybackParams playbackParams = new PlaybackParams();
        playbackParams.setPitch(Float.parseFloat(String.valueOf(0.6f)));
        try {
            mp.setDataSource(file);
            mp.prepare();
            mp.setPlaybackParams(playbackParams);
            mp.start();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @RequiresApi(api = Build.VERSION_CODES.M)
    @ReactMethod
    public void changeVoiceToChild(String file) {
        MediaPlayer mp = new MediaPlayer();
        PlaybackParams playbackParams = new PlaybackParams();
        playbackParams.setPitch(Float.parseFloat(String.valueOf(1.8f)));
        try {
            mp.setDataSource(file);
            mp.prepare();
            mp.setPlaybackParams(playbackParams);
            mp.start();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @RequiresApi(api = Build.VERSION_CODES.M)
    @ReactMethod
    public void speedUpVoice(String file) {
        MediaPlayer mp = new MediaPlayer();
        PlaybackParams playbackParams = new PlaybackParams();
        playbackParams.setSpeed(Float.parseFloat(String.valueOf(2.5)));
        try {
            mp.setDataSource(file);
            mp.prepare();
            mp.setPlaybackParams(playbackParams);
            mp.start();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @RequiresApi(api = Build.VERSION_CODES.M)
    @ReactMethod
    public void slowDownVoice(String file) {
        MediaPlayer mp = new MediaPlayer();
        PlaybackParams playbackParams = new PlaybackParams();
        playbackParams.setSpeed(Float.parseFloat(String.valueOf(0.4)));
        try {
            mp.setDataSource(file);
            mp.prepare();
            mp.setPlaybackParams(playbackParams);
            mp.start();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}