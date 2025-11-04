---
sidebar_position: 1
---

# Firmware Information

Learn about firmware for the Malyan M200 Ultra, including updates, versions, and customization options.

## Current Firmware

### Latest Version
- **Version**: v2.0.1
- **Release Date**: 2024-01-15
- **Type**: Marlin-based firmware
- **Status**: Stable release

### Firmware Features
- Marlin 2.x based
- Thermal runaway protection
- Power loss recovery
- Baby stepping (Z-offset adjustment)
- Advanced pause/resume
- Filament runout detection (if sensor installed)
- Auto bed leveling support (if probe installed)

## Checking Your Firmware Version

### On the Printer
1. Navigate to: **About** or **Settings > About**
2. View firmware version on LCD screen
3. Note the version number and build date

### Via USB/Serial
1. Connect printer via USB
2. Open terminal/console (115200 baud)
3. Send `M115` command
4. Firmware info will be displayed

## Updating Firmware

### Prerequisites
- SD card formatted to FAT32
- Latest firmware file (.bin or .hex)
- Computer with SD card reader
- Power supply connected

### Update Process (via SD Card)

1. **Download Firmware**
   - Get latest firmware from [Downloads](/docs/downloads)
   - Verify file integrity
   - Ensure file matches your printer model

2. **Prepare SD Card**
   - Format SD card to FAT32 (if needed)
   - Ensure card is empty or backup contents
   - Rename firmware file to `firmware.bin` (or keep original name)

3. **Install Firmware**
   - Copy firmware file to root of SD card
   - Eject SD card safely
   - Insert SD card into printer
   - Power on printer

4. **Wait for Update**
   - LCD will show update progress
   - Do NOT power off during update
   - Update typically takes 1-2 minutes
   - Printer will restart automatically

5. **Verify Update**
   - Check version in About menu
   - Test basic functions
   - Verify settings are retained

### Update Process (via USB - Advanced)

⚠️ **Advanced users only** - Requires specific tools and knowledge

1. Install flashing software (Arduino IDE, PlatformIO, or dedicated flasher)
2. Connect via USB
3. Enter bootloader mode (varies by board)
4. Flash firmware
5. Verify installation

## Firmware Customization

### Customizing Settings

Many firmware settings can be adjusted via:

1. **EEPROM Settings**
   ```
   Control > Store Memory
   ```
   Saves current settings

2. **Via G-code**
   - Connect via USB
   - Send configuration commands
   - Store to EEPROM

3. **Firmware Recompilation**
   - Download firmware source
   - Modify configuration files
   - Recompile and flash
   - ⚠️ Advanced users only

### Common Customizations
- PID tuning values
- Steps per mm calibration
- Temperature limits
- Acceleration/jerk settings
- Endstop configuration
- Display language

## Troubleshooting Firmware

### Update Failed
- **Symptom**: Firmware won't update
- **Solutions**:
  - Reformat SD card (FAT32, 32GB or less)
  - Rename firmware file
  - Try different SD card
  - Check file size and integrity

### Settings Lost After Update
- **Symptom**: Settings reset after update
- **Solutions**:
  - Reconfigure settings manually
  - Restore from backup (if available)
  - Some updates reset EEPROM (normal)

### Firmware Errors
- **Symptom**: Error messages or crashes
- **Solutions**:
  - Revert to previous version
  - Check firmware compatibility
  - Contact support with error details

## Firmware History

### Version History

#### v2.0.1 (Current)
- Improved thermal management
- Bug fixes
- Enhanced stability

#### v2.0.0
- Major version update
- New features added
- UI improvements

#### v1.9.5
- Previous stable version
- Still supported

## Safety Notes

⚠️ **Important**
- Always backup settings before updating
- Never power off during firmware update
- Verify firmware matches your printer model
- Test all functions after update
- Keep previous firmware file as backup

## Advanced: Building Custom Firmware

For advanced users wanting to build custom firmware:

1. **Requirements**
   - Marlin firmware source
   - Arduino IDE or PlatformIO
   - Board-specific configuration
   - Compiler knowledge

2. **Configuration**
   - Edit `Configuration.h`
   - Edit `Configuration_adv.h`
   - Set correct board type
   - Configure features

3. **Compilation**
   - Compile in IDE
   - Verify no errors
   - Generate firmware file

4. **Installation**
   - Flash to printer
   - Test thoroughly
   - Document changes

---

**Note**: Firmware updates should be done carefully. Always verify you have the correct firmware for your specific printer model. When in doubt, contact support before updating.

