import React from 'react';
import { MainScreen } from '@/mainscreen';
import { accountService } from '@/_services';


function Calculator()  {

    const user = accountService.userValue;

    return (

        <MainScreen>
            <h1>Calculator for, {user.email}.</h1>
        </MainScreen>
    )
}

export{ Calculator };