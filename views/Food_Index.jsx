const React = require('react');
const AppLayout = require('./AppLayout');
import { nameByAlpha } from '../utilities/utils.js';

class Food_Index extends React.Component {
  render() {
    const { user, food } = this.props;

    food.sort(nameByAlpha);

    // render method must return something...
    return (
      <AppLayout currentUser={user}>
        <div className='container'>
          <div className='food_title'>
            <h2>All Food</h2>
          </div>
          <div className='list_all'>
            {food.map((foodItem, index) => {
              let foodClass = foodItem.class;
              foodClass =
                foodClass.charAt(0).toLowerCase() + foodClass.slice(1);
              return (
                <a href={`/food/${foodItem.id}`} className='food_list_link'>
                  <div
                    className={`card w3-card w3-hover-shadow card_food_item ${foodClass}`}
                  >
                    <p className='food_list_name w3-container'>
                      {foodItem.name}
                    </p>
                    {/* <p className='food_list_type w3-container'>
                          Type: {foodItem.type}
                        </p> */}
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

module.exports = Food_Index;
