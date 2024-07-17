import axios from "axios";
import { useEffect, useState } from "react";

const Card = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const res = await axios.get("https://dummyapi.online/api/movies");
                setData(res.data);
            }
            catch(err) {
                console.log(err);
            }
        }
        fetchData();
    }, [])
    return (
        <>
            <div className="cards">

            {
                data.map((movie) => (
                    <section key={movie.id} >

                        <div className="card">
                            
                            <img src={movie.image} alt="" />
                            <div>{movie.movie}</div>
                            <div>Rating: {movie.rating}</div>
                            <div><a className="cl" href={movie.imdb_url} target="_blank">IMDB</a></div>
                        </div>
                    </section>
                ))
            }
            </div>
        </>
    )
}

export default Card;