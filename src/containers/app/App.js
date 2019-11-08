import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import PersonInfo from "../../components/personInfo";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Selectors from "../../redux/selectors";
import * as Actions from "../../redux/actions";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.showSpining = this.showSpining.bind(this);
  }
  showSpining() {
    setSpinstate({ spinning: true });
  }
  sendRequest = () => {
    getComment("abc");
  };
  componentWillMount() {
    const { getComment } = this.props;
    getComment("abc");
  }
  render() {
    const { userComment, personInfo } = this.props;
    return (
      <div className="App">
        <header className="App-header">react redux</header>
        <Container className="mt-1">
          <Row>
            <Col>
              <Button variant="primary" onClick={this.sendRequest}>
                send request
              </Button>
            </Col>
            <Col>
              <Button variant="primary" onClick={this.showSpining}>
                send request to change redux store
              </Button>
            </Col>
          </Row>
        </Container>
        <PersonInfo info={userComment} personInfo={personInfo} />
      </div>
    );
  }
}

App.propTypes = {
  userComment: PropTypes.array
};
const mapStateToProps = (state, ownProps) => {
  return {
    userComment: Selectors.getUserComment(state),
    personInfo: Selectors.getPersonInfo(state)
  };
};
const mapDispatchToProps = dispatch => ({
  getComment: payload => {
    return dispatch({
      type: Actions.GET_COMMENTS_REQUEST,
      payload
    });
  },
  setSpinstate: payload => {
    return dispatch({
      type: Actions.GET_GLOBAL_SPIN_STATE,
      payload
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
