import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { pubLicRoutes } from '~/Routes'
import DefaultLayout from './Layout/DefaultLayOut'
import { Fragment } from 'react'

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {pubLicRoutes.map((route, index) => {
                        const Page = route.component
                        let Layout = DefaultLayout

                        if (route.layout) Layout = route.layout
                        else if (route.layout === null) Layout = Fragment

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        )
                    })}
                </Routes>
            </div>
        </Router>
    )
}

export default App
