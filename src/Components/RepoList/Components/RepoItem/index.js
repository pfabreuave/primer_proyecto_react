import React from "react";

const RepoItem = ({ repo }) => (
  <a
    href={repo.html_url}
    key={repo.id}
    className="card" 
  >
    <span>{repo.name}</span>
  </a>
);

export default RepoItem;
