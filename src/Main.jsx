import React from 'react';
import { AuthContext } from './AuthContext';

import Card from './Commen/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends React.Component {
    static contextType = AuthContext;
    constructor(props) {
        super(props);
        this.state = {
            dataList: [],
            currentPage: 1,
            itemsPerPage: 6
        };
        this.handlePrevious = this.handlePrevious.bind(this);
        this.handleNext = this.handleNext.bind(this);

    }
    componentDidMount() {
        let contextData = this.context;
        console.log(contextData);
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => {
                this.setState({ dataList: json });
            }
            );
    }
    handlePrevious = () => {
        if (this.state.currentPage > 1) {
            this.setState(prevState => ({
                currentPage: prevState.currentPage - 1
            }));
        }
    }

    handleNext = () => {
        const { dataList, currentPage, itemsPerPage } = this.state;
        const totalPages = Math.ceil(dataList.length / itemsPerPage);

        if (currentPage < totalPages) {
            this.setState(prevState => ({
                currentPage: prevState.currentPage + 1
            }));
        }
    }

    handleLogout = () => {
        const contextData = this.context;
        if (contextData.isLoggedIn) {
            contextData.logout();
            window.location.pathname = "/login";
        }
    }

    render() {
        const { isLoggedIn } = this.context;
        const { dataList, currentPage, itemsPerPage } = this.state;
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = dataList.slice(indexOfFirstItem, indexOfLastItem);

        return (
            <>
                <div className='container d-flex justify-content-end'>
                    <button className='btn btn-primary m-5' onClick={this.handleLogout}>Logout</button>
                </div>
                {isLoggedIn ? (
                    <div className="container-fluid p-5">
                        <div className="row row-gap-5">
                            {currentItems.map((item) => (
                                <div className="col-sm-6 col-md-4 d-flex justify-content-center" key={item.id}>
                                    <Card title={item.title} body={item.body}></Card>
                                </div>
                            ))}
                        </div>
                        <div className="pagination d-flex justify-content-end py-5 pe-5">
                            <button className={`btn mx-2 ${this.state.currentPage === 1 ? " disabled btn-secondary" : "btn-primary"}`} onClick={this.handlePrevious}>Previous</button>
                            <button className={`btn mx-2 ${this.state.currentPage == Math.ceil(this.state.dataList.length / this.state.itemsPerPage) ? " disabled btn-secondary" : "btn-primary"}`} onClick={this.handleNext}>Next</button>
                        </div>
                    </div>
                ) : (
                    <h2 className='text-center p-5'>Please login</h2>
                )}
            </>
        );

    }
}

export default Main;
