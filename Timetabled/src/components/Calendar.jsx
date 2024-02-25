import React from "react";
import Event from "./Event";

const Calendar = () => {
  return (
    <div className="Calendar">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="time">8 am</td>
            <Event event="Starbucks ☕️" color="green" location="Main St" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Yolk 🍳" color="green" location="5th Ave" />
            <td></td>
          </tr>
          <tr>
            <td className="time">9 am</td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Subway 🚊" color="pink" location="Central Park" />
            <td></td>
            <td></td>
            <Event event="The Bean 🫘" color="blue" location="Broadway" />
          </tr>
          <tr>
            <td className="time">10 am</td>
            <td></td>
            <td></td>
            <Event event="Rest" color="green" location="Seattle" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">11 am</td>
            <Event event="Breakfast 🥞" color="blue" location="Diadem Dr" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">12 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Study 📚" color="blue" location="410 Terry Ave" />
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">1 pm</td>
            <Event event="Art 🎨" color="green" location="1st Street" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">2 pm</td>
            <td></td>
            <td></td>
            <Event event="Shopping" color="pink" location="WestField Vally" />
            <td></td>
            <td></td>
            <Event event="Starbucks ☕️" color="green" location="Park" />
            <td></td>
          </tr>
          <tr>
            <td className="time">3 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Game" color="blue" location="Home" />
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;