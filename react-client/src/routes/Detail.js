import React from "react";
import { connect } from "react-redux";

const Detail = (props) => {
  console.log(props);
  return (
    <div>
      Detail
    </div>
  )
}
const mapStateToProps = (state, ownProps) => {
  return state;
}

export default connect(mapStateToProps)(Detail);