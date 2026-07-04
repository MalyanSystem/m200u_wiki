---
sidebar_position: 3
---

# Print From Your Usb Storage By Using Orcaslicer Software

## Overview

The Malyan M200 Ultra supports printing directly from your USB storage devices. This allows you to:
- Print without keeping a computer connected
- Transfer files easily via USB drive
- Print multiple files by storing them on USB storage

## Prerequisites

- Your USB storage device (USB drive/flash drive)
- Slicing software (OrcaSlicer) installed and configured
- 3D model file in .OBJ, .STL, or .3MF format

## Step-by-Step Guide

### Step 1: File Addition (Import Model)

1. Open your slicing software (OrcaSlicer)
2. First, click the button for **File Addition (①) to import STL
 or 3MF format files. 
<img id="print1-image" src="/img/print1.png" />

### Step 2: Slicing (Generate G-code)

1. After successfully importing your model, click the **Slicing** button (⚙️ icon)
2. The software will process the model and generate G-code
3. Wait for slicing to complete
4. Review the preview to check print time, material usage, and layer-by-layer visualization
<img id="print2-image" src="/img/print2.png" />
**Tips during slicing:**
- Check the estimated print time
- Review material usage estimate
- Examine the layer preview for potential issues
- Adjust settings if needed and re-slice

### Step 3: Export G-code File

1. Once slicing is complete, click the button to **Export G-code** 
2. You can modify the file name as needed (optional)
3. **Important**: Choose to save to your USB storage device
   - Insert USB storage into your computer
   - Select the USB drive as the save location
   - Save the G-code file

<img id="print3-image" src="/img/print3.png" />
**File Naming Tips:**
- Use descriptive names for easy identification
- Avoid special characters that may cause issues
- Keep names reasonably short

### Step 4: Transfer to Printer

1. **Safely eject** the USB storage from your computer
2. Insert the USB storage device into the printer's USB port
3. Ensure the printer is powered on

### Step 5: Print from Printer

1. On the printer's OLED touchscreen, navigate to **File Management**
2. Browse the files on your USB storage
3. Select the G-code file you want to print
4. Tap to confirm and start printing

**During Printing:**
- Monitor the first few layers closely
- Check temperature displays on screen
- The printer will display progress information
- You can pause/resume via the touchscreen if needed

## File Management on Printer

### Browsing Files

- Navigate through folders (if organized)
- Files are typically listed by name
- File size and other information may be displayed

### Starting a Print

1. Select your G-code file
2. Confirm selection
3. Printer will begin preheating
4. Printing will start automatically once temperatures are reached

### Multiple Files

- You can store multiple G-code files on USB storage
- Print files one at a time
- Remove USB storage after printing (or leave it for future prints)



---

**Related Topics**:
- [Software Installation](/docs/software/slicer-setup)
- [Network Printing](/docs/usage/network-printing)
