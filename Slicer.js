import React,{Component} from 'react';
import {View,Image,PanResponder,Animated,StyleSheet} from 'react-native';
import ImageEditor from "@react-native-community/image-editor";

class Slicer extends Component
{

  constructor(){
    super();
    this.state={
      ImageWidth: 100,
      ImageHeight: 100,
      translateX:new Animated.Value(0),
    translateY:new Animated.Value(0),
    }
  }
componentDidMount()
{
Image.getSize(this.props.source.uri,(width,height)=>{
  this.setState({ImageWidth:width});
  this.setState({ImageHeight: height});
})
}


startingPosition={
  x: 0,
  y: 0,
}
panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: (e,gesture) => {
      this.startingPosition.x=this.state.translateX._value;
      this.startingPosition.y=this.state.translateY._value;
    },
    onPanResponderMove: (e,gesture)=>{
      if(e.nativeEvent.touches.length==1)
      {
      this.state.translateX.setValue(this.startingPosition.x+gesture.dx);
      this.state.translateY.setValue(this.startingPosition.y+gesture.dy);
      }
    },
    onPanResponderRelease: ()=>{
      this.CheckDImensions();
    }
   });

   CheckDImensions=()=>{
    {
      const xvalue=this.state.translateX._value;
      const yvalue=this.state.translateY._value;
      if((xvalue+(this.state.ImageWidth)/2)<this.props.width/2)
      {
        this.GoToStartingPositionPan();
      }
      else if((xvalue-(this.state.ImageWidth)/2)>(-this.props.width/2))
      {
        this.GoToStartingPositionPan();
      }
      else if((yvalue+(this.state.ImageHeight)/2)<this.props.height/2)
      {
        this.GoToStartingPositionPan();
      }
      else if((yvalue-(this.state.ImageHeight)/2)>(-this.props.height/2))
      {
        this.GoToStartingPositionPan();
      }
    }
   }
   GoToStartingPositionPan=()=>{
     Animated.parallel([
    Animated.spring(this.state.translateX,{
      toValue: this.startingPosition.x,
      useNativeDriver: false,
    }),
    Animated.spring(this.state.translateY,{
      toValue: this.startingPosition.y,
      useNativeDriver: false,
    }),
   ]).start();
  }
 Slice=async ()=>{
  const xvalue=this.state.translateX._value;
  const yvalue=this.state.translateY._value;
  const ImageWidth=(xvalue-(this.state.ImageWidth)/2);
  const ImageHeight=(yvalue-(this.state.ImageHeight)/2);
   var cropData={
     offset: {
       x:(-this.props.width/2)-xvalue+this.state.ImageWidth/2,
       y: (-this.props.height/2)-yvalue+this.state.ImageHeight/2
     },
     size: {width: this.props.width, height: this.props.height}
   }

  let uri=await ImageEditor.cropImage(this.props.source.uri, cropData);
  return uri;
}
render()
{
return (
  <View style={styles.container}>
    <Animated.View
      style={{
        width: this.props.width,
        height: this.props.height,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        overflow: 'hidden'
       }}
      >
      <Animated.Image source={{
        uri: this.props.source.uri
      }}  resizeMode="cover" style={{
        width: Math.max(this.props.width,this.state.ImageWidth),
        height: Math.max(this.props.height,this.state.ImageHeight),
        transform: [{ translateX: this.state.translateX }, { translateY: this.state.translateY }],
      }} {...this.panResponder.panHandlers} />
    </Animated.View>
    </View>
);
    }
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems: "center",
  justifyContent: "center"
}
});
export default Slicer;