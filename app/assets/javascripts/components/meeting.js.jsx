var Meeting = React.createClass({
  propTypes: {
    topic: React.PropTypes.string,
    date: React.PropTypes.string,
    time: React.PropTypes.string,
    location: React.PropTypes.string,
    repeat_weekly: React.PropTypes.string,
    repeat_monthly: React.PropTypes.string
  },
  render: function() {
    var meeting = this.props.meeting;
    return(
      <tr>
        <td>{meeting.topic}</td>
        <td>{meeting.date}</td>
        <td>{meeting.time}</td>
        <td>{meeting.location}</td>
        <td>
          { this.props.meeting.repeat_weekly ?  'Weekly' : 'Never' }
          { this.props.meeting.repeat_monthly ?  'Monthly' : 'Never' }
        </td>
      </tr>
    )
  }
});
