import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Upload from '~/pages/Upload'
import Profiled from '~/pages/Profiled'
import HeaderOnly from '~/Layout/HeaderOnly'
import Live from '~/pages/Live'

import config from '~/Config'

const pubLicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.profiled, component: Profiled },
    { path: config.routes.live, component: Live },
]

const privateRotes = []

export { pubLicRoutes, privateRotes }
