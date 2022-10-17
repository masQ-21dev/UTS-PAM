mustDo
===

&nbsp;

# Overview

### Home view

<p align="center">
    <img width="200px" src="./src/assets/gambar 1.png">
</p>

### Detail View

<p align="center">
    <img width="200px" src="./src/assets/gambar 1.png">
</p>

<br>

# Running Pojeck

**Step 1:**

Download or Clone this repo

 ```
https://github.com/masQ-21dev/UTS-PAM.git
```

**Step 2:**

Go to project root folder

   ```
   cd UTS-PAM
   ```

**Step 3:**

Execute the following command in console to get the required dependencies:

```
npm install
```

**Step 4:**

Make sure you have an ios Simulator or Android Emulator running or have an ios device with you:

```
npm start
```

or

```
expo start
```

**Step 5:**

You should see something like this on your terminal
<p>
  <img width="574" alt="Screen Shot 2020-03-10 at 2 01 58 pm" src="https://user-images.githubusercontent.com/9260574/76275585-c2911480-62d7-11ea-99c4-ffb17a82b614.png">
</p>

**Step 6:**

You can:

- Press `a` to launch the app in Android emulator,
- Press `i` to launch the app in ios simulator,
- OR Scan the QR code on your ios device using your camera to open the app in [Expo Client](https://apps.apple.com/au/app/expo-client/id982107779).

&nbsp;
&nbsp;

# Build to android app

**Step 1:**

Run the following command below in project terminal root to build android apk

```
yarn install
```

or

```
npm install
```

&nbsp;

**Step 2:**

Next is run the same function as git init inside expo

```
npx expo install expo-updates
```

&nbsp;

**Step 3:**

Build inside expo

```
expo build:android
```

or

```
npm install -g eas-cli
eas build -p android
```

&nbsp;
**Step 4:**

Then wait and follow the instruction if it the first build, generate a new key and choose apk.Last if expo need login in terminal input same as your expo.dev account
&nbsp;

## Apk Link

[mustDo](https://drive.google.com/drive/folders/1llCxe6pIWi6OG5vB-1jSa1KuZqK5m9NG?usp=sharing)

## Dependencies

["expo-status-bar": "~1.4.0"](https://docs.expo.dev/versions/latest/sdk/status-bar/),

["react-native-safe-area-context": "4.3.1"](https://docs.expo.dev/versions/latest/sdk/safe-area-context/),

["react-native-screens": "~3.15.0"](https://docs.expo.dev/versions/latest/sdk/screens/),

["nativewind": "^2.0.11"](https://www.nativewind.dev/quick-starts/expo)
