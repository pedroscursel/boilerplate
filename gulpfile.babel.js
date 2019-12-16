import critical from 'critical'
import babelify from 'babelify'
import browserSync from 'browser-sync'
import browserify from 'browserify'
import buffer from 'vinyl-buffer'
import gulp from 'gulp'
import plugins from 'gulp-load-plugins'
import source from 'vinyl-source-stream'
import minifyCSS from 'gulp-minify-css'


/* ----------------- */
/* Development
/* ----------------- */
gulp.task('development', ['scripts', 'styles'], () => {
    browserSync({
        'server': './',
        'snippetOptions': {
            'rule': {
                'match': /<\/body>/i,
                'fn': (snippet) => snippet
            }
        }
    })
    gulp.watch('./scss/**/*.scss', ['styles'])
    gulp.watch('./scripts/**/*.js', ['scripts'])
    gulp.watch('./*.html', browserSync.reload)
})


/* ----------------- */
/* Scripts
/* ----------------- */
gulp.task('scripts', () => {
    return browserify({
        'entries': ['./scripts/scripts.js'],
        'debug': true,
        'transform': [
            babelify.configure({
                'presets': ['es2015', 'react']
            })
        ]
    })
    .bundle()
    .on('error', function () {
        var args = Array.prototype.slice.call(arguments)
        plugins().notify.onError({
            'title': 'Compile Error',
            'message': '<%= error.message %>'
        }).apply(this, args);
        this.emit('end');
    })
    .pipe(source('scripts.js'))
    .pipe(buffer())
    .pipe(plugins().sourcemaps.init({'loadMaps': true}))
    .pipe(plugins().sourcemaps.write('.'))
    .pipe(gulp.dest('./js/'))
    .pipe(browserSync.stream())
})


/* ----------------- */
/* Styles
/* ----------------- */
gulp.task('styles', () => {
    return gulp.src('./scss/**/*.scss')
    .pipe(plugins().sourcemaps.init())
    .pipe(plugins().sass().on('error', plugins().sass.logError))
    .pipe(plugins().sourcemaps.write())
    .pipe(gulp.dest('./css/'))
    .pipe(browserSync.stream())
})


/* ----------------- */
/* HTML
/* ----------------- */
gulp.task('html', ['cssmin'], () => {
    return gulp.src('./*.html')
    .pipe(critical.stream({
        'base': 'build/',
        'inline': true,
        'extract': false,
        'minify': true,
        'css': ['./css/style.css']
    }))
    .pipe(gulp.dest('./'))
})


/* ----------------- */
/* Cssmin
/* ----------------- */
gulp.task('cssmin', () => {
    return gulp.src('./scss/**/*.scss')
    .pipe(plugins().sass({
        'outputStyle': 'compressed'
    }).on('error', plugins().sass.logError))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./css/'))
})


/* ----------------- */
/* Jsmin
/* ----------------- */
gulp.task('jsmin', () => {
    
    var envs = plugins().env.set({
        'NODE_ENV': 'production'
    })

    return browserify({
        'entries': ['./js/scripts.js'],
        'debug': false,
        'transform': [
            babelify.configure({
                'presets': ['es2015', 'react']
            })
        ]
    })
    .bundle()
    .pipe(source('scripts.js'))
    .pipe(envs)
    .pipe(buffer())
    .pipe(plugins().uglify())
    .pipe(envs.reset)
    .pipe(gulp.dest('./js/'))
})

/* ----------------- */
/* Taks
/* ----------------- */
gulp.task('default', ['development'])
gulp.task('deploy', ['html', 'jsmin'])