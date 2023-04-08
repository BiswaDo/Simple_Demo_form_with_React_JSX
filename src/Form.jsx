function form() {
  return (
    <form className="contact_us" name="contact_us" action="/contact">
      <label htmlFor="contact_us">
        <input type="text" placeholder="Enter your name"></input>
        <br></br>

        <input type="email" placeholder="Enter your email id"></input>
        <br></br>

        <textarea
          id="query_box"
          name="text_box"
          rows="10"
          cols="41"
          placeholder="Enter your query"
        ></textarea>
      </label>
      <br></br>
      <button type="submit">submit</button>
    </form>
  );
}

export default form;
