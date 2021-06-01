import React, { Component } from "react";
import VariaMosLogo from "../../Addons/images/VariaMosLogo.png";
import ProjectService from "../../Application/Project/ProjectService";

interface Props {
  projectService: ProjectService;
}
interface State {}

class navBar extends Component<Props, State> {
  state = {};

  constructor(props: any) {
    super(props);

    this.exportProject = this.exportProject.bind(this);
  }

  exportProject() {
    this.props.projectService.exportProject();
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light p-2 shadow-sm bg-body rounded">
          <div className="container-fluid">
            <a
              className="navbar-brand p-1"
              href="https://variamos.com/home/variamos-web/"
              target="_blanck"
            >
              <img
                src={VariaMosLogo}
                alt=""
                width="240"
                height="48"
                className="d-inline-block align-top"
              />
            </a>
            <div className="row align-items-center">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a
                    className="nav-bar-variamos"
                    href="https://variamos.com/home/variamos-web/"
                    target="_blanck"
                  >
                    Home
                  </a>
                </li>
                <li className="list-inline-item">
                  <button
                    type="button"
                    className="nav-bar-variamos"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    id="projectManagement"
                  >
                    Project Management
                  </button>
                </li>
                <li className="list-inline-item">
                  <a
                    className="nav-bar-variamos"
                    href="https://github.com/VariaMosORG/VariaMos/wiki"
                    target="_blanck"
                  >
                    Docs
                  </a>
                </li>
                <li className="list-inline-item">
                  <button
                    type="button"
                    className="nav-bar-variamos"
                    id="exportProject"
                    onClick={this.exportProject}
                  >
                    Export Project
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default navBar;
