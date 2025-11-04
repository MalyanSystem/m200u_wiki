---
sidebar_position: 1
---

# Printing from USB Storage

Learn how to print 3D models directly from USB storage without needing a computer connection during printing.

## Overview

The Malyan M200 Ultra supports printing directly from USB storage devices. This allows you to:
- Print without keeping a computer connected
- Transfer files easily via USB drive
- Print multiple files by storing them on USB storage

## Prerequisites

- USB storage device (USB drive/flash drive)
- Slicing software (Cura or OrcaSlicer) installed and configured
- 3D model file in .OBJ, .STL, or .3MF format

## Step-by-Step Guide

### Step 1: File Addition (Import Model)

1. Open your slicing software (Cura or OrcaSlicer)
2. Click the **File Addition** button (📁 icon) to import your 3D model
3. Select files in **STL** or **3MF** format
4. The model will appear on the build plate

**Note**: You can import multiple files and arrange them on the build plate if needed.

### Step 2: Slicing (Generate G-code)

1. After successfully importing your model, click the **Slicing** button (⚙️ icon)
2. The software will process the model and generate G-code
3. Wait for slicing to complete
4. Review the preview to check print time, material usage, and layer-by-layer visualization

**Tips during slicing:**
- Check the estimated print time
- Review material usage estimate
- Examine the layer preview for potential issues
- Adjust settings if needed and re-slice

### Step 3: Export G-code File

1. Once slicing is complete, click the button to **Export G-code** (💾 icon)
2. You can modify the file name as needed (optional)
3. **Important**: Choose to save to your USB storage device
   - Insert USB storage into your computer
   - Select the USB drive as the save location
   - Save the G-code file

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

## Best Practices

### File Organization

- Organize files in folders by project name
- Keep backup copies of your G-code files on computer
- Name files descriptively (e.g., "widget_v2_0.2mm_PLA.gcode")

### USB Storage

- Use reliable USB storage devices (known brands recommended)
- Format USB storage as FAT32 for best compatibility
- Keep USB storage clean and organized
- Have multiple USB drives for different projects

### Before Printing

- Always preview the sliced model in software
- Check estimated print time and material usage
- Verify print settings are appropriate for your model
- Ensure build plate is clean and leveled (auto-leveling should handle this)

### During Printing

- Monitor the first layer closely
- Keep USB storage connected during printing
- Don't remove USB storage while printing is active
- Have backup plan if print fails

## Troubleshooting

### File Not Found

**Problem**: Printer doesn't see your G-code file

**Solutions**:
- Check USB storage is properly inserted
- Verify file is in root directory or accessible folder
- Ensure file extension is .gcode
- Format USB storage as FAT32
- Try a different USB storage device

### File Format Issues

**Problem**: File appears but won't print

**Solutions**:
- Verify file was properly sliced (not just renamed)
- Check file size (should be reasonable for model)
- Re-slice the model if needed
- Try exporting again from slicing software

### USB Storage Not Recognized

**Problem**: Printer doesn't detect USB storage

**Solutions**:
- Check USB port connection
- Try different USB storage device
- Format USB storage as FAT32 (32GB or smaller recommended)
- Ensure USB storage is not corrupted
- Power cycle printer and try again

### Print Fails to Start

**Problem**: File selected but printing doesn't begin

**Solutions**:
- Check printer is properly heated
- Verify auto-leveling has completed (if needed)
- Ensure no errors on display screen
- Check filament is loaded properly
- Verify build plate is clean

## Alternative: Network Printing

If you prefer to print directly from your computer without USB storage, you can use [Network Printing](/docs/usage/network-printing) instead.

## Tips for Success

1. **Test Print**: Start with a simple test model to verify everything works
2. **First Layer**: Always watch the first layer - it's critical for print success
3. **Temperature**: Ensure temperatures are correct for your material
4. **Material**: Check filament is loaded and flowing properly
5. **Backup**: Keep backup copies of important G-code files

---

**Related Topics**:
- [Software Installation](/docs/software/slicer-setup)
- [Network Printing](/docs/usage/network-printing)
- [Printing Best Practices](/docs/usage/best-practices)

