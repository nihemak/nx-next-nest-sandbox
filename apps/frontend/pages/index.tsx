import React, { useEffect, useState, useCallback } from 'react';

import type { CommonData } from '@nx-next-nest-study/shared-types';

import styles from './index.module.css';

export function Index() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState<CommonData[]>([]);

  useEffect(() => {
    fetch(`http://localhost:3333/api/search?q=${search}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [search]);

  const onSetSearch = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }, []);

  return (
    <div className={styles.page}>
      <input
        value={search}
        onChange={onSetSearch}
      />
      <ul>
        {data.map(({ name, id }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Index;
