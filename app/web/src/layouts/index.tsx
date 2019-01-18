import React from 'react';
import styles from './index.less';
import { Layout } from 'antd';

export type BasicLayoutComponent<P> = React.SFC<P>;

export interface BasicLayoutProps extends React.Props<any> {
  history?: History;
  location?: Location;
}

const { Content, Footer } = Layout;

const BasicLayout: BasicLayoutComponent<BasicLayoutProps> = props => {
  return (
    <Layout className={styles.layout}>
      <Content className={styles.content}>{props.children}</Content>
      <Footer className={styles.footer}>
        <div className="container">
          <p className={styles.copyright}>🍭 .</p>
        </div>
      </Footer>
    </Layout>
  );
};

export default BasicLayout;
