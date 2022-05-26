import React from 'react';
import { MainScreen } from '@/mainscreen';
import { accountService } from '@/_services';

function SignOut() {
    return (
        <MainScreen>
            <button onClick={accountService.logout} className="nav-item nav-link">Logout</button>
        </MainScreen>
    );
}

export { SignOut };