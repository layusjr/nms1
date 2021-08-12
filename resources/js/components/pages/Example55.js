
import { Container,TableContainer,Paper, } from '@material-ui/core';
import React, {useEffect,useState} from 'react';
import ReactDOM from 'react-dom';

function Example55() {

    const [state, setData] = useState([]);
    
    const fetchData = async () => {
        fetch('/posts/index')
        .then(response => response.json())
        .then(data => {
            setData(data.blogs_data)
        });
    };

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <Container>
             <TableContainer component={Paper}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">User List : CodeCheef</div>
                        <div className="card-body">
                          <table>
                              <thead>
                                <tr>
                                    <th>1</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                              </thead>
                              <tbody>
                                  {
                                      state.length != 0 ? 
                                      state.map((blog) => {
                                          return (
                                            <tr key={blog?.id}>
                                                <td>{blog?.blogpost}</td>
                                                <td>{blog?.title}</td>
                                                <td>{blog?.updated_at}</td>
                                            </tr>
                                          );
                                      })
                                      :
                                       "Loading..."
                                  }
                              {/* {   
                                state.blogs.blogs_data = "" ? 
                                state.blogs.blogs_data.map((blog) => (
                                            <tr key={blog?.id}>
                                                <td>{blog?.id}</td>
                                                <td>{blog?.name}</td>
                                                <td>{blog?.email}</td>
                                            </tr>
                                    )) 
                              } */}
                              </tbody>
                          </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </TableContainer>
        </Container>
    );
}


export default Example55;

if (document.getElementById('example55')) {
    ReactDOM.render(<Example55 />, document.getElementById('example55'));
}
 

//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch