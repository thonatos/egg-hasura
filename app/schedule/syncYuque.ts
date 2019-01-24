import { Context, Subscription } from 'egg';

import axios from 'axios';

const parse = posts => {
  const objects = posts.map(
    ({ title, description, slug, status, cover, id: post_id, created_at: created, custom_description: content }) => {
      return {
        slug,
        title,
        description,
        cover,
        created,
        content,
        status,
        post_id,
        user_id: 7,
      };
    },
  );

  const mutation = `mutation upsert_posts($objects: [posts_insert_input!]!) {
    insert_posts(objects: $objects, on_conflict: {constraint: posts_slug_key, update_columns: [slug, title, description, cover, created, content, status]}) {
      returning {
        id
        title
      }
    }
  }`;

  return {
    operationName: 'upsert_posts',
    query: mutation,
    variables: {
      objects,
    },
  };
};

export default class syncYuqe extends Subscription {
  static get schedule() {
    return {
      type: 'worker',
      interval: '10m',
      immediate: true,
      // disable: true,
    };
  }

  // subscribe 是真正定时任务执行时被运行的函数
  async subscribe(ctx: Context) {
    console.log('#subscribe', Date.now());

    try {
      const { data: posts } = await axios.get('https://www.yuque.com/api/v2/repos/egg/nodejs/docs');
      const { status } = await axios.post('https://hasura.implements.io/v1alpha1/graphql', parse(posts.data), {
        headers: {
          'Content-Type': 'application/json',
          'X-Hasura-Access-Key': ctx.app.config.hasura_ak,
        },
      });

      console.log(status);
    } catch (error) {
      console.log(error.response);
    }
  }
}
