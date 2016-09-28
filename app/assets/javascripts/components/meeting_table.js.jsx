var EventTable = React.createClass({
  render: function() {
    return(
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="col-md-4">Topic</th>
            <th className="col-md-2">Date</th>
            <th className="col-md-2">Time</th>
            <th className="col-md-3">Location</th>
            <th className="col-md-1">Repeat</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    )
  }
});
