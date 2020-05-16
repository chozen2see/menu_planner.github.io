const React = require('react');
const AppLayout = require('./AppLayout');
import { nameByAlpha } from '../utilities/utils.js';

class Meal_Index extends React.Component {
  render() {
    const { user, meal } = this.props;

    meal.sort(nameByAlpha);

    // render method must return something...
    return (
      <AppLayout currentUser={user}>
        <div className='container'>
          <div className='meal_title'>
            <h2>All Meals</h2>

            <a href='/meal/new'>
              <input type='button' value='+' className='w3-circle addBtn' />
            </a>
          </div>
          <div className='list_all'>
            {meal.map((mealItem, index) => {
              return (
                <a href={`/meal/${mealItem.id}`} className='meal_list_link'>
                  <div
                    className={`card w3-card w3-hover-shadow card_meal_item`}
                  >
                    <p className='meal_list_name w3-container'>
                      {mealItem.name}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </AppLayout>
    );
  }
}

module.exports = Meal_Index;
