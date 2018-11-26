import React, { Component } from "react";

import Order from "./Order/Order";
import Spinner from "common-components/Spinner/Spinner";
import Placeholder from "common-components/Placeholder/Placeholder";
import Axios from "src/Axios.config.js";
import withErrorHandler from "common/withErrorHandling";

class Orders extends Component {
  state = {
    loading: true,
    orders: []
  };
  componentDidMount() {
    Axios.get("/orders.json")
      .then(result => {
        if (result.data !== null) {
          const fetchedOrders = [];
          for (let key in result.data) {
            fetchedOrders.push({
              ...result.data[key],
              id: key
            });
          }
          this.setState({
            loading: false,
            orders: [...fetchedOrders]
          });
        } else {
          this.setState({
            loading: false
          });
        }
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  }
  render() {
    return (
      <div>
        {this.state.loading ? (
          <Placeholder>
            <Spinner />
            <h2>Loading...</h2>
          </Placeholder>
        ) : this.state.orders.length === 0 ? (
          <Placeholder>No data</Placeholder>
        ) : (
          this.state.orders.map(order => <Order key={order.id} order={order} />)
        )}
      </div>
    );
  }
}
export default withErrorHandler(Orders, Axios);
