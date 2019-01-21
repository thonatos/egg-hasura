import React, { Component } from 'react';
import styles from './index.less';
import { Button } from 'antd';

// import Link from 'umi/link';
// <Link to="/about">go to /about</Link>
export default class Index extends Component {
  render() {
    return (
      <div className="container">
        <div className={styles.home}>
          <Button type="primary">Press Me</Button>
        </div>
      </div>
    );
  }
}
