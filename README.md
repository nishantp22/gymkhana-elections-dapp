# Project Report: Gymkhana Elections DApp

## 1. Introduction

The Gymkhana Elections DApp is a decentralized application (DApp) that allows members of an organization to participate in elections for their General Secretary of the SNT Council. The DApp is built using the Ethereum blockchain and is accessible through a web interface. It leverages smart contracts to facilitate the election process securely and transparently.

This project report provides a comprehensive overview of the Gymkhana Elections DApp, including its functionalities, how to use the application, and the technologies used.

## 2. Application Overview

The Gymkhana Elections DApp consists of three main functionalities:

### 2.1. Registration of Voters

- The application allows users to connect their MetaMask wallet to the DApp by clicking the "Connect to MetaMask Account" button on the login page (index.html).
- Once connected, users can register themselves as voters by clicking the "Register" button. The user's Ethereum address will be used for registration.
- Only users who are not already registered and have not cast their votes can register through the DApp.

### 2.2. Casting Votes

- After successfully registering as a voter, users can proceed to cast their votes.
- Users need to enter the index numbers of their preferred candidates (first, second, and third choices) in the input fields provided.
- Upon clicking the "Cast Vote" button, the user's preferences will be recorded, and their vote will be added to the respective candidates.

### 2.3. View Current Standings

- Once a user has cast their vote, they can view the current standings of the candidates by clicking the "Update Standings" button.
- The current scores of all candidates will be displayed in a tabular format, showing their respective positions.

## 3. How to Use the Application

Follow these steps to use the Gymkhana Elections DApp:

### 3.1. Prerequisites

- Ensure you have MetaMask installed in your web browser.
- Make sure you have an Ethereum account with some ETH for gas fees.

### 3.2. Accessing the DApp

1. Open the DApp in your web browser by loading the index.html file.
2. Click the "Connect to MetaMask Account" button to connect your MetaMask wallet to the DApp.
3. A prompt from MetaMask will appear to allow the DApp access to your Ethereum account. Accept the request.

### 3.3. Registration

1. After connecting to MetaMask, the application will automatically redirect you to the election.html page.
2. Click the "Register" button to register as a voter. Note that you can only register once, and it is essential to have not voted already.

### 3.4. Casting Votes

1. Enter the index numbers of your preferred candidates (first, second, and third choices) in the provided input fields.
2. Click the "Cast Vote" button to submit your vote. Confirm the transaction in the MetaMask popup.
3. Your vote will be recorded, and you cannot vote again with the same account.

### 3.5. Viewing Current Standings

1. Once you have cast your vote, click the "Update Standings" button to view the current standings of the candidates.
2. The scores of all candidates will be displayed in a table format.

### 3.6. After Voting

1. After casting your vote, it is recommended to disconnect your MetaMask account and refresh the page for security reasons.

## 4. Conclusion

The Gymkhana Elections DApp provides a user-friendly interface for participating in the election process securely and transparently. Users can connect their MetaMask wallets, register as voters, cast their votes, and view the current standings of candidates with ease. The DApp leverages the Ethereum blockchain and smart contracts to ensure the integrity of the election process.

With the provided manual, users can confidently participate in the elections and help in the selection of the General Secretary for the SNT Council in their organization.

**Note:** The provided code snippets and web application are simplified for demonstration purposes. In a real-world scenario, security and additional features such as voter authentication, prevention of multiple votes from the same address, and ensuring anonymity would be essential considerations. Additionally, the DApp should be thoroughly tested and audited before being deployed in a live environment.
