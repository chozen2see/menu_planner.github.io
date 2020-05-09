const React = require('react');
const AppLayout = require('./AppLayout');

class Meal_Edit extends React.Component {
  render() {
    const {
      meal,
      user,
      proteinItems,
      carbohydrateItems,
      vegetableItems,
      fruitItems,
    } = this.props;

    return (
      <AppLayout currentUser={user}>
        <div className='container'>
          <div className='meal_container'>
            <div className='meal_title'>
              <h2>Edit Meal</h2>
            </div>
            <div className='meal_details'>
              <form action={`/meal/${meal.id}?_method=PUT`} method='post'>
                {/* NOTE: the form is pre-populated with values for the server */}
                <p>
                  Meal:{' '}
                  <input
                    type='text'
                    name='name'
                    id='name'
                    defaultValue={meal.name}
                  />
                </p>
                <p>
                  Type:{' '}
                  <input
                    type='text'
                    name='type'
                    id='type'
                    defaultValue={meal.type}
                  />
                </p>
                <p>
                  Protein:{' '}
                  <select
                    className='protein_selection'
                    id='protein'
                    name='protein'
                  >
                    <option value='5eb69c30633d4e3c95590619'>
                      --SELECT A PROTEIN--
                    </option>
                    {proteinItems.map((item, index) => {
                      return (
                        <option
                          selected={
                            meal.protein && meal.protein.id === item.id
                              ? 'true'
                              : ''
                          }
                          value={item.id}
                        >
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </p>

                <p>
                  Fruit:{' '}
                  <select
                    className='fruit_selection'
                    id='fruit_selection'
                    name='fruit'
                  >
                    <option value='5eb69c30633d4e3c95590619'>
                      --SELECT A FRUIT--
                    </option>
                    {fruitItems.map((item, index) => {
                      return (
                        <option
                          selected={
                            meal.fruit && meal.fruit.id === item.id
                              ? 'true'
                              : ''
                          }
                          value={item.id}
                        >
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </p>

                <p>
                  Carbohydrate:{' '}
                  <select
                    className='carbohydrate_selection'
                    id='carbohydrate_selection'
                    name='carbohydrate'
                  >
                    <option value='5eb69c30633d4e3c95590619'>
                      --SELECT A CARBOHYDRATE--
                    </option>
                    {carbohydrateItems.map((item, index) => {
                      return (
                        <option
                          selected={
                            meal.carbohydrate &&
                            meal.carbohydrate.id === item.id
                              ? 'true'
                              : ''
                          }
                          value={item.id}
                        >
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </p>

                <p>
                  Vegetable:{' '}
                  <select
                    className='vegetable_selection'
                    id='vegetable_selection'
                    name='vegetable'
                  >
                    <option value='5eb69c30633d4e3c95590619'>
                      --SELECT A VEGETABLE--
                    </option>
                    {vegetableItems.map((item, index) => {
                      return (
                        <option
                          selected={
                            meal.vegetable && meal.vegetable.id === item.id
                              ? 'true'
                              : ''
                          }
                          value={item.id}
                        >
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </p>

                <div className='btn_group'>
                  <a href={`./${meal.id}/edit`}>
                    <input
                      type='submit'
                      name=''
                      defaultValue='SAVE CHANGES'
                      className='btn_meal w3-border w3-round-large'
                    />
                  </a>
                  <form action={`/meal/${meal._id}?_method=DELETE`}>
                    <input
                      type='submit'
                      value='DELETE'
                      className='btn_meal w3-border w3-round-large'
                    />
                  </form>
                </div>
              </form>
            </div>
          </div>
        </div>
      </AppLayout>
    );
  }
}

module.exports = Meal_Edit;
