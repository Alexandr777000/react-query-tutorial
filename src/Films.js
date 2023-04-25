import React, {useState} from "react";
import FilmPAge from "./FilmPAge";
import {useQuery} from "react-query";
import {queryClient} from "./App";

const useGetFilms = () => {
    const {data: {results = []} = {}} = useQuery(["films"], () =>
        fetch("https://swapi.dev/api/films").then(res => res.json())
    );
    // инициализируем данные со старта страницы сразу из кеша
    // будем кешировать фильм - аналог инишл стейта
    results.forEach(film => queryClient.setQueryData(["films", film.url], film));
    return {results};
};

export const Films = ({queryKey}) => {
    const [filmUrl, setFilmUrl] = useState("");

    const {data: {results = []} = {}} = useGetFilms();
    // console.log(results);

    return filmUrl
        ? (<>
                {/*сбросим на урл*/}
                <button onClick={() => setFilmUrl("")}>back</button>
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
        })}}</ul>;
};

/*


 */