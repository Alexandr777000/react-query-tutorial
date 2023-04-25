import React from "react";
import {useQuery} from "react-query";

const Films = () => {
    const {
        data: {results = []} = {},
        isLoading,
        isError,
        // вытаскиваем нашу ошибку текстовую
        error,
        ...arg
    } = useQuery("key", async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
// перед получением данных генерируем ошибку
//         throw new Error("Test error");

        return fetch("https://swapi.dev/api/fildms").then(res => res && res.json());
    });

    console.log(arg);

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
        </div>
    );
};

export default Films;

/*
обернули в провайдер сделали запрос вывели в консоль осмотрели что пришло в data
 объекте нам
res.json() - тут все данные











 */