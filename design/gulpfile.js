var syntax = 'sass', // Syntax: sass or scss;
    gulpversion = '4'; // Gulp version: 3 or 4

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cleancss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require('gulp-notify'),
    rsync = require('gulp-rsync'),
    del = require('del'),
    pug = require('gulp-pug'),
    imagemin = require('gulp-imagemin');

gulp.task('pug', function() {
    return gulp.src('app/pug/pages/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('app/'))
        .pipe(browserSync.reload({stream: true}))
});

// удаляем все из папки dest
gulp.task('clean', () => {
    return del('dist');
});

//очистка кэша
gulp.task('clear', function() {
    return cache.clearAll();
});
//сжатие изображений

gulp.task('img', function() {
    return gulp.src('app/img/**/*')
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.jpegtran({ progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: true },
                    { cleanupIDs: false }
                ]
            })
        ]))
        .pipe(gulp.dest('app/img/'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: 'app/'
        }, 
        notify: false,
        // open: false,
        // online: false, // Work Offline Without Internet Connection
        // tunnel: true, tunnel: "projectname", // Demonstration page: http://projectname.localtunnel.me
    })
});

gulp.task('styles', function() {
    return gulp.src('app/' + syntax + '/**/*.' + syntax + '')
        .pipe(sass( /*{ outputStyle: 'expanded' }*/ ).on("error", notify.onError()))
        .pipe(rename({ suffix: '.min', prefix: '' }))
        .pipe(autoprefixer(['last 10 versions']))
        //.pipe(cleancss({ level: { 1: { specialComments: 0 } } })) // Opt., comment out when debugging
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});


gulp.task('scripts', function() {
	//библиотеки
   
    return gulp.src(['app/blocks/**/*.js'])
      .pipe(concat('main.js'))
     // .pipe(uglify())
      .pipe(gulp.dest('app/js'))
      .pipe(browserSync.reload({stream: true}))
 


});


gulp.task('code', function() {
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({ stream: true }))
});
gulp.task('js', function() {
    return gulp.src('app/*.js')
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('rsync', function() {
    return gulp.src('app/**')
        .pipe(rsync({
            root: 'app/',
            hostname: 'username@yousite.com',
            destination: 'yousite/public_html/',
            // include: ['*.htaccess'], // Includes files to deploy
            exclude: ['**/Thumbs.db', '**/*.DS_Store'], // Excludes files from deploy
            recursive: true,
            archive: true,
            silent: false,
            compress: true
        }))
});

//строим сайт

gulp.task('watch', function() {
    gulp.watch(['app/' + syntax + '/**/*.' + syntax + '', 'app/blocks/**/*.' + syntax + ''], gulp.parallel('styles'));
    gulp.watch(['libs/**/*.js', 'app/blocks/**/*.js' ], gulp.parallel('scripts'));
    gulp.watch('app/*.html', gulp.parallel('code'));
    gulp.watch(['app/pug/**/*.pug', 'app/blocks/**/*.pug'], gulp.parallel('pug'));
   
    
});
gulp.task('default', gulp.parallel('pug', 'styles', 'scripts', 'browser-sync', 'watch'));

gulp.task('build', function() {

    gulp.series('clean', 'styles', 'scripts', 'pug')

    var buildCss = gulp.src([
            'app/css/main.min.css',
        ])
        .pipe(gulp.dest('dist/css'));

    var buildImages = gulp.src([
            'app/img/**/*',
        ])
        .pipe(gulp.dest('dist/img'));
    

    var buldFonts = gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));

    var buildJs = gulp.src('app/js/**/*')
        .pipe(gulp.dest('dist/js'));

    var buildHtml = gulp.src('app/*.html')
        .pipe(gulp.dest('dist'));

		
    return buildHtml;
    //отдельно запустить в консоли gulp img
	
});