import Nullstack from 'nullstack';

class ComponentTest extends Nullstack {
  
  render({newValue}) {
    return (
      <div> ComponentTest {newValue} </div>
    )
  }

}

export default ComponentTest;