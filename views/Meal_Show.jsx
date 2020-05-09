const React = require('react');
const AppLayout = require('./AppLayout');

class Meal_Show extends React.Component {
  render() {
    const { meal, user } = this.props;

    return (
      <AppLayout currentUser={user}>
        <div className='container'>
          <div className=' meal_container'>
            <div className='meal_title'>
              <h2>Meal: {meal.name}</h2>
            </div>

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
                Fruit: <a href={`/food/${meal.fruit.id}`}>{meal.fruit.name}</a>
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
                <a href={`/food/${meal.vegetable.id}`}>{meal.vegetable.name}</a>
              </p>
            ) : (
              ''
            )}
          </div>
        </div>
      </AppLayout>
    );
  }
}

module.exports = Meal_Show;
