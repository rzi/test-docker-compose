import React, { Component } from "react";
import { OrdersRow } from "./OrdersRow";
import { PaginationControls } from "../PaginationControls";

export class OrdersTable extends Component {
  render = () =>
    <div>
      <h4 className="bg-info text-white text-center p-2">
        {this.props.totalSize} Zamówienia
      </h4>
      <PaginationControls keys={["ID", "Name"]}
        {...this.props} />
      <table className="table table-sm table-striped">
        <thead>
          <tr><th>ID</th>
            <th>Imię i nazwisko</th><th>E-mail</th>
            <th className="text-right">Wartość sumaryczna</th>
            <th className="text-center">Wysłano</th>
          </tr>
        </thead>
        <tbody>
          {this.props.orders.map(order =>
            <OrdersRow key={order.id}
              order={order} toggleShipped={() =>
                this.props.toggleShipped(order.id, !order.shipped)}
            />
          )}
        </tbody>
      </table>
    </div>
}