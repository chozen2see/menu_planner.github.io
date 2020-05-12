const React = require('react');
// import React, { Component } from 'react';
const AppLayout = require('./AppLayout');

// let spoonURL = '';

// const buildURL = (protein, carb, veggie, fruit) => {
//   let url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=976c1cc00b764bbbb8d0dd7393d8abce&ingredients=${
//     protein && protein !== '' && protein !== 'No Food Selected'
//       ? protein + ','
//       : ''
//   }${carb && carb !== '' && carb !== 'No Food Selected' ? carb + ',' : ''}${
//     veggie && veggie !== '' && veggie !== 'No Food Selected' ? veggie + ',' : ''
//   }${
//     fruit && fruit !== '' && fruit !== 'No Food Selected' ? fruit : ''
//   }&number=5&ranking=2&ignorePantry=true`;
//   return url;
// };

class Meal_Show extends React.Component {
  /*
  constructor(props) {
    super(props);
    this.state = {
      recipes: [], // array of data fetched from api
      isLoaded: false, // know when recipes loaded from api endpoint
    };
  }

  // runs after render(), then updates render with data
  componentDidMount() {
    // use fetch method to perform api call
    fetch(
      'https://api.spoonacular.com/recipes/findByIngredients?apiKey=976c1cc00b764bbbb8d0dd7393d8abce&ingredients=Fish,Grapefruit&number=5&ranking=2&ignorePantry=true'
    )
      .then((res) => res.json())
      .then((json) => {
        // use arrow function to keep context of "this".
        this.setState({
          isLoaded: true, // received data from api
          recipes: json,
        });

        // get info "title","servings","readyInMinutes","sourceUrl","image","summary"
        // https://api.spoonacular.com/recipes/716429/information?includeNutrition=false&apiKey=976c1cc00b764bbbb8d0dd7393d8abce
      });
  }
*/
  render() {
    // spoonURL = buildURL(
    //   meal.protein.name ? meal.protein.name : '',
    //   meal.carbohydrate.name ? meal.carbohydrate.name : '',
    //   meal.vegetable.name ? meal.vegetable.name : '',
    //   meal.fruit.name ? meal.fruit.name : ''
    // );

    // console.log(spoonURL);

    // const { isLoaded, recipes } = this.state;

    /*
    if (!isLoaded) {
      // spoonURL = buildURL(
      //   meal.protein.name ? meal.protein.name : '',
      //   meal.carbohydrate.name ? meal.carbohydrate.name : '',
      //   meal.vegetable.name ? meal.vegetable.name : '',
      //   meal.fruit.name ? meal.fruit.name : ''
      // );

      return <div>Loading...</div>;
    } else {
    */
    const { meal, user } = this.props;
    // console.log(recipes);

    return (
      <AppLayout currentUser={user}>
        <div className='container'>
          <div className='meal_container'>
            <div className='meal_title'>
              <h2>Meal: {meal.name}</h2>
            </div>
            <div className='meal_details'>
              <p>Type: {meal.type}</p>
              {meal.protein ? (
                <p>
                  Protein:{' '}
                  <a href={`/food/${meal.protein.id}`}>{meal.protein.name}</a>
                </p>
              ) : (
                ''
              )}
              {meal.fruit ? (
                <p>
                  Fruit:{' '}
                  <a href={`/food/${meal.fruit.id}`}>{meal.fruit.name}</a>
                </p>
              ) : (
                ''
              )}
              {meal.carbohydrate ? (
                <p>
                  Carbohydrate:{' '}
                  <a href={`/food/${meal.carbohydrate.id}`}>
                    {meal.carbohydrate.name}
                  </a>
                </p>
              ) : (
                ''
              )}
              {meal.vegetable ? (
                <p>
                  Vegetable:{' '}
                  <a href={`/food/${meal.vegetable.id}`}>
                    {meal.vegetable.name}
                  </a>
                </p>
              ) : (
                ''
              )}

              <div className='btn_group'>
                <a href={`./${meal.id}/edit`}>
                  <input
                    type='button'
                    value='EDIT'
                    className='btn_meal w3-border w3-round-large'
                  />
                </a>
                <form action={`/meal/${meal.id}?_method=DELETE`} method='POST'>
                  <input
                    type='submit'
                    value='DELETE'
                    className='btn_meal w3-border w3-round-large'
                  />
                </form>
              </div>
            </div>

            {/* <div>
                {recipes.map((recipe, index) => {
                  <div>{recipe}</div>;
                })}
              </div> */}
          </div>
        </div>
      </AppLayout>
    );
    // }
  }
}

module.exports = Meal_Show;
