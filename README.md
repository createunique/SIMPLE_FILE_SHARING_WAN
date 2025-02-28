
# P2P File Transfer System using WebRTC  

### 🚧 **Work in Progress...**  
Ongoing improvements to enhance transfer speeds for larger files.  

### 🔹 **Supports both LAN & WAN**  
- **LAN Speed > WAN Speed**  

---

## 📌 Overview  

This repository contains the code for a **peer-to-peer (P2P) file transfer system** that leverages **WebRTC** to enable file sharing over **local and wide-area networks (LAN & WAN)**. The system allows users to establish **direct peer-to-peer connections** without relying on a central server, ensuring **faster and secure** file transfers.  

---

## 📂 Files & Components  

- **`index.html`**  
  Contains the **HTML & CSS** for the front-end user interface, allowing users to:  
  - Initiate connections  
  - Select files for transfer  
  - Monitor transfer progress  

- **`index.js`**  
  Implements the **signaling server** using **Express.js & Socket.io**, handling:  
  - WebSocket communication between peers  
  - Static file serving  
  - Establishment of peer-to-peer connections  

- **`package.json`**  
  Defines the project's metadata and dependencies, including **Express.js, Nodemon, and Socket.io**.  

- **`package-lock.json`**  
  Ensures consistent dependency versions across different development environments by locking package versions.  

- **`vercel.json`**  
  Contains deployment configurations for **Vercel**, specifying source files and routing settings.  

---

## 🚀 How to Use  

🔗 **Live Demo:** [WAN_P2P](https://wan-p2p.vercel.app)  

Or follow these steps to use the repository:  

1. Open `index.html` on the devices that will participate in the file transfer.  
2. On the **first device**, click **"Create Local Offer"** to generate a connection offer. Copy this text.  
3. Share this offer with the **second device** (use [Q-Text](https://qtext.io) for easy sharing).  
4. On the **second device**, paste the copied text into the **"Remote"** field and click **"Connect"**. This generates a response in the **"Local"** section.  
5. Copy this response and send it back to the **first device**. Paste it into the **"Remote"** field and press **"Connect"**.  
6. Once connected, the status will show **"Connected to peer"**. The sender can now select a file and transfer it.  

---

## ⚙️ Mechanism  

The P2P file transfer system operates in the following steps:  

1. **Signaling**  
   - Peers exchange session descriptions (**offer & answer**) through a **signaling server** (Socket.io).  
   - This exchange helps establish a direct P2P connection.  

2. **Connection Establishment**  
   - WebRTC attempts to create a direct connection between peers.  
   - Uses **ICE (Interactive Connectivity Establishment), STUN, and TURN** servers for NAT traversal.  

3. **Data Channel Creation**  
   - A **WebRTC Data Channel** is established for binary file transfer.  

4. **File Transfer**  
   - The sender transmits **metadata** (file name, size, type) first.  
   - The file is read in chunks and sent via the data channel.  
   - The receiver reconstructs the file upon receiving all chunks.  

5. **Transfer Monitoring**  
   - Both sender and receiver track the progress using a **progress bar**.  

6. **Completion & Cleanup**  
   - Once the file transfer completes, the connection is closed, and cleanup operations are performed.  

### ✅ **Why WebRTC for File Transfer?**  
- **No centralized server needed** (except for signaling)  
- **Direct peer-to-peer connection** ensures **fast and secure** transfers  
- **Real-time communication** via WebRTC's **Data Channel**  

---

## 👥 Team  

- **[Nishant Kumar](https://github.com/nishant-kumarr)**  
- **Viswanadha Sai Nissankararao** (@ME)  

---

### 📌 Notes  
- The system is currently under development to **optimize performance** for large files.  
- WebRTC works best in **LAN environments**, but performance in **WAN scenarios depends on network conditions**.  
- If WebRTC fails due to NAT issues, a **TURN server** may be required for relaying data.  
