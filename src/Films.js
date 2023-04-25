import React, {useState} from "react";
import FilmPAge from "./FilmPAge";
import {useQuery} from "react-query";

const useGetFilms = () => {
    const {data} = useQuery(["films"], () =>
        fetch("https://swapi.dev/api/films").then(res => res.json())
    );
    return {data};
};

export const Films = ({queryKey}) => {
    const [filmUrl, setFilmUrl] = useState("");

    const {data: {results = []} = {}} = useGetFilms();
    console.log(results);

    return filmUrl
        ? (<>
                {/*сбросим на урл*/}
                <button onClick={ () => setFilmUrl('')}>back</button>
                <FilmPAge url={filmUrl}/>
            </>
        )
        : <ul>{results.map(film => {
            return (
                <li key={film.url}>
                    <strong>Film: </strong>
                    <a href="#" onClick={() => setFilmUrl(film.url)}>
                        {film.title}
                    </a>
                </li>
            );
        })}</ul>;
};

/*


 */