import React, { useState, useTransition } from 'react';

const IndexTransition = () => {
  const [search, setSearch] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleSearch = (e) => {
    const value = e.target.value;
    startTransition(() => {
      setSearch(value);
    });
  };

  return (
    <div>
      <h1>This is useTransition hook</h1>
      <input type="text" value={search} onChange={handleSearch} />
      {isPending && <p>Updating...</p>}
    </div>
  );
};

export default IndexTransition;
