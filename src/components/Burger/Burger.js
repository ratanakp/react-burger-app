import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {

    // transform ingredient object to an array.
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {

            console.log(igKey);

            return [...Array(props.ingredients[igKey])]
                .map((_, i) => {
                    console.log(i);
                    return <BurgerIngredient key={igKey + i} type={igKey}/>;
                })
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    ;

    console.log(transformedIngredients);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients.</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {/*<BurgerIngredient type="cheese"/>*/}
            {/*<BurgerIngredient type="meat"/>*/}
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;
