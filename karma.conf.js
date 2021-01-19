module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('@angular-devkit/build-angular/plugins/karma'),
            'karma-spec-reporter',
            "karma-parallel"
        ],
        parallelOptions: {
            executors: (Math.min(2, Math.ceil(require('os').cpus().length / 2))),
            shardStrategy: 'round-robin'
        },
        customLaunchers: {
            ChromeHeadless: {
                base: 'Chrome',
                flags: [
                    '--no-sandbox',
                    '--disable-gpu',
                    '--headless',
                    '--remote-debugging-port=9222'
                ]
            }
        },
        specReporter: {
            maxLogLines: 10,             // limit number of lines logged per test
            suppressErrorSummary: false, // do not print error summary
            suppressFailed: false,      // do not print information about failed tests
            suppressPassed: false,      // do not print information about passed tests
            suppressSkipped: true,      // do not print information about skipped tests
            showSpecTiming: true,      // print the time elapsed for each spec
            failFast: false              // test would finish with error when a first fail occurs.
        },
        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        coverageIstanbulReporter: {
            dir: require('path').join(__dirname, './coverage/app'),
            reports: ['html', 'lcovonly', 'text-summary'],
            fixWebpackSourcePaths: true
        },
        reporters: ['spec', 'kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['ChromeHeadless'],
        singleRun: true,
        restartOnFileChange: true
    });
};
