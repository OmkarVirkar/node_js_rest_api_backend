let chai = require("chai");
let chaiHTTP = require("chai-http");
var should = require("should");
let server = require("../app");

chai.use(chaiHTTP);

describe("Test API", () => {
  /**
   * Test the GET / router
   */
  describe("Test the GET / Route", () => {
    it("Should return home text", (done) => {
      chai
        .request(server)
        .get("/")
        .end((err, response) => {
          response.status.should.be.equal(200);
          done();
        });
    });
  });

  /**
   * Test Get /find router
   */
  describe("Test the GET /find Route", () => {
    it("/find Should return Status = 200", (done) => {
      chai
        .request(server)
        .get("/find")
        .end((err, response) => {
          response.status.should.be.equal(200);
          done();
        });
    });
  });

  /**
   * Test Get /insert router
   */
  describe("Test the GET /insert Route", () => {
    it("Insert operation should return Status = 200", (done) => {
      chai
        .request(server)
        .post("/insert/insertUserData/")
        .end((err, response) => {
          response.status.should.be.equal(200);
          done();
        });
    });
  });

  /**
   * Test Get /remove router
   */
  describe("Test the GET /remove Route", () => {
    it("Remove operation should return Status = 200", (done) => {
      chai
        .request(server)
        .post("/remove/removeUserData/")
        .end((err, response) => {
          response.status.should.be.equal(200);
          done();
        });
    });
  });

  /**
   * Test Get /update router
   */
  describe("Test the GET /update Route", () => {
    it("Update operation should return Status = 200", (done) => {
      chai
        .request(server)
        .post("/update/increment_age/")
        .end((err, response) => {
          response.status.should.be.equal(200);
          done();
        });
    });
  });
});
