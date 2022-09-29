import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Upload from '~/pages/Upload'
import HeaderOnly from '~/Layout/HeaderOnly'

const pubLicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
]

const privateRotes = []

export { pubLicRoutes, privateRotes }
