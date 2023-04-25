import React from "react";
import {useQuery, useQueryClient} from "react-query";

const useGetFilm = (url) => {
    const queryClient = useQueryClient();

    const {data} = useQuery(["film", url], () =>
        new Promise((resolve) => setTimeout(resolve, 2000))
            .then(() =>
                fetch(url)
                    .then((res) => res.json())
            ), {
        // getQueryData -- на вход принимает ключ который хотим вытащить
        // увидим наши фильмы быстрее чем подгрузится сама страница начальное значение
        // пользователь сразу данные увидит!
        // инишлДата не является читстым кодом - каждый раз итерауии делать придется..проходить по всему кешу искать фильм и отрисовывать его
        initialData: queryClient.getQueryData("films")?.results?.find(film => film.url === url)
    });

    return {data};
};

const FilmPAge = ({url}) => {
    const {data, isLoading, isFetching} = useGetFilm(url);

    return isLoading
        ? <div>"Загрузка..."</div>
        :
        <>
            <div>
                <h1>{data?.title}</h1>
                <span>
                <strong>episode: </strong>
                    {data?.episode_id}
            </span>
                <strong>description:</strong>
                <p>{data?.opening_crawl}</p>
            </div>
            {isFetching ? "Обновление..." : null}
        </>;
};

export default FilmPAge;