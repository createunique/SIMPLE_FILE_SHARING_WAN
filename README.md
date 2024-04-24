# P2P File Transfer System using WebRTC

$${\color{red} WORK \space IN \space PROGRESS \space...}$$
Ongoing efforts to boost transfer speed for bigger file sizes.

Note : It works for both LAN & WAN.      

Speed on LAN > Speed on WAN.

## Overview

This repository contains the code for a peer-to-peer (P2P) file transfer system that utilizes WebRTC to facilitate file transfer over a wide area network (WAN). The system allows users to establish direct connections between their devices to transfer files without relying on a centralized server.

## Files and Components

- <code>**index.html**</code> : This file contains the HTML and CSS code for the front end of the file transfer system. It provides a user interface for initiating connections, selecting files for transfer, and monitoring transfer progress.

- <code>**index.js**</code> : This file contains the server-side JavaScript code using Express.js and Socket.io for signaling between peers. It serves the static HTML file and handles WebSocket communication between peers to establish peer-to-peer connections.

- <code>**package.json**</code> : This file includes metadata about the project and specifies its dependencies, including Express.js, Nodemon, and Socket.io.

- <code> **package-lock.json** </code> : "package-lock.json" is a file used in Node.js projects to lock down the specific versions of dependencies installed. It ensures that every developer working on the project installs the same versions of dependencies, thus maintaining consistency and avoiding unexpected changes in behavior due to version mismatches. when we use npm (Node Package Manager) or Yarn to install dependencies for a Node.js project, they automatically generate a "package-lock.json" file.

- <code> **vercel.json** </code> : This file is used for deployment configuration on the Vercel platform, specifying the source file and routes.

## How to Use

Visit : [WAN_P2P](https://wan-p2p.vercel.app)<br>
      OR <br><br>  Use this repo codes as : <br>
1. Open the `index.html` file in systems or tabs that will participate in the file transfer.
2. On the first system or tab, click "Create local offer" to generate a local offer text. Copy this text.
3. Share the copied text with the second system or tab, and paste it into the text box under the "Remote" section. <br> Note : For sharing of local offer b/w d/f system you can use [Q-Text](https://qtext.io)
4. Click "Connect" on the second system or tab. A text will generate in the box under the "Local" section. Copy this text.
5. Share the copied text from the second system or tab with the first system or tab and ask to paste it into the text box under the "Remote" section. Then, press "Connect".
6. Once connected, the status will show as "Connected to peer". The sender can then choose a file and send it to the receiver.

## Mechanism

The P2P file transfer system follows these steps in the background:

1. **Signaling**: Peers exchange session descriptions (offers and answers) through a signaling server (implemented using Socket.io in this system). These session descriptions contain information necessary for establishing a direct peer-to-peer connection.

2. **Connection Establishment**: Once peers exchange session descriptions, they attempt to establish a direct connection using WebRTC. This connection is facilitated by ICE (Interactive Connectivity Establishment) servers for NAT traversal and STUN (Session Traversal Utilities for NAT) or TURN (Traversal Using Relays around NAT) servers for addressing and relaying.

3. **Data Channel Creation**: After successfully establishing a connection, peers create a data channel for transferring files. This data channel operates in binary mode to efficiently transmit file data.

4. **File Transfer**: Upon selecting a file for transfer, the sender initiates the transfer by sending metadata (file name, size, type) through the data channel. Subsequently, the sender reads the file in chunks, sends them over the data channel, and the receiver reconstructs the file on the receiving end.

5. **Transfer Progress**: During the file transfer, both sender and receiver monitor the progress using a progress bar, which updates as data chunks are sent and received.

6. **Completion and Cleanup**: Once the file transfer is complete, both peers can perform necessary cleanup tasks and close the connection.

The system ensures secure and efficient file transfer by directly connecting peers and leveraging WebRTC's capabilities for real-time communication.

## Team

- [Nishant Kumar] @me
- [Viswanadha Sai Nissankararao](https://github.com/createunique)
