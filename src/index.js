// 1.) Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2.) Get reference to the div with the ID root
const el = document.getElementById('root');

// 3.) Tell React to control of the element
const root = ReactDOM.createRoot(el);

// 4.) Create a Component
function App() {

  return (
    <div className="bg-dark p-2 text-center">
      <h1 className="text-light">HTML vs JSX</h1>

      <div className="container px-4 text-center">
        <div className="row">
          <div className="col bg-primary text-light">
            <div className="p-3">
              <h2>HTML</h2>

              <h5>Prop names are lower case</h5>
              <p>autofocus</p>
              <pre>
                <code>
                  {`<textarea autofocus="true" />`}
                </code>
              </pre>

              <textarea autoFocus='true'>
              </textarea>
              <hr></hr>

              <h5>Number attributes</h5>
              <p>"55"</p>
              <hr></hr>

              <h5>Boolean</h5>
              <p>Booleans that are true can just be listed with the property name.</p>
              <pre>
                <code>
                  {`<textarea autofocus/>`}
                </code>
              </pre>
              <p>Some developers like to write the parentheses around true to make code more consistent.</p>
              <p>"true"</p>
              <p>"false"</p>
              <hr></hr>

              <h5>Class attribute</h5>
              <p>class</p>
              <hr></hr>

              <h5>In-line styles are</h5>
              <p>strings</p>
              <pre>
                <code>
                  {`<a style="color:'blue'" />`}
                </code>
              </pre>
            </div>
          </div>

          <div className="col bg-warning text-dark">
            <div className="p-3">
              <h2>JSX</h2>

              <h5>Prop names are camelCase</h5>
              <p>autoFocus</p>
              <pre>
                <code>
                  {`<textarea autoFocus='true' />`}
                </code>
              </pre>
              <textarea autoFocus='true' />
              <hr></hr>

              <h5>Number attributes</h5>
              <p>&#123;55&#125;</p>
              <hr></hr>

              <h5>Boolean</h5>
              <p>Booleans that are true can just be listed with the property name.</p>
              <pre>
                <code>
                  {`<textarea autoFocus/>`}
                </code>
              </pre>
              <p>Some developers like to write the parentheses around true to make code more consistent.</p>
              <p>'true'</p>
              <p>&#123;False&#125;</p>
              <hr></hr>

              <h5>Class attribute</h5>
              <p>className</p>
              <hr></hr>

              <h5>In-line styles are</h5>
              <p>objects</p>
              <pre>
                <code>
                  {`<div style={{color:'blue'}} />`}
                </code>
              </pre>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 5.) Show Component on the screen/viewport
root.render(<App />);

