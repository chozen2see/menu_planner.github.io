const React = require('react');
const AppLayout = require('./AppLayout');

class Menu_Show extends React.Component {
  render() {
    const { menu, user } = this.props;

    return (
      <AppLayout currentUser={user}>
        <div className='container'>
          <h2>Menu: {menu.name}</h2>
          <div className='menu_container'>
            <div className='menu_breakfast'>
              <h3 className='menu_breakfast_title'>Breakfast</h3>
              <h2 className=''>{menu.breakfast.name}</h2>
            </div>
            <div className='menu_morning_snack'>
              <h3 className='menu_morning_snack_title'>Mid Morning Snack</h3>
              <h2 className=''>{menu.morning_snack.name}</h2>
            </div>
            <div className='menu_lunch'>
              <h3 className='menu_lunch_title'>Lunch</h3>
              <h2 className=''>{menu.lunch.name}</h2>
            </div>
            <div className='menu_afternoon_snack'>
              <h3 className='menu_afternoon_snack_title'>
                Mid Afternoon Snack
              </h3>
              <h2 className=''>{menu.afternoon_snack.name}</h2>
            </div>
            <div className='menu_dinner'>
              <h3 className='menu_dinner_title'>Dinner</h3>
              <h2 className=''>{menu.dinner.name}</h2>
            </div>
            <div className='menu_evening_snack'>
              <h3 className='menu_evening_snack_title'>PM Snack (Optional)</h3>
              <h2 className=''>{menu.evening_snack.name}</h2>
            </div>
          </div>
        </div>
      </AppLayout>
    );
  }
}

module.exports = Menu_Show;
