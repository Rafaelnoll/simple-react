import P from "prop-types";
import { PostCard } from "../PostCard";

import "./styles.css";

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((post) => {
      return <PostCard key={post.id} title={post.title} cover={post.cover} body={post.body} />;
    })}
  </div>
);

Posts.defaultPorps = {
  posts: [],
};

Posts.propTypes = {
  posts: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      cover: P.string.isRequired,
      body: P.string.isRequired,
    }),
  ),
};
