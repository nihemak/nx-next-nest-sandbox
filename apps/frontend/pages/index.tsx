import React, { useEffect, useState, useCallback } from 'react';

import type { CommonData } from '@nx-next-nest-study/shared-types';

import styles from './index.module.css';

export function Index({
  q,
  data: initialData,
}: {
  q: string;
  data: CommonData[];
}) {
  const [search, setSearch] = useState(q);
  const [data, setData] = useState<CommonData[]>(initialData);

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

export async function getServerSideProps(context) {
  let data: CommonData[] = []
  if (context.query.q) {
    const response = await fetch(`http://localhost:3333/api/search?q=${context.query.q}`);
    data = await response.json();
  }
  return {
    props: {
      q: context.query.q ?? '',
      data,
    },
  }
}

export default Index;
