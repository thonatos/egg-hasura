import React, { Component } from 'react';
import styles from './index.less';
import { Button } from 'antd';

export default class Index extends Component {
  render() {
    return (
      <div className="container">
        <Button type="primary">Press Me</Button>
      </div>
    );
  }
}
