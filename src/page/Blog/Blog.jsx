import useTitle from "../Hook/useTitle";

const Blog = () => {
  useTitle("Blog");

  return (
    <div className="my-container">
      <h2 className="text-center font-bold md:text-4xl text-3xl mb-5 section-header ">
        Question And Answer
      </h2>

      <div className="space-y-6">
        <div>
          <p className="font-bold">
            1.What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </p>

          <div className="ml-3">
            <div>
              <span className="font-semibold ">Access Token:</span> An access
              token is a credential used for authentication and authorization.
              It is a short-lived token that grants access to protected
              resources. It is typically included in requests to the server to
              access resources, and the server validates the access token before
              granting access.
            </div>
            <div>
              <span className="font-semibold ">Refresh Token:</span>A refresh
              token is a long-lived token used to obtain a new access token. It
              is used when an access token expires or becomes invalid. The
              client sends the refresh token to the server to request a new
              access token. The server verifies the refresh token and issues a
              new access token if valid.
            </div>
            <div>
              <span className="font-semibold ">Store:</span>
              <span>
                Access tokens are short-lived and stored in memory or secure
                storage provided by the client-side framework or platform.For
                web applications, consider storing the access token in an
                HTTP-only cookie or secure local storage.
              </span>
              <br />
              <span>
                Refresh Token:Refresh tokens are long-lived and require more
                secure storage.You can store the refresh token in an HTTP-only
                cookie.Another option is to store the refresh token in secure
                local storage.
              </span>
            </div>
          </div>
        </div>

        <div>
          <p className="font-bold">2.Compare SQL and NoSQL databases?</p>

          <div className="overflow-x-auto">
            <table className="table w-full ">
              <thead>
                <tr>
                  <th>Aspect</th>
                  <th>SQL Databases </th>
                  <th>NoSQL Databases</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Data Model </td>
                  <td>Follows a rigid, predefined schema </td>
                  <td>Flexible, schema-less data model</td>
                </tr>
                <tr>
                  <td>Structure</td>
                  <td>Tables with rows and columns </td>
                  <td>Key-value pairs, documents, column-family, graphs</td>
                </tr>
                <tr>
                  <td>Query Language </td>
                  <td>SQL (Structured Query Language) </td>
                  <td>Database-specific query languages or APIs</td>
                </tr>
                <tr>
                  <td>Scalability</td>
                  <td>
                    Vertical scaling (increasing hardware resources of a single
                    server){" "}
                  </td>
                  <td>
                    Horizontal scaling (distributed across multiple servers or
                    clusters)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <p className="font-bold">3.What is express js?</p>
          <p className="ml-3 mt-2">
            Express.js is a popular and widely used web application framework
            for Node.js. It provides a simple, minimalistic, and flexible set of
            features for building web applications and APIs. Express.js is
            designed to be unopinionated, allowing developers to have more
            control and flexibility over their application's structure and
            functionality.
          </p>

          <p className="font-bold">4. What is Nest JS?</p>
          <p className="ml-3 mt-2">
            NestJS is a progressive, modular, and TypeScript-based web
            application framework built on top of Node.js. It is designed to
            provide a structured and scalable architecture for building
            server-side applications, including web servers, RESTful APIs,
            microservices, and more. NestJS combines elements from different
            frameworks and libraries, such as Express.js, TypeScript, and
            dependency injection, to offer a cohesive and efficient development
            experience.
          </p>
        </div>

        <div>
          <p className="font-bold">
            5.What is MongoDB aggregate and how does it work?
          </p>
          <p className="ml-3 mt-2">
            MongoDB{"'"}s aggregate is a powerful feature that allows you to
            perform advanced data processing and analysis operations on your
            collections. It provides a flexible and efficient way to combine,
            transform, and manipulate data using a pipeline of stages.
            <br /> The aggregate operation works by processing documents through
            a series of pipeline stages. Each stage performs a specific
            operation on the input documents and passes the results to the next
            stage. The output of the final stage is the result of the aggregate
            operation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
