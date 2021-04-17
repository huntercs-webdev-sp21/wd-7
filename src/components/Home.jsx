// src/components/Home.jsx

import React, { Component } from 'react';
import AccountBalance from './AccountBalance';

class Home extends Component {
  render() {
    return (
      <div>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX///8AAACdoaa6vsOgpKk+Pj5hZGdJS03AxcobGxxtcHSipqvi4uK7u7uOjo5SVFdzdnqLj5MuLzGEh4ujo6Po6Oi0tLTZ2dmrq6vw8PBqamrPz893d3fGxsaXl5dnam1bW1s1NjhEREQUFBQqKiqCgoKrr7WRlZlhYWGMjIxWVlYkJCQQEBCFiIx6fYGWlpbTxgzJAAAEk0lEQVR4nO2d63aqMBBGtQe1ivWueFekVdtaff+3O7hwAj1CGARN4vn2z64knS0xM2ogpRIAAAAAAAAAAAAAAAAAAAB4SprLr8p+PFEdxr1wPr1yQGUwVB1M8Szm5V+8L5uqQyqSt2k5Bq/lqA6sECbjrzi9Cx8z1fHlZDioSPQC5gvVUd6Mc/pO1QuYvqmO9QZmH0y7C+uRUTnk34WTR82QRDkZ7W/RC9A/UQ7Htdv1AnROlM1lL69egJ6JcvZ54ATvNrpV1gqrWaJkriybzottWba9W7EutjaJMr4ku6J9tGzrJcCXbLicTuoTpbwkExzWP7bQC7Dsl056vVNWmyibjJLM57va/VdPSB5ZS6+aROm06pzg3NUuXo8krWObM86jEyWzJKucV5ZEOyFp91mSj0uUzJWlFllZ0iV/1l76kOXD/RPlZLTm2B3afdncjJfUIFEOBxtOCPWklSVdUmmidE7vnH/ek68saShLlNyVpeGHeLOduJQPT5TMkqx2ZCycbMnHJUrmh732Mc/cjJW0H5AoJ7wPe951SVaU5F0TZXPpckZPLMmKkuQlysyfKJ0WZ1j/w16uhZMrWXiiXPAWTr9m2doPYsvMIZxE6fBKMn2ZpkzXk+oAC6AlExyrjq4QxhJD1bEVRLLgm+rQCiK5Zh2oDq0gBv+x4Ux1aAUhSf2sL5e0p54sWHJUB1cI0pz/DPM0rTwdzfdh4ebWTMAV8U7381GKX4Do0X01ga6Il2X3y7D/+kd/XvswhKHuwBCG+gNDGOoPDGGoPzCEof7AEIb6k8vw+b+n8eom4OUwNA0YClg7mzXki21o6q9syb+qPcs05Qsa+nN3pg2ZJs7TDHP0jMPaDqwRm8w7wIfUdUW4lz+sxwNiTJuWa9RIbAMPGw1of2pdDEW/Nc/DRmIrz5oa0cbIXuT/0fCuGIq6Zd+D2aSuYvMa7YSM7jmiKDrUaEfdIo3oXd2jobb0wkTfOdRxR0N16NWLNGpd/tYWO96oW/YNmMKQtjXLDS87FC1RI8YZiqFkhl0aSm5IQ8EQhjCEIQxhCEMYwhCGMIQhDGEIQxjCEIYwhCEMYQhDGMIQhjCEIQxhCEMYwhCGMIQhDGEIQxjCEIYwhCEMYQhDGMIQhjCEIQxhCEMFhuK2SDI8xRget5I7LBdkeHWHZfRB/9SR7rDcHmMM6an47W3+OyzFXbKGkP0u2dxnUT6YfVbBjCfBakDGm9VNm6Nnsh0bZNrd+GcyzVMznxqR5UA21bHehscXNG+ZCVhyBZvpY2kKd7GJnOvWMIBVGC7zIUOjsEfVtvRHFMzl32VgMmH7A9W3mhOZpxzByFmAfUt17CzEU1B8PtMFI8tMxZBLGH4aK3MqcDdsvFMdORdrFwa9SROMnNpVNeUS+hcxcsJt2hEeYUvPHEH/KrIXm8gy81Pk8X53J3zCZ3kuE4ycFVRfVU1idQhDlz31i3XesPa4yYLPcTig7HhA1ZEVBuNdaDhJ78TnN3z+WVriHcCtP5KMaOJXbNdIS9PRumI6a97ZcgAAAAAAAAAAAAAAAAAAAKBw/gL3cjVZutweAgAAAABJRU5ErkJggg==" alt="bank"/>
        <h1>Bank of React</h1>
        <AccountBalance accountBalance={this.props.accountBalance}/>

      </div>
    );
  }
}

export default Home;
