const React = require('react');
const AppLayout = require('./AppLayout');

class Meal_Show extends React.Component {
  render() {
    const { meal, user } = this.props;

    return (
      <AppLayout currentUser={user}>
        <div className='container'>
          <p>Meal: {meal.name}</p>
          <p>User: {user.name}</p>
          <p>
            <a href={`/user/menu_planner/${user.id}`}>Back</a>
          </p>
        </div>
      </AppLayout>
    );
  }
}

module.exports = Meal_Show;
