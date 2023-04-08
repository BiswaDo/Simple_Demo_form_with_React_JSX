import Nav from "./Nav";
import Form from "./Form";

function app() {
  return (
    <div className="box">
      <Nav />
      <div className="mid-part">
        <div className="contact">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default app;
