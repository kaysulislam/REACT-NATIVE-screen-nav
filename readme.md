Create a React Native app running the command,
`npx react-native init multipleScreen`

Install the necessary modules for the navigation,
`npm install react-navigation --save`
`npm install react-native-gesture-handler --save`
`npm install react-navigation-stack --save`

error: Error: Unable to resolve module `react-native-safe-area-context` from
`node_modules/react-navigation-stack/lib/module/vendor/views/Stack/StackView.js`:
react-native-safe-area-context could not be found within the project.

`npm install @react-native-community/masked-view --save`
`npm install react-native-safe-area-context --save`

error: Error: Unable to resolve module `react-native-screens` from
`node_modules/react-navigation-stack/lib/module/vendor/views/Screens.js`:
react-native-screens could not be found within the project.
`npm install react-native-screens`
