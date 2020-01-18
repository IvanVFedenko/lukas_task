import React from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { countries } from '../store/store';
import { Code } from '../components/Code';
import { Phone } from '../components/Phone';
import { GetError } from '../components/Get_error';
import { set_countries_thunk } from '../store/actions';

class Countries extends React.Component {
  state = {
    code: '+44',
    phone: '',
    error: false
  };

  componentDidMount() {
    this.props.set_countries_thunk();
  }

  handle_input = (event) => {
    const { code } = this.state;
    let output = '';
    event.target.value.replace(
      /^\D*(\d{0,4})\D*(\d{0,3})\D*(\d{0,4})/,
      (match, g1, g2, g3) => {
        if (g1.length) {
          output += `(${g1}`;
        }

        if (code.length === 4 && g1.length === 2) {
          output += ')';
        } else if (code.length === 3 && g1.length === 3) {
          output += ')';
        } else if (code.length === 2 && g1.length === 4) {
          output += ')';
        }

        if (g2.length) {
          output += ' ' + g2;
        }

        if (g2.length === 3) {
          output += '-';
        }

        if (g3.length) {
          output += g3;
        }
      }
    );
    this.setState({
      phone: output,
      error: false
    });
  };

  get_error = () => {
    this.setState({
      error: true
    });
  };
  no_error = () => {
    this.setState({
      error: false
    });
  };

  get_code = (event) => {
    this.setState({
      error: false,
      code: event.target.value,
      phone: ''
    });
  };

  render() {
    const { countries } = this.props;
    const { phone, code } = this.state;
    return (
      <div className="wrapper">
        <form>
          <div className="form">
            <div>
              <fieldset className="select">
                <legend align="left">calling code</legend>
                <select className="select_code" onChange={this.get_code}>
                  {countries.map((country) => (
                    <Code key={country.id} country={country} />
                  ))}
                </select>
              </fieldset>
            </div>
            <div>
              <Phone
                phone={phone}
                handle_input={this.handle_input}
                get_error={this.get_error}
                no_error={this.no_error}
                code={code}
              />
              {this.state.error ? <GetError code={this.state.code} /> : ''}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const getStateFromProps = (state) => ({
  countries: countries(state)
});

const getDispatchFromProps = {
  set_countries_thunk
};

Countries.propTypes = {
  set_countries_thunk: PropTypes.func.isRequired,
  countries: PropTypes.arrayOf(PropTypes.object).isRequired
};
export default connect(getStateFromProps, getDispatchFromProps)(Countries);
