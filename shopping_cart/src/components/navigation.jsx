import { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import logo from "../assets/logo_white.png";

function Navigation ({ categories, onSearchChange, onCategorySelect }) {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearchChange(searchText);
  };

  const handleCategorySelect = (categoryId) => {
    onCategorySelect(categoryId);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand><img src={logo} alt="Boutique" width={270} height={40} /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#" active={selectedCategory === ''} onClick={() => {
            setSelectedCategory('');
            handleCategorySelect(0);
          }}>Todos</Nav.Link>
          {categories.map((category, index) => (
            <Nav.Link href="#" active={selectedCategory === category.category} onClick={() => {
              setSelectedCategory(category.category);
              handleCategorySelect(category.id);
            }} key={index}>{category.category}</Nav.Link>
          ))}
        </Nav>
        <Form onSubmit={handleSearch} className="d-flex">
          <FormControl
            type="search"
            placeholder="Buscar"
            className="mr-2"
            aria-label="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button variant="outline-success">Buscar</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;