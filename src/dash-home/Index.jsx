import React, { useEffect } from 'react'
import { accountService } from '@/_services';

import { MainScreen } from '@/mainscreen'
import { SmallContainer } from '@/smcontainer';
import { MediumContainer } from '@/mdcontainer';
import { LargeContainer } from '@/lgcontainer';
import { SmallSection } from '@/smsection';
import { LargeSection } from '@/lgsection';


function DashHome({ history }) {

    useEffect(() => {
        // redirect to home if already logged in
        if (!accountService.userValue) {
            history.push('/');
        }
    }, []);

  return (
    <MainScreen>
         <MediumContainer>
            <SmallSection></SmallSection>
        </MediumContainer>
        <LargeContainer>
            <LargeSection></LargeSection>
            <LargeSection></LargeSection>
        </LargeContainer>
        <SmallContainer>
            <LargeSection></LargeSection>
            <SmallSection></SmallSection>
            <SmallSection></SmallSection>
        </SmallContainer> 
        <SmallContainer>
            <LargeSection></LargeSection>
        </SmallContainer>
    </MainScreen>
  )
}

export { DashHome }