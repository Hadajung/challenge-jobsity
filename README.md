# Jobsity Project App

![](simulation.gif)

## Where to find apk file

/dis/app-release.apk

## Installing

---

Install Node dependencies:

```bash
   yarn 
```

Install iOS dependencies:

```bash
  cd ios && pod install
```

> ⚠️ Do not run `react-native link` anymore!
>
> Since RN 0.60, iOS and Android libs are now linked automatically

## Running the Project (local-dev)

---

### Android

- <strong>Start emulator or connect phisycal device</strong>

To list A.V.Ds

```bash
  emulator -list-avds
```

Start avd:

```bash
  emulator -avd "Device_Name_API_00"
```

- <strong>Start packager</strong>

```bash
  yarn start
```

### iOS

```bash
  yarn ios
```
