import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import classNames from 'classnames';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood
          ? (
            <>
              {`${selectedGood} is selected`}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => setSelectedGood('')}
              />
            </>
          )
          : 'No goods selected'}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isSelectedGood = selectedGood === good;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={classNames(
                  {
                    'has-background-success-light': isSelectedGood,
                  },
                )}
              >

                <td>
                  <button
                    data-cy={
                      isSelectedGood
                        ? 'RemoveButton'
                        : 'AddButton'
                    }
                    type="button"
                    className={classNames(
                      'button',
                      {
                        'is-info': isSelectedGood,
                      },
                    )}
                    onClick={
                      isSelectedGood
                        ? () => setSelectedGood('')
                        : () => setSelectedGood(good)
                    }
                  >
                    {isSelectedGood
                      ? '-'
                      : '+'
                    }
                  </button>
                </td>
                <td
                  data-cy="GoodTitle"
                  className="is-vcentered"
                >
                  {good}
                </td>
              </tr>
            );
          })
          }
        </tbody>
      </table>
    </main>
  );
};
