
/* Import Third Party Dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

/* Import antd Components */
import { Row, Col, Button, Input, Icon } from 'antd';

/* Import Redux Flow */
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectBookFormPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as ActionsCreator from './actions';

/* Import Shared Elements */
import Card from '../../elements/Card';
import { Text, TEXT_DOM_ELEMENT } from '../../elements/Heading';

/* Import Local Elements */
import ControlWrapper from './elements/ControlWrapper';
import CoverWrapper from './elements/CoverWrapper';


export class BookFormPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    // if (this.props.match.params.id){}
  }

  render() {
    return (
      <Row>
        <Col span={8} style={{ height: '100%' }}>
          <CoverWrapper>
            <Icon type="picture" style={{ fontSize: '30px', color: '#aaa' }} />
            <Button type="dashed" icon="file-add" style={{ color: '#888', backgroundColor: '#f5f5f5' }}>
              attach cover
            </Button>
          </CoverWrapper>
        </Col>
        <Col span={16} style={{ height: '300px' }}>
          <Card
            height="450px"
            backgroundColor="#fff"
            header={<Text element={TEXT_DOM_ELEMENT.P} fontSize={16} color="#888" fontWeight={700}>Book Details</Text>}
            footer={(
              <ControlWrapper>
                <Link to="/books">
                  <Button icon="close">cancel</Button>
                </Link>
                <Button
                  type="primary"
                  disabled={this.props.bookformpage.title === '' || this.props.bookformpage.author === '' || this.props.bookformpage.isProcessing}
                  icon="check"
                  loading={this.props.bookformpage.isProcessing}
                >
                  {this.props.match.params.id ? 'update' : 'create'}
                </Button>
              </ControlWrapper>
            )}
          >
            <Row>
              <Col span={24}>
                <Text element={TEXT_DOM_ELEMENT.SPAN} fontWeight={400} fontSize={14} color="#333">
                  Author
                  <Text element={TEXT_DOM_ELEMENT.SPAN} fontWeight={400} fontSize={14} color="red"> *</Text>
                </Text><br />
                <Text element={TEXT_DOM_ELEMENT.SPAN} fontWeight={400} fontSize={12} color="#aaa">
                  de limprimerie depuis les années 1500, quand un peintre anony puis les années 1
                </Text>
                <Input
                  onChange={(e) => this.props.onInputChange('title', e.target.value)}
                  value={this.props.bookformpage.title}
                  placeholder="give your book a title"
                />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Text element={TEXT_DOM_ELEMENT.SPAN} fontWeight={400} fontSize={14} color="#333">
                  Title
                  <Text element={TEXT_DOM_ELEMENT.SPAN} fontWeight={400} fontSize={14} color="red"> *</Text>
                </Text><br />
                <Text element={TEXT_DOM_ELEMENT.SPAN} fontWeight={400} fontSize={12} color="#aaa">
                  de limprimerie depuis les années 1500, quand un peintre anony puis les années 1
                </Text>
                <Input
                  onChange={(e) => this.props.onInputChange('author', e.target.value)}
                  value={this.props.bookformpage.author}
                  placeholder="give your book a title"
                />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Text element={TEXT_DOM_ELEMENT.SPAN} fontWeight={400} fontSize={14} color="#333">Description</Text><br />
                <Text element={TEXT_DOM_ELEMENT.SPAN} fontWeight={400} fontSize={12} color="#aaa">
                  de limprimerie depuis les années 1500, quand un peintre anony puis les années 1
                </Text>
                <Input.TextArea
                  onChange={(e) => this.props.onInputChange('description', e.target.value)}
                  value={this.props.bookformpage.description}
                  rows={4}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    );
  }
}

BookFormPage.propTypes = {
  onInputChange: PropTypes.func,
  bookformpage: PropTypes.object,
  match: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  bookformpage: makeSelectBookFormPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    onInputChange: (k, v) => dispatch(ActionsCreator.changeInput(k, v)),
    onSubmit: () => console.log('submit form'), // dispatch(insertBook()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'bookFormPage', reducer });
const withSaga = injectSaga({ key: 'bookFormPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(BookFormPage);
