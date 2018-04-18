# react-native-on-layout-async

Based on non-async version by @shichongrui: https://github.com/shichongrui/react-native-on-layout

The non-async version first calls the function-as-child with `{ width: 0, height: 0 }` and again later once updated, leading to layout jankiness. This renders a placeholder or loading component first, and calls the function-as-child only when the values are known.

```javascript
import onLayout from 'react-native-on-layout-async'

const LoadingPlaceholder = View

const OnLayoutHOC = onLayout(LoadingPlaceholder)

<OnLayoutHOC>
  {({ width, height}) => <View style={{ width, height }} />}
</OnLayoutHOC>
```
    
This utilizes the function-as-child and higher-order-component paradigms to making layout more deterministic
