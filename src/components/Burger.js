import React, { Component } from 'react';
import'./BurgerStyle.css';


export default class Burger extends Component {
    state = {
        lettuce: 0,
        tomato: 0,
        cheese: 0,
        meat: 0,
    }

    addRemoveIngredient = (action, ingredient) => {
        const {
            lettuce,
            tomato,
            cheese,
            meat,
        } = this.state;

        let stateValue;

        switch(ingredient)
        {
            case 'lettuce': {
                stateValue = lettuce;
                break;
            }
            case 'tomato': {
                stateValue = tomato;
                break;
            }
            case 'cheese': {
                stateValue = cheese;
                break;
            }
            case 'meat': {
                stateValue = meat;
                break;
            }
            default: break;
        };
        if (action === 'add'){
            stateValue = stateValue + 1
        } else {
            stateValue = stateValue - 1
        }
        this.setState({
            [ingredient]: stateValue >= 0 ? stateValue : 0
        });
    } 

    burgerContent = () => {
        const {
            lettuce,
            tomato,
            cheese,
            meat,
        } = this.state;
        let burger = [];

            //outputting the lettuce
            for (let i = 0; i < lettuce; i++) {
                burger.push(<div key = {burger.length} className = "lettuceSide"></div>);
            }
            //outputting tomato
            for (let i = 0; i < tomato; i++) {
                burger.push(<div key = {burger.length} className = "tomatoSide"></div>);
            }
            //outputting cheese
            for (let i = 0; i < cheese; i++) {
                burger.push(<div key = {burger.length} className = "cheeseSide"></div>);
            }
            //outputting meat
            for (let i = 0; i < meat; i++) {
                burger.push(<div key = {burger.length} className = "meatSide"></div>);
            }
            if (burger.length === 0) {
                burger.push(<p key = "0" >Please start adding ingredients</p>)
            }
            return burger;

    }
    
    render() {
        return(
            <>
                <div className = "burgerIngredients">
                    <div className = "topSide">
                    </div>
                    <div>{this.burgerContent()}</div>
                    <div className = "bottomSide"></div>
                </div>
                <div className = "ingredientsBlock">
                    <p>lettuce</p>
                    <div className = 'ingrBtns'>
                        <button onClick = {() => this.addRemoveIngredient('add', 'lettuce')} className = "ingrBtn">Add </button>
                        <button onClick = {() => this.addRemoveIngredient('remove', 'lettuce')} className = "ingrBtn">Remove </button>
                    </div>
                    <p>tomato</p>
                    <div className = 'ingrBtns'>
                        <button onClick = {() => this.addRemoveIngredient('add', 'tomato')} className = "ingrBtn">Add </button>
                        <button onClick = {() => this.addRemoveIngredient('remove', 'tomato')} className = "ingrBtn">Remove </button>
                    </div>
                    <p>cheese</p>
                    <div className = 'ingrBtns'>
                        <button onClick = {() => this.addRemoveIngredient('add', 'cheese')} className = "ingrBtn">Add </button>
                        <button onClick = {() => this.addRemoveIngredient('remove', 'cheese')} className = "ingrBtn">Remove </button>
                    </div>
                    <p>meat</p>
                    <div className = 'ingrBtns'>
                        <button onClick = {() => this.addRemoveIngredient('add', 'meat')} className = "ingrBtn">Add </button>
                        <button onClick = {() => this.addRemoveIngredient('remove', 'meat')} className = "ingrBtn">Remove </button>
                    </div>
                </div>
            </>
        )
    }
}
