const {src, dest, series, parallel} = require('gulp');
const del = require('del');
const fs = require('fs');
const zip = require('gulp-zip');
const log = require('fancy-log');
const exec = require('child_process').exec;

const paths = {
    prod_build: 'production_build',
    angular_src: 'src',
    angular_dist: 'dist',
    zipped_file_name: 'productionBuild.zip'
};

function clean() {
    log('removing the old files in the directory');
    del('production_build', {force: true});
    return del('dist', {force: true});
}

function createProdBuildDirectory() {
    const dir = paths.prod_build;
    log(`Creating the directory if not exist  ${dir}`);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
        log('📁  folder created:', dir);
    }

    return Promise.resolve('the value is ignored');
}

function buildAngular(cb) {
    log('building Angular code into the directory');
    return exec('ng build', function (err, stdout, stderr) {
        log(stdout);
        log(stderr);
        cb(err);
    })
}

function copyAngularBuild() {
    log('copying Angular Build into the directory');
    return src(`${paths.angular_dist}/**`)
        .pipe(dest(`${paths.prod_build}`));
}

function zippingProductionBuild() {
    log('Zipping the production_build directory ');
    return src(`${paths.prod_build}`)
        .pipe(zip(`${paths.zipped_file_name}`));
}

exports.default = series(
    clean,
    createProdBuildDirectory,
    buildAngular,
    copyAngularBuild,
    zippingProductionBuild
);

