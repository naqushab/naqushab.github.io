import React, { Component } from 'react';
import { prefixLink } from 'gatsby-helpers';

import GitHubButton from 'react-github-button';
import Hamburger from 'components/hamburger';
import Menu from 'components/menu';
import Wrapper from 'components/wrapper';
import { IndexLink } from 'react-router';

import styles from './styles.module.css';
import 'react-github-button/assets/style.css';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    // @TODO: Remove this event listener when menu isn't open.
    document.addEventListener('keydown', this.handleKeyPress);
  }

  toggleMenu(isVisible) {
    this.setState({ menuActive: typeof isVisible === 'undefined' ? !this.state.menuActive : isVisible });
  }

  handleKeyPress(event) {
    if (event.keyCode === 27) {
      this.toggleMenu(false);
    }
  }
  render() {
    const { menuActive } = this.state;

    return (
      <header className={styles.header}>
        <Wrapper>
          <div className={styles.inner}>
            <h1 className={styles.title}>
              <IndexLink to={prefixLink('/')}>Naqushab Neyazee</IndexLink>
            </h1>
            <Hamburger onClick={() => this.toggleMenu()} active={menuActive} className={styles.hamburger} />
          </div>
        </Wrapper>
        <Menu onNavClick={() => this.toggleMenu(false)} active={menuActive} />
      </header>
    );
  }
}

