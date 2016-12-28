var FilterableProductTable = React.createClass({
  getInitialState: function(){
    return(
      filterText: '',
      inStockOnly: false
    );
  },
  render: function(){
    return(
      <div>
        <SearchBar filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} />
        <ProductTable products={this.props.products} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} />
      </div>
    );
  }
});

var SearchBar = React.createClass({
  render: function(){
    return(
      <form>
        //将用户输入的值传到子组件SearchBar中
        <input type="text" placeholder="Search..." value={this.props.filterText} />
        <p>
          <input type="checkbox" checked={this.props.inStockOnly} />
        </p>
      </form>
    );
  }
});

var ProductTable = React.createClass({
  render:function(){
    var rows = [];
    var lastCategory = null;
    this.props.products.forEach(function(product){
      //过滤用户输入的关键字与数据相匹配，模糊查询后如果没有结果，则退出循环
      if(product.name.indexOf(this.props.filterText) == -1 || (!product.stocked && this.props.inStockOnly)){
        return;
      }
      if(product.category !== lastCategory){
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />)
      lastCategory = product.category;
    }.bind(this));
    return(
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});

var ProductCategoryRow =React.createClass({
  render: function(){
    return(
      <tr><th colSpan="2">{this.props.category}</th></tr>
    );
  }
});
var ProductRow = React.createClass({
  render: function(){
    var productName = this.props.product.stocked ? this.props.product.name : <span style={{color:'red'}}>{this.props.product.name}</span>;
    return(
      <tr>
        <td>{productName}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
});
var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('container')
);
