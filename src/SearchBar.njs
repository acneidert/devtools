import Nullstack from 'nullstack';

class SearchBar extends Nullstack {
  search = '';
  handleSearch() {}

  render() {
    return (
      <div class="grid grid-cols-6 btn-group">
        <div>
          <button class="btn">
            <span class="icon is-small">
              <i class="fas fa-hand-point-left"></i>
            </span>
          </button>
        </div>
        <div class="col-span-4">
          <input type="text" placeholder="Search" class="input input-bordered" />
        </div>
        <div>
          <button class="btn">
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
