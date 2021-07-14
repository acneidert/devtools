import Nullstack from 'nullstack';

class SearchBar extends Nullstack {
  search = '';
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
          <input type="text" placeholder="Search" class="input input-bordered w-full" />
        </div>
        <div class="flex-none">
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
