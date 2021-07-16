
# react-native-slice-image

## Getting started

`$ npm install react-native-slice-image --save`

### Mostly automatic installation

`$ react-native link react-native-slice-image`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-slice-image` and add `RNReactNativeSliceImage.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNReactNativeSliceImage.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNReactNativeSliceImagePackage;` to the imports at the top of the file
  - Add `new RNReactNativeSliceImagePackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include 'react-native-slice-image'
  	project('react-native-slice-image').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-slice-image/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-slice-image')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNReactNativeSliceImage.sln` in `node_modules/react-native-slice-image/windows/RNReactNativeSliceImage.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using React.Native.Slice.Image.RNReactNativeSliceImage;` to the usings at the top of the file
  - Add `new RNReactNativeSliceImagePackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import Slicer from 'react-native-slice-image';

// TODO: What to do with the module?
class App extends Component
{

Slice=()=>{
     this.Slicer.Slice()then(uri=>{
       console.log(uri);
     });
   }

render()
{

return(
<Slicer ref={(ref)=>{
       this.Slicer=ref;
     }} width={width} height={height} source={
       {
         uri: uri
       }
     }/>
)
}
}
```

## Options

| Props  | Data Type | Description                          | 
| ------ | ------- | -------------------------------------- |
| width  | Number  | The Width of the Slicer                |
| height | Number  | The Height of the Slicer               |
| uri    | String  | The Uri of the Image you want to Slice | 


## Methods

| Method  | Return Type | Description                                                      |  
| ------  | ----------  |  --------------------------------------------------------------- |
| Slice   | String      | The Uri of the new Image returned after slicing the original Image |

## Demo

![Alt Text](Demo.mp4)
  