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
const useGetFilm = ({film}) => {
    return useQuery(film, async () => {
            return fetch(`https://swapi.dev/api/films?search=${film}`)
                .then(res => res.json());
        },
        {},
    );
};

// поиск по введенному в инпут значению
const SearchFilm = ({film}) => {
    const {
        data: {results = []} = {},
        isLoading,
        error,
        isError,
        isFetching
    } = useGetFilm(film);

    return (
        <div>
            {isLoading
                ? "Loading..."
                : isError
                    ? error.message
                    : results.map(film => {
                        return (
                            <div key={film.title}>
                                {film.title}
                            </div>);
                    })}
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