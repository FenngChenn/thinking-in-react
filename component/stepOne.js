var FilterableProductTable = React.createClass({
  render: function(){
    return(
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
});

var SearchBar = React.createClass({
  render: function(){
    return(
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
        </p>
      </form>
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
