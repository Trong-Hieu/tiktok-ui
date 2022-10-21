import config from '~/Config'

import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Upload from '~/pages/Upload'
import Profiled from '~/pages/Profiled'
import Live from '~/pages/Live'
import Login from '~/Components/LoginRegister/Item/ListItems'
import LoginWithQr from '~/Components/LoginRegister/LoginWithQr'
import LoginWithEmail from '~/Components/LoginRegister/LoginWithUserOrPhone/loginWithEmail'
import LoginWithPhone from '~/Components/LoginRegister/LoginWithUserOrPhone/loginWithPhone'

import HeaderOnly from '~/Layout/HeaderOnly'
import LoginLayout from '~/Layout/LoginLayout'

const pubLicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.profiled, component: Profiled },
    { path: config.routes.live, component: Live },
    { path: config.routes.login, component: Login, layout: LoginLayout },
    { path: config.routes.loginByQr, component: LoginWithQr, layout: LoginLayout },
    { path: config.routes.loginByEmail, component: LoginWithEmail, layout: LoginLayout },
    { path: config.routes.loginByPhone, component: LoginWithPhone, layout: LoginLayout },
]

const privateRotes = []

export { pubLicRoutes, privateRotes }
