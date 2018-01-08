const {app, BrowserWindow} = require('electron');

let mainWindow;
let serverProcess;

function createWindow() {
    let platform = process.platform;

    if (platform === 'win32') {
        serverProcess = require('child_process')
            .spawn('java.exe', ['-jar', 'app.jar'],
                {
                    cwd: app.getAppPath()
                });
    } else {
        serverProcess = require('child_process')
            .spawn('java', ['-jar', 'app.jar'],
                {
                    cwd: app.getAppPath()
                });
    }

    if (!serverProcess) {
        console.error('Unable to start server from ' + app.getAppPath());
        app.quit();
        return;
    }

    serverProcess.stdout.on('data', function (data) {
        console.log('Server: ' + data);
    });

    console.log("Server PID: " + serverProcess.pid);

    let appUrl = 'http://localhost:30550/app';

    const openWindow = function () {
        mainWindow = new BrowserWindow({
            title: 'Demo',
            width: 1280,
            height: 800
        });

        mainWindow.loadURL(appUrl);
        // mainWindow.webContents.openDevTools();

        mainWindow.on('closed', function () {
            mainWindow = null;
        });

        mainWindow.on('close', function (e) {
            if (serverProcess) {
                e.preventDefault();

                // kill Java executable
                const kill = require('tree-kill');
                kill(serverProcess.pid, 'SIGTERM', function () {
                    console.log('Server process killed');

                    serverProcess = null;

                    mainWindow.close();

                    app.quit();
                });
            }
        });
    };

    const startUp = function () {
        const requestPromise = require('minimal-request-promise');

        requestPromise.get(appUrl).then(function (response) {
            console.log('Server started!');
            openWindow();
        }, function (response) {
            console.log('Waiting for the server start... ' + response);

            setTimeout(function () {
                startUp();
            }, 200);
        });
    };

    startUp();
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
});