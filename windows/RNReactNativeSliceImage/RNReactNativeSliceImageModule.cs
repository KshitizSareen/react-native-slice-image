using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace React.Native.Slice.Image.RNReactNativeSliceImage
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNReactNativeSliceImageModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNReactNativeSliceImageModule"/>.
        /// </summary>
        internal RNReactNativeSliceImageModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNReactNativeSliceImage";
            }
        }
    }
}
