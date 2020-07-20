import React from 'react';
import styles from './matched-providers.module.css';
import MatchedProvidersRow from './matched-providers-row';

function MatchedProviders() {
  const numbers = [1, 2, 3, 4, 5];
  const rows = numbers.map((number) =>
    <MatchedProvidersRow key={number.toString()}/>
  );

  return (
    <div className={styles['matched-providers']}>
      <h4>Matched providers</h4>
      <table>
        <thead>
          <tr><td>Type</td><td>Name</td><td>Email</td><td>Phone</td><td>ID</td><td>Status</td><td></td></tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
}

export default MatchedProviders;
