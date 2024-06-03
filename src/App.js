import React, { useState, useEffect } from 'react';
import { Layout, Menu, Pagination } from 'antd';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import { saveNotes, getNotes } from './utils/localStorage';
import 'antd/dist/reset.css';
import './assets/styles/App.css';

const { Header, Content, Footer } = Layout;

const App = () => {
  const [notes, setNotes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(5);

  useEffect(() => {
    const savedNotes = getNotes();
    setNotes(savedNotes);
  }, []);

  const addNote = (note) => {
    const newNotes = [...notes, { text: note, id: Date.now() }];
    setNotes(newNotes);
    saveNotes(newNotes);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastNote = currentPage * pageSize;
  const indexOfFirstNote = indexOfLastNote - pageSize;
  const currentNotes = notes.slice(indexOfFirstNote, indexOfLastNote);

  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">Notes</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <NoteForm addNote={addNote} />
          <NoteList notes={currentNotes} />
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={notes.length}
            onChange={handlePageChange}
            style={{ marginTop: 20 }}
          />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Note-Taking App ©2024</Footer>
    </Layout>
  );
};

export default App;
