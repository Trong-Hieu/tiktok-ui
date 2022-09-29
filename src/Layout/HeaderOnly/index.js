import Heading from '~/Components/Heading'

function HeaderOnly({ children }) {
    return (
        <div>
            <Heading />
            <div className="container">
                <div className="contain">{children}</div>
            </div>
        </div>
    )
}

export default HeaderOnly
