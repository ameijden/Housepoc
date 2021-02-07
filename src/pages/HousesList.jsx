import React, { Component } from 'react'
//import ReactTable from 'react-table' //
import api from '../api'

import styled from 'styled-components'

//import 'react-table/react-table.css' : not supported only on v6// 


import ReactTable from "react-table-6";  
import "react-table-6/react-table.css" 

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class HousesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            houses: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllHouses().then(houses => {
            this.setState({
                houses: houses.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { houses, isLoading } = this.state
        console.log('TCL: HousesList -> render -> houses', houses)

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Streetname',
                accessor: 'streetname',
                filterable: true,
            },
            {
                Header: 'Price',
                accessor: 'price',
                filterable: true,
            },
            {
                Header: 'City',
                accessor: 'city',
                filterable: true,
            },
        ]

        let showTable = true
        if (!houses.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={houses}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default HousesList
