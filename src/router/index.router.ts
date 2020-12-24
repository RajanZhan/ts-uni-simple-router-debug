import { RouterMount, createRouter } from 'uni-simple-router';
const router = createRouter({
    platform: process.env.VUE_APP_PLATFORM,
    keepUniOriginNav: false,
    routes: [...ROUTES]
});

router.beforeEach((to, from, next) => {
	next();
});
router.afterEach((to, from) => {
    console.log('跳转结束')
})
export {
    router,
    RouterMount
}
