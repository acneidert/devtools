import Nullstack from 'nullstack';
import {themeChange} from "theme-change"

const LIGHT = 'light_nullstack';
const DARK = 'dark_nullstack';

class SearchBar extends Nullstack {
  search = '';
  theme = LIGHT;

  toogleTheme() {
    this.theme = this.theme === LIGHT ? DARK : LIGHT;
  }
  hydrate() {
    console.log('HEERE');
    if(!localStorage.getItem('theme'))
      localStorage.setItem('theme', LIGHT);
    this.theme = localStorage.getItem('theme');
    themeChange(false)
  }

  handleSearch() {}

  render() {
    return (
      <div class="flex mr-5 mt-2 mb-0">
        <div class="flex-none mr-5">
          <button class="btn">
            <span class="icon is-small">
              <i class="fas fa-hand-point-left"></i>
            </span>
          </button>
        </div>
        <div class="flex-grow mr-5">
          <input
            type="text"
            placeholder="Search"
            class="input input-bordered w-full"
          />
        </div>
        <div class="flex-none">
          <div class="dropdown">
            <div tabindex="0" class="m-1 btn">
              <span class="icon is-small">
                <i class="fas fa-chevron-down"></i>
              </span>
            </div>
            <ul
              tabindex="0"
              class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                {this.theme === LIGHT && <a data-set-theme={LIGHT} onclick={this.toogleTheme}>Dark Theme</a> }
                {this.theme === DARK && <a data-set-theme={DARK} onclick={this.toogleTheme}>Light Theme</a> }
              </li>
              {/* <li>
              
              </li> */}
              {/* <li>
                <a>Item 3</a>
              </li> */}
            </ul>
          </div>

          {/* <button class="btn">
            
          </button> */}
        </div>
      </div>
    );
  }
}

export default SearchBar;
