# Node.js Installation Guide

## Installing Node.js on Different Operating Systems

### Windows
1. Download the latest **Node.js** installer from the [official website](https://nodejs.org/).
2. Run the installer and follow the setup instructions.
3. Ensure the option **"Add to PATH"** is checked.
4. After installation, verify by running:
   ```sh
   node -v
   npm -v
   ```

### macOS
1. Install **Homebrew** if not already installed:
   ```sh
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
2. Install Node.js using Homebrew:
   ```sh
   brew install node
   ```
3. Verify installation:
   ```sh
   node -v
   npm -v
   ```

### Linux (Ubuntu/Debian)
1. Update the package list:
   ```sh
   sudo apt update
   sudo apt upgrade
   ```
2. Install Node.js and npm:
   ```sh
   sudo apt install nodejs npm
   ```
3. Verify installation:
   ```sh
   node -v
   npm -v
   ```

### Installing Node.js Using NVM (Recommended)
**NVM (Node Version Manager)** allows switching between different Node.js versions easily.

1. Install NVM:
   ```sh
   curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
   ```
2. Restart your terminal or reload shell config:
   ```sh
   source ~/.bashrc  # or ~/.zshrc if using zsh
   ```
3. Install Node.js:
   ```sh
   nvm install node
   ```
4. Verify installation:
   ```sh
   node -v
   npm -v
   ```

## Checking Node.js and npm Versions
To confirm that Node.js and npm are installed correctly, use:
```sh
node -v  # Displays Node.js version
npm -v   # Displays npm version
```

## Updating Node.js
To update Node.js to the latest version:
- **Using NVM:**
  ```sh
  nvm install node
  nvm use node
  ```
- **Using Windows/macOS/Linux installers:** Download and install the latest version from [Node.js Official Site](https://nodejs.org/).

## Uninstalling Node.js
- **Windows:** Uninstall via **Control Panel > Programs > Uninstall a Program**.
- **macOS (if installed via Homebrew):**
  ```sh
  brew uninstall node
  ```
- **Linux:**
  ```sh
  sudo apt remove nodejs npm
  ```

After installation, you are ready to start building applications with Node.js!

