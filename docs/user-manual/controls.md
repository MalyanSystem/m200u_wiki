---
sidebar_position: 4
---

# Controls and Interface

Learn how to use the Malyan M200 Ultra control panel and interface.

## Control Panel Overview

The Malyan M200 Ultra features an **OLED Capacitive Touchscreen** for modern, intuitive navigation and control.


## Display Screen Menu

The OLED touchscreen displays the following main interface elements:

### Home Screen Display

1. **Home** - Main menu navigation
2. **Operation Functions** - Printer control and operations
3. **File Management** - File selection and printing
4. **Settings** - Configuration and adjustments
5. **IP Display** - Displayed when Wi-Fi connection is successful (shows IP address)
6. **Extruder Head Temperature** - Current nozzle temperature display
7. **Heated Bed Temperature** - Current bed temperature display
8. **Crash-stop** - Control printer to stop
<img id="menu-image" src="/img/menu.png" />
### Operation Functions Menu

1. **Retraction** - Filament retraction control
2. **Motor Switch** - Enable/disable motors
3. **Extrusion** - Filament feeding control
4. **Movement and Return to Origin Function** - Axis movement and homing
5. **Heated Bed Height Setting** - Bed Z-height adjustment
6. **Height Movement Distance Setting** - Fine Z-axis movement control
<img id="menu2-image" src="/img/menu2.png" />
### Settings Menu

1. **Extruder Head Temperature Setting** - Configure nozzle temperature
2. **Heated Bed Temperature Setting** - Configure bed temperature
3. **Speed Setting** - Adjust print speed
4. **Partial Fan Settings** - Part cooling fan control
5. **Material Feeding** - Load filament
6. **Material Retraction** - Unload filament
<img id="menu3-image" src="/img/menu3.png" />

## Common Operations

### Preparing to Print

1. **Auto Leveling** (Automatic)
   - The printer features automatic bed leveling
   - Access via Operation Functions > Movement and Return to Origin
   - The system will automatically level the build plate

2. **Preheat Nozzle and Bed**
   - Navigate to Settings > Extruder Head Temperature Setting
   - Navigate to Settings > Heated Bed Temperature Setting
   - Set appropriate temperatures for your material (PLA/PETG/ABS)

3. **Load Filament**
   - Navigate to Settings > Material Feeding
   - Follow on-screen prompts to load filament
   - Ensure extruder is preheated to appropriate temperature

### Starting a Print

1. **From USB Storage**
   - Navigate to File Management
   - Select your G-code file from USB storage
   - Tap to start printing

2. **From Network (WLAN)**
   - Ensure Wi-Fi is connected (IP address displayed on home screen)
   - Files can be sent from software over network
   - Print status visible on display screen

3. **Monitor Print**
   - View progress on OLED display
   - Temperature displays (Extruder Head and Heated Bed)
   - Real-time status updates

4. **Pause/Resume**
   - Available during printing via Operation Functions
   - Access controls through touchscreen interface

### Adjusting Settings During Print

1. **Temperature Adjustment**
   - Navigate to Settings > Extruder Head Temperature Setting
   - Navigate to Settings > Heated Bed Temperature Setting
   - Adjust temperature values as needed
   - ⚠️ **Caution**: Only make small adjustments during printing

2. **Speed Adjustment**
   - Navigate to Settings > Speed Setting
   - Adjust print speed as needed
   - Monitor print quality when changing speed

3. **Fan Control**
   - Navigate to Settings > Partial Fan Settings (part cooling)
   - Navigate to Settings > Exhaust Fan Settings (ventilation)
   - Adjust fan speeds based on material and print requirements

## Control Menu Details

### Temperature Menu

```
Control > Temperature
├── Hotend (Nozzle)
│   ├── Current: 200°C
│   └── Set: [Adjust]
├── Bed
│   ├── Current: 60°C
│   └── Set: [Adjust]
└── Fan Speed: [Adjust]
```

### Motion Menu

```
Control > Motion
├── Acceleration: [Value]
├── Jerk: [Value]
├── Steps/mm: [Advanced]
└── Feedrate: [Print Speed %]
```

### Move Axis

```
Prepare > Move Axis
├── X-Axis: [+/- 1mm, 10mm, 100mm]
├── Y-Axis: [+/- 1mm, 10mm, 100mm]
├── Z-Axis: [+/- 0.1mm, 1mm, 10mm]
└── Extruder: [+/- 1mm, 10mm, 100mm]
```

## Status Screen

While printing, the OLED touchscreen displays:

- **Extruder Head Temperature**: Current nozzle temperature (real-time)
- **Heated Bed Temperature**: Current bed temperature (real-time)
- **Print Progress**: Percentage complete and status
- **File Name**: Currently printing file name
- **IP Address**: Network IP (when Wi-Fi connected)
- **Operation Status**: Current printer operation state

## Important Controls

### Emergency Stop

- **Power Switch**: Turn off immediately in emergency
- **Touchscreen Pause**: Pause print via Operation Functions menu
- **Immediate Stop**: Use power switch for immediate emergency stop

### Motor Control

- Navigate to Operation Functions > Motor Switch
- Enable/disable motors as needed
- Useful for manual adjustments and maintenance

### Movement Controls

- **Movement and Return to Origin**: 
  - Access via Operation Functions menu
  - Manual axis movement
  - Home all axes

- **Height Movement Distance Setting**:
  - Fine Z-axis adjustments
  - Precise height control for bed leveling

- **Heated Bed Height Setting**:
  - Adjust bed Z-offset
  - Fine-tune first layer height

## Advanced Controls

### Filament Management

- **Material Feeding** (Settings menu):
  - Load new filament
  - Feed filament through extruder
  - Ensure proper loading

- **Material Retraction** (Settings menu):
  - Unload filament
  - Retract filament for color/material changes

- **Retraction** (Operation Functions):
  - Control retraction during printing
  - Adjust retraction settings

### Network Connection

- **Wi-Fi Setup**: Access WLAN settings to connect to network
- **IP Display**: Home screen shows IP address when connected
- **Network Printing**: Print files sent over network connection

## Tips and Tricks

### Quick Operations
- **Auto Leveling**: Use automatic bed leveling feature - no manual adjustment needed
- **Temperature Settings**: Configure material-specific temperatures in Settings menu
- **Touchscreen Navigation**: Tap directly on menu items for faster navigation

### Filament Loading Workflow
1. Navigate to Settings > Extruder Head Temperature Setting
2. Set appropriate temperature for your material
3. Wait for preheating
4. Navigate to Settings > Material Feeding
5. Follow on-screen prompts to load filament
6. Watch for steady flow from nozzle

### Network Printing Setup
1. Navigate to Settings (WLAN functionality)
2. Connect to your local network
3. Note the IP address displayed on home screen
4. Use this IP address in your slicing software
5. Send prints directly from software to printer

### Monitoring Prints
- **Temperature Display**: Monitor both extruder and bed temperatures on home screen
- **First Layer Watch**: Always monitor the first layer closely
- **Touchscreen Access**: Easy access to pause/resume during printing
- **Network Monitoring**: Monitor prints remotely when connected via WLAN

## Troubleshooting Controls

### Touchscreen Issues
- **Unresponsive Touch**: 
  - Clean screen with soft, lint-free cloth
  - Power cycle the printer
  - Check for firmware updates

- **Blank Screen**: 
  - Check power connection
  - Verify power adapter is properly connected
  - Contact support if issue persists

- **Display Issues**:
  - Power cycle to reset display
  - Check connections
  - May need firmware update

### Navigation Problems
- **Menu Not Responding**: 
  - Clean touchscreen surface
  - Power cycle printer
  - Ensure screen is not obstructed

- **Stuck in Menu**: 
  - Power cycle to reset
  - Try returning to home screen
  - Check for firmware updates

### Network Connection Issues
- **Wi-Fi Not Connecting**:
  - Verify network credentials
  - Check signal strength
  - Ensure 2.4GHz network (if applicable)
  - Restart printer and router

- **IP Address Not Showing**:
  - Check Wi-Fi connection status
  - Reconnect to network
  - Verify router settings

---

**Note**: Control interface may vary slightly by firmware version. The OLED capacitive touchscreen provides intuitive control for all printer operations. For issues not covered here, refer to [Troubleshooting](/docs/troubleshooting/common-issues) or contact Malyan Customer Service.

