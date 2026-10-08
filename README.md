# Smart Utility Toolkit

Simple Node.js scripts built using only core modules (process, http, fs, crypto).
No external packages needed.

## Files
- `calculator.js` – CLI calculator using process.argv
- `modules/isEven.js` – custom module to check even/odd numbers
- `modules/logger.js` – custom module to log messages with timestamps
- `app.js` – shows how the custom modules are reused
- `server.js` – basic HTTP server with routes (/, /about, /contact)
- `fileManager.js` – create, read, update, delete a text file using fs
- `dice.js` – random dice roll generator using crypto

## How to run each file

```bash
# 1. Calculator
node calculator.js add 10 5
node calculator.js sub 10 5
node calculator.js mul 10 5
node calculator.js div 10 5

# 2. Custom module demo
node app.js

# 3. HTTP server (open browser after running)
node server.js
# visit http://localhost:3000/
# visit http://localhost:3000/about
# visit http://localhost:3000/contact

# 4. File manager
node fileManager.js

# 5. Dice roller
node dice.js
```

No installation needed — just Node.js.
# Web-Dev_Sem-3
