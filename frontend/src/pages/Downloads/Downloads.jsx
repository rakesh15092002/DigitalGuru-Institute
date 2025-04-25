import React from "react";
import "./Downloads.css";

const Downloads = () => {
  const notes = [
    { title: "DCA Notes", desc: "Download DCA notes ", img: "https://via.placeholder.com/150" },
    { title: "Python Notes", desc: "Download Python notes ", img: "https://via.placeholder.com/150" },
    { title: "Java Notes", desc: "Download Java notes ", img: "https://via.placeholder.com/150" },
    { title: "C++ Notes", desc: "Download C++ notes ", img: "https://via.placeholder.com/150" },
    { title: "DCA Notes", desc: "Download DCA notes ", img: "https://via.placeholder.com/150" },
    { title: "Python Notes", desc: "Download Python notes ", img: "https://via.placeholder.com/150" },
    { title: "Java Notes", desc: "Download Java notes ", img: "https://via.placeholder.com/150" },
    { title: "C++ Notes", desc: "Download C++ notes ", img: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="material-section">
      <div className="material-title-items">
        {["Notes", "PYQ", "E-Books", "Assignments"].map((title, index) => (
          <div className="material-title-item" key={index}>
            <section>{title}</section>
          </div>
        ))}
      </div>

      <div className="download-material">
        <div className="material-heading">
          <h1>Download your notes</h1>
        </div>
        <div className="download-material-items">
          {notes.map((item, index) => (
            <div className="download-material-item" key={index}>
              <div className="download-material-item-img">
                <img src={item.img}  />
              </div>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <button>Download</button>
            </div>
          ))}
        </div>
      </div>


      <div className="download-material">
        <div className="material-heading">
          <h1>Download your PYQ</h1>
        </div>
        <div className="download-material-items">
          {notes.map((item, index) => (
            <div className="download-material-item" key={index}>
              <div className="download-material-item-img">
                <img src={item.img}  />
              </div>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <button>Download</button>
            </div>
          ))}
        </div>
      </div>

      <div className="download-material">
        <div className="material-heading">
          <h1>Download your E-Books</h1>
        </div>
        <div className="download-material-items">
          {notes.map((item, index) => (
            <div className="download-material-item" key={index}>
              <div className="download-material-item-img">
                <img src={item.img}  />
              </div>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <button>Download</button>
            </div>
          ))}
        </div>

      </div>
      <div className="download-material">
        <div className="material-heading">
          <h1>Download your Assignment</h1>
        </div>
        <div className="download-material-items">
          {notes.map((item, index) => (
            <div className="download-material-item" key={index}>
              <div className="download-material-item-img">
                <img src={item.img}  />
              </div>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <button>Download</button>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default Downloads;
