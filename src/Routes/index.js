import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Upload from '~/pages/Upload'
import Profiled from '~/pages/Profiled'
import HeaderOnly from '~/Layout/HeaderOnly'

import routesConfig from '~/Config/routes'

const pubLicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.profiled, component: Profiled, layout: HeaderOnly },
]

const privateRotes = []

export { pubLicRoutes, privateRotes }
