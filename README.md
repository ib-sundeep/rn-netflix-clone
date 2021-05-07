# Netflix clone

To run the project
### 1. Clone this project
`git clone https://github.com/ib-sundeep/rn-netflix-clone.git`

### 2. Install dependencies of project

If you are using yarn then run `yarn install` to install dependencies

If you are using npm then run `npm install` to install dependencies

### 3. Installing emulator

For iOS device emulators (Only supported on MacOS)
- Download and install xcode from app store
- Emulator is bundled with xcode not additional steps required

For android emulators
- Download and install Android Studio from [here](https://developer.android.com/studio)
- After installation open android studio and launch AVD manager.
- Create a new device from AVD manager.
- You can find full instructions [here](https://docs.expo.io/workflow/android-studio-emulator/)

### 4. Create secrets.json
`secrets.json` holds some configuration that is needed for your app to run. Create a new file `secrets.json` and add this content to it after replacing the placeholders with appropriate values
```json
{
  "TMDB_API_KEY": "GET-YOUR-KEY-FROM-TMDB-AND-ADD-HERE"
}
```

### 5. Opening the project in emulator

To launch in iOS device emulator (Works only if xcode is installed)
If using yarn: `yarn ios`
If using npm: `npm run ios`

To launch in android device emulator (Works only if a android emulator is created from AVD manager as in step 3)
If using yarn: `yarn android`
If using npm: `npm run android`
