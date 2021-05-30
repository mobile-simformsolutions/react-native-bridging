//
//  VoiceChanging.swift
//  VoiceChangerDemo
//
//  Created by Rupesh Chaudhary on 11/05/21.
//

import Foundation
import AVFoundation

@objc(VoiceChangingModule)
class VoiceChangingModule: NSObject {
  
  var player: AVAudioPlayer?
  
  var engine: AVAudioEngine!
  var file: AVAudioFile!
  var audioFile: AVAudioFile!
  
  @objc
  func changeVoiceToAlien() {
    engine = AVAudioEngine()
    guard let url = Bundle.main.url(forResource: "sound_sample", withExtension: "mp3") else { return }
    do {
      try self.audioFile = AVAudioFile(forReading: url)
    } catch {
      print("Error in audioFile")
    }
    playModifiedSound(value: -1000, rateOrPitch: "pitch")
  }
  
  @objc
  func changeVoiceToChild() {
    engine = AVAudioEngine()
    guard let url = Bundle.main.url(forResource: "sound_sample", withExtension: "mp3") else { return }
    do {
      try self.audioFile = AVAudioFile(forReading: url)
    } catch {
      print("Error in audioFile")
    }
    playModifiedSound(value: 1500, rateOrPitch: "pitch")
  }
  
  @objc
  func speedUpVoice() {
    engine = AVAudioEngine()
    guard let url = Bundle.main.url(forResource: "sound_sample", withExtension: "mp3") else { return }
    do {
      try self.audioFile = AVAudioFile(forReading: url)
    } catch {
      print("Error in audioFile")
    }
    playModifiedSound(value: 1.5, rateOrPitch: "rate")
  }
  
  @objc
  func slowDownVoice() {
    engine = AVAudioEngine()
    guard let url = Bundle.main.url(forResource: "sound_sample", withExtension: "mp3") else { return }
    do {
      try self.audioFile = AVAudioFile(forReading: url)
    } catch {
      print("Error in audioFile")
    }
    playModifiedSound(value: 0.5, rateOrPitch: "rate")
  }
  
  func playModifiedSound(value: Float, rateOrPitch: String){
          let audioPlayerNode = AVAudioPlayerNode()
          
          audioPlayerNode.stop()
          engine.stop()
          engine.reset()
          
          engine.attach(audioPlayerNode)
          
          let changeAudioUnitTime = AVAudioUnitTimePitch()
          
          if (rateOrPitch == "rate") {
              changeAudioUnitTime.rate = value
          } else {
              changeAudioUnitTime.pitch = value
          }
          
          engine.attach(changeAudioUnitTime)
          engine.connect(audioPlayerNode, to: changeAudioUnitTime, format: nil)
          engine.connect(changeAudioUnitTime, to: engine.outputNode, format: nil)
          audioPlayerNode.scheduleFile(audioFile, at: nil, completionHandler: nil)
          do {
            try engine.start()
          } catch {
            print("Error")
          }
          
          audioPlayerNode.play()
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
