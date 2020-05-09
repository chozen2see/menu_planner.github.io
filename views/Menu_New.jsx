const React = require('react');
const AppLayout = require('./AppLayout');

class Menu_New extends React.Component {
  render() {
    const { meal, user } = this.props;
    // console.log(menu);
    return (
      <AppLayout currentUser={user}>
        <div className='container'>
          <div className='menu_container'>
            <div className='menu_title'>
              <h2>New Menu</h2>
            </div>
            <div className='menu_details'>
              <form action={`/menu`} method='POST'>
                {/* NOTE: the form is pre-populated with values for the server */}
                <div className='menu_breakfast'>
                  <h3 className='menu_breakfast_title'>Name: </h3>
                  <input type='text' name='name' id='name' />

                  <h3 className='menu_breakfast_title'>Breakfast</h3>

                  <select
                    className='breakfast_selection'
                    id='breakfast'
                    name='breakfast'
                  >
                    <option value='5eb6a45f48c0b73e0e057f30'>
                      --SELECT A MEAL--
                    </option>
                    {meal.map((item, index) => {
                      return <option value={item.id}>{item.name}</option>;
                    })}
                  </select>
                </div>
                <div className='menu_morning_snack'>
                  <h3 className='menu_morning_snack_title'>
                    Mid Morning Snack
                  </h3>
                  <select
                    className='morning_snack_selection'
                    id='morning_snack'
                    name='morning_snack'
                  >
                    <option value='5eb6a45f48c0b73e0e057f30'>
                      --SELECT A MEAL--
                    </option>
                    {meal.map((item, index) => {
                      return <option value={item.id}>{item.name}</option>;
                    })}
                  </select>
                </div>
                <div className='menu_lunch'>
                  <h3 className='menu_lunch_title'>Lunch</h3>
                  <select className='lunch_selection' id='lunch' name='lunch'>
                    <option value='5eb6a45f48c0b73e0e057f30'>
                      --SELECT A MEAL--
                    </option>
                    {meal.map((item, index) => {
                      return <option value={item.id}>{item.name}</option>;
                    })}
                  </select>
                </div>
                <div className='menu_afternoon_snack'>
                  <h3 className='menu_afternoon_snack_title'>
                    Mid Afternoon Snack
                  </h3>
                  <select
                    className='afternoon_snack_selection'
                    id='afternoon_snack'
                    name='afternoon_snack'
                  >
                    <option value='5eb6a45f48c0b73e0e057f30'>
                      --SELECT A MEAL--
                    </option>
                    {meal.map((item, index) => {
                      return <option value={item.id}>{item.name}</option>;
                    })}
                  </select>
                </div>
                <div className='menu_dinner'>
                  <h3 className='menu_dinner_title'>Dinner</h3>
                  <select
                    className='dinner_selection'
                    id='dinner'
                    name='dinner'
                  >
                    <option value='5eb6a45f48c0b73e0e057f30'>
                      --SELECT A MEAL--
                    </option>
                    {meal.map((item, index) => {
                      return <option value={item.id}>{item.name}</option>;
                    })}
                  </select>
                </div>
                <div className='menu_evening_snack'>
                  <h3 className='menu_evening_snack_title'>
                    PM Snack (Optional)
                  </h3>
                  <select
                    className='evening_snack_selection'
                    id='evening_snack'
                    name='evening_snack'
                  >
                    <option value='5eb6a45f48c0b73e0e057f30'>
                      --SELECT A MEAL--
                    </option>
                    {meal.map((item, index) => {
                      return <option value={item.id}>{item.name}</option>;
                    })}
                  </select>
                </div>
                <input type='hidden' name='date' id='date' value={new Date()} />
                <input type='hidden' name='user' id='user' value={user.id} />

                <div className='btn_group'>
                  <input
                    type='submit'
                    value='SAVE CHANGES'
                    className='btn_menu w3-border w3-round-large'
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

module.exports = Menu_New;
