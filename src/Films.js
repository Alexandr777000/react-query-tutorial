import React, {useState} from "react";
import {useQuery} from "react-query";

const Films = ({queryKey}) => {
    const {
        data: {results = []} = {},
        isLoading,
        isError,
        error,
        // теперь есть индикатор на экране когда данные обновляются
        isFetching,
    } = useQuery(queryKey, async () => {
            return fetch("https://swapi.dev/api/films").then(res => res.json());
        },
        {

        },
    );

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