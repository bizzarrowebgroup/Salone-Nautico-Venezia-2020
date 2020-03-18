import React, { useState, useRef } from "react"
import { 
  View, 
  StyleSheet, 
  Image, 
  Dimensions, 
  ImageBackground, 
  TouchableWithoutFeedback, 
  ImageSourcePropType,
  Text
} from "react-native"
import { Video } from "expo-av"

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
    bottom: 200
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
    top: 300
  },
  videoBoxStyle: {
    width: "100%",
    height: SCREEN_HEIGHT
  },
  title: {
    fontSize: 50,
    fontWeight: "400",
    paddingTop: 5,
    lineHeight: 45,
    color: "white",
    textAlign: "left"
  },
  desc: {
    marginTop: 20,
    marginLeft: 40,
    fontSize: 30,
    fontWeight: "500",
    color: "white"
  },
  boxText: {
    height: 189,
    alignSelf: "center",
    position: "absolute",
    top: SCREEN_HEIGHT / 2 - 100,
    margin: 20
  }
})

interface Props {
  imageBg: ImageSourcePropType;
  title?: string;
  desc?: string;
}

const VideoHomePage: React.FC<Props> = ({
  imageBg,
  title,
  desc
}) => {
  const [isVideoPlaying, setisVideoPlaying] = useState(false)
  const [isBig, setisBig] = useState(false)
  const _videoPlayer = useRef<Video>(null)

  const playVideo = () => {
    setisVideoPlaying(!isVideoPlaying)
  }
  const _onPlaybackStatusUpdate = (i) => {
    if (i.didJustFinish) {
      setisVideoPlaying(!isVideoPlaying)
      setisBig(!isBig)
    }
    if (i.isPlaying && _videoPlayer.current && !isBig) {
      setisBig(!isBig)
      _videoPlayer.current.presentFullscreenPlayer()
    }
  }

  const checkBig = async (i) => {
    const StateVideo = i.fullscreenUpdate;
    if (StateVideo > 2) {
      setisVideoPlaying(!isVideoPlaying)
      setisBig(!isBig)
    }

  }

  function renderTextBox () {
    if(!isVideoPlaying && title && desc){
      return(
        <View style={styles.boxText}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.desc}>{desc}</Text>
        </View>
      );
    }
  }

  return (<ImageBackground source={imageBg} style={styles.videoHomeBox}>
    {isVideoPlaying && <Video
      // source={require("../../assets/intro_video.mp4")}
      source={{ uri: "https://bizzarro.org/images/intro_video.mp4" }}
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
    <View style={styles.opacityBox} />
    {renderTextBox()}
    {!isVideoPlaying && (
    <>
      {/* <Image source={require("../../assets/welcome_text.png")} style={styles.textWelcome} resizeMode={"contain"} /> */}
      <TouchableWithoutFeedback onPress={() => playVideo()}>
        <Image source={require("../../assets/play_icon.png")} style={styles.imageLogo} />
      </TouchableWithoutFeedback>
    </>
    )}
  </ImageBackground>);
};
VideoHomePage.defaultProps = {
  imageBg: require("../../assets/bg_3.png"),
};
export default VideoHomePage;
