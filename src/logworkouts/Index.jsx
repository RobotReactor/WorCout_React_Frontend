import React from 'react';
import { createAPIEndpoint, ENDPOINTS } from '@/api';
import { MainScreen } from '@/mainscreen';

const examplePress = () => {
    console.log("Press");
    createAPIEndpoint(ENDPOINTS.workouts)
        .delete(7)
}

function LogWorkout() {

    return (

    <MainScreen>
        <button>Button: Press ME!</button>
    </MainScreen>

    )
}

export{ LogWorkout };