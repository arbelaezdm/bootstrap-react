import React from "react";

const FormControl = () => {
  return (
    <>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Example textarea
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>

        <input
          class="form-control form-control-lg"
          type="text"
          placeholder=".form-control-lg"
          aria-label=".form-control-lg example"
        />
        <input
          class="form-control"
          type="text"
          placeholder="Default input"
          aria-label="default input example"
        />
        <input
          class="form-control form-control-sm"
          type="text"
          placeholder=".form-control-sm"
          aria-label=".form-control-sm example"
        />

        <input
          class="form-control"
          type="text"
          placeholder="Disabled input"
          aria-label="Disabled input example"
          disabled
        />
        <input
          class="form-control"
          type="text"
          value="Disabled readonly input"
          aria-label="Disabled input example"
          disabled
          readonly
        />

        <input
          class="form-control"
          type="text"
          value="Readonly input here..."
          aria-label="readonly input example"
          readonly
        />

        <hr />

        <form class="row g-3">
          <div class="col-auto">
            <label for="staticEmail2" class="visually-hidden">
              Email
            </label>
            <input
              type="text"
              readonly
              class="form-control-plaintext"
              id="staticEmail2"
              value="email@example.com"
            />
          </div>
          <div class="col-auto">
            <label for="inputPassword2" class="visually-hidden">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="inputPassword2"
              placeholder="Password"
            />
          </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-primary mb-3">
              Confirm identity
            </button>
          </div>
        </form>

        <hr />

        <div class="mb-3">
          <label for="formFile" class="form-label">
            Default file input example
          </label>
          <input class="form-control" type="file" id="formFile" />
        </div>
        <div class="mb-3">
          <label for="formFileMultiple" class="form-label">
            Multiple files input example
          </label>
          <input
            class="form-control"
            type="file"
            id="formFileMultiple"
            multiple
          />
        </div>
        <div class="mb-3">
          <label for="formFileDisabled" class="form-label">
            Disabled file input example
          </label>
          <input
            class="form-control"
            type="file"
            id="formFileDisabled"
            disabled
          />
        </div>
        <div class="mb-3">
          <label for="formFileSm" class="form-label">
            Small file input example
          </label>
          <input
            class="form-control form-control-sm"
            id="formFileSm"
            type="file"
          />
        </div>
        <div>
          <label for="formFileLg" class="form-label">
            Large file input example
          </label>
          <input
            class="form-control form-control-lg"
            id="formFileLg"
            type="file"
          />
        </div>

        <hr />

        <label for="exampleColorInput" class="form-label">Color picker</label>
<input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color"/>
      </div>
    </>
  );
};

export default FormControl;
