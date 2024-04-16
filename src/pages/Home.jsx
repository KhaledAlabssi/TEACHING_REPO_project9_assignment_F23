import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">WELCOME TO TESTINATION</h1>
          <p className="py-6">
            The place you need to become a web-developer in a practical way.
          </p>
          <Link to={'/cli'}>
            <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
