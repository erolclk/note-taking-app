import React from 'react';
import { List } from 'antd';
import NoteItem from './NoteItem';

const NoteList = ({ notes }) => (
  <List
    size="large"
    bordered
    dataSource={notes}
    renderItem={(item) => <NoteItem note={item} />}
    style={{ marginTop: 20 }}
  />
);

export default NoteList;
