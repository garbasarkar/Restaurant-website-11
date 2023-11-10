const BlogPage = () => {
  return (
    <div className="mb-28 max-w-6xl mx-auto mt-10 px-1 md:px-0">
      <ul>
        <li className="mt-5 text-lg font-semibold">
          What is one way data binding?
        </li>
        <h4>
          (Ans): One way data binding is angular is a way to bind data from the
          component to the view (DOM) or vice versa from view to the component.{" "}
        </h4>
      </ul>

      <ul>
        <li className="mt-5 text-lg font-semibold">What is npm in node.js?</li>
        <h4>
          {" "}
          (Ans): NPM or Node package Manage - is the default package manager for
          javaScript's runtime Node.js.
        </h4>
      </ul>

      <ul>
        <li className="mt-5 text-lg font-semibold">
          Different between mongodb database vs mySQL database?
        </li>
        <h4>
          {" "}
          (Ans): MYSQL is relational database management system that stores data
          in a stuctured tabular format.
        </h4>
        <h4>
          MongoDB stores data as JSON documents in a more flexible formate.
        </h4>
      </ul>
    </div>
  );
};

export default BlogPage;
