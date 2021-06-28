import Nullstack from 'nullstack';

class SearchBar extends Nullstack {
  search = '';
  handleSearch() {}

  render() {
    return (
      <div class="columns is-mobile">
        <div class="column is-1 is-hidden-mobile">
          <button class="button">
            <span class="icon is-small">
              <i class="fas fa-hand-point-left"></i>
            </span>
          </button>
        </div>
        <div class="column">
          <input class="input is-normal " type="text" placeholder="Search" />
        </div>
        <div class="column is-1 is-hidden-mobile">
          <button class="button">
            <span class="icon is-small">
              <i class="fas fa-cog"></i>
            </span>
          </button>
        </div>
        <div class="column is-1 is-hidden-tablet">
          <button class="button">
            <span class="icon is-small">
              <i class="fas fa-chevron-down"></i>
            </span>
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
