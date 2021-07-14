import Nullstack from 'nullstack';

class Third_Snake extends Nullstack {
  
  text = 'This is from Client'

  static async serverFunction() {
    return 'This is from Server!'
  }

  async hydrate() {
    console.log(this.serverFunction.name)
    this.text = await this.serverFunction();
  }
  renderTestee({value}){
    return <span>-{value}-</span>
  }
  render() {
    return (
      <div> 
        {this.text}
        <Testee value="1" />
        <Testee value="2" /> 
      </div>
    )
  }

}

export default Third_Snake;