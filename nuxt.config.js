export default {

    target: 'static',

    mode: 'spa',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [{
            charset: 'utf-8'
        },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: './favicon.ico'
        }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: '#597CC7'
    },
    /*
     ** Global CSS
     */
    css: [
        'normalize.css',
        '~/assets/css/global-styles.css'
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [{
        src: "~/plugins/highcharts.js",
        ssr: true
    },

        {
            src: "~/plugins/iconify.js",
            ssr: true
        },

    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth',
        'nuxt-webfontloader'
    ],
    axios: {
        baseURL: 'http://185.6.25.155',
        // proxy: true,
        proxy: false,
    },
    router: {
        //middleware: ['auth'],
    },
    auth: {
        localStorage: false,
        cookie: {
            options: {
                expires: 7,
            }
        },
        strategies: {
            local: {
                endpoints: {
                    login: {url: '/user/login/', method: 'post', propertyName: 'token'},
                    logout: {url: '/user/logout/', method: 'post'},
                    user: {url: '/api/Users/', method: 'get', propertyName: false,}
                },
                tokenRequired: true,
                // tokenType: 'bearer',
                tokenType: 'Token',
                globalToken: true,
                autoFetchUser: true
            }
        },
        redirect: {
            login: '/login',
            logout: '/login',
            callback: '/login',
            home: '/',
        },
        plugins: ['~/plugins/auth.js']
    },
    proxy: {
        '/user/': 'http://77.220.212.211:8000',
        '/api/Users/': 'http://77.220.212.211:8000',
        '/api/': 'http://185.6.25.155',
    },

    webfontloader: {
        events: false,
        google: {
            families: ['Montserrat:400,500,600:cyrillic&display=swap']
        },
        timeout: 5000
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
        }
    },
    generate: {
        dir: 'dist'
    }
}
