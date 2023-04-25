import React, {useState} from "react";
import {useQuery} from "react-query";

const useGetFilms = () => {
    return useQuery("films", async () => {
            return fetch("https://swapi.dev/api/films").then(res => res.json());
        },
        {},
    );
};

const FilmsLength = () => {
    const {data: {results = []} = {}, isLoading,} = useGetFilms();

    return isLoading
        ? "Loading..."
        : (<p>Количество фильмов: {results.length}</p>);
};

const Films = ({queryKey}) => {
    const {
        data: {results = []} = {}, isLoading, isError, error, isFetching,
    }
        = useGetFilms();

    return (
        <div>
            <FilmsLength/>
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
            <br/>
            {/*теперь есть индикатор на экране когда данные обновляются*/}
            {isFetching ? "Обновление..." : null}
        </div>
    );
};

export default Films;

/*
обернули в провайдер сделали запрос вывели в консоль осмотрели что пришло в data
 объекте нам
res.json() - тут все данные











 */