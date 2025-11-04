---
sidebar_position: 2
---

# Software Installation and Setup

Complete guide for installing and configuring slicing software for your Malyan M200 Ultra 3D printer.

## Compatible Slicing Software

The Malyan M200 Ultra is compatible with the following slicing software:

- **Cura** - Full support and compatibility
- **OrcaSlicer** - Full support with Malyan profiles

## Supported File Types

The printer supports the following 3D model file formats:
- **.OBJ** - Wavefront OBJ format
- **.STL** - Stereolithography format
- **.3MF** - 3D Manufacturing Format

Files are converted to G-code by the slicing software before printing.

## Software Installation

### OrcaSlicer-Malyan (Included Software)

The printer includes a USB storage device with **OrcaSlicer-Malyan** pre-installed, along with sample G-code files.

**To use OrcaSlicer-Malyan:**

1. Insert the included USB storage into your computer
2. Locate the OrcaSlicer-Malyan installer
3. Follow the installation instructions
4. The software comes pre-configured with Malyan M200 Ultra profiles

### Installing Cura

1. Download Cura from the official website
2. Install Cura following the standard installation process
3. Follow the configuration wizard (see below) to add Malyan M200 Ultra

### Installing OrcaSlicer

1. Download OrcaSlicer from the official repository
2. Install OrcaSlicer following installation instructions
3. Add Malyan M200 Ultra profile (configuration wizard similar to Cura)

## Configuration Wizard

When you first launch the slicing software, you'll be guided through a configuration wizard to set up your printer.

### Step 1: Welcome Screen

Click the **Continue** button to start the configuration process.

### Step 2: Region Selection

Select your corresponding region and click **Continue**.

### Step 3: Printer Selection

1. Enter **"Malyan"** in the search bar
2. Select **"Malyan M200-SE"** (or M200 Ultra if available)
3. Click **Continue** to proceed

**Note**: If "M200 Ultra" is not listed, select "M200-SE" as the base profile - they share similar specifications.

### Step 4: Material Selection

1. Choose the materials you plan to use:
   - PLA (recommended for beginners)
   - PETG
   - ABS
2. Select additional materials as needed
3. Click **Finish** to complete the configuration

### Step 5: Start Using Software

After configuration is complete:
- Click **New Project** to get started
- You can now load 3D model files and begin slicing

## Introduction to Menu Bar

The slicing software interface includes the following menu options:

### 1. Home
- Return to the homepage/main screen
- Access to recent projects and quick actions

### 2. Prepare
- Configure slicing parameters
- Adjust print settings
- Material and quality presets
- Printer settings configuration

### 3. Preview
- Preview the sliced graphic/model
- View layer-by-layer visualization
- Check estimated print time and material usage
- Analyze potential issues before printing

### 4. Device
- View the status of connected devices
- Monitor printer status
- Check connection status (USB/Network)
- View printer information

### 5. Project
- Customize project information
- Save and manage projects
- Project settings and metadata

### 6. Single Disc Slice
- Complete graphic/model slicing
- Generate G-code file from 3D model
- Process model with current settings

### 7. Export G-code File
- Export the sliced G-code file
- Save to USB storage or local drive
- File can be transferred to printer for printing

## Introduction to Parameters Bar

The parameters bar provides access to printer and material configuration:

### 1. Create, Select, and Delete Printers
- Add multiple printer profiles
- Switch between different printers
- Remove printer configurations

### 2. Configure Printer Parameters
- G-code configuration
- Fan configuration
- Printer-specific settings
- Motion parameters

### 3. Software Connection to Printer
- Connect to printer via USB
- Connect to printer via network (WLAN)
- Monitor printer status
- Send print jobs directly

### 4. Add or Remove Material Management
- Manage material profiles
- Create custom material profiles
- Delete unused materials

### 5. Add, Select, and Delete Material Types
- Choose material type (PLA, PETG, ABS)
- Create custom material profiles
- Delete materials from library

### 6. Configure Material Parameters
- **Nozzle Temperature**: Set optimal printing temperature
- **Heated Bed Temperature**: Configure bed temperature
- **Printing Speed**: Material-specific speed settings
- **Retraction Settings**: Filament retraction parameters

### 7. Global and Object Configuration
- Global print settings (affect entire model)
- Object-specific settings (per-model adjustments)
- Support material settings
- Object placement and scaling

### 8. Whether to Enter Advanced Parameter Configuration
- Access to advanced slicing parameters
- Fine-tune print quality settings
- Expert-level controls

### 9. Select Material Size
- Choose filament diameter (typically 1.75mm)
- Configure spool size
- Material length and weight

### 10. Save Current Process
- Save current slicing settings
- Create custom print profiles
- Save frequently used configurations

### 11. Search Saved Process
- Search for previously saved profiles
- Load saved configurations
- Manage print profiles library

### 12. Printer Parameters (Support and Object Configuration)
- Support material settings
- Object placement and orientation
- Build plate adhesion settings
- Advanced support configuration

## Recommended Settings

### For PLA
- **Nozzle Temperature**: 190-210°C
- **Bed Temperature**: 50-60°C
- **Print Speed**: 40-80mm/s (adjust based on quality needs)
- **Layer Height**: 0.2mm (standard quality)

### For PETG
- **Nozzle Temperature**: 220-240°C
- **Bed Temperature**: 70-80°C
- **Print Speed**: 30-60mm/s
- **Layer Height**: 0.2-0.3mm

### For ABS
- **Nozzle Temperature**: 230-250°C
- **Bed Temperature**: 80-100°C
- **Print Speed**: 40-60mm/s
- **Layer Height**: 0.2-0.3mm
- **Note**: Requires good ventilation

## Tips for Best Results

1. **Use Presets**: Start with material-specific presets and adjust as needed
2. **First Layer**: Always check first layer settings - this is critical for adhesion
3. **Support Material**: Enable supports for overhangs greater than 45 degrees
4. **Layer Height**: Use 0.2mm for good balance of quality and speed
5. **Infill**: 15-25% is usually sufficient for most prints
6. **Brim/Raft**: Use brim for small parts, raft for better adhesion

## Troubleshooting Software Issues

### Printer Not Detected
- Check USB connection
- Verify network connection (if using WLAN)
- Restart software and printer
- Check printer is powered on

### Slicing Errors
- Check model for errors (use mesh repair tools)
- Verify model scale and orientation
- Ensure support material is properly configured
- Check printer build volume limits (180×180×180mm)

### Profile Issues
- Re-run configuration wizard
- Download latest printer profiles
- Create custom profile based on specifications

---

**Next Steps**: After software installation, proceed to:
- [Print from USB Storage](/docs/usage/usb-printing)
- [Print from Network Connection](/docs/usage/network-printing)

