import React from "react";

const MernVid = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark p-4">
        <div className="conatiner-fluid">
          <a href="/">Mern</a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-5 bg-primary">
            <div className="card">
              <div className="card-body">
                <form action="">
                  <div className="row">
                    <div className="form-control">
                      <input
                        type="text"
                        placeholder="task title"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-control">
                      <textarea
                        className="form-control border-end"
                        placeholder="Task Description"
                      ></textarea>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-7 bg-warning">7 columnas</div>
        </div>
      </div>
    </div>
  );
};

export default MernVid;
