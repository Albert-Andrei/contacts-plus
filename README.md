# Contacts+

This React Native application allows users to manage their contacts with features for adding, editing, deleting, and organizing contacts into categories. It uses Redux for state management, combined with Redux Persist for persistent local storage.

## Installation

Prerequisites
Node.js installed (v20 or above), IOS simulator, Android emulator

#### Setup Instructions:

Clone the repository:

```
git clone https://github.com/Albert-Andrei/contacts-plus.git
cd contacts-plus
```

Install dependencies:

```
npm install
```

Start the app:

```
npm run start
```

Press `i` to run the project on iOS simulator

Press `a` to run the project on Android emulator

## Features

- Core Features:

  [x] Contact List View: Displays all contacts in a scrollable list. Each contact item shows the name and phone number.

  [x] Add Contact: Allows users to add new contacts via a form with fields for name, phone number, and email.

  [x] Edit Contact: Provides functionality to modify existing contact information.
  Delete Contact:

  [x] Enables users to remove contacts from the list.
  Persistent Storage: Uses Redux with Redux Persist to manage and persist the app's state locally, ensuring contacts are saved even after app restarts.

- Advanced Features:

  [x] Offline Support: Detects when the device is offline and displays an offline banner. The banner disappears when the device is back online.

  [] Tab Navigation: Users can sort contacts into different categories such as Family, Friends, and Work using a tab navigator.

  [x] Advanced List Manipulation: Includes sorting and reordering of contacts (alphabetically or chronologically).

  [x] Custom Components: Reusable form components are developed for consistent styling and functionality.

## Usage

- Add Contact: Tap the "+" button in the top right corner to open the form for adding a new contact. Fill in the details and press `save` in top right corner to add the contact.

- Edit Contact: Tap on a contact from the list, then press on `edit` button in the top right corner. Update the necessary fields and press `save` in top right corner to save the changes.

- Delete Contact: Tap on a contact from the list, in the opened screen press the `Delete` to delete the contact. (there is no safety mechanisms once pressed the contact is completely deleted)

- Sorting and Reordering: Tap the sort button in the top right corner near the "+" button and select a the sort option to arrange the contacts alphabetically or by date.

## Project Structure

All the source code for the application is located in the `src` folder.

`components`: Contains reusable UI components.

`store`: State management logic using Redux and Redux Persist.

`app`: Different screens in the app such as Contact List, Add Contact, View Contact, etc.

`hook`: This folder contains custom React hooks that encapsulate reusable logic for components, such as state management, API calls, or handling side effects.

`contexts`: Stores context definitions that allow state and functions to be shared across the app using React's Context API, facilitating global state management.

`providers`: Contains higher-order components or context providers responsible for wrapping parts of the app with necessary contexts or data sources.

`utils`: This folder holds utility functions or helper methods that perform common tasks such as data formatting, validation, or transformations.

`styles`: Includes global and reusable style definitions, such as theme configurations

`types`: Contains TypeScript type definitions and interfaces used throughout the app, ensuring proper typing for props, state, etc.
