import React from "react";
import imagenLogo from "../assets/Logo-dimensiones.png";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div className="card rounded-0 bg-secondary">
        <div className="card-header head-card-bg-rainbow">
          <h6 className="font-weight-bold mb-0">Recopilacion de Usuarios</h6>
        </div>
        {/* <Bar options={options} data={data} /> */}
        {/* --------------------------------------------------------- */}
        <div className="card-body">
          {/* <div className="card-title">Titulo</div> */}

          <div className="col">
            <ul className="card-group justify-content-center">
              {posts.map((post) => (
                <div className="cuadro-imagen bg-primary m-4">
                  <img src={imagenLogo} alt="" className="card-img-top" />
                  <div className="">
                    <li key={post.id} className="list-group-item">
                      {post.title}
                    </li>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
