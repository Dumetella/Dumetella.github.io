import React from 'react'
import { CoffeeButton, CoffeeHeader, CoffeeContainer, CoffeeDisplay, CoffeeDetails, CoffeeMiddle, CoffeeExit, CoffeeArm, CoffeeCup, CoffeeLiquid, CoffeeFooter, CoffeeSmokeOne, CoffeeSmokeTwo } from './CoffeeStyles'

export default function Coffee() {
    return (
        <CoffeeContainer>
            <CoffeeHeader>
                <CoffeeButton left={'14px'} />
                <CoffeeButton left={'50px'} />
                <CoffeeDisplay />
                <CoffeeDetails />
            </CoffeeHeader>
            <CoffeeMiddle>
                <CoffeeExit />
                <CoffeeArm />
                <CoffeeLiquid />
                <CoffeeSmokeOne bottom={'50px'} left={'102px'} animation={'3s 4s linear infinite'} />
                <CoffeeSmokeTwo bottom={'70px'} left={'118px'} animation={'3s 5s linear infinite'} />
                <CoffeeSmokeTwo bottom={'65px'} left={'118px'} animation={'3s 6s linear infinite'} />
                <CoffeeSmokeOne bottom={'50px'} left={'102px'} animation={'3s 5s linear infinite'} />
                <CoffeeCup />
            </CoffeeMiddle>
            <CoffeeFooter />
        </CoffeeContainer>
    )
}
