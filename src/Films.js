import React, {useState} from "react";
import {useQuery} from "react-query";

// фильмы
const useGetFilms = () => {
    return useQuery("films", async () => {
            return fetch("https://swapi.dev/api/films").then(res => res.json());
        },
        {},
    );
};

// один фильм
const useGetFilm = (film) => {
    // if (!film) return;

    return useQuery(film, async () => {
        return fetch(`https://swapi.dev/api/films/?search=${film}`)
            .then((res) => res.json());
    }, {
        // принимает булево значение только...
        enabled: !! film
    });
};

// поиск по введенному в инпут значению
const SearchFilm = ({film}) => {
    const {
        data: {results = []} = {},
        isLoading,
        error,
        isError,
        isFetching
    } = useGetFilms();

    const filteredFilms = results?.filter((f) =>
        f.title.toLowerCase().includes(film.toLowerCase())
    );

    return (
        <div>
            {isLoading ? (
                "Loading..."
            ) : isError ? (
                error.message
            ) : (
                filteredFilms.map((film) => {
                    return (
                        <div key={film.title}>
                            {film.title}
                        </div>
                    );
                })
            )}
            {isFetching ? "Обновление..." : null}
        </div>
    );
};

export const Films = ({queryKey}) => {
    const [film, setFilm] = useState("");

    return (
        <div>
            <input
                type={"text"}
                value={film}
                onChange={(e) => setFilm(e.target.value)}/>
            {/*прокинем наш фильм то что ввели в запрос*/}
            <SearchFilm film={film}/>
        </div>
    );
};

/*
обернули в провайдер сделали запрос вывели в консоль осмотрели что пришло в data
 объекте нам
res.json() - тут все данные











 */