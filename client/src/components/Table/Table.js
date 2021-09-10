import {React, useState,useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import axios from "axios";
import './Table.css';

function TableComponent() {
    const [emails, setEmails] = useState([])

    const FetchAllEmails = async() => {
    const result = await axios.get('http://localhost:8000/auth/fetchedEmails')
      setEmails(result?.data?.response[0]);
    }

    useEffect(() => {
        FetchAllEmails();
    }, [])

    return (
        <Table className="table">
          <Thead>
            <Tr>
              <Th className="heading">UserId</Th>
              <Th className="heading">Email Address</Th>
            </Tr>
          </Thead>
              <Tbody>
              {emails.map((email, index) => {
                return (
                <Tr key={index}>
                  <Td>{email.id}</Td>
                  <Td>{email.email}</Td>
                </Tr>
                )
              })}
            </Tbody>
        </Table>
      );
}

export default TableComponent