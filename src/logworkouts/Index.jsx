import React from 'react';
import { createAPIEndpoint, ENDPOINTS } from '@/api';
import { MainScreen } from '@/mainscreen';


function examplePress() {
    console.log("Press");
    createAPIEndpoint(ENDPOINTS.workouts)
        .delete(1);
}

function LogWorkout() {

    return (

    <MainScreen>
    </MainScreen>

    )
}

export{ LogWorkout };