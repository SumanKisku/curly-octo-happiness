import Header from './Header'

function Item() {
    return (
        <div>
            <Header />
            {/* img */}
            <div className="p-2 text-white">
                <h3>Details Page For Post with ID: {}</h3>
                <img className="mb-2 rounded-2xl" src={} alt="" />
                <h3>User ID: {}</h3>
                <h2>Title: {}</h2>
                <p>Body: {}</p>
            </div>
        </div>
    )
}