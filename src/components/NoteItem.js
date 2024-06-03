// src/components/NoteItem.js
import React from 'react';
import { List } from 'antd';

const NoteItem = ({ note }) => (
  <List.Item>
    <a href={`#note-${note.id}`}>{note.text}</a>
  </List.Item>
);

export default NoteItem;
