const React = require('react');
const AppLayout = require('./AppLayout');

class Meal_New extends React.Component {
  render() {
    const {
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
              <h2>Create New Meal</h2>
            </div>
            <div className='meal_details'>
              <form action={`/meal`} method='POST'>
                {/* NOTE: the form is pre-populated with values for the server */}
                <p>
                  Name: <input type='text' name='name' id='name' />
                </p>
                <p>
                  Type:{' '}
                  <input
                    type='text'
                    name='type'
                    id='type'
                    defaultValue='Infinite'
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
                      return <option value={item.id}>{item.name}</option>;
                    })}
                  </select>
                </p>

                <p>
                  Fruit:{' '}
                  <select className='fruit_selection' id='fruit' name='fruit'>
                    <option value='5eb69c30633d4e3c95590619'>
                      --SELECT A FRUIT--
                    </option>
                    {fruitItems.map((item, index) => {
                      return <option value={item.id}>{item.name}</option>;
                    })}
                  </select>
                </p>

                <p>
                  Carbohydrate:{' '}
                  <select
                    className='carbohydrate_selection'
                    id='carbohydrate'
                    name='carbohydrate'
                  >
                    <option value='5eb69c30633d4e3c95590619'>
                      --SELECT A CARBOHYDRATE--
                    </option>
                    {carbohydrateItems.map((item, index) => {
                      return <option value={item.id}>{item.name}</option>;
                    })}
                  </select>
                </p>

                <p>
                  Vegetable:{' '}
                  <select
                    className='vegetable_selection'
                    id='vegetable'
                    name='vegetable'
                  >
                    <option value='5eb69c30633d4e3c95590619'>
                      --SELECT A VEGETABLE--
                    </option>
                    {vegetableItems.map((item, index) => {
                      return <option value={item.id}>{item.name}</option>;
                    })}
                  </select>
                </p>

                <input type='hidden' name='user' id='user' value={user.id} />

                <div className='btn_group'>
                  <input
                    type='submit'
                    name=''
                    defaultValue='SAVE CHANGES'
                    className='btn_meal w3-border w3-round-large'
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </AppLayout>
    );
  }
}

module.exports = Meal_New;
