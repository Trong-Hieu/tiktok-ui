import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Upload from '~/pages/Upload'
import Profiled from '~/pages/Profiled'
import HeaderOnly from '~/Layout/HeaderOnly'

const pubLicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/@:nickname', component: Profiled, layout: HeaderOnly },
]

const privateRotes = []

export { pubLicRoutes, privateRotes }
