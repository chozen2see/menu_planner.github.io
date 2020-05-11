const React = require('react');
const AppLayout = require('./AppLayout');

class Meal_Show extends React.Component {
  render() {
    const { meal, user } = this.props;

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
          </div>
        </div>
      </AppLayout>
    );
  }
}

module.exports = Meal_Show;
