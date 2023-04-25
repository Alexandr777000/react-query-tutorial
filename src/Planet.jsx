import React from "react";
import {useQuery} from "react-query";

const useGetPlanet = (planetURL) => {
    return useQuery(["planet", planetURL], () => {
        fetch(planetURL).then(res => res.json());
    }, {
        // не делать запросы если нет урла планеты...
        enabled: !!planetURL
    });
};

const Planet = ({planetURL}) => {
    // подключим наш хук
    const {data, isLoading} = useGetPlanet(planetURL);

    return (
        <div>planet: {isLoading ? 'Loading...' : data?.name} {data?.name}</div>
    );
};

export default Planet;