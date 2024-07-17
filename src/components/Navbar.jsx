const Navbar = () => {
    return (
        <>
        <section className="navbar">
            <h1>Movies</h1>
                <ul>
                    <li>Popular Movies</li>
                    <li>Latest Movies</li>
                    <li>IMDB rated movies</li>
                </ul>
                <input type="text" id="search"/>
                <label htmlFor="search"><button>Search</button></label>
        </section>
        </>
    )
}

export default Navbar;