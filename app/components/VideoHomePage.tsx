import React, {useState,useRef} from "react"
import {View, StyleSheet, Image, Dimensions, ImageBackground, TouchableWithoutFeedback, ImageSourcePropType} from "react-native"
import {Video} from "expo-av"

const SCREEN_HEIGHT = Dimensions.get("screen").height
// const SCREEN_HEIGHT = Dimensions.get("screen").height - Constants.statusBarHeight * 4;

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
    bottom: 250
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
    top: 366
  },
  videoBoxStyle: {
    width: "100%",
    height: SCREEN_HEIGHT
  }
})

interface Props {
  imageBg: ImageSourcePropType;
}

const VideoHomePage: React.FC<Props> = ({imageBg}) => {
  const [isVideoPlaying, setisVideoPlaying] = useState(false)
  const [isBig, setisBig] = useState(false)
  const _videoPlayer =  useRef<Video>(null)

  const playVideo = () =>{
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
  }

  const checkBig = async(i) => {
    const StateVideo = i.fullscreenUpdate;
    if(StateVideo > 2) {
      setisVideoPlaying(!isVideoPlaying)
      setisBig(!isBig)
    }
   
  }

  return (<ImageBackground source={imageBg} style={styles.videoHomeBox}>
      {isVideoPlaying&&<Video
        // source={require("../../assets/intro_video.mp4")}
        source={{uri:"https://bizzarro.org/images/intro_video.mp4"}}
        ref={_videoPlayer}
        rate={1.0} 
        volume={1.0}
        useNativeControls={false}
        isMuted={false} 
        resizeMode="cover" 
        shouldPlay={true} 
        isLooping={false} 
        style={styles.videoBoxStyle}
        onFullscreenUpdate={(a) => checkBig(a)}
        onPlaybackStatusUpdate={(playbackStatus) => _onPlaybackStatusUpdate(playbackStatus)}
      />}
      <View style={styles.opacityBox}/>
      {!isVideoPlaying && (<><Image source={require("../../assets/welcome_text.png")} style={styles.textWelcome} resizeMode={"contain"}/>
      <TouchableWithoutFeedback onPress={()=>playVideo()}><Image source={require("../../assets/play_icon.png")} style={styles.imageLogo}/></TouchableWithoutFeedback></>)}
  </ImageBackground>);
};
VideoHomePage.defaultProps = {
  imageBg: require("../../assets/bg_3.png"),
};
export default VideoHomePage;
