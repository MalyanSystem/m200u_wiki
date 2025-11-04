---
sidebar_position: 2
---

# Printing from Network Connection

Learn how to connect your Malyan M200 Ultra to your network and print wirelessly.

## Overview

The Malyan M200 Ultra supports **WLAN (Wi-Fi)** network connection, allowing you to:
- Print wirelessly from your computer
- Monitor prints remotely
- Send files directly from slicing software
- Access advanced network features

## Prerequisites

- Wi-Fi network available (2.4GHz recommended)
- Network password (if secured)
- Slicing software installed and configured
- Printer powered on and ready

## Step 1: Connect Printer to Network

### On the Printer Display

1. On the printer's OLED touchscreen, click the **Settings** button
2. Navigate to **WLAN** functionality
3. Connect to your local Wi-Fi network:
   - Select your network from the list
   - Enter network password if required
   - Wait for connection confirmation

### Connection Status

- The printer will attempt to connect to the network
- Connection status will be displayed on screen
- Wait for successful connection confirmation

## Step 2: Obtain Printer IP Address

### On Printer Display

1. Return to the **Home** screen on the printer
2. Look for the **IP Display** - this shows the printer's IP address when Wi-Fi connection is successful
3. **Note down the IP address** displayed (e.g., 192.168.1.100)
4. You'll need this IP address to connect from your slicing software

**Example IP Display:**
```
Wi-Fi Connected
IP: 192.168.1.100
```

## Step 3: Connect Software to Printer

### In Your Slicing Software

1. Click the **Device** button in the software (or connection icon)
2. Look for the **Network Connection** option (🔌 icon)
3. In the connection dialog/text box:
   - Enter the printer's **IP address** (obtained from Step 2)
   - Click **OK** to connect

### Verify Connection

4. Click on the connection status icon (✓ or 🔌) to check the connection status
5. Software should display "Connected" or show printer status
6. You can now see printer information and status

**Connection Features:**
- View printer status in real-time
- Monitor temperatures
- Check print progress
- Send print jobs directly

## Step 4: Print from Network

### Prepare Your Model

1. **File Addition** (📁): Import your STL or 3MF format files
2. **Slicing** (⚙️): Click to complete the slicing process
3. Review the sliced preview

### Send Print Job

1. After slicing is complete, click the **Print** button
2. Then click **Upload and Print** (or "Send to Printer")
3. The G-code file will be transferred to the printer over the network
4. The printer will automatically start printing once the file is received

**During Transfer:**
- Progress bar shows file upload status
- Don't disconnect network during transfer
- Printer will confirm file receipt

## Features of Network Connection Interface

When connected via network, your slicing software provides additional features:

### 1. Print History and Status
- **Reprint Historical Files**: Access previously printed files
- **View Print Status**: Real-time print progress and status
- **Print Queue**: Manage multiple print jobs

### 2. Monitor
- **Monitor the Printed Object**: View live camera feed (if camera enabled)
- **Real-time Visualization**: Watch your print progress
- **Remote Monitoring**: Monitor from anywhere on network

### 3. Motion Control
- **Adjust Extruder Head**: Move along X, Y, and Z axes manually
- **Precise Positioning**: Fine-tune printer position
- **Homing**: Return printer to home position
- **Manual Movement**: Control each axis independently

### 4. Temperature
- **Extruder Head Temperature**: View and adjust nozzle temperature
- **Heated Bed Temperature**: View and adjust bed temperature
- **Real-time Display**: Monitor temperatures in real-time
- **Temperature Graphs**: View temperature history (if supported)

### 5. Console
- **Printer Control Commands**: Input G-code commands directly
- **Manual Control**: Send commands for advanced control
- **Debugging**: Troubleshoot printer issues
- **G-code Terminal**: Advanced user interface

### 6. Task List
- **Queuing**: Queue multiple print jobs
- **Pausing**: Pause current print job
- **Resuming**: Resume paused prints
- **Canceling**: Cancel print jobs in queue

### 7. Fan Control
- **Fan Speed Adjustment**: Control part cooling fan speed
- **Exhaust Fan**: Adjust exhaust/ventilation fan
- **Material-Specific Settings**: Optimize fans for different materials

### 8. Printer Limitations
- **Print Speed Control**: Adjust print speed during operation
- **Speed Limits**: Set maximum speed limits
- **Feedrate Control**: Fine-tune print speed

## Network Printing Workflow

### Complete Workflow

1. **Connect Printer to Network** (via printer display)
2. **Get IP Address** (note from home screen)
3. **Connect Software** (enter IP in software)
4. **Import Model** (File Addition)
5. **Slice Model** (Slicing)
6. **Send to Printer** (Print → Upload and Print)
7. **Monitor Print** (via software interface)

### During Printing

- **Monitor Progress**: View progress in software
- **Adjust Settings**: Use network interface features
- **Control Print**: Pause, resume, or cancel if needed
- **View Temperatures**: Monitor printer temperatures
- **Check Status**: View detailed print information

## Troubleshooting Network Connection

### Printer Won't Connect to Wi-Fi

**Solutions:**
- Verify network name (SSID) is correct
- Check password is entered correctly
- Ensure network is 2.4GHz (if printer only supports 2.4GHz)
- Check signal strength - move printer closer to router if needed
- Restart router and printer
- Verify network security settings (WPA2 recommended)

### IP Address Not Showing

**Solutions:**
- Wait for connection to complete
- Check Wi-Fi connection status on printer
- Reconnect to network
- Restart printer and try again
- Verify router is assigning IP addresses

### Software Can't Connect to Printer

**Solutions:**
- Verify IP address is correct (check on printer display)
- Ensure printer and computer are on same network
- Check firewall settings (may block connection)
- Try disconnecting and reconnecting
- Restart both software and printer
- Verify printer is powered on and connected to network

### Connection Drops During Print

**Solutions:**
- Check network signal strength
- Ensure router is stable
- Avoid network interference
- Keep printer and router in range
- Consider using wired connection if available (future option)

### File Transfer Fails

**Solutions:**
- Check file size (very large files may timeout)
- Verify network connection is stable
- Try transferring smaller files first
- Reconnect to printer
- Check printer has sufficient storage/memory

## Network vs USB Storage

### Advantages of Network Printing

✅ **Convenience**: Print directly from computer  
✅ **Remote Monitoring**: Monitor prints from computer  
✅ **Advanced Features**: Access to motion control, console, etc.  
✅ **Multiple Jobs**: Queue multiple print jobs  
✅ **Real-time Control**: Adjust settings during printing  

### Advantages of USB Storage

✅ **Offline Printing**: No computer needed during print  
✅ **Reliability**: No network dependency  
✅ **Portability**: Take files to different printers  
✅ **Simplicity**: Straightforward file transfer  

## Best Practices

1. **Stable Network**: Use reliable Wi-Fi network
2. **Signal Strength**: Ensure good signal near printer
3. **Network Security**: Use secured Wi-Fi network (WPA2)
4. **Monitor First Print**: Always watch first layer
5. **Backup Connection**: Have USB storage as backup method
6. **IP Address**: Note IP address for easy reconnection

---

**Related Topics**:
- [Printing from USB Storage](/docs/usage/usb-printing)
- [Software Installation](/docs/software/slicer-setup)
- [Controls and Interface](/docs/user-manual/controls)

