import React, {useState,useRef,useEffect} from "react";
import {View, StyleSheet, Image, Dimensions, ImageBackground, TouchableWithoutFeedback} from "react-native";
import Constants from "expo-constants";
import {Video} from "expo-av";

const SCREEN_HEIGHT = Dimensions.get("screen").height - Constants.statusBarHeight * 4;

const styles = StyleSheet.create({
  videoHomeBox: {
    backgroundColor: "white",
    width: "100%",
    height: SCREEN_HEIGHT,
    flex: 1
  },
  imageLogo: {
    width: 69,
    height: 69,
    alignSelf: "center",
    position: "absolute",
    bottom: 150
  },
  opacityBox: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#001489",
    opacity: 0.55
  },
  textWelcome: {
    width: "100%",
    height: 189,
    alignSelf: "center",
    position: "absolute",
    top: 266
  },
  videoBoxStyle: {
    width: "100%",
    height: SCREEN_HEIGHT
  }
});

export type Props = {};

const VideoHomePage:React.FC = (props : Props) => {
  const [isVideoPlaying, setisVideoPlaying] = useState(false)
  const [isBig, setisBig] = useState(false)
  const _videoPlayer =  useRef<Video>(null)

  const playVideo = () => {
    setisVideoPlaying(!isVideoPlaying)
  }
  const _onPlaybackStatusUpdate = (i) => {
    if (i.didJustFinish) {
      setisVideoPlaying(!isVideoPlaying)
      setisBig(!isBig)
    }
    if(i.isPlaying && _videoPlayer.current && !isBig) {
      setisBig(!isBig)
      _videoPlayer.current.presentFullscreenPlayer()
    }
    // if (_videoPlayer.current && isVideoPlaying && !isBig){
    //   setisBig(!isBig)
    //   _videoPlayer.current.presentFullscreenPlayer()
    // }
  }
  // const stopVideo = () => {
  //   setisVideoPlaying(!isVideoPlaying)
  //   setisBig(!isBig)
  // }

  const checkBig = (i) => {
    // if(typeof i.fullscreenUpdate == "number"){
    //   // setisVideoPlaying(!isVideoPlaying)
    //   // setisBig(!isBig)
    //   // console.log(typeof i.fullScreenUpdate ,"we")
    // }
    // console.log(i.fullscreenUpdate ,"we")
    // console.log(i["fullscreenUpdate"] ,"we")
    // console.log(typeof i.fullScreenUpdate ,"we")
    // console.log(typeof i["fullScreenUpdate"] ,"we")
  }

  return (<ImageBackground source={require("../../assets/bg_3.png")} style={styles.videoHomeBox}>
      {isVideoPlaying&&<Video
        source={require("../../assets/intro_video.mp4")} 
        ref={_videoPlayer}
        rate={1.0} 
        volume={1.0}
        useNativeControls={false}
        isMuted={false} 
        resizeMode="cover" 
        shouldPlay={true} 
        isLooping={false} 
        style={styles.videoBoxStyle}
        // onTouchCancel={()=>stopVideo()}
        // onTouchEnd={()=>stopVideo()}
        // onTouchStart={()=>playVideo()}
        // onFullscreenUpdate={(a) => checkBig(a)}
        onPlaybackStatusUpdate={(playbackStatus) => _onPlaybackStatusUpdate(playbackStatus)}
      />}
      <View style={styles.opacityBox}/>
      {!isVideoPlaying && (<><Image source={require("../../assets/welcome_text.png")} style={styles.textWelcome} resizeMode={"contain"}/>
      <TouchableWithoutFeedback onPress={()=>playVideo()}><Image source={require("../../assets/play_icon.png")} style={styles.imageLogo}/></TouchableWithoutFeedback></>)}
  </ImageBackground>);
};

export default VideoHomePage;
