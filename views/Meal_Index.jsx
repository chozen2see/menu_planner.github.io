const React = require('react');
const AppLayout = require('./AppLayout');

class Meal_Index extends React.Component {
  render() {
    const { user, meal } = this.props;

    // DRY: Want this in app.js so that I can use in other views
    function nameByAlpha(a, b) {
      // Use toUpperCase() to ignore character casing
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      // console.log(nameA);
      // console.log(nameB);
      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      // console.log(comparison);
      return comparison;
    }

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
