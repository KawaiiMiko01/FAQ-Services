import React from "react";

export default function Cards() {
  return (
    <main>
      <div class="row" style={{ paddingTop: "50px" }}>
        <div class="col-sm-6 mb-3 mb-sm-0">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">We're free</h5>
              <p class="card-text">
                We spent thousands of hours creating on algorithm that does this
                for you in seconds. We collect a small fee from the professional
                after they meet your
              </p>
              <a href="#" class="btn btn-primary">
                check
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">100% Secured</h5>
              <p class="card-text">
                We proavtive steps to make sure your information and
                transactions are secure
              </p>
              <a href="#" class="btn btn-primary">
                check
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="row" style={{ paddingTop: "50px", marginLeft: "500px" }}>
        <div class="col-sm-6 mb-3 mb-sm-0">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Rewards</h5>
              <p class="card-text">
                The best credit after some tantailzing combinantions of
                promotions and prizes
              </p>
              <a href="#" class="btn btn-primary">
                check
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
