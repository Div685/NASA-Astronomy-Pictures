import React from 'react';
import PropTypes from 'prop-types';

function PhotoAPODList({ photosList }) {
  return (
    <div>
      <table>
        <tr>
          <th>Title</th>
          <th>url</th>
        </tr>
        <tbody>
          { photosList && photosList.length
            ? photosList.map((item) => (
              <Photos key={item.id} photo={item} />
            ))
            : 'No Photos! '}
        </tbody>
      </table>
    </div>
  );
}

export default PhotoAPODList;

PhotoAPODList.propType = {
  photosList: PropTypes.arrayOf(PropTypes.shape({
  })).isRequired,
};
