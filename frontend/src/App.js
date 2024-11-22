import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Dropdown, Button, Table, Pagination, InputGroup, FormControl } from 'react-bootstrap';
import { fetchTransactions, fetchStatistics, fetchBarChartData, fetchPieChartData } from '.src/api/api';
import TransactionStatistics from './components/TransactionStatistics';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import TransactionTable from './components/TransactionTable';

const App = () => {
  const [month, setMonth] = useState('March');
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [statistics, setStatistics] = useState({});
  const [barChartData, setBarChartData] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [month, search, page]);

  const fetchData = async () => {
    const transactionData = await fetchTransactions(month, search, page);
    setTransactions(transactionData.data);
    setStatistics(await fetchStatistics(month));
    setBarChartData(await fetchBarChartData(month));
    setPieChartData(await fetchPieChartData(month));
  };

  const handleMonthChange = (selectedMonth) => {
    setMonth(selectedMonth);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Transaction Dashboard</h1>
        </Col>
      </Row>

      {/* Month Selector */}
      <Row>
        <Col>
          <Dropdown onSelect={handleMonthChange}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {month}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month) => (
                <Dropdown.Item key={month} eventKey={month}>
                  {month}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>

      {/* Transaction Statistics */}
      <TransactionStatistics statistics={statistics} />

      {/* Transaction Table */}
      <TransactionTable transactions={transactions} search={search} onSearchChange={handleSearchChange} />

      {/* Pagination */}
      <Pagination>
        <Pagination.Prev onClick={() => handlePageChange(page - 1)} disabled={page === 1} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={() => handlePageChange(page + 1)} />
      </Pagination>

      {/* Bar Chart */}
      <BarChart data={barChartData} />

      {/* Pie Chart */}
      <PieChart data={pieChartData} />
    </Container>
  );
};

export default App;
