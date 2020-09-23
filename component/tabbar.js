Vue.component('tabbar', {
    template:
        `
            <van-tabbar v-model="active" @change="tabbarChange">
                <van-tabbar-item icon="home-o">标签</van-tabbar-item>
                <van-tabbar-item icon="search">标签</van-tabbar-item>
                <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
                <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
            </van-tabbar>
        `,
    props: ['active'],
    data() {
        return {

        }
    },
    methods: {
        tabbarChange(e) {
            this.$emit('tabbar', e)
        }
    }
});